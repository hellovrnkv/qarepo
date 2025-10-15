import type { Describable, Movable, PowerUnit, Id } from './types';
import { makeId } from './types';

export class GasEngine implements PowerUnit {
  readonly kind = 'gas' as const;
  private liters: number;        
  constructor(initial = 0) { this.liters = initial; }
  fill(amount: number): void { this.liters += Math.max(0, amount); }
  rangeLeft(): number { return this.liters; }
  spendFor(km: number): void {
    if (km > this.liters) throw new Error('Not enough fuel');
    this.liters -= km;
  }
}

export class ElectricMotor implements PowerUnit {
  readonly kind = 'electric' as const;
  private kwh: number;            
  constructor(initial = 0) { this.kwh = initial; }
  fill(amount: number): void { this.kwh += Math.max(0, amount); }
  rangeLeft(): number { return this.kwh; }
  spendFor(km: number): void {
    if (km > this.kwh) throw new Error('Battery low');
    this.kwh -= km;
  }
}

export abstract class Machine implements Describable {
  constructor(
    protected readonly id: Id = makeId('machine'),
    protected name: string = 'Machine',
  ) {}
  describe(): string {
    return `${this.name}#${this.id}`;
  }
}

export abstract class Vehicle
  extends Machine
  implements Movable, Describable
{
  protected _odometer = 0;

  constructor(
    name: string,
    protected readonly power: PowerUnit,
    id: Id = makeId('vehicle'),
  ) {
    super(id, name);
  }

  drive(km: number): void {
    if (km <= 0) return;
    this.power.spendFor(km);
    this._odometer += km;
  }

  odometer(): number {
    return this._odometer;
  }

  rangeLeft(): number {
    return this.power.rangeLeft();
  }

  override describe(): string {
    return `${super.describe()} | power=${this.power.kind} | odo=${this._odometer}km | range=${this.rangeLeft()}km`;
  }
}

export class Car extends Vehicle {
  constructor(power: PowerUnit, name = 'Car') {
    super(name, power, makeId('car'));
  }
}

export class Truck extends Vehicle {
  constructor(power: PowerUnit, name = 'Truck') {
    super(name, power, makeId('truck'));
  }
}

export class ElectricCar extends Vehicle {
  constructor(battery: ElectricMotor, name = 'ElectricCar') {
    super(name, battery, makeId('ev'));
  }
}