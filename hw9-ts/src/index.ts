// hw9-ts/src/index.ts

import {
  Car,
  Truck,
  ElectricCar,
  GasEngine,
  ElectricMotor,
  Vehicle,
  type Describable,
  type Movable,
  type TrailerAttachable,
} from './abstractions';

// утилиты для демонстрации DIP (принимаем интерфейсы)
function log(obj: Describable): void {
  console.log(obj.describe());
}

function go(m: Movable, km: number): void {
  try {
    m.drive(km);
    console.log(`driven ${km}km; odo=${m.odometer()}km; left=${m.rangeLeft()}km`);
  } catch (e) {
    console.error('drive failed:', (e as Error).message);
  }
}

// создаём источники энергии
const gas = new GasEngine(5);        // ~50 км
const battery = new ElectricMotor(8); // ~48 км

// машины
const car = new Car(gas, 'MyCar');
const ev = new ElectricCar(battery, 'MyEV');

const truckPower = new GasEngine(12); // ~120 км
const truck = new Truck(truckPower, 'MyTruck') as Vehicle & TrailerAttachable;
truck.attachTrailer(1200);

// логи
log(gas);
log(battery);
log(car);
log(ev);
log(truck);

// поехали
go(car, 20);
go(ev, 30);
go(truck, 50);

// ещё раз описания
log(car);
log(ev);
log(truck);
