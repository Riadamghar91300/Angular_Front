// Importation des classes Major et Ticket depuis le fichier '../models/ticket'
import { Major, Ticket } from '../models/ticket';

// Importation de la constante STUDENTS_MOCKED depuis le fichier './student.mock'
import { STUDENTS_MOCKED } from './student.mock';

// Définition d'une constante TICKETS_MOCKED qui contient un tableau d'objets Ticket simulés
const dateToday: Date = new Date();  // Création d'une instance de Date représentant la date actuelle

export const TICKETS_MOCKED: Ticket[] = [
  // Première instance de Ticket avec des propriétés spécifiques
  {
    "title": 'Alger',
    "description": 'Alger!',
    "date": dateToday,
    "student": STUDENTS_MOCKED[0],  // Utilisation d'un étudiant simulé de la constante STUDENTS_MOCKED
    "major": Major.SI,
    "archived": false
  },

  // Deuxième instance de Ticket avec des propriétés spécifiques
  {
    "title": 'TIZI',
    "description": 'Component',
    "date": dateToday,
    "student": STUDENTS_MOCKED[1],  // Utilisation d'un autre étudiant simulé de STUDENTS_MOCKED
    "major": Major.GE,
    "archived": false

    
  },

  {
    "title": 'boumerdess',
    "description": 'Component',
    "date": dateToday,
    "student": STUDENTS_MOCKED[2],  // Utilisation d'un autre étudiant simulé de STUDENTS_MOCKED
    "major": Major.GE,
    "archived": false

    
  }
];

