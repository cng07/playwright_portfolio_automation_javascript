
export class Helper {
    constructor(page) {
        this.page = page;
    }

    async pause(ms) {
        await this.page.waitForTimeout(ms); // wait for x milliseconds
    }

    async getLinkOnCSV(rowNum, header) {
        // sample:  await this.page.goto(await this.h.getLinkOnCSV([row],[headerValue]));
        let myObject = new Promise((resolve) => {
            let dataArray = [];
            csv.parseFile("./test-data/linkFile.csv", { headers: true })
                .on("data", (data) => {
                    dataArray.push(data);
                })
                .on("end", () => {
                    resolve(dataArray);
                });
        });
        let output = await myObject;
        let dataVal = output[rowNum][header];
        return dataVal;
    }

    getRandomNumber(min = 1, max = 5) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}