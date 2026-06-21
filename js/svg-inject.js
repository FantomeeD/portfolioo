// Injection inline des SVGs Simple Icons pour contrôle couleur CSS
const CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@13/icons/';
    document.querySelectorAll('.hero-tool-icon[data-icon]').forEach(el => {
        fetch(CDN + el.dataset.icon + '.svg')
            .then(r => r.text())
            .then(svg => {
                el.innerHTML = svg;
                // Hover : couleur de marque
                el.addEventListener('mouseenter', () => { el.style.color = el.dataset.color; });
                el.addEventListener('mouseleave', () => { el.style.color = ''; });
            })
            .catch(() => { el.textContent = el.title; }); // Fallback texte si CDN KO
    });