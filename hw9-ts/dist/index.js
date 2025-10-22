"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstractions_1 = require("./abstractions");
function performTrip(vehicle, km) {
    vehicle.drive(km);
    return `Trip done: +${km}km, odometer=${vehicle.odometer()}km`;
}
function main() {
    const gas = new abstractions_1.GasEngine(300);
    const battery = new abstractions_1.ElectricMotor(150);
    const sedan = new abstractions_1.Car(gas, 'Family Sedan');
    const semi = new abstractions_1.Truck(new abstractions_1.GasEngine(500), 'Long-Haul Truck');
    const tesla = new abstractions_1.ElectricCar(battery, 'Model Z');
    gas.fill(50);
    battery.fill(100);
    console.log(sedan.describe());
    console.log(performTrip(sedan, 120));
    console.log(sedan.describe());
    console.log('---');
    console.log(semi.describe());
    console.log(performTrip(semi, 300));
    console.log(semi.describe());
    console.log('---');
    console.log(tesla.describe());
    console.log(performTrip(tesla, 200));
    console.log(tesla.describe());
}
main();
