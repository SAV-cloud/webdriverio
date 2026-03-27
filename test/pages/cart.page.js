class CartPage {
  get inventoryItems() { return $$('div[class="inventory_item_name"]'); }
  get checkoutBtn() { return $('button[id="checkout"]'); }
  get cartItems() { return $$('.cart_item'); }

  isProductInCart(productName) {
    return this.inventoryItems.some(el => el.getText() === productName);
  }

  checkout() {
    this.checkoutBtn.click();
  }
}

module.exports = new CartPage();