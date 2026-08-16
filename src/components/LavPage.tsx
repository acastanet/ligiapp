const applications = [
  ['Carte du territoire', "rassemble sur une même interface les données relatives à la géologie, au sous-sol, à l’eau, aux milieux naturels et aux services publics."],
  ['Relief 3D', 'permet d’explorer le terrain, les bâtiments et la végétation à partir des données LiDAR et des modèles numériques de terrain.'],
  ['LAV.géol', 'explore la carte géologique du territoire et retrouve les ouvrages du sous-sol répertoriés par le BRGM (BSS) à proximité d’un point.'],
  ['Météo essentielle, Bilan thermique et la Fiche climat', 'fournissent une information localisée sur la situation météorologique, les prévisions et les évolutions climatiques du lieu.'],
  ["Tableau de bord de l’eau", "permet de suivre les cours d’eau, les crues, les étiages, les nappes souterraines ainsi que la qualité de l’eau et des sites de baignade."],
  ['Incendies, risque et consignes, Vigilance feu et Incendies, temps réel', 'mettent en relation les niveaux officiels de vigilance, les recommandations publiques et les détections thermiques satellitaires récentes.'],
  ['LAV.feu', "conçue pour un usage mobile sur le terrain, localise l’utilisateur et recherche les suspicions satellitaires de feu observées à proximité."],
  ['OLD, obligations légales de débroussaillement', 'aide à préparer le périmètre indicatif à débroussailler en croisant la position d’un bâtiment, le cadastre, le zonage réglementaire et les données cartographiques.'],
  ['Itinéraire poids lourd', 'propose un parcours adapté au gabarit connu du véhicule et signale les portions pour lesquelles les données ouvertes ne permettent pas une vérification complète.'],
];

export function LavPage() {
  return <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
    <section className="relative overflow-hidden bg-[#FFFFFF] p-8 sm:p-12 rounded-2xl paper-elevation-2 grid lg:grid-cols-[1.1fr_.9fr] gap-10 items-center">
      <div className="relative z-10">
        <div className="text-xs uppercase tracking-[.2em] font-extrabold text-[#0047AB] mb-4 flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#E63946]" /> Données publiques · Territoires · Usages</div>
        <h1 className="text-4xl sm:text-6xl font-bold leading-[.95] tracking-tight font-serif-display text-[#1A1A1A]">LAV : Localiser,<br /><span className="text-[#0047AB]">Agréger, Valoriser</span></h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed font-medium text-[#1A1A1A]/75 italic">Un système d’intégration des données publiques au service des territoires et des usages</p>
      </div>
      <div className="relative min-h-64 bg-[#EAF3ED] rounded-2xl paper-elevation-1 overflow-hidden">
        <div className="absolute -bottom-8 -left-4 w-[120%] h-36 bg-[#06A77D] rounded-[50%]" /><div className="absolute bottom-16 -left-8 w-[120%] h-24 bg-[#0047AB] rounded-[50%] opacity-85" /><div className="absolute bottom-8 left-1/3 w-24 h-40 bg-[#F77F00] rounded-t-[100%]" />
        <div className="absolute top-12 right-16 w-10 h-10 bg-[#E63946] rounded-full paper-elevation-2 before:content-[''] before:absolute before:top-3 before:left-3 before:w-4 before:h-4 before:bg-white before:rounded-full" /><div className="absolute top-5 left-6 text-[#0047AB]/60 font-mono text-[10px] font-bold tracking-widest">45.7640° N<br />4.8357° E</div>
      </div>
    </section>

    <section className="grid lg:grid-cols-[.7fr_1.3fr] gap-6">
      <div className="bg-[#0047AB] text-white p-8 rounded-2xl paper-elevation-2"><div className="w-8 h-8 mb-10 grid gap-1"><span className="bg-[#FFD600] rounded-sm" /><span className="bg-[#F77F00] rounded-sm" /><span className="bg-[#06A77D] rounded-sm" /></div><p className="text-xs font-bold uppercase tracking-[.18em] text-white/70">Un point de départ</p><p className="font-serif-display font-medium text-3xl leading-tight mt-3">Comprendre un lieu dans toute son épaisseur.</p></div>
      <div className="bg-white p-8 sm:p-10 rounded-2xl paper-elevation-2 space-y-5 text-[#1A1A1A]/80 leading-relaxed"><p>LAV transforme des données publiques dispersées en informations utiles, organisées autour d’un lieu.</p><p>À partir d’un point sur la carte, LAV rassemble les données disponibles pour décrire son environnement : relief, bâtiments, végétation, eau, sous-sol, météo, climat, activités humaines, infrastructures et risques.</p><p>Issues de multiples sources publiques, ces données sont localisées, croisées et replacées dans leur contexte. Elles alimentent un jumeau numérique documenté et évolutif, qui propose une lecture cohérente du lieu, de son voisinage et de son territoire.</p></div>
    </section>

    <section className="bg-white p-8 sm:p-10 rounded-2xl paper-elevation-2">
      <div className="flex flex-col md:flex-row justify-between gap-6 pb-7 border-b border-black/10"><div><p className="text-xs font-bold tracking-[.18em] uppercase text-[#0047AB]">Applications</p><h2 className="font-serif-display text-3xl sm:text-4xl font-medium mt-2">Un socle commun, des usages concrets.</h2></div><p className="max-w-md text-[#1A1A1A]/70 leading-relaxed">LAV fournit un socle de données commun, à partir duquel peuvent être développés des services répondant à des besoins concrets, locaux et citoyens.</p></div>
      <ol className="mt-3 divide-y divide-black/10">{applications.map(([title, description], index) => <li className="py-5 grid grid-cols-[2.5rem_1fr] gap-3" key={title}><span className="text-xs font-mono font-bold text-[#E63946] pt-1">{String(index + 1).padStart(2, '0')}</span><p className="m-0 leading-relaxed text-[#1A1A1A]/75"><strong className="text-[#1A1A1A]">{title}</strong> {description}</p></li>)}</ol>
    </section>

    <section className="grid md:grid-cols-4 gap-5"><InfoCard accent="bg-[#F77F00]" title="Relief & sous-sol" /><InfoCard accent="bg-[#06A77D]" title="Eau & milieux" /><InfoCard accent="bg-[#0047AB]" title="Météo & climat" /><InfoCard accent="bg-[#E63946]" title="Risques & vigilance" /></section>
    <section className="bg-[#1A1A1A] text-white p-8 sm:p-12 rounded-2xl paper-elevation-3"><p className="max-w-4xl font-serif-display font-medium text-2xl sm:text-4xl leading-tight">Ces applications s’appuient sur la même infrastructure de localisation, de collecte, de cartographie et de documentation des données. Elles peuvent ainsi être enrichies ou complétées sans reconnecter séparément chaque source publique.</p><p className="mt-8 max-w-3xl text-white/70 leading-relaxed">Autour de cette infrastructure commune, chaque application répond à une question concrète : comprendre un lieu, suivre une situation, préparer une intervention ou éclairer une décision.</p></section>
  </main>;
}

function InfoCard({ accent, title }: { accent: string; title: string }) { return <div className="bg-white p-5 rounded-xl paper-elevation-1 flex items-center gap-4"><div className={`w-4 h-11 rounded-sm ${accent}`} /><span className="font-bold text-[#1A1A1A]">{title}</span></div>; }
