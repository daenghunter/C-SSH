case '#halah':
const hala = body.slice(6)
const halah = hala.replace(/i,u,e,o/g, "a")
client.reply(from, halah, id)
break

case '#hilih':
const hili = body.slice(6)
const hilih = hili.replace(/a,u,e,o/g, "i")
client.reply(from, hilih, id)
break

case '#huluh':
const hulu = body.slice(6)
const huluh = hulu.replace(/a,i,e,o/g, "u")
client.reply(from, huluh, id)
break

case '#heleh':
const hele = body.slice(6)
const heleh = hele.replace(/a,u,i,o/g, "e")
client.reply(from, heleh, id)
break

case '#holoh':
const holo = body.slice(6)
const holoh = holo.replace(/a,u,e,i/g, "o")
client.reply(from, holoh, id)
break