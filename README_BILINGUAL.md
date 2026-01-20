# Portfolio Nolhan Desseigne - Bilingual Website

## Description

Ceci est une copie complète du portfolio de Nolhan Desseigne traduite en anglais. Le site est maintenant disponible dans deux versions:

**Version Française (Original):**
- `/index.html`
- `/contact.html`
- `/projets.html`
- `/exploration.html`
- Fichiers de projets dans `/projets/`
- Catégories de projets dans `/p_categories/`

**Version Anglaise (English):**
- `/en/index.html`
- `/en/contact.html`
- `/en/projets.html`
- `/en/exploration.html`
- Fichiers de projets dans `/en/projets/`
- Catégories de projets dans `/en/p_categories/`

---

## Structure du Site Anglais / English Site Structure

```
/en
├── index.html                    # Page d'accueil / Home Page
├── contact.html                  # Page de contact / Contact Page
├── projets.html                  # Galerie des projets / Projects Gallery
├── exploration.html              # Section exploration / Explorations Section
├── projets/                      # Détails des projets / Project Details
│   ├── jaws_generique.html      # Jaws Opening Credits Reimagined
│   ├── stage_voyages.html       # Leclerc Voyages Internship
│   ├── stage_wolfdog.html       # Wolfdog Production Internship
│   ├── teaser_acc.html          # Insanitation Teaser
│   ├── europe_cuej.html         # Europe on the Defensive
│   ├── flextory.html            # QLIO Flextory Report
│   ├── multicam.html            # Multicam Project
│   ├── nautile_club.html        # Nautile Club Report
│   ├── nikkonmo.html            # Nikon Making Of
│   └── packshot.html            # JBL Packshot
└── p_categories/                # Catégories de projets / Project Categories
    ├── projets_g.html           # Graphics Projects
    ├── projets_m.html           # Editing Projects
    └── projets_md.html          # Motion Design Projects
```

---

## Pages Traduites / Translated Pages

### Pages Principales / Main Pages

1. **Home Page** (`index.html`)
   - Présentation personnelle et premiers projets / Personal introduction and latest projects
   
2. **Projects Page** (`projets.html`)
   - Galerie complète des projets avec filtrage / Complete project gallery with filtering
   - Catégories: Montages, Graphismes, Motion Design / Categories: Editing, Graphics, Motion Design

3. **Explorations Page** (`exploration.html`)
   - Section portfolio varié / Various portfolio works

4. **Contact Page** (`contact.html`)
   - Informations de contact / Contact information

### Project Details / Détails des Projets

Chaque projet a une page détaillée avec:
- Description du projet / Project description
- Objectifs et contraintes / Goals and constraints
- Processus créatif / Creative process
- Vidéos et images / Videos and images

### Project Categories / Catégories de Projets

- **Graphics** (`projets_g.html`): Projets de design graphique
- **Editing** (`projets_m.html`): Projets de montage vidéo
- **Motion Design** (`projets_md.html`): Projets de motion design

---

## Contenu Traduit / Translated Content

### Sections Traduites:
✓ Menus de navigation / Navigation menus
✓ Titres et descriptions de projets / Project titles and descriptions
✓ Textes d'introduction / Introductory texts
✓ Libellés des catégories / Category labels
✓ Informations de contact / Contact information
✓ Attributions de pied de page / Footer attributions

### CSS et Assets
- Les fichiers CSS partagés / Shared CSS files: `/css/style.css`
- Les images partagées / Shared images: `/images/`
- Ces ressources sont identiques pour les deux versions

---

## Notes Techniques / Technical Notes

- Les deux versions utilisent la même feuille de style CSS / Both versions use the same CSS stylesheet
- Les URLs internes pointent correctement dans chaque version / Internal URLs correctly point within each version
- Les vidéos YouTube restent les mêmes dans les deux versions / YouTube videos remain the same in both versions
- Les chemins des images sont relatifs aux fichiers HTML / Image paths are relative to HTML files

---

## Instructions d'Accès / Access Instructions

### Version Française / French Version:
Ouvrez `/index.html` dans votre navigateur

### Version Anglaise / English Version:
Ouvrez `/en/index.html` dans votre navigateur

---

## Développement Futur / Future Development

Pour maintenir les deux versions synchronisées, il faudrait:
1. Mettre à jour à la fois la version française et anglaise lors de modifications
2. Ou implémenter un système de localisation (i18n) pour automatiser les traductions

**Alternative:** Utiliser une solution avec des fichiers de traduction séparés pour faciliter la maintenance.

---

**Date de création / Creation date:** janvier 2026 / January 2026
**Portfolio:** Nolhan Desseigne
**Technologies:** HTML5, CSS3, Bootstrap 5, YouTube Embeds
