import type { PlaywrightTestConfig } from '@playwright/test';
import { json } from 'stream/consumers';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/calender.test.ts"],
  use:{
    headless: false,
    screenshot: "on",
    video: "on",
    launchOptions: {
      slowMo:1000
    }
  },
  retries: 0,
  reporter: [["dot"],["json",{
    outputFile: "jsonReports/jsonReport.json"
  }],["html", {
    open:"always"
  }]]
};
 
export default config;
