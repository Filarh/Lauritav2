let timeout = 60000
let poin = 500
let poin_lose = -100
let poin_bot = 200
import sharp from 'sharp'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, text }) => {
conn.suit = conn.suit ? conn.suit : {}
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '*[ā] šš“šš¼šøš½š° šš šæš°šššøš³š° š°š½šš“š š³š“ šøš½š²šøš°š š¾ššš°*'
let textquien = `*š° šššøš“š½ šššøš“šš“š š³š“šš°šµšøš°š? š“ššøššš“šš° š° šš½š° šæš“ššš¾š½š°*\n\n*āā š“š¹š“š¼šæš»š¾:*\n${usedPrefix}suit @${global.suittag}`
if (!m.mentionedJid[0]) return m.reply(textquien, m.chat, { mentions: conn.parseMention(textquien)})
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `*[ā] š»š° šæš“ššš¾š½š° š° š»š° ššš“ šššøš“šš“š š³š“šš°šµšøš°š š°šš½ š“ššš° š¹šš¶š°š½š³š¾ š¾ššš° šæš°šššøš³š°, š“ššæš“šš° š° ššš“ šš“šš¼šøš½š“ š³š“ š¹šš¶š°š`
let id = 'suit_' + new Date() * 1
let caption = `š® š¶š°š¼š“š - šæššæ - š¶š°š¼š“š š®\n\nāā @${m.sender.split`@`[0]} š³š“šš°šµšøš° š° @${m.mentionedJid[0].split`@`[0]} š° š“š½ šš½ šæššæ š³š“ šæšøš“š³šš°, šæš°šæš“š» š¾ ššøš¹š“šš°`.trim()
let footer = `ā š“šš²ššøš±š“ "aceptar" šæš°šš° š°š²š“šæšš°š\nā š“šš²ššøš±š“ "rechazar" šæš°šš° šš“š²š·š°šš°š`

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
if (conn.suit[id]) conn.reply(m.chat, `[ ā³ ] ššøš“š¼šæš¾ š³š“ š“ššæš“šš° šµšøš½š°š»šøšš°š³š¾, š“š» šæššæ šš“ š²š°š½š²š“š»š¾ šæš¾š šµš°š»šš° š³š“ šš“ššæšš“ššš°`, m)
delete conn.suit[id]
}, timeout), poin, poin_lose, poin_bot, timeout
}}
handler.command = /^pvp|suit(pvp)?$/i
handler.group = true
handler.game = true
export default handler
