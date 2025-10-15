export interface Describable {
  describe(): string;
}

export interface Movable {
  drive(km: number): void;
  odometer(): number;
}
export interface PowerUnit {
  readonly kind: 'gas' | 'diesel' | 'electric';
  fill(amount: number): void;     // залить бензин / зарядить батарею
  rangeLeft(): number;            // условный запас хода (км)
  spendFor(km: number): void;     // списать запас на поездку
}

export type Id = string & { __brand: 'Id' };

export function makeId(prefix: string = 'id'): Id {
  return `${prefix}_${Math.random().toString(36).slice(2, 9)}` as Id;
}