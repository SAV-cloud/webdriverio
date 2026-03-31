class CheckoutOverviewPage {
    get finishBtn() { return $('button[id="finish"]'); }
    get successMsg() { return $('h2[class="complete-header"]'); }

    finishCheckout() {
        this.finishBtn.click();
    }

    async getSuccessMessage() {
        await this.successMsg.waitForDisplayed();
        return await this.successMsg.getText();
    }
}

export default new CheckoutOverviewPage();