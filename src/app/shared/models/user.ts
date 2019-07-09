export interface User {
  id: number;
  username: string;
  email: string;
  name: string;
  phone: string;
  website: string;
  company: Company;
  address: Address;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Address {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
}
