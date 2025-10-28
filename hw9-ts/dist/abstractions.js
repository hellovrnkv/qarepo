"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectricCar = exports.Truck = exports.Car = exports.Vehicle = exports.Machine = exports.ElectricMotor = exports.GasEngine = void 0;
const types_1 = require("./types");
class GasEngine {
    constructor(initial = 0) {
        this.kind = 'gas';
        this.liters = initial;
    }
    fill(amount) { this.liters += Math.max(0, amount); }
    rangeLeft() { return this.liters; }
    spendFor(km) {
        if (km > this.liters)
            throw new Error('Not enough fuel');
        this.liters -= km;
    }
}
exports.GasEngine = GasEngine;
class ElectricMotor {
    constructor(initial = 0) {
        this.kind = 'electric';
        this.kwh = initial;
    }
    fill(amount) { this.kwh += Math.max(0, amount); }
    rangeLeft() { return this.kwh; }
    spendFor(km) {
        if (km > this.kwh)
            throw new Error('Battery low');
        this.kwh -= km;
    }
}
exports.ElectricMotor = ElectricMotor;
class Machine {
    constructor(id = (0, types_1.makeId)('machine'), name = 'Machine') {
        this.id = id;
        this.name = name;
    }
    describe() {
        return `${this.name}#${this.id}`;
    }
}
exports.Machine = Machine;
class Vehicle extends Machine {
    constructor(name, power, id = (0, types_1.makeId)('vehicle')) {
        super(id, name);
        this.power = power;
        this._odometer = 0;
    }
    drive(km) {
        if (km <= 0)
            return;
        this.power.spendFor(km);
        this._odometer += km;
    }
    odometer() {
        return this._odometer;
    }
    rangeLeft() {
        return this.power.rangeLeft();
    }
    describe() {
        return `${super.describe()} | power=${this.power.kind} | odo=${this._odometer}km | range=${this.rangeLeft()}km`;
    }
}
exports.Vehicle = Vehicle;
class Car extends Vehicle {
    constructor(power, name = 'Car') {
        super(name, power, (0, types_1.makeId)('car'));
    }
}
exports.Car = Car;
class Truck extends Vehicle {
    constructor(power, name = 'Truck') {
        super(name, power, (0, types_1.makeId)('truck'));
    }
}
exports.Truck = Truck;
class ElectricCar extends Vehicle {
    constructor(battery, name = 'ElectricCar') {
        super(name, battery, (0, types_1.makeId)('ev'));
    }
}
exports.ElectricCar = ElectricCar;
