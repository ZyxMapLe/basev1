let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
◫ *USER PROFILE*
◈ *Nama :* ${username}
◈ *Umur :* ${registered ? '' + age : ''}
◈ *Exp :* ${exp} - [${max - exp} lagi untuk levelup]
◈ *Tiket :* ${limit} 🎟️
◈ *Level :* ${level}
◈ *Nomor :* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
◈ *Api Whatsapp :* wa.me/${who.split`@`[0]}
◈ *Terdaftar :* ${registered ? 'Yes': 'No'}

❑ *Tools Menu*
⊜ *${usedPrefix}alay <teks>*
⊜ *${usedPrefix}barcode <teks>*
⊜ *${usedPrefix}base64 <teks>*
⊜ *${usedPrefix}binary <teks>*
⊜ *${usedPrefix}calc <angka> (Limit)
⊜ *${usedPrefix}kalk <angka> (Limit)*
⊜ *${usedPrefix}calculator <angka> (Limit)*
⊜ *${usedPrefix}kalkulator <angka> (Limit)*
⊜ *${usedPrefix}caricowok*
⊜ *${usedPrefix}caristicker <query> (Limit)*
⊜ *${usedPrefix}create <nama|nomor> (Limit)*
⊜ *${usedPrefix}cuaca <daerah> (Limit)*
⊜ *${usedPrefix}fetch <url>*
⊜ *${usedPrefix}get <url>*
⊜ *${usedPrefix}url2img <url>*
⊜ *${usedPrefix}ffstalk <id ff>*
⊜ *${usedPrefix}film <query> (Limit)*
⊜ *${usedPrefix}nonton <query> (Limit)*
⊜ *${usedPrefix}font <text> (Limit)*
⊜ *${usedPrefix}styletext <text> (Limit)*
⊜ *${usedPrefix}getsticker*
⊜ *${usedPrefix}getstiker*
⊜ *${usedPrefix}hackweb <judul|desk|wm|url>*
⊜ *${usedPrefix}hash <teks>*
⊜ *${usedPrefix}halah <teks>*
⊜ *${usedPrefix}hilih <teks>*
⊜ *${usedPrefix}huluh <teks>*
⊜ *${usedPrefix}heleh <teks>*
⊜ *${usedPrefix}holoh <teks>*
⊜ *${usedPrefix}huruf <teks>*
⊜ *${usedPrefix}imagetobase64 (caption|reply) (Limit)*
⊜ *${usedPrefix}img2url (Limit)*
⊜ *${usedPrefix}ip <alamat ip>*
⊜ *${usedPrefix}ipcheck <alamat ip>*
⊜ *${usedPrefix}ipcek <alamat ip>*
⊜ *${usedPrefix}jadwaltv <channel>*
⊜ *${usedPrefix}kbbi <query> (Limit)*
⊜ *${usedPrefix}peta <wilayah> (Limit)*
⊜ *${usedPrefix}lokasi <wilayah> (Limit)*
⊜ *${usedPrefix}maps <wilayah> (Limit)*
⊜ *${usedPrefix}mlstalk <id ml>*
⊜ *${usedPrefix}modapk*
⊜ *${usedPrefix}nickff*
⊜ *${usedPrefix}ninja <nama>*
⊜ *${usedPrefix}nonton <film> (Limit)*
⊜ *${usedPrefix}nsfwcek (reply/caption) (Limit)*
⊜ *${usedPrefix}ocr (Limit)*
⊜ *${usedPrefix}pastebin <teks> (Limit)*
⊜ *${usedPrefix}profile*
⊜ *${usedPrefix}purba <teks>*
⊜ *${usedPrefix}readmore <teks>|<teks>*
⊜ *${usedPrefix}spoiler <teks>|<teks>*
⊜ *${usedPrefix}readqr (Limit)*
⊜ *${usedPrefix}repeat <teks> (Limit)*
⊜ *${usedPrefix}repeat2 <teks> (Limit)*
⊜ *${usedPrefix}reverse <teks>*
⊜ *${usedPrefix}save <nama>*
⊜ *${usedPrefix}say <teks>*
⊜ *${usedPrefix}sholat <daerah>*
⊜ *${usedPrefix}sid <link> (Limit)*
⊜ *${usedPrefix}short <link> (Limit)*
⊜ *${usedPrefix}ss <url>*
⊜ *${usedPrefix}ssf <url>*
⊜ *${usedPrefix}ssweb <url>*
⊜ *${usedPrefix}surah <no surat>*
⊜ *${usedPrefix}teruskan <teks>*
⊜ *${usedPrefix}tinyurl <link> (Limit)*
⊜ *${usedPrefix}short2 <link> (Limit)*
⊜ *${usedPrefix}upload (caption|reply) (Limit)*
⊜ *${usedPrefix}virvid*
⊜ *${usedPrefix}waktu <daerah>*
⊜ *${usedPrefix}wiki <query> (Limit)*

⊚ *Thanks To:*
❥ *Farrell Athar R (Author)*
❥ *Lolhuman Api Provider*
❥ *X-Team Api Provider*
❥ *Zeks Api Provider*
❥ *VHTears Api Provider*
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['toolsmenu']
handler.tags = ['jj']
handler.command = /^(toolsmenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

