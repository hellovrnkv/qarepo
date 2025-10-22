import { describe, it, expect } from "vitest";
import { updateOdometer, renameVehicle } from "../../hw9-ts/src/utils";

describe("HW10 (Vitest): utils functions", () => {
  it("updateOdometer returns a new object with increased odometer", () => {
    const start = { name: "V", odometer: 5 };
    const res = updateOdometer(start, 3);

    expect(res).not.toBe(start);
    expect(res.odometer).toBe(8);
    expect(start.odometer).toBe(5); // неизменяемость
  });

  it("updateOdometer throws when delta < 0", () => {
    const start = { name: "V", odometer: 5 };
    expect(() => updateOdometer(start, -1)).toThrow(/delta/i);
  });

  it("renameVehicle trims and replaces the name", () => {
    const start = { name: "V", odometer: 0 };
    const res = renameVehicle(start, "  New Name  ");
    expect(res.name).toBe("New Name");
  });

  it("renameVehicle throws on empty name", () => {
    const start = { name: "V", odometer: 0 };
    expect(() => renameVehicle(start, "   ")).toThrow(/name/i);
  });
});
