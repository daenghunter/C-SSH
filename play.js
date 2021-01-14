case '#play2':
       xbot.reply(from,'Wait.. Sedang di proses!',id)
	const getvids = await axios.get(`https://api.zeks.xyz/api/ytplaymp3?q=${body.slice(6)}&apikey=apivinz`)
	if (getvids.data.status == false) return xbot.reply(from, getvids.data.message, id)
    if (Number(getvids.data.result.url_audio.split(' MB')[0]) >= 20.00) return xbot.reply(from, 'Maaf durasi music sudah melebihi batas maksimal 10 MB!', id)
    const responses = await fetch(getvids.data.result.url_audio);
    const buffer = await responses.buffer(); 
	await xbot.sendFileFromUrl(from, getvids.data.result.thumbnail, 'gambar.jpg', `Title: ${getvids.data.result.title}\nSize: ${getvids.data.result.size}`, id)
    await fs.writeFile(`./media/play.mp3`, buffer)
    await xbot.sendFile(from,'./media/play.mp3', `p`,id)
    await limitAdd(serial)
        break
       case '#play3':          
	   //if (!isOwner) return xbot.reply(from,'FITUR DI MATIKAN SEMENTARA',id)
            if (args.length == 1) return xbot.reply(from, `Untuk mencari lagu from youtube\n\nPenggunaan: #play judul lagu`, id)
            try {
                xbot.reply(from,'Wait.. Sedang di proses, Memakan 2 Limit!!',id)
                const serplay = body.slice(6)
                const webplay = await fetch(`https://api.vhtear.com/ytmp3?query=${serplay}&apikey=${vhtearkey}`)
                if (!webplay.ok) throw new Error(`Error Get Video : ${webplay.statusText}`)
                const webplay2 = await webplay.json()
                 if (webplay2.status == false) {
                    xbot.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                } else {
                    if (Number(webplay2.result.size.split(' MB')[0]) >= 20.00) return xbot.reply(from, 'Maaf durasi music sudah melebihi batas maksimal 10 MB!', id)
                    const { image, mp3, size, ext, title, duration } = await webplay2.result
                    const captplay = `「 PLAY 」\n\n➸ Judul : ${title}\n➸ Durasi : ${duration}\n➸ Filesize : ${size}\n➸ Exp : ${ext}\n➸ Link Download : ${mp3}\n\nMusic Sedang Dikirim`
					const responses = await fetch(mp3);
                    const buffer = await responses.buffer();   
                    xbot.sendFileFromUrl(from, image, `thumb.jpg`, captplay, id)
                    await fs.writeFile(`./media/audio.mp3`, buffer)
	                await xbot.sendFile(from,'./media/audio.mp3', `p`,id)
                    await limitAdd(serial)
                    await limitAdd(serial)
                }
            } catch (err) {
                xbot.sendText(ownerNumber, 'Error Play : '+ err)
                xbot.reply(from, mess.error.Yt3, id)
            }
            break