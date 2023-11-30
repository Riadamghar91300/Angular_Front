// Importation de la classe Component depuis le module Angular core
import { Component } from '@angular/core';

// Définition du composant racine de l'application avec le décorateur @Component
@Component({
  // Sélecteur CSS utilisé pour incorporer ce composant dans le fichier HTML principal
  selector: 'app-root',

  // Chemin vers le fichier HTML associé 
  templateUrl: './app.component.html',

  // Chemins vers les fichiers CSS associés 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Propriété utilisée dans le template pour afficher le titre de l'application
  title = 'starter-project';
}
