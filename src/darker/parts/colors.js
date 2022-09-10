const color = require('../color.js')

shades = {
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
}

editorColors = {
  /* activity bar */
  activityBarBG: shades.shade600,
  activityBarFG: shades.foreground,
  activityBarInactFG: color.darkGray,
  activityBarBorder: shades.transparent,

  /* side bar */
  sidebarBG: shades.shade800,
  sidebarFG: color.darkGray,
  sidebarBorder: shades.transparent,

  /* minimap */
  minimapBG: shades.shade700,

  /* scrollbar */
  scroll: shades.primary + '25',
  scrollHover: shades.primary + '35',
  scrollActive: shades.primary + '45',

  /* selection and highlight */
  selection: shades.primary + '25',
  inactSelection: shades.shade50 + '25',
  highlight: shades.primary + '35',
  fmHighlight: shades.primary + '40', // findmatch
  frHighlight: shades.primary + '40', // findrange
  hvHighlight: shades.primary + '48', // hover

  editorBG: shades.shade700,

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

  itemActBG: shades.primary + '66',
  itemActFG: shades.foreground,
  itemInactBG: shades.shade500,
  itemInactFG: shades.foreground,
  itemHoverBG: shades.transparent,
  itemHoverFG: shades.foreground,

  modal: shades.shade500,

  inputBG: shades.shade800,
}

merge = {
  currentHeaderBG: '#00897b',
  currentContentBG: '#00695c',
  incomingHeaderBG: '#00acc1',
  incomingContentBG: '#00838f',
  commonHeaderBG: '#546e7a',
  commonContentBG: '#37474f',
}

