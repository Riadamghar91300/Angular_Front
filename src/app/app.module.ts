// Importation des modules Angular nécessaires
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Importation des composants et services de l'application
import { AppComponent } from './app.component';
import { TicketComponent, TicketFormComponent, TicketListComponent } from './tickets';
import { TicketService } from '../services/ticket/ticket.service';
import { HeaderComponent } from './header/header.component';

// Déclaration du module principal de l'application avec le décorateur @NgModule
@NgModule({
  // Liste des composants, directives et pipes qui appartiennent à ce module
  declarations: [
    AppComponent,
    TicketComponent,
    TicketFormComponent,
    TicketListComponent,
    HeaderComponent
  ],

  // Liste des modules dont dépend ce module
  imports: [
    BrowserModule,       // Module pour le rendu dans le navigateur
    ReactiveFormsModule, // Module pour la gestion des formulaires réactifs
    HttpClientModule      // Module pour effectuer des requêtes HTTP
  ],

  // Liste des services qui seront disponibles au sein de ce module
  providers: [TicketService],

  // Composant principal qui sera utilisé lors du démarrage de l'application
  bootstrap: [AppComponent]
})
export class AppModule {
}
