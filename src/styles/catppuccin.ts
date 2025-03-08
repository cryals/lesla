export const catppuccinMocha = {
  // Основные цвета
  crust: '#11111b',
  mantle: '#181825',
  base: '#1e1e2e',
  surface0: '#313244',
  surface1: '#45475a',
  surface2: '#585b70',
  overlay0: '#6c7086',
  overlay1: '#7f849c',
  overlay2: '#9399b2',
  subtext0: '#a6adc8',
  subtext1: '#bac2de',
  text: '#cdd6f4',
  
  // Акцентные цвета
  rosewater: '#f5e0dc',
  flamingo: '#f2cdcd',
  pink: '#f5c2e7',
  mauve: '#cba6f7',
  red: '#f38ba8',
  maroon: '#eba0ac',
  peach: '#fab387',
  yellow: '#f9e2af',
  green: '#a6e3a1',
  teal: '#94e2d5',
  sky: '#89dceb',
  sapphire: '#74c7ec',
  blue: '#89b4fa',
  lavender: '#b4befe'
} as const;

export type ColorName = keyof typeof catppuccinMocha;

export const statusColors = {
  completed: catppuccinMocha.green,
  'in-progress': catppuccinMocha.yellow,
  planned: catppuccinMocha.blue
} as const;

export const fileIcons = {
  '.website': '',  // nf-dev-html5
  '.webapp': '',   // nf-dev-react
  '.landing': '',  // nf-dev-code
  '.spa': '',      // nf-dev-javascript
  '.mobile': '',   // nf-dev-android
  '.api': '',      // nf-dev-api
  '.database': '', // nf-dev-database
  '.ai': '',       // nf-dev-codepen
  default: ''      // nf-fa-file
}; 