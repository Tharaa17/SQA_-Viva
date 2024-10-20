"use strict";
// BasicCoffee class implementing Coffee interface
class BasicCoffee {
    getDescription() {
        return "Basic Coffee";
    }
    cost() {
        return 5;
    }
}
// Abstract CoffeeDecorator class implementing Coffee interface
class CoffeeDecorator {
    constructor(coffee) {
        this.decoratedCoffee = coffee;
    }
    getDescription() {
        return this.decoratedCoffee.getDescription();
    }
    cost() {
        return this.decoratedCoffee.cost();
    }
}
// MilkDecorator class extending CoffeeDecorator
class MilkDecorator extends CoffeeDecorator {
    getDescription() {
        return this.decoratedCoffee.getDescription() + ', Milk';
    }
    cost() {
        return this.decoratedCoffee.cost() + 1.5;
    }
}
// SugarDecorator class extending CoffeeDecorator
class SugarDecorator extends CoffeeDecorator {
    getDescription() {
        return this.decoratedCoffee.getDescription() + ', Sugar';
    }
    cost() {
        return this.decoratedCoffee.cost() + 0.5;
    }
}
// WhipDecorator class extending CoffeeDecorator
class WhipDecorator extends CoffeeDecorator {
    getDescription() {
        return this.decoratedCoffee.getDescription() + ', Whip';
    }
    cost() {
        return this.decoratedCoffee.cost() + 2;
    }
}
// Main function to demonstrate the use of decorators
function main() {
    // Create a basic coffee
    let myCoffee = new BasicCoffee();
    console.log(`${myCoffee.getDescription()} $${myCoffee.cost()}`);
    // Add milk to the coffee
    myCoffee = new MilkDecorator(myCoffee);
    console.log(`${myCoffee.getDescription()} $${myCoffee.cost()}`);
    // Add sugar to the coffee
    myCoffee = new SugarDecorator(myCoffee);
    console.log(`${myCoffee.getDescription()} $${myCoffee.cost()}`);
    // Add whip to the coffee
    myCoffee = new WhipDecorator(myCoffee);
    console.log(`${myCoffee.getDescription()} $${myCoffee.cost()}`);
}
// Run the main function
main();
