import loginPage from '../pages/login.page.js';
import users from '../data/users.js';

const EXPECTED_TITLE = 'Swag Labs';

describe('Login functionality', () => {

    /**
     * Scenario: Successful login with valid credentials
     * Given the user is on the login page
     * When the user logs in with valid credentials
     * Then the user should be redirected to the inventory page
     */   
    it('allows a user to log in with valid credentials', async () => {
        // Given
        await loginPage.open();

        // When
        await loginPage.login(users[0].username, users[0].password);

        // Then
        await expect(browser).toHaveTitle(EXPECTED_TITLE);
    });

    /**
     * Scenario: Login attempt with invalid credentials
     * Given the user is on the login page
     * When the user logs in with invalid credentials
     * Then an error message should be displayed
     */
    it('displays an error message when login fails with invalid credentials', async () => {
        // Given
        await loginPage.open();

        // When
        await loginPage.login(users[1].username, users[1].password);

        // Then
        await expect(loginPage.errorMsg).toBeDisplayed();
    });

});