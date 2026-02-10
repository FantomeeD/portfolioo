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
 * Calculer le chemin relatif vers la racine selon la profondeur
 */
function getBasePath() {
    const path = window.location.pathname;
    const pathParts = path.split('/').filter(p => p && p !== 'index.html');
    
    // Compter la profondeur (nombre de dossiers)
    const depth = pathParts.length;
    
    if (depth === 0) return './';
    if (depth === 1) return '../';
    if (depth === 2) return '../../';
    
    return '../'.repeat(depth);
}

/**
 * Générer les données du breadcrumb selon la structure du site
 */
function generateBreadcrumbFromURL() {
    const path = window.location.pathname;
    let fileName = path.split('/').pop();
    
    // Gérer le cas où fileName est vide (racine du site)
    if (!fileName || fileName === '') {
        fileName = 'index.html';
    }
    
    const pathParts = path.split('/').filter(p => p && p !== 'index.html');
    const basePath = getBasePath();
    
    const items = [];
    
    // Déterminer si on est en version anglaise
    const isEnglish = pathParts[0] === 'en';
    
    // Toujours ajouter l'accueil en premier
    items.push({
        label: isEnglish ? 'Home' : 'Accueil',
        url: basePath + (isEnglish ? 'en/index.html' : 'index.html'),
        icon: 'home'
    });

    // Déterminer la structure basée sur le chemin
    
    // Pages racine
    if ((fileName === 'index.html' || fileName === '') && pathParts.length === 0) {
        // Page d'accueil - pas d'autres éléments
        return items;
    }
    
    if (fileName === 'projets.html' && pathParts.length === 0) {
        items.push({
            label: 'Projets',
            url: basePath + 'projets.html',
            isActive: true
        });
        return items;
    }
    
    if (fileName === 'exploration.html' && pathParts.length === 0) {
        items.push({
            label: 'Explorations',
            url: basePath + 'exploration.html',
            isActive: true
        });
        return items;
    }
    
    if (fileName === 'contact.html' && pathParts.length === 0) {
        items.push({
            label: 'Contacts',
            url: basePath + 'contact.html',
            isActive: true
        });
        return items;
    }

    // Pages racine en anglais
    if (fileName === 'index.html' && pathParts[0] === 'en' && pathParts.length === 1) {
        // Page d'accueil anglaise - juste Home
        return items;
    }
    
    if (fileName === 'projets.html' && pathParts[0] === 'en' && pathParts.length === 1) {
        items.push({
            label: 'Projects',
            url: basePath + 'projets.html',
            isActive: true
        });
        return items;
    }
    
    if (fileName === 'exploration.html' && pathParts[0] === 'en' && pathParts.length === 1) {
        items.push({
            label: 'Explorations',
            url: basePath + 'exploration.html',
            isActive: true
        });
        return items;
    }
    
    if (fileName === 'contact.html' && pathParts[0] === 'en' && pathParts.length === 1) {
        items.push({
            label: 'Contact',
            url: basePath + 'contact.html',
            isActive: true
        });
        return items;
    }

    // Pages de catégories (p_categories/XXX.html)
    if (pathParts.includes('p_categories')) {
        items.push({
            label: isEnglish ? 'Projects' : 'Projets',
            url: basePath + 'projets.html'
        });

        const categoryName = getCategoryName(fileName, isEnglish);
        items.push({
            label: categoryName,
            url: './' + fileName,
            isActive: true
        });
        return items;
    }

    // Pages de projets (projets/XXX.html)
    if (pathParts.includes('projets')) {
        items.push({
            label: isEnglish ? 'Projects' : 'Projets',
            url: basePath + 'projets.html'
        });

        const projectName = getProjectName(fileName, isEnglish);
        items.push({
            label: projectName,
            url: './' + fileName,
            isActive: true
        });
        return items;
    }

    return items;
}

/**
 * Obtenir le nom d'une catégorie de projet
 */
function getCategoryName(fileName, isEnglish = false) {
    const categoryMapFR = {
        'projets_g.html': 'Graphisme',
        'projets_m.html': 'Motion Design',
        'projets_md.html': 'Multimédia'
    };
    
    const categoryMapEN = {
        'projets_g.html': 'Graphic Design',
        'projets_m.html': 'Motion Design',
        'projets_md.html': 'Multimedia'
    };
    
    const map = isEnglish ? categoryMapEN : categoryMapFR;
    return map[fileName] || (isEnglish ? 'Category' : 'Catégorie');
}

/**
 * Obtenir le nom d'un projet formaté
 */
function getProjectName(fileName, isEnglish = false) {
    const projectMap = {
        'star3D.html': 'Animation 3D Star Wars',
        'europe_cuej.html': 'Europe CUEJ',
        'flextory.html': 'Flextory',
        'jaws_generique.html': isEnglish ? 'JAWS Opening Credits' : 'Générique JAWS',
        'multicam.html': 'Multicam',
        'nautile_club.html': 'Nautile Club',
        'nikkonmo.html': 'Nikkonmo',
        'packshot.html': 'Packshot',
        'stage_voyages.html': isEnglish ? 'Voyages Internship' : 'Stage Voyages',
        'stage_wolfdog.html': isEnglish ? 'Wolfdog Internship' : 'Stage Wolfdog',
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