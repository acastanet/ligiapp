import React from 'react';
import { LightingState } from '../types';
import { Sun, Sparkles, Grid, MousePointer, Sliders, Layers } from 'lucide-react';

interface LightControllerProps {
  lighting: LightingState;
  onChangeLighting: (updated: Partial<LightingState>) => void;
}

export const LightController: React.FC<LightControllerProps> = ({
  lighting,
  onChangeLighting,
}) => {
  return (
    <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#1A1A1A]/10 paper-elevation-2 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#FFD600] flex items-center justify-center paper-elevation-1">
            <Sun className="w-4 h-4 text-[#1A1A1A]" />
          </div>
          <div>
            <h3 className="font-bold text-[#1A1A1A] text-sm sm:text-base">
              Physique de la Lumière & Ombres
            </h3>
            <p className="text-xs text-[#1A1A1A]/60 font-medium">
              Source lumineuse directionnelle haut-gauche
            </p>
          </div>
        </div>

        <button
          onClick={() =>
            onChangeLighting({
              lightAngle: 135,
              lightIntensity: 1.0,
              shadowDistance: 1.5,
              paperTexture: 'cardstock',
              interactiveMouseLight: false,
            })
          }
          className="text-xs text-[#0047AB] font-semibold hover:underline"
        >
          Réinitialiser
        </button>
      </div>

      {/* Light Angle Slider with Direction Indicators */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-semibold text-[#1A1A1A]">
          <span>Angle Lumineux ({lighting.lightAngle}°)</span>
          <span className="text-[#0047AB]">
            {lighting.lightAngle >= 100 && lighting.lightAngle <= 160
              ? 'Haut-Gauche (Conforme standard)'
              : `${lighting.lightAngle}°`}
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="360"
          value={lighting.lightAngle}
          onChange={(e) => onChangeLighting({ lightAngle: Number(e.target.value) })}
          className="w-full accent-[#0047AB] cursor-pointer"
        />
        <div className="flex justify-between text-[10px] font-medium text-[#1A1A1A]/50 px-0.5">
          <span>0° (Est)</span>
          <span className="font-bold text-[#06A77D]">135° (Haut-Gauche)</span>
          <span>270° (Sud)</span>
          <span>360°</span>
        </div>
      </div>

      {/* Shadow Distance / Elevation Depth */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-semibold text-[#1A1A1A]">
          <span>Portée des Ombres (Élévation diorama)</span>
          <span className="font-mono text-[#0047AB]">{lighting.shadowDistance.toFixed(1)}x</span>
        </div>
        <input
          type="range"
          min="0.5"
          max="3.0"
          step="0.1"
          value={lighting.shadowDistance}
          onChange={(e) => onChangeLighting({ shadowDistance: Number(e.target.value) })}
          className="w-full accent-[#0047AB] cursor-pointer"
        />
      </div>

      {/* Light Softness / Blur Intensity */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-semibold text-[#1A1A1A]">
          <span>Diffusion & Douceur du Flou (20-40px)</span>
          <span className="font-mono text-[#0047AB]">{lighting.lightIntensity.toFixed(1)}x</span>
        </div>
        <input
          type="range"
          min="0.5"
          max="2.0"
          step="0.1"
          value={lighting.lightIntensity}
          onChange={(e) => onChangeLighting({ lightIntensity: Number(e.target.value) })}
          className="w-full accent-[#0047AB] cursor-pointer"
        />
      </div>

      {/* Paper Fiber Texture Selection */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-[#1A1A1A] block">
          Texture & Grain de Fibre du Papier
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { id: 'subtle', label: 'Grain Léger', desc: 'Canson 180g' },
            { id: 'cardstock', label: 'Carte Épaisse', desc: 'Bristol 300g' },
            { id: 'pulp', label: 'Fibre Coton', desc: 'Cuve Artisanale' },
          ].map((tex) => (
            <button
              key={tex.id}
              onClick={() => onChangeLighting({ paperTexture: tex.id as any })}
              className={`p-2.5 rounded-xl border text-left transition-all ${
                lighting.paperTexture === tex.id
                  ? 'border-[#0047AB] bg-[#0047AB]/5 text-[#0047AB] paper-elevation-1'
                  : 'border-[#1A1A1A]/10 bg-white hover:border-[#1A1A1A]/30 text-[#1A1A1A]'
              }`}
            >
              <div className="text-xs font-bold">{tex.label}</div>
              <div className="text-[10px] opacity-60 font-medium">{tex.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Toggles */}
      <div className="pt-2 border-t border-[#1A1A1A]/10 space-y-2.5">
        <button
          onClick={() =>
            onChangeLighting({ interactiveMouseLight: !lighting.interactiveMouseLight })
          }
          className={`w-full p-3 rounded-xl border flex items-center justify-between transition-all ${
            lighting.interactiveMouseLight
              ? 'border-[#F77F00] bg-[#F77F00]/10 text-[#1A1A1A] paper-elevation-1 font-semibold'
              : 'border-[#1A1A1A]/10 bg-white hover:bg-[#F4F4F0] text-[#1A1A1A]/80'
          }`}
        >
          <div className="flex items-center gap-2 text-xs">
            <MousePointer className="w-4 h-4 text-[#F77F00]" />
            <span>Suivi Dynamique de la Lampe (Curseur)</span>
          </div>
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              lighting.interactiveMouseLight ? 'bg-[#F77F00]' : 'bg-gray-300'
            }`}
          />
        </button>

        <button
          onClick={() => onChangeLighting({ showGrid: !lighting.showGrid })}
          className={`w-full p-3 rounded-xl border flex items-center justify-between transition-all ${
            lighting.showGrid
              ? 'border-[#0047AB] bg-[#0047AB]/10 text-[#1A1A1A] paper-elevation-1 font-semibold'
              : 'border-[#1A1A1A]/10 bg-white hover:bg-[#F4F4F0] text-[#1A1A1A]/80'
          }`}
        >
          <div className="flex items-center gap-2 text-xs">
            <Grid className="w-4 h-4 text-[#0047AB]" />
            <span>Grille Modulaire 180px (Structure)</span>
          </div>
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              lighting.showGrid ? 'bg-[#0047AB]' : 'bg-gray-300'
            }`}
          />
        </button>
      </div>
    </div>
  );
};
