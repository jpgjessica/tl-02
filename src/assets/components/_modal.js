/**
 * Configure la boîte de dialogue modale pour afficher les détails des produits lors du clic sur une carte de produit.
 */

import getProducts from "./_products";

export function configureDialog() {
    const overlay = document.querySelector('.overlay');
    const modale = document.querySelector('.modal-products');
    const productsCards = document.querySelectorAll('.card-product');

    for (let i = 0; i < productsCards.length; i++) {
        productsCards[i].addEventListener('click', () => {
            overlay.classList.remove('invisible')
            modale.textContent = '';
            modale.appendChild(getProducts()[i].toModalHtml());

            const closeButton = document.querySelector('.btn-close');

            closeButton.addEventListener('click', () => {
                overlay.classList.add('invisible');
            });

            const btnAddToCart = document.querySelector('.btn-buy-modal');

            btnAddToCart.addEventListener('click', () => {
                alert("Produit ajouté au panier!");
            });
        });
    }

    overlay.addEventListener('click', () => {
        overlay.classList.add('invisible');
    });

    modale.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}