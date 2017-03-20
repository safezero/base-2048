const basex = require('base-x-array')

const english = require('./words/english')
const japanese = require('./words/japanese')
const french = require('./words/french')
const italian = require('./words/italian')
const spanish = require('./words/spanish')
const chineseTraditional = require('./words/chinese.traditional')
const chineseSimplified = require('./words/chinese.simplified')

module.exports = {
  english: basex(english),
  japanese: basex(japanese),
  french: basex(french),
  italian: basex(italian),
  spanish: basex(spanish),
  chineseTraditional: basex(chineseTraditional),
  chineseSimplified: basex(chineseSimplified)
}
