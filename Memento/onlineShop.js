"use strict";
// Memento class
class OrderMemento {
    constructor(state) {
        this.state = state;
    }
    getState() {
        return this.state;
    }
}
// Originator class
class Order {
    setState(state) {
        this.state = state;
        console.log(`Order state set to: ${this.state}`);
    }
    getState() {
        return this.state;
    }
    saveStateToMemento() {
        return new OrderMemento(this.state);
    }
    getStateFromMemento(memento) {
        this.state = memento.getState();
        console.log(`Order state restored to: ${this.state}`);
    }
}
// Caretaker class
class OrderHistory {
    constructor() {
        this.mementoList = [];
    }
    addMemento(state) {
        this.mementoList.push(state);
    }
    getMemento(index) {
        return this.mementoList[index];
    }
}
// Usage example
const order = new Order();
const orderHistory = new OrderHistory();
// Order is placed
order.setState("Order Placed");
orderHistory.addMemento(order.saveStateToMemento());
// Order is processing
order.setState("Processing");
orderHistory.addMemento(order.saveStateToMemento());
// Order is shipped
order.setState("Shipped");
orderHistory.addMemento(order.saveStateToMemento());
// Order is delivered
order.setState("Delivered");
// Something goes wrong, roll back to "Shipped"
order.getStateFromMemento(orderHistory.getMemento(2));
// Roll back to "Processing"
order.getStateFromMemento(orderHistory.getMemento(1));
// Roll back to "Order Placed"
order.getStateFromMemento(orderHistory.getMemento(0));
