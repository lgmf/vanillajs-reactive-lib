module.exports = class Observer {
  constructor() {
    this.subscribers = [];
  }

  subscribe(handler) {
    if (handler && !this.subscribers.includes(handler)) {
      this.subscribers.push(handler);
    }
  }

  notify() {
    this.subscribers.forEach((sub) => sub());
  }
};
