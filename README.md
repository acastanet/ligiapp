# 📄 LIGIA — Système Visuel V2.1 (Style Papier & Rigueur Éditoriale)

> **« Le papier comme interface. »**  
> Une direction artistique singulière inspirée du design éditorial suisse, de la cartographie (IGN/Copernicus) et des publications scientifiques. Ce système visuel privilégie les aplats francs, une lumière physique cohérente, une typographie soignée et des contours complets, sans tomber dans le néomorphisme ou les artifices de diorama.

---

## 🎯 Principes Fondamentaux

1. **2D strictly aligned & contours complets :**  
   Tous les composants (cartes, boutons, champs, messages, badges) utilisent un contour continu d'épaisseur constante (1 px) sur leurs quatre côtés. La couleur d'état passe par l'encre, le fond ou un repère intérieur.
2. **Modèle de lumière physique unique (haut-gauche → bas-droite) :**  
   Une seule source d'éclairage régit la totalité de la page :
   * **Relief (élévation) :** ombre portée en bas-droite + crête claire (*highlight*) en haut-gauche.
   * **Creux (*sunken* / emboutissage) :** ombre intérieure en haut-gauche + liseré clair en bas-droite.
3. **Séparation « Aplats vifs » vs « Encres typographiques » :**  
   Les aplats vifs (`#FFD600`, `#06A77D`, `#F77F00`) sont réservés aux surfaces, bordures et repères graphiques. Pour le texte, le système utilise des encres dédiées assombries (`--ink-*`), toutes certifiées **WCAG AA/AAA (≥ 4.5:1)** sur fond blanc et sur le papier `#F4F4F0`.
4. **Zéro dépendance & légèreté absolue :**  
   100 % HTML5 sémantique, CSS3 moderne organisé en couches (`@layer`), et Vanilla JS minimaliste (< 60 lignes) sans aucun framework lourd.

---

## 🗂️ Liste des Fichiers & Rôles

### 1. Fichiers strictement indispensables (Cœur du Style V2.1)
Pour intégrer ou déployer ce système visuel dans n'importe quel projet web, **seuls ces 2 fichiers sont requis** :

