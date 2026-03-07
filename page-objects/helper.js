import { expect } from "@playwright/test"
import * as csv from '@fast-csv/parse'

export class Helper {
    constructor(page) {
        this.page = page
    }

    async pause(ms) {
        await this.page.waitForTimeout(ms) // wait for x milliseconds
    }

    async getLinkOnCSV(rowNum, header) {
        // sample:  await this.page.goto(await this.h.getLinkOnCSV([row],[headerValue]))
        let myObject = new Promise((resolve) => {
            let dataArray = []
            csv.parseFile("./test-data/linkFile.csv", { headers: true })
                .on("data", (data) => {
                dataArray.push(data)
            })
                .on("end", () => {
                resolve(dataArray)
            })
        })
        let output = await myObject
        let dataVal = output[rowNum][header]
        return dataVal
    }

    getRandomNumber(min = 1, max = 5) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    buildInternalUrls(paths) {
        const origin = new URL(this.page.url()).origin
        return paths.map((path) => `${origin}${path.startsWith('/') ? path : `/${path}`}`)
    }

    async verifyUrlsApiResponses(urls, options) {
        const timeout = options?.timeout ?? 15000
        const urlType = options?.urlType ?? 'URL'
        for (const url of urls) {
            const response = await this.page.request.get(url, { timeout })
            expect(response.status(), `Expected ${urlType} to be reachable: ${url}`).toBeGreaterThanOrEqual(200)
            expect(response.status(), `Expected ${urlType} to be reachable: ${url}`).toBeLessThan(400)
        }
    }

    async verifyInternalPathsApiResponses(paths, options) {
        const urls = this.buildInternalUrls(paths)
        await this.verifyUrlsApiResponses(urls, { timeout: options?.timeout ?? 15000, urlType: 'internal URL' })
    }
}