let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   text = args.join(' ')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(`https://api.xteam.xyz/textpro/realisticcloud?text=${text}&APIKEY=MIMINETBOT`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.res, realisticcloud.jpg, `Nih Kak`, m, false)
}
handler.help = ['realisticcloud'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(realisticcloud)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler

