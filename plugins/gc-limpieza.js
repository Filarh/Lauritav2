import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants }) => {
m.reply(`😾🧙‍♀️✨Hora de la limpieza!✨🧙‍♀️😾`)
const {zonasegura} = global.db.data.settings[conn.user.jid] || {}
let kickedUser = []
let data 

for (let mem of participants) {
    data = (await conn.onWhatsApp(mem.id.split('@')[0]))[0] || {}
    console.log(data)
    
    if (data.exists){
        try{
            console.log(mem.id + ": " + global.db.data.users[mem.id].mcount + "<" + zonasegura)
            if (global.db.data.users[mem.id].mcount < zonasegura){
                conn.reply('593962888416@s.whatsapp.net', `cómo lo mínimo para quedarse era ${zonasegura} y los suyos fueron: ${global.db.data.users[mem.id].mcount}... ${conn.getName(mem.id)} se va 😼`, null, null, null, null, null, null, m) 
                console.log("funado el "+mem.id)
                const res = conn.groupParticipantsUpdate(m.chat, [mem.id], 'remove')
                kickedUser.concat(res)
                await delay(1 * 1000)
            }
        }catch(e){
            conn.reply('593962888416@s.whatsapp.net', `cómo lo mínimo para quedarse era ${zonasegura} y los suyos fueron: 0... ${conn.getName(mem.id)} se va 😼`, null, null, null, null, null, null, m) 
            const res = conn.groupParticipantsUpdate(m.chat, [mem.id], 'remove')
            kickedUser.concat(res)
            await delay(1 * 1000)
            console.log("Algunos usuarios no pudieron procesarse correctamente")
            console.log("no puedo por" + e)
        }   
        
    }
}

}
handler.help = ['kick @user']
handler.tags = ['group']
handler.command = /^(limpieza|cleaning|limpiar|\-)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
