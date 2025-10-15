import type { PersonProps } from "./types";

export abstract class Entity<TId> {
  constructor(public readonly id: TId) {}
  abstract describe(): string;
}

export class Person extends Entity<number> {
  public name: string;
  public email: string;
  public address: PersonProps["address"];
  public company?: string;
  public role?: string;

  constructor(props: PersonProps) {
    super(props.id);
    this.name = props.name;
    this.email = props.email;
    this.address = props.address;
    this.company = props.company;
    this.role = props.role;
  }

  describe(): string {
    return `${this.name} <${this.email}> @ ${this.address.toString()}`;
  }
}
