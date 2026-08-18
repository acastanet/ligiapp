import React, { useState } from 'react';
import { DIORAMA_COMPOSITIONS, PAPER_PALETTE_GUIDE } from './data/dioramas';
import { DioramaComposition, LightingState } from './types';
import { Header } from './components/Header';
import { DioramaCanvas } from './components/DioramaCanvas';
import { LightController } from './components/LightController';
import { LayerExploder } from './components/LayerExploder';
import { PaperStudio } from './components/PaperStudio';
import { PaperUIComponents } from './components/PaperUIComponents';
import { CodeExportModal } from './components/CodeExportModal';
import { LavPage } from './components/LavPage';
import { 
  Sparkles, 
  Layers, 
  Sun, 
  Grid, 
  ShieldCheck, 
  Palette, 
  Info,
  CheckCircle2,
  SlidersHorizontal,
  Compass,
  Code2
} from 'lucide-react';

export default function App() {
  const [compositions, setCompositions] = useState<DioramaComposition[]>(DIORAMA_COMPOSITIONS);
  const [activeCompId, setActiveCompId] = useState<string>(DIORAMA_COMPOSITIONS[0].id);
  const [selectedLayerId, setSelectedLayerId] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'diorama' | 'components' | 'lav'>('diorama');
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);

  // Lighting & Diorama Physics State
  const [lighting, setLighting] = useState<LightingState>({
    lightAngle: 135, // Top-left standard (135 degrees)
    lightIntensity: 1.0,
    shadowDistance: 1.5,
    explodedView: false,
    explodeDepth: 45,
    tiltX: 0,
    tiltY: 0,
    paperTexture: 'cardstock',
    showGrid: false,
    interactiveMouseLight: false,
  });

  const activeComposition =
    compositions.find((c) => c.id === activeCompId) || compositions[0];

  const handleUpdateComposition = (updated: DioramaComposition) => {
    setCompositions((prev) =>
      prev.map((c) => (c.id === updated.id ? updated : c))
    );
  };

  const handleUpdateLighting = (updated: Partial<LightingState>) => {
    setLighting((prev) => ({ ...prev, ...updated }));
  };

  return (
    <div className="min-h-screen bg-[#F4F4F0] text-[#1A1A1A] flex flex-col selection:bg-[#FFD600] selection:text-[#1A1A1A]">
      {/* Hidden SVG Filter for paper grain texture definition */}
      <svg className="hidden">
        <defs>
          <filter id="paper-grain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves="5"
              result="noise"
            />
            <feDiffuseLighting
              in="noise"
              lightingColor="#fff"
              surfaceScale="1.5"
              result="light"
            >
              <feDistantLight azimuth="135" elevation="60" />
            </feDiffuseLighting>
            <feBlend mode="multiply" in="SourceGraphic" in2="light" />
          </filter>
        </defs>
      </svg>

      {/* Header */}
      <Header
        activeCompositionId={activeCompId}
        onSelectComposition={(id) => {
          setActiveCompId(id);
          setSelectedLayerId(null);
        }}
        lighting={lighting}
        onChangeLighting={handleUpdateLighting}
        onOpenCodeExport={() => setIsCodeModalOpen(true)}
        activeView={activeView}
        onChangeView={setActiveView}
      />

      {/* Main Content Area on Pure White Background */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 relative z-10">

        {/* Hero Presentation Header - Borderless White Frame with Rounded Corners and Accentuated Shadows */}
        <section className="relative z-10 bg-[#FFFFFF] p-8 sm:p-12 rounded-3xl paper-elevation-2 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1A1A1A]/10">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] font-sans font-extrabold text-[#0047AB] mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E63946] shadow-sm" />
                EXPOSITION VIRTUELLE & ATELIER MULTICOUCHE
              </div>
              <h1 className="text-4xl sm:text-6xl font-black text-[#1A1A1A] leading-[0.95] tracking-tight font-serif-display">
                L'ART DU<br />
                PAPIER <span className="text-[#0047AB]">DÉCOUPÉ</span>
              </h1>
            </div>
            <div className="space-y-4 max-w-md">
              <p className="text-[#1A1A1A]/80 text-sm sm:text-base font-medium leading-relaxed">
                Exploration tactile des formes et de la profondeur à travers la superposition de couches artisanales Canson et d'ombres physiques à lumière rasante.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveView('diorama')}
                  className="bg-[#0047AB] text-white px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-widest paper-btn flex items-center gap-2 hover:bg-[#003888]"
                >
                  <Compass className="w-4 h-4 text-[#FFD600]" />
                  <span>Explorer les Dioramas</span>
                </button>
                <button
                  onClick={() => setIsCodeModalOpen(true)}
                  className="bg-[#FFFFFF] text-[#0047AB] px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-widest paper-elevation-1 hover:paper-elevation-2 transition-all flex items-center gap-2"
                >
                  <Code2 className="w-4 h-4 text-[#E63946]" />
                  <span>Exporter HTML/CSS</span>
                </button>
              </div>
            </div>
          </div>

          {/* Exhibition Meta Sub-bar */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-[#1A1A1A]">
            <div className="flex gap-8">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-[#1A1A1A]/50 mb-0.5">
                  Exposition
                </div>
                <div className="text-sm font-bold text-[#1A1A1A] font-serif-display">
                  Galerie de l'Instant
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-[#1A1A1A]/50 mb-0.5">
                  Atelier
                </div>
                <div className="text-sm font-bold text-[#1A1A1A] font-serif-display">
                  Studio Papier Pur
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-[#1A1A1A]/50 mb-0.5">
                  Format
                </div>
                <div className="text-sm font-bold text-[#0047AB] font-mono">
                  Ratio 16:9 • Grille 180px
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] paper-elevation-1">
              <span className="w-3 h-3 rounded-full bg-[#06A77D]" />
              <span className="text-xs uppercase tracking-wider font-extrabold text-[#1A1A1A]">
                {activeComposition.title}
              </span>
            </div>
          </div>
        </section>

        {activeView === 'lav' ? (
          <LavPage />
        ) : activeView === 'diorama' ? (
          <>
            {/* Diorama 16:9 Canvas Stage */}
            <section className="space-y-4">
              <DioramaCanvas
                composition={activeComposition}
                lighting={lighting}
                selectedLayerId={selectedLayerId}
                onSelectLayer={setSelectedLayerId}
              />
            </section>

            {/* Interactive Diorama Controls Grid (3-column layout) */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Column 1: Light Physics */}
              <LightController
                lighting={lighting}
                onChangeLighting={handleUpdateLighting}
              />

              {/* Column 2: 3D Layer Exploder */}
              <LayerExploder
                lighting={lighting}
                onChangeLighting={handleUpdateLighting}
              />

              {/* Column 3: Paper Layer Studio & Palette Customizer */}
              <PaperStudio
                composition={activeComposition}
                selectedLayerId={selectedLayerId}
                onSelectLayer={setSelectedLayerId}
                onUpdateComposition={handleUpdateComposition}
              />
            </section>

            {/* Design Rules & Palette Specification Plaque */}
            <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#1A1A1A]/10 paper-elevation-2 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1A1A1A]/10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0047AB]/10 text-[#0047AB] text-xs font-bold mb-2">
                    <ShieldCheck className="w-4 h-4" />
                    SPÉCIFICATIONS DU STYLE PAPIER DÉCOUPÉ
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A]">
                    Règles Fondamentales de Composition & Matérialité
                  </h3>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1A1A1A]/70 bg-[#F4F4F0] px-3 py-1.5 rounded-lg border border-[#1A1A1A]/10">
                  <Grid className="w-3.5 h-3.5 text-[#0047AB]" />
                  <span>Grille Modulaire : 180px</span>
                </div>
              </div>

              {/* Palette Guide */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider block">
                  Palette Stricte Imposée (Min. 3 couleurs par composition) :
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-3">
                  {PAPER_PALETTE_GUIDE.map((p) => (
                    <div
                      key={p.hex}
                      className="p-3 rounded-xl border border-[#1A1A1A]/10 bg-[#FFFFFF] paper-elevation-1 space-y-2"
                    >
                      <div
                        className="h-10 w-full rounded-lg border border-black/10 shadow-inner"
                        style={{ backgroundColor: p.hex }}
                      />
                      <div>
                        <div className="text-xs font-bold text-[#1A1A1A]">{p.name}</div>
                        <div className="text-[11px] font-mono text-[#1A1A1A]/70 font-semibold">{p.hex}</div>
                        <div className="text-[10px] text-[#1A1A1A]/60 mt-1 leading-tight">{p.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4 Pillars of Paper Craft */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-[#1A1A1A]/10 text-xs">
                <div className="p-3.5 rounded-xl bg-[#F4F4F0] border border-[#1A1A1A]/10 space-y-1.5">
                  <div className="font-bold text-[#1A1A1A] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0047AB]" />
                    Composition Hybride
                  </div>
                  <p className="text-[#1A1A1A]/75 leading-relaxed">
                    Alliance de blocs géométriques francs (arches, gradins, triangles) et de silhouettes découpées organiques.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F4F4F0] border border-[#1A1A1A]/10 space-y-1.5">
                  <div className="font-bold text-[#1A1A1A] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#F77F00]" />
                    Ombres & Lumière
                  </div>
                  <p className="text-[#1A1A1A]/75 leading-relaxed">
                    Éclairage rasant depuis le haut-gauche projetant des ombres douces (flou 20 à 40px, opacité 15-20%).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F4F4F0] border border-[#1A1A1A]/10 space-y-1.5">
                  <div className="font-bold text-[#1A1A1A] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#06A77D]" />
                    Espace Blanc Base (33%)
                  </div>
                  <p className="text-[#1A1A1A]/75 leading-relaxed">
                    La base blanche négative fait respirer les formes et porte exclusivement l'information textuelle.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F4F4F0] border border-[#1A1A1A]/10 space-y-1.5">
                  <div className="font-bold text-[#1A1A1A] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E63946]" />
                    Typographie IBM Plex Sans
                  </div>
                  <p className="text-[#1A1A1A]/75 leading-relaxed">
                    Textes en noir mat #1A1A1A strictement positionnés sur des calques blancs #FFFFFF.
                  </p>
                </div>
              </div>
            </section>
          </>
        ) : (
          /* UI Design System Components View */
          <PaperUIComponents />
        )}
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#FFFFFF] border-t border-[#1A1A1A]/10 py-6 mt-12 paper-elevation-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#1A1A1A]/70">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#06A77D]" />
            <span className="font-bold text-[#1A1A1A]">Studio Papier Découpé HTML/CSS</span>
            <span>— Réalisé exclusivement en HTML, CSS, SVG et JS</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCodeModalOpen(true)}
              className="text-[#0047AB] font-bold hover:underline"
            >
              Exporter le Code
            </button>
            <span>•</span>
            <span className="font-mono">Ratio 16:9 • Grille 180px</span>
          </div>
        </div>
      </footer>

      {/* Code Export Modal */}
      {isCodeModalOpen && (
        <CodeExportModal
          composition={activeComposition}
          onClose={() => setIsCodeModalOpen(false)}
        />
      )}
    </div>
  );
}
