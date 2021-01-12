
       case '#logo':
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)

           // // //  if (!isPremium) return xbot.reply(from, `Perintah ini hanya bisa di gunakan oleh Member Premium!`, id)
             xbot.reply(from, mess.wait, id)
             const logo = body.slice(5)
             if (!logo) return xbot.reply(from, 'Masukin nama mu beb!\nMax 8 huruf biar bagus!', id)
             if (logo.length > 8) return xbot.reply(from, 'Hurufnya terlalu panjang sayang😔', id)
             await xbot.sendFileFromUrl(from, `https://api.vhtear.com/gamelogo?text=${logo}&apikey=${vhtearkey}`, `Success-${logo}.jpg`, `Done bosku`, id)
             limitAdd(serial)
                break
