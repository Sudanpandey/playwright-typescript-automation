import type { PlaywrightTestConfig } from '@playwright/test';
import { json } from 'stream/consumers';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/login.test.ts"],
  use:{
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  retries: 2,
  reporter: [["dot"],["json",{
    outputFile: "jsonReports/jsonReport.json"
  }],["html", {
    open:"never"
  }]]
};
 
export default config;
