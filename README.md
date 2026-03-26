# Test Automation Framework (TAF)

## Tech Stack
- WebdriverIO
- Mocha
- Allure Reporter
- Page Object Model

## Setup

```bash
npm install
npm init -y
npm init wdio@latest(Follow to configure: https://webdriver.io/docs/gettingstarted/)
npx eslint@8 --init


### To create report:
npm install allure-commandline --save-dev
npx allure generate allure-results --clean
npx allure open