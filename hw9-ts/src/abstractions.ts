// hw9-ts/src/abstractions.ts

/** ========= common types ========= */

export type Id = string & { readonly __brand: 'Id' };

function makeId(prefix: string): Id {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}` as Id;
}

/** ========= interfaces ========= */

export interface Describable {
  describe(): string;
}

export interface Movable {
  drive(km: number): void;
  odometer(): number;
  rangeLeft(): number;
}

export type PowerKind = 'gas' | 'electric';

export interface PowerUnit extends Describable {
  readonly kind: PowerKind;
  /** Остаточный пробег, км */
  rangeLeft(): number;
  /** Списать ресурс для поездки на km километров */
  spendFor(km: number): void;
}

export interface TrailerAttachable {
  attachTrailer(weightKg: number): void;
}

/** ========= power units ========= */

export class GasEngine implements PowerUnit {
  readonly kind: PowerKind = 'gas' as const;
  private liters: number;

  constructor(initial = 0) {
    this.liters = initial;
  }

  fill(amount: number): void {
    this.liters = Math.max(0, this.liters + amount);
  }

  // простая модель: 1 литр ≈ 10 км
  rangeLeft(): number {
    return Math.max(0, Math.floor(this.liters * 10));
  }

  spendFor(km: number): void {
    const need = km / 10;
    if (this.liters < need) {
      throw new Error('Not enough fuel');
    }
    this.liters -= need;
  }

  describe(): string {
    return `GasEngine(liters=${this.liters.toFixed(2)}, range=${this.rangeLeft()}km)`;
  }
}

export class ElectricMotor implements PowerUnit {
  readonly kind: PowerKind = 'electric' as const;
  private kwh: number;

  constructor(initial = 0) {
    this.kwh = initial;
  }

  charge(amount: number): void {
    this.kwh = Math.max(0, this.kwh + amount);
  }

  // простая модель: 1 кВт⋅ч ≈ 6 км
  rangeLeft(): number {
    return Math.max(0, Math.floor(this.kwh * 6));
  }

  spendFor(km: number): void {
    const need = km / 6;
    if (this.kwh < need) {
      throw new Error('Battery low');
    }
    this.kwh -= need;
  }

  describe(): string {
    return `ElectricMotor(kWh=${this.kwh.toFixed(2)}, range=${this.rangeLeft()}km)`;
  }
}

/** ========= base class ========= */

export class Vehicle implements Movable, Describable {
  protected _odometer = 0;

  constructor(
    protected readonly name: string,
    protected readonly power: PowerUnit,
    public readonly id: Id = makeId('vehicle'),
  ) {}

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

  describe(): string {
    return `${this.name}#${this.id} | power=${this.power.kind} | odo=${this._odometer}km | range=${this.rangeLeft()}km`;
  }
}

/** ========= concrete vehicles ========= */

export class Car extends Vehicle {
  constructor(power: PowerUnit, name = 'Car') {
    super(name, power, makeId('car'));
  }
}

export class Truck extends Vehicle implements TrailerAttachable {
  private trailerWeightKg = 0;

  constructor(power: PowerUnit, name = 'Truck') {
    super(name, power, makeId('truck'));
  }

  attachTrailer(weightKg: number): void {
    this.trailerWeightKg = Math.max(0, Math.floor(weightKg));
  }

  override describe(): string {
    const base = super.describe();
    return this.trailerWeightKg > 0 ? `${base} | trailer=${this.trailerWeightKg}kg` : base;
  }
}

export class ElectricCar extends Vehicle {
  constructor(battery: ElectricMotor, name = 'ElectricCar') {
    super(name, battery, makeId('ev'));
  }
}
