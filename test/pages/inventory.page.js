class InventoryPage {
  get cartLink() { return $('a[class="shopping_cart_link"]'); }
  get cartItems() { return $$('.cart_item'); }

  addProductToCart(productName) {
    const product = $(`//div[text()="${productName}"]/ancestor::div[@class="inventory_item"]`);
    product.$('button').click();
  }

  async checkCartBadge() {
    const cartBadge = await $('span[class="shopping_cart_badge"]');
    await cartBadge.waitForDisplayed();
    await expect(cartBadge).toHaveText('1');
  }

  goToCart() {
    this.cartLink.click();
  }
}

module.exports = new InventoryPage();