module.exports = {
  /* ________ window border ________ */
  // 'window.activeBorder': '',
  // 'window.inActiveBorder': '',

  /* ________ text colors ________ */
  // 'textBlockQuote.background':'',
  'textBlockQuote.border': color.darkGray,
  // 'textCodeBlock.background': '';
  'textLink.activeForeground': shades.primary,
  'textLink.foreground': shades.primary + 'dc',
  'textPreformat.foreground': shades.foreground,
  // 'textSeparator.foreground': '',

  /* ________ action colors ________ */
  'toolbar.hoverBackground': shades.shade200 + 'aa',
  // 'toolbar.hoverOutline': '',
  'toolbar.activeBackground': shades.primary,

  /* ________ button control ________ */
  'button.background': shades.primary + 'dc',
  'button.foreground': color.white,
  // 'button.border': '',
  // 'button.separator': '',
  'button.hoverBackground': shades.primary,
  'button.secondaryForeground': shades.foreground,
  'button.secondaryBackground': shades.shade100,
  'button.secondaryHoverBackground': shades.shade50,
  // 'checkbox.background': '',
  'checkbox.foreground': color.red,
  'checkbox.border': color.red,

  /* ________ dropdown control ________ */
  'dropdown.background': editorColors.inputBG,
  // 'dropdown.listBackground': shades.primary,
  'dropdown.border': editorColors.border,
  'dropdown.foreground': shades.foreground,

  /* ________ input control ________ */
  'input.background': editorColors.inputBG,
  'input.border': editorColors.border,
  'input.foreground': shades.foreground,
  'input.placeholderForeground': color.darkGray,
  /* --- input option --- */
  'inputOption.activeBackground': color.darkGray,
  // 'inputOption.activeBorder': '',
  'inputOption.activeForeground': shades.foreground,
  // 'inputOption.hoverBackground': '',
  /* --- input validation --- */
  'inputValidation.errorBackground':
    editorColors.error + '45',
  'inputValidation.errorForeground': shades.foreground,
  'inputValidation.errorBorder': editorColors.error,
  'inputValidation.infoBackground':
    editorColors.info + '45',
  'inputValidation.infoForeground': shades.foreground,
  'inputValidation.infoBorder': editorColors.info,
  'inputValidation.warningBackground':
    editorColors.warning + '45',
  'inputValidation.warningForeground': shades.foreground,
  'inputValidation.warningBorder': editorColors.warning,

  /* ________ scrollbar control ________ */
  'scrollbar.shadow': shades.shade500,
  'scrollbarSlider.background': shades.primary + '33',
  'scrollbarSlider.hoverBackground': shades.primary + '66',
  'scrollbarSlider.activeBackground': shades.primary + '99',

  /* ________ badge control ________ */
  'badge.background': shades.primary,
  'badge.foreground': color.white,

  /* ________ progress bar ________ */
  'progressBar.background': shades.primary,

  /* ________ lists and trees ________ */
  'list.activeSelectionBackground': editorColors.itemActBG,
  'list.activeSelectionForeground': editorColors.itemActFG,
  // 'list.activeSelectionIconForeground': '',
  'list.inactiveSelectionBackground':
    editorColors.itemInactBG,
  'list.inactiveSelectionForeground':
    editorColors.itemInactFG,
  // 'list.inactiveSelectionIconForeground': '',
  'list.hoverBackground': editorColors.itemHoverBG,
  'list.hoverForeground': editorColors.itemHoverFG,
  'list.dropBackground': shades.shade600,
  'list.focusBackground': shades.shade800,
  'list.focusForeground': shades.foreground,
  'list.focusHighlightForeground': shades.primary,
  'list.focusOutline': shades.transparent,
  // 'list.focusAndSelectionOutline': '',
  'list.highlightForeground': shades.foreground,
  // 'list.inactiveFocusBackground': '',
  // 'list.inactiveFocusOutline': '',
  // 'list.invalidItemForeground': '',
  // 'list.errorForeground': '',
  // 'list.warningForeground': '',
  'listFilterWidget.background': editorColors.modal,
  // 'listFilterWidget.outline': '',
  'listFilterWidget.noMatchesOutline': shades.primary,
  // 'list.filterMatchBackground': '',
  // 'list.filterMatchBorder': '',
  // 'list.deemphasizedForegrou': '',
  'tree.indentGuidesStroke': shades.foreground,
  // 'tree.tableColumnsBorder': '',
  // 'tree.tableOddRowsBackground': '',

  /* ________ activity bar ________ */
  'activityBar.background': editorColors.activityBarBG,
  'activityBar.dropBorder': shades.primary,
  'activityBar.foreground': editorColors.activityBarFG,
  'activityBar.inactiveForeground':
    editorColors.activityBarInactFG,
  'activityBar.border': editorColors.activityBarBorder,
  'activityBarBadge.background': shades.primary,
  'activityBarBadge.foreground': shades.foreground,
  // 'activityBar.activeBorder': '',
  // 'activityBar.activeBackground': ,
  // 'activityBar.activeFocusBorder: ,

  /* ________ side bar ________ */
  'sideBar.background': editorColors.sidebarBG,
  'sideBar.foreground': editorColors.sidebarFG,
  'sideBar.border': editorColors.sidebarBorder,
  // 'sideBar.dropBackground': '',
  'sideBarTitle.foreground': shades.foreground,
  'sideBarSectionHeader.background':
    editorColors.activityBarBG,
  'sideBarSectionHeader.foreground': shades.foreground,
  'sideBarSectionHeader.border': editorColors.border,

  /* ________ mini map ________ */
  'minimap.findMatchHighlight': shades.primary,
  'minimap.selectionHighlight': shades.primary,
  'minimap.errorHighlight': editorColors.error + 'dd',
  'minimap.warningHighlight': editorColors.warning + 'dd',
  'minimap.background': editorColors.minimapBG,
  'minimap.selectionOccurrenceHighlight': shades.green,
  'minimap.foregroundOpacity': shades.shade000 + 'c0',
  'minimapSlider.background': editorColors.scroll,
  'minimapSlider.hoverBackground': editorColors.scrollHover,
  'minimapSlider.activeBackground':
    editorColors.scrollActive,
  'minimapGutter.addedBackground': editorColors.added,
  'minimapGutter.deletedBackground': editorColors.deleted,
  'minimapGutter.modifiedBackground': editorColors.modified,

  /* ________ editor groups & tabs ________ */
  'editorGroup.border': shades.primary + '66',
  'editorGroup.dropBackground': shades.shade100 + '35',
  // 'editorGroupHeader.noTabsBackground': '',
  'editorGroupHeader.tabsBackground': shades.shade900,
  'editorGroupHeader.tabsBorder': shades.transparent,
  'editorGroupHeader.border': shades.transparent,
  // 'editorGroup.emptyBackground': '',
  // 'editorGroup.focusedEmptyBackground': '',
  // 'editorGroup.dropIntoPromptForeground': '',
  // 'editorGroup.dropIntoPromptBackground': '',
  // 'editorGroup.dropIntoPromptBorder': '',
  'tab.activeBackground': editorColors.editorBG,
  // 'tab.unfocusedActiveBackground': '',
  'tab.activeForeground': shades.foreground,
  // 'tab.unfocusedActiveForeground': '',
  'tab.inactiveBackground': shades.shade800,
  // 'tab.unfocusedInactiveBackground': '',
  'tab.inactiveForeground': color.darkGray,
  // 'tab.unfocusedInactiveForeground': '',
  // 'tab.border': '',
  // 'tab.activeBorder': '',
  // 'tab.unfocusedActiveBorder': '',
  'tab.activeBorderTop': shades.primary, // same 3 variants are available
  'tab.lastPinnedBorder': shades.transparent,
  // 'tab.hoverBackground': '',
  // 'tab.unfocusedHoverBackground': '',
  'tab.hoverForeground': shades.foreground,
  // 'tab.unfocusedHoverForeground': '',
  // 'tab.hoverBorder': '',
  // 'tab.unfocusedHoverBorder': '',
  // 'tab.activeModifiedBorder': '',
  // 'tab.inactiveModifiedBorder': '',
  // 'tab.unfocusedActiveModifiedBorder': '',
  // 'tab.unfocusedInactiveModifiedBorder': '',
  // 'editorpane.background': '',
  // 'sideBySideEditor.horizontalBorder' : '',
  // 'sideBySideEditor.verticalBorder' : '',

  /* ________ editor colors ________ */
  'editor.background': editorColors.editorBG,
  'editor.foreground': shades.foreground,
  'editorLineNumber.foreground': color.darkGray,
  'editorLineNumber.activeForeground': shades.primary,
  'editorCursor.background': shades.foreground,
  'editorCursor.foreground': shades.primary,
  'editor.selectionBackground': editorColors.selection,
  // 'editor.selectionForeground': '',
  'editor.inactiveSelectionBackground':
    editorColors.inactSelection,
  'editor.selectionHighlightBackground':
    editorColors.highlight,
  'editor.selectionHighlightBorder': shades.primary,
  'editor.wordHighlightBackground': editorColors.highlight,
  'editor.wordHighlightStrongBorder': shades.primary,
  'editor.wordHighlightStrongBackground':
    editorColors.highlight,
  // 'editor.wordHighlightStrongBorder': '',
  'editor.findMatchBackground': editorColors.highlight,
  'editor.findMatchHighlightBackground':
    editorColors.fmHighlight,
  'editor.findRangeHighlightBackground':
    editorColors.frHighlight,
  'editor.findMatchBorder': shades.primary,
  // 'editor.findMatchHighlightBorder': '',
  // 'editor.findRangeHighlightBorder': '',
  // 'searchEditor.findMatchBackground' : '',
  // 'searchEditor.findMatchBorder' : '',
  // 'searchEditor.textInputBorder' : '',
  'editor.hoverHighlightBackground':
    editorColors.hvHighlight,
  'editor.lineHighlightBackground': shades.shade400,
  // 'editor.lineHighlightBorder': '',
  // 'editor.unicodeHighlightBackground': '',
  // 'editor.unicodeHighlightBorder': '',
  'editorLink.activeForeground': editorColors.linkAct,
  'editor.rangeHighlightBackground': shades.shade800,
  // 'editor.rangeHighlightBorder': '',
  // 'editor.symbolHighlightBackground': '',
  // 'editor.symbolHighlightBorder': '',
  'editorWhitespace.foreground': shades.foreground + '66',
  'editorIndentGuide.background': color.darkGray,
  'editorIndentGuide.activeBackground': shades.foreground,
  // 'editorInlayHint.background' : '',
  // 'editorInlayHint.foreground' : '',
  // 'editorInlayHint.typeForeground' : '',
  // 'editorInlayHint.typeBackground' : '',
  // 'editorInlayHint.parameterForeground' : '',
  // 'editorInlayHint.parameterBackground' : '',
  'editorRuler.foreground': color.darkGray,
  // 'editor.linkedEditingBackground': '',
  'editorCodeLens.foreground': color.darkGray,
  // 'editorLightBulb.foreground' : '',
  // 'editorLightBulbAutoFix.foreground' : '',
  'editorBracketMatch.background': shades.primary + '66',
  'editorBracketMatch.border': shades.primary,
  'editorBracketHighlight.foreground1': color.sky,
  'editorBracketHighlight.foreground2': color.pink,
  'editorBracketHighlight.foreground3': color.red,
  'editorBracketHighlight.foreground4': color.yellow,
  'editorBracketHighlight.foreground5': color.teal,
  'editorBracketHighlight.foreground6': color.orange,
  'editorBracketHighlight.unexpectedBracket.foreground':
    shades.foreground,
  'editorBracketPairGuide.activeBackground1': color.sky,
  'editorBracketPairGuide.activeBackground2': color.pink,
  'editorBracketPairGuide.activeBackground3': color.red,
  'editorBracketPairGuide.activeBackground4': color.yellow,
  'editorBracketPairGuide.activeBackground5': color.teal,
  'editorBracketPairGuide.activeBackground6': color.orange,
  // 'editorBracketPairGuide.background1': '',
  // 'editorBracketPairGuide.background2': '',
  // 'editorBracketPairGuide.background3': '',
  // 'editorBracketPairGuide.background4': '',
  // 'editorBracketPairGuide.background5': '',
  // 'editorBracketPairGuide.background6': '',
  'editor.foldBackground': shades.primary + '1e',
  // 'editorOverviewRuler.background': '',
  'editorOverviewRuler.border': color.darkGray + '66',
  // 'editorOverviewRuler.findMatchForeground': '',
  // 'editorOverviewRuler.rangeHighlightForeground': '',
  // 'editorOverviewRuler.selectionHighlightForeground': '',
  // 'editorOverviewRuler.wordHighlightForeground': '',
  // 'editorOverviewRuler.wordHighlightStrongForeground': '',
  // 'editorOverviewRuler.modifiedForeground': '',
  // 'editorOverviewRuler.addedForeground': '',
  // 'editorOverviewRuler.deletedForeground': '',
  // 'editorOverviewRuler.errorForeground': '',
  // 'editorOverviewRuler.warningForeground': '',
  // 'editorOverviewRuler.infoForeground': '',
  // 'editorOverviewRuler.bracketMatchForeground': '',

  /* --- errors & warnings --- */
  'editorError.foreground': editorColors.error,
  // 'editorError.border': '',
  // 'editorError.background': '',
  'editorWarning.foreground': editorColors.warning,
  // 'editorWarning.border': '',
  // 'editorWarning.background': '',
  'editorInfo.foreground': editorColors.info,
  // 'editorInfo.border': '',
  // 'editorInfo.backgground': '',
  // 'editorHint.foreground' : '',
  // 'editorHint.border' : '',
  // 'problemsErrorIcon.foreground' : '',
  // 'problemsWarningIcon.foreground' : '',
  // 'problemsInfoIcon.foreground' : '',

  /* --- unused source code --- */
  //  'editorUnnecessaryCode.border' : '',
  // 'editorUnnecessaryCode.opacity' : '',

  /* --- the gutter --- */
  'editorGutter.background': editorColors.editorBG,
  'editorGutter.modifiedBackground': editorColors.modified,
  'editorGutter.addedBackground': editorColors.added,
  'editorGutter.deletedBackground': editorColors.deleted,
  // 'editorGutter.commentRangeForeground': '',
  'editorGutter.foldingControlForeground': color.darkGray,

  /* --- comments widget --- */
  // 'editorCommentsWidget.resolvedBorder' : '',
  // 'editorCommentsWidget.unresolvedBorder' : '',
  // 'editorCommentsWidget.rangeBackground' : '',
  // 'editorCommentsWidget.rangeBorder' : '',
  // 'editorCommentsWidget.rangeActiveBackground' : '',
  // 'editorCommentsWidget.rangeActiveBorder' : '',

  /* ________ diff editor colors ________ */

  /*
  ___________________________________
  ___________________________________
  this far
  ___________________________________
  ___________________________________
   */

  'editorGhostText.foreground': shades.shade250,
  foreground: color.lightGray,
  focusBorder: color.darkGray,
  // tab

  'selection.background': editorColors.selection,

  'diffEditor.insertedTextBackground': color.green + '33',
  'diffEditor.removedTextBackground': color.red + '33',
  'diffEditor.border': color.darkGray,
  'editorMarkerNavigation.background': editorColors.actBg,
  'editorMarkerNavigationError.background': color.red,
  'editorMarkerNavigationWarning.background': color.yellow,
  'editorMarkerNavigationInfo.background': color.blue,
  'merge.currentHeaderBackground': merge.currentHeaderBG,
  'merge.currentContentBackground': merge.currentContentBG,
  'merge.incomingHeaderBackground': merge.incomingHeaderBG,
  'merge.incomingContentBackground':
    merge.incomingContentBG,
  'merge.commonHeaderBackground': merge.commonHeaderBG,
  'merge.commonContentBackground': merge.commonContentBG,
  'editorSuggestWidget.background': shades.shade400,
  'editorSuggestWidget.border': color.darkGray + '70',
  'editorSuggestWidget.foreground': color.darkGray,
  'editorSuggestWidget.highlightForeground': color.red,
  'editorSuggestWidget.selectedBackground': shades.shade800,
  'editorHoverWidget.foreground': color.darkGray,
  'editorHoverWidget.background': shades.shade400,
  'editorHoverWidget.border': color.darkGray + '70',
  'peekView.border': color.darkGray,
  'peekViewEditor.background': shades.shade7000,
  'peekViewEditorGutter.background': shades.shade7000,
  'peekViewEditor.matchHighlightBackground':
    color.red + '66',
  'peekViewEditor.matchHighlightBorder': color.red,
  'peekViewResult.background': shades.shade400,
  'peekViewResult.fileForeground': color.darkGray,
  'peekViewResult.lineForeground': color.darkGray,
  'peekViewResult.matchHighlightBackground':
    color.red + '66',
  'peekViewResult.selectionBackground': shades.shade800,
  'peekViewResult.selectionForeground': color.lightGray,
  'peekViewTitle.background': shades.shade400,
  'peekViewTitleDescription.foreground': color.darkGray,
  'peekViewTitleLabel.foreground': color.lightGray,
  'widget.shadow': shades.shade900 + '66',
  'editorWidget.foreground': color.lightGray,
  'editorWidget.background': shades.shade400,
  'pickerGroup.border': shades.shade100,
  'pickerGroup.foreground': color.red,
  'editorWidget.resizeBorder': color.red,
  'debugToolBar.background': shades.shade400,
  'debugToolBar.border': color.darkGray + '70',
  'notifications.foreground': color.lightGray,
  'notifications.background': shades.shade400,
  'notifications.border': color.darkGray + '70',
  'notificationLink.foreground': color.red,
  'notificationsErrorIcon.foreground': color.red,
  'notificationsWarningIcon.foreground': color.yellow,
  'notificationsInfoIcon.foreground': color.blue,
  'notificationCenterHeader.foreground': color.lightGray,
  'notificationCenterHeader.background': editorColors.actBg,
  'notificationCenter.border': color.darkGray + '70',

  'statusBar.foreground': color.lightGray,
  'statusBar.background': editorColors.editorBG,
  'statusBar.border': color.darkGray + '70',
  'statusBarItem.hoverBackground': color.lightGray + '33',
  'statusBar.debuggingBackground': color.red,
  'statusBar.debuggingForeground': color.white,
  'statusBar.noFolderBackground': color.blue,
  'statusBar.noFolderForeground': color.white,
  'statusBarItem.remoteBackground': editorColors.actBg,
  'statusBarItem.remoteForeground': color.lightGray,
  'titleBar.activeBackground': editorColors.actBg,
  'titleBar.activeForeground': color.lightGray,
  'titleBar.border': color.darkGray + '70',
  'titleBar.inactiveBackground': editorColors.actBg,
  'titleBar.inactiveForeground': color.darkGray,
  'menubar.selectionForeground': color.lightGray,
  'menubar.selectionBackground': shades.shade400,
  'menu.foreground': color.darkGray,
  'menu.background': shades.shade400,
  'menu.selectionForeground': color.lightGray,
  'menu.selectionBackground': shades.shade800,
  'menu.selectionBorder': shades.transparent,
  'menu.separatorBackground': color.darkGray,
  'menu.border': color.darkGray + '30',
  'quickInput.foreground': color.darkGray,
  'quickInputList.focusBackground': shades.shade800,
  'quickInputList.focusForeground': color.lightGray,

  'panel.background': editorColors.editorBG,
  'panel.border': color.darkGray,
  'panelTitle.activeBorder': color.red,
  'panelTitle.activeForeground': color.lightGray,
  'panelTitle.inactiveForeground': color.darkGray,
  'terminal.selectionBackground': color.red + '33',
  'terminalCursor.foreground': color.lightGray,
  'terminalCursor.background': color.red,

  'terminal.border': color.darkGray,
  'terminal.foreground': color.lightGray,
  'terminal.ansiWhite': color.lightGray,
  'terminal.ansiBrightWhite': color.white,
  'terminal.ansiBlack': color.darkGray,
  'terminal.ansiBrightBlack': color.gray,
  'terminal.ansiBlue': color.blue,
  'terminal.ansiBrightBlue': color.blue,
  'terminal.ansiCyan': color.cyan,
  'terminal.ansiBrightCyan': color.sky,
  'terminal.ansiGreen': color.teal,
  'terminal.ansiBrightGreen': color.teal,
  'terminal.ansiMagenta': color.purple,
  'terminal.ansiBrightMagenta': color.pink,
  'terminal.ansiRed': color.red,
  'terminal.ansiBrightRed': color.brightRed,
  'terminal.ansiYellow': color.yellow,
  'terminal.ansiBrightYellow': color.orange,

  'breadcrumb.background': editorColors.editorBG,
  'breadcrumb.foreground': color.darkGray,
  'breadcrumb.focusForeground': color.lightGray,

  'gitDecoration.addedResourceForeground': color.teal,
  'gitDecoration.conflictingResourceForeground': color.sky,
  'gitDecoration.deletedResourceForeground': color.red,
  'gitDecoration.ignoredResourceForeground': color.darkGray,
  'gitDecoration.modifiedResourceForeground': color.yellow,
  'gitDecoration.stageDeletedResourceForeground':
    color.orange,
  'gitDecoration.stageModifiedResourceForeground':
    color.orange,
  'gitDecoration.submoduleResourceForeground': color.blue,
  'gitDecoration.untrackedResourceForeground': color.green,
  'settings.headerForeground': color.lightGray,
  'settings.modifiedItemIndicator': color.red,
  'settings.dropdownBackground': shades.shade800,
  'settings.dropdownForeground': color.lightGray,
  'settings.dropdownBorder': color.darkGray,
  'settings.dropdownListBorder': shades.transparent,
  'settings.checkboxBackground': shades.shade800,
  'settings.rowHoverBackground': shades.shade400,
  'settings.focusedRowBackground': shades.shade800,
  'settings.focusedRowBorder': shades.transparent,

  'walkThrough.embeddedEditorBackground':
    editorColors.actBg,
  'welcomePage.buttonHoverBackground': color.cyan,

  'icon.foreground': color.lightGray,

  'statusBarItem.activeBackground': color.red,
  'breadcrumb.activeSelectionForeground': color.lightGray,
  'debugExceptionWidget.border': color.darkGray + '70',
  'debugExceptionWidget.background': shades.shade400,
}
