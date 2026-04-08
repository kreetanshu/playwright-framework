import { generate } from 'cucumber-html-reporter';

const options: {
  theme: "bootstrap" | "hierarchy" | "foundation" | "simple";
  jsonFile: string;
  output: string;
  reportSuiteAsScenarios: boolean;
  launchReport: boolean;
  metadata: {
    "App Version": string;
    "Test Environment": string;
    Browser: string;
    Platform: string;
    Executed: string;
  };
} = {
  theme: "bootstrap", // Ensure the theme is one of the allowed literal values
  jsonFile: 'reports/cucumber-report.json',
  output: 'reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    "App Version": "1.0",
    "Test Environment": "STAGING",
    "Browser": "Chrome",
    "Platform": "Windows 11",
    "Executed": "Local"
  }
};

try {
  generate(options);
  console.log('Report generated successfully at:', options.output);
} catch (error) {
  console.error('Error generating report:', error);
  process.exit(1);
}
