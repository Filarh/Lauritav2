let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*β€ πΆπππππ πππππππππ πππ π±ππ:*
*1.-* Ecuakong
`.trim(), wm, media, [['π πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π» π', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
