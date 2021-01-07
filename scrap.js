        case '#alok': {

             const alok = body.slice(5)
              if (!alok) return xbot.reply(from, 'Kirim perintah *#alok [text]*\n\nContoh : #alok XBOT', id)
               xbot.reply(from, mess.wait, id)
             const puppeteer = require('puppeteer')
                try {
                 (async () => {
             const browser = await puppeteer.launch({
                  headless: true,
                                });
            const page = await browser.newPage();
               await page
                    .goto("https://en.ephoto360.com/create-free-fire-facebook-cover-online-567.html", {
                  waitUntil: "networkidle2"
                            })
                .then(async () => {
                   await page.type("#text-0", alok);
                    await page.click("#radio0-radio-128c11e9903a46c8920f545e8c5dcf44");
                     await new Promise(resolve => setTimeout(resolve, 5000));
                       await page.click("#submit");
                       await new Promise(resolve => setTimeout(resolve, 5000));
              const element = await page.$(
                                    'div[class="btn-group"] > a'
                                    );
                  const text = await (await element.getProperty("href")).jsonValue();
                                    xbot.sendFileFromUrl(from, text, id)
                                    browser.close();
                                                                                
                                    })
                                    .catch((err => {
                                    console.log(err)
                                    xbot.reply(from, 'error', id)
                                    }))
                                    })();
                                    } catch (error) {
                                    console.log('error bang')
                                    xbot.reply(from, 'error', id)
                                    }
                                    }
                                    break