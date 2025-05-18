    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('nav-menu');
    
    burger.addEventListener('click', () => {
      const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
      burger.setAttribute('aria-expanded', !expanded);
      navMenu.classList.toggle('open');
    });
    
    // Fermer le menu quand on clique sur un lien
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        burger.setAttribute('aria-expanded', false);
      });
    });
document.querySelectorAll('.tech-item').forEach(item => {
  const tooltip = item.querySelector('.tooltip');

  item.addEventListener('mouseenter', () => {
    // Affiche la tooltip invisible (display block, mais invisible)
    tooltip.style.display = 'block';
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '0';
    tooltip.style.left = '50%';
    tooltip.style.right = 'auto';
    tooltip.style.transform = 'translateX(-50%)';

    // Force le recalcul du layout
    const rect = tooltip.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    // Ajuste la position si la bulle dépasse à gauche ou droite
    if (rect.left < 10) {
      tooltip.style.left = '10px';
      tooltip.style.right = 'auto';
      tooltip.style.transform = 'none';
    } else if (rect.right > viewportWidth - 10) {
      tooltip.style.left = 'auto';
      tooltip.style.right = '10px';
      tooltip.style.transform = 'none';
    }

    // Maintenant affiche la bulle avec opacité
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = '1';
  });

  item.addEventListener('mouseleave', () => {
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '0';
    tooltip.style.display = 'none';
    tooltip.style.left = '50%';
    tooltip.style.right = 'auto';
    tooltip.style.transform = 'translateX(-50%)';
  });
});
