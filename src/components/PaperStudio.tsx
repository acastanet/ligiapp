import React, { useState } from 'react';
import { DioramaComposition, PaperLayer, PaperColor, ElevationLevel } from '../types';
import { PAPER_PALETTE_GUIDE } from '../data/dioramas';
import { Layers, Plus, Trash2, Sliders, Palette, Eye, ArrowUp, ArrowDown, Code2, Sparkles, RotateCcw } from 'lucide-react';

interface PaperStudioProps {
  composition: DioramaComposition;
  selectedLayerId: string | null;
  onSelectLayer: (layerId: string | null) => void;
  onUpdateComposition: (updated: DioramaComposition) => void;
  onResetComposition?: () => void;
}

export const PaperStudio: React.FC<PaperStudioProps> = ({
  composition,
  selectedLayerId,
  onSelectLayer,
  onUpdateComposition,
  onResetComposition,
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
    <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl paper-elevation-2 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-[#06A77D] text-white flex items-center justify-center paper-elevation-1">
            <Sliders className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-[#1A1A1A] text-base font-serif-display">
              Atelier des Calques Papier
            </h3>
            <p className="text-xs text-[#1A1A1A]/60 font-medium">
              Ajustement des élévations et palette
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onResetComposition && (
            <button
              onClick={onResetComposition}
              className="p-2 rounded-2xl bg-[#FFFFFF] text-[#1A1A1A]/70 hover:text-[#E63946] paper-elevation-1 hover:paper-elevation-2 transition-all"
              title="Restaurer la composition originale d'usine"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={handleAddLayer}
            className="bg-[#0047AB] text-white px-3.5 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider paper-btn hover:bg-[#003888] transition-all flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5 text-[#FFD600]" />
            <span>Ajouter</span>
          </button>
        </div>
      </div>

      {/* Layer Stack Inspector */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider block">
          Stratification des Feuilles :
        </span>
        <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
          {composition.layers.map((layer) => (
            <div
              key={layer.id}
              onClick={() => onSelectLayer(layer.id)}
              className={`p-3 rounded-2xl transition-all cursor-pointer flex items-center justify-between ${
                selectedLayerId === layer.id
                  ? 'bg-[#0047AB] text-white paper-elevation-2'
                  : 'bg-[#FFFFFF] text-[#1A1A1A] paper-elevation-1 hover:paper-elevation-2'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="w-4 h-4 rounded-full border border-black/20 flex-shrink-0"
                  style={{ backgroundColor: layer.color }}
                />
                <div>
                  <span className="text-xs font-bold line-clamp-1">
                    {layer.name}
                  </span>
                  <span className={`text-[10px] font-mono ${selectedLayerId === layer.id ? 'text-white/80' : 'text-[#1A1A1A]/60'}`}>
                    Élévation {layer.elevation} • Z {layer.zIndex}
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
                    className={`p-1.5 rounded-lg ${selectedLayerId === layer.id ? 'text-[#FFD600] hover:bg-white/10' : 'text-red-500 hover:bg-red-50'}`}
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
        <div className="p-5 bg-[#FFFFFF] rounded-2xl paper-elevation-2 space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-[#1A1A1A]/10">
            <span className="text-xs font-bold text-[#1A1A1A] font-serif-display">
              Propriétés : {selectedLayer.name}
            </span>
            <span className="text-[10px] font-mono bg-[#FFFFFF] px-2.5 py-1 rounded-full paper-elevation-1 text-[#0047AB] font-bold">
              ID: {selectedLayer.id}
            </span>
          </div>

          {/* Elevation Level Slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold text-[#1A1A1A]">
              <span>Élévation (Relief 1 à 5)</span>
              <span className="font-mono text-[#0047AB] font-bold">Niveau {selectedLayer.elevation}</span>
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
          </div>

          {/* Strict Color Palette Selector */}
          {selectedLayer.type !== 'base-white' && (
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider block">
                Teinte du Papier (Palette Primaire) :
              </span>
              <div className="grid grid-cols-6 gap-2">
                {PAPER_PALETTE_GUIDE.filter(c => c.hex !== '#1A1A1A' && c.hex !== '#2d3e40').map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => handleUpdateLayer(selectedLayer.id, { color: c.hex as PaperColor })}
                    title={`${c.name} (${c.hex})`}
                    className={`h-10 rounded-xl transition-all flex items-center justify-center ${
                      selectedLayer.color === c.hex
                        ? 'paper-elevation-2 scale-105 border-2 border-[#1A1A1A]'
                        : 'paper-elevation-1 hover:scale-105'
                    }`}
                    style={{ backgroundColor: c.hex }}
                  >
                    {selectedLayer.color === c.hex && (
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
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
          <div className="p-4 bg-[#1A1A1A] rounded-xl font-mono text-[11px] text-[#F8F9FA] space-y-1">
            <div className="text-[10px] font-bold text-[#FFD600] font-sans flex items-center gap-1 mb-1 uppercase tracking-wider">
              <Code2 className="w-3 h-3 text-[#FFD600]" /> CSS Rendu :
            </div>
            <div>background-color: <span className="font-bold text-[#FFD600]">{selectedLayer.color}</span>;</div>
            <div>box-shadow: <span className="text-[#06A77D]">var(--paper-elevation-{selectedLayer.elevation})</span>;</div>
            <div>filter: <span className="text-[#E63946]">paper-filter-{selectedLayer.elevation}</span>;</div>
          </div>
        </div>
      ) : (
        <div className="p-4 rounded-2xl bg-[#FFFFFF] paper-elevation-1 text-center text-xs text-[#1A1A1A]/60 font-medium">
          Sélectionnez un calque dans le diorama pour modifier son relief et sa teinte.
        </div>
      )}
    </div>
  );
};

