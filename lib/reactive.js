/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
const Observer = require('./observer');

const observer = new Observer();

module.exports = {
  init(component) {
    component._state = {};

    Object.keys(component.data).forEach((key) => {
      let internalValue = component.data[key];

      Object.defineProperty(component.data, key, {
        get() {
          return internalValue;
        },
        set(next) {
          if (next !== internalValue) {
            internalValue = next;
            observer.notify();
          }
        },
      });
    });

    Object.entries(component.computed).forEach(([prop, handler]) => {
      component._state[prop] = handler.call(component.data);

      observer.subscribe(() => {
        component._state[prop] = handler.call(component.data);
      });
    });
  },
};
