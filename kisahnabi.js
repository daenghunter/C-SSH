case '#kisahnabi': //dandi
             if (!isGroupMsg) return maxbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return maxbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return maxbot.reply(from, 'Kirim perintah *#kisahnabi [optional]*\nContoh : *#kisahnabi Adam*', id)
				const nabii = await axios.get(`https://kisahnabi-api-zhirrr.vercel.app/api/searchnabi?q=${q}`)
				const nabi = nabii.data.nabi
				const knabi = `Requested Kisah Nabi

Note : Ini Adalah Kisah yang dibuat secara rangkum saja

• *Nama* : ${nabi.nama}
• *Lahir* : ${nabi.lahir}
• *Umur* : ${nabi.umur}
• *Tempat* : ${nabi.tempat}

• *Kisah* : ${nabi.kisah}`
				await maxbot.reply(from, knabi, id)
			break