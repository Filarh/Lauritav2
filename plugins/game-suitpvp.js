let timeout = 60000
let poin = 500
let poin_lose = -100
let poin_bot = 200
import sharp from 'sharp'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, text }) => {
conn.suit = conn.suit ? conn.suit : {}
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '*[❗] 𝚃𝙴𝚁𝙼𝙸𝙽𝙰 𝚃𝚄 𝙿𝙰𝚁𝚃𝙸𝙳𝙰 𝙰𝙽𝚃𝙴𝚂 𝙳𝙴 𝙸𝙽𝙲𝙸𝙰𝚁 𝙾𝚃𝚁𝙰*'
let textquien = `*𝙰 𝚀𝚄𝙸𝙴𝙽 𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝙳𝙴𝚂𝙰𝙵𝙸𝙰𝚁? 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰 𝙰 𝚄𝙽𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n${usedPrefix}suit @${global.suittag}`
if (!m.mentionedJid[0]) return m.reply(textquien, m.chat, { mentions: conn.parseMention(textquien)})
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `*[❗] 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝙰 𝙻𝙰 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝙳𝙴𝚂𝙰𝙵𝙸𝙰𝚁 𝙰𝚄𝙽 𝙴𝚂𝚃𝙰 𝙹𝚄𝙶𝙰𝙽𝙳𝙾 𝙾𝚃𝚁𝙰 𝙿𝙰𝚁𝚃𝙸𝙳𝙰, 𝙴𝚂𝙿𝙴𝚁𝙰 𝙰 𝚀𝚄𝙴 𝚃𝙴𝚁𝙼𝙸𝙽𝙴 𝙳𝙴 𝙹𝚄𝙶𝙰𝚁`
let id = 'suit_' + new Date() * 1
let caption = `🎮 𝙶𝙰𝙼𝙴𝚂 - 𝙿𝚅𝙿 - 𝙶𝙰𝙼𝙴𝚂 🎮\n\n—◉ @${m.sender.split`@`[0]} 𝙳𝙴𝚂𝙰𝙵𝙸𝙰 𝙰 @${m.mentionedJid[0].split`@`[0]} 𝙰 𝙴𝙽 𝚄𝙽 𝙿𝚅𝙿 𝙳𝙴 𝙿𝙸𝙴𝙳𝚁𝙰, 𝙿𝙰𝙿𝙴𝙻 𝙾 𝚃𝙸𝙹𝙴𝚁𝙰`.trim()
let footer = `◉ 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 "aceptar" 𝙿𝙰𝚁𝙰 𝙰𝙲𝙴𝙿𝚃𝙰𝚁\n◉ 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 "rechazar" 𝙿𝙰𝚁𝙰 𝚁𝙴𝙲𝙷𝙰𝚉𝙰𝚁`

let p1
let p2

let jic1 = './tmp/' + Math.floor(Math.random() * (9999-2123 +1) +2123) + '.jpeg'
let jic2 = './tmp/' + Math.floor(Math.random() * (9999-2123 +1) +2123) + '.jpeg'


try{
p1 = await conn.profilePictureUrl(m.sender, 'image')
fetch(p1).then(res =>res.body.pipe(fs.createWriteStream(jic1)))
}catch(err){
    jic1 = './media/assets/placeholder.png'
}


try{
p2 = await conn.profilePictureUrl(m.mentionedJid[0], 'image')
fetch(p2).then(res =>res.body.pipe(fs.createWriteStream(jic2)))
}catch(err){
    jic2 = './media/assets/placeholder.png'
}

const delay = ms => new Promise(res => setTimeout(res, ms));
await delay(1000);

const background = './media/assets/baner.png'
const layer1 = jic1
const layer2 = jic2
const layer3 = './media/assets/vslogo.png'
const layer4 = './media/assets/brillo.png'
const layer5 = './media/assets/fade.png'
const layer6 = './media/assets/wm.png'


    
const tl1 = await sharp(layer1).resize(252,243).toBuffer();
const tl2 = await sharp(layer2).resize(252,243).toBuffer();
const tl3 = await sharp(layer3).resize(243,243).toBuffer();
const tl4 = await sharp(layer4).resize(1080,440).toBuffer();
const tl5 = await sharp(layer5).resize(1080,440).toBuffer();
//console.log(tl1)
    try {
      let s1 = await sharp(background).composite([ {input: tl1,top: 98,left: 90,},]).toBuffer();
      let s2 = await sharp(s1).composite([ {input: tl2,top: 98,left: 730,},]).toBuffer();
      let s3 = await sharp(s2).composite([ {input: background,},]).toBuffer();
      let s4 = await sharp(s3).composite([ {input: tl3,top: 98,left: 400,},]).toBuffer();
      let s5 = await sharp(s4).composite([ {input: tl4, blend: 'soft-light',},]).toBuffer();
      let s6 = await sharp(s5).composite([ {input: tl5, blend:'darken',density: 444},]).toBuffer();
      await sharp(s6).composite([ {input: layer6, top: 325, left: 325},]).toFile('./tmp/output.jpg')
      
    } catch (error) {
      console.log(error);
    }



let imgplaygame = `./tmp/output.jpg`
conn.suit[id] = {
chat: await conn.sendButton(m.chat, caption, footer, imgplaygame, [[`Aceptar`], [`Rechazar`]], null, {mentions: conn.parseMention(caption)}),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (conn.suit[id]) conn.reply(m.chat, `[ ⏳ ] 𝚃𝙸𝙴𝙼𝙿𝙾 𝙳𝙴 𝙴𝚂𝙿𝙴𝚁𝙰 𝙵𝙸𝙽𝙰𝙻𝙸𝚉𝙰𝙳𝙾, 𝙴𝙻 𝙿𝚅𝙿 𝚂𝙴 𝙲𝙰𝙽𝙲𝙴𝙻𝙾 𝙿𝙾𝚁 𝙵𝙰𝙻𝚃𝙰 𝙳𝙴 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰`, m)
delete conn.suit[id]
}, timeout), poin, poin_lose, poin_bot, timeout
}}
handler.command = /^pvp|suit(pvp)?$/i
handler.group = true
handler.game = true
export default handler
