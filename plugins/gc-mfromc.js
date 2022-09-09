import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn}) => {
const {zonasegura} = global.db.data.settings[conn.user.jid] || {}   
let users = m.mentionedJid
for (let user of users)
try{
    if (user.endsWith('@s.whatsapp.net')) {
    m.reply(`✨${global.db.data.users[user].name}✨ ha escrito *${global.db.data.users[user].mcount}* mensajes en el grupo! 🥳, no olviden que lo mínimo que se les pide escribir son ${zonasegura} mensajes`)
    }
    }catch(e){
        m.reply(`Creo que ese usuario no ha escrito nada aún...`)
}

}

handler.help = ['mensagesde @tag']
handler.tags = ['group']
handler.command = /^(mfrom|mde|msgde|mensajesde\-)$/i
handler.group = true
handler.admin = false
handler.botAdmin = false
export default handler
