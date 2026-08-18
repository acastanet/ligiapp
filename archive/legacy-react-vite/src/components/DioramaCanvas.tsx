import React, { useState, useRef, useMemo } from 'react';
import { DioramaComposition, LightingState, PaperLayer } from '../types';
import {
  BotanicalPalmFrond,
  BirdsInFlight,
  PineForestCluster,
  StagSilhouette,
  PaperSailboat,
  LighthouseSilhouette,
  OceanWaveCut,
  ArchitecturalArch,
  DesertPalmCluster
} from './PaperShapes';
import { Info, Layers, Eye, Compass, Sparkles } from 'lucide-react';

interface DioramaCanvasProps {
  composition: DioramaComposition;
  lighting: LightingState;
  selectedLayerId: string | null;
  onSelectLayer: (layerId: string | null) => void;
}

export const DioramaCanvas: React.FC<DioramaCanvasProps> = ({
  composition,
  lighting,
  selectedLayerId,
  onSelectLayer,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  // Handle dynamic mouse light tracking / subtle parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    setMousePos({ x, y });
  };

  // Compute directional light vector
  // Top-left light: default angle ~135deg (light comes from top-left, casting shadow towards bottom-right)
  const shadowVector = useMemo(() => {
    let angleRad = (lighting.lightAngle * Math.PI) / 180;
    if (lighting.interactiveMouseLight && isHovered) {
      // Light source moves with cursor
      const dx = mousePos.x - 0.5;
      const dy = mousePos.y - 0.5;
      angleRad = Math.atan2(dy, dx) + Math.PI; // shadow opposite to light source
    }
    const dirX = Math.cos(angleRad);
    const dirY = Math.sin(angleRad);
    return { dirX, dirY };
  }, [lighting.lightAngle, lighting.interactiveMouseLight, isHovered, mousePos]);

  // Helper to generate dynamic box-shadow or drop-shadow string for an elevation level
  const getDynamicBoxShadow = (elevation: number) => {
    const scale = lighting.shadowDistance * elevation * 4;
    const blur = Math.round(elevation * 7 * lighting.lightIntensity + 6);
    const offX = Math.round(shadowVector.dirX * scale);
    const offY = Math.round(shadowVector.dirY * scale);
    const alpha1 = Math.min(0.28, 0.08 + elevation * 0.035);
    const alpha2 = Math.min(0.18, 0.04 + elevation * 0.02);

    return `${offX}px ${offY}px ${blur}px rgba(15, 23, 42, ${alpha1}), ${Math.round(offX * 0.3)}px ${Math.round(offY * 0.3)}px ${Math.round(blur * 0.4)}px rgba(15, 23, 42, ${alpha2}), inset 1px 1px 0px rgba(255, 255, 255, 0.45)`;
  };

  const getDynamicDropShadow = (elevation: number) => {
    const scale = lighting.shadowDistance * elevation * 4.5;
    const blur = Math.round(elevation * 6 * lighting.lightIntensity + 6);
    const offX = Math.round(shadowVector.dirX * scale);
    const offY = Math.round(shadowVector.dirY * scale);
    const alpha = Math.min(0.3, 0.1 + elevation * 0.035);
    return `drop-shadow(${offX}px ${offY}px ${blur}px rgba(15, 23, 42, ${alpha}))`;
  };

  return (
    <div className="w-full flex flex-col items-center select-none">
      {/* Diorama 16:9 Frame Container with 3D Perspective */}
      <div
        style={{ perspective: '1600px' }}
        className="w-full max-w-6xl transition-all duration-500 ease-out"
      >
        <div
          ref={containerRef}
          id="diorama-stage-16-9"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#FFFFFF] border-[8px] sm:border-[12px] border-white transition-transform duration-500 shadow-2xl ${
            lighting.showGrid ? 'grid-180' : ''
          }`}
          style={{
            transform: lighting.explodedView
              ? `rotateX(${lighting.tiltX}deg) rotateY(${lighting.tiltY}deg) scale(0.92)`
              : 'rotateX(0deg) rotateY(0deg) scale(1)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Subtle Paper Fiber Texture Overlay */}
          {lighting.paperTexture !== 'none' && (
            <div
              className={`absolute inset-0 pointer-events-none z-40 transition-opacity ${
                lighting.paperTexture === 'cardstock'
                  ? 'paper-fiber-bg opacity-75'
                  : lighting.paperTexture === 'pulp'
                  ? 'paper-fiber-bg opacity-100'
                  : 'paper-fiber-subtle opacity-50'
              }`}
            />
          )}

          {/* Render All Paper Layers */}
          {composition.layers.map((layer) => {
            const isSelected = selectedLayerId === layer.id;
            const zDistance = lighting.explodedView
              ? layer.elevation * lighting.explodeDepth * 0.8
              : 0;

            const elevationShadow = getDynamicBoxShadow(layer.elevation);
            const dropShadowFilter = getDynamicDropShadow(layer.elevation);

            return (
              <div
                key={layer.id}
                id={`paper-layer-${layer.id}`}
                onClick={() => onSelectLayer(isSelected ? null : layer.id)}
                className={`absolute transition-all duration-300 ease-out cursor-pointer ${
                  isSelected ? 'ring-4 ring-[#0047AB] ring-offset-2 z-50' : ''
                }`}
                style={{
                  zIndex: layer.zIndex * 5 + (isSelected ? 50 : 0),
                  left: layer.x !== undefined ? `${layer.x}%` : undefined,
                  top: layer.y !== undefined ? `${layer.y}%` : undefined,
                  width: layer.width || 'auto',
                  height: layer.height || 'auto',
                  transform: `translateZ(${zDistance}px) ${
                    layer.rotation ? `rotate(${layer.rotation}deg)` : ''
                  }`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* 1. Base Negative White Layer */}
                {layer.type === 'base-white' && (
                  <div className="w-full h-full bg-[#FFFFFF] relative overflow-hidden">
                    {/* Architectural Grid accent lines embedded into white base */}
                    <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#0047AB_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
                  </div>
                )}

                {/* 2. Text / Info Plaque (Strictly pure white #FFFFFF with matte black text #1A1A1A) */}
                {layer.isTextCard && layer.textContent && (
                  <div
                    className="p-6 sm:p-7 rounded-xl bg-[#FFFFFF] border-t-2 border-l-2 border-white/90 paper-fiber-bg transition-all duration-200 hover:scale-[1.01]"
                    style={{
                      boxShadow: elevationShadow,
                    }}
                  >
                    {layer.textContent.tag && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F4F4F0] border border-[#1A1A1A]/10 text-[11px] font-semibold tracking-wider text-[#1A1A1A] mb-3">
                        <Sparkles className="w-3 h-3 text-[#F77F00]" />
                        {layer.textContent.tag}
                      </div>
                    )}

                    <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight mb-1 font-sans">
                      {layer.textContent.title}
                    </h2>

                    {layer.textContent.subtitle && (
                      <p className="text-xs sm:text-sm font-medium text-[#1A1A1A]/70 mb-3">
                        {layer.textContent.subtitle}
                      </p>
                    )}

                    {layer.textContent.description && (
                      <p className="text-xs sm:text-[13px] leading-relaxed text-[#1A1A1A]/85 mb-4 max-w-xs">
                        {layer.textContent.description}
                      </p>
                    )}

                    {layer.textContent.metric && (
                      <div className="pt-3 border-t border-[#1A1A1A]/10 flex items-baseline justify-between">
                        <span className="text-base font-extrabold text-[#1A1A1A]">
                          {layer.textContent.metric}
                        </span>
                        <span className="text-[11px] font-medium text-[#1A1A1A]/60">
                          {layer.textContent.metricLabel}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* 3. Geometric Shapes (Circles, Stepped blocks, Arches) */}
                {layer.type === 'geometric' && (
                  <>
                    {/* Circle (Sun / Moon) */}
                    {layer.id.includes('sun') || layer.id.includes('moon') ? (
                      <div
                        className="w-full h-full rounded-full border-t border-l border-white/60 paper-fiber-bg"
                        style={{
                          backgroundColor: layer.color,
                          boxShadow: elevationShadow,
                        }}
                      />
                    ) : layer.id.includes('arch') ? (
                      /* Architectural Arch */
                      <ArchitecturalArch
                        color={layer.color}
                        elevation={layer.elevation}
                        dynamicShadow={elevationShadow}
                        className="w-full h-full"
                      />
                    ) : layer.id.includes('horizon-step') || layer.id.includes('red-steps') ? (
                      /* Stepped Geometry Blocks */
                      <div
                        className="w-full h-full rounded-tl-3xl rounded-tr-lg border-t-2 border-l-2 border-white/40 paper-fiber-bg relative"
                        style={{
                          backgroundColor: layer.color,
                          boxShadow: elevationShadow,
                        }}
                      >
                        {/* Cutout notch for geometric architectural stepped illusion */}
                        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[#FFFFFF] rounded-bl-2xl paper-elevation-1 border-t border-l border-white/60" />
                      </div>
                    ) : layer.id.includes('mountain') ? (
                      /* Angular Mountain Ridge Polygon */
                      <svg
                        viewBox="0 0 500 200"
                        preserveAspectRatio="none"
                        className="w-full h-full"
                        style={{ filter: dropShadowFilter }}
                      >
                        <polygon
                          points="0,200 120,60 210,130 340,30 450,110 500,70 500,200"
                          fill={layer.color}
                        />
                      </svg>
                    ) : layer.id.includes('lighthouse') ? (
                      /* Lighthouse Silhouette */
                      <LighthouseSilhouette
                        color={layer.color}
                        elevation={layer.elevation}
                        dynamicShadow={dropShadowFilter}
                      />
                    ) : (
                      /* Standard Crisp Geometric Block */
                      <div
                        className="w-full h-full rounded-2xl border-t border-l border-white/50 paper-fiber-bg"
                        style={{
                          backgroundColor: layer.color,
                          boxShadow: elevationShadow,
                        }}
                      />
                    )}
                  </>
                )}

                {/* 4. Organic Cutouts (Botanical fronds, Pines, Waves, Cliffs) */}
                {layer.type === 'organic' && (
                  <>
                    {layer.id.includes('botanical') && (
                      <BotanicalPalmFrond
                        color={layer.color}
                        elevation={layer.elevation}
                        dynamicShadow={dropShadowFilter}
                      />
                    )}

                    {layer.id.includes('pines') && (
                      <PineForestCluster
                        color={layer.color}
                        elevation={layer.elevation}
                        dynamicShadow={dropShadowFilter}
                      />
                    )}

                    {layer.id.includes('wave-deep') && (
                      <OceanWaveCut
                        color={layer.color}
                        elevation={layer.elevation}
                        variant="deep"
                        dynamicShadow={dropShadowFilter}
                      />
                    )}

                    {layer.id.includes('wave-crest') && (
                      <OceanWaveCut
                        color={layer.color}
                        elevation={layer.elevation}
                        variant="crest"
                        dynamicShadow={dropShadowFilter}
                      />
                    )}

                    {layer.id.includes('cliff') && (
                      <svg
                        viewBox="0 0 300 380"
                        fill="none"
                        className="w-full h-full"
                        style={{ filter: dropShadowFilter }}
                      >
                        <path
                          d="M100 0 C130 60 90 140 120 220 C150 290 80 340 50 380 L300 380 L300 0 Z"
                          fill={layer.color}
                        />
                      </svg>
                    )}

                    {layer.id.includes('palms') && (
                      <DesertPalmCluster
                        color={layer.color}
                        elevation={layer.elevation}
                        dynamicShadow={dropShadowFilter}
                      />
                    )}
                  </>
                )}

                {/* 5. Minimalist Silhouettes (Birds, Deer / Stag, Sailboat) */}
                {layer.type === 'silhouettes' && (
                  <>
                    {layer.id.includes('birds') && (
                      <BirdsInFlight
                        color={layer.color}
                        elevation={layer.elevation}
                        dynamicShadow={dropShadowFilter}
                      />
                    )}

                    {layer.id.includes('deer') && (
                      <StagSilhouette
                        color={layer.color}
                        elevation={layer.elevation}
                        dynamicShadow={dropShadowFilter}
                      />
                    )}

                    {layer.id.includes('boat') && (
                      <PaperSailboat
                        color={layer.color}
                        elevation={layer.elevation}
                        dynamicShadow={dropShadowFilter}
                      />
                    )}
                  </>
                )}
              </div>
            );
          })}

          {/* 3D Exploded Layer Wire Guides in Exploded Mode */}
          {lighting.explodedView && (
            <div className="absolute bottom-4 left-4 z-50 pointer-events-none px-3 py-1.5 rounded-lg bg-[#FFFFFF]/90 backdrop-blur-sm border border-[#1A1A1A]/10 text-xs font-semibold text-[#1A1A1A] flex items-center gap-2 paper-elevation-1">
              <Layers className="w-3.5 h-3.5 text-[#0047AB]" />
              Vue Éclatée 3D : {composition.layers.length} calques découpés
            </div>
          )}
        </div>
      </div>

      {/* Layer Quick Inspector Bar */}
      <div className="w-full max-w-6xl mt-4 px-2 flex flex-wrap items-center justify-between gap-3 text-xs text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#1A1A1A]">Calques actifs :</span>
          <div className="flex flex-wrap gap-1.5">
            {composition.layers.map((layer) => (
              <button
                key={layer.id}
                onClick={() => onSelectLayer(selectedLayerId === layer.id ? null : layer.id)}
                className={`px-2.5 py-1 rounded-md transition-all font-medium flex items-center gap-1.5 ${
                  selectedLayerId === layer.id
                    ? 'bg-[#0047AB] text-white shadow-sm'
                    : 'bg-white border border-[#1A1A1A]/10 hover:border-[#0047AB]/40 text-[#1A1A1A]'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full border border-black/10 inline-block"
                  style={{ backgroundColor: layer.color }}
                />
                <span className="truncate max-w-[120px]">{layer.name.replace(/^\d+\.\s*/, '')}</span>
                <span className="text-[10px] opacity-75">Niv.{layer.elevation}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-[#1A1A1A]/10">
            <Compass className="w-3.5 h-3.5 text-[#06A77D]" />
            <span>Éclairage Haut-Gauche (135°)</span>
          </div>
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-[#1A1A1A]/10 font-mono">
            <span>{composition.whiteSpaceRatio}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
