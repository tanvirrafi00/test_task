import Keys from "../../framework/constants/Keys.js";
import { Input, Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";
import { PreciseTextLocator } from "../../framework/utils/locatorHelper.js";

class KeyPressPage extends BasePage {
  constructor() {
    super(new Label(PreciseTextLocator(`Key Presses`), "keypress label"), "Key presses page");

    this.inputField = new Input(`//input[@id="target"]`, "Input field");
    this.message = new Label(`//p[@id="result"]`, "Message field");
  }

  async clickOnInputField() {
    await this.inputField.click();
  }

  async pressBackspaceKey() {
    await this.inputField.typeText(Keys.BACKSPACE);
  }

  async getMessage() {
    return await this.message.getText();
  }
}

export default new KeyPressPage();
