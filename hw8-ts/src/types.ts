export interface AddressDTO {
  street: string;
  suite?: string;
  city: string;
  zipcode: string;
}

export interface CompanyDTO {
  name: string;
  catchPhrase?: string;
  bs?: string;
}

export interface UserDTO {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressDTO;
  phone?: string;
  website?: string;
  company?: CompanyDTO;
}

export interface PersonProps {
  id: number;
  name: string;
  email: string;
  address: AddressVO;
  company?: string;
  role?: string;
}
export class AddressVO {
  constructor(public city: string, public street: string) {}

  toString() {
    return `${this.street}, ${this.city}`;
  }
}
