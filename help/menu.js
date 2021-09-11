//-----Menu del bot-----
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

const menu = (tanggal, jam, pushname, sender, Fg, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process) => { 
  if (isGroupAdmins){
    admin = "Admin del Grupo"
  } else if (!isGroupAdmins){
    admin = "Miembro del grupo"
  }
		if (isGroup) return `▢ ${tanggal()}
▢ Hora ${jam} 

  ≡ *INFORMACION*
✦▰▰▰ •⊰ *USUARIO* ⊱• ▰▰▰
▋❦❯ Nombre : *${pushname}*
▋❦❯ Numero : *${sender.split("@")[0]}*
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰
  ≡  *꧁❦︎⃢⃝✞︎𝐉𝐡𝐨𝐞𝐥♡︎✞︎⃢⃝❦︎꧂ 👨🏻‍💻*
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰
▋❦❯ ꧁❦︎⃢⃝✞︎𝐉𝐡𝐨𝐞𝐥♡︎✞︎⃢⃝❦︎꧂
▋❦❯ *Grupo* :
▋❦❯*${groupMetadata.subject}*
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰
✦▰▰▰▰ •⊰ *GRUPO* ⊱• ▰▰▰▰
▋❦❯ *${groupMetadata.subject}*
▋❦❯ *Estado* : ${admin}
▋❦❯ *Miembros del grupo* : _${groupMetadata.participants.length}_
▋❦❯ *Admins del Grupo* : _${groupAdmins.length}_
▋❦❯ *Welcome* : _${Welcome_}_
▋❦❯ *AntilinkWha* : _${AntiLink_}_
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰
  ≡ *LISTA DE MENUS*
✦▰▰▰▰ •⊰LISTA⊱• ▰▰▰▰
▋❦❯ *${prefix}menu 1*
▋❦❯ *${prefix}menu 2*
▋❦❯ *${prefix}menu group*
▋❦❯ *${prefix}menu owner*
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰
✦▰▰▰▰ •⊰ *ACERCA DE DYLUX* ⊱• ▰▰▰▰
▋❦❯ *${prefix}Bot*
▋❦❯ *${prefix}Info*
▋❦❯ *${prefix}Creador*
▋❦❯ *${prefix}Ping*
▋❦❯ *${prefix}Runtime*
▋❦❯ *${prefix}Report*
▋❦❯ *${prefix}Banlist*
▋❦❯ *${prefix}Blocklist*
▋❦❯ *${prefix}Soporte*
▋❦❯ *${prefix}Install*
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰
  ≡  ꧁❦︎⃢⃝✞︎𝐉𝐡𝐨𝐞𝐥♡︎✞︎⃢⃝❦︎꧂ 👨🏻‍💻 
        *Owner*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰`

else if (!isGroup) return`▢ ${tanggal()}
▢ Jam ${jam} 

  ≡ *INFORMACION*
✦▰▰▰▰ •⊰ *USUARIO* ⊱• ▰▰▰▰
▋❦❯ Nombre : *${pushname}*
▋❦❯ Numero : *${sender.split("@")[0]}*
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰
  ≡  *꧁❦︎⃢⃝✞︎𝐉𝐡𝐨𝐞𝐥♡︎✞︎⃢⃝❦︎꧂ 👨🏻‍💻*
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰
▋❦❯ ꧁❦︎⃢⃝✞︎𝐉𝐡𝐨𝐞𝐥♡︎✞︎⃢⃝❦︎꧂
▋❦❯ *Grupo* :
▋❦❯ *${groupMetadata.subject}*
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰
✦▰▰▰▰ •⊰ *BOT* ⊱• ▰▰▰▰
▋❦❯ Nombre: *${Lxa.user.name}*
▋❦❯ Version Bot : 3.8.3
▋❦❯ Velocidad : ${process.uptime()}
▋❦❯ Tiempo Ejecucion : *${kyun(uptime)}*
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰
  ≡ *LISTA DE MENUS*
✦▰▰▰▰ •⊰ *LISTA* ⊱• ▰▰▰▰
▋❦❯ *${prefix}menu 1*
▋❦❯ *${prefix}menu 2*
▋❦❯ *${prefix}menu group*
▋❦❯ *${prefix}menu owner*
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰
✦▰▰▰▰ •⊰ *ACERCA DE DYLUX* ⊱• ▰▰▰▰
▋❦❯ *${prefix}Bot*
▋❦❯ *${prefix}Info*
▋❦❯ *${prefix}Creador*
▋❦❯ *${prefix}Ping*
▋❦❯ *${prefix}Runtime*
▋❦❯ *${prefix}Report*
▋❦❯ *${prefix}Banlist*
▋❦❯ *${prefix}Blocklist*
▋❦❯ *${prefix}Soporte*
▋❦❯ *${prefix}Install*
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰
  ≡  ꧁❦︎⃢⃝✞︎𝐉𝐡𝐨𝐞𝐥♡︎✞︎⃢⃝❦︎꧂ 👨🏻‍💻 
         *Owner*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰`
}

