const fs = require('fs');
const package = require('../package.js');

const themes = package.contributes.themes;

// Delete Old themes
if (fs.existsSync('themes')) {
  fs.rmSync('themes', { recursive: true });
}
fs.mkdirSync('themes');

// Loop over given package themes and create theme.json
themes.forEach(config => {
  const theme = require(`./${config.path}`);
  config.path = `themes/${config.path}.json`;

  fs.writeFileSync(config.path, JSON.stringify(theme));
});
