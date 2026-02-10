# Composant Breadcrumb (Fil d'Ariane)

Un composant de navigation breadcrumb complet, moderne, responsive et entièrement accessible.

## 📋 Fichiers

- `breadcrumb-example.html` - Exemple d'intégration avec 4 variantes
- `breadcrumb.css` - Styles complets avec variantes et responsive
- `breadcrumb.js` - Générateur JavaScript dynamique

## 🚀 Utilisation Rapide

### 1. HTML Simple (Manuel)

```html
<nav class="breadcrumb" aria-label="Fil d'Ariane">
    <ol class="breadcrumb__list">
        <li class="breadcrumb__item">
            <a href="/" class="breadcrumb__link">Accueil</a>
        </li>
        <li class="breadcrumb__item">
            <a href="/projets" class="breadcrumb__link">Projets</a>
        </li>
        <li class="breadcrumb__item breadcrumb__item--active" aria-current="page">
            Mon Portfolio
        </li>
    </ol>
</nav>
```

### 2. Générer Dynamiquement (JavaScript)

```javascript
// Créer un breadcrumb à partir d'un tableau
const breadcrumbData = [
    { label: 'Accueil', url: '/', isActive: false },
    { label: 'Services', url: '/services', isActive: false },
    { label: 'Design', url: '#', isActive: true }
];

const breadcrumb = new BreadcrumbGenerator('#breadcrumb-container', breadcrumbData);
```

### 3. Générer depuis l'URL Actuelle

```javascript
// Créer automatiquement le fil d'Ariane depuis le chemin URL
const breadcrumb = BreadcrumbGenerator.fromCurrentPath('/');
```

## 🎨 Variantes CSS

### Variante Standard
```html
<nav class="breadcrumb" aria-label="Fil d'Ariane">
    <!-- ... -->
</nav>
```

### Variante avec Arrière-plan
```html
<nav class="breadcrumb breadcrumb--bg" aria-label="Fil d'Ariane">
    <!-- ... -->
</nav>
```

### Variante Compacte
```html
<nav class="breadcrumb breadcrumb--compact" aria-label="Fil d'Ariane">
    <!-- ... -->
</nav>
```

### Variante Large
```html
<nav class="breadcrumb breadcrumb--wide" aria-label="Fil d'Ariane">
    <!-- ... -->
</nav>
```

### Variante avec Icônes
```html
<nav class="breadcrumb breadcrumb--with-icons" aria-label="Fil d'Ariane">
    <!-- ... -->
</nav>
```

## 🔧 Options du Générateur

```javascript
new BreadcrumbGenerator(selector, items, {
    variant: 'default',        // 'default', 'bg', 'with-icons', 'compact', 'wide'
    separator: '›',             // '›', '/', '|', '→'
    withIcons: false,           // Afficher les icônes
    collapsible: false,         // Replier sur mobile
    maxItems: null,             // Limite du nombre d'éléments (null = tous)
    mobileMaxItems: 3,          // Nombre max sur mobile
    ariaLabel: 'Fil d\'Ariane' // Label accessibilité
});
```

## 📱 Structure des Éléments

```javascript
{
    label: 'Titre du lien',      // Requis
    url: '/chemin',              // L'URL du lien
    isActive: false,             // Marquer comme actif
    icon: 'home',                // Icône: 'home', 'folder', 'file', 'gallery', 'settings', 'user', 'search'
    title: 'Tooltip'             // Texte au survol (optionnel)
}
```

## 💡 Exemples d'Utilisation

### Exemple 1: Breadcrumb Simple
```javascript
const items = [
    { label: 'Accueil', url: '/' },
    { label: 'Blog', url: '/blog' },
    { label: 'Article', url: '#', isActive: true }
];

new BreadcrumbGenerator('#breadcrumb', items);
```

### Exemple 2: Avec Icônes
```javascript
const items = [
    { label: 'Accueil', url: '/', icon: 'home' },
    { label: 'Galerie', url: '/galerie', icon: 'gallery' },
    { label: 'Photos', url: '#', isActive: true, icon: 'file' }
];

new BreadcrumbGenerator('#breadcrumb', items);
```

