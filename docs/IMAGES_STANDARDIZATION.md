# Standardisation des Tailles d'Images

## Guide d'utilisation des classes CSS pour les images

Ce document explique comment utiliser les classes CSS standardisées pour les images verticales et horizontales dans le portfolio.

---

## Classes Principales

### 1. **Images Horizontales (Paysage)**

#### `.img-horizontal` ou `.img-landscape`
- **Aspect Ratio:** 16:9
- **Usage:** Images paysage standard
- **Exemple:**
```html
<img src="images/paysage.jpg" class="img-horizontal" alt="Description">
```

#### `.img-horizontal-sm`
- **Hauteur:** 150px
- **Usage:** Petites images horizontales (listes, aperçus)
```html
<img src="images/petit_paysage.jpg" class="img-horizontal-sm" alt="Description">
```

#### `.img-horizontal-md`
- **Hauteur:** 280px
- **Usage:** Images moyennes (cartes de projets standard)
```html
<img src="images/moyen_paysage.jpg" class="img-horizontal-md" alt="Description">
```

#### `.img-horizontal-lg`
- **Hauteur:** 400px
- **Usage:** Grandes images horizontales (bandeaux, héros)
```html
<img src="images/grand_paysage.jpg" class="img-horizontal-lg" alt="Description">
```

---

### 2. **Images Verticales (Portrait)**

#### `.img-vertical` ou `.img-portrait`
- **Aspect Ratio:** 9:16
- **Usage:** Images portrait standard
- **Exemple:**
```html
<img src="images/portrait.jpg" class="img-vertical" alt="Description">
```

#### `.img-vertical-sm`
- **Hauteur:** 200px
- **Aspect Ratio:** 9:12
- **Usage:** Petites images verticales
```html
<img src="images/petit_portrait.jpg" class="img-vertical-sm" alt="Description">
```

#### `.img-vertical-md`
- **Hauteur:** 350px
- **Aspect Ratio:** 9:14
- **Usage:** Images verticales moyennes
```html
<img src="images/moyen_portrait.jpg" class="img-vertical-md" alt="Description">
```

#### `.img-vertical-lg`
- **Hauteur:** 500px
- **Aspect Ratio:** 9:16
- **Usage:** Grandes images verticales (galeries)
```html
<img src="images/grand_portrait.jpg" class="img-vertical-lg" alt="Description">
```

---

### 3. **Images Carrées**

#### `.img-square`
- **Aspect Ratio:** 1:1
- **Usage:** Images carrées standard
- **Exemple:**
```html
<img src="images/carre.jpg" class="img-square" alt="Description">
```

---

### 4. **Images Circulaires (Profil)**

#### `.img-circle` ou `.rounded-circle`
- **Aspect Ratio:** 1:1
- **Border Radius:** 50%
- **Usage:** Photos de profil, avatars
- **Exemple:**
```html
<img src="images/profil.jpg" class="img-circle" alt="Photo de profil">
```

---

### 5. **Images dans les Cartes**

#### `.card-img-top`
- **Hauteur:** 280px
- **Usage:** Images en haut des cartes Bootstrap
- **Remarque:** Déjà stylisée par défaut
```html
<img src="images/projet.jpg" class="card-img-top" alt="Description">
```

---

### 6. **Conteneurs d'Images**

#### `.img-wrapper`
- **Usage:** Conteneur wrapper pour les images avec aspect ratio
```html
<div class="img-wrapper" style="aspect-ratio: 16/9;">
    <img src="images/paysage.jpg" alt="Description">
</div>
```

#### `.img-responsive`
- **Usage:** Images flexibles et responsives
```html
<img src="images/image.jpg" class="img-responsive" alt="Description">
```

---

## Propriétés CSS Appliquées

Toutes les images standardisées bénéficient de:

- ✅ **`object-fit: cover`** - Les images remplissent le conteneur sans distorsion
- ✅ **`border-radius: 8px`** - Coins arrondis pour une meilleure esthétique
- ✅ **`display: block`** - Évite les espaces blancs en ligne
- ✅ **`width: 100%`** - Adaptation à la largeur du conteneur
- ✅ **`aspect-ratio`** - Maintient les proportions sans distorsion

---

## Responsivité

Les classes incluent des media queries pour mobile (`max-width: 768px`):

- Images horizontales md/lg → hauteur réduite à 200px
- Images verticales md/lg → hauteur réduite à 280px
- Images carte → hauteur réduite à 200px

---

## Exemple Complet

### Galerie de projets avec standardisation

```html
<!-- Horizontal -->
<div class="row">
    <div class="col-md-6">
        <img src="images/projet-paysage.jpg" class="img-horizontal-md" alt="Projet 1">
    </div>
    <div class="col-md-6">
        <img src="images/projet-portrait.jpg" class="img-vertical-md" alt="Projet 2">
    </div>
</div>

<!-- Carte standard -->
<div class="card">
    <img src="images/thumbnail.jpg" class="card-img-top" alt="Thumbnail">
    <div class="card-body">
        <h5 class="card-title">Titre</h5>
        <p class="card-text">Description</p>
    </div>
</div>

<!-- Profil -->
<img src="images/profil.jpg" class="img-circle" style="width: 150px;" alt="Profil">
```

---

## Bonnes Pratiques

1. **Choisir la bonne classe** en fonction du contexte (horizontal/vertical)
2. **Utiliser les size variants** (sm/md/lg) pour la hiérarchie visuelle
3. **Toujours ajouter un `alt`** pour l'accessibilité
4. **Tester sur mobile** pour vérifier la responsivité
5. **Optimiser les images** avant de les ajouter (compression)

---

## Notes Techniques

- `object-fit: cover` peut couper les bords de l'image → bien pour les images carrées/portraits
- `aspect-ratio` est supporté sur tous les navigateurs modernes
- Les iframes YouTube héritent du ratio 16:9 par défaut
- Pour IE11, utiliser des fallbacks ou une hauteur fixe

---

**Mis à jour:** 15 janvier 2026
