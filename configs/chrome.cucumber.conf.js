import { downloadDir, mainConfig } from "../framework/configs/main.wdio.conf.js";

export const config = {
  ...mainConfig,
  ...{
    framework: "cucumber",
    cucumberOpts: {
      require: ["./test/step-definitions/**/*.js"],
    },
    specs: ["../test/features/**/*.feature"],
    capabilities: [
      {
        browserName: "chrome",
        maxInstances: 2,
        "goog:chromeOptions": {
          prefs: {
            "download.default_directory": downloadDir,
          },
        },
      },

      {
        browserName: "firefox",
        maxInstances: 1,
        "moz:firefoxOptions": {
          prefs: {
            "download.default_directory": downloadDir,
          },
        },
      },
    ],
  },
};
