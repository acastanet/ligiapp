---
name: "Lygia Pape, l'atelier de papier"
description: "Le système visuel LIGIA : papier, couleur et rigueur éditoriale pour le web."
colors:
  atelier-blue: "#0047AB"
  atelier-blue-hover: "#003888"
  signal-yellow: "#FFD600"
  ochre-orange: "#F77F00"
  validation-green: "#06A77D"
  cardinal-red: "#E63946"
  mineral-paper: "#F4F4F0"
  surface-white: "#FFFFFF"
  carbon-ink: "#1A1A1A"
  readable-green-ink: "#087D61"
  readable-orange-ink: "#A65200"
  readable-red-ink: "#C1272D"
  control-gray: "#8A8A86"
  mark-gray: "#808080"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, IBM Plex Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(3.2rem, 7.2vw, 6.5rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-.05em"
  headline:
    fontFamily: "Plus Jakarta Sans, IBM Plex Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(2.1rem, 4.3vw, 3.9rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-.03em"
  body:
    fontFamily: "IBM Plex Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    lineHeight: 1.55
  label:
    fontFamily: "IBM Plex Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: ".75rem"
    fontWeight: 700
    letterSpacing: ".12em"
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: ".69rem"
rounded:
  xs: "4px"
  sm: "8px"
  md: "10px"
  lg: "12px"
  xl: "18px"
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  5: "20px"
  6: "24px"
  7: "32px"
  8: "40px"
  9: "48px"
  10: "64px"
components:
  button-primary:
    backgroundColor: "{colors.atelier-blue}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.atelier-blue-hover}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.sm}"
  button-secondary:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.carbon-ink}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
    height: "44px"
  paper-surface:
    backgroundColor: "{colors.surface-white}"
    rounded: "{rounded.lg}"
  text-field:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.carbon-ink}"
    rounded: "{rounded.sm}"
    padding: "12px"
---

# Design System: Lygia Pape, l'atelier de papier

## Overview

**Creative North Star: "Lygia Pape, l'atelier de papier"**

LIGIA traite l'interface comme une construction de papier découpé : nette, physique et délibérée. Les surfaces claires portent l'information ; la profondeur découle d'une lumière stable plutôt que d'une illusion de volume. La composition reste frontalement 2D, structurée par une grille éditoriale, avec une présence matérielle visible dans les ombres, les creux et les contrôles.

L'atmosphère est matérielle et précise. La typographie organise l'information avec une hiérarchie ferme, les couleurs soutiennent des rôles lisibles, et les composants répondent comme des objets d'atelier : tactiles, utilitaires et de précision. Le système privilégie la clarté d'un document de référence à l'effet décoratif.

**Key Characteristics:**

- Papier minéral et surfaces blanches nettement séparées.
- Lumière haut-gauche, ombres portées bas-droite et creux cohérents.
- Grille éditoriale stricte, densité mesurée et alignements explicites.
- Typographie structurée, labels techniques et données monospace.
- Couleur employée comme repère de structure, de signal et d'état.

## Colors

La palette associe des papiers neutres à des aplats francs ; chaque couleur a un rôle structurel ou sémantique, jamais seulement décoratif.

### Primary

- **Bleu d'atelier:** action principale, structure, liens, focus et emphase typographique.

### Secondary

- **Jaune signal:** sélection, repère et contraste matériel sur les surfaces.
- **Orange ocre:** accent, vigilance et action secondaire affirmée.

### Tertiary

- **Vert de validation:** confirmation, succès et statut actif.
- **Rouge cardinal:** erreur, danger et alerte.

### Neutral

- **Papier minéral:** fond général et surfaces en creux.
- **Surface blanche:** cartes, panneaux et contrôles posés sur le papier.
- **Encre carbone:** texte principal et aplats sombres.
- **Encres lisibles:** variantes vert, orange et rouge réservées au texte sur fond clair.
- **Gris de contrôle:** limite des éléments interactifs et séparations fonctionnelles.

### Named Rules

**The Ink, Not Flat Rule.** Les aplats vifs servent aux surfaces et aux repères ; le texte courant emploie l'encre sombre correspondante pour rester lisible sur papier et blanc.

**The Signal Has a Job Rule.** Bleu, jaune, orange, vert et rouge apparaissent pour structurer, sélectionner ou signaler un état ; ils ne remplissent pas l'écran sans raison fonctionnelle.

## Typography

**Display Font:** Plus Jakarta Sans, avec IBM Plex Sans et la pile système en repli.

