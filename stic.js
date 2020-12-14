const sharp = require('sharp')

function processSticker(input) {
    return new Promise((resolve, reject) => {
        if (typeof input == 'string' && /^data/.test(input)) input = Buffer.from(input.replace(/^data:.+;base64,/, ''))
        sharp(input)
            .toFormat('webp')
            .resize(512, 512, {
                fit: 'contain',
                background: {
                    r: 0,
                    g: 0,
                    b: 0,
                    alpha: 0
                }
            })
            .toBuffer()
            .then(resolve)
            .catch(reject)
    })
}







            break
        case 'stic': {
            if (isImage || isQuotedImage || isQuotedFile) {
            const encryptMedia = isQuotedImage || isQuotedFile ? quotedMsg : message
            const _mimetype = encryptMedia.mimetype
            const mediaData = await decryptMedia(encryptMedia)
            if (_mimetype === 'image/webp') xbot.sendRawWebpAsSticker(from, mediaData.toString('base64'), false)
            const sticker = await processSticker(mediaData, 'contain')
            await xbot.sendRawWebpAsSticker(from, sticker.toString('base64'), false)
            } else xbot.reply(from, config.msg.noMedia, id)
                }
            break