const Reactive = require('./lib/reactive');

const myComponent = {
  data: {
    price: 5,
    quantity: 2,
  },
  computed: {
    total() {
      return this.price * this.quantity;
    },
    salePrice() {
      return this.price * 0.9;
    },
  },
};

Reactive.init(myComponent);
