// Importation de l'interface Student depuis le fichier "./student"
import { Student } from "./student";

// Définition d'une énumération Major pour représenter les différentes filières
export enum Major {
  SI = 'SI',   // Systèmes d'Information
  GE = 'GE',   // Génie Électrique
  GB = 'GB',   // Génie Biomédical
  AI = 'AI'    // Intelligence Artificielle
}

// Définition d'une interface Ticket pour représenter la structure d'un objet ticket
export interface Ticket {
  title?: string;       
  description?: string; 
  date?: Date;          
  student?: Student;    
  major?: Major;        
  archived?: boolean;   
}
