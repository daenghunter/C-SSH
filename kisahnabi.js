case '#stwm': // Bocchi Bot
         //   if (!isAdmin) return await maxbot.reply(from, `Fitur ini hanya untuk user Premium\n\nKetik #owner\n untuk menyewa bot ini ke grup anda.`, id)
            if (!q.includes('|')) return await maxbot.reply(from, `Untuk membuat Sticker dengan watermark\nsilahkan upload foto atau reply foto dengan perintah #stickerwm packagename | author\n\nContoh: #stickerwm 2020 | maxbot`, id)
            if (isMedia && isImage) {
                await maxbot.reply(from, mess, id)
	         	const stimker = body.slice(5)
                const packname = stimker.split('|')[0]
                const author = stimker.split('|')[1]
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await maxbot.sendImageAsSticker(from, imageBase64, { author: `${author}`, pack: `${packname}` })
            } else if (isQuotedImage) {
                await maxbot.reply(from, mess, id)
                const stimker = body.slice(5)
                const packname = stimker.split('|')[0]
                const author = stimker.split('|')[1]
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await maxbot.sendImageAsSticker(from, imageBase64, { author: `${author}`, pack: `${packname}` })
             } else {
                await maxbot.reply(from, `Format Yang Anda Masukkan Salah !`, id)
            }
    break