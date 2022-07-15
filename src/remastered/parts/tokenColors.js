const color = require('../color.js');

module.exports = [
  {
    name: 'regexp constant character-class',
    scope: 'constant.other.character-class.regexp',
    settings: {
      foreground: color.red + 'ff',
    },
  },
  {
    name: 'regexp operator.quantifier',
    scope: 'keyword.operator.quantifier.regexp',
    settings: {
      foreground: color.orange + 'ff',
    },
  },
  {
    name: 'punctuation.definition',
    scope:
      'punctuation.definition.string.begin,punctuation.definition.string.end',
    settings: {
      foreground: color.teal,
    },
  },
  {
    name: 'Text',
    scope: 'variable.parameter.function',
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: 'Comments',
    scope: [
      'comment',
      'punctuation.definition.comment',
      'comment.block.documentation.cfml',
      'comment.block.documentation.js',
      'comment.block.documentation.ts',
      'comment.line.double-slash.cfml',
      'comment.line.double-slash.js',
      'comment.line.double-slash.ts',
      'comment.line.double-slash.php',
      'comment.block.documentation.phpdoc.php',
    ],
    settings: {
      fontStyle: 'italic',
      foreground: color.gray,
    },
  },
  {
    name: 'Comment Markup Link',
    scope: 'comment markup.link',
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: 'markup diff',
    scope: 'markup.changed.diff',
    settings: {
      foreground: color.yellow,
    },
  },
  {
    name: 'diff',
    scope:
      'meta.diff.header.from-file,punctuation.definition.from-file.diff',
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: 'inserted.diff',
    scope: 'markup.inserted.diff',
    settings: {
      foreground: color.teal,
    },
  },
  {
    name: 'deleted.diff',
    scope: 'markup.deleted.diff',
    settings: {
      foreground: color.red,
    },
  },
  {
    name: 'c++ function',
    scope: 'meta.function.c',
    settings: {
      foreground: color.red,
    },
  },
  {
    name: 'c++ control',
    scope: 'keyword.control.cpp',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'c++ block',
    scope: [
      'punctuation.section.block.begin.bracket.curly.cpp',
      'punctuation.section.block.end.bracket.curly.cpp',
      'punctuation.terminator.statement.c',
      'punctuation.section.block.begin.bracket.curly.c',
      'punctuation.section.block.end.bracket.curly.c',
      'punctuation.section.parens.begin.bracket.round.c',
      'punctuation.section.parens.end.bracket.round.c',
      'punctuation.section.parameters.begin.bracket.round.c',
      'punctuation.section.parameters.end.bracket.round.c',
    ],
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: 'js/ts punctuation separator key-value',
    scope: 'punctuation.separator.key-value',
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: 'js/ts italic',
    scope: [
      'entity.other.attribute-name.js',
      'entity.other.attribute-name.ts',
      'entity.other.attribute-name.jsx',
      'entity.other.attribute-name.tsx',
      'variable.parameter',
      'variable.language.super',
    ],
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    name: 'js/ts import keyword',
    scope: 'keyword.operator.expression.import',
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: 'math js/ts',
    scope: 'support.constant.math',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'math property js/ts',
    scope: 'support.constant.property.math',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'js/ts variable.other.constant',
    scope: 'variable.other.constant',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'java type',
    scope: 'storage.type.annotation.java',
    settings: {
      foreground: color.orange + 'ff',
    },
  },
  {
    name: 'java source',
    scope: 'source.java',
    settings: {
      foreground: color.red,
    },
  },
  {
    name: 'java modifier.import',
    scope: [
      'punctuation.section.block.begin.java',
      'punctuation.section.block.end.java',
      'punctuation.definition.method-parameters.begin.java',
      'punctuation.definition.method-parameters.end.java',
      'meta.method.identifier.java',
      'punctuation.section.method.begin.java',
      'punctuation.section.method.end.java',
      'punctuation.terminator.java',
      'punctuation.section.class.begin.java',
      'punctuation.section.class.end.java',
      'punctuation.section.inner-class.begin.java',
      'punctuation.section.inner-class.end.java',
      'meta.method-call.java',
      'storage.type.generic.java',
      'punctuation.section.class.begin.bracket.curly.java',
      'punctuation.section.class.end.bracket.curly.java',
      'punctuation.section.method.begin.bracket.curly.java',
      'punctuation.section.method.end.bracket.curly.java',
      'punctuation.separator.period.java',
      'meta.method.body.java',
    ],
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: 'java modifier.import',
    scope: 'meta.method.java',
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: 'java modifier.import',
    scope: ['storage.modifier.import.java', 'storage.type.java'],
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'java variable.name',
    scope: 'meta.definition.variable.name.java',
    settings: {
      foreground: color.red,
    },
  },
  {
    name: 'operator logical',
    scope: 'keyword.operator.logical.js',
    settings: {
      foreground: color.green,
    },
  },
  {
    name: 'operator bitwise',
    scope: 'keyword.operator.bitwise',
    settings: {
      foreground: color.green,
    },
  },
  {
    name: 'support.constant.property-value.scss',
    scope:
      'support.constant.property-value.scss,support.constant.property-value.css',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'css color standard name',
    scope:
      'support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'css comma',
    scope: 'punctuation.separator.list.comma.css',
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: 'css attribute-name.id',
    scope: 'support.constant.color.w3c-standard-color-name.css',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'css property-name',
    scope: 'support.type.vendored.property-name.css',
    settings: {
      foreground: color.green,
    },
  },
  {
    name: 'js/ts template-expression',
    scope:
      'punctuation.definition.template-expression.begin,punctuation.definition.template-expression.end',
    settings: {
      foreground: color.red,
    },
  },
  {
    name: 'js/ts module',
    scope:
      'support.module.node,support.type.object.module,support.module.node',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'js variable readwrite',
    scope:
      'variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node',
    settings: {
      foreground: color.red,
    },
  },
  {
    name: 'comment',
    scope: 'comment.line.double-slash,comment.block.documentation',
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    name: 'js/ts json',
    scope: 'support.constant.json',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'js/ts Keyword',
    scope:
      'keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.ternary',
    settings: {
      foreground: color.pink,
    },
  },
  {
    name: 'js/ts console',
    scope: 'support.type.object.console',
    settings: {
      foreground: color.red,
    },
  },
  {
    name: 'js/ts support.variable.property.process',
    scope: 'support.variable.property.process',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'js console function',
    scope: 'entity.name.function,support.function.console',
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: 'js operator',
    scope: 'keyword.operator',
    settings: {
      foreground: color.green,
    },
  },
  {
    name: 'js dom',
    scope: 'support.type.object.dom',
    settings: {
      foreground: color.green,
    },
  },
  {
    name: 'js dom variable',
    scope: 'support.variable.dom,support.variable.property.dom',
    settings: {
      foreground: color.red,
    },
  },
  {
    name: 'keyword.operator',
    scope: [
      'keyword.operator.arithmetic',
      'keyword.operator.comparison',
      'keyword.operator',
      'punctuation.separator',
      'punctuation.terminator',
    ],
    settings: {
      foreground: color.green,
    },
  },
  {
    name: 'C operator assignment',
    scope:
      'keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c',
    settings: {
      foreground: color.pink + 'ff',
    },
  },
  {
    name: 'C punctuation',
    scope: 'punctuation.separator.delimiter.c',
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: 'C type posix-reserved',
    scope: 'support.type.posix-reserved.c',
    settings: {
      foreground: color.green,
    },
  },
  {
    name: 'keyword.operator.sizeof.c',
    scope: 'keyword.operator.sizeof.c',
    settings: {
      foreground: color.pink,
    },
  },
  {
    name: 'python parameter',
    scope: 'variable.parameter.function.language.python',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'python type',
    scope: 'support.type.python',
    settings: {
      foreground: color.green,
    },
  },
  {
    name: 'python logical',
    scope: 'keyword.operator.logical.python',
    settings: {
      foreground: color.pink,
    },
  },
  {
    name: 'meta.function-call.arguments.python',
    scope: 'meta.function-call.arguments.python',
    settings: {
      foreground: color.red,
    },
  },
  {
    name: 'meta.function-call.python',
    scope: 'meta.function-call.python',
    settings: {
      foreground: color.red,
    },
  },
  {
    name: 'pyCs',
    scope: 'variable.parameter.function.python',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'python block',
    scope: [
      'punctuation.definition.arguments.begin.python',
      'punctuation.definition.arguments.end.python',
      'punctuation.definition.list.begin.python',
      'punctuation.definition.list.end.python',
      'meta.function-call.arguments.python',
    ],
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: 'python function-call.generic',
    scope: 'meta.function-call.generic.python',
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: 'python placeholder reset to normal string',
    scope: 'constant.character.format.placeholder.other.python',
    settings: {
      foreground: color.teal,
    },
  },
  {
    name: 'Delimiters',
    scope: 'none',
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: 'Operators',
    scope: 'keyword.operator',
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: 'Keywords',
    scope: 'keyword',
    settings: {
      foreground: color.pink,
    },
  },
  {
    name: 'Variables',
    scope: 'variable',
    settings: {
      foreground: color.red,
    },
  },
  {
    name: 'Java Variables',
    scope: 'token.variable.parameter.java',
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: 'Java Imports',
    scope: 'import.storage.java',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'Packages',
    scope: 'token.package.keyword',
    settings: {
      foreground: color.pink,
    },
  },
  {
    name: 'Packages',
    scope: 'token.package',
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: 'Functions',
    scope:
      'entity.name.function, meta.require, support.function.any-method',
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: 'Classes',
    scope: 'entity.name.type.namespace',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'Classes',
    scope: 'support.class, entity.name.type.class',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'Class name',
    scope: 'entity.name.class.identifier.namespace.type',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'Class name',
    scope: 'entity.name.class',
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: 'Type Name',
    scope: 'entity.name.type',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'Keyword Control',
    scope: 'keyword.control',
    settings: {
      foreground: color.pink,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Control Elements',
    scope: 'control.elements, keyword.operator.less',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'Methods',
    scope: 'keyword.other.special-method',
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: 'Storage',
    scope: 'storage',
    settings: {
      foreground: color.pink,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Storage JS TS',
    scope: 'token.storage',
    settings: {
      foreground: color.pink,
    },
  },
  {
    name: 'Arrow function',
    scope: 'storage.type.function.arrow',
    settings: {
      fontStyle: 'normal',
    },
  },
  {
    name: 'Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void',
    scope:
      'keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void',
    settings: {
      foreground: color.pink,
    },
  },
  {
    name: 'Java Storage',
    scope: 'token.storage.type.java',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'Support',
    scope: 'support.function',
    settings: {
      foreground: color.green,
    },
  },
  {
    name: 'Support type',
    scope: 'support.type.property-name',
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: 'Support type',
    scope: 'support.constant.property-value',
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: 'Support type',
    scope: 'support.constant.font-name',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'Meta tag',
    scope: 'meta.tag',
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: 'Strings, Inherited Class',
    scope: 'string, entity.other.inherited-class',
    settings: {
      foreground: color.teal,
    },
  },
  {
    name: 'Constant other symbol',
    scope: 'constant.other.symbol',
    settings: {
      foreground: color.green,
    },
  },
  {
    name: 'Integers',
    scope: 'constant.numeric',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'Floats',
    scope: 'none',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'Boolean',
    scope: 'none',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'Constants',
    scope: 'constant',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'Constants',
    scope: 'punctuation.definition.constant',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'Tags',
    scope: 'entity.name.tag',
    settings: {
      foreground: color.red,
    },
  },
  {
    name: 'Attributes',
    scope: 'entity.other.attribute-name',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'Attribute IDs',
    scope: 'entity.other.attribute-name.id',
    settings: {
      fontStyle: 'normal',
      foreground: color.blue,
    },
  },
  {
    name: 'Attribute class',
    scope: 'entity.other.attribute-name.class.css',
    settings: {
      fontStyle: 'normal',
      foreground: color.orange,
    },
  },
  {
    name: 'Selector',
    scope: 'meta.selector',
    settings: {
      foreground: color.pink,
    },
  },
  {
    name: 'Values',
    scope: 'none',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'Headings',
    scope: 'markup.heading',
    settings: {
      fontStyle: 'bold',
      foreground: color.red,
    },
  },
  {
    name: 'Headings',
    scope:
      'markup.heading punctuation.definition.heading, entity.name.section',
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: 'Units',
    scope: 'keyword.other.unit',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'Bold',
    scope: 'markup.bold,todo.bold',
    settings: {
      fontStyle: 'bold',
      foreground: color.orange,
    },
  },
  {
    name: 'Bold',
    scope: 'punctuation.definition.bold',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'Italic',
    scope:
      'markup.italic, punctuation.definition.italic,todo.emphasis',
    settings: {
      foreground: color.pink,
    },
  },
  {
    name: 'Italic',
    scope: 'emphasis md',
    settings: {
      foreground: color.pink,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown headings',
    scope: 'entity.name.section.markdown',
    settings: {
      foreground: color.red,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown heading Punctuation Definition',
    scope: 'punctuation.definition.heading.markdown',
    settings: {
      foreground: color.red,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown heading setext',
    scope: 'markup.heading.setext',
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Punctuation Definition Bold',
    scope: 'punctuation.definition.bold.markdown',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Inline Raw',
    scope: 'markup.inline.raw.markdown',
    settings: {
      foreground: color.teal,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Inline Raw',
    scope: 'markup.inline.raw.string.markdown',
    settings: {
      foreground: color.teal,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown List Punctuation Definition',
    scope: 'beginning.punctuation.definition.list.markdown',
    settings: {
      foreground: color.red,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Quote',
    scope: 'markup.quote.markdown',
    settings: {
      fontStyle: 'italic',
      foreground: color.gray,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Punctuation Definition String',
    scope:
      'punctuation.definition.string.begin.markdown,punctuation.definition.string.end.markdown,punctuation.definition.metadata.markdown',
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Punctuation Definition Link',
    scope: 'punctuation.definition.metadata.markdown',
    settings: {
      foreground: color.pink,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Underline Link/Image',
    scope:
      'markup.underline.link.markdown,markup.underline.link.image.markdown',
    settings: {
      foreground: color.pink,
    },
  },
  {
    name: '[VSCODE-CUSTOM] Markdown Link Title/Description',
    scope:
      'string.other.link.title.markdown,string.other.link.description.markdown',
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: 'markup.italic.markdown',
    scope: 'markup.italic.markdown',
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    name: 'markup.bold.markdown',
    scope: 'markup.bold.markdown',
    settings: {
      fontStyle: 'bold',
    },
  },
  {
    name: 'Regular Expressions',
    scope: 'string.regexp',
    settings: {
      foreground: color.green,
    },
  },
  {
    name: 'Escape Characters',
    scope: 'constant.character.escape',
    settings: {
      foreground: color.green,
    },
  },
  {
    name: 'Embedded',
    scope: 'punctuation.section.embedded, variable.interpolation',
    settings: {
      foreground: color.red,
    },
  },
  {
    name: 'Illegal',
    scope: 'invalid.illegal',
    settings: {
      background: color.red,
      foreground: color.lightGray,
    },
  },
  {
    name: 'Broken',
    scope: 'invalid.broken',
    settings: {
      background: color.red,
      foreground: color.lightGray,
    },
  },
  {
    name: 'Deprecated',
    scope: 'invalid.deprecated',
    settings: {
      background: color.orange,
      foreground: color.lightGray,
    },
  },
  {
    name: 'Unimplemented',
    scope: 'invalid.unimplemented',
    settings: {
      background: color.gray,
      foreground: color.lightGray,
    },
  },
  {
    name: 'Source Json Meta Structure Dictionary Json > String Quoted Json',
    scope:
      'source.json meta.structure.dictionary.json > string.quoted.json',
    settings: {
      foreground: color.red,
    },
  },
  {
    name: 'Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String',
    scope:
      'source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string',
    settings: {
      foreground: color.red,
    },
  },
  {
    name: 'Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation',
    scope:
      'source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation',
    settings: {
      foreground: color.teal,
    },
  },
  {
    name: 'Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json',
    scope:
      'source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json',
    settings: {
      foreground: color.green,
    },
  },
  {
    name: '[VSCODE-CUSTOM] JSON Property Name',
    scope: 'support.type.property-name.json',
    settings: {
      foreground: color.red,
    },
  },
  {
    name: '[VSCODE-CUSTOM] JSON Punctuation for Property Name',
    scope: 'support.type.property-name.json punctuation',
    settings: {
      foreground: color.red,
    },
  },
  {
    name: 'laravel blade tag',
    scope:
      'text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade',
    settings: {
      foreground: color.pink,
    },
  },
  {
    name: 'laravel blade @',
    scope:
      'text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade',
    settings: {
      foreground: color.pink,
    },
  },
  {
    name: 'use statement for other classes',
    scope:
      'support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'error suppression',
    scope: 'keyword.operator.error-control.php',
    settings: {
      foreground: color.pink,
    },
  },
  {
    name: 'php instanceof',
    scope: 'keyword.operator.type.php',
    settings: {
      foreground: color.pink,
    },
  },
  {
    name: 'style double quoted array index normal begin',
    scope: 'punctuation.section.array.begin.php',
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: 'style double quoted array index normal end',
    scope: 'punctuation.section.array.end.php',
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: 'php illegal.non-null-typehinted',
    scope: 'invalid.illegal.non-null-typehinted.php',
    settings: {
      foreground: color.red,
    },
  },
  {
    name: 'php types',
    scope:
      'storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'php call-function',
    scope:
      'meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php',
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: 'php function-resets',
    scope: [
      'punctuation.definition.parameters.begin.bracket.round.php',
      'punctuation.definition.parameters.end.bracket.round.php',
      'punctuation.separator.delimiter.php',
      'punctuation.section.scope.begin.php',
      'punctuation.section.scope.end.php',
      'punctuation.terminator.expression.php',
      'punctuation.definition.arguments.begin.bracket.round.php',
      'punctuation.definition.arguments.end.bracket.round.php',
      'punctuation.definition.storage-type.begin.bracket.round.php',
      'punctuation.definition.storage-type.end.bracket.round.php',
      'punctuation.definition.array.begin.bracket.round.php',
      'punctuation.definition.array.end.bracket.round.php',
      'punctuation.definition.begin.bracket.round.php',
      'punctuation.definition.end.bracket.round.php',
      'punctuation.definition.begin.bracket.curly.php',
      'punctuation.definition.end.bracket.curly.php',
      'punctuation.definition.section.switch-block.end.bracket.curly.php',
      'punctuation.definition.section.switch-block.start.bracket.curly.php',
      'punctuation.definition.section.switch-block.begin.bracket.curly.php',
      'punctuation.definition.section.switch-block.end.bracket.curly.php',
    ],
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: 'support php constants',
    scope:
      'support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'php goto',
    scope: 'entity.name.goto-label.php,support.other.php',
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: 'php logical/bitwise operator',
    scope:
      'keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php',
    settings: {
      foreground: color.green,
    },
  },
  {
    name: 'php regexp operator',
    scope: 'keyword.operator.regexp.php',
    settings: {
      foreground: color.pink,
    },
  },
  {
    name: 'php comparison',
    scope: 'keyword.operator.comparison.php',
    settings: {
      foreground: color.green,
    },
  },
  {
    name: 'php dollar sign',
    scope: 'punctuation.definition.variable.php',
    settings: {
      foreground: color.red,
    },
  },
  {
    name: 'php heredoc/nowdoc',
    scope: 'keyword.operator.heredoc.php,keyword.operator.nowdoc.php',
    settings: {
      foreground: color.pink,
    },
  },
  {
    name: 'python function decorator @',
    scope: 'meta.function.decorator.python',
    settings: {
      foreground: color.blue,
    },
  },
  {
    name: 'python function support',
    scope:
      'support.token.decorator.python,meta.function.decorator.identifier.python',
    settings: {
      foreground: color.green,
    },
  },
  {
    name: 'parameter function',
    scope: 'function.parameter',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'parameter function js/ts',
    scope: 'function.parameter',
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: 'brace function',
    scope: 'function.brace',
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: 'parameter function ruby cs',
    scope: 'function.parameter.ruby, function.parameter.cs',
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: 'rgb-value',
    scope: 'rgb-value',
    settings: {
      foreground: color.green,
    },
  },
  {
    name: 'rgb value #',
    scope: 'inline-color-decoration rgb-value',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'rgb value less',
    scope: 'less rgb-value',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'sass selector',
    scope: 'selector.sass',
    settings: {
      foreground: color.red,
    },
  },
  {
    name: 'js ts this',
    scope:
      'var.this,variable.language.this.js,variable.language.this.ts,variable.language.this.jsx,variable.language.this.tsx',
    settings: {
      fontStyle: 'italic',
      foreground: color.orange,
    },
  },
  {
    name: 'ts primitive/builtin types',
    scope:
      'support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx',
    settings: {
      foreground: color.orange,
    },
  },
  {
    name: 'block scope',
    scope: 'block.scope.end,block.scope.begin',
    settings: {
      foreground: color.gray,
    },
  },
  {
    name: 'cs storage type',
    scope: 'storage.type.cs',
    settings: {
      foreground: color.orange + 'ff',
    },
  },
  {
    name: 'cs local variable',
    scope: 'entity.name.variable.local.cs',
    settings: {
      foreground: color.red,
    },
  },
  {
    scope: 'token.info-token',
    settings: {
      foreground: color.blue,
    },
  },
  {
    scope: 'token.warn-token',
    settings: {
      foreground: color.orange,
    },
  },
  {
    scope: 'token.error-token',
    settings: {
      foreground: color.red,
    },
  },
  {
    scope: 'token.debug-token',
    settings: {
      foreground: color.pink,
    },
  },
  {
    scope: 'emphasis',
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    scope: [
      'entity.other.attribute-name.html',
      'entity.other.attribute-name.tag.jade',
      'entity.other.attribute-name.tag.pug',
      'entity.other.attribute-name.cfml',
      'keyword.operator.expression.delete',
      'keyword.other.required.argument.cfml',
      'keyword.other.namespace.php',
      'keyword.other.use.php',
    ],
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    name: 'this.self',
    scope: 'variable.language',
    settings: {
      foreground: color.red,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Parameters',
    scope: 'variable.parameter,entity.other.function-parameter.cfml',
    settings: {
      foreground: color.orange,
      fontStyle: 'italic',
    },
  },
];
