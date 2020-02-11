let subscriptionId = 0;

class Observer {
  constructor() {
    this.subscribers = {};
  }

  subscribe(handler) {
    if (!handler) return null;

    subscriptionId += 1;

    this.subscribers = {
      ...this.subscribers,
      [subscriptionId]: handler,
    };

    return {
      unsubscribe: () => delete this.subscribers[subscriptionId],
    };
  }

  notify() {
    const subscribers = Object.values(this.subscribers);
    subscribers.forEach((sub) => sub());
  }
}

module.exports = Observer;
