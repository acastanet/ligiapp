# LIGIA Design System — guide pour agents

## Autorité visuelle

1. Lire `PRODUCT.md`, puis `DESIGN.md`, avant toute modification UI.
2. Les sources visuelles canoniques sont `style-v2-refined.html` et `style-v2-refined.css`.
3. En cas de divergence, les deux fichiers de référence priment sur le README, les archives et les implémentations alternatives.
4. Préserver l'identité existante pour toute extension ou correction. Ne la remplacer qu'à la demande explicite de l'utilisateur.

## Utiliser les tokens

Les primitives historiques (`--paper-*`, `--ink-*`, `--sp-*`, `--shadow-*`) restent canoniques. Pour tout nouveau composant, préférer les alias sémantiques suivants dans `style-v2-refined.css` :

| Intention | Tokens à utiliser |
|---|---|
| Fond de page, surface posée, surface en creux | `--surface-page`, `--surface-raised`, `--surface-recessed` |
| Texte | `--text-primary`, `--text-secondary`, `--text-on-action` |
| Action principale | `--color-action-primary`, `--color-action-primary-hover` |
| États | `--color-status-info`, `--color-status-success`, `--color-status-warning`, `--color-status-danger` |
| Texte d'état sur fond clair | `--text-status-success`, `--text-status-warning`, `--text-status-danger` |
| Bordure et focus | `--border-subtle`, `--border-interactive`, `--focus-outline` |
| Espacement | `--space-1` à `--space-10` |
| Typographie | `--font-body`, `--font-title`, `--font-data` |
| Rayon | `--radius-control` pour les contrôles ; `--radius-surface` pour les cartes |
| Profondeur | `--elevation-surface`, `--elevation-hover`, `--elevation-prominent`, `--elevation-recessed`, `--elevation-pressed` |
| Mouvement | `--motion-standard` |

N'ajouter ni hexadécimal, ni rayon, ni ombre isolés dans un composant quand un token approprié existe.

## Règles visuelles non négociables

- L'interface est frontale et 2D : aucune perspective 3D ni déformation géométrique.
- La lumière vient toujours du haut-gauche. Les ombres portées vont vers le bas-droite ; les creux inversent cette logique à l'intérieur de la matière.
- Les grandes surfaces de papier restent blanches et sans contour décoratif. La lumière les sépare.
- Les éléments interactifs gardent une bordure complète, un focus visible et un état désactivé lisible.
- Les aplats vifs signalent une action ou un état. Sur fond clair, le texte utilise les encres lisibles, jamais un aplat vif brut.
- Les rayons usuels restent entre 8 et 12 px ; 18 px est réservé aux objets exceptionnels.
- Respecter la grille 12 colonnes, l'échelle d'espacement de 4 px, les seuils de 940 px et 620 px, et `prefers-reduced-motion`.

## Composants à composer

- **Action primaire :** fond `--color-action-primary`, texte `--text-on-action`, `--radius-control`, `--elevation-hover`.
- **Action secondaire :** `--surface-raised`, `--text-primary`, `--border-interactive`, `--elevation-surface`.
- **Carte ou panneau :** `--surface-raised`, `--radius-surface`, `--elevation-surface`; ne pas ajouter une bordure décorative.
- **Champ :** `--surface-raised`, `--border-interactive`, `--radius-control`, profondeur interne discrète ; focus bleu visible.
- **Message d'état :** associer un repère coloré, un symbole et un libellé explicite ; la couleur seule ne doit jamais porter le sens.

## Contrat de qualité

Avant de livrer une nouvelle UI, vérifier : navigation clavier, contraste WCAG AA, focus visible, état réduit des animations, responsive 940/620 px, et cohérence de la lumière. Si le besoin n'entre pas clairement dans ces règles, demander une direction plutôt que d'inventer un nouveau langage visuel.
