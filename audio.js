case '/play':  
                if (!isGroupMsg) return maxbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (args.length == 1) return maxbot.reply(from, `Untuk mencari lagu from youtube\n\nPenggunaan: #play judul lagu`, id)
                try {
                    maxbot.reply(from,'[ WAIT ] Sedang mencari music...',id)
                    const webplay = await axios.get(`https://api.vhtear.com/ytmp3?query=${body.slice(6)}&apikey=${vhtearkey}`)
                     if (webplay.data.result.status !== 200) {
                        maxbot.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                    } else {
                        if (Number(webplay.data.result.size.split(' MB')[0]) >= 20.00) return maxbot.reply(from, 'Maaf durasi music sudah melebihi batas maksimal 20 MB!', id) 
                        await maxbot.sendFileFromUrl(from, webplay.data.result.image, `thumb.jpg`, `「 PLAY 」\n\n➸ Judul : ${webplay.data.result.title}\n➸ Durasi : ${webplay.data.result.duration}\n➸ Filesize : ${webplay.data.result.size}\n➸ Link Download : ${webplay.data.result.mp3}\n\nMusic Sedang Dikirim`, id)
				    	const responses = await fetch(webplay.data.result.mp3);
                        const buffer = await responses.buffer();   
                        await fs.writeFile(`./media/audio_${sender.id}.mp3`, buffer)
	                    await maxbot.sendFile(from,`./media/audio_${sender.id}.mp3`, `audio_${sender.id}.mp3`, '',id)
	                    console.log('Success sending Play mp3!')
                        fs.unlinkSync(`./media/audio_${sender.id}.mp3`)
                        await limitAdd(serial)
                        await limitAdd(serial)
                    }
            } catch (err) {
                maxbot.sendText(ownerNumber, 'Error Play : '+ err)
                maxbot.reply(from, mess.error.Yt3, id)
            }
            break