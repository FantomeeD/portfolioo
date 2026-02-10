/**
 * Initialisation du Breadcrumb pour le portfolio Nolhan Desseigne
 * Génère automatiquement le fil d'Ariane selon la structure du site
 */

document.addEventListener('DOMContentLoaded', function() {
    // Créer le conteneur du breadcrumb s'il n'existe pas
    let breadcrumbContainer = document.getElementById('breadcrumb-container');
    
    if (!breadcrumbContainer) {
        // Créer après le header
        const header = document.querySelector('header');
        if (header) {
            breadcrumbContainer = document.createElement('div');
            breadcrumbContainer.id = 'breadcrumb-container';
            breadcrumbContainer.style.marginTop = '0';
            header.insertAdjacentElement('afterend', breadcrumbContainer);
        }
    }

    if (!breadcrumbContainer) return;

    // Récupérer les données du breadcrumb depuis l'URL
    const breadcrumbData = generateBreadcrumbFromURL();
    
    // Initialiser le breadcrumb
    if (window.BreadcrumbGenerator && breadcrumbData.length > 0) {
        new BreadcrumbGenerator('#breadcrumb-container', breadcrumbData, {
            variant: 'bg',
            mobileMaxItems: 3
        });
    }
});

/**
 * Générer les données du breadcrumb selon la structure du site
 */
function generateBreadcrumbFromURL() {
    const path = window.location.pathname;
    const fileName = path.split('/').pop() || 'index.html';
    const pathParts = path.split('/').filter(p => p && p !== 'index.html');
    
    const items = [];
    
    // Toujours ajouter l'accueil en premier
    items.push({
        label: 'Accueil',
        url: '/',
        icon: 'home'
    });

    // Déterminer la structure basée sur le chemin
    
    // Pages racine
    if (fileName === 'index.html' && pathParts.length === 0) {
        // Page d'accueil - pas d'autres éléments
        return items;
    }
    
    if (fileName === 'projets.html') {
        items.push({
            label: 'Projets',
            url: '/projets.html',
            isActive: true
        });
        return items;
    }
    
    if (fileName === 'exploration.html') {
        items.push({
            label: 'Explorations',
            url: '/exploration.html',
            isActive: true
        });
        return items;
    }
    
    if (fileName === 'contact.html') {
        items.push({
            label: 'Contacts',
            url: '/contact.html',
            isActive: true
        });
        return items;
    }

    // Pages de catégories (p_categories/XXX.html)
    if (pathParts[0] === 'p_categories') {
        items.push({
            label: 'Projets',
            url: '/projets.html'
        });

        const categoryName = getCategoryName(fileName);
        items.push({
            label: categoryName,
            url: path,
            isActive: true
        });
        return items;
    }

    // Pages de projets (projets/XXX.html)
    if (pathParts[0] === 'projets') {
        items.push({
            label: 'Projets',
            url: '/projets.html'
        });

        const projectName = getProjectName(fileName);
        items.push({
            label: projectName,
            url: path,
            isActive: true
        });
        return items;
    }

    // Pages en anglais (en/XXX.html)
    if (pathParts[0] === 'en') {
        const enPageName = getEnglishPageName(fileName);
        if (enPageName) {
            items.push({
                label: enPageName,
                url: path,
                isActive: true
            });
        }
        return items;
    }

    // Si page de langue (sous-dossier avec langue)
    if (pathParts[0] === 'en' && pathParts[1] === 'p_categories') {
        items.push({
            label: 'Projects',
            url: '/en/projets.html'
        });
        const categoryName = getCategoryName(fileName);
        items.push({
            label: categoryName,
            url: path,
            isActive: true
        });
        return items;
    }

    if (pathParts[0] === 'en' && pathParts[1] === 'projets') {
        items.push({
            label: 'Projects',
            url: '/en/projets.html'
        });
        const projectName = getProjectName(fileName);
        items.push({
            label: projectName,
            url: path,
            isActive: true
        });
        return items;
    }

    return items;
}

/**
 * Obtenir le nom d'une catégorie de projet
 */
function getCategoryName(fileName) {
    const categoryMap = {
        'projets_g.html': 'Graphisme',
        'projets_m.html': 'Motion Design',
        'projets_md.html': 'Multimédia'
    };
    return categoryMap[fileName] || 'Catégorie';
}

/**
 * Obtenir le nom d'un projet formaté
 */
function getProjectName(fileName) {
    const projectMap = {
        'star3D.html': 'Animation 3D Star Wars',
        'europe_cuej.html': 'Europe CUEJ',
        'flextory.html': 'Flextory',
        'jaws_generique.html': 'Générique JAWS',
        'multicam.html': 'Multicam',
        'nautile_club.html': 'Nautile Club',
        'nikkonmo.html': 'Nikkonmo',
        'packshot.html': 'Packshot',
        'stage_voyages.html': 'Stage Voyages',
        'stage_wolfdog.html': 'Stage Wolfdog',
        'teaser_acc.html': 'Teaser ACC'
    };
    
    const name = projectMap[fileName];
    if (name) return name;
    
    // Fallback: convertir le nom du fichier
    return fileName
        .replace('.html', '')
        .replace(/_/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/**
 * Obtenir le nom d'une page anglaise
 */
function getEnglishPageName(fileName) {
    const pageMap = {
        'index.html': 'Home',
        'contact.html': 'Contact',
        'exploration.html': 'Explorations',
        'projets.html': 'Projects'
    };
    return pageMap[fileName] || null;
}
