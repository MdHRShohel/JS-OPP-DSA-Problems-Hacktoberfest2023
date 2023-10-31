class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.cart = [];
  }

  addProduct(product, quantity) {
    this.cart.push({ product, quantity });
  }

  removeProduct(productName) {
    this.cart = this.cart.filter((item) => item.product.name !== productName);
  }

  viewCart() {
    if (this.cart.length === 0) {
      console.log("Your shopping cart is empty.");
    } else {
      console.log("Shopping Cart:");
      this.cart.forEach((item) => {
        const { name, price } = item.product;
        const quantity = item.quantity;
        console.log(`${name} - Price: $${price} - Quantity: ${quantity}`);
      });
    }
  }

  calculateTotal() {
    let total = 0;
    this.cart.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    return total;
  }
}

// Usage
const cart = new ShoppingCart();

const product1 = new Product("Laptop", 1000);
const product2 = new Product("Smartphone", 500);

cart.addProduct(product1, 2);
cart.addProduct(product2, 1);

cart.viewCart();
console.log("Total: $" + cart.calculateTotal());

cart.removeProduct("Laptop");

cart.viewCart();
console.log("Total: $" + cart.calculateTotal());
