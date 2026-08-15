import React from 'react';
import { LightingState } from '../types';
import { Sun, Sparkles, Grid, MousePointer, Sliders, Layers, RotateCcw } from 'lucide-react';

interface LightControllerProps {
  lighting: LightingState;
  onChangeLighting: (updated: Partial<LightingState>) => void;
}

export const LightController: React.FC<LightControllerProps> = ({
  lighting,
  onChangeLighting,
}) => {
  return (
    <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl paper-elevation-2 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-[#FFD600] flex items-center justify-center text-[#1A1A1A] paper-elevation-1">
            <Sun className="w-5 h-5 text-[#1A1A1A]" />
          </div>
          <div>
            <h3 className="font-bold text-[#1A1A1A] text-base font-serif-display">
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
          className="p-2 rounded-xl text-[#0047AB] hover:bg-[#0047AB]/5 paper-elevation-1 transition-all flex items-center gap-1 text-xs font-bold"
          title="Réinitialiser"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Reset</span>
        </button>
      </div>

      {/* Light Angle Slider with Direction Indicators */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-bold text-[#1A1A1A]">
          <span>Angle Lumineux ({lighting.lightAngle}°)</span>
          <span className="text-[#0047AB] font-bold">
            {lighting.lightAngle >= 100 && lighting.lightAngle <= 160
              ? 'Haut-Gauche (Conforme)'
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
        <div className="flex justify-between text-[10px] font-bold text-[#1A1A1A]/50 px-0.5 font-mono">
          <span>0° (Est)</span>
          <span className="font-bold text-[#06A77D]">135° (Haut-Gauche)</span>
          <span>270° (Sud)</span>
          <span>360°</span>
        </div>
      </div>

      {/* Shadow Distance / Elevation Depth */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-bold text-[#1A1A1A]">
          <span>Portée des Ombres (Élévation diorama)</span>
          <span className="font-mono text-[#0047AB] font-bold">{lighting.shadowDistance.toFixed(1)}x</span>
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
        <div className="flex justify-between items-center text-xs font-bold text-[#1A1A1A]">
          <span>Diffusion & Douceur du Flou (20-40px)</span>
          <span className="font-mono text-[#0047AB] font-bold">{lighting.lightIntensity.toFixed(1)}x</span>
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
        <label className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider block">
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
              className={`p-3 rounded-2xl text-left transition-all ${
                lighting.paperTexture === tex.id
                  ? 'bg-[#0047AB] text-white paper-elevation-2 font-bold'
                  : 'bg-white text-[#1A1A1A] paper-elevation-1 hover:paper-elevation-2'
              }`}
            >
              <div className="text-xs font-bold font-serif-display">{tex.label}</div>
              <div className="text-[10px] opacity-75 font-medium">{tex.desc}</div>
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
          className={`w-full p-3.5 rounded-2xl flex items-center justify-between transition-all ${
            lighting.interactiveMouseLight
              ? 'bg-[#0047AB] text-white paper-elevation-2'
              : 'bg-white text-[#1A1A1A] paper-elevation-1 hover:paper-elevation-2'
          }`}
        >
          <div className="flex items-center gap-2.5 text-xs font-bold">
            <MousePointer className={`w-4 h-4 ${lighting.interactiveMouseLight ? 'text-[#FFD600]' : 'text-[#0047AB]'}`} />
            <span>Suivi Dynamique de la Lampe (Curseur)</span>
          </div>
          <span
            className={`w-3 h-3 rounded-full ${
              lighting.interactiveMouseLight ? 'bg-[#FFD600]' : 'bg-gray-200'
            }`}
          />
        </button>

        <button
          onClick={() => onChangeLighting({ showGrid: !lighting.showGrid })}
          className={`w-full p-3.5 rounded-2xl flex items-center justify-between transition-all ${
            lighting.showGrid
              ? 'bg-[#0047AB] text-white paper-elevation-2'
              : 'bg-white text-[#1A1A1A] paper-elevation-1 hover:paper-elevation-2'
          }`}
        >
          <div className="flex items-center gap-2.5 text-xs font-bold">
            <Grid className={`w-4 h-4 ${lighting.showGrid ? 'text-[#FFD600]' : 'text-[#0047AB]'}`} />
            <span>Grille Modulaire 180px (Structure)</span>
          </div>
          <span
            className={`w-3 h-3 rounded-full ${
              lighting.showGrid ? 'bg-[#FFD600]' : 'bg-gray-200'
            }`}
          />
        </button>
      </div>
    </div>
  );
};

