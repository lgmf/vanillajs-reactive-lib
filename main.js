/* eslint-disable no-console */
const Reactive = require('./reactive');

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

console.log(JSON.stringify(myComponent, null, 2));

setTimeout(() => {
  myComponent.data.price = 10;
  console.log(JSON.stringify(myComponent, null, 2));
}, 2000);
