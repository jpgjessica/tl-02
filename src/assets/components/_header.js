/**
 * Gère le menu mobile en ajoutant des écouteurs d'événements pour le bouton de menu et le bouton de fermeture.
 */

export function menuMobileHeader() {
    const menuButton = document.querySelector('.menu-mobile-btn');
    const closeButton = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuButton && closeButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.remove('-translate-x-full');
        });

        closeButton.addEventListener('click', () => {
            mobileMenu.classList.add('-translate-x-full');
            mobileMenu.addEventListener('transitionend', function onTransitionEnd() {
                mobileMenu.classList.add('hidden');
                mobileMenu.removeEventListener('transitionend', onTransitionEnd);
            });
        });
    }
}