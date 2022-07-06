const color = require("../color.js")

module.exports = [
  {
    name: "unison punctuation",
    scope:
      "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "haskell variable generic-type",
    scope: "variable.other.generic-type.haskell",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "haskell storage type",
    scope: "storage.type.haskell",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "support.variable.magic.python",
    scope: "support.variable.magic.python",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "punctuation.separator.parameters.python",
    scope:
      "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "variable.parameter.function.language.special.self.python",
    scope: "variable.parameter.function.language.special.self.python",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "variable.parameter.function.language.special.cls.python",
    scope: "variable.parameter.function.language.special.cls.python",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "storage.modifier.lifetime.rust",
    scope: "storage.modifier.lifetime.rust",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "support.function.std.rust",
    scope: "support.function.std.rust",
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: "entity.name.lifetime.rust",
    scope: "entity.name.lifetime.rust",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "variable.language.rust",
    scope: "variable.language.rust",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "support.constant.edge",
    scope: "support.constant.edge",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "regexp constant character-class",
    scope: "constant.other.character-class.regexp",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "regexp operator.quantifier",
    scope: "keyword.operator.quantifier.regexp",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "punctuation.definition",
    scope: "punctuation.definition.string.begin,punctuation.definition.string.end",
    settings: {
      foreground: color.greenCyan,
    },
  },
  {
    name: "Text",
    scope: "variable.parameter.function",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "Comment Markup Link",
    scope: "comment markup.link",
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: "markup diff",
    scope: "markup.changed.diff",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "diff",
    scope:
      "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: "inserted.diff",
    scope: "markup.inserted.diff",
    settings: {
      foreground: color.greenCyan,
    },
  },
  {
    name: "deleted.diff",
    scope: "markup.deleted.diff",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "c++ function",
    scope: "meta.function.c,meta.function.cpp",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "c++ block",
    scope:
      "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "js/ts punctuation separator key-value",
    scope: "punctuation.separator.key-value",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "js/ts import keyword",
    scope: "keyword.operator.expression.import",
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: "math js/ts",
    scope: "support.constant.math",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "math property js/ts",
    scope: "support.constant.property.math",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "js/ts variable.other.constant",
    scope: "variable.other.constant",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "java type",
    scope: ["storage.type.annotation.java", "storage.type.object.array.java"],
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "java source",
    scope: "source.java",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "java modifier.import",
    scope:
      "punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "java modifier.import",
    scope: "meta.method.java",
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: "java modifier.import",
    scope: "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "java instanceof",
    scope: "keyword.operator.instanceof.java",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "java variable.name",
    scope: "meta.definition.variable.name.java",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "operator logical",
    scope: "keyword.operator.logical",
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "operator bitwise",
    scope: "keyword.operator.bitwise",
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "operator channel",
    scope: "keyword.operator.channel",
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "support.constant.property-value.scss",
    scope: "support.constant.property-value.scss,support.constant.property-value.css",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "CSS/SCSS/LESS Operators",
    scope: "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "css color standard name",
    scope:
      "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "css comma",
    scope: "punctuation.separator.list.comma.css",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "css attribute-name.id",
    scope: "support.constant.color.w3c-standard-color-name.css",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "css property-name",
    scope: "support.type.vendored.property-name.css",
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "js/ts module",
    scope: "support.module.node,support.type.object.module,support.module.node",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "entity.name.type.module",
    scope: "entity.name.type.module",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "js variable readwrite",
    scope:
      "variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "js/ts json",
    scope: "support.constant.json",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "js/ts Keyword",
    scope: [
      "keyword.operator.expression.instanceof",
      "keyword.operator.new",
      "keyword.operator.ternary",
      "keyword.operator.optional",
      "keyword.operator.expression.keyof",
    ],
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "js/ts console",
    scope: "support.type.object.console",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "js/ts support.variable.property.process",
    scope: "support.variable.property.process",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "js console function",
    scope: "entity.name.function,support.function.console",
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: "keyword.operator.misc.rust",
    scope: "keyword.operator.misc.rust",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "keyword.operator.sigil.rust",
    scope: "keyword.operator.sigil.rust",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "operator",
    scope: "keyword.operator.delete",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "js dom",
    scope: "support.type.object.dom",
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "js dom variable",
    scope: "support.variable.dom,support.variable.property.dom",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "keyword.operator",
    scope:
      "keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "C operator assignment",
    scope:
      "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "Punctuation",
    scope: "punctuation.separator.delimiter",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "Other punctuation .c",
    scope: "punctuation.separator.c,punctuation.separator.cpp",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "C type posix-reserved",
    scope: "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "keyword.operator.sizeof.c",
    scope: "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "python parameter",
    scope: "variable.parameter.function.language.python",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "python type",
    scope: "support.type.python",
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "python logical",
    scope: "keyword.operator.logical.python",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "pyCs",
    scope: "variable.parameter.function.python",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "python block",
    scope:
      "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "python function-call.generic",
    scope: "meta.function-call.generic.python",
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: "python placeholder reset to normal string",
    scope: "constant.character.format.placeholder.other.python",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "Operators",
    scope: "keyword.operator",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "Compound Assignment Operators",
    scope: "keyword.operator.assignment.compound",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "Compound Assignment Operators js/ts",
    scope: "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "Keywords",
    scope: "keyword",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "Namespaces",
    scope: "entity.name.namespace",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "Variables",
    scope: "variable",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "Variables",
    scope: "variable.c",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "Language variables",
    scope: "variable.language",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "Java Variables",
    scope: "token.variable.parameter.java",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "Java Imports",
    scope: "import.storage.java",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "Packages",
    scope: "token.package.keyword",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "Packages",
    scope: "token.package",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "Functions",
    scope: ["entity.name.function", "meta.require", "support.function.any-method", "variable.function"],
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: "Classes",
    scope: "entity.name.type.namespace",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "Classes",
    scope: "support.class, entity.name.type.class",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "Class name",
    scope: "entity.name.class.identifier.namespace.type",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "Class name",
    scope: ["entity.name.class", "variable.other.class.js", "variable.other.class.ts"],
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "Class name php",
    scope: "variable.other.class.php",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "Type Name",
    scope: "entity.name.type",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "Keyword Control",
    scope: "keyword.control",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "Control Elements",
    scope: "control.elements, keyword.operator.less",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "Methods",
    scope: "keyword.other.special-method",
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: "Storage",
    scope: "storage",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "Storage JS TS",
    scope: "token.storage",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
    scope:
      "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "Java Storage",
    scope: "token.storage.type.java",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "Support",
    scope: "support.function",
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "Support type",
    scope: "support.type.property-name",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "Support type",
    scope: "support.constant.property-value",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "Support type",
    scope: "support.constant.font-name",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "Meta tag",
    scope: "meta.tag",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "Strings",
    scope: "string",
    settings: {
      foreground: color.greenCyan,
    },
  },
  {
    name: "Constant other symbol",
    scope: "constant.other.symbol",
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "Integers",
    scope: "constant.numeric",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "Constants",
    scope: "constant",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "Constants",
    scope: "punctuation.definition.constant",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "Tags",
    scope: "entity.name.tag",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "Attributes",
    scope: "entity.other.attribute-name",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "Attribute IDs",
    scope: "entity.other.attribute-name.id",
    settings: {
      fontStyle: "italic",
      foreground: color.blue,
    },
  },
  {
    name: "Attribute class",
    scope: "entity.other.attribute-name.class.css",
    settings: {
      fontStyle: "italic",
      foreground: color.orange,
    },
  },
  {
    name: "Selector",
    scope: "meta.selector",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "Headings",
    scope: "markup.heading",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "Headings",
    scope: "markup.heading punctuation.definition.heading, entity.name.section",
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: "Units",
    scope: "keyword.other.unit",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "Bold",
    scope: "markup.bold,todo.bold",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "Bold",
    scope: "punctuation.definition.bold",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "markup Italic",
    scope: "markup.italic, punctuation.definition.italic,todo.emphasis",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "emphasis md",
    scope: "emphasis md",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown headings",
    scope: "entity.name.section.markdown",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
    scope: "punctuation.definition.heading.markdown",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "punctuation.definition.list.begin.markdown",
    scope: "punctuation.definition.list.begin.markdown",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown heading setext",
    scope: "markup.heading.setext",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
    scope: "punctuation.definition.bold.markdown",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Inline Raw",
    scope: "markup.inline.raw.markdown",
    settings: {
      foreground: color.greenCyan,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Inline Raw",
    scope: "markup.inline.raw.string.markdown",
    settings: {
      foreground: color.greenCyan,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Inline Raw punctuation",
    scope: "punctuation.definition.raw.markdown",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
    scope: "punctuation.definition.list.markdown",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
    scope: [
      "punctuation.definition.string.begin.markdown",
      "punctuation.definition.string.end.markdown",
      "punctuation.definition.metadata.markdown",
    ],
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "beginning.punctuation.definition.list.markdown",
    scope: ["beginning.punctuation.definition.list.markdown"],
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
    scope: "punctuation.definition.metadata.markdown",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Underline Link/Image",
    scope: "markup.underline.link.markdown,markup.underline.link.image.markdown",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Link Title/Description",
    scope: "string.other.link.title.markdown,string.other.link.description.markdown",
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Asciidoc Inline Raw",
    scope: "markup.raw.monospace.asciidoc",
    settings: {
      foreground: color.greenCyan,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Asciidoc Inline Raw Punctuation Definition",
    scope: "punctuation.definition.asciidoc",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Asciidoc List Punctuation Definition",
    scope: "markup.list.asciidoc",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Asciidoc underline link",
    scope: "markup.link.asciidoc,markup.other.url.asciidoc",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Asciidoc link name",
    scope: "string.unquoted.asciidoc,markup.other.url.asciidoc",
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: "Regular Expressions",
    scope: "string.regexp",
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "Escape Characters",
    scope: "constant.character.escape",
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "Embedded",
    scope: "punctuation.section.embedded, variable.interpolation",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "Embedded",
    scope: "punctuation.section.embedded.begin,punctuation.section.embedded.end",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "illegal",
    scope: "invalid.illegal",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "illegal",
    scope: "invalid.illegal.bad-ampersand.html",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "Broken",
    scope: "invalid.broken",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "Deprecated",
    scope: "invalid.deprecated",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "Unimplemented",
    scope: "invalid.unimplemented",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "Source Json Meta Structure Dictionary Json > String Quoted Json",
    scope: "source.json meta.structure.dictionary.json > string.quoted.json",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
    scope: "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
    scope:
      "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
    settings: {
      foreground: color.greenCyan,
    },
  },
  {
    name: "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
    scope:
      "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "[VSCODE-CUSTOM] JSON Property Name",
    scope: "support.type.property-name.json",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
    scope: "support.type.property-name.json punctuation",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "laravel blade tag",
    scope: "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "laravel blade @",
    scope: "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "use statement for other classes",
    scope:
      "support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "error suppression",
    scope: "keyword.operator.error-control.php",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "php instanceof",
    scope: "keyword.operator.type.php",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "style double quoted array index normal begin",
    scope: "punctuation.section.array.begin.php",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "style double quoted array index normal end",
    scope: "punctuation.section.array.end.php",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "php illegal.non-null-typehinted",
    scope: "invalid.illegal.non-null-typehinted.php",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "php types",
    scope:
      "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "php call-function",
    scope: "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: "php function-resets",
    scope:
      "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "support php constants",
    scope: "support.constant.core.rust",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "support php constants",
    scope:
      "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "php goto",
    scope: "entity.name.goto-label.php,support.other.php",
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: "php logical/bitwise operator",
    scope: "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "php regexp operator",
    scope: "keyword.operator.regexp.php",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "php comparison",
    scope: "keyword.operator.comparison.php",
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "php heredoc/nowdoc",
    scope: "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "python function decorator @",
    scope: "meta.function.decorator.python",
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: "python function support",
    scope: "support.token.decorator.python,meta.function.decorator.identifier.python",
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "parameter function js/ts",
    scope: "function.parameter",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "brace function",
    scope: "function.brace",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "parameter function ruby cs",
    scope: "function.parameter.ruby, function.parameter.cs",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "constant.language.symbol.ruby",
    scope: "constant.language.symbol.ruby",
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "rgb-value",
    scope: "rgb-value",
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "rgb value",
    scope: "inline-color-decoration rgb-value",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "rgb value less",
    scope: "less rgb-value",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "sass selector",
    scope: "selector.sass",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "ts primitive/builtin types",
    scope:
      "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "block scope",
    scope: "block.scope.end,block.scope.begin",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "cs storage type",
    scope: "storage.type.cs",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "cs local variable",
    scope: "entity.name.variable.local.cs",
    settings: {
      foreground: color.violet,
    },
  },
  {
    scope: "token.info-token",
    settings: {
      foreground: color.blue,
    },
  },
  {
    scope: "token.warn-token",
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: "token.error-token",
    settings: {
      foreground: color.red,
    },
  },
  {
    scope: "token.debug-token",
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "String interpolation",
    scope: [
      "punctuation.definition.template-expression.begin",
      "punctuation.definition.template-expression.end",
      "punctuation.section.embedded",
    ],
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "Reset JavaScript string interpolation expression",
    scope: ["meta.template.expression"],
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "Import module JS",
    scope: ["keyword.operator.module"],
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "js Flowtype",
    scope: ["support.type.type.flowtype"],
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: "js Flow",
    scope: ["support.type.primitive"],
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "js class prop",
    scope: ["meta.property.object"],
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "js func parameter",
    scope: ["variable.parameter.function.js"],
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "js template literals begin",
    scope: ["keyword.other.template.begin"],
    settings: {
      foreground: color.greenCyan,
    },
  },
  {
    name: "js template literals end",
    scope: ["keyword.other.template.end"],
    settings: {
      foreground: color.greenCyan,
    },
  },
  {
    name: "js template literals variable braces begin",
    scope: ["keyword.other.substitution.begin"],
    settings: {
      foreground: color.greenCyan,
    },
  },
  {
    name: "js template literals variable braces end",
    scope: ["keyword.other.substitution.end"],
    settings: {
      foreground: color.greenCyan,
    },
  },
  {
    name: "js operator.assignment",
    scope: ["keyword.operator.assignment"],
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "go operator",
    scope: ["keyword.operator.assignment.go"],
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "go operator",
    scope: ["keyword.operator.arithmetic.go", "keyword.operator.address.go"],
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "Go package name",
    scope: ["entity.name.package.go"],
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "elm prelude",
    scope: ["support.type.prelude.elm"],
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "elm constant",
    scope: ["support.constant.elm"],
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "template literal",
    scope: ["punctuation.quasi.element"],
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "html/pug (jade) escaped characters and entities",
    scope: ["constant.character.entity"],
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
    scope: ["entity.other.attribute-name.pseudo-element", "entity.other.attribute-name.pseudo-class"],
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "Clojure globals",
    scope: ["entity.global.clojure"],
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "Clojure symbols",
    scope: ["meta.symbol.clojure"],
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "Clojure constants",
    scope: ["constant.keyword.clojure"],
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "CoffeeScript Function Argument",
    scope: ["meta.arguments.coffee", "variable.parameter.function.coffee"],
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "Ini Default Text",
    scope: ["source.ini"],
    settings: {
      foreground: color.greenCyan,
    },
  },
  {
    name: "Makefile prerequisities",
    scope: ["meta.scope.prerequisites.makefile"],
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "Makefile text colour",
    scope: ["source.makefile"],
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "Groovy import names",
    scope: ["storage.modifier.import.groovy"],
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "Groovy Methods",
    scope: ["meta.method.groovy"],
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: "Groovy Variables",
    scope: ["meta.definition.variable.name.groovy"],
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "Groovy Inheritance",
    scope: ["meta.definition.class.inherited.classes.groovy"],
    settings: {
      foreground: color.greenCyan,
    },
  },
  {
    name: "HLSL Semantic",
    scope: ["support.variable.semantic.hlsl"],
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "HLSL Types",
    scope: [
      "support.type.texture.hlsl",
      "support.type.sampler.hlsl",
      "support.type.object.hlsl",
      "support.type.object.rw.hlsl",
      "support.type.fx.hlsl",
      "support.type.object.hlsl",
    ],
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "SQL Variables",
    scope: ["text.variable", "text.bracketed"],
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "types",
    scope: ["support.type.swift", "support.type.vb.asp"],
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "heading 1, keyword",
    scope: ["entity.name.function.xi"],
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "heading 2, callable",
    scope: ["entity.name.class.xi"],
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "heading 3, property",
    scope: ["constant.character.character-class.regexp.xi"],
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "heading 4, type, class, interface",
    scope: ["constant.regexp.xi"],
    settings: {
      foreground: color.red,
    },
  },
  {
    name: "heading 5, enums, preprocessor, constant, decorator",
    scope: ["keyword.control.xi"],
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "heading 6, number",
    scope: ["invalid.xi"],
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "string",
    scope: ["beginning.punctuation.definition.quote.markdown.xi"],
    settings: {
      foreground: color.greenCyan,
    },
  },
  {
    name: "comments",
    scope: ["beginning.punctuation.definition.list.markdown.xi"],
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: "link",
    scope: ["constant.character.xi"],
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: "accent",
    scope: ["accent.xi"],
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: "wikiword",
    scope: ["wikiword.xi"],
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "language operators like '+', '-' etc",
    scope: ["constant.other.color.rgb-value.xi"],
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "elements to dim",
    scope: ["punctuation.definition.tag.xi"],
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: "C++/C#",
    scope: [
      "entity.name.label.cs",
      "entity.name.scope-resolution.function.call",
      "entity.name.scope-resolution.function.definition",
    ],
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "Markdown underscore-style headers",
    scope: ["entity.name.label.cs", "markup.heading.setext.1.markdown", "markup.heading.setext.2.markdown"],
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "meta.brace.square",
    scope: ["meta.brace.square"],
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "Comments",
    scope: "comment, punctuation.definition.comment",
    settings: {
      fontStyle: "italic",
      foreground: color.gray,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Quote",
    scope: "markup.quote.markdown",
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: "punctuation.definition.block.sequence.item.yaml",
    scope: "punctuation.definition.block.sequence.item.yaml",
    settings: {
      foreground: color.light,
    },
  },
  {
    scope: ["constant.language.symbol.elixir", "constant.language.symbol.double-quoted.elixir"],
    settings: {
      foreground: color.cyan,
    },
  },
  {
    scope: ["entity.name.variable.parameter.cs"],
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: ["entity.name.variable.field.cs"],
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "Deleted",
    scope: "markup.deleted",
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "Inserted",
    scope: "markup.inserted",
    settings: {
      foreground: color.greenCyan,
    },
  },
  {
    name: "Underline",
    scope: "markup.underline",
    settings: {
      fontStyle: "underline",
    },
  },
  {
    name: "punctuation.section.embedded.begin.php",
    scope: ["punctuation.section.embedded.begin.php", "punctuation.section.embedded.end.php"],
    settings: {
      foreground: color.darkOrange,
    },
  },
  {
    name: "support.other.namespace.php",
    scope: ["support.other.namespace.php"],
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "variable.other.object",
    scope: ["variable.other.object"],
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "variable.other.constant.property",
    scope: ["variable.other.constant.property"],
    settings: {
      foreground: color.violet,
    },
  },
  {
    name: "entity.other.inherited-class",
    scope: ["entity.other.inherited-class"],
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "js/ts italic",
    scope:
      "entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",
    settings: {
      fontStyle: "italic",
    },
  },
  {
    name: "comment",
    scope: "comment.line.double-slash,comment.block.documentation",
    settings: {
      fontStyle: "italic",
    },
  },
  {
    name: "Python Keyword Control",
    scope: "keyword.control.import.python,keyword.control.flow.python",
    settings: {
      fontStyle: "italic",
    },
  },
  {
    name: "markup.italic.markdown",
    scope: "markup.italic.markdown",
    settings: {
      fontStyle: "italic",
    },
  },
]
