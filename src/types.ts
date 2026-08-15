export type PaperColor = 
  | '#FFD600' // Yellow
  | '#0047AB' // Blue
  | '#E63946' // Red
  | '#F77F00' // Orange
  | '#06A77D' // Green
  | '#FFFFFF'; // Pure White

export type ElevationLevel = 1 | 2 | 3 | 4 | 5;

export interface PaperLayer {
  id: string;
  name: string;
  elevation: ElevationLevel;
  color: PaperColor;
  type: 'geometric' | 'organic' | 'silhouettes' | 'info-card' | 'base-white';
  zIndex: number;
  // Positioning in % or px
  x?: number; // %
  y?: number; // %
  width?: string;
  height?: string;
  opacity?: number;
  rotation?: number;
  svgPath?: string;
  customShape?: string;
  isTextCard?: boolean;
  textContent?: {
    tag?: string;
    title: string;
    subtitle?: string;
    metric?: string;
    metricLabel?: string;
    description?: string;
    details?: string[];
  };
}

export interface DioramaComposition {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  dominantColors: PaperColor[];
  whiteSpaceRatio: string;
  layers: PaperLayer[];
}

export interface LightingState {
  lightAngle: number; // in degrees (default ~135deg / top-left)
  lightIntensity: number; // 0.5 - 1.5
  shadowDistance: number; // 1 - 3
  explodedView: boolean;
  explodeDepth: number; // 10 - 150px
  tiltX: number;
  tiltY: number;
  paperTexture: 'subtle' | 'cardstock' | 'pulp' | 'none';
  showGrid: boolean;
  interactiveMouseLight: boolean;
}
