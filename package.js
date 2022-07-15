module.exports = {
  name: 'valorant-theme',
  version: '4.1.0',
  displayName: 'Valorant Theme',
  description: 'This theme is based on the FPS game called valorant!',
  publisher: 'TasnimulHasan',
  icon: 'icon.jpg',
  repository: {
    type: 'git',
    url: 'https://github.com/Tasnimul-Hasan/valorant-theme',
  },
  keywords: [
    'theme',
    'dark theme',
    'valoranttheme',
    'valorant-theme',
    'valorant theme',
    'valorant',
  ],
  engines: {
    vscode: '^1.59.0',
  },
  categories: ['Themes'],
  contributes: {
    themes: [
      {
        label: 'Valorant Theme - Old',
        uiTheme: 'vs-dark',
        path: 'valorant',
      },
      {
        label: 'Valorant Theme - Oceanic',
        uiTheme: 'vs-dark',
        path: 'oceanic',
      },
      {
        label: 'Valorant Theme - Remastered',
        uiTheme: 'vs-dark',
        path: 'remastered',
      },
    ],
  },
  scripts: {
    build: 'node src',
  },
  devDependencies: {
    vsce: 'latest',
  },
  dependencies: {
    shelljs: 'latest',
  },
};
