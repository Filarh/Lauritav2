import fetch from 'node-fetch'
import fs from 'fs'
import gtts from 'node-gtts'
import { readFileSync, unlinkSync } from 'fs'
import { join } from 'path'
const dir = './media/Respuestas/'
const files = fs.readdirSync(dir)
let chosenFile 
let handler = m => menubar
let crand 
let restts
import { createRequire } from 'module';
import { brotliDecompressSync } from 'zlib'
const require = createRequire(import.meta.url);
function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
let respuestas
handler.all = async function (m) {
  
    console.log("IMBECIL " + global.db.data.users[m.sender].callada)
    
    if (!global.db.data.users[m.sender].callada) {
        chosenFile = files[Math.floor(Math.random() * files.length)] 
        crand = Math.floor(Math.random() * 6)
        
        respuestas = pickRandom([ "😘", "😍", "💕", "😎", "🙌", "⭐", "👻", "🔥",
            "que chch hablas xd",
            "es que no te entiendo jaja",
            "y eso que tiene que ver con Ultralord?",
            "estás bien demente jaja",
            "estás loquito xd",
            "estás loquita jaja",
            "pura verga que hablas 🤣",
            "bueno y? 🤔",
            "Déjalo así :v",
            "ya pues, chupalo 🤰",
            "y a mi q chcha?",
            "siento ser tan estúpida",
            "mira no estoy de genio si?",
            "QUE NO TE ENTIENDO",
            "escribe bien chuchaa",
            "no comprendo",
            "no se que tiro",
            "si bueno te gusta el encebollado? 🐟",
            "No nada v:",
            "¿eres o te haces?🤦‍♀️",
            "hablas pura mrd",
            "ay mi amor dices cosas muy locas",
            "JJAJAJA, tu madre.",
            "anda a llorar pues.",
            "y si no quiero",
            "si bueno sacate la verga que te la voy a chupar",
            "si bueno a ver esas tetotas.",
            "ya ya, ahora enseña las nalgas.",
            "no es mi mejor día",
            "Riquísimo pues.",
            "Precio",
            "Lugar y fecha. ctmre ⏱",
            "te gusta el pepino XD",
            "mira, ya estoy harta de esta mrd de responder tantos mensajes",
            "NO LO SE, la verdad solo quiero morirme😿",
            "a la hora que quieras mi vida",
            "te das cuenta de que tu huevada no tiene sentido, ¿cierto?",
            "De unaaaa!!",
            "No puedo tengo que masturbarme",
            "me voy a masturbar chau",
            "podría ser",
            "ah oc",
            "si bueno, ¿quién tiene hambre?",
            "Precisamente.",
            `Así es mi ${conn.getName(m.sender)}, así es`,
            "ya mas claro",
            "bueno ya, que haces?",
            "Que. ¿es chiste tu huevada?",
            "¿me río o como? 🤡",
            "ya pues cómo es la wbda",
            "Ni idea la verdad",


        ])
        const isGroup = m.chat.endsWith('@g.us')
        const esMist = m.chat.startsWith('593962888416')
        const mistingroup = m.sender == '593962888416@s.whatsapp.net'
        if (!isGroup || mistingroup) {
            if (esMist){
                let o_res = await fetch(`https://simsimi.info/api/?text=${m.text}&lc=es`) 
                let o_json = await o_res.json()
                m.reply(o_json.message)
            }
            let res = await fetch(`https://api.simsimi.net/v2/?text=${m.text}&lc=es`)
            let json = await res.json()
            console.log(chosenFile+ " Respuesta random: " + crand + "de: " + json.success)
            if (json.success == "please enter the text - text=hello"){
                if(crand < 4 ){
                    conn.sendFile(m.chat, dir + chosenFile, null, { asSticker: true }) 
                }else{
                    json.success = respuestas
                    m.reply(json.success)
                }
                
            }else if(json.success == "No sé lo qué estás diciendo. Por favor enseñame."){
                if (crand == 0 || crand == 1 || crand == 2){
                    json.success = respuestas
                    m.reply(json.success)
                }else if(crand == 3){
                    json.success = respuestas
                    restts = await tts(json.success, 'es')
                    conn.sendFile(m.chat, restts, 'tts.opus', null, m, true)
                }else{
                    conn.sendFile(m.chat, dir + chosenFile, null, { asSticker: true })
                }
            
            }else{
                if(crand < 5 ){
                    m.reply(json.success) 
                }else{
                    restts = await tts(json.success, 'es')
                    conn.sendFile(m.chat, restts, 'tts.opus', null, m, true)
                }
                
            }
        }
    }
return !0
}

export default handler

function tts(text, lang = 'es') {
    console.log(lang, text)
    return new Promise((resolve, reject) => {
    try {
    let tts = gtts(lang)
    let filePath = join(global.__dirname(import.meta.url), '../tmp', (1 * new Date) + '.wav')
    tts.save(filePath, text, () => {
    resolve(readFileSync(filePath))
    unlinkSync(filePath)
    })
    } catch (e) { reject(e) }
})}
