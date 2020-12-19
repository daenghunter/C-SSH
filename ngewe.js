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
case `#lovemaker`:
            //if (!isPremium) return tobz.reply(from, '*Fitur Ini Khusus PREMIUM!*\n _Daftar PREMIUM Hanya 5k/Bulan_\n\n*Mau Daftar VIP?*\nChat Owner BOT\n_wa.me/6281342077268_ ', id)
             //if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
             if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis!*\nKetik #limit Untuk Mengecek Kuota Limit Kamu`, id)
    
             //await limitAdd(serial)
             const love = body.slice(13)
             if (!love) return tobz.reply(from, 'Kirim perintah *#lovemaker [teks]*\n\nContoh *#lovemaker Nafiz*', id)
             tobz.sendText(from, '*Sedang di proses*...', id)
             await tobz.sendFileFromUrl(from, `https://api.vhtear.com/lovemessagetext?text=${love}&apikey=${vhtearkey}`,`${love}.jpg`,`────────────────\n*lovemaker*\n────────────────\n _*By Nafiz*_`, id)        
             break      
         case `${prefix}glowmaker`:
         case `${prefix}textglow`:
            //if (!isPremium) return tobz.reply(from, '*Fitur Ini Khusus PREMIUM!*\n _Daftar PREMIUM Hanya 5k/Bulan_\n\n*Mau Daftar VIP?*\nChat Owner BOT\n_wa.me/6281342077268_ ', id)
             //if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
             if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis!*\nKetik #limit Untuk Mengecek Kuota Limit Kamu`, id)
    
             //await limitAdd(serial)
             const glow = body.slice(11)
             if (!glow) return tobz.reply(from, 'Kirim perintah *#glowmaker [teks]*\n\nContoh *#glowmaker Nafiz*', id)
             tobz.sendText(from, '*Sedang di proses*...', id)
             await tobz.sendFileFromUrl(from, `https://api.vhtear.com/glowtext?text=${glow}&apikey=${vhtearkey}`,`${glow}.jpg`,`────────────────\n*glowmaker*\n────────────────\n _*By Nafiz*_`, id)        
             break             
        case `${prefix}glitchtext`: 
         case `${prefix}glitchteks`:
            //if (!isPremium) return tobz.reply(from, '*Fitur Ini Khusus PREMIUM!*\n _Daftar PREMIUM Hanya 5k/Bulan_\n\n*Mau Daftar VIP?*\nChat Owner BOT\n_wa.me/6281342077268_ ', id)
            //if (isLimit(serial)) return tobz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return tobz.reply(from, `Kirim perintah *#glitchteks  |Teks1|Teks2*, contoh *#glitchteks  |Teks1|Teks2*`, id)
            argz = body.trim().split('|')
            if (argz.length >= 3) {
                tobz.reply(from, mess.wait, id)
                const glitch1 = argz[1]
                const glitch2 = argz[2]
                if (glitch1.length > 8) return tobz.reply(from, '*Teks1 Terlalu Panjang!*\n_Maksimal 8 huruf!_', id)
                if (glitch2.length > 8) return tobz.reply(from, '*Teks2 Terlalu Panjang!*\n_Maksimal 8 huruf!_', id) 
                tobz.sendFileFromUrl(from, `https://api.vhtear.com/glitchtext?text1=${glitch1}&text2=${glitch2}}&apikey=${vhtearkey}`)
                //await limitAdd(serial)
            } else {
                await tobz.reply(from, `Wrong Format!\n[❗] Kirim perintah *#glitchteks  |Teks1|Teks2*, contoh *#glitchteks |Xbot|Bot*`, id)
            }
            break