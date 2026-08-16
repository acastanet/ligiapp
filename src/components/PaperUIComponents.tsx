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
    <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#1A1A1A]/10 paper-elevation-3 space-y-8">
      {/* Header */}
      <div className="pb-6 border-b border-[#1A1A1A]/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#1A1A1A]/10 paper-elevation-1 text-xs font-bold text-[#1A1A1A] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#F77F00]" />
          KIT DE COMPOSANTS UI PAPIER DÉCOUPÉ
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A1A]">
          Système d’Interface Tactile en Papier Pur
        </h2>
        <p className="text-sm text-[#1A1A1A]/70 mt-1 max-w-2xl">
          Tous les composants respectent la hiérarchie diorama : biseaux de lumière rasante haut-gauche, textures fibres, textes placés rigoureusement sur aplat blanc pur (#FFFFFF) et palette de 5 couleurs maîtresses.
        </p>
      </div>

      {/* Segmented Paper Tab Switcher */}
      <div className="flex p-1.5 rounded-xl bg-[#F4F4F0] border border-[#1A1A1A]/10 max-w-lg">
        {[
          { id: 'cards', label: 'Cartes & Dioramas' },
          { id: 'buttons', label: 'Boutons Tactiles' },
          { id: 'badges', label: 'Badges & Statuts' },
          { id: 'controls', label: 'Interrupteurs & Formulaires' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-bold rounded-lg transition-all text-center ${
              activeTab === tab.id
                ? 'bg-[#FFFFFF] text-[#1A1A1A] paper-elevation-1 border-t border-l border-white'
                : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
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
          <div className="relative rounded-2xl overflow-hidden bg-[#F4F4F0] border border-[#1A1A1A]/10 p-1 paper-elevation-2">
            {/* Cutout Accent Backplate in Blue Cobalt */}
            <div className="h-28 bg-[#0047AB] rounded-xl relative overflow-hidden paper-fiber-bg p-4 flex items-start justify-between">
              {/* Geometric paper cutout frill */}
              <div className="w-16 h-16 rounded-full bg-[#FFD600] absolute -right-4 -bottom-6 paper-elevation-1" />
              <div className="w-12 h-12 bg-[#E63946] absolute left-12 -top-4 rounded-lg rotate-12 paper-elevation-1" />
              
              <span className="px-2.5 py-1 rounded-md bg-[#FFFFFF] text-[#1A1A1A] text-[11px] font-bold paper-elevation-1">
                Niveau 3 Diorama
              </span>
            </div>

            {/* Pure White Text Layer Overlay (Strict Rule: Text strictly on #FFFFFF) */}
            <div className="-mt-8 mx-3 mb-3 p-5 rounded-xl bg-[#FFFFFF] border-t-2 border-l-2 border-white paper-elevation-3 relative z-10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#F77F00] tracking-wider uppercase">
                  Structure & Relief
                </span>
                <span className="text-xs font-mono font-bold text-[#1A1A1A]/50">ELEV-3</span>
              </div>
              <h3 className="text-base font-bold text-[#1A1A1A]">
                Carte à Double Calque Papier
              </h3>
              <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                Le fond bleu cobalt agit comme passe-partout découpé, tandis que le cartouche blanc flotte au premier plan avec une ombre portée douce.
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-[#1A1A1A]/10">
                <span className="text-xs font-semibold text-[#1A1A1A]">Détail technique</span>
                <button className="paper-btn px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#1A1A1A]/10 text-xs font-bold text-[#0047AB] flex items-center gap-1">
                  Explorer <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Botanical & Color Rhythm Card */}
          <div className="relative rounded-2xl overflow-hidden bg-[#F4F4F0] border border-[#1A1A1A]/10 p-1 paper-elevation-2">
            <div className="h-28 bg-[#06A77D] rounded-xl relative overflow-hidden paper-fiber-bg p-4 flex items-start justify-between">
              <div className="w-20 h-20 rounded-full bg-[#F77F00] absolute right-8 -top-6 paper-elevation-1" />
              <div className="w-14 h-14 bg-[#FFD600] absolute left-6 -bottom-5 rounded-tr-3xl paper-elevation-1" />
              <span className="px-2.5 py-1 rounded-md bg-[#FFFFFF] text-[#1A1A1A] text-[11px] font-bold paper-elevation-1">
                Palette 5 Couleurs
              </span>
            </div>

            <div className="-mt-8 mx-3 mb-3 p-5 rounded-xl bg-[#FFFFFF] border-t-2 border-l-2 border-white paper-elevation-3 relative z-10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#06A77D] tracking-wider uppercase">
                  Harmonie Organique
                </span>
                <span className="text-xs font-mono font-bold text-[#1A1A1A]/50">ELEV-4</span>
              </div>
              <h3 className="text-base font-bold text-[#1A1A1A]">
                Découpe Végétale & Gradins
              </h3>
              <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                Les contrastes de tons émeraudes et ocres sont sublimés par 33% d’espace négatif blanc immaculé assurant une lisibilité typographique optimale.
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-[#1A1A1A]/10">
                <span className="text-xs font-semibold text-[#1A1A1A]">Format 16:9</span>
                <button className="paper-btn px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#1A1A1A]/10 text-xs font-bold text-[#06A77D] flex items-center gap-1">
                  Inspecter <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Tactile Buttons */}
      {activeTab === 'buttons' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-[#F4F4F0] border border-[#1A1A1A]/10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                Comportement Tactile & Décalage d’Enfoncement
              </h4>
              <p className="text-xs text-[#1A1A1A]/70">
                Cliquez pour tester l'illusion de pression physique sur le papier épais (déplacement 2px vers le bas-droite).
              </p>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#1A1A1A]/10 text-xs font-bold text-[#1A1A1A]">
              Clics enregistrés : {btnCounter}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Button 1: Primary Pure White with Cobalt Border */}
            <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#1A1A1A]/10 paper-elevation-1 space-y-3">
              <span className="text-[11px] font-bold text-[#1A1A1A]/50 block">BOUTON PRIMAIRE BLANC</span>
              <button
                onClick={() => setBtnCounter(c => c + 1)}
                className="paper-btn w-full py-3 px-5 rounded-xl bg-[#FFFFFF] border-2 border-[#0047AB] text-[#0047AB] font-bold text-sm flex items-center justify-center gap-2"
              >
                <Layers className="w-4 h-4" />
                <span>Action Primaire</span>
              </button>
            </div>

            {/* Button 2: Pure White with Crimson Accent */}
            <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#1A1A1A]/10 paper-elevation-1 space-y-3">
              <span className="text-[11px] font-bold text-[#1A1A1A]/50 block">ACCENT ROUGE CARDINAL</span>
              <button
                onClick={() => setBtnCounter(c => c + 1)}
                className="paper-btn w-full py-3 px-5 rounded-xl bg-[#FFFFFF] border-2 border-[#E63946] text-[#E63946] font-bold text-sm flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4" />
                <span>Découper Calque</span>
              </button>
            </div>

            {/* Button 3: Pure White with Emerald Accent */}
            <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#1A1A1A]/10 paper-elevation-1 space-y-3">
              <span className="text-[11px] font-bold text-[#1A1A1A]/50 block">ACCENT VERT ÉMERAUDE</span>
              <button
                onClick={() => setBtnCounter(c => c + 1)}
                className="paper-btn w-full py-3 px-5 rounded-xl bg-[#FFFFFF] border-2 border-[#06A77D] text-[#06A77D] font-bold text-sm flex items-center justify-center gap-2"
              >
                <Feather className="w-4 h-4" />
                <span>Valider Forme</span>
              </button>
            </div>

            {/* Button 4: Layered Pill Button */}
            <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#1A1A1A]/10 paper-elevation-1 space-y-3">
              <span className="text-[11px] font-bold text-[#1A1A1A]/50 block">PILULE TACTILE OCRE</span>
              <button
                onClick={() => setBtnCounter(c => c + 1)}
                className="paper-btn w-full py-2.5 px-6 rounded-full bg-[#FFFFFF] border-2 border-[#F77F00] text-[#1A1A1A] font-bold text-xs flex items-center justify-center gap-2"
              >
                <Sun className="w-3.5 h-3.5 text-[#F77F00]" />
                <span>Rayonner Lumière</span>
              </button>
            </div>

            {/* Button 5: Square Icon Paper Button */}
            <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#1A1A1A]/10 paper-elevation-1 space-y-3">
              <span className="text-[11px] font-bold text-[#1A1A1A]/50 block">BOUTONS D'ACTION RAPIDE</span>
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => setBtnCounter(c => c + 1)}
                  className="paper-btn w-11 h-11 rounded-xl bg-[#FFFFFF] border border-[#1A1A1A]/20 flex items-center justify-center text-[#0047AB]"
                >
                  <Compass className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setBtnCounter(c => c + 1)}
                  className="paper-btn w-11 h-11 rounded-xl bg-[#FFFFFF] border border-[#1A1A1A]/20 flex items-center justify-center text-[#E63946]"
                >
                  <Bookmark className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setBtnCounter(c => c + 1)}
                  className="paper-btn w-11 h-11 rounded-xl bg-[#FFFFFF] border border-[#1A1A1A]/20 flex items-center justify-center text-[#06A77D]"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Button 6: Floating Elevated CTA */}
            <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#1A1A1A]/10 paper-elevation-1 space-y-3">
              <span className="text-[11px] font-bold text-[#1A1A1A]/50 block">ÉLÉVATION HAUTE 4</span>
              <button
                onClick={() => setBtnCounter(c => c + 1)}
                className="w-full py-3 px-5 rounded-xl bg-[#FFFFFF] border border-[#1A1A1A]/15 text-[#1A1A1A] font-extrabold text-sm flex items-center justify-center gap-2 paper-elevation-4 hover:scale-[1.02] active:scale-[0.98] transition-all"
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
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#1A1A1A]/10 paper-elevation-2 space-y-4">
              <h4 className="text-sm font-bold text-[#1A1A1A]">
                Badges de Statut Découpés (Texte strictly sur #FFFFFF)
              </h4>
              <div className="flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border-2 border-[#FFD600] text-[#1A1A1A] text-xs font-bold paper-elevation-1">
                  <span className="w-2 h-2 rounded-full bg-[#FFD600]" />
                  Jaune Solaire #FFD600
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border-2 border-[#0047AB] text-[#1A1A1A] text-xs font-bold paper-elevation-1">
                  <span className="w-2 h-2 rounded-full bg-[#0047AB]" />
                  Bleu Cobalt #0047AB
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border-2 border-[#E63946] text-[#1A1A1A] text-xs font-bold paper-elevation-1">
                  <span className="w-2 h-2 rounded-full bg-[#E63946]" />
                  Rouge Cardinal #E63946
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border-2 border-[#F77F00] text-[#1A1A1A] text-xs font-bold paper-elevation-1">
                  <span className="w-2 h-2 rounded-full bg-[#F77F00]" />
                  Ocre Orangé #F77F00
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border-2 border-[#06A77D] text-[#1A1A1A] text-xs font-bold paper-elevation-1">
                  <span className="w-2 h-2 rounded-full bg-[#06A77D]" />
                  Vert Émeraude #06A77D
                </span>
              </div>
            </div>

            {/* Stepped Elevation Badges */}
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#1A1A1A]/10 paper-elevation-2 space-y-4">
              <h4 className="text-sm font-bold text-[#1A1A1A]">
                Échelles d'Élévation 1 à 5 (Ombres progressives)
              </h4>
              <div className="space-y-2.5">
                {[1, 2, 3, 4, 5].map((lvl) => (
                  <div
                    key={lvl}
                    className={`p-2.5 rounded-xl bg-[#FFFFFF] border-t border-l border-white flex items-center justify-between text-xs font-bold text-[#1A1A1A] paper-elevation-${lvl}`}
                  >
                    <span>Élévation Stratifiée Niveau {lvl}</span>
                    <span className="font-mono text-[11px] text-[#0047AB]">
                      Flou {lvl * 8}px • Opacité {(0.12 + lvl * 0.03).toFixed(2)}
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
          <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#1A1A1A]/10 paper-elevation-2 space-y-4">
            <h4 className="text-sm font-bold text-[#1A1A1A]">
              Interrupteur à Bascule en Papier Découpé
            </h4>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#F4F4F0] border border-[#1A1A1A]/10">
              <span className="text-xs font-semibold text-[#1A1A1A]">
                Ombrage volumétrique dynamique
              </span>
              <button
                onClick={() => setSwitchState(!switchState)}
                className={`w-14 h-8 rounded-full transition-colors p-1 relative border ${
                  switchState
                    ? 'bg-[#0047AB] border-[#0047AB]'
                    : 'bg-[#E5E5E0] border-[#1A1A1A]/20'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-[#FFFFFF] paper-elevation-2 border-t border-l border-white transition-transform ${
                    switchState ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Paper Radio Layer Selection */}
          <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#1A1A1A]/10 paper-elevation-2 space-y-4">
            <h4 className="text-sm font-bold text-[#1A1A1A]">
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
                  className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between text-xs font-bold transition-all ${
                    radioVal === opt.id
                      ? 'bg-[#FFFFFF] border-[#0047AB] text-[#0047AB] paper-elevation-2'
                      : 'bg-[#F4F4F0] border-[#1A1A1A]/10 text-[#1A1A1A]'
                  }`}
                >
                  <span>{opt.label}</span>
                  {radioVal === opt.id && <Check className="w-4 h-4 text-[#0047AB]" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
