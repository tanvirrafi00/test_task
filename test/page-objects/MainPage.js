import { Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";
import { PreciseTextLocator } from "../../framework/utils/locatorHelper.js";

class MainPage extends BasePage {
  constructor() {
    super(new Label(PreciseTextLocator(`Welcome to the-internet`), "Main Page Label"), "Main Page");
    this.hoverLink = new Label(PreciseTextLocator(`Hovers`), "Hover Link");
    this.keyPressesLink = new Label(PreciseTextLocator(`Key Presses`), "Key press link");
    this.JavaScriptLink = new Label(PreciseTextLocator(`JavaScript Alerts`), "Js Alert Link");
  }
  async clickHoverLink() {
    await this.hoverLink.click();
  }

  async clickKeyPressesLink() {
    await this.keyPressesLink.click();
  }

  async clickJsAlertLink() {
    await this.JavaScriptLink.click();
  }
}

export default new MainPage();
