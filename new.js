        case '#puisi': // ARUGAZ
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (!isGroupMsg) return xbot.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const puisi = await get.get('https://arugaz.herokuapp.com/api/puisi1').json()
            xbot.reply(from, `• *Puisi*: ${puisi.data.result}`, id)
            break
        case '#puisi2': // ARUGAZ
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            const puisi2 = await get.get('https://arugaz.herokuapp.com/api/puisi2').json()
            xbot.reply(from, `• *Puisi*: ${puisi2.data.result}`, id)
            break
        case '#puisi3': // ARUGAZ
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            const puisi3 = await get.get('https://arugaz.herokuapp.com/api/puisi3').json()
            xbot.reply(from, `• *Puisi*: ${puisi3.data.result}`, id)
            break
        case '#cersex1': // ARUGAZ
            if (!isGroupMsg) return xbot.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isNsfw) return xbot.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            const cersex1 = await get.get('https://arugaz.herokuapp.com/api/cersex1').json()
            xbot.reply(from, `• *CERSEX*: ${cersex1.data.result.article}`, id)
            break
        case '#cersex2': // ARUGAZ
            if (!isGroupMsg) return xbot.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isNsfw) return xbot.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            const cersex2 = await get.get('https://arugaz.herokuapp.com/api/cersex1').json()
            xbot.reply(from, `• *CERSEX*: ${cersex2.data.result.article}`, id)
            break*/
        case '#indohot': // ARUGAZ
            if (!isGroupMsg) return xbot.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
         //   if (!isNsfw) return xbot.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            axios.get(`https://arugaz.herokuapp.com/api/indohot`)
            .then((res) => {
                let hasil = `Judul = ${res.data.result.judul}\n Genre = ${res.data.result.genre}\n Durasi = ${res.data.result.durasi}\n Link= ${res.data.result.url}`
                xbot.reply(from, hasil, id)
            })
            break
         case `#mock`:
            const mock1 = body.slice(6)
            axios.get('https://arugaz.herokuapp.com/api/bapakfont?kata=' + mock1)
            .then((res) => {
                let hasil = `${res.data.result}`
                xbot.reply(from, hasil, id)
            })
            break
         case `#hilih`:
            const hilk1 = body.slice(7)
            axios.get('https://freerestapi.herokuapp.com/api/v1/hilih?kata=' + hilk1)
            .then((res) => {
                let hasil = `${res.data.result}`
                xbot.reply(from, hasil, id)
            })
            break