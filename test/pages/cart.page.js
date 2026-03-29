class CartPage {
  get inventoryItems() { return $$('div[class="inventory_item_name"]'); }
  get checkoutBtn() { return $('button[id="checkout"]'); }
  get cartItems() { return $$('.cart_item'); }
  get continueShoppingBtn() { return $('#continue-shopping'); }
  get title() { return $('[data-test="title"]'); }

  isProductInCart(productName) {
    return this.inventoryItems.some(el => el.getText() === productName);
  }

  checkout() {
    this.checkoutBtn.click();
  }

  async continueShopping() {
      await this.continueShoppingBtn.click();
  }

  
  async removeAllItems() {
      const buttons = await $$('button[data-test^="remove"]');

      for (const btn of buttons) {
          await btn.click();
      }
  }
}

module.exports = new CartPage();