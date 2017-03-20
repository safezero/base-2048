const base2048 = require('./')
const chai = require('chai')

chai.should()

const params = {
  english: [
    ['00', 'abandon'],
    ['01', 'ability'],
    ['07ff', 'zoo'],
    ['0800', 'ability abandon'],
    ['3fffff', 'zoo zoo']
  ],
  japanese: [
    ['00', 'あいこくしん'],
    ['01', 'あいさつ'],
    ['07ff', 'われる'],
    ['0800', 'あいさつ あいこくしん'],
    ['3fffff', 'われる われる']
  ],
  french: [
    ['00', 'abaisser'],
    ['01', 'abandon'],
    ['07ff', 'zoologie'],
    ['0800', 'abandon abaisser'],
    ['3fffff', 'zoologie zoologie']
  ],
  italian: [
    ['00', 'abaco'],
    ['01', 'abbaglio'],
    ['07ff', 'zuppa'],
    ['0800', 'abbaglio abaco'],
    ['3fffff', 'zuppa zuppa']
  ],
  spanish: [
    ['00', 'ábaco'],
    ['01', 'abdomen'],
    ['07ff', 'zurdo'],
    ['0800', 'abdomen ábaco'],
    ['3fffff', 'zurdo zurdo']
  ],
  chineseSimplified: [
    ['00', '的'],
    ['01', '一'],
    ['07ff', '歇'],
    ['0800', '一 的'],
    ['3fffff', '歇 歇']
  ],
  chineseTraditional: [
    ['00', '的'],
    ['01', '一'],
    ['07ff', '歇'],
    ['0800', '一 的'],
    ['3fffff', '歇 歇']
  ]
}

describe('base2048', () => {
  Object.keys(params).forEach((language) => {
    describe(language, () => {
      params[language].forEach((param) => {
        const inHex = param[0]
        const inBase2048 = param[1]
        it(`"${inHex}" should encode to "${inBase2048}"`, () => {
          base2048[language].encode(Buffer.from(inHex, 'hex')).should.equal(inBase2048)
        })
        it(`"${inBase2048}" should decode to "${inHex}"`, () => {
          base2048[language].decode(inBase2048).toString('hex').should.equal(inHex)
        })
      })
    })
  })
})
