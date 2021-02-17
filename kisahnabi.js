case '/stwm':
case '#stwm':
case 'p':
            const weemnyaboss = body.slice(11)
            const packname = weemnyaboss.split('|')[0]
            const author = weemnyaboss.split('|')[1]
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await maxbot.sendImageAsSticker(from, imageBase64, { author: `${author}`, pack: `${packname}` })
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await maxbot.sendImageAsSticker(from, imageBase64, { author: `${author}`, pack: `${packname}` })
            } else {
                    maxbot.reply(from, mess.error.St, id)
            }
            break