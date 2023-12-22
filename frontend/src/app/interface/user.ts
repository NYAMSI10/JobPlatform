import {Contrat} from "./contrat";

export interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  image?: string;
  adresse?: string;
  codepostal?: string;
  ville?: string;
  role: Role;
}

enum Role {
  "USER",
"ADMIN",
"COMPANY"
}
