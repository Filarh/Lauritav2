import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chats) { 
conn.sendButton(id, `πΒΏTe gusta hablar conmigo?π puedes hablar con alguien real
anΓ³nimamente sin salir de whatsapp gracias a una de mis funciones π c:
`, null, null, [['πINTENTARLOπ', '.start']], false, null)}
m.reply(`*[βππππβ] πΌπ΄π½ππ°πΉπ΄ π΄π½ππΈπ°π³πΎ π° ${chats.length} π²π·π°ππ πΏππΈππ°π³πΎπ*\n\n*ππππ: π΄π πΏπΎππΈπ±π»π΄ πππ΄ ππ΄π½πΆπ° π΅π°π»π»πΎπ π΄πππ΄ π²πΎπΌπ°π½π³πΎ π π½πΎ ππ΄ π΄π½ππΈπ΄ π° ππΎπ³πΎπ π»πΎπ π²π·π°ππ, π³πΈππ²ππ»πΏπ΄ πΏπΎπ π΄π» πΌπΎπΌπ΄π½ππΎ*`)
}
handler.help = ['sugest', 'sanom'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(sugest?|sug(hats?)?)$/i
handler.rowner = true
export default handler