//---
const menu1 = (prefix, tanggal, jam) => {
    return `▢ ${tanggal()}
▢ Hora ${jam}

  ≡ *MENU*
✦▰▰▰▰ •⊰ *FUN* ⊱• ▰▰▰▰
▋❦❯ *${prefix}Motivacion*
▋❦ ❯*${prefix}Citas*
▋❦ ❯*${prefix}Frases*
▋❦ ❯*${prefix}Hacker*
▋❦ ❯*${prefix}Tonterias*
▋❦ ❯*${prefix}Hechos*
▋❦ ❯*${prefix}Shipping*
▋❦ ❯*${prefix}Guapo*
▋❦ ❯*${prefix}Guapa*
▋❦ ❯*${prefix}Feo*
▋❦ ❯*${prefix}Sadboy*
▋❦ ❯*${prefix}Sadgirl*
▋❦ ❯*${prefix}Random*
▋❦ ❯*${prefix}Fake* _(@tag=txt1=txt2)_
▋❦ ❯*${prefix}Say* _(Texto)_
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰
✦▰▰▰▰ •⊰ *JUEGOS* ⊱• ▰▰▰▰
▋❦ ❯*${prefix}verdad*
▋❦ ❯*${prefix}reto*
▋❦ ❯*${prefix}pregunta*
▋❦ ❯*${prefix}topgay*
▋❦ ❯*${prefix}ppt* _(piedra/papel/tijera)_
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰
✦▰▰▰▰ •⊰ *IMAGEN* ⊱• ▰▰▰▰
▋❦ ❯*${prefix}img*  _(busca imagen)_
▋❦ ❯*${prefix}cat* 
▋❦ ❯*${prefix}dog* 
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰`
}

const menu2 = (prefix, tanggal, jam) => {
    return `▢ ${tanggal()}
▢ Hora ${jam} 

  ≡ *MENU*
✦▰▰▰▰ •⊰ *STICKER* ⊱• ▰▰▰▰
▋❦ ❯*${prefix}sticker* _(Foto/video)_
▋❦ ❯*${prefix}take* _(Nombre=Autor)_
▋❦ ❯*${prefix}toimg* _(Reply Sticker)_
▋❦ ❯*${prefix}smoji*
▋❦ ❯*${prefix}ttp* _(Txt)_
▋❦ ❯*${prefix}attp* _(Txt)_
▋❦ ❯*${prefix}attp2* _(Txt)_
▋❦ ❯*${prefix}tickff* 
▋❦ ❯*${prefix}triggered*
▋❦ ❯*${prefix}gay*
▋❦ ❯*${prefix}vidrio*
▋❦ ❯*${prefix}passed*
▋❦ ❯*${prefix}celda*
▋❦ ❯*${prefix}wasted*
▋❦ ❯*${prefix}rojo*
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰
✦▰▰▰▰ •⊰ *TOOLS* ⊱• ▰▰▰▰
▋❦ ❯*${prefix}wame*
▋❦ ❯*${prefix}ocr* _(Foto)_
▋❦ ❯*${prefix}tomp3* _(Video)_
▋❦ ❯*${prefix}tts* _(Code Idioma + Texto)_
▋❦ ❯*${prefix}idiomas*
▋❦ ❯*${prefix}Leermas* _(txt1=txt2)_
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰
✦▰▰▰▰ •⊰ *MEDIA* ⊱• ▰▰▰▰
▋❦ ❯*${prefix}Nightcore (Reply audio)*
▋❦ ❯*${prefix}Slow*
▋❦ ❯*${prefix}Bass*
▋❦ ❯*${prefix}Tupai*
▋❦ ❯*${prefix}Gemuk*
▋❦ ❯*${prefix}Listvn*
▋❦❯ *${prefix}Listimg*
▋❦❯ *${prefix}Listvid*
▋❦❯ *${prefix}Liststik*
▋❦❯ *${prefix}Getimg* _(Nombre pack)_
▋❦❯ *${prefix}Getvid* _(Nombre pack)_
▋❦❯ *${prefix}Gets* _(Nombre pack)_
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰
 ≡ *MENU DESCARGA*
✦▰▰▰▰ •⊰ *DESCARGAS⊱• ▰▰▰▰
▋❦❯ *${prefix}play* 
▋❦❯ *${prefix}ytmp3* _(Link YT)_
▋❦❯ *${prefix}ytmp4* _(Link YT)_
▋❦❯ *${prefix}igfoto*
▋❦❯ *${prefix}igvideo*
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰
✦▰▰▰▰ •⊰ *BUSQUEDA* ⊱• ▰▰▰▰
▋❦❯ *${prefix}ytsearch*
▋❦❯ *${prefix}igstalk*
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰ 
  ≡ *MENU MAKER* 
✦▰▰▰▰ •⊰ *MAKER* ⊱• ▰▰▰▰
▋❦❯ *${prefix}3dtext*
▋❦❯ *${prefix}qrcode*
▋❦❯ *${prefix}wall*
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰`}


