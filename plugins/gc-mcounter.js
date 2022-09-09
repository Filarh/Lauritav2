let banrisk = "Bajito🟢";

let handler = async (m,{conn}) => {
const {zonasegura} = global.db.data.settings[conn.user.jid] || {}
console.log(zonasegura)

if (global.db.data.users[m.sender].mcount < zonasegura ) {
    banrisk = "Alto 🔴"
}
if(global.db.data.users[m.sender].mcount > zonasegura ) {
    banrisk = "Bajísimo, puedes quedarte tranqui 🟢"
}
if (global.db.data.users[m.sender].mcount > zonasegura && global.db.data.users[m.sender].mcount < zonasegura+200) {
    banrisk = "Medio 🟡"
}
m.reply(`✨${m.name}✨ tus mensajes totales son: ${global.db.data.users[m.sender].mcount} \n ☠Riesgo de BAN☠: ${banrisk}`)

}

handler.help = ['mis mensajes']
handler.tags = ['group']
handler.command = /^(mismensajes|contador|mcount|counter\-)$/i
handler.group = true
handler.admin = false
handler.botAdmin = false
export default handler
