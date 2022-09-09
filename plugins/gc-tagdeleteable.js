import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
const {zonasegura} = global.db.data.settings[conn.user.jid] || {}
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}

let teks = `*⺀Es muy probable que estos usuarios sean eliminados por inactividad⺀*`
let data 

for (let mem of participants) {
    data = (await conn.onWhatsApp(mem.id.split('@')[0]))[0] || {}
    console.log(data)
    
    if (data.exists){
        try{
            console.log(global.db.data.users[mem.id].mcount + "<" + zonasegura)
            if (global.db.data.users[mem.id].mcount < zonasegura){
                console.log("funado el "+mem.id)
                teks += `┣➥ @${mem.id.split('@')[0]}\n`
            }else{
                console.log("no puedo")
            }
        }catch(e){
            console.log("Algunos usuarios no pudieron procesarse correctamente")
            teks += `┣➥ @${mem.id.split('@')[0]}\n`
        }   
        
    }else{
        teks += `┣➥ @${mem.id.split('@')[0]}\n`
    }
    

}
        teks += `*Laurita - By Mist*`
        conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
    
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(deleteable|muertos|inactivos)$/i
handler.admin = true
handler.group = true
export default handler
