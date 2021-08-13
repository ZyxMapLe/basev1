let axios = require("axios");
let handler = async(m, { conn, text }) => {

   await m.reply('*[❗] WAIT, Tunggu Sebentar*') 
      axios.get(`https://arugaz.herokuapp.com/api/indohot`).then((res) => {
    let hasil = `➡ ️Judul : ${res.data.result.judul}\n➡ Durasi : ${res.data.result.durasi}\n➡️ Genre : ${res.data.result.genre}\nLink Download⤵\n\n${res.data.result.url}️️`
      
    conn.reply(m.chat, hasil, m)
    })
}
handler.help = ['indohot']
handler.tags = ['anime']
handler.command = /^(indohot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler 