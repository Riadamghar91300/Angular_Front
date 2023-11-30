// Importation des classes nécessaires depuis ANGULAR CORE
import { Component, OnInit } from '@angular/core';

// Définition du composant Angular avec le décorateur @Component
@Component({
  // Sélecteur CSS utilisé pour incorporer ce composant 
  selector: 'app-header',

  // Chemin vers le fichier HTML associé 
  templateUrl: './header.component.html',

  // Chemins vers les fichiers CSS associés 
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Constructeur du composant
  constructor() { }

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit() {
    // Cette méthode est actuellement vide, mais elle peut être utilisée pour effectuer des actions d'initialisation
  }
}
