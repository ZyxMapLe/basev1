let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  let res = await fetch(global.API('https://leyscoders-api.herokuapp.com', '/api/memeindo?apikey=dappakntlll'))
  if (!res.ok) throw await res.image()
  let json = await res.json()
  if (!json.image) throw 'Err!'
  conn.sendFile(m.chat, json.image, 'memeindo.png', json.text, m)
}

handler.help = ['memeindo']
handler.tags = ['image']

handler.command = /^(memeindo)$/i

handler.group = false

module.exports = handler
