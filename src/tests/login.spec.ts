import { test, expect, Page } from "@playwright/test";
import Chance from "chance";
import {
  EMAIL,
  FULL_NAME,
  PASSWORD,
  LOGIN_ERROR,
} from "./constants/app.constant";
import { ToastMessagePage } from "../pages/toast-message.page";
import { SignUpFragment } from "./fragments/signup.fragment";
import { LoginFragment } from "./fragments/login.fragment";

test.describe("Login Test", () => {
  let loginFragment: LoginFragment;

  test.beforeEach(async ({ page }) => {
    loginFragment = new LoginFragment(page);
  });

  test("Verify that a new user can login to the application using valid credentials", async ({
    page,
    request,
  }) => {
    const chance = new Chance();

    const email = chance.email();
    const name = chance.name();
    const password = "Pl@aywright2024";

    const signUpFragment = new SignUpFragment(request);
    signUpFragment.signUp(email, name, password);

    loginFragment.login(email, password);

    const toastMessagePage = new ToastMessagePage(page);
    expect(await toastMessagePage.getToastMessage()).toContain(
      `Welcome ${name}`
    );
  });

  test("Verify that an existing user can login to the application using valid credentials", async ({
    page,
  }) => {
    loginFragment.login(EMAIL, PASSWORD);

    const toastMessagePage = new ToastMessagePage(page);
    expect(await toastMessagePage.getToastMessage()).toContain(
      `Welcome ${FULL_NAME}`
    );
  });

  test("Verify that a user cannot login to the application using invalid credentials", async ({
    page,
  }) => {
    loginFragment.login(EMAIL, "Invalid Password");

    const toastMessagePage = new ToastMessagePage(page);
    expect(await toastMessagePage.getToastMessage()).toContain(LOGIN_ERROR);
  });
});
