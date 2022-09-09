import { areJidsSameUser } from '@adiwajshing/baileys'
import fs from 'fs'
let handler = async (m, { conn}) => {
let allowed = global.db.data.chats[m.chat].allowedN
let listallowed = allowed.split(',')
let texto = ''

listallowed.forEach(element => {
    texto += element + '\n'
});
m.reply (`${listallowed.length} prefijos admitidos: \n${texto} si quieres borrar un número tienes que volver a escribir la lista de numeros seguida de una coma usando *.setallowed* ejemplo: 51,52,54...`)
}

handler.help = ['mensagesde @tag']
handler.tags = ['group']
handler.command = /^(allowed|permitidos\-)$/i
handler.group = true
handler.admin = true
handler.botAdmin = false
export default handler