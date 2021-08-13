let handler = async(m, { conn }) => {
conn.sendFile(m.chat, global.API('LeysCoder', '/api/memeindo', {}, 'APIKEY'), '', 'meme:v',m)
}
handler.help = ['memeindo']
handler.tags = ['image']
handler.command = /^(memeindo)$/i

module.exports = handler
