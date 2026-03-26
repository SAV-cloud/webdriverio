# Test Automation Framework (TAF)
TAF/
├─ tests/
│ ├─ login.e2e.js           # Tests for user login
│ └─ checkout.e2e.js        # Tests for product checkout flow
│
├─ pages/                   # Page Object Model
│ ├─ login.page.js          # Logic for interacting with the login form
│ ├─ inventory.page.js      # Logic for the products (inventory) page
│ ├─ cart.page.js           # Logic for the shopping cart
│ ├─ checkout.page.js       # Logic for the checkout form
│ └─ checkoutOverview.page.js # Logic for order overview and confirmation
│
├─ data/
│ └─ users.js               # Test user data (username/password)
│
├─ wdio.conf.js             # WebdriverIO configuration
├─ package.json             # NPM scripts and dependencies
└─ .gitignore               # Files ignored by Git (node_modules, allure-results)

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


To create report:
npm install allure-commandline --save-dev
npx allure generate allure-results --clean
npx allure open