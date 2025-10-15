import { AddressVO, type PersonProps } from "./types";
import type { UserDTO } from "./types";
import { Person } from "./abstractions";

export function dtoToPerson(dto: UserDTO): Person {
  const address = new AddressVO(dto.address.city, dto.address.street);
  const props: PersonProps = {
    id: dto.id,
    name: dto.name,
    email: dto.email,
    address,
    company: dto.company?.name,
    role: "employee"
  };
  return new Person(props);
}

export interface PersonCard {
  id: number;
  title: string;  
  subtitle: string; 
}

export function toPersonCard(p: Person): PersonCard {
  const title = p.company ? `${p.name} (${p.company})` : p.name;
  const subtitle = `${p.email} — ${p.address.toString()}`;
  return { id: p.id, title, subtitle };
}
