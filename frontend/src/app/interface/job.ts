import {Contrat} from "./contrat";
import {User} from "./user";

export interface Job {

  id: number;
  title: string;
  time?: string;
  city: string;
  salaire?: string;
  telework: Telework;
  experience?: string;
  education?: string;
  description: string;
  profil: string;
  procedure: string;
  status: boolean;
  user: User;
  contrat: Contrat

}

enum Telework {
  'frequent',
  'occasionally',
  'no',
}