**Body Font:** IBM Plex Sans, avec la pile système en repli.

**Label/Mono Font:** IBM Plex Sans pour les labels ; ui-monospace pour les valeurs, coordonnées et données tabulaires.

**Character:** Le duo associe une présence de titre dense et contemporaine à une lecture utilitaire très stable. Les métadonnées et données techniques gagnent en précision grâce à la chasse fixe.

### Hierarchy

- **Display:** Plus Jakarta Sans, gras, très grand et serré ; réservé au hero et aux déclarations de système.
- **Headline:** Plus Jakarta Sans, gras et compact ; pour les titres de section et les titres de panneau.
- **Title:** Plus Jakarta Sans, gras et serré ; pour les composants et informations de premier niveau.
- **Body:** IBM Plex Sans avec une interligne généreuse ; pour les explications et le contenu courant.
- **Label:** IBM Plex Sans, gras, en capitales et espacé ; pour les catégories, mesures et repères d'interface.
- **Mono:** chasse fixe compacte ; pour les nombres, codes, valeurs de tokens et coordonnées.

### Named Rules

**The Reading Order Rule.** Chaque zone doit pouvoir être parcourue dans l'ordre : label ou index, titre, explication, puis valeur ou action.

## Layout

Le conteneur central est plafonné à 1180 px avec une gouttière nominale de 20 px. La page s'appuie sur une grille de 12 colonnes et un intervalle de 24 px : le hero répartit le contenu sur sept colonnes et le panneau sur cinq, tandis que les titres, démonstrations et blocs d'information partagent des axes communs.

L'espacement utilise une échelle régulière de 4 px. Les sections respirent largement, avec un rythme vertical compris entre 72 px et 116 px selon la largeur d'écran. À 940 px, les compositions éditoriales deviennent une colonne et la navigation reste disponible par défilement horizontal. À 620 px, les grilles de palettes, cartes et composants passent à une colonne ; les objets interactifs s'étirent pour conserver une zone d'action confortable.

**The Shared Axis Rule.** Un décalage ne sert jamais à décorer : les blocs importants doivent partager les lignes et colonnes de la grille, y compris lorsqu'ils changent de taille.

## Elevation & Depth

La profondeur est structurelle. Une lumière imaginaire placée en haut à gauche crée des ombres portées vers le bas à droite ; les objets en creux inversent cette logique à l'intérieur de la matière. Les surfaces de papier n'ont pas besoin d'un contour pour être séparées : la lumière et l'ombre les découpent. Les champs et boutons conservent en revanche une limite complète pour exprimer immédiatement leur caractère interactif.

### Shadow Vocabulary

- **Papier posé:** deux ombres externes combinent contact serré et ambiance large ; utilisé pour les cartes, boutons et surfaces principales.
- **Papier élevé:** une version plus ample de la même lumière ; utilisée pour intensifier une surface interactive au survol.
- **Papier en creux:** ombres internes et crête claire opposée ; utilisée dans les zones de démonstration et les cavités.
- **Objet pressé:** ombre courte et légère cavité ; utilisée durant l'activation d'un contrôle.

### Named Rules

**The One Light Rule.** Toute ombre, portée ou interne, doit se déduire de la même lumière haut-gauche. Une ombre sans logique physique est une erreur de système.

**The Depth Is Structural Rule.** Le relief sépare les plans et clarifie l'interaction ; il n'est pas un ornement autonome.

## Shapes

Les formes sont simples, frontales et alignées. Les éléments usuels utilisent des angles légèrement adoucis ; les rayons restent contenus entre 8 px et 12 px. Le rayon de 18 px est réservé aux objets exceptionnels comme une modale. Les cartes et grandes surfaces blanches évitent le contour ; les contrôles interactifs utilisent une bordure complète et contrastée.

Les marqueurs de la marque sont construits comme un disque ou un anneau avec des points satellites. Ils prolongent le vocabulaire du papier par des formes géométriques nettes, sans perspective ni déformation volumétrique.

**The Contained Corner Rule.** Les coins assouplissent l'usage sans devenir un style : aucun grand rayon décoratif ne remplace la structure ou la profondeur.

## Components

Les composants sont tactiles, utilitaires et de précision. Ils maintiennent la même lumière, la même échelle d'espacement et les mêmes repères de contraste afin que l'état reste lisible sans surcharge.

### Agent Implementation Contract

