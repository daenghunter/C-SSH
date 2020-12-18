case '#say': 
const bilang = body.slice(5)
cons org = sender.id
xbot.sendTextWithMentions(from, `@${org.replace('@c.us','')} Berkata : ${bilang}`
break
case '#esticker':
                        const bjbjbja = emojiUnicode(args[1])
                        xbot.sendStickerfromUrl(from, "https://api.vhtear.com/emojitopng?code="+ bjbjbja +"&apikey=" + vhtearkey)
                        break
case '#fake':
        const no = arg.split(' |')[2]
const no1 = arg.split('|')[3]
const teks = arg.split('|')[4]
const pen = no.replace(' ','')
                console.log(`no: ${pen} isi: ${teks}`)
            xbot.costumreply(from, teks, id, number: ${pen} message: ${no1})
            break
case 'runtime':
            function format(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
             var minutes = Math.floor(seconds % (60*60) / 60);
             var seconds = Math.floor(seconds % 60);

             return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
              }

            var uptime = process.uptime();
            xbot.reply(from, `Bot telah berjalan selama *${format(uptime)}*`, id)
            break