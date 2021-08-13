let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  let res = await fetch(global.API('https://myhuman.herokuapp.com', '/api/image/darkjokes'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.result) throw 'Err!'
  conn.sendFile(m.chat, json.image, 'darkjoke.png', json.result, m)
}

handler.help = ['darkjoke']
handler.tags = ['image']

handler.command = /^(darkjoke)$/i

handler.group = false

module.exports = handler