Pour une extension, lire `AGENTS.md` puis employer les alias sémantiques déclarés dans `style-v2-refined.css` plutôt que d'introduire des valeurs locales. Les primitives `--paper-*`, `--ink-*`, `--sp-*` et `--shadow-*` définissent le système ; les alias `--color-*`, `--surface-*`, `--text-*`, `--space-*` et `--elevation-*` expriment l'intention dans les nouveaux composants.

### Buttons

- **Shape:** hauteur standard de 44 px, rayon contenu et bordure de contrôle complète.
- **Primary:** action majeure en bleu d'atelier, texte blanc et élévation plus affirmée.
- **Secondary:** surface blanche, encre carbone et ombre plus discrète ; les variantes contour adoptent l'encre de leur rôle.
- **Hover / Focus / Active:** le survol relève l'objet lorsque le périphérique le permet ; le focus visible reste bleu ; l'activation abaisse le bouton vers le papier.
- **Variants:** accent, validation, danger, encre mate, tailles petite et grande, icône seule et état désactivé sont établis.

### Cards / Containers

- **Character:** feuilles de papier posées sur un fond minéral.
- **Corner Style:** rayon contenu ; cartes et panneaux de référence utilisent le rayon de surface.
- **Background:** blanc pour les plans posés, papier minéral pour les zones de démonstration en creux.
- **Shadow Strategy:** profondeur externe pour les plans posés, profondeur interne pour les cavités.
- **Border:** absent sur les grandes feuilles ; présent lorsqu'il désigne une action ou une limite interactive.

### Inputs / Fields

- **Style:** fond blanc, bordure de contrôle opaque, rayon contenu et légère ombre interne.
- **Focus:** anneau bleu visible complété par une bordure bleue sur le champ actif.
- **Error / Disabled:** l'erreur utilise le rouge cardinal et son encre lisible ; l'état désactivé réduit l'opacité et neutralise la surface.
- **Related Controls:** curseurs, radios et interrupteurs conservent des dimensions généreuses et un état lisible sans dépendre de la couleur seule.

### Navigation

- **Style:** en-tête fixe, hors du flux de défilement, fond papier translucide et léger flou de fond.
- **Hierarchy:** marque à gauche, liens de section au centre, action d'inventaire à droite.
- **Responsive:** sur tablette, les liens restent accessibles par une ligne horizontale défilante au lieu de disparaître.
- **Scroll:** le contenu défile dans une zone dédiée sous l'en-tête (`.scroll-pane`), de sorte que l'ascenseur ne recouvre jamais le menu ; il reprend les couleurs papier/encre du système plutôt que le style gris par défaut du navigateur.

### Status Messages

- **Style:** carte blanche avec un repère coloré intérieur, sans bordure décorative.
- **States:** information, validation, vigilance et alerte utilisent leur couleur sémantique avec un libellé explicite.

### Brand Mark

- **Signature:** disque, anneau ou empreinte formé de points satellites colorés.
- **Depth:** les variantes posées et creuses expriment la même lumière que les surfaces de l'interface.
- **Motion:** l'animation de convergence part de l'extérieur de la marque et rejoint le centre en passant par le cercle de l'anneau, avec une pose d'environ 1 s à chaque extrémité ; la boucle reprend directement à l'extérieur plutôt que de repartir en sens inverse. Elle reste lente, matérielle et désactivable selon la préférence de réduction de mouvement.

## Do's and Don'ts

### Do:

- **Do** lire `AGENTS.md` et utiliser les alias sémantiques avant de créer une nouvelle valeur de couleur, espace, rayon ou profondeur.
- **Do** utiliser la grille de 12 colonnes et l'échelle de 4 px avant d'introduire une mesure locale.
- **Do** garder les grandes surfaces de papier blanches sans contour et les séparer par la lumière et l'ombre.
- **Do** employer une bordure complète et un focus visible pour chaque contrôle interactif.
- **Do** utiliser les encres sombres pour le texte sur fond clair et les aplats vifs pour les surfaces, repères et états.
- **Do** préserver l'impression lisible, la navigation clavier et la réduction de mouvement.

### Don't:

- **Don't** introduire de néomorphisme.
- **Don't** créer de perspective 3D ni de géométrie déformée pour simuler la profondeur.
- **Don't** utiliser de grands rayons décoratifs.
- **Don't** ajouter d'ombre sans origine lumineuse cohérente.
- **Don't** poser du texte courant directement sur un aplat trop vif.
