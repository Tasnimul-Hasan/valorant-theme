const color = require("../color.js")

module.exports = [
  {
    name: "italic font",
    scope: [
      "comment",
      "keyword",
      "storage",
      "keyword.control",
      "keyword.control.from",
      "keyword.control.flow",
      "keyword.operator.new",
      "keyword.control.import",
      "keyword.control.export",
      "keyword.control.default",
      "keyword.control.trycatch",
      "keyword.control.conditional",
      "keyword.control.import.python",
      "keyword.control.flow.python",
      "keyword.operator.expression.delete",
      "keyword.operator.expression.in",
      "keyword.operator.expression.of",
      "keyword.operator.expression.instanceof",
      "keyword.operator.expression.typeof",
      "keyword.operator.expression.void",
      "comment.line.double-slash",
      "comment.block.documentation",
      "storage.type",
      "storage.type.class",
      "storage.modifier.tsx",
      "storage.type.function",
      "storage.modifier.async",
      "variable.language",
      "variable.language.this",
      "variable.language.super",
      "meta.class",
      "meta.var.expr",
      "constant.language.null",
      "support.type.primitive",
      "entity.name.method.js",
      "entity.other.attribute-name",
      "entity.other.attribute-name.js",
      "entity.other.attribute-name.ts",
      "entity.other.attribute-name.jsx",
      "entity.other.attribute-name.tsx",
      "variable.parameter",
      "punctuation.definition.comment",
      "text.html.basic entity.other.attribute-name",
      "tag.decorator.js entity.name.tag.js",
      "tag.decorator.js punctuation.definition.tag.js",
      "source.js constant.other.object.key.js string.unquoted.label.js",
      "markup.italic.markdown",
    ],
    settings: {
      fontStyle: "italic",
    },
  },
  {
    name: "red",
    scope:
      "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unisonsupport.variable.magic.python,variable.language.rust,constant.other.character-class.regexp,markup.deleted.diff,meta.function.c,meta.function.cpp,source.java,meta.definition.variable.name.java,variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node,support.type.object.console,support.variable.dom,support.variable.property.dom, variable,variable.other.class.phpj,entity.name.tag,markup.heading,keyword.other.unit,entity.name.section.markdown,punctuation.definition.heading.markdown,punctuation.definition.string.begin.markdown,punctuation.definition.string.end.markdown,punctuation.definition.metadata.markdown,beginning.punctuation.definition.list.markdown,punctuation.definition.metadata.markdown,punctuation.section.embedded,variable.interpolation,source.json meta.structure.dictionary.json > string.quoted.json,source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string,invalid.illegal.non-null-typehinted.php,support.type.property-name.json,entity.other.attribute-name.scss,support.constant.property-value.css,constant.numeric.css,keyword.other.important.scss,keyword.other.important.css,entity.name.tag.reference.scss,entity.name.tag.reference.css,keyword.operator.gradient.css,keyword.operator.gradient.scss",
    settings: {
      foreground: color.redShade,
    },
  },
  {
    name: "pink",
    scope:
      "variable.other.generic-type.haskell,support.constant.edge,keyword.operator.instanceof.java,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.ternary,keyword.operator.optional,keyword.operator.expression.keyof,keyword.operator.sigil.rust,keyword.operator.delete,keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp,keyword.operator.sizeof.c,keyword.operator.sizeof.cpp,keyword.operator.logical.python,keyword.operator.assignment.compound,keyword,keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void,token.package.keyword,keyword.control,storage,token.storage,meta.selector,markup.italic,punctuation.definition.italic,todo.emphasis,markup.underline.link.markdown,markup.underline.link.image.markdown,markup.link.asciidoc,markup.other.url.asciidoc,punctuation.section.embedded.begin,punctuation.section.embedded.end,text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade,text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade,keyword.operator.error-control.php,keyword.operator.type.php,keyword.operator.regexp.php,keyword.operator.heredoc.php,keyword.operator.nowdoc.php,meta.property-value.css,keyword.other.unit,entity.other.attribute-name.class.css",
    settings: {
      foreground: color.violetLight,
    },
  },
  {
    name: "purple",
    scope:
      "storage.type.haskell,keyword.operator.quantifier.regexp,support.constant.property.math,support.constant.property-value.scss,support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss,support.constant.color.w3c-standard-color-name.css,support.constant.json,support.variable.property.process,variable.parameter.function.language.python,variable.parameter.function.python,constant.character.format.placeholder.other.python,control.elements,keyword.operator.less,support.constant.font-name,punctuation.definition.constant,markup.bold,todo.bold,punctuation.definition.bold.markdown,support.constant.core.rust,support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php,inline-color-decoration rgb-value,less rgb-value,variable.css,variable.scss,punctuation.definition.keyword.scss,punctuation.definition.keyword.css,punctuation.definition.entity.css",
    settings: {
      foreground: color.purple,
    },
  },
  {
    name: "gray",
    scope:
      "punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python,storage.modifier.lifetime.rust,variable.parameter.function,punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.definition.annotation.java,meta.method.body.java,keyword.operator.misc.rust,punctuation.definition.arguments.end.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python,keyword.operator,variable.c,token.variable.parameter.java,token.package,support.constant.property-value,meta.tag,markup.heading.setext,invalid.illegal.bad-ampersand.html,punctuation.section.array.begin.php,punctuation.section.array.end.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,function.parameter,function.brace,function.parameter.ruby,function.parameter.cs",
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "dark gray",
    scope: "comment markup.link",
    settings: {
      foreground: color.blueishDark,
    },
  },
  {
    name: "yellow",
    scope:
      "variable.parameter.function.language.special.self.python,variable.parameter.function.language.special.cls.python,entity.name.lifetime.rust,markup.changed.diff,support.constant.math,variable.other.constant,storage.type.annotation.java,storage.type.object.array.java,storage.modifier.import.java,storage.type.java,storage.type.generic.java,support.module.node,support.type.object.module,support.module.node,entity.name.type.module,entity.name.namespace,variable.language,import.storage.java,entity.name.type.namespace,support.class,entity.name.type.class,entity.name.class.identifier.namespace.type,entity.name.class,variable.other.class.js,variable.other.class.ts,entity.name.type,token.storage.type.java,punctuation.definition.bold,punctuation.definition.list.begin.markdown,punctuation.definition.raw.markdown,punctuation.definition.list.markdown,punctuation.definition.asciidoc,markup.list.asciidoc,support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php,storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
    settings: {
      foreground: color.orangeLight,
    },
  },
  {
    name: "sky",
    scope:
      "entity.name.function,keyword.operator.expression.import,meta.diff.header.to-file,meta.diff.header.from-file,support.function.std.rust,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff,meta.method.java,support.function.console,meta.function-call.generic.python,meta.require,support.function.any-method,keyword.other.special-method,markup.heading punctuation.definition.heading,entity.name.section,string.other.link.title.markdown,string.other.link.description.markdown,string.unquoted.asciidoc,markup.other.url.asciidoc,meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php,entity.name.goto-label.php,support.other.php,meta.function.decorator.python,support.function,entity.other.attribute-name.pseudo-element,entity.other.attribute-name.pseudo-class",
    settings: {
      foreground: color.sky,
    },
  },
  {
    name: "teal",
    scope:
      "markup.inserted.diff,string,markup.inline.raw.markdown,markup.inline.raw.string.markdown,markup.raw.monospace.asciidoc,source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation,variable.parameter",
    settings: {
      foreground: color.greenLight,
    },
  },
  {
    name: "green",
    scope:
      "punctuation.definition.tag.begin.html,punctuation.definition.tag.end.html,punctuation.definition.entity.html,punctuation.definition.string.begin,punctuation.definition.string.end,punctuation.separator.key-value,punctuation.support.type.property-name.end.json,punctuation.support.type.property-name.begin.json,punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.section.property-list.begin.bracket.curly.scss,punctuation.section.property-list.end.bracket.curly.scss,punctuation.section.property-list.begin.bracket.curly.css,punctuation.section.property-list.end.bracket.curly.css,punctuation.definition.media-query.begin.bracket.round.css, punctuation.definition.media-query.end.bracket.round.css,punctuation.definition.media-query.begin.bracket.round.scss,punctuation.definition.media-query.end.bracket.round.scss,punctuation.definition.parameters.begin.bracket.round.scss, punctuation.definition.parameters.end.bracket.round.scss,punctuation.definition.parameters.begin.bracket.round.css, punctuation.definition.parameters.end.bracket.round.csspunctuation.terminator.rule.css,punctuation.terminator.rule.scss,entity.other.attribute-name.id,punctuation.separator,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison,punctuation.separator.period.python,punctuation.separator.element.python,punctuation.separator.list.comma.css,punctuation.separator.delimiter,punctuation.definition.arguments.begin.python,punctuation.separator.arguments.python,punctuation.separator.delimiter.php,punctuation.separator.c,punctuation.separator.cpp,",
    settings: {
      foreground: color.cyan,
    },
  },
  {
    name: "orange",
    scope:
      "keyword.operator.logical,keyword.operator.bitwise,keyword.operator.channel,keyword.operator.css,keyword.operator.scss,keyword.operator.less,support.type.vendored.property-name.css,support.type.object.dom,keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational,support.type.posix-reserved.c,support.type.posix-reserved.cpp,support.type.python,keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts,constant.other.symbol,entity.other.attribute-name,string.regexp,constant.character.escape, source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json,keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php,keyword.operator.comparison.php,support.token.decorator.python,meta.function.decorator.identifier.python,constant.language.symbol.ruby,rgb-value,support.type.property-name,meta.property-list.scss,meta.property-list.css,constant,constant.numeric",
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "white",
    scope: "invalid.illegal,invalid.broken,invalid.deprecated,invalid.unimplemented",
    settings: {
      foreground: color.lighter,
    },
  },

  {
    name: "rgb value less",
    scope: "",
    settings: {
      foreground: color.purple,
    },
  },
  {
    name: "sass selector",
    scope: "selector.sass",
    settings: {
      foreground: color.redShade,
    },
  },
  {
    name: "ts primitive/builtin types",
    scope:
      "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
    settings: {
      foreground: color.orangeLight,
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
      foreground: color.orangeLight,
    },
  },
  {
    name: "cs local variable",
    scope: "entity.name.variable.local.cs",
    settings: {
      foreground: color.redShade,
    },
  },
  {
    scope: "token.info-token",
    settings: {
      foreground: color.sky,
    },
  },
  {
    scope: "token.warn-token",
    settings: {
      foreground: color.purple,
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
      foreground: color.violetLight,
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
      foreground: color.violetLight,
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
      foreground: color.violetLight,
    },
  },
  {
    name: "js Flowtype",
    scope: ["support.type.type.flowtype"],
    settings: {
      foreground: color.sky,
    },
  },
  {
    name: "js Flow",
    scope: ["support.type.primitive"],
    settings: {
      foreground: color.orangeLight,
    },
  },
  {
    name: "js class prop",
    scope: ["meta.property.object"],
    settings: {
      foreground: color.redShade,
    },
  },
  {
    name: "js func parameter",
    scope: ["variable.parameter.function.js"],
    settings: {
      foreground: color.redShade,
    },
  },
  {
    name: "js template literals begin",
    scope: ["keyword.other.template.begin"],
    settings: {
      foreground: color.greenLight,
    },
  },
  {
    name: "js template literals end",
    scope: ["keyword.other.template.end"],
    settings: {
      foreground: color.greenLight,
    },
  },
  {
    name: "js template literals variable braces begin",
    scope: ["keyword.other.substitution.begin"],
    settings: {
      foreground: color.greenLight,
    },
  },
  {
    name: "js template literals variable braces end",
    scope: ["keyword.other.substitution.end"],
    settings: {
      foreground: color.greenLight,
    },
  },
  {
    name: "js operator.assignment",
    scope: ["keyword.operator.assignment"],
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "go operator",
    scope: ["keyword.operator.assignment.go"],
    settings: {
      foreground: color.orangeLight,
    },
  },
  {
    name: "go operator",
    scope: ["keyword.operator.arithmetic.go", "keyword.operator.address.go"],
    settings: {
      foreground: color.violetLight,
    },
  },
  {
    name: "Go package name",
    scope: ["entity.name.package.go"],
    settings: {
      foreground: color.orangeLight,
    },
  },
  {
    name: "elm prelude",
    scope: ["support.type.prelude.elm"],
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "elm constant",
    scope: ["support.constant.elm"],
    settings: {
      foreground: color.purple,
    },
  },
  {
    name: "template literal",
    scope: ["punctuation.quasi.element"],
    settings: {
      foreground: color.violetLight,
    },
  },
  {
    name: "html/pug (jade) escaped characters and entities",
    scope: [""],
    settings: {
      foreground: color.redShade,
    },
  },
  {
    name: "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
    scope: [],
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "Clojure globals",
    scope: ["entity.global.clojure"],
    settings: {
      foreground: color.orangeLight,
    },
  },
  {
    name: "Clojure symbols",
    scope: ["meta.symbol.clojure"],
    settings: {
      foreground: color.redShade,
    },
  },
  {
    name: "Clojure constants",
    scope: ["constant.keyword.clojure"],
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "CoffeeScript Function Argument",
    scope: ["meta.arguments.coffee", "variable.parameter.function.coffee"],
    settings: {
      foreground: color.redShade,
    },
  },
  {
    name: "Ini Default Text",
    scope: ["source.ini"],
    settings: {
      foreground: color.greenLight,
    },
  },
  {
    name: "Makefile prerequisities",
    scope: ["meta.scope.prerequisites.makefile"],
    settings: {
      foreground: color.redShade,
    },
  },
  {
    name: "Makefile text colour",
    scope: ["source.makefile"],
    settings: {
      foreground: color.orangeLight,
    },
  },
  {
    name: "Groovy import names",
    scope: ["storage.modifier.import.groovy"],
    settings: {
      foreground: color.orangeLight,
    },
  },
  {
    name: "Groovy Methods",
    scope: ["meta.method.groovy"],
    settings: {
      foreground: color.sky,
    },
  },
  {
    name: "Groovy Variables",
    scope: ["meta.definition.variable.name.groovy"],
    settings: {
      foreground: color.redShade,
    },
  },
  {
    name: "Groovy Inheritance",
    scope: ["meta.definition.class.inherited.classes.groovy"],
    settings: {
      foreground: color.greenLight,
    },
  },
  {
    name: "HLSL Semantic",
    scope: ["support.variable.semantic.hlsl"],
    settings: {
      foreground: color.orangeLight,
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
      foreground: color.violetLight,
    },
  },
  {
    name: "SQL Variables",
    scope: ["text.variable", "text.bracketed"],
    settings: {
      foreground: color.redShade,
    },
  },
  {
    name: "types",
    scope: ["support.type.swift", "support.type.vb.asp"],
    settings: {
      foreground: color.orangeLight,
    },
  },
  {
    name: "heading 1,keyword",
    scope: ["entity.name.function.xi"],
    settings: {
      foreground: color.orangeLight,
    },
  },
  {
    name: "heading 2,callable",
    scope: ["entity.name.class.xi"],
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "heading 3,property",
    scope: ["constant.character.character-class.regexp.xi"],
    settings: {
      foreground: color.redShade,
    },
  },
  {
    name: "heading 4,type,class,interface",
    scope: ["constant.regexp.xi"],
    settings: {
      foreground: color.violetLight,
    },
  },
  {
    name: "heading 5,enums,preprocessor,constant,decorator",
    scope: ["keyword.control.xi"],
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: "heading 6,number",
    scope: ["invalid.xi"],
    settings: {
      foreground: color.light,
    },
  },
  {
    name: "string",
    scope: ["beginning.punctuation.definition.quote.markdown.xi"],
    settings: {
      foreground: color.greenLight,
    },
  },
  {
    name: "comments",
    scope: ["beginning.punctuation.definition.list.markdown.xi"],
    settings: {
      foreground: color.skyishDark,
    },
  },
  {
    name: "link",
    scope: ["constant.character.xi"],
    settings: {
      foreground: color.sky,
    },
  },
  {
    name: "accent",
    scope: ["accent.xi"],
    settings: {
      foreground: color.sky,
    },
  },
  {
    name: "wikiword",
    scope: ["wikiword.xi"],
    settings: {
      foreground: color.purple,
    },
  },
  {
    name: "language operators like '+','-' etc",
    scope: ["constant.other.color.rgb-value.xi"],
    settings: {
      foreground: color.lighter,
    },
  },
  {
    name: "elements to dim",
    scope: ["punctuation.definition.tag.xi"],
    settings: {
      foreground: color.blueishDark,
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
      foreground: color.orangeLight,
    },
  },
  {
    name: "Markdown underscore-style headers",
    scope: ["entity.name.label.cs", "markup.heading.setext.1.markdown", "markup.heading.setext.2.markdown"],
    settings: {
      foreground: color.redShade,
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
    scope: "comment,punctuation.definition.comment",
    settings: {
      foreground: color.skyishDark,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Quote",
    scope: "markup.quote.markdown",
    settings: {
      foreground: color.blueishDark,
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
      foreground: color.orange,
    },
  },
  {
    scope: ["entity.name.variable.parameter.cs"],
    settings: {
      foreground: color.orangeLight,
    },
  },
  {
    scope: ["entity.name.variable.field.cs"],
    settings: {
      foreground: color.redShade,
    },
  },
  {
    name: "Deleted",
    scope: "markup.deleted",
    settings: {
      foreground: color.redShade,
    },
  },
  {
    name: "Inserted",
    scope: "markup.inserted",
    settings: {
      foreground: color.greenLight,
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
      foreground: color.orangeDark,
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
      foreground: color.orangeLight,
    },
  },
  {
    name: "variable.other.constant.property",
    scope: ["variable.other.constant.property"],
    settings: {
      foreground: color.redShade,
    },
  },
  {
    name: "entity.other.inherited-class",
    scope: ["entity.other.inherited-class"],
    settings: {
      foreground: color.orangeLight,
    },
  },
  {
    name: "c variable readwrite",
    scope: "variable.other.readwrite.c",
    settings: {
      foreground: color.redShade,
    },
  },
  {
    name: "emphasis md",
    scope: "emphasis md",
    settings: {
      foreground: color.violetLight,
    },
  },
]
