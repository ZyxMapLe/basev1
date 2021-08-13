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

❑ *Kerang Menu*
⊜ *${usedPrefix}apakah <teks>?*
⊜ *${usedPrefix}apakah <pertanyaan>*
⊜ *${usedPrefix}bisakah <teks>?*
⊜ *${usedPrefix}bisakah <pertanyaan>*
⊜ *${usedPrefix}kapan <text>?*
⊜ *${usedPrefix}kapankah <text>?*
⊜ *${usedPrefix}kapankah <pertanyaan>#
⊜ *${usedPrefix}siapa <pertanyaan>?*
⊜ *${usedPrefix}siapakah <pertanyaan>?*
⊜ *${usedPrefix}siapakah <pertanyaan>*

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
handler.help = ['kerangmenu']
handler.tags = ['jj']
handler.command = /^(kerangmenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

