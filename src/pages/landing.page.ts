import { Page } from "@playwright/test";

export class LandingPage {
  constructor(private readonly page: Page) {}

  async clickOnLogInButton() {
    await this.page.click('//a[@href="/signin"]');
  }
}
