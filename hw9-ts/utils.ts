export type VehicleDTO = {
  name: string;
  odometer: number;
};

export function updateOdometer(dto: VehicleDTO, delta: number): VehicleDTO {
  if (delta < 0) throw new Error("delta must be >= 0");
  return { ...dto, odometer: dto.odometer + delta };
}

export function renameVehicle(dto: VehicleDTO, newName: string): VehicleDTO {
  if (!newName.trim()) throw new Error("name is empty");
  return { ...dto, name: newName.trim() };
}
