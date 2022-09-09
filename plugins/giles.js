import fetch from 'node-fetch'
import sharp from 'sharp'
import fs from 'fs'
import ffmpeg from 'fluent-ffmpeg'

let handler = async (m, { conn }) => {
    
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let jic = './tmp/' + Math.floor(Math.random() * (9999-2123 +1) +2123) + '.jpg'

try{
let img = await conn.profilePictureUrl(who, 'image')
fetch(img).then(res =>res.body.pipe(fs.createWriteStream(jic)))
}catch(e){
    return m.reply('Perdona no puedo ver la foto de esta persona :/' +e)
}

let img = await conn.profilePictureUrl(who, 'image')
fetch(img).then(res =>res.body.pipe(fs.createWriteStream(jic)))


await sharp(jic).resize(1000,1400).toFile('./tmp/tmp.jpg')
 await sharp(jic)
    .resize(900,300)
    .blur(20)
    .png()
    .toFile('./tmp/blur.png')

try{
  ffmpeg('./media/assets/base.png')
    .loop(20)
    .duration(10)
    //.videoFilters('fade=in:0:50')
     //.addInput('./assets/news.mp3')
    .input('./tmp/tmp.jpg')
    .input('./tmp/blur.png')
    .input('./media/assets/letrerito.png')
    .input('./media/assets/bottomshadow.png')
    .input('./media/assets/news.mp3')

    .complexFilter([
      {
        filter: 'overlay',
        options: { 
          x: 'if(eq(mod(floor(st(8,t*100)/(W-w)),2),0),mod(ld(8),W-w),W-w-mod(ld(8),W-w))', 
          y: 'if(eq(mod(floor(st(9,t*35)/(H-h)),2),0),mod(ld(9),H-h),H-h-mod(ld(9),H-h))'},
        inputs : "[0:v][1:v]",
        outputs: "tmp"
       },

      {
        filter: 'overlay',
        options: { 
          x: 0, 
          y: 0 },
          inputs: "[tmp][2:v]",
          outputs: "tmp"
      },

      {
        filter: 'overlay',
        options: { 
          x: 'min(-w+(t*w/0.96)\,-20)', 
          y: 50},
          inputs: "[tmp][3:v]",
          outputs: "tmp"
      },

      {
        filter: 'overlay',
        options: { 
          x: 0, 
          y: 1350},
          inputs: "[tmp][2:v]",
          outputs: "tmp"
      },

      {
        filter: 'overlay',
        options: { 
          x: 0, 
          y: 'max(-h+(t*h/2.96)\,485)'},
          inputs: "[tmp][4:v]",
          outputs: "tmp"
      },
    

      {
        filter:'drawtext',
        options:{
         fontfile: './media/assets/fuente2.ttf',
         text:'     SE   LE   HA   VISTO   ENVIANDO \n \n         GENITALES   A   GRUPOS  \n\n                 DE   WHATSAPP \n\n              MUCHO   CUIDADO',
         fontsize:42,
         fontcolor:'#ff7895',
         alpha:"if(lt(t,1),0,if(lt(t,2),(t-1)/1,if(lt(t,4),1,if(lt(t,5),(1-(t-4))/1,0))))",
         x:150,
         y:1300
        },
        inputs : "[tmp]",
        outputs: "tmp"
      },

      {
        filter: 'fade',
        options: { 
          type: 'out', 
          duration: 2,
          start_time: 8},
          inputs: "[tmp]",
          outputs: "tmp"
      },
      
    ])
    .outputOptions(['-map [tmp]', '-map 5:a:0'])
    .output('./tmp/noticia.mp4')
    .on('start', function(commandLine) {
                  console.log('start : ' + commandLine);
      				m.reply('⏳procesando...')
              })
    .on('error', function (er) {
      console.log('error occured: ' + er.message);
    }).on('end', function () {
      conn.sendHydrated(m.chat, null, null, './tmp/noticia.mp4', null, null, null, null, [['🌹OWNER🌹', `/owner`]], m)
    }).run();
  }catch{
    m.reply('perdona me buguee xd, ¿puedes volver a intentarlo?')
  }
}
handler.help = ['gay']
handler.tags = ['maker']
handler.command = /^(funar)$/i
export default handler