const menuOwner = (prefix, tanggal, jam) => {
  return `▢ ${tanggal()}
▢ Hora ${jam}

  ≡ *MENU OWNER*
✦▰▰▰▰ •⊰ *OWNER* ⊱• ▰▰▰▰
▋❦❯ *${prefix}Actualizar*
▋❦❯ *${prefix}Clone* _(@user)_
▋❦❯ *${prefix}Ban*
▋❦❯ *${prefix}Unban*
▋❦❯ *${prefix}Clearchat*
▋❦❯ *${prefix}Totaluser*
▋❦❯ *${prefix}Solicitudes*
▋❦❯ *${prefix}Informes*
▋❦❯ *${prefix}Addstick* 
▋❦❯ *${prefix}Addvn* 
▋❦❯ *${prefix}Addimg* 
▋❦❯ *${prefix}Addvid* 
▋❦❯ *${prefix}Addverdad*
▋❦❯ *${prefix}Addreto* 
▋❦❯ *${prefix}Addhecho*
▋❦❯ *${prefix}Addmotivacion* 
▋❦❯ *${prefix}Addcita* 
▋❦❯ *${prefix}Addtonteria* 
▋❦❯ *${prefix}Addhacker* 
▋❦❯ *${prefix}Tx*
▋❦❯ *${prefix}Setprefix*
▋❦❯ *${prefix}Result* _(url)_
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰`
}

const menuGrup = (prefix, tanggal, jam) => {
  return `▢ ${tanggal()}
▢ Jam ${jam} 

  ≡ *MENU GRUPO*
✦▰▰▰▰ •⊰ *GRUPO* ⊱• ▰▰▰▰
▋❦❯ *${prefix}Staff*
▋❦❯ *${prefix}Online*
▋❦❯ *${prefix}Link* 
▋❦❯ *${prefix}Perfil* 
▋❦❯ *${prefix}promover* _(@User)_
▋❦❯ *${prefix}degradar* _(@User)_
▋❦❯ *${prefix}seticon* _(Foto)_
▋❦❯ *${prefix}kick* _(@user)_
▋❦❯ *${prefix}add* _(Numero)_
▋❦❯ *${prefix}delete* _(Mensaje bot)_
▋❦❯ *${prefix}group* _(Close/Open)_
▋❦❯ *${prefix}dueñogp*
▋❦❯ *${prefix}welcome* _(1/0)_
▋❦❯ *${prefix}antilinkwha* _(1/0)_
▋❦❯ *${prefix}salir* _(Bot deja el grupo)_  
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰
  ≡  Estos comandos menciona a todos los usuarios de un grupo
✦▰▰▰▰ •⊰ *MENCIONES* ⊱• ▰▰▰▰
▋❦❯ *${prefix}tagall* 
▋❦❯ *${prefix}notify* _(Texto)_
▋❦❯ *${prefix}here*
✦▰▰▰▰▰▰▰▰▰▰▰▰▰▰` 
}

module.exports = { menu, menu1, menu2, menuOwner, menuGrup}
