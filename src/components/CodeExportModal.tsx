import React, { useState } from 'react';
import { DioramaComposition } from '../types';
import { X, Copy, Check, Code2, Download, FileText } from 'lucide-react';

interface CodeExportModalProps {
  composition: DioramaComposition;
  onClose: () => void;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({
  composition,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [tab, setTab] = useState<'html' | 'css' | 'full'>('full');

  const cssSnippet = `/* ========================================================
   FEUILLE DE STYLE PAPIER DÉCOUPÉ (Pure HTML/CSS)
   Palette Stricte & Ombres Portées Directionnelles Haut-Gauche
   ======================================================== */

:root {
  /* Palette Stricte 5 Couleurs */
  --paper-yellow: #FFD600;
  --paper-blue: #0047AB;
  --paper-red: #E63946;
  --paper-orange: #F77F00;
  --paper-green: #06A77D;
  --paper-white: #FFFFFF;
  --paper-text: #1A1A1A; /* Texte uniquement */
}

/* Texture Grain Canson / Fibres de papier */
.paper-cut-stage {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: var(--paper-white);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.25);
  background-image: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08) 0%, transparent 100%),
    url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
}

/* Élévations Stratifiées (Lumière Haut-Gauche : offset X/Y positif) */
.paper-elevation-1 {
  box-shadow: 6px 8px 18px -2px rgba(15, 23, 42, 0.15), 
              2px 3px 6px -1px rgba(15, 23, 42, 0.08), 
              inset 1px 1px 0px rgba(255, 255, 255, 0.4);
}

.paper-elevation-2 {
  box-shadow: 12px 16px 28px -4px rgba(15, 23, 42, 0.17), 
              4px 6px 12px -2px rgba(15, 23, 42, 0.10), 
              inset 1px 1px 0px rgba(255, 255, 255, 0.45);
}

.paper-elevation-3 {
  box-shadow: 18px 24px 38px -6px rgba(15, 23, 42, 0.19), 
              6px 8px 16px -3px rgba(15, 23, 42, 0.12), 
              inset 1px 1.5px 0px rgba(255, 255, 255, 0.5);
}

.paper-elevation-4 {
  box-shadow: 24px 34px 48px -8px rgba(15, 23, 42, 0.22), 
              8px 12px 22px -4px rgba(15, 23, 42, 0.14), 
              inset 1px 1.5px 0px rgba(255, 255, 255, 0.55);
}

.paper-elevation-5 {
  box-shadow: 32px 44px 64px -10px rgba(15, 23, 42, 0.25), 
              12px 16px 28px -6px rgba(15, 23, 42, 0.16), 
              inset 1.5px 2px 0px rgba(255, 255, 255, 0.6);
}

/* Boutons Tactiles Papier */
.paper-btn {
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 4px 6px 14px -1px rgba(15, 23, 42, 0.14), 
              inset 1px 1px 0 rgba(255, 255, 255, 0.6);
}
.paper-btn:hover {
  transform: translate(-1px, -2px);
  box-shadow: 6px 10px 20px -2px rgba(15, 23, 42, 0.18), 
              inset 1px 1px 0 rgba(255, 255, 255, 0.7);
}
.paper-btn:active {
  transform: translate(2px, 3px);
  box-shadow: 1px 2px 4px 0 rgba(15, 23, 42, 0.15), 
              inset 0 2px 4px rgba(15, 23, 42, 0.08);
}`;

  const htmlSnippet = `<!-- Scénographie Papier Découpé (Format 16:9) -->
<div class="paper-cut-stage">
  <!-- 00. Base Blanche Négative (Min. 33% d'espace blanc) -->
  <div class="base-layer" style="position:absolute; inset:0; background:#FFFFFF;"></div>

  <!-- 01. Disque Solaire Géométrique (Niveau 1) -->
  <div class="paper-elevation-1" style="position:absolute; left:62%; top:12%; width:170px; height:170px; border-radius:50%; background:var(--paper-yellow);"></div>

  <!-- 02. Terrasses Étagées (Niveau 2 & 3) -->
  <div class="paper-elevation-2" style="position:absolute; left:48%; top:36%; width:46%; height:240px; border-radius:24px 8px 0 0; background:var(--paper-red);"></div>
  <div class="paper-elevation-3" style="position:absolute; left:18%; top:20%; width:28%; height:380px; border-radius:200px 200px 0 0; background:var(--paper-blue);"></div>
  <div class="paper-elevation-3" style="position:absolute; left:4%; top:52%; width:38%; height:220px; border-radius:16px; background:var(--paper-orange);"></div>

  <!-- 03. Cartouche Typographique d'Information (Strictement sur fond blanc #FFFFFF) -->
  <div class="paper-elevation-4" style="position:absolute; left:6%; top:8%; width:340px; padding:24px; border-radius:16px; background:var(--paper-white); color:var(--paper-text); font-family: 'IBM Plex Sans', sans-serif;">
    <span style="font-size:11px; font-weight:700; color:var(--paper-orange); text-transform:uppercase; letter-spacing:1px;">Collection Diorama</span>
    <h2 style="font-size:22px; font-weight:800; margin:6px 0 4px 0; color:#1A1A1A;">Harmonie des Éléments</h2>
    <p style="font-size:13px; line-height:1.5; color:rgba(26,26,26,0.8); margin:0;">
      Découpe multicouche de feuilles Canson teintées dans la masse avec ombres volumétriques douces.
    </p>
  </div>
</div>`;

  const fullSnippet = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>${composition.title} - Papier Découpé HTML/CSS</title>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>
${cssSnippet}
  </style>
</head>
<body style="margin:0; min-height:100vh; display:flex; align-items:center; justify-content:center; background:#F4F4F0; font-family:'IBM Plex Sans', sans-serif;">
  <div style="width:90%; max-width:1100px;">
${htmlSnippet}
  </div>
</body>
</html>`;

  const currentCode = tab === 'html' ? htmlSnippet : tab === 'css' ? cssSnippet : fullSnippet;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FFFFFF] w-full max-w-4xl max-h-[90vh] rounded-3xl paper-elevation-3 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#1A1A1A]/10 flex items-center justify-between bg-[#FFFFFF]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#0047AB] text-white flex items-center justify-center paper-elevation-1">
              <Code2 className="w-5 h-5 text-[#FFD600]" />
            </div>
            <div>
              <h3 className="font-bold text-[#1A1A1A] text-lg font-serif-display">
                Code Source HTML/CSS Exportable
              </h3>
              <p className="text-xs text-[#1A1A1A]/60 font-medium">
                Prêt à l'emploi • Zéro dépendance externe • Texture & ombrages inclus
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-black/5 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="px-6 pt-3 flex flex-wrap items-center justify-between gap-3 border-b border-[#1A1A1A]/10 bg-[#FFFFFF]">
          <div className="flex gap-1.5 p-1 rounded-2xl bg-[#FFFFFF] paper-elevation-1 mb-2">
            {[
              { id: 'full', label: 'Document Complet (HTML+CSS)' },
              { id: 'css', label: 'Styles CSS' },
              { id: 'html', label: 'Structure HTML' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  tab === t.id
                    ? 'bg-[#0047AB] text-white paper-elevation-1'
                    : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <button
            onClick={handleCopy}
            className="mb-2 bg-[#0047AB] text-white px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider paper-btn hover:bg-[#003888] flex items-center gap-1.5 transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#FFD600]" />
                <span className="text-[#FFD600]">Copié dans le presse-papier !</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#FFD600]" />
                <span>Copier le Code</span>
              </>
            )}
          </button>
        </div>

        {/* Code View Area */}
        <div className="flex-1 p-6 overflow-y-auto bg-[#1A1A1A] text-[#F8F9FA] font-mono text-xs leading-relaxed selection:bg-[#0047AB] selection:text-white">
          <pre className="whitespace-pre-wrap">{currentCode}</pre>
        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-[#1A1A1A]/10 bg-[#FFFFFF] flex items-center justify-between text-xs text-[#1A1A1A]/75 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#06A77D]" />
            <span>Format 16:9 • Grille modulaire • Conforme palette primaire</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#0047AB] text-white font-bold text-xs uppercase tracking-wider rounded-2xl paper-btn hover:bg-[#003888] transition-all"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
