let handler = async (m, {conn}) => {

if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 100 
global.db.data.users[m.sender].exp += 100
  
let vn = './media/ya pues mamamela.mp3'
conn.sendFile(m.chat, vn, 'ya pues mamamela.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
        for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                console.log(jid)
            let data = (await conn.onWhatsApp(jid))[0] || {}
            if (data.exists)
                m.reply(`*[ 🐁 ALERTA 𝙳𝙴 BUITRE 🦅 ]*`.trim(), data.jid)
        }
}

handler.customPrefix = /Hermosa|hermosa|Q hermosura|Señorita que bonita|obra de arte|que hermosura|ola bb|hola bebe|hola princesa|mamasita rica|cosita preciosa|alguien para pv|corta de patas|para pv|Alguien pv|Alguna chica|alguna chica para privado|alguna chica para priv|busco chica|alguna chica|escriban|manden pv|alguien para priv|ig de la minita|Ig de la minita|Hola alguien para pv|hola alguien pv|ola alguien pv|hola quien para pv|Hola alguien pv|Holi, alguien priv|busco novia|al privado|Al privado|puedo pv|se puede pv/i
handler.command = new RegExp
export default handler
