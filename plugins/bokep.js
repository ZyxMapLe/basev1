let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://waifu.pics/nsfw/waifu`
  conn.sendFile(m.chat, res, 'bokep.webp', m, false)
}
handler.help = ['bokep'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(bokep)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

