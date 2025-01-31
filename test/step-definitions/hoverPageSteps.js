import { When, Then } from "@wdio/cucumber-framework";
import HoverPage from "../page-objects/HoverPage.js";
import { assert } from "chai";

Then(/^I should be on hover page$/, async () => {
  assert.isTrue(await HoverPage.isPageOpened(), "Hover page is not opened");
});

When(/^I hover on user 2 profile image$/, async () => {
  await HoverPage.hoverUserTwo();
});

Then(/^I should see name and view profile$/, async () => {
  assert.isTrue(await HoverPage.isUserTwoNameDisplayed(), "user 2 name is not displayed");
  assert.isTrue(await HoverPage.isUserTwoViewProfileDisplayed(), "user 2 view profile link is not displayed");
});
