import { Page } from "@playwright/test";

export class ToastMessagePage {
  constructor(private readonly page: Page) {}

  async getToastMessage() {
    return await this.page.locator('//div[@role="alertdialog"]').textContent();
  }
}
