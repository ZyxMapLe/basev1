function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '6283144570377', 'RakuChan', m)
let stc = conn.sendContact(m.chat, '62895378264836', 'RamaGanz', m)
  conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*ZyxMapLe B O T*', 'status@broadcast')
}
handler.customPrefix = ['Developer *R A - B O T z*']
handler.command = new RegExp

module.exports = handler