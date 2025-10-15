import { Car, Truck, ElectricCar, GasEngine, ElectricMotor } from './abstractions';
import type { Movable } from './types';

function performTrip(vehicle: Movable, km: number): string {
  vehicle.drive(km);
  return `Trip done: +${km}km, odometer=${vehicle.odometer()}km`;
}

function main(): void {
  const gas = new GasEngine(300);       
  const battery = new ElectricMotor(150);

  const sedan = new Car(gas, 'Family Sedan');
  const semi  = new Truck(new GasEngine(500), 'Long-Haul Truck');
  const tesla = new ElectricCar(battery, 'Model Z');

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