### Exemple 3: À partir de l'URL
```javascript
// Pour une URL comme /products/electronics/phones
// Génère automatiquement: Accueil > Products > Electronics > Phones

const breadcrumb = new BreadcrumbGenerator(
    '#breadcrumb',
    BreadcrumbGenerator.fromCurrentPath()
);
```

### Exemple 4: Variante avec Arrière-plan
```javascript
const items = [
    { label: 'Accueil', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Design Web', url: '#', isActive: true }
];

new BreadcrumbGenerator('#breadcrumb', items, {
    variant: 'bg'
});
```

## 🎯 Méthodes Disponibles

```javascript
const breadcrumb = new BreadcrumbGenerator('#selector', items);

// Mettre à jour les éléments
breadcrumb.update(newItems);

// Ajouter un élément
breadcrumb.addItem({ label: 'Nouveau', url: '/nouveau' });

// Supprimer un élément (par index)
breadcrumb.removeItem(1);

// Générer depuis l'URL actuelle (statique)
BreadcrumbGenerator.fromCurrentPath('/base-url');

// Formater un segment d'URL (statique)
BreadcrumbGenerator.formatSegment('my-page-name'); // "My Page Name"
```

## 🌐 Séparateurs Personnalisés

Utilisez le CSS pour changer les séparateurs:

```css
/* Chevrons (défaut) */
.breadcrumb__item:not(:last-child)::after {
    content: '›';
}

/* Ou via CSS avec variante */
.breadcrumb--slash .breadcrumb__item:not(:last-child)::after {
    content: '/';
}

.breadcrumb--pipe .breadcrumb__item:not(:last-child)::after {
    content: '|';
}

.breadcrumb--arrow .breadcrumb__item:not(:last-child)::after {
    content: '→';
}
```

## ♿ Accessibilité

✅ **Inclus par défaut:**
- Sémantique HTML correcte (`<nav>`, `<ol>`, `aria-label`)
- Attribut `aria-current="page"` sur l'élément actif
- Navigation au clavier complète
- Support du mode sombre
- Support des préférences de mouvement réduit
- Focus visible pour l'accessibilité

## 📱 Responsive

Le composant s'adapte automatiquement:
- **Desktop** (> 768px): Affiche tous les éléments
- **Tablette** (≤ 768px): Masque les éléments intermédiaires
- **Mobile** (< 480px): Affiche seulement le premier et dernier élément

## 🎨 Variables CSS Personnalisables

```css
:root {
    --breadcrumb-color: #666;
    --breadcrumb-link-color: #007bff;
    --breadcrumb-link-hover-color: #0056b3;
    --breadcrumb-active-color: #333;
    --breadcrumb-separator-color: #ccc;
    --breadcrumb-bg-color: #f8f9fa;
    --breadcrumb-border-color: #dee2e6;
    --breadcrumb-padding: 1rem;
    --breadcrumb-gap: 0.5rem;
    --breadcrumb-font-size: 0.95rem;
}
```

## 🚀 Intégration dans votre Projet

### Étape 1: Inclure les Fichiers
```html
<!-- Dans le <head> -->
<link rel="stylesheet" href="breadcrumb.css">

<!-- Avant la fermeture du </body> -->
<script src="breadcrumb.js"></script>
```

### Étape 2: Ajouter un Conteneur
```html
<div id="my-breadcrumb"></div>
```

### Étape 3: Initialiser
```javascript
<script>
    const items = [
        { label: 'Accueil', url: '/' },
        { label: 'Produits', url: '/produits' },
        { label: 'Détails', url: '#', isActive: true }
    ];
    
    new BreadcrumbGenerator('#my-breadcrumb', items);
</script>
```

## 🎯 Cas d'Usage

- Pages de documentation
- Sites d'e-commerce
- Explorateurs de fichiers
- Systèmes de gestion de contenu
- Navigateurs de catégories
- Tutoriels pas à pas

## 🔒 Compatibilité

- ✅ Chrome / Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile (iOS/Android)
- ✅ Mode sombre
- ✅ Lecteurs d'écran

## 📝 Licence

Libre d'utilisation - à intégrer dans votre projet portfolio.

---

**Fichier exemple:** Ouvrez `breadcrumb-example.html` dans un navigateur pour voir les 4 variantes en action.
