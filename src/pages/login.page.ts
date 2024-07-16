import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private readonly page: Page) {}

  async login(email: string, password: string) {
    await this.page.fill('input[name="email"]', email);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('//button[text()="LOGIN"]');
  }

  async getLoginError() {
    return await this.page.locator('//div[@role="alertdialog"]').textContent();
  }
}
