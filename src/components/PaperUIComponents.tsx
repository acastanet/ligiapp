import React, { useState } from 'react';
import { PaperColor } from '../types';
import { 
  Check, 
  ChevronRight, 
  Sparkles, 
  Bookmark, 
  Send, 
  Layers, 
  Sliders, 
  Sun,
  Flame,
  Feather,
  Compass,
  ArrowUpRight
} from 'lucide-react';

export const PaperUIComponents: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cards' | 'buttons' | 'badges' | 'controls'>('cards');
  const [switchState, setSwitchState] = useState(true);
  const [radioVal, setRadioVal] = useState('layer-3');
  const [btnCounter, setBtnCounter] = useState(0);

  return (
    <div className="bg-[#FFFFFF] p-6 sm:p-10 rounded-3xl paper-elevation-2 space-y-8">
      {/* Header */}
      <div className="pb-6 border-b border-[#1A1A1A]/10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] text-[#0047AB] text-xs font-bold mb-3 paper-elevation-1">
          <Sparkles className="w-3.5 h-3.5 text-[#FFD600]" />
          KIT DE COMPOSANTS UI PAPIER DÉCOUPÉ
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] font-serif-display">
          Système d’Interface Tactile en Papier Pur
        </h2>
        <p className="text-sm text-[#1A1A1A]/70 mt-1 max-w-2xl font-medium leading-relaxed">
          Tous les composants respectent la hiérarchie diorama : biseaux de lumière rasante haut-gauche, textures fibres, textes placés rigoureusement sur aplat blanc pur (#FFFFFF) et palette de couleurs primaires.
        </p>
      </div>

      {/* Segmented Paper Tab Switcher */}
      <div className="flex flex-wrap gap-1.5 p-1.5 bg-[#FFFFFF] rounded-2xl paper-elevation-1 max-w-xl">
        {[
          { id: 'cards', label: 'Cartes & Dioramas' },
          { id: 'buttons', label: 'Boutons Tactiles' },
          { id: 'badges', label: 'Badges & Statuts' },
          { id: 'controls', label: 'Interrupteurs' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all text-center ${
              activeTab === tab.id
                ? 'bg-[#0047AB] text-white paper-elevation-1'
                : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: Cards & Diorama Info Containers */}
      {activeTab === 'cards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Architectural Stepped Card */}
          <div className="relative overflow-hidden bg-[#FFFFFF] rounded-3xl paper-elevation-2 p-1.5">
            {/* Cutout Accent Backplate in Blue Cobalt */}
            <div className="h-32 bg-[#0047AB] rounded-2xl relative overflow-hidden paper-fiber-bg p-4 flex items-start justify-between">
              <div className="w-20 h-20 rounded-full bg-[#FFD600] absolute -right-4 -bottom-6 paper-elevation-1" />
              <div className="w-14 h-14 bg-[#E63946] absolute left-12 -top-4 rotate-12 rounded-xl paper-elevation-1" />
              
              <span className="px-3 py-1 bg-[#FFFFFF] text-[#0047AB] text-[11px] font-bold rounded-full paper-elevation-1">
                Niveau 3 Diorama
              </span>
            </div>

            {/* Pure White Text Layer Overlay */}
            <div className="-mt-8 mx-3 mb-3 p-6 bg-[#FFFFFF] rounded-2xl paper-elevation-2 relative z-10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#E63946] tracking-widest uppercase">
                  Structure & Relief
                </span>
                <span className="text-xs font-mono font-bold text-[#1A1A1A]/50">ELEV-3</span>
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] font-serif-display">
                Carte à Double Calque Papier
              </h3>
              <p className="text-xs text-[#1A1A1A]/75 leading-relaxed">
                Le fond bleu cobalt agit comme passe-partout découpé, tandis que le cartouche blanc flotte au premier plan avec une ombre portée douce accentuée.
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-[#1A1A1A]/10">
                <span className="text-xs font-bold text-[#1A1A1A]">Détail technique</span>
                <button className="px-4 py-2 bg-[#0047AB] text-white text-xs font-bold uppercase tracking-wider rounded-2xl paper-btn hover:bg-[#003888] flex items-center gap-1">
                  Explorer <ArrowUpRight className="w-3 h-3 text-[#FFD600]" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Botanical & Color Rhythm Card */}
          <div className="relative overflow-hidden bg-[#FFFFFF] rounded-3xl paper-elevation-2 p-1.5">
            <div className="h-32 bg-[#06A77D] rounded-2xl relative overflow-hidden paper-fiber-bg p-4 flex items-start justify-between">
              <div className="w-20 h-20 rounded-full bg-[#F77F00] absolute right-8 -top-6 paper-elevation-1" />
              <div className="w-14 h-14 bg-[#FFD600] absolute left-6 -bottom-5 rounded-tr-3xl paper-elevation-1" />
              <span className="px-3 py-1 bg-[#FFFFFF] text-[#06A77D] text-[11px] font-bold rounded-full paper-elevation-1">
                Palette 5 Couleurs
              </span>
            </div>

            <div className="-mt-8 mx-3 mb-3 p-6 bg-[#FFFFFF] rounded-2xl paper-elevation-2 relative z-10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#06A77D] tracking-widest uppercase">
                  Harmonie Organique
                </span>
                <span className="text-xs font-mono font-bold text-[#1A1A1A]/50">ELEV-4</span>
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] font-serif-display">
                Découpe Végétale & Gradins
              </h3>
              <p className="text-xs text-[#1A1A1A]/75 leading-relaxed">
                Les contrastes de tons émeraudes et ocres sont sublimés par 33% d’espace négatif blanc immaculé assurant une lisibilité typographique optimale.
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-[#1A1A1A]/10">
                <span className="text-xs font-bold text-[#1A1A1A]">Format 16:9</span>
                <button className="px-4 py-2 bg-[#0047AB] text-white text-xs font-bold uppercase tracking-wider rounded-2xl paper-btn hover:bg-[#003888] flex items-center gap-1">
                  Inspecter <ArrowUpRight className="w-3 h-3 text-[#FFD600]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Tactile Buttons */}
      {activeTab === 'buttons' && (
        <div className="space-y-6">
          <div className="p-5 bg-[#FFFFFF] rounded-2xl paper-elevation-1 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                Comportement Tactile & Décalage d’Enfoncement
              </h4>
              <p className="text-xs text-[#1A1A1A]/70 font-medium">
                Cliquez pour tester l'illusion de pression physique sur papier avec ombres projetées douces et profondes.
              </p>
            </div>
            <div className="px-4 py-2 bg-[#FFFFFF] rounded-full paper-elevation-1 text-xs font-bold text-[#0047AB]">
              Clics : {btnCounter}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Button 1: Primary Blue */}
            <div className="p-6 bg-[#FFFFFF] rounded-2xl paper-elevation-1 space-y-3">
              <span className="text-[11px] font-bold text-[#1A1A1A]/60 block uppercase tracking-wider">BOUTON BLEU COBALT</span>
              <button
                onClick={() => setBtnCounter(c => c + 1)}
                className="w-full py-3.5 px-5 bg-[#0047AB] text-white font-bold text-xs uppercase tracking-widest rounded-2xl paper-btn hover:bg-[#003888] flex items-center justify-center gap-2"
              >
                <Layers className="w-4 h-4 text-[#FFD600]" />
                <span>Action Primaire</span>
              </button>
            </div>

            {/* Button 2: Crimson Accent */}
            <div className="p-6 bg-[#FFFFFF] rounded-2xl paper-elevation-1 space-y-3">
              <span className="text-[11px] font-bold text-[#1A1A1A]/60 block uppercase tracking-wider">ACCENT ROUGE CARDINAL</span>
              <button
                onClick={() => setBtnCounter(c => c + 1)}
                className="w-full py-3.5 px-5 bg-[#E63946] text-white font-bold text-xs uppercase tracking-widest rounded-2xl paper-btn hover:bg-[#d62839] flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4 text-[#FFD600]" />
                <span>Découper Calque</span>
              </button>
            </div>

            {/* Button 3: Emerald Accent */}
            <div className="p-6 bg-[#FFFFFF] rounded-2xl paper-elevation-1 space-y-3">
              <span className="text-[11px] font-bold text-[#1A1A1A]/60 block uppercase tracking-wider">ACCENT VERT ÉMERAUDE</span>
              <button
                onClick={() => setBtnCounter(c => c + 1)}
                className="w-full py-3.5 px-5 bg-[#06A77D] text-white font-bold text-xs uppercase tracking-widest rounded-2xl paper-btn hover:bg-[#058c68] flex items-center justify-center gap-2"
              >
                <Feather className="w-4 h-4 text-white" />
                <span>Valider Forme</span>
              </button>
            </div>

            {/* Button 4: Layered Pill Button */}
            <div className="p-6 bg-[#FFFFFF] rounded-2xl paper-elevation-1 space-y-3">
              <span className="text-[11px] font-bold text-[#1A1A1A]/60 block uppercase tracking-wider">PILULE TACTILE OCRE</span>
              <button
                onClick={() => setBtnCounter(c => c + 1)}
                className="w-full py-3 px-6 rounded-full bg-[#F77F00] text-white font-bold text-xs uppercase tracking-wider paper-btn hover:bg-[#e07100] flex items-center justify-center gap-2"
              >
                <Sun className="w-3.5 h-3.5 text-[#FFD600]" />
                <span>Rayonner Lumière</span>
              </button>
            </div>

            {/* Button 5: Rounded Icon Paper Buttons */}
            <div className="p-6 bg-[#FFFFFF] rounded-2xl paper-elevation-1 space-y-3">
              <span className="text-[11px] font-bold text-[#1A1A1A]/60 block uppercase tracking-wider">BOUTONS D'ACTION RAPIDE</span>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setBtnCounter(c => c + 1)}
                  className="w-12 h-12 bg-[#FFFFFF] rounded-2xl paper-elevation-1 hover:paper-elevation-2 flex items-center justify-center text-[#0047AB] transition-all"
                >
                  <Compass className="w-5 h-5 text-[#0047AB]" />
                </button>
                <button
                  onClick={() => setBtnCounter(c => c + 1)}
                  className="w-12 h-12 bg-[#FFFFFF] rounded-2xl paper-elevation-1 hover:paper-elevation-2 flex items-center justify-center text-[#E63946] transition-all"
                >
                  <Bookmark className="w-5 h-5 text-[#E63946]" />
                </button>
                <button
                  onClick={() => setBtnCounter(c => c + 1)}
                  className="w-12 h-12 bg-[#FFFFFF] rounded-2xl paper-elevation-1 hover:paper-elevation-2 flex items-center justify-center text-[#06A77D] transition-all"
                >
                  <Send className="w-5 h-5 text-[#06A77D]" />
                </button>
              </div>
            </div>

            {/* Button 6: Floating Elevated White Button */}
            <div className="p-6 bg-[#FFFFFF] rounded-2xl paper-elevation-1 space-y-3">
              <span className="text-[11px] font-bold text-[#1A1A1A]/60 block uppercase tracking-wider">CARTOUCHE BLANC ÉLEVÉ</span>
              <button
                onClick={() => setBtnCounter(c => c + 1)}
                className="w-full py-3.5 px-5 bg-[#FFFFFF] text-[#0047AB] font-bold text-xs uppercase tracking-widest rounded-2xl paper-elevation-2 hover:paper-elevation-3 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#FFD600]" />
                <span>Expérience Diorama</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Badges & Status Pills */}
      {activeTab === 'badges' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Color Coded Paper Badges */}
            <div className="p-6 bg-[#FFFFFF] rounded-3xl paper-elevation-2 space-y-4">
              <h4 className="text-sm font-bold text-[#1A1A1A] font-serif-display">
                Badges de Statut Découpés (Texte sur #FFFFFF)
              </h4>
              <div className="flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFFFFF] rounded-full text-[#1A1A1A] text-xs font-bold paper-elevation-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFD600]" />
                  Jaune Solaire
                </span>

                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFFFFF] rounded-full text-[#1A1A1A] text-xs font-bold paper-elevation-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0047AB]" />
                  Bleu Cobalt
                </span>

                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFFFFF] rounded-full text-[#1A1A1A] text-xs font-bold paper-elevation-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E63946]" />
                  Rouge Cardinal
                </span>

                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFFFFF] rounded-full text-[#1A1A1A] text-xs font-bold paper-elevation-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F77F00]" />
                  Ocre Orangé
                </span>

                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFFFFF] rounded-full text-[#1A1A1A] text-xs font-bold paper-elevation-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#06A77D]" />
                  Vert Émeraude
                </span>
              </div>
            </div>

            {/* Stepped Elevation Badges */}
            <div className="p-6 bg-[#FFFFFF] rounded-3xl paper-elevation-2 space-y-4">
              <h4 className="text-sm font-bold text-[#1A1A1A] font-serif-display">
                Échelles d'Élévation 1 à 5 (Ombres progressives)
              </h4>
              <div className="space-y-2.5">
                {[1, 2, 3, 4, 5].map((lvl) => (
                  <div
                    key={lvl}
                    className={`p-3 bg-[#FFFFFF] rounded-2xl flex items-center justify-between text-xs font-bold text-[#1A1A1A] paper-elevation-${lvl}`}
                  >
                    <span>Élévation Stratifiée Niveau {lvl}</span>
                    <span className="font-mono text-[11px] text-[#0047AB] font-bold">
                      Flou {lvl * 10}px • Opacité {(0.12 + lvl * 0.04).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Form Controls & Switches */}
      {activeTab === 'controls' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Paper Tactile Switch */}
          <div className="p-6 bg-[#FFFFFF] rounded-3xl paper-elevation-2 space-y-4">
            <h4 className="text-sm font-bold text-[#1A1A1A] font-serif-display">
              Interrupteur à Bascule en Papier Découpé
            </h4>
            <div className="flex items-center justify-between p-4 bg-[#FFFFFF] rounded-2xl paper-elevation-1">
              <span className="text-xs font-bold text-[#1A1A1A]">
                Ombrage volumétrique dynamique
              </span>
              <button
                onClick={() => setSwitchState(!switchState)}
                className={`w-14 h-8 p-1 relative rounded-full transition-all ${
                  switchState
                    ? 'bg-[#0047AB]'
                    : 'bg-gray-200'
                }`}
              >
                <div
                  className={`w-6 h-6 bg-[#FFFFFF] rounded-full paper-elevation-1 transition-transform ${
                    switchState ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Paper Radio Layer Selection */}
          <div className="p-6 bg-[#FFFFFF] rounded-3xl paper-elevation-2 space-y-4">
            <h4 className="text-sm font-bold text-[#1A1A1A] font-serif-display">
              Sélecteur de Plan Découpé
            </h4>
            <div className="space-y-2">
              {[
                { id: 'layer-1', label: 'Premier Plan Découpé (Scalpel fin)' },
                { id: 'layer-2', label: 'Plan Intermédiaire (Arches & Frondes)' },
                { id: 'layer-3', label: 'Arrière-plan Zénithal (Soleil & Ciel)' },
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setRadioVal(opt.id)}
                  className={`p-3.5 rounded-2xl cursor-pointer flex items-center justify-between text-xs font-bold transition-all ${
                    radioVal === opt.id
                      ? 'bg-[#0047AB] text-white paper-elevation-2'
                      : 'bg-[#FFFFFF] text-[#1A1A1A] paper-elevation-1 hover:paper-elevation-2'
                  }`}
                >
                  <span>{opt.label}</span>
                  {radioVal === opt.id && <Check className="w-4 h-4 text-[#FFD600]" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

