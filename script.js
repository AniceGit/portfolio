// Afficher l'année actuelle dans le footer
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footer.textContent = `© ${currentYear} [Ton Nom] - Tous droits réservés`;
});
