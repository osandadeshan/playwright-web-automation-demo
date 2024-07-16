import path from "path";
import config from "../../../playwright.config";

export const APPLICATION_URL = config.appUrl;
export const API_BASE_URL = config.apiBaseUrl;

export function loadJsonFile(filename: string): any {
  return require(path.resolve(config.testDataDir, filename));
}

let testData = loadJsonFile("testdata.json");

// Test Data From JSON File
export const EMAIL = testData.email;
export const FULL_NAME = testData.fullName;
export const PASSWORD = testData.password;

// Toast Messages
export const LOGIN_ERROR =
  "Error: The password is invalid or the user does not have a password.";
