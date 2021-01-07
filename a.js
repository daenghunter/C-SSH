case '#matrix': {
              
             const logojoker = body.slice(7)
            const puppeteer = require('puppeteer')
               if (!logojoker) return geps.reply(from, 'Kirim perintah *#matrix [text]*\n\nContoh : #matrix laylay', id)
                                geps.reply(from, mess.wait, id)
                        try {
                            (async () => {
                                const browser = await puppeteer.launch({
                                    headless: true,
                                });
                                const page = await browser.newPage();
                                await page
                                    .goto("https://textpro.me/matrix-style-text-effect-online-884.html", {
                                        waitUntil: "networkidle2"
                                    })
                                    .then(async () => {
                                        await page.type("#text-0", logojoker);
                                        await page.click("#submit");
                                        await new Promise(resolve => setTimeout(resolve, 3000));
                                        const element = await page.$(
                                            'div[class="thumbnail"] > img'
                                            );
                                        const texts1 = await (await element.getProperty("src")).jsonValue();
                                        geps.sendFileFromUrl(from, texts1, id)
                                        browser.close();
                        
                                    })
                                    .catch((err => {
                                        console.log(err)
                                        geps.reply(from, 'error', id)
                                    }))
                            })();
                        } catch (error) {
                            console.log('error bang')
                            geps.reply(from, 'error', id)
                        }
                        }
                                    break
