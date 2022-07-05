console.clear()
module.exports = {
  name: "valorant-theme",
  displayName: "Valorant Theme",
  description: "This a theme based on the FPS game called valorant!",
  version: "2.1.1",
  publisher: "TasnimulHasan",
  icon: "icon.jpg",
  repository: {
    type: "git",
    url: "https://github.com/TasnimulHasan007/valorant-theme",
  },
  keywords: [
    "theme",
    "dark theme",
    "valoranttheme",
    "valorant-theme",
    "valorant theme",
    "valorant",
    "tasnimul",
    "tasnimul hasan",
    "tasnimulhasan",
    "tasnimul-hasan",
  ],
  engines: {
    vscode: "^1.59.0",
  },
  categories: ["Themes"],
  contributes: {
    themes: [
      {
        label: "Valorant Theme",
        uiTheme: "vs-dark",
        path: "valorant",
      },
      {
        label: "Valorant Theme - Oceanic",
        uiTheme: "vs-dark",
        path: "oceanic",
      },
    ],
  },
}
