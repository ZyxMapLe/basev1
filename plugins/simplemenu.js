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

❑ *Simple Menu*
⊜ *${usedPrefix}xpmenu*
⊜ *${usedPrefix}hadiahmenu*
⊜ *${usedPrefix}dewasamenu*
⊜ *${usedPrefix}groupmenu*
⊜ *${usedPrefix}creatormenu*
⊜ *${usedPrefix}editormenu*
⊜ *${usedPrefix}convertermenu*
⊜ *${usedPrefix}funnmenu*
⊜ *${usedPrefix}vidiomenu*
⊜ *${usedPrefix}imagemenu*
⊜ *${usedPrefix}soundmenu*
⊜ *${usedPrefix}randommenu*
⊜ *${usedPrefix}primbonmenu*
⊜ *${usedPrefix} educationmenu*
⊜ *${usedPrefix}musicmenu*
⊜ *${usedPrefix}simimenu*
⊜ *${usedPrefix}kerangmenu*
⊜ *${usedPrefix}downloadermenu*
⊜ *${usedPrefix}newsmenu*
⊜ *${usedPrefix}spamermenu*
⊜ *${usedPrefix}searchmenu*
⊜ *${usedPrefix}toolsmenu*
⊜ *${usedPrefix}jadibotmenu*
⊜ *${usedPrefix}premiummenu*
⊜ *${usedPrefix}hostmenu*
⊜ *${usedPrefix}infomenu*

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
handler.help = ['smenu']
handler.tags = ['main']
handler.command = /^(smenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
