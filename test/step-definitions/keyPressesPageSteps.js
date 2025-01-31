import { When, Then } from "@wdio/cucumber-framework";
import KeyPressPage from "../page-objects/KeyPressPage.js";
import { assert } from "chai";

Then(/^I should be on the Key Presses Page$/, async () => {
  assert.isTrue(await KeyPressPage.isPageOpened(), "Key presses page is not opened");
});

When(/^I click on input the field$/, async () => {
  await KeyPressPage.clickOnInputField();
});

When(/^I type backspace in the input field$/, async () => {
  await KeyPressPage.pressBackspaceKey();
});

Then(/^i should see "(.*)"$/, async (message) => {
  assert.strictEqual(await KeyPressPage.getMessage(), message, "Message after key press no displayed ");
});
