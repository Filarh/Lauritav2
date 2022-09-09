import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 100 
global.db.data.users[m.sender].exp += 100

let x = Math.floor(Math.random() * 4);
console.log("UwU al random: " + x)
let vn = './media/UwU.mp3'
if (x == 1){
    vn = './media/UwU.mp3'
}else if(x == 2){
    vn = './media/uwu1.mp3'
}else if(x == 3){
    vn = './media/uwu2.mp3'
}

conn.sendFile(m.chat, vn, 'UwU.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /UwU|uwu|Uwu|uwU|UWU/
handler.command = new RegExp
export default handler


