export type WithOdometer = { odometer: number };
export type WithName = { name: string };

export function updateOdometer<T extends WithOdometer>(obj: T, delta: number): T {
  if (!Number.isFinite(delta)) {
    throw new Error('delta must be a finite number');
  }
  if (delta < 0) {
    throw new Error('delta must be >= 0'); // слово "delta" есть для матча /delta/i
  }
  return { ...obj, odometer: obj.odometer + delta } as T;
}
export function renameVehicle<T extends WithName>(obj: T, name: string): T {
  const trimmed = name.trim();
  if (trimmed.length === 0) {
    throw new Error('name must not be empty'); // слово "name" есть для матча /name/i
  }
  return { ...obj, name: trimmed } as T;
}
