base-2048
====

JavaScript component to compute base 2048 encodings.

Install
-------

    npm i --save base-2048

Languages
-------
1. `chineseSimplified`
2. `chineseTraditional`
3. `english`
4. `french`
5. `italian`
6. `japanese`
7. `spanish`

API
---

### encode(input)

`input` must be a [Buffer](https://nodejs.org/api/buffer.html) or an `Array`. It returns a `string`.

**example**:

```js
const base2048 = require('base2048')

const bytes = Buffer.from('003c176e659bea0f29a3e9bf7880c112b1b31b4dc826268187', 'hex')

base2048.chineseSimplified.encode(bytes)
// => 的 和 暗 磁 集 捐 区 纱 悟 饿 表 瓶 恩 脚 太 亏 质 匀 容

base2048.chineseTraditional.encode(bytes)
// => 的 和 暗 磁 集 捐 區 紗 悟 餓 表 瓶 恩 腳 太 虧 質 勻 容

base2048.english.encode(bytes)
// => abandon abstract load hover coast whisper bundle olive visit worth avoid scissors night holiday custom symptom basic old couch

base2048.french.encode(bytes)
// => abaisser aboyer insecte fureur cercle vidéo bistouri mérite utile volaille appuyer prétexte manquant frénésie concert siffler asservir mercredi chute

base2048.italian.encode(bytes)
// => abaco abrogato monsone lacuna citrico vincitore bisturi parvenza vanitoso zattera arazzo satira ottagono irrorare dado stiletto asola partire continuo

base2048.japanese.encode(bytes)
// => あいこくしん あける そんぞく すうせん かまぼこ るいじ えんとつ つとめる よそく ろせん いよく はえる ちひょう しんちく きみつ ほきょう うきわ つつむ きくらげ

base2048.spanish.encode(bytes)
// => ábaco abrazo loción hueco catre vil bicho nevera vajilla yacer aprender rama mula hocico colmo sudor arroz nevar chuleta
```


### decode(input)

`input` must be a base-2048 encoded string. Returns a [Buffer](https://nodejs.org/api/buffer.html).

**example**:

```js
const base2048 = require('base-2048')

const address = '的 和 暗 磁 集 捐 区 纱 悟 饿 表 瓶 恩 脚 太 亏 质 匀 容'
const bytes = base2048.chineseSimplified.decode(address).toString('hex')
// => 003c176e659bea0f29a3e9bf7880c112b1b31b4dc826268187
```
