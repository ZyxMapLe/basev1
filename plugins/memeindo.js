let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  let res = await fetch(global.API('https://leyscoders-api.herokuapp.com', '/api/memeindo?apikey=dappakntlll'))
  if (!res.ok) throw await res.result()
  let json = await res.json()
  if (!json.result) throw 'Err!'
  conn.sendFile(m.chat, json.result, 'memeindo.png', json.image, m)
}

handler.help = ['memeindo']
handler.tags = ['image']

handler.command = /^(memeindo)$/i

handler.group = false

module.exports = handler
