let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {

   response = args.join(' ')

  if (!args) throw 'Masukkan Parameter'

  m.reply('Sedang Diproses...')

  let res = `https://sertiojanganzapi.nasihosting.com/serti/serti1/img.php?nama=${response}`

  conn.sendFile(m.chat, res, 'FFSerti.jpg', `Nih kak`, m, false)

}

handler.help = ['ffserti'].map(v => v + ' <teks>')

handler.tags = ['sticker']



handler.command = /^(ffserti)$/i



module.exports = handler

