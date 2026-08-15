import React from 'react';
import { DioramaComposition, LightingState } from '../types';
import { DIORAMA_COMPOSITIONS } from '../data/dioramas';
import { Layers, Sun, Rotate3d, Code2, Sparkles, Compass } from 'lucide-react';

interface HeaderProps {
  activeCompositionId: string;
  onSelectComposition: (id: string) => void;
  lighting: LightingState;
  onChangeLighting: (updated: Partial<LightingState>) => void;
  onResetToNormalView?: () => void;
  onOpenCodeExport: () => void;
  activeView: 'diorama' | 'components';
  onChangeView: (view: 'diorama' | 'components') => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeCompositionId,
  onSelectComposition,
  lighting,
  onChangeLighting,
  onResetToNormalView,
  onOpenCodeExport,
  activeView,
  onChangeView,
}) => {
  return (
    <header className="w-full bg-[#FFFFFF] sticky top-0 z-40 paper-elevation-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo & Title */}
        <div className="flex items-center gap-3.5">
          <div className="flex items-center gap-2 text-2xl font-black text-[#1A1A1A] tracking-tighter font-serif-display">
            <span className="bg-[#0047AB] text-white px-2.5 py-0.5 rounded-lg text-base font-sans font-bold paper-elevation-1">
              LE
            </span>
            <span className="tracking-tight text-xl sm:text-2xl font-serif-display font-black text-[#1A1A1A]">
              JARDIN DÉCOUPÉ
            </span>
          </div>

          <div className="hidden sm:block h-5 w-px bg-[#1A1A1A]/10" />

          <span className="hidden sm:inline-block text-[11px] font-sans font-bold uppercase tracking-widest text-[#1A1A1A]/60">
            Atelier Pur HTML/CSS
          </span>
        </div>

        {/* View Switcher: Diorama Art vs UI Design System */}
        <div className="flex p-1 rounded-2xl bg-[#FFFFFF] paper-elevation-1 gap-1 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1A1A1A]">
          <button
            onClick={() => onChangeView('diorama')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
              activeView === 'diorama'
                ? 'bg-[#0047AB] text-white paper-elevation-1'
                : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
            }`}
          >
            <Compass className="w-4 h-4 text-[#FFD600]" />
            <span>Catalogue 16:9</span>
          </button>

          <button
            onClick={() => onChangeView('components')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
              activeView === 'components'
                ? 'bg-[#0047AB] text-white paper-elevation-1'
                : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#FFD600]" />
            <span>Atelier UI</span>
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Normal View (2D Flat) / 3D Exploded Toggle */}
          {lighting.explodedView ? (
            <button
              onClick={() => {
                if (onResetToNormalView) {
                  onResetToNormalView();
                } else {
                  onChangeLighting({
                    explodedView: false,
                    tiltX: 0,
                    tiltY: 0,
                  });
                }
              }}
              className="px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all paper-btn bg-[#0047AB] text-white flex items-center gap-1.5"
              title="Revenir à l'affichage normal 2D à plat"
            >
              <Sun className="w-3.5 h-3.5 text-[#FFD600]" />
              <span>Afficher en Normal (2D)</span>
            </button>
          ) : (
            <button
              onClick={() =>
                onChangeLighting({
                  explodedView: true,
                  tiltX: 24,
                  tiltY: -28,
                  explodeDepth: 45,
                })
              }
              className="px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all paper-elevation-1 bg-[#FFFFFF] text-[#0047AB] hover:paper-elevation-2 flex items-center gap-1.5"
              title="Voir la décomposition 3D en perspective"
            >
              <Rotate3d className="w-3.5 h-3.5 text-[#0047AB]" />
              <span>Perspective 3D</span>
            </button>
          )}

          {/* Export Code Button */}
          <button
            onClick={onOpenCodeExport}
            className="bg-[#0047AB] text-white px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-widest paper-btn hover:bg-[#003888] transition-all flex items-center gap-1.5"
          >
            <Code2 className="w-3.5 h-3.5 text-[#FFD600]" />
            <span>Code Source</span>
          </button>
        </div>
      </div>

      {/* Composition / Variation Selection Bar (when in diorama mode) */}
      {activeView === 'diorama' && (
        <div className="bg-[#FFFFFF] border-t border-[#1A1A1A]/5 px-4 sm:px-6 py-2.5 overflow-x-auto">
          <div className="max-w-7xl mx-auto flex items-center gap-3">
            <span className="text-[11px] font-bold text-[#1A1A1A]/60 uppercase tracking-[0.15em] whitespace-nowrap flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#0047AB]" />
              Variations :
            </span>
            {DIORAMA_COMPOSITIONS.map((comp, idx) => (
              <button
                key={comp.id}
                onClick={() => onSelectComposition(comp.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeCompositionId === comp.id
                    ? 'bg-[#0047AB] text-white paper-elevation-1'
                    : 'bg-[#FFFFFF] text-[#1A1A1A] paper-elevation-1 hover:paper-elevation-2'
                }`}
              >
                <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${
                  activeCompositionId === comp.id ? 'bg-white text-[#0047AB]' : 'bg-[#1A1A1A]/10 text-[#1A1A1A]'
                }`}>
                  0{idx + 1}
                </span>
                <div className="flex -space-x-1">
                  {comp.dominantColors.slice(0, 3).map((c, i) => (
                    <span
                      key={i}
                      className="w-2.5 h-2.5 rounded-full border border-white"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
                <span>{comp.title}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

