import React from 'react';
import { DioramaComposition, LightingState } from '../types';
import { DIORAMA_COMPOSITIONS } from '../data/dioramas';
import { Layers, Sun, Rotate3d, Code2, Sparkles, Compass, MapPinned } from 'lucide-react';

interface HeaderProps {
  activeCompositionId: string;
  onSelectComposition: (id: string) => void;
  lighting: LightingState;
  onChangeLighting: (updated: Partial<LightingState>) => void;
  onOpenCodeExport: () => void;
  activeView: 'diorama' | 'components' | 'lav';
  onChangeView: (view: 'diorama' | 'components' | 'lav') => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeCompositionId,
  onSelectComposition,
  lighting,
  onChangeLighting,
  onOpenCodeExport,
  activeView,
  onChangeView,
}) => {
  return (
    <header className="w-full bg-[#FFFFFF] border-b border-[#1A1A1A]/10 paper-elevation-1 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl bg-[#0047AB] p-1.5 paper-elevation-2 flex items-center justify-center overflow-hidden">
            {/* Miniature paper cut in logo */}
            <div className="w-6 h-6 rounded-full bg-[#FFD600] absolute -right-1 -top-1" />
            <div className="w-4 h-4 rounded bg-[#E63946] absolute left-1 bottom-1 rotate-12" />
            <Layers className="w-5 h-5 text-white relative z-10" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-extrabold text-[#1A1A1A] tracking-tight">
                PAPIER DÉCOUPÉ
              </h1>
              <span className="px-2 py-0.5 rounded-full bg-[#06A77D]/10 text-[#06A77D] text-[10px] font-extrabold uppercase tracking-wide border border-[#06A77D]/20">
                Pur HTML / CSS
              </span>
            </div>
            <p className="text-[11px] font-medium text-[#1A1A1A]/60">
              Textures fibres • Ombres haut-gauche • Palette stricte
            </p>
          </div>
        </div>

        {/* View Switcher: Diorama Art vs UI Design System */}
        <div className="flex p-1 rounded-xl bg-[#F4F4F0] border border-[#1A1A1A]/10">
          <button
            onClick={() => onChangeView('diorama')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeView === 'diorama'
                ? 'bg-[#FFFFFF] text-[#0047AB] paper-elevation-1 border-t border-l border-white'
                : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-[#0047AB]" />
            <span>Galerie Dioramas 16:9</span>
          </button>
          <button
            onClick={() => onChangeView('lav')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
              activeView === 'lav'
                ? 'bg-[#0047AB] text-white paper-elevation-1'
                : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
            }`}
          >
            <MapPinned className="w-4 h-4 text-[#FFD600]" />
            <span>LAV</span>
          </button>

          <button
            onClick={() => onChangeView('components')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeView === 'components'
                ? 'bg-[#FFFFFF] text-[#06A77D] paper-elevation-1 border-t border-l border-white'
                : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#06A77D]" />
            <span>Composants UI</span>
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* 3D Exploded View Toggle */}
          <button
            onClick={() =>
              onChangeLighting({
                explodedView: !lighting.explodedView,
                tiltX: lighting.explodedView ? 0 : 24,
                tiltY: lighting.explodedView ? 0 : -28,
                explodeDepth: 45,
              })
            }
            className={`paper-btn px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 ${
              lighting.explodedView
                ? 'bg-[#E63946] border-[#E63946] text-white'
                : 'bg-[#FFFFFF] border-[#1A1A1A]/15 text-[#1A1A1A] hover:border-[#0047AB]'
            }`}
          >
            <Rotate3d className="w-4 h-4 text-[#FFD600]" />
            <span>{lighting.explodedView ? 'Vue 2D' : 'Vue 3D Éclatée'}</span>
          </button>

          {/* Export Code Button */}
          <button
            onClick={onOpenCodeExport}
            className="paper-btn px-3.5 py-1.5 rounded-xl bg-[#FFFFFF] border-2 border-[#0047AB] text-[#0047AB] text-xs font-bold flex items-center gap-1.5"
          >
            <Code2 className="w-4 h-4" />
            <span>Code HTML/CSS</span>
          </button>
        </div>
      </div>

      {/* Composition Selection Bar (when in diorama mode) */}
      {activeView === 'diorama' && (
        <div className="border-t border-[#1A1A1A]/5 bg-[#F4F4F0]/60 px-4 sm:px-6 py-2 overflow-x-auto">
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            <span className="text-[11px] font-bold text-[#1A1A1A]/60 uppercase tracking-wider whitespace-nowrap mr-1">
              Scénographies :
            </span>
            {DIORAMA_COMPOSITIONS.map((comp, idx) => (
              <button
                key={comp.id}
                onClick={() => onSelectComposition(comp.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeCompositionId === comp.id
                    ? 'bg-[#FFFFFF] text-[#1A1A1A] paper-elevation-1 border-t border-l border-white shadow-sm'
                    : 'text-[#1A1A1A]/70 hover:bg-[#FFFFFF]/70'
                }`}
              >
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
