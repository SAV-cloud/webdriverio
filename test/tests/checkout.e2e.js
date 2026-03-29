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
const FIRST_NAME_ERROR_MESSAGE = 'Error: First Name is required';
const LAST_NAME_ERROR_MESSAGE = 'Error: Last Name is required';
const POSTAL_CODE_ERROR_MESSAGE = 'Error: Postal Code is required';
const PRODUCTS_PAGE_TITLE = 'Products';
describe('Checkout Flow', () => {
    it('should complete checkout successfully', async () => {

    await loginPage.open();
    await loginPage.login(users[0].username, users[0].password);

    inventoryPage.addProductToCart(PRODUCT);

    await inventoryPage.checkCartBadge();

    inventoryPage.goToCart();

    cartPage.checkout();

    await checkoutPage.fillForm(FIRST_NAME, LAST_NAME, ZIP_CODE);

    overviewPage.finishCheckout();

    await expect(overviewPage.successMsg).toHaveText(SUCCESS_MESSAGE);
    });

    it('should show empty cart and checkout button should be disabled', async () => {

        await loginPage.open();
        await loginPage.login(users[0].username, users[0].password);

        inventoryPage.goToCart();

        await expect(cartPage.cartItems).toBeElementsArrayOfSize(0);

        await expect(cartPage.checkoutBtn).not.toBeDisabled();
    });

    it('should show error when checkout form first name are empty', async () => {

        await loginPage.open();
        await loginPage.login(users[0].username, users[0].password);

        inventoryPage.addProductToCart(PRODUCT);

        await inventoryPage.checkCartBadge();

        inventoryPage.goToCart();

        cartPage.checkout();

        await checkoutPage.fillForm('', '', '');

        await expect(checkoutPage.errorMsg).toBeDisplayed();
        await expect(checkoutPage.errorMsg).toHaveText(FIRST_NAME_ERROR_MESSAGE);
    });

    it('should show error when checkout form last name are empty', async () => {

        await loginPage.open();
        await loginPage.login(users[0].username, users[0].password);

        inventoryPage.addProductToCart(PRODUCT);

        await inventoryPage.checkCartBadge();

        inventoryPage.goToCart();

        cartPage.checkout();

        await checkoutPage.fillForm(FIRST_NAME, '', ZIP_CODE);

        await expect(checkoutPage.errorMsg).toBeDisplayed();
        await expect(checkoutPage.errorMsg).toHaveText(LAST_NAME_ERROR_MESSAGE);
    });

    it('should show error when checkout form postal code are empty', async () => {

        await loginPage.open();
        await loginPage.login(users[0].username, users[0].password);

        inventoryPage.addProductToCart(PRODUCT);

        await inventoryPage.checkCartBadge();

        inventoryPage.goToCart();

        cartPage.checkout();

        await checkoutPage.fillForm(FIRST_NAME, LAST_NAME, '');

        await expect(checkoutPage.errorMsg).toBeDisplayed();
        await expect(checkoutPage.errorMsg).toHaveText(POSTAL_CODE_ERROR_MESSAGE);
    });

    
    it('should continue shopping from cart', async () => {

        await loginPage.open();
        await loginPage.login(users[0].username, users[0].password);

        inventoryPage.goToCart();

        await cartPage.continueShopping();
        await expect(cartPage.title).toHaveText(PRODUCTS_PAGE_TITLE);
        
    });

    it('should delete items from shopping bag', async () => {

        await loginPage.open();
        await loginPage.login(users[0].username, users[0].password);

        inventoryPage.addProductToCart(PRODUCT);

        await inventoryPage.checkCartBadge();

        inventoryPage.goToCart();
        await cartPage.removeAllItems();
        await expect(cartPage.cartItems).toBeElementsArrayOfSize(0);
    });
});