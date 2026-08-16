import React, { useState } from 'react';
import { DioramaComposition, PaperLayer, PaperColor, ElevationLevel } from '../types';
import { PAPER_PALETTE_GUIDE } from '../data/dioramas';
import { Layers, Plus, Trash2, Sliders, Palette, Eye, ArrowUp, ArrowDown, Code2, Sparkles } from 'lucide-react';

interface PaperStudioProps {
  composition: DioramaComposition;
  selectedLayerId: string | null;
  onSelectLayer: (layerId: string | null) => void;
  onUpdateComposition: (updated: DioramaComposition) => void;
}

export const PaperStudio: React.FC<PaperStudioProps> = ({
  composition,
  selectedLayerId,
  onSelectLayer,
  onUpdateComposition,
}) => {
  const selectedLayer = composition.layers.find((l) => l.id === selectedLayerId);

  const handleUpdateLayer = (layerId: string, updates: Partial<PaperLayer>) => {
    const nextLayers = composition.layers.map((l) => {
      if (l.id === layerId) {
        return { ...l, ...updates };
      }
      return l;
    });
    onUpdateComposition({
      ...composition,
      layers: nextLayers,
    });
  };

  const handleAddLayer = () => {
    const newId = `custom-layer-${Date.now()}`;
    const newLayer: PaperLayer = {
      id: newId,
      name: `Nouveau Calque Géométrique ${composition.layers.length + 1}`,
      elevation: 3,
      color: '#FFD600',
      type: 'geometric',
      zIndex: composition.layers.length + 1,
      x: 35,
      y: 35,
      width: '180px',
      height: '180px',
    };

    onUpdateComposition({
      ...composition,
      layers: [...composition.layers, newLayer],
    });
    onSelectLayer(newId);
  };

  const handleDeleteLayer = (layerId: string) => {
    if (composition.layers.length <= 2) return;
    const nextLayers = composition.layers.filter((l) => l.id !== layerId);
    onUpdateComposition({
      ...composition,
      layers: nextLayers,
    });
    if (selectedLayerId === layerId) {
      onSelectLayer(null);
    }
  };

  return (
    <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#1A1A1A]/10 paper-elevation-2 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#06A77D] text-white flex items-center justify-center paper-elevation-1">
            <Sliders className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-[#1A1A1A] text-sm sm:text-base">
              Atelier & Gestion des Calques Papier
            </h3>
            <p className="text-xs text-[#1A1A1A]/60 font-medium">
              Ajustement des élévations et palette stricte
            </p>
          </div>
        </div>

        <button
          onClick={handleAddLayer}
          className="paper-btn px-3 py-1.5 rounded-lg bg-[#FFFFFF] border-2 border-[#06A77D] text-[#06A77D] text-xs font-bold flex items-center gap-1.5"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Ajouter Forme</span>
        </button>
      </div>

      {/* Layer Stack Inspector */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-[#1A1A1A] block">
          Stratification des Feuilles (De l'arrière-plan vers le premier plan) :
        </span>
        <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
          {composition.layers.map((layer, idx) => (
            <div
              key={layer.id}
              onClick={() => onSelectLayer(layer.id)}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                selectedLayerId === layer.id
                  ? 'border-[#0047AB] bg-[#0047AB]/5 paper-elevation-1'
                  : 'border-[#1A1A1A]/10 bg-white hover:bg-[#F4F4F0]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="w-4 h-4 rounded-md border border-black/10 flex-shrink-0"
                  style={{ backgroundColor: layer.color }}
                />
                <div>
                  <span className="text-xs font-bold text-[#1A1A1A] line-clamp-1">
                    {layer.name}
                  </span>
                  <span className="text-[10px] text-[#1A1A1A]/60 font-mono">
                    Élévation {layer.elevation} • Z-Index {layer.zIndex}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {layer.type !== 'base-white' && layer.type !== 'info-card' && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteLayer(layer.id);
                    }}
                    className="p-1 rounded text-red-500 hover:bg-red-50"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Layer Properties Editor */}
      {selectedLayer ? (
        <div className="p-4 rounded-xl bg-[#F4F4F0] border border-[#1A1A1A]/10 space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-[#1A1A1A]/10">
            <span className="text-xs font-bold text-[#1A1A1A]">
              Propriétés de la Découpe : {selectedLayer.name}
            </span>
            <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-[#1A1A1A]/10">
              ID: {selectedLayer.id}
            </span>
          </div>

          {/* Elevation Level Slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold text-[#1A1A1A]">
              <span>Élévation (Niveau de relief 1 à 5)</span>
              <span className="font-mono text-[#0047AB]">Niveau {selectedLayer.elevation}</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={selectedLayer.elevation}
              onChange={(e) =>
                handleUpdateLayer(selectedLayer.id, {
                  elevation: Number(e.target.value) as ElevationLevel,
                })
              }
              className="w-full accent-[#0047AB] cursor-pointer"
            />
            <p className="text-[10px] text-[#1A1A1A]/60">
              L'élévation détermine le rayon de flou (20-40px) et le décalage de l'ombre portée.
            </p>
          </div>

          {/* Strict Color Palette Selector */}
          {selectedLayer.type !== 'base-white' && (
            <div className="space-y-2">
              <span className="text-xs font-semibold text-[#1A1A1A] block">
                Teinte dans la Masse (Palette Stricte) :
              </span>
              <div className="grid grid-cols-6 gap-2">
                {PAPER_PALETTE_GUIDE.filter(c => c.hex !== '#1A1A1A').map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => handleUpdateLayer(selectedLayer.id, { color: c.hex as PaperColor })}
                    title={`${c.name} (${c.hex})`}
                    className={`h-9 rounded-lg border-2 transition-all flex items-center justify-center ${
                      selectedLayer.color === c.hex
                        ? 'border-[#0047AB] scale-110 shadow-md'
                        : 'border-white hover:scale-105'
                    }`}
                    style={{ backgroundColor: c.hex }}
                  >
                    {selectedLayer.color === c.hex && (
                      <span
                        className={`w-2 h-2 rounded-full ${
                          c.hex === '#FFFFFF' || c.hex === '#FFD600' ? 'bg-black' : 'bg-white'
                        }`}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* CSS Code Inspector for this layer */}
          <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#1A1A1A]/10 font-mono text-[11px] text-[#1A1A1A] space-y-1">
            <div className="text-[10px] font-bold text-[#0047AB] font-sans flex items-center gap-1 mb-1">
              <Code2 className="w-3 h-3" /> CSS Généré :
            </div>
            <div>background-color: <span className="font-bold">{selectedLayer.color}</span>;</div>
            <div>box-shadow: <span className="text-[#06A77D]">var(--paper-elevation-{selectedLayer.elevation})</span>;</div>
            <div>filter: <span className="text-[#F77F00]">paper-filter-{selectedLayer.elevation}</span>;</div>
          </div>
        </div>
      ) : (
        <div className="p-4 rounded-xl bg-[#F4F4F0] border border-[#1A1A1A]/10 text-center text-xs text-[#1A1A1A]/60">
          Sélectionnez un calque dans le diorama ci-dessus pour ajuster son élévation, sa couleur ou son relief.
        </div>
      )}
    </div>
  );
};
