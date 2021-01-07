        case '#metal': {

             const metal = body.slice(6)
              if (!metal) return geps.reply(from, 'Kirim perintah *#metal [text]*\n\nContoh : #metal XBOT', id)
               geps.reply(from, mess.wait, id)
             const puppeteer = require('puppeteer')
                try {
                 (async () => {
             const browser = await puppeteer.launch({
                  headless: true,
                                });
            const page = await browser.newPage();
               await page
                    .goto("https://en.ephoto360.com/metal-text-effect-blue-174.html", {
                  waitUntil: "networkidle2"
                            })
                .then(async () => {
                   await page.type("#text-0", metal);
                    await page.click("#radio0-radio-7e8d1d6b1b72481abc38a9d26513a803");
                     await new Promise(resolve => setTimeout(resolve, 5000));
                       await page.click("#submit");
                       await new Promise(resolve => setTimeout(resolve, 5000));
              const element = await page.$(
                                    'div[class="btn-group"] > a'
                                    );
                  const text = await (await element.getProperty("href")).jsonValue();
                                    geps.sendFileFromUrl(from, text, id)
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