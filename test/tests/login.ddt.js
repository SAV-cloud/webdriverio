// const loginPage = require('../pages/login.page');
// const users = require('../data/users');
// const EXPECTED_TITLE = 'Swag Labs';

// describe('Login Page Feature', () => {
//     it('should successfully login with valid credentials', async () => {
//         await loginPage.open();
//         await loginPage.login(users[0].username, users[0].password);
//         await expect(browser).toHaveTitle(EXPECTED_TITLE);
//     });

//     it('should show an error with invalid credentials', async () => {
//         await loginPage.open();
//         await loginPage.login(users[1].username, users[1].password);
//         expect(loginPage.errorMsg).toBeDisplayed();
//     });
// });