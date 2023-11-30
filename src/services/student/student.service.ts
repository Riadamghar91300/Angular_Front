// Importation des modules et classes nécessaires depuis Angular et RxJS
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, retry, throwError } from 'rxjs';
import { STUDENTS_MOCKED } from 'src/mocks/student.mock';
import { Student } from 'src/models/student';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Décoration du service comme injectable et en tant que service racine
@Injectable({
    providedIn: 'root'
})
export class StudentService {

    // URL de l'API à utiliser
    apiURL = 'http://localhost:3000';

    // Liste d'étudiants simulée initiale provenant du fichier mock
    private studentList: Student[] = STUDENTS_MOCKED;

    // Observable BehaviorSubject qui émet la liste actuelle d'étudiants
    public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);

    // Constructeur du service, injectant le module HttpClient
    constructor(private http: HttpClient) {
    }

    // Options HTTP pour les requêtes
    httpOption = {
        headers: new HttpHeaders({
            'content-type': 'application/json',
        })
    }

    // Méthode pour récupérer un étudiant depuis l'API
    getStudent(): Observable<Student> {
        // Utilisation du module HttpClient pour effectuer une requête GET vers l'API
        return this.http.get<Student>(this.apiURL + '/').pipe(
            retry(1), // Tentatives de réessai en cas d'échec
            catchError(this.handleError) // Gestion des erreurs
        );
    }

    // Méthode de gestion des erreurs HTTP
    handleError(error: any) {
        let errMsg = '';
        // Vérification du type d'erreur (réseau ou application)
        if (error.error instanceof ErrorEvent) {
            errMsg = error.error.message;  // Erreur liée au réseau
        } else {
            errMsg = `Error Code : ${error.status}\nMessage : ${error.message}`;  // Erreur liée à l'application
        }
        // Affichage de l'erreur dans une fenêtre d'alerte
        window.alert(errMsg);
        // Retourne une observable avec l'erreur
        return throwError(() => {
            return errMsg;
        });
    }
}
