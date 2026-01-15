# Cheatsheet - Standardisation des Images

## Guide rapide pour utiliser les classes d'images standardisées

### Horizontal (Paysage)
```html
<!-- Aspect 16:9 avec hauteur auto -->
<img src="image.jpg" class="img-horizontal" alt="Description">

<!-- Petit (150px) -->
<img src="image.jpg" class="img-horizontal-sm" alt="Description">

<!-- Moyen (280px) - Défaut pour les cartes -->
<img src="image.jpg" class="img-horizontal-md" alt="Description">

<!-- Grand (400px) -->
<img src="image.jpg" class="img-horizontal-lg" alt="Description">
```

### Vertical (Portrait)
```html
<!-- Aspect 9:16 -->
<img src="image.jpg" class="img-vertical" alt="Description">

<!-- Petit (200px) -->
<img src="image.jpg" class="img-vertical-sm" alt="Description">

<!-- Moyen (350px) -->
<img src="image.jpg" class="img-vertical-md" alt="Description">

<!-- Grand (500px) -->
<img src="image.jpg" class="img-vertical-lg" alt="Description">
```

### Spéciales
```html
<!-- Carré (1:1) -->
<img src="image.jpg" class="img-square" alt="Description">

<!-- Circulaire / Profil (1:1 + border-radius 50%) -->
<img src="image.jpg" class="img-circle" alt="Profile">

<!-- Carte Bootstrap standard -->
<img src="image.jpg" class="card-img-top img-horizontal-md" alt="Description">

<!-- Responsive / Flexible -->
<img src="image.jpg" class="img-responsive" alt="Description">
```

### iFrames (YouTube)
```html
<!-- Applique 16:9 et style par défaut -->
<iframe src="https://youtube.com/embed/..." class="img-responsive"></iframe>
```

---

## Récapitulatif des propriétés CSS

| Classe | Type | Hauteur | Aspect Ratio | Cas d'usage |
|--------|------|---------|--------------|------------|
| `.img-horizontal` | Paysage | Auto | 16:9 | Images standards |
| `.img-horizontal-sm` | Paysage | 150px | - | Petites images |
| `.img-horizontal-md` | Paysage | 280px | - | Cartes standards |
| `.img-horizontal-lg` | Paysage | 400px | - | Grandes images |
| `.img-vertical` | Portrait | Auto | 9:16 | Images verticales |
| `.img-vertical-sm` | Portrait | 200px | 9:12 | Petites portraits |
| `.img-vertical-md` | Portrait | 350px | 9:14 | Moyennes portraits |
| `.img-vertical-lg` | Portrait | 500px | 9:16 | Grandes portraits |
| `.img-square` | Carré | Auto | 1:1 | Images carrées |
| `.img-circle` | Rond | Auto | 1:1 | Photos de profil |
| `.card-img-top` | Carte | 280px | - | Images de cartes |
| `.img-responsive` | Flexible | Auto | - | Images fluides |

---

## Propriétés Communes

Toutes les classes incluent:
- ✅ `width: 100%` - Adapté au conteneur
- ✅ `height: auto` ou hauteur spécifiée
- ✅ `object-fit: cover` - Pas de distorsion
- ✅ `border-radius: 8px` - Coins arrondis
- ✅ `display: block` - Pas d'espace blanc

---

## Exemples Pratiques

### Galerie mixte
```html
<div class="row">
  <div class="col-md-6">
    <img src="horizontal.jpg" class="img-horizontal-lg" alt="">
  </div>
  <div class="col-md-6">
    <img src="vertical.jpg" class="img-vertical-md" alt="">
  </div>
</div>
```

### Profil utilisateur
```html
<img src="avatar.jpg" class="img-circle" style="width: 100px;" alt="Profil">
```

### Cartes de projets
```html
<div class="card">
  <img src="thumbnail.jpg" class="card-img-top img-horizontal-md" alt="">
  <div class="card-body">
    <h5>Titre du projet</h5>
  </div>
</div>
```

---

**Mis à jour:** 15 janvier 2026
