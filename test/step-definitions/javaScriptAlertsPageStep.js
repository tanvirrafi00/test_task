import { When, Then } from "@wdio/cucumber-framework";
import { assert } from "chai";
import JavaScriptAlertsPage from "../page-objects/JavaScriptAlertsPage.js";
import Browser from "../../framework/browser/Browser.js";

Then(/^I should java script alerts page$/, async () => {
  assert.isTrue(await JavaScriptAlertsPage.isPageOpened(), "Java script alerts page is not opened");
});

When(/^I click on JS Alert Button$/, async () => {
  await JavaScriptAlertsPage.clickJsAlertButton();
});

Then(/^Alert with "(.*)" text is shown$/, async (alertText) => {
  assert.strictEqual(await Browser.Dialog.getDialogText(), alertText, "Alert text is not matched");
});

When(/^I close the alert$/, async () => {
  await Browser.Dialog.dismissDialog();
});

When(/^I click on JS Confirm Button$/, async () => {
  await JavaScriptAlertsPage.clickJsConfirmButton();
});

Then(/^I should see  "(.*)" text is shown$/, async (AlertMessage) => {
  assert.strictEqual(await Browser.Dialog.getDialogText(), AlertMessage, "Alert message is not matched with expected message");
});

When(/^I click on the cancel option$/, async () => {
  await Browser.Dialog.dismissDialog();
});

Then(/^I should see "(.*)"$/, async (cancelMessage) => {
  assert.strictEqual(await JavaScriptAlertsPage.getResultMessage(), cancelMessage, "cancel message is not match with expected");
});

When(/^I click on Js Prompt Button$/, async () => {
  await JavaScriptAlertsPage.clickJsPromptButton();
});

Then(/^Prompt with "(.*)" text is shown$/, async (promptMessage) => {
  assert.strictEqual(await Browser.Dialog.getDialogText(), promptMessage, "Prompt text is not matched with expected result");
});

When(/^I type "(.*)"into the prompt$/, async (value) => {
  await Browser.Dialog.typeTextToDialog(value);
});

When(/^I click Ok$/, async () => {
  await Browser.Dialog.acceptDialog();
});
