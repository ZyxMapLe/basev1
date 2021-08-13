const sewabot = () => { 
	return `
*OPEN JASA SEWA BOT*

Sewa Seminggu : 10k
Sewa Sebulan : 25k

*Payment :*
_Pulsa Dan Dana_

Minat?PC
wa.me/6285807231447
`
}
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewa)$/i

module.exports = handler