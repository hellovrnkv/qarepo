import { expect } from 'chai';
import {
  Car,
  Truck,
  ElectricCar,
  GasEngine,
  ElectricMotor
} from '../../hw9-ts/src/abstractions.ts';

describe('HW10 (Mocha): классы из HW9', () => {
  it('Car + GasEngine: drive добавляет одометр и тратит топливо', () => {
    const engine = new GasEngine(50);
    const car = new Car(engine, 'MyCar');

    car.drive(10);
    expect(car.odometer()).to.equal(10);
    expect(car.rangeLeft()).to.equal(40);
  });

  it('ElectricCar: расходует батарею и считает range', () => {
    const motor = new ElectricMotor(30);
    const ev = new ElectricCar(motor, 'EV');

    ev.drive(5);
    expect(ev.odometer()).to.equal(5);
    expect(ev.rangeLeft()).to.equal(25);
  });

  it('Truck тоже двигается', () => {
    const engine = new GasEngine(20);
    const truck = new Truck(engine, 'Big');

    truck.drive(7);
    expect(truck.odometer()).to.equal(7);
    expect(truck.rangeLeft()).to.equal(13);
  });
});
