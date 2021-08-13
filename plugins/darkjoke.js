let fetch = require('node-fetch')

let handler = async (m, { conn }) => {

  let res = `https://myhuman.herokuapp.com/api/image/darkjokes`

  conn.sendFile(m.chat, res, 'darkjoke.jpg', `drag joles`, m, false)

}

handler.help = ['darkjoke']

handler.tags = ['image']



handler.command = /^(darkjoke)$/i



module.exports = handler
