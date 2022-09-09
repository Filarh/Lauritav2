const delay = ms => new Promise(res => setTimeout(res, ms));
let handler = async (m, { conn }) => {
    m.reply(`💌Nombre:
🥥Edad: 
🏙Ciudad: 
💽Info:`)
    await delay(2000);
    m.reply(`Ahí está la ficha de presentación, la 💽Info es completamente opcional n.n`)
}
handler.help = ['kick @user']
handler.tags = ['group']
handler.command = /^(ficha|presentarme|presentacion|\-)$/i
handler.group = true
handler.admin = false
handler.botAdmin = false
handler.rowner = false
export default handler
