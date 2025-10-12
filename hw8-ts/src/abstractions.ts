export abstract class Entity<TId> {
  constructor(public id: TId) {}
  abstract describe(): string;
}

export class AddressVO {
  constructor(public city: string, public street: string) {}
  toString() {
    return `${this.street}, ${this.city}`;
  }
}

export class Person extends Entity<number> {
  constructor(id: number, public name: string, public address: AddressVO) {
    super(id);
  }
  describe() {
    return `${this.name} (#${this.id}) @ ${this.address.toString()}`;
  }
}

export class Employee extends Person {
  constructor(
    id: number,
    name: string,
    address: AddressVO,
    public company: string,
    public role: string
  ) {
    super(id, name, address);
  }
  describe() {
    return `${super.describe()} · ${this.company} (${this.role})`;
  }
}
