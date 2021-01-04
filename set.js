case '#music':
	const getaudio = await axios.get(`https://selenium-tes.herokuapp.com/api/ytplaymp4?q=${body.slice(6)}&apikey=apivinz`)
	if (getaudio.data.status == false) return benz.reply(from, getaudio.data.message, id)
	await benz.sendFileFromUrl(from, getaudio.data.result.thumbnail, 'gambar.jpg', `Title: ${getaudio.data.result.title}\nDurasi: ${getaudio.data.result.duration}`, id)
	await benz.sendFileFromUrl(from, getaudio.data.result.url_audio, 'uc.mp3', 'P', id)
break