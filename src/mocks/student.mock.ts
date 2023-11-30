// Importation de la classe Student depuis le fichier '../models/student'
import { Student } from '../models/student';

// Définition d'une constante STUDENTS_MOCKED qui contient un tableau d'objets Student simulés
export const STUDENTS_MOCKED: Student[] = [
    // Première instance d'étudiant avec des propriétés spécifiques
    {
        "id": 1,
        "firstName": 'Philip',
        "lastName": 'ASLAM'
    },

    // Deuxième instance d'étudiant avec des propriétés spécifiques
    {
        "id": 2,
        "firstName": 'Jean',
        "lastName": 'DODO'
    },

    // Troisième instance d'étudiant avec des propriétés spécifiques
    {
        "id": 3,
        "firstName": 'Samir',
        "lastName": 'ROUTIER'
    }
];
