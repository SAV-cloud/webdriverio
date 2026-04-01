import loginPage from '../pages/login.page.js';
import users from '../data/users.js';
import checkoutFormErrors from '../data/zipCodes.js';
import inventoryPage from '../pages/inventory.page.js';
import cartPage from '../pages/cart.page.js';
import checkoutPage from '../pages/checkout.page.js';
import overviewPage from '../pages/checkoutOverview.page.js';

const PRODUCT = 'Sauce Labs Backpack';
const FIRST_NAME = 'Andrii';
const LAST_NAME = 'Suvala';
const ZIP_CODE = '79059';
const SUCCESS_MESSAGE = 'Thank you for your order!';
const PRODUCTS_PAGE_TITLE = 'Products';

describe('Checkout Flow', () => {

    /**
     * Scenario: Complete checkout successfully
     * Given the user is logged in
     * When the user adds a product to the cart, proceeds to checkout, and fills the form
     * Then the user should see the success message
     */
    it('completes checkout successfully', async () => {
        // Given the user is logged in
        await loginPage.open();
        await loginPage.login(users[0].username, users[0].password);

        // When the user adds a product, proceeds to checkout, and fills the form
        inventoryPage.addProductToCart(PRODUCT);
        await inventoryPage.checkCartBadge();
        inventoryPage.goToCart();
        cartPage.checkout();
        await checkoutPage.fillForm(FIRST_NAME, LAST_NAME, ZIP_CODE);
        overviewPage.finishCheckout();

        // Then the user should see the success message
        await expect(overviewPage.successMsg).toHaveText(SUCCESS_MESSAGE);
    });

    /**
     * Scenario: Empty cart and checkout disabled
     * Given the user is logged in
     * When the user opens the cart without adding any products
     * Then the cart should be empty and checkout button should not be enabled
     */
    it('shows empty cart and checkout button should be disabled', async () => {
        // Given the user is logged in and opens the cart
        await loginPage.open();
        await loginPage.login(users[0].username, users[0].password);
        inventoryPage.goToCart();

        // Then the cart should be empty and checkout button should not be enabled
        await expect(cartPage.cartItems).toBeElementsArrayOfSize(0);
        await expect(cartPage.checkoutBtn).not.toBeDisabled();
    });

    // DDT: iterate over checkout form error scenarios
    /**
     * Scenario: Checkout form validation error
     * Given the user is logged in
     * When the user submits the checkout form with invalid data
     * Then the appropriate error message should be displayed
     */
    checkoutFormErrors.forEach(({ firstName, lastName, zip, error }) => {
        it(`shows error when checkout form invalid input: ${error}`, async () => {
        // Given the user is logged in
        await loginPage.open();
        await loginPage.login(users[0].username, users[0].password);

        // When the user adds a product and submits the checkout form with invalid data
        inventoryPage.addProductToCart(PRODUCT);
        await inventoryPage.checkCartBadge();
        inventoryPage.goToCart();
        cartPage.checkout();
        await checkoutPage.fillForm(firstName, lastName, zip);

        // Then the appropriate error message should be displayed
        await expect(checkoutPage.errorMsg).toBeDisplayed();
        await expect(checkoutPage.errorMsg).toHaveText(error);
        });
    });

    /**
     * Scenario: Continue shopping from cart
     * Given the user is logged in and in the cart
     * When the user clicks continue shopping
     * Then the user should be redirected to the products page
     */
    it('continues shopping from cart', async () => {
        // Given the user is logged in and in the cart
        await loginPage.open();
        await loginPage.login(users[0].username, users[0].password);
        inventoryPage.goToCart();

        // When the user clicks continue shopping
        await cartPage.continueShopping();

        // Then the user should be redirected to the products page
        await expect(cartPage.title).toHaveText(PRODUCTS_PAGE_TITLE);
    });

    /**
     * Scenario: Remove items from shopping bag
     * Given the user is logged in and added a product to the cart
     * When the user removes the product from the cart
     * Then the cart should be empty
     */
    it('removes items from shopping bag', async () => {
        // Given the user is logged in and added a product to cart
        await loginPage.open();
        await loginPage.login(users[0].username, users[0].password);
        inventoryPage.addProductToCart(PRODUCT);
        await inventoryPage.checkCartBadge();

        // When the user removes the product from the cart
        inventoryPage.goToCart();
        cartPage.removeProductFromBag(PRODUCT);

        // Then the cart should be empty
        await expect(cartPage.cartItems).toBeElementsArrayOfSize(0);
    });

});