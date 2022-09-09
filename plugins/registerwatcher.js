import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fs from 'fs'

let handler = m => menubar
handler.all = async function (m,{text, conn, usedPrefix}) {

        

        let usuarios = global.db.data.users[m.sender]
        let PromptName = '💌Nombre:'
        let PromptAge = '🥥Edad:'
        let PromptCity = '🏙Ciudad:'
        let PromptInfo = '💽Info:'

        var pa = new RegExp(PromptAge, 'gi');
        var pc = new RegExp(PromptCity, 'gi');
        var pi = new RegExp(PromptInfo, 'gi');

        let exName, exAge, exCity, exInfo, faltante, showprev

        const isGroup = m.chat.endsWith('@g.us')
        const esMist = m.chat.startsWith('593962888416')
        const mistingroup = m.sender == '593962888416@s.whatsapp.net'
        if (isGroup) {
            
                if (m.text.startsWith(PromptName)){
                    //m.reply('intento')

                        let q = m.quoted ? m.quoted : m
                        let mime = (q.msg || q).mimetype || ''
                        let inp = './media/presentados/' + m.sender.split('@')[0] + '.jpeg'
                        if (mime) {
                            if (/image\/(jpe?g|png)/.test(mime)) {
                                console.log('sex')
                                let img = await q.download?.()
                                await fs.promises.writeFile(inp, img)
                            }
                        }    
                        
                            try{
                                
                            exName = m.text.split(PromptName)[1].split(PromptAge)[0]
                            exAge = m.text.split(PromptAge)[1].split(PromptCity)[0]
                            
                            exCity = m.text.split(PromptCity)[1]
                                
                            if (m.text.match(pi)) {
                                exCity = exCity.split(PromptInfo)[0]
                                exInfo = m.text.split(PromptInfo)[1]}

                            showprev = `Tu nombre es: ${exName} Tu edad es: ${exAge} tu ciudad es: ${exCity} y tu info es: ${exInfo}`

                            if(showprev.match(/(undefined|Undefined)/gi)){
                                    if (!m.text.match(pa)) faltante = 'Edad'
                                    if (!m.text.match(pc)) faltante = 'Ciudad'
                                    if (exInfo != undefined) return m.reply("😠 TU FICHA ESTA MAL ESCRITA 😠 Falta " + faltante)
                                    
                            }

                            if (isNaN(exAge)) return m.reply("😠 TU FICHA ESTA MAL ESCRITA 😠 La edad tiene que ser un número pues 😒")
                            if (exAge.length <= 1 || exAge >= 35 || exAge <= 14) return m.reply('hay un problema con tu edad...')
                            if (exCity.length <= 2) return m.reply('hay un problema con el nombre de tu ciudad...')
                            

                        }catch(e){
                            if (!m.text.match(pa)) faltante = 'Edad'
                            if (!m.text.match(pc)) faltante = 'Ciudad'
                            return m.reply("😠 TU FICHA ESTA MAL ESCRITA 😠 Falta " + faltante)
                        }
                        
                            usuarios.rName = exName.split('\n')[0].trim()
                            usuarios.rAge = exAge.split('\n')[0].trim()
                            usuarios.rCity = exCity.trim()
                            usuarios.reinfo = exInfo.trim()
                            usuarios.limit += 100   
                            if (!mime) m.reply('💕 GRACIAS POR PRESENTARTE 💕')
                            if (mime) m.reply('💕 GRACIAS POR PRESENTARTE 💕 \n 🥵 Y CON FOTO UFF 🥵')
                            
                            
                           
                    }
        }
    
return !0
}

export default handler

