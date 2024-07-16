/**
 * Importations et initialisations des fonctionnalités liées aux produits.
 */

import { printAllProducts } from '../components/_allProducts';
import { configureSearch } from '../components/_filter';
import { configureDialog } from '../components/_modal';

/**
 * Affiche tous les produits sur la page.
 */
printAllProducts();

/**
 * Configure la fonctionnalité de recherche pour filtrer les produits.
 */

configureSearch();

/**
 * Configure la fonctionnalité de dialogue/modal.
 */

configureDialog();