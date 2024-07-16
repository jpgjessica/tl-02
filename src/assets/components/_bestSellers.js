import getProducts from "./_products";

/**
 * Affiche les produits best-sellers dans le conteneur spécifié.
 */

export function printBestSellers() {
    const bestSellerContainer = document.querySelector('.container-bestSeller');
    const products = getProducts();
    products.forEach(product => {
        if(product.isBestSellerProduct == true){
            bestSellerContainer.appendChild(product.toBestsellerHtml());        
        }
    });

}