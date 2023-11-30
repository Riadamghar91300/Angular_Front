// Importation de modules nécessaires pour démarrer l'application Angular dans un navigateur
// import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Importation du module principal de l'application
import { AppModule } from './app/app.module';

// Importation des configurations d'environnement (actuellement commenté)
// import { environment } from './environments/environment';


// Démarrage dynamique du module principal de l'application dans le navigateur
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