| Fichier | Rôle | Statut |
| :--- | :--- | :--- |
| [`style-v2-refined.css`](file:///c:/DEV_ALX/ligizpp/style-v2-refined.css) | **Feuille de style maîtresse (Design System)** : Contient l'ensemble des tokens, le reset, la texture grain papier SVG intégrée, la grille 12 col, tous les composants (boutons, champs, cartes, table, modale, switch) et les media queries. | 🟢 **Indispensable** |
| [`style-v2-refined.html`](file:///c:/DEV_ALX/ligizpp/style-v2-refined.html) | **Page vitrine & Atelier interactif** : Sert de référence visuelle, de catalogue de composants, de documentation vivante et de bac à sable pour tester les variables CSS en direct. | 🟢 **Indispensable** |
| Polices distantes (Google Fonts) | `IBM Plex Sans` (400, 500, 600, 700) et `Plus Jakarta Sans` (700, 800) chargées via `<link>` dans l'en-tête HTML. | 🟢 **Recommandé** *(repli natif sans-serif automatique)* |

---

### 2. Fichiers de documentation
| Fichier | Rôle |
| :--- | :--- |
| [`README.md`](file:///c:/DEV_ALX/ligizpp/README.md) | Documentation technique complète, guide des tokens, spécifications A11y et exemples de code. |

---

### 3. Fichiers d'environnement & développement (Optionnels)
Ces fichiers servent à lancer le serveur de développement local ou à compiler l'application globale :

```text
├── package.json         # Dépendances du projet (Vite, React, TypeScript)
├── vite.config.ts       # Configuration du serveur de dev Vite (port 3000)
├── tsconfig.json        # Configuration TypeScript de l'application
├── lancer.bat           # Script de démarrage rapide local sous Windows
└── dist/                # Dossier de build de production (généré)
```

---

### 4. Fichiers historiques / Archives (Non nécessaires pour V2.1)
Ces fichiers peuvent être conservés pour historique ou archivés :
* `style-v2.html` / `style-v2.css` : Version V2 initiale avant raffinements.
* `v1/` : Ancienne version V1 du système.
* `v2/style-v2-refined copy.*` : Fichiers de sauvegarde de travail.

---

## 🎨 Palette de Couleurs & Tokens Sémantiques

### 1. Aplats primitifs (Surfaces & Signaux)
| Token | Couleur | HEX | Usage |
| :--- | :--- | :--- | :--- |
| `--paper-bg` | Papier naturel | `#F4F4F0` | Fond global du document |
| `--paper-white` | Blanc pur | `#FFFFFF` | Cartouches et surfaces posées |
| `--paper-text` | Encre sombre | `#1A1A1A` | Texte principal et boutons sombres |
| `--paper-blue` | Bleu cobalt | `#0047AB` | Structure, focus et action primaire |
| `--paper-yellow` | Jaune signal | `#FFD600` | Signalisation, sélection |
| `--paper-orange` | Orange ocre | `#F77F00` | Accentuation, vigilance |
| `--paper-green` | Vert émeraude | `#06A77D` | Validation, succès, statut actif |
| `--paper-red` | Rouge cardinal | `#E63946` | Alerte, erreur, danger |

### 2. Encres typographiques (Contraste garanti ≥ 4.5:1)
| Token | Rendu | Contraste sur blanc | Usage |
| :--- | :--- | :--- | :--- |
| `--ink-blue` | `#0047AB` | **8.44 : 1** | Titres emphase, liens, labels actifs |
| `--ink-green` | `#087D61` | **5.10 : 1** | Textes de succès, badges validés |
| `--ink-orange` | `#A65200` | **5.49 : 1** | Textes de vigilance, avertissements |
| `--ink-red` | `#C1272D` | **5.84 : 1** | Messages d'erreur, alertes critiques |
| `--text-muted` | `rgb(26 26 26 / .64)` | **5.06 : 1** | Descriptions, métadonnées, légendes |

---

## 📐 Architecture CSS (`@layer`)

Le fichier `style-v2-refined.css` est structuré en **6 couches de cascade explicites** :

```css
@layer tokens, base, layout, components, utilities, responsive;
```

1. **`tokens` :** Définition centralisée des variables `:root` (couleurs, encres, échelle d'espacement de 4 px `--sp-1` à `--sp-10`, rayons `--radius-*`, ombres dynamiques).
2. **`base` :** Reset neutre, application de la texture SVG grain papier tuilée à taille fixe (`body::before`), typographie de base et anneaux d'accessibilité `:focus-visible`.
3. **`layout` :** Conteneur central (`--container: 1180px`), sections éditoriales et grille universelle 12 colonnes (`.hero-grid`, `.section-heading`, `.component-block`, `.grid-demo`).
4. **`components` :** Briques UI modulaires (boutons, champs, cartes, tableau, modale, switch, marque).
5. **`utilities` :** Classes transverses (`.eyebrow`, `.label`, `.mono`, `.note`, `.status-dot`, `.visually-hidden`).
6. **`responsive` :** Adaptations mobiles (breakpoints à **940 px** et **620 px**), gestion du tactile (`@media (hover: hover)`), mode réduit (`prefers-reduced-motion`) et feuille d'impression (`@media print`).

---

## 🧱 Guide des Composants Principaux

### 1. Boutons & Hiérarchie d'Action
Le système propose deux niveaux de visibilité :
* **Actions pleines (*Primary CTA*) :** Forte masse visuelle pour l'action principale.
  ```html
  <button class="btn btn-solid">Primaire plein</button>
  <button class="btn btn-solid-accent">Accent plein</button>
  <button class="btn btn-solid-success">Valider</button>
  <button class="btn btn-solid-danger">Alerte</button>
  ```
* **Actions contours (*Secondary / Outline*) :**
  ```html
  <button class="btn btn-primary">Primaire contour</button>
  <button class="btn btn-accent">Accent contour</button>
  <button class="btn">Secondaire neutre</button>
  ```
* **Tailles & États :** `.btn-small`, `.btn-large`, `.btn-icon`, et attribut `disabled`.

---

### 2. Formulaires & États réels
Chaque champ bénéficie d'une bordure complète et d'un état focus soigné :
```html
<!-- Champ avec badge Requis -->
<label class="field">
  <div class="field-head">
    <span>Lieu d’observation</span>
    <span class="field-req">Requis</span>
  </div>
  <input type="text" value="Val-d’Aigoual" required>
</label>

<!-- Champ en erreur de validation -->
<label class="field has-error">
  <div class="field-head"><span>Identifiant station</span></div>
  <input type="text" value="FR-AIG-99" aria-invalid="true">
  <span class="field-error-msg">⚠️ Identifiant non reconnu par le réseau</span>
</label>

<!-- Champ désactivé -->
<label class="field">
  <div class="field-head"><span>Capteur secondaire</span></div>
  <input type="text" value="Inactif (maintenance)" disabled>
</label>
```

---

### 3. Modale Papier Native HTML5 (`<dialog>`)
Zéro script lourd : utilise l'API native `<dialog>` stylée avec la matière papier et un fond flouté :
```html
<dialog id="demo-dialog" class="paper paper-dialog">
  <div class="dialog-head">
    <h3>Titre de la fenêtre</h3>
    <button class="btn btn-small btn-icon" id="close-dialog-x">✕</button>
  </div>
  <p>Contenu de la boîte de dialogue...</p>
  <div class="dialog-actions">
    <button class="btn btn-small" id="close-dialog-cancel">Fermer</button>
    <button class="btn btn-small btn-solid" id="close-dialog-ok">Compris</button>
  </div>
</dialog>
```

```javascript
// Ouverture et fermeture simples :
dialog.showModal();
dialog.close();
```

---

### 4. Cartes de Données (KPI) & Micro-visualisations
* **Surface interactive :** Ajouter `.paper-interactive` pour donner une affordance de survol avec micro-élévation.
* **Mini jauge intégrée :**
```html
<article class="metric-card paper paper-interactive">
  <span class="metric-kicker">Humidité</span>
  <div>
    <strong>62<span>%</span></strong>
    <div class="mini-gauge" aria-hidden="true">
      <div class="mini-gauge-fill" style="width: 62%;"></div>
    </div>
  </div>
  <div class="metric-meta"><span>→ stable</span><small>sur 3 h</small></div>
</article>
```

---

### 5. Tableaux & Badges Sémantiques
* **Chiffres tabulaires :** Classe `.table-num` pour aligner les virgules et chiffres de mesure.
* **Badges de statut :**
```html
<span class="status ok">● validé</span>
<span class="status info">ℹ info</span>
<span class="status warning">▲ vigilance</span>
<span class="status danger">✕ alerte</span>
<span class="status neutral">archivé</span>
```

---

### 6. Système de Marque & Animation Focus
* **9 variantes géométriques :** `brand-mark` (neutre), `--constellation`, `--duo`, `--solar`, `--ring`, `--constellation-ring`, `--paper`, `--constellation-paper`, `--deboss`.
* **Points en pourcentage :** Chaque point `<i>` se positionne en `%` du diamètre, ce qui permet de redimensionner toute la marque via une seule variable `--mark-size` (ex. `16px`, `36px`, `56px`).
* **Animation Focus :** Convergence dynamique de 5 points satellites depuis l'extérieur vers le centre de l'anneau en boucle fluide continue.

---

## 🎛️ Atelier Interactif & JavaScript

La page intègre un script Vanilla JS discret (< 60 lignes) qui gère :
1. **Le pilotage en direct des variables CSS `:root` :**
   * `#r1` → Intensité des ombres (`--shadow-intensity`)
   * `#r2` → Rayon de flou des ombres (`--shadow-blur-scale`)
   * `#r3` → Espacement de la grille (`--grid-gap`)
   * `#r4` → Rayon d'arrondi (`--radius-md`, `--radius-lg`, `--radius-sm`)
   * Bouton de réinitialisation automatique vers les valeurs nominales.
2. **Le clic pour copier avec Toast de notification :**
   * Tout élément doté de l'attribut `data-copy="..."` copie immédiatement la valeur dans le presse-papier et affiche une micro-notification toast en bas à droite.

---

## ♿ Accessibilité (A11y) & Bonnes Pratiques

* **Contraste WCAG AAA/AA** sur l'ensemble des textes et des encres.
* **Anneaux de focus bien visibles** (`outline: 2px solid var(--paper-blue)`) avec décalage (`outline-offset: 2px`).
* **Lien d'évitement natif** (`.skip-link`) pour la navigation au clavier.
* **Support complet de `prefers-reduced-motion`** désactivant instantanément les animations et transitions.
* **Styles d'impression dédiés** (`@media print`) masquant le grain et les ombres pour une impression propre et économique sur papier physique.

---

*LIGIA Style V2.1 — Conçu avec rigueur, clarté et élégance.*
