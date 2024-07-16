/** 
 * Champ de recherche pour filtrer les articles.
 * @type {HTMLElement}
 */
const inputSearch = document.querySelector('.input-search');

/** 
 * Élément pour afficher le nombre d'articles trouvés.
 * @type {HTMLElement}
 */

const productCount = document.querySelector('.productCount');

/**
 * Configure la fonctionnalité de recherche pour filtrer les articles en fonction de la saisie dans inputSearch.
 */

export function configureSearch() {    
    inputSearch.addEventListener('input', () => {
        const cardsProducts = document.querySelectorAll('.card-product');
        let count = 0;
        cardsProducts.forEach(cardProduct => {
            let searchStr = cardProduct.getAttribute('data-search').toLowerCase();
            if (searchStr.includes(inputSearch.value.toLowerCase())) {
                cardProduct.classList.remove('hidden');
                count++;
            } else {
                cardProduct.classList.add('hidden');
            }
        });
        productCount.textContent = count + ' Items trouvées.';
    });
}