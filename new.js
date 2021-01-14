            case '#kiss':
                if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
                 if (args.length === 1) return xbot.reply(from, 'Hanya Owner yang bisa memasukan Bot ke dalam Grup!', id)
                        const texnugmfq = body.slice(6)
                       const getnomberr =  await xbot.checkNumberStatus(texnugmfq)
                    const useriqf = getnomberr.id.replace('@','') + '@c.us'
                    const jnccck = await xbot.getProfilePicFromServer(useriqf)
                        const kissqpp = await xbot.getProfilePicFromServer(sender.id)
                        if (jnccck === undefined) {
                            var ppFirst = errorImg
                        } else {
                            var ppFirst = jnccck
                        }
                        canvas.Canvas.kiss(ppFirst, kissqpp)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_kiss.png`)
                                await xbot.sendFile(from, `${sender.id}_kiss.png`, `${sender.id}_kiss.png`, '', id)
                                fs.unlinkSync(`${sender.id}_kiss.png`)
                                await limitAdd(serial)
                            })
                      break
				case '#slapp':
                if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
                 if (args.length === 1) return xbot.reply(from, 'Hanya Owner yang bisa memasukan Bot ke dalam Grup!', id)
                        const texnugbmf = body.slice(6)
                       const getnomberrr =  await xbot.checkNumberStatus(texnugbmf)
                    const userifb = getnomberrr.id.replace('@','') + '@c.us'
                    const jncckb = await xbot.getProfilePicFromServer(userifb)
                        const kissppa = await xbot.getProfilePicFromServer(sender.id)
                        if (jncckb === undefined) {
                            var ppFirst = errorImg
                        } else {
                            var ppFirst = jncckb
                        }
                        canvas.Canvas.batslap(ppFirst, kissppa)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_kiss.png`)
                                await xbot.sendFile(from, `${sender.id}_kiss.png`, `${sender.id}_kiss.png`, '', id)
                                fs.unlinkSync(`${sender.id}_kiss.png`)
                                await limitAdd(serial)
                            })
                      break
				case '#spank':
                if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
                 if (args.length === 1) return xbot.reply(from, 'Hanya Owner yang bisa memasukan Bot ke dalam Grup!', id)
                        const texnm = body.slice(6)
                       const getnomberrrr =  await xbot.checkNumberStatus(texnm)
                    const userf = getnomberrrr.id.replace('@','') + '@c.us'
                    const jnccek = await xbot.getProfilePicFromServer(userf)
                        const kissppt = await xbot.getProfilePicFromServer(sender.id)
                        if (jnccek === undefined) {
                            var ppFirst = errorImg
                        } else {
                            var ppFirst = jnccek
                        }
                        canvas.Canvas.spank(ppFirst, kissppt)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_kiss.png`)
                                await xbot.sendFile(from, `${sender.id}_kiss.png`, `${sender.id}_kiss.png`, '', id)
                                fs.unlinkSync(`${sender.id}_kiss.png`)
                                await limitAdd(serial)
                            })
                      break
				case '#distracted':
                if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
                 if (args.length === 1) return xbot.reply(from, 'Hanya Owner yang bisa memasukan Bot ke dalam Grup!', id)
                        const texqnugmf = body.slice(6)
                       const getnomberrrrr =  await xbot.checkNumberStatus(texqnugmf)
                    const userife = getnomberrrrr.id.replace('@','') + '@c.us'
                    const jncckqq = await xbot.getProfilePicFromServer(userife)
                        const kissppqq = await xbot.getProfilePicFromServer(sender.id)
                        if (jncckqq === undefined) {
                            var ppFirst = errorImg
                        } else {
                            var ppFirst = jncckqq
                        }
                        canvas.Canvas.distracted(ppFirst, kissppqq)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_kiss.png`)
                                await xbot.sendFile(from, `${sender.id}_kiss.png`, `${sender.id}_kiss.png`, '', id)
                                fs.unlinkSync(`${sender.id}_kiss.png`)
                                await limitAdd(serial)
                            })
                      break