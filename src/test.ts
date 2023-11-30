

// Importation de 'zone-testing' pour la configuration de la zone de test
import 'zone.js/dist/zone-testing';

// Importation de fonctions de test Angular
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Déclaration de la variable require pour permettre l'importation des fichiers .spec
declare const require: any;

// Initialisation de l'environnement de test Angular
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Ensuite, recherche de tous les tests.
const context = require.context('./', true, /\.spec\.ts$/);

// Puis chargement des modules de test.
context.keys().map(context);
