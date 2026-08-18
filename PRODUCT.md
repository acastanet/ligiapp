# Produit

<!-- impeccable:product-schema 1 -->

## Plateforme

web

## Utilisateurs

LIGIA s'adresse principalement aux designers et aux développeurs front-end qui souhaitent explorer, personnaliser et exporter des compositions en papier découpé sous forme de HTML et de CSS réutilisables.

## Finalité du produit

LIGIA est une référence web et un atelier interactif en français pour comprendre, essayer et réutiliser un système d'interface inspiré du papier. Le produit réussit lorsque ses utilisateurs peuvent examiner ses fondations et ses composants, ajuster les variables proposées, puis intégrer le résultat dans une interface réelle.

## Positionnement

LIGIA transforme la métaphore du papier en un système d'interface directement exploitable : une même référence associe règles de composition, composants sémantiques, réglages interactifs et code HTML/CSS réutilisable.

## Contexte d'utilisation

Le produit s'utilise dans un navigateur comme catalogue de référence et atelier. Les utilisateurs parcourent les fondations, composants, exemples de données et règles de grille, copient des valeurs ou des classes, modifient les variables exposées et réemploient le code dans leur travail front-end.

## Capacités et contraintes

- Les implémentations de référence sont `style-v2-refined.html` et `style-v2-refined.css` à la racine du projet.
- Ces deux fichiers priment sur le README, les archives et les implémentations alternatives du dépôt lorsqu'une divergence apparaît.
- `lav.html` et `lav.css` forment une surface autonome de présentation pour LAV ; elles consomment les références visuelles sans en devenir une source d'autorité.
- Le résultat de référence reste du HTML5 sémantique, du CSS moderne et du JavaScript léger côté navigateur.
- Le contenu et la terminologie de l'interface sont en français.
- Les valeurs, classes et composants présentés doivent rester copiables ou réutilisables par un développeur front-end.

## Engagements de marque

- Nom public : LIGIA.
- Signature : « Le papier comme interface. »
- Voix : précise, éditoriale, technique et sans emphase marketing.
- L'identité visuelle existante n'est pas à réinventer pendant une extension ou un raffinement. Son autorité réside dans `style-v2-refined.html` et `style-v2-refined.css`.

## Éléments probants disponibles

- Page de référence et atelier fonctionnel : `style-v2-refined.html`.
- Système visuel, tokens, composants et adaptations : `style-v2-refined.css`.
- Documentation dérivée : `README.md`.
- Aucun témoignage client, chiffre d'adoption, benchmark commercial ou label externe n'est fourni dans le dépôt ; les travaux futurs ne doivent pas en inventer.

## Principes produit

1. Rendre le système immédiatement compréhensible et réutilisable par des professionnels du front-end.
2. Préserver la fidélité aux deux fichiers de référence lorsqu'une autre implémentation diverge.
3. Relier chaque démonstration visuelle à une structure ou une valeur exploitable dans du code réel.
4. Préférer la clarté, la cohérence et l'accessibilité aux effets décoratifs sans fonction.

## Accessibilité et inclusion

La référence doit conserver une navigation clavier complète, des libellés sémantiques, des contrastes conformes au minimum à WCAG AA, des états de focus visibles, une adaptation responsive et la prise en charge de `prefers-reduced-motion`. La version imprimée doit rester lisible.
