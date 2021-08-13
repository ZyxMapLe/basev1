let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {

   response = args.join(' ')

  if (!args) throw 'Masukkan Parameter'

  m.reply('Sedang Diproses...')

  let res = `https://hansxd.nasihosting.com/serti1/img.php?nama=${response}`

  conn.sendFile(m.chat, res, 'Tololserti.jpg', `Nih kak`, m, false)

}

handler.help = ['tololserti'].map(v => v + ' <teks>')

handler.tags = ['sticker']



handler.command = /^(tololserti)$/i



module.exports = handler
