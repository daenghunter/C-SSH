// Credit SlavyanDesu <--- stoopid
            // Note this only work if you have libwebp installed!
            // And I know the code is messy ok don't bully me :))))
        case '#stickerwm':
        case '#stikerwm':
            if (!isAdmin) return await xbot.reply(from, `Fitur ini hanya untuk user Premium\n\nKetik #owner\n untuk menyewa bot ini ke grup anda.`, id)
            if (!q.includes('|')) return await xbot.reply(from, `Untuk membuat Sticker dengan watermark\nsilahkan upload foto atau reply foto dengan perintah #stickerwm packagename | author\n\nContoh: #stickerwm 2020 | XBOT`, id)
            if (isMedia && isImage || isQuotedImage) {
            await xbot.reply(from, _Permintaan anda sedang di proses_!, id)
            const packname = q.substring(0, q.indexOf('|') - 1)
            const author = q.substring(q.lastIndexOf('|') + 2)
            exif.create(packname, author)
            const encryptMedia = isQuotedImage ? quotedMsg : message
            const mediaData = await decryptMedia(encryptMedia, uaOverride)
            webp.buffer2webpbuffer(mediaData, 'jpg', '-q 80')
                .then(async (res) => {
                    fs.writeFileSync(`./temp/stickerwm/stage_${sender.id}.webp`, res)
                    await exec(`webpmux -set exif ./temp/stickerwm/data.exif ./temp/stickerwm/stage_${sender.id}.webp -o ./temp/stickerwm/${sender.id}.webp`, { log: true })
                    if (fs.existsSync(`./temp/stickerwm/${sender.id}.webp`)) {
                        fs.readFile(`./temp/stickerwm/${sender.id}.webp`, (err, data) => {
                            if (err) return console.error(err)
                                sharp(data)
                                    .resize(256, 256)
                                    .toFile(`./temp/stickerwm/stage_${sender.id}.webp`, async (err) => {
                                        if (err) return console.error(err)
                                        const data = fs.readFileSync(`./temp/stickerwm/${sender.id}.webp`)
                                        const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                        await xbot.sendRawWebpAsSticker(from, base64)
                                        fs.unlinkSync(`./temp/stickerwm/stage_${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/stickerwm/${sender.id}.webp`)
                                        fs.unlinkSync('./temp/stickerwm/data.exif')
                                    })
                        })
                    }
                })
                .catch(async (err) => {
                    console.error(err)
                    await xbot.reply(from, 'Error!', id)
                })
            } else {
                await xbot.reply(from, Format Yang Anda Masukkan Salah !, id)
            }
    break