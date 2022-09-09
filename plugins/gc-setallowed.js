import { areJidsSameUser } from '@adiwajshing/baileys'
import fs from 'fs'
let handler = async (m, { conn, text}) => {
let allowed = global.db.data.chats[m.chat].allowedN
try{
allowed = text
global.db.data.chats[m.chat].allowedN = text
m.reply('cambios guardados ' + JSON.stringify(allowed))
}catch{
    m.reply('Ocurrió un error ' + JSON.stringify(allowed))
}
}

handler.help = ['mensagesde @tag']
handler.tags = ['group']
handler.command = /^(setallowed|aggprefijo\-)$/i
handler.group = true
handler.admin = true
handler.botAdmin = false
export default handler