import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fs from 'fs'

let handler = async (m, { conn, text } ) => {  

        m.reply('tula')

        let usuarios = global.db.data.users[m.mentionedJid]
        let PromptName = '💌Nombre:'
        let PromptAge = '🥥Edad:'
        let PromptCity = '🏙Ciudad:'
        let PromptInfo = '💽Info:'
        let userstr = m.mentionedJid.toString()
        var pa = new RegExp(PromptAge, 'gi');
        var pc = new RegExp(PromptCity, 'gi');
        var pi = new RegExp(PromptInfo, 'gi');

        let exName, exAge, exCity, exInfo, faltante, showprev

        const isGroup = m.chat.endsWith('@g.us')
        const esMist = m.chat.startsWith('593962888416')
        const mistingroup = m.sender == '593962888416@s.whatsapp.net'
       
                    //m.reply('intento')

                        let q = m.quoted ? m.quoted : m
                        let mime = (q.msg || q).mimetype || ''
                        let inp = './media/presentados/' + userstr.split('@')[0] + '.jpeg'
                        if (mime) {
                            if (/image\/(jpe?g|png)/.test(mime)) {
                                console.log('sex')
                                let img = await q.download?.()
                                await fs.promises.writeFile(inp, img)
                            }
                        }    
                        
                            try{
                                
                            exName = text.split(PromptName)[1].split(PromptAge)[0]
                            exAge = text.split(PromptAge)[1].split(PromptCity)[0]
                            
                            exCity = text.split(PromptCity)[1]
                                
                            if (text.match(pi)) {
                                exCity = exCity.split(PromptInfo)[0]
                                exInfo = text.split(PromptInfo)[1]}

                            showprev = `Tu nombre es: ${exName} Tu edad es: ${exAge} tu ciudad es: ${exCity} y tu info es: ${exInfo}`

                            if(showprev.match(/(undefined|Undefined)/gi)){
                                    if (!text.match(pa)) faltante = 'Edad'
                                    if (!text.match(pc)) faltante = 'Ciudad'
                                    if (exInfo != undefined) return m.reply("😠 TU FICHA ESTA MAL ESCRITA 😠 Falta " + faltante)
                                    
                            }

                            if (isNaN(exAge)) return m.reply("😠 TU FICHA ESTA MAL ESCRITA 😠 La edad tiene que ser un número pues 😒")
                            if (exAge.length <= 1) return m.reply('hay un problema con tu edad...')
                            if (exCity.length <= 2) return m.reply('hay un problema con el nombre de tu ciudad...')
                            

                        }catch(e){
                            if (!text.match(pa)) faltante = 'Edad'
                            if (!text.match(pc)) faltante = 'Ciudad'
                            return m.reply("😠 TU FICHA ESTA MAL ESCRITA 😠 Falta " + faltante)
                        }
                        
                            usuarios.rName = exName.split('\n')[0].trim()
                            usuarios.rAge = exAge.split('\n')[0].trim()
                            usuarios.rCity = exCity.trim()
                            usuarios.reinfo = exInfo.trim()
                            usuarios.limit += 100   
                            if (!mime) m.reply('💕 Gracias por ayudar a presentar a los demás :3 💕')
                            if (mime) m.reply('💕 Gracias por ayudar a presentar a los demás :3 💕 \n 🥵 Y CON FOTO UFF 🥵')
                       
return !0
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(fadd|manually|fagg|\-)$/i
handler.rowner = true
handler.group = true
handler.admin = false
export default handler

