import { Button, Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";
import { PreciseTextLocator } from "../../framework/utils/locatorHelper.js";

class JavaScriptAlertsPage extends BasePage {
  constructor() {
    super(new Label(PreciseTextLocator(`JavaScript Alerts`), "Js alert page Label"), "JS alerts Page");
    this.jsAlertButton = new Button(PreciseTextLocator(`Click for JS Alert`), "Js alert button");
    this.jsConfirmButton = new Button(PreciseTextLocator(`Click for JS Confirm`), "Js confirm button");
    this.jsPromptButton = new Button(PreciseTextLocator(`Click for JS Prompt`), "Js prompt button");
    this.result = new Label(`//p[@id="result"]`, "Result Label");
  }

  async clickJsAlertButton() {
    await this.jsAlertButton.click();
  }

  async clickJsConfirmButton() {
    await this.jsConfirmButton.click();
  }

  async clickJsPromptButton() {
    await this.jsPromptButton.click();
  }

  async getResultMessage() {
    return await this.result.getText();
  }
}

export default new JavaScriptAlertsPage();
