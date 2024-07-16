import { APIRequestContext, expect } from "@playwright/test";
import { SIGN_UP_REQUEST_ENDPOINT } from "../constants/api.constant";
import APIClient from "../../utils/api-client";
import config from "../../../playwright.config";

export class SignUpFragment {
  private apiClient: APIClient;

  constructor(request: APIRequestContext) {
    this.apiClient = new APIClient(request, config.apiBaseUrl);
  }

  async signUp(email: string, name: string, password: string) {
    const signUpResponse = await this.apiClient.post(
      SIGN_UP_REQUEST_ENDPOINT,
      {
        email: email,
        displayName: name,
        password: password,
        returnSecureToken: true,
      },
      undefined
    );

    expect(signUpResponse.status()).toBe(200);

    const responseBody = await signUpResponse.json();

    expect(responseBody.email).toBe(email);
    expect(responseBody.idToken).not.toBeNull();
    expect(responseBody.refreshToken).not.toBeNull();
    expect(responseBody.localId).not.toBeNull();
  }
}
