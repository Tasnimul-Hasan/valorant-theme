const color = require('./primaryColors');

exports.shades = {
  primary: color.red,
  foreground: color.lightGray,
  transparent: '#00000000',

  shade50: '#727272',
  shade100: '#474747',
  shade200: '#404040',
  shade250: '#3f3f3f',
  shade300: '#323232',
  shade400: '#2a2a2a',
  shade500: '#292929',
  shade600: '#212121',
  shade700: '#1a1a1a',
  shade800: '#151515',
  shade900: '#111111',
  shade000: '#010101',
};

exports.editorColors = {
  /* activity bar */
  activityBarBG: exports.shades.shade600,
  activityBarFG: exports.shades.primary,
  activityBarInactFG: color.darkGray,
  activityBarBorder: exports.shades.transparent,

  /* side bar */
  sidebarBG: exports.shades.shade800,
  sidebarFG: color.darkGray,
  sidebarBorder: exports.shades.transparent,

  /* minimap */
  minimapBG: exports.shades.shade700,

  /* scrollbar */
  scroll: exports.shades.primary + '25',
  scrollHover: exports.shades.primary + '35',
  scrollActive: exports.shades.primary + '45',

  /* selection and highlight */
  selection: exports.shades.primary + '25',
  inactSelection: exports.shades.shade50 + '25',
  highlight: exports.shades.primary + '35',
  fmHighlight: exports.shades.primary + '40', // findmatch
  frHighlight: exports.shades.primary + '40', // findrange
  hvHighlight: exports.shades.primary + '48', // hover

  editorBG: exports.shades.shade700,

  border: color.darkGray + '70',

  /* general */
  error: color.red,
  info: color.sky,
  warning: color.orange,

  /* git */
  added: color.teal,
  modified: color.blue,
  deleted: color.red,

  /* link */
  linkAct: color.cyan,

  itemActBG: exports.shades.primary + '66',
  itemActFG: exports.shades.foreground,
  itemInactBG: exports.shades.shade500,
  itemInactFG: exports.shades.foreground,
  itemHoverBG: exports.shades.transparent,
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
