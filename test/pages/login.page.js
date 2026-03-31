class LoginPage {
    open() {
        return browser.url('/');
    }

    get username() { return $('input[id="user-name"]'); }
    get password() { return $('input[id="password"]'); }
    get loginBtn() { return $('input[id="login-button"]'); }
    get errorMsg() { return $('h3[data-test="error"]'); }

    async login(user, pass) {
        await this.username.setValue(user);
        await this.password.setValue(pass);
        await this.loginBtn.click();
    }
}

export default new LoginPage();