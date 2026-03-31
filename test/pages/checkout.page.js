class CheckoutPage {
    get firstName() { return $('input[id="first-name"]'); }
    get lastName() { return $('input[id="last-name"]'); }
    get zip() { return $('input[id="postal-code"]'); }
    get continueBtn() { return $('input[id="continue"]'); }
    get errorMsg() { return $('h3[data-test="error"]'); }

    async fillForm(fn, ln, zip) {
        await this.firstName.setValue(fn);
        await this.lastName.setValue(ln);
        await this.zip.setValue(zip);
        await this.continueBtn.click();
    }
}

export default new CheckoutPage();