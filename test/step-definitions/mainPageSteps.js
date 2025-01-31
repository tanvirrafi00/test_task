import { Given, When } from "@wdio/cucumber-framework";
import Browser from "../../framework/browser/Browser.js";
import { mainConfig } from "../../framework/configs/main.wdio.conf.js";
import MainPage from "../page-objects/MainPage.js";

Given(/^I am on the main page$/, async () => {
  await Browser.openUrl(mainConfig.baseUrl);
  console.log("hello.................................");
  await Browser.waitForDelay(3000);
});

When(/^I click on Hovers$/, async () => {
  await MainPage.clickHoverLink();
});
When(/^I click on the Key Presses link$/, async () => {
  await MainPage.clickKeyPressesLink();
});
