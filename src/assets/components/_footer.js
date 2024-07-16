/**
 * Toggle pour afficher/masquer les éléments du footer en mode mobile.
 */

export function toggleFooter() {
    const expandButtons = document.querySelectorAll('.expand-more');

    expandButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const navMobile = document.querySelector(`#${targetId}`);

            if (navMobile) {
                navMobile.classList.toggle('hidden');
                button.classList.toggle('rotate-180');
            }
        });
    });
}

/**
 * Configure le dialogue d'inscription à l'infolettre.
 */

export function configInfoLettreDialog(){
 const btnInfolettre = document.querySelector('.btn-send-infolettre')
 btnInfolettre.addEventListener('click', (e) => {
        e.preventDefault();
        const email = document.querySelector(".input-info");

         const errorChamp = document.querySelector('.email-infolettre-validation');

        if (!validateEmail(email.value)) {
            errorChamp.classList.remove('hidden');
        } else {
            errorChamp.classList.add('hidden');
            showInfoLettreDialog();
        }       
    });
}

/**
 * Affiche la boîte de dialogue d'inscription à l'infolettre.
 */

function showInfoLettreDialog() {
    const overlay = document.querySelector('.overlay-infolettre');

    overlay.classList.remove('invisible');

    const btnClose = document.querySelector('.btn-close-infolettre');
    btnClose.addEventListener('click', () => {
        overlay.classList.add('invisible');
    });

    overlay.addEventListener('click', () => {
        overlay.classList.add('invisible');
    });

    const modaleForm = document.querySelector('.modal-infolettre');
    modaleForm.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

/**
 * Valide une adresse email.
 * @param {string} email - L'adresse email à valider.
 * @returns {boolean} true si l'adresse email est valide, sinon false.
 */

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};