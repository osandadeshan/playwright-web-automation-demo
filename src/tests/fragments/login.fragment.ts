import { Page } from "@playwright/test";
import { LandingPage } from "../../pages/landing.page";
import { LoginPage } from "../../pages/login.page";
import { APPLICATION_URL } from "../constants/app.constant";

export class LoginFragment {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(email: string, password: string) {
    await this.page.goto(APPLICATION_URL);

    const landingPage = new LandingPage(this.page);
    await landingPage.clickOnLogInButton();

    const loginPage = new LoginPage(this.page);
    await loginPage.login(email, password);
  }
}
