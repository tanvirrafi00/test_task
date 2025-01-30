import { Given, When } from "@wdio/cucumber-framework";
import Browser from "../../framework/browser/Browser.js";
import { mainConfig } from "../../framework/configs/main.wdio.conf.js";
import mainPage from "../page-objects/mainPage.js";

Given(/^I am on the main page$/, async () => {
  await Browser.openUrl(mainConfig.baseUrl);
  console.log("hello.................................");
  await Browser.waitForDelay(3000);
});

When(/^I click on Hovers$/, async () => {
  await mainPage.clickHoverLink();
});
