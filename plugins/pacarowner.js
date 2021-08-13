let handler = function (m) {
  // this.sendContact(m.chat, '6283144570377', 'Raku Gans', m)
  conn.sendContact(m.chat, '62' , 'gak ada', m)
  conn.reply(m.chat, `Gak Ada Pacar Gua Jomblo:v`, m) 
}
handler.help = ['pacarowner']
handler.tags = ['info']

handler.command = /^(pacarowner)$/i

module.exports = handler
