const loginPage = require('../pages/login.page');
const users = require('../data/users');
const inventoryPage = require('../pages/inventory.page');
const cartPage = require('../pages/cart.page');
const checkoutPage = require('../pages/checkout.page');
const overviewPage = require('../pages/checkoutOverview.page');
const PRODUCT = 'Sauce Labs Backpack';
const FIRST_NAME = 'Andrii';
const LAST_NAME = 'Suvala';
const ZIP_CODE = '79059';
const SUCCESS_MESSAGE = 'Thank you for your order!';

describe('Checkout Flow', () => {
    it('should complete checkout successfully', async () => {

    await loginPage.open();
    await loginPage.login(users[0].username, users[0].password);

    inventoryPage.addProductToCart(PRODUCT);

    inventoryPage.checkCartBadge();

    inventoryPage.goToCart();

    cartPage.checkout();

    await checkoutPage.fillForm(FIRST_NAME, LAST_NAME, ZIP_CODE);

    overviewPage.finishCheckout();

    await expect(overviewPage.successMsg).toHaveText(SUCCESS_MESSAGE);
    });
});