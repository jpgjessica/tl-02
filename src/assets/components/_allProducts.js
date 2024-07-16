import getProducts from "./_products";

/**
 * Affiche tous les produits dans le conteneur spécifié.
 */

export function printAllProducts() {
    const allProductsContainer = document.querySelector('.container-allProducts');
    const products = getProducts();
    products.forEach(product => {
        allProductsContainer.appendChild(product.toProductHtml());
    });
}