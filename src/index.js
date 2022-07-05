const fs = require("fs")
const SHELL = require("shelljs")
const package = require("../package.js")

const themes = package.contributes.themes

// Delete Old themes
if (fs.existsSync("themes")) {
  fs.rmSync("themes", { recursive: true })
}
fs.mkdirSync("themes")

themes.forEach((config) => {
  const theme = require(`./${config.path}`)
  config.path = `themes/${config.path}.json`

  fs.writeFileSync(config.path, JSON.stringify(theme))
})

const packageJSON = fs.readFileSync("package.json", "utf-8")

fs.writeFileSync("package.json", JSON.stringify(package))
SHELL.exec("npx vsce package")

fs.writeFileSync("package.json", packageJSON)
