/**
 * Gère l'envoi du formulaire de contact.
 */

export function sentForm() {
    let formulaireContact = document.getElementById('contact-form');

    formulaireContact.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById("grid-email");
        const errorChamp = document.querySelector('.email-validation');

        if (!validateEmail(email.value)) {
            errorChamp.classList.remove('hidden');
        } else {
            errorChamp.classList.add('hidden');
            showDialog();
        }
    });
}

/**
 * Affiche la boîte de dialogue modale.
 */

function showDialog() {
    const overlay = document.querySelector('.overlay');

    overlay.classList.remove('invisible');

    const btnClose = document.querySelector('.btn-close');
    btnClose.addEventListener('click', () => {
        overlay.classList.add('invisible');
    });

    overlay.addEventListener('click', () => {
        overlay.classList.add('invisible');
    });

    const modaleForm = document.querySelector('.modal-form');
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