import fs from "fs"
let handler = m => m

let x = 0
let xd = `./media/stickers de XD/${x}.webp`
handler.all = async function (m) {
if (/^XD$|^XDD$/i.test(m.text)) {
x = Math.floor(Math.random() * 23);
xd = `./media/stickers de XD/${x}.webp`    
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendFile(m.chat, xd, null, { asSticker: true })
}
return !0
}
export default handler

