const color = require('./primaryColors');

exports.shades = {
  primary: '#9142F5',
  foreground: color.lightGray,
  transparent: '#00000000',

  shade50: '#5e6e8d',
  shade100: '#566581',
  shade200: '#4e5b74',
  shade250: '#455168',
  shade300: '#3d485c',
  shade400: '#353e50',
  shade450: '#313a46',
  shade500: '#2d3543',
  shade600: '#252b37',
  shade700: '#1d222b',
  shade800: '#14181f',
  shade900: '#0c0e12',
  shade000: '#040506',
};

exports.editorColors = {
  editorBG: exports.shades.shade700,
  border: color.darkGray + '70',
  shadow: exports.shades.shade500 + 'dd',
  drop: color.darkGray + '25',

  /* link */
  link: '#B37DFC',
  linkAct: '#C08FFB',

  /* activity bar */
  activityBarBG: exports.shades.shade500,
  activityBarFG: exports.shades.lightGray,
  activityBarInactFG: color.darkGray,
  activityBarBorder: exports.shades.transparent,

  /* side bar */
  sidebarBG: exports.shades.shade600,
  sidebarFG: color.lightGray,
  sidebarBorder: exports.shades.transparent,

  /* minimap */
  minimapBG: exports.shades.shade700,

  /* scrollbar */
  scroll: color.darkGray + '25',
  scrollHover: color.darkGray + '35',
  scrollActive: color.darkGray + '45',

  /* selection and highlight */
  selection: color.darkGray + '35',
  inactSelection: color.darkGray + '45',
  highlight: color.darkGray + '25',
  fmHighlight: color.darkGray + '40', // findmatch
  frHighlight: color.darkGray + '40', // findrange
  hvHighlight: color.darkGray + '48', // hover

  /* general */
  error: color.red,
  info: color.sky,
  warning: color.orange,

  /* git */
  added: color.teal,
  modified: color.blue,
  deleted: color.red,

  itemActBG: exports.shades.primary + 'dd',
  itemActFG: color.white,
  itemInactBG: exports.shades.shade450,
  itemInactFG: exports.shades.foreground,
  itemHoverBG: exports.shades.shade500,
  itemHoverFG: exports.shades.foreground,

  modal: exports.shades.shade500,

  inputBG: exports.shades.shade800,
};

exports.merge = {
  currentHeaderBG: '#00897b',
  currentContentBG: '#00695c',
  incomingHeaderBG: '#00acc1',
  incomingContentBG: '#00838f',
  commonHeaderBG: '#546e7a',
  commonContentBG: '#37474f',
};
