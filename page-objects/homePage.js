import { expect } from "@playwright/test"
import { Helper } from "./helper"

export class HomePage {
    constructor(page) {
        this.page = page
        this.h = new Helper(page)

        this.linkedInButton = page.getByAltText('LinkedIn Logo')
        this.homeButton = page.getByText('home')
    }

    async goToHomePage() {
        await this.page.goto('https://carlosng07.vercel.app/')
        await this.page.waitForLoadState('domcontentloaded')
        await expect(this.page).toHaveTitle(/Carlos Ng | Portfolio/)
        await expect(this.homeButton).toBeVisible()
        await expect(this.linkedInButton).toBeVisible()
    }
}