import { Label } from "../../framework/elements/Label.js";
import BasePage from "../../framework/page/BasePage.js";
import { PreciseTextLocator } from "../../framework/utils/locatorHelper.js";

class HoverPage extends BasePage {
  constructor() {
    super(new Label(PreciseTextLocator(`Hovers`), "Hover Page Label"), "Hover Page");

    this.userTwoProfileImage = new Label(`//div[@class="figure"][2]`, "User Two profile image");
    this.userTwoName = new Label(`//h5[contains(text(),"name: user2")]`, "User 2 name");
    this.userTwoViewProfile = new Label(`//a[@href="/users/2"]`, "user 2 profile view");
  }

  async hoverUserTwo() {
    await this.userTwoProfileImage.moveTo();
  }

  async isUserTwoNameDisplayed() {
    await this.userTwoName.state().waitForDisplayed();
    return await this.userTwoName.state().isDisplayed();
  }

  async isUserTwoViewProfileDisplayed() {
    await this.userTwoViewProfile.state().waitForDisplayed();
    return await this.userTwoViewProfile.state().isDisplayed();
  }
}

export default new HoverPage();
