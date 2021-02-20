case '/song':
case '/lagu':
const riq = body.slice(6)
if (!riq) return maxbot.reply(from, 'Masukin Judulnya Cuk', message.id)
const vh = await get(`https://api.vhtear.com/ytmp3?query=${riq}&apikey=${vhtearkey}`).json()
const cavh = `*Now Playing 🎶*

*» [ ${vh.result.title} ] «*

     *0:00 ─〇───── ${vh.result.duration}*
              *⇄ ◃◃ ⅠⅠ ▹▹ ↻*

*_Song Requested by @${sender.id.replace('@c.us','')}_*`
maxbot.sendTextWithMentions(from, cavh)
maxbot.sendPtt(from, vh.result.mp3, 'u.mp3', '')
break