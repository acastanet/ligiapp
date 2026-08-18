import React from 'react';
import { LightingState } from '../types';
import { Layers, Rotate3d, Move, Maximize2 } from 'lucide-react';

interface LayerExploderProps {
  lighting: LightingState;
  onChangeLighting: (updated: Partial<LightingState>) => void;
}

export const LayerExploder: React.FC<LayerExploderProps> = ({
  lighting,
  onChangeLighting,
}) => {
  return (
    <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#1A1A1A]/10 paper-elevation-2 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#0047AB] text-white flex items-center justify-center paper-elevation-1">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-[#1A1A1A] text-sm sm:text-base">
              Décomposition 3D des Calques
            </h3>
            <p className="text-xs text-[#1A1A1A]/60 font-medium">
              Perspective diorama & inspection de stratification
            </p>
          </div>
        </div>

        <button
          onClick={() =>
            onChangeLighting({
              explodedView: !lighting.explodedView,
              tiltX: lighting.explodedView ? 0 : 22,
              tiltY: lighting.explodedView ? 0 : -26,
              explodeDepth: 45,
            })
          }
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            lighting.explodedView
              ? 'bg-[#E63946] text-white paper-elevation-1'
              : 'bg-[#0047AB] text-white paper-elevation-1 hover:bg-[#003d94]'
          }`}
        >
          {lighting.explodedView ? 'Vue 2D Normale' : 'Activer Vue 3D'}
        </button>
      </div>

      {lighting.explodedView ? (
        <div className="space-y-5 animate-fadeIn">
          {/* Depth Separation Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-semibold text-[#1A1A1A]">
              <span className="flex items-center gap-1.5">
                <Move className="w-3.5 h-3.5 text-[#0047AB]" />
                Espacement Z entre les papiers
              </span>
              <span className="font-mono text-[#0047AB]">{lighting.explodeDepth}px</span>
            </div>
            <input
              type="range"
              min="15"
              max="90"
              value={lighting.explodeDepth}
              onChange={(e) => onChangeLighting({ explodeDepth: Number(e.target.value) })}
              className="w-full accent-[#0047AB] cursor-pointer"
            />
          </div>

          {/* Tilt X Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-semibold text-[#1A1A1A]">
              <span className="flex items-center gap-1.5">
                <Rotate3d className="w-3.5 h-3.5 text-[#E63946]" />
                Inclinaison Verticale (Axe X)
              </span>
              <span className="font-mono text-[#E63946]">{lighting.tiltX}°</span>
            </div>
            <input
              type="range"
              min="-40"
              max="50"
              value={lighting.tiltX}
              onChange={(e) => onChangeLighting({ tiltX: Number(e.target.value) })}
              className="w-full accent-[#E63946] cursor-pointer"
            />
          </div>

          {/* Tilt Y Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-semibold text-[#1A1A1A]">
              <span className="flex items-center gap-1.5">
                <Rotate3d className="w-3.5 h-3.5 text-[#06A77D]" />
                Rotation Horizontale (Axe Y)
              </span>
              <span className="font-mono text-[#06A77D]">{lighting.tiltY}°</span>
            </div>
            <input
              type="range"
              min="-60"
              max="60"
              value={lighting.tiltY}
              onChange={(e) => onChangeLighting({ tiltY: Number(e.target.value) })}
              className="w-full accent-[#06A77D] cursor-pointer"
            />
          </div>

          {/* Quick Presets */}
          <div className="pt-2 border-t border-[#1A1A1A]/10">
            <span className="text-[11px] font-semibold text-[#1A1A1A]/70 block mb-2">
              Angles de vue prédéfinis :
            </span>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => onChangeLighting({ tiltX: 20, tiltY: -30, explodeDepth: 40 })}
                className="px-2.5 py-1.5 rounded-lg border border-[#1A1A1A]/10 text-xs font-medium bg-white hover:bg-[#F4F4F0] text-[#1A1A1A]"
              >
                Isométrique Haut
              </button>
              <button
                onClick={() => onChangeLighting({ tiltX: 35, tiltY: 0, explodeDepth: 55 })}
                className="px-2.5 py-1.5 rounded-lg border border-[#1A1A1A]/10 text-xs font-medium bg-white hover:bg-[#F4F4F0] text-[#1A1A1A]"
              >
                Plongeante 35°
              </button>
              <button
                onClick={() => onChangeLighting({ tiltX: 10, tiltY: -45, explodeDepth: 60 })}
                className="px-2.5 py-1.5 rounded-lg border border-[#1A1A1A]/10 text-xs font-medium bg-white hover:bg-[#F4F4F0] text-[#1A1A1A]"
              >
                Profil Rasoir
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 rounded-xl bg-[#F4F4F0] border border-[#1A1A1A]/5 text-center text-xs text-[#1A1A1A]/70 leading-relaxed">
          Activez la vue 3D pour voir physiquement comment chaque feuille de papier découpée flotte au-dessus de la base blanche à son niveau d’élévation précis.
        </div>
      )}
    </div>
  );
};
