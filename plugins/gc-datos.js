import { areJidsSameUser } from '@adiwajshing/baileys'
import fs from 'fs'
let handler = async (m, { conn}) => {

let user = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let adinfo = ''
let img = null
let addon = ''
try{
    
    const path = './media/presentados/' + user.split('@')[0] + '.jpeg'

        try {
            if (fs.existsSync(path)) {
                img = path
                addon = '🥵 Miren esa belleza 🥵 \n'
            }
        } catch(err) {
           //return m.reply('no hubo bolo' + err)
        }

    if (user.endsWith('@s.whatsapp.net')) {
        if (global.db.data.users[user].rName == undefined || global.db.data.users[user].rName == 'NoRegistrado') return  m.reply(`Creo que ese usuario aún no se ha presentado...`)
        if (global.db.data.users[user].reinfo){
            adinfo ='\n Información🍕: ' + global.db.data.users[user].reinfo
        }
       
             await conn.sendHydrated(m.chat, `${addon}☄${global.db.data.users[user].rName}🌠tiene ${global.db.data.users[user].rAge} años 🥧, y es de ${global.db.data.users[user].rCity}. 🏙 ${adinfo}`, null, img, null, null, null, null, [['💦Owners🤠', `/owner`]], m)
    }
    }catch(e){
        m.reply(`Creo que ese usuario aún no se ha presentado...`)
        
}

}

handler.help = ['mensagesde @tag']
handler.tags = ['group']
handler.command = /^(datos|informacion\-)$/i
handler.group = true
handler.admin = false
handler.botAdmin = false
export default handler
