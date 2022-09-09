import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 20
global.db.data.users[m.sender].exp += 30
  
let vn = './media/me la saco.mp3'
conn.sendFile(m.chat, vn, 'me la saco.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /con permiso|me las saco|me la saco|pilas chao|con permiso me la saco|chau|chao|Chao|Me la saco|Me las saco/ 
handler.command = new RegExp
export default handler
