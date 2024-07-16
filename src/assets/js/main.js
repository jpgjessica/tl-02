/**
 * Importations et initialisations des fonctionnalités principales de la page.
 */

import '../css/style.css';
import { menuMobileHeader } from '../components/_header';
import { configInfoLettreDialog, toggleFooter } from '../components/_footer';

/**
 * Initialise la fonctionnalité du menu mobile dans l'en-tête.
 */

menuMobileHeader();

/**
 * Bascule la visibilité de la section du pied de page.
 */

toggleFooter();

/**
 * Configure le dialogue/modal pour les informations de la newsletter.
 */

configInfoLettreDialog();
