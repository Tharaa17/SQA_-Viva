"use strict";
class JuiceCounter {
    constructor() {
        this.totalJuices = 0;
    }
    static getInstance() {
        if (!JuiceCounter.instance) {
            JuiceCounter.instance = new JuiceCounter();
        }
        return JuiceCounter.instance;
    }
    addJuices(count) {
        this.totalJuices += count;
    }
    getTotalJuices() {
        return this.totalJuices;
    }
}
class JuiceSeller {
    constructor() {
        this.juiceCounter = JuiceCounter.getInstance();
    }
    sellJuices(count) {
        this.juiceCounter.addJuices(count);
        console.log(`Sold ${count} juices.`);
    }
}
class JuiceBarManager {
    constructor() {
        this.juiceCounter = JuiceCounter.getInstance();
    }
    reportTotalJuices() {
        console.log(`Total juices sold: ${this.juiceCounter.getTotalJuices()}`);
    }
}
const seller1 = new JuiceSeller();
const seller2 = new JuiceSeller();
const manager = new JuiceBarManager();
seller1.sellJuices(4);
seller2.sellJuices(7);
manager.reportTotalJuices();
const counter1 = JuiceCounter.getInstance();
const counter2 = JuiceCounter.getInstance();
console.log(counter1 === counter2);
console.log(`Final Total Juices: ${counter1.getTotalJuices()}`);
