
        case '#metal': {
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)

             const metal = body.slice(6)
              if (!metal) return xbot.reply(from, 'Kirim perintah *#metal [text]*\n\nContoh : #metal XBOT', id)
               xbot.reply(from, mess.wait, id)
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
              //      await page.click("#radio0-radio-7e8d1d6b1b72481abc38a9d26513a803");
                     await new Promise(resolve => setTimeout(resolve, 30000));
                       await page.click("#submit");
                       await new Promise(resolve => setTimeout(resolve, 30000));
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
        case '#navy': {
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)

             const navy = body.slice(5)
              if (!navy) return xbot.reply(from, 'Kirim perintah *#navy [text]*\n\nContoh : #navy XBOT', id)
               xbot.reply(from, mess.wait, id)
             const puppeteer = require('puppeteer')
                try {
                 (async () => {
             const browser = await puppeteer.launch({
                  headless: true,
                                });
            const page = await browser.newPage();
               await page
                    .goto("https://en.ephoto360.com/make-avatar-style-crossfire-282.html", {
                  waitUntil: "networkidle2"
                            })
                .then(async () => {
                   await page.type("#text-0", navy);
                    await page.click("#radio0-radio-fvcwknv5l");
                     await new Promise(resolve => setTimeout(resolve, 30000));
                       await page.click("#submit");
                       await new Promise(resolve => setTimeout(resolve, 30000));
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
        case '#hayato': {
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)

             const hayato = body.slice(7)
              if (!hayato) return xbot.reply(from, 'Kirim perintah *#hayato [text]*\n\nContoh : #hayato XBOT', id)
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
                   await page.type("#text-0", hayato);
                    await page.click("#radio0-radio-1f618436252b4561b3f04d209ec0e1a2");
                     await new Promise(resolve => setTimeout(resolve, 30000));
                       await page.click("#submit");
                       await new Promise(resolve => setTimeout(resolve, 30000));
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
        case '#kelly': {
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)

             const kelly = body.slice(6)
              if (!kelly) return xbot.reply(from, 'Kirim perintah *#kelly [text]*\n\nContoh : #kelly XBOT', id)
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
                   await page.type("#text-0", kelly);
                    await page.click("#radio0-radio-1a43cd83a8134efb94975abe02641852");
                     await new Promise(resolve => setTimeout(resolve, 30000));
                       await page.click("#submit");
                       await new Promise(resolve => setTimeout(resolve, 30000));
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
        case '#alok': {
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)

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
                     await new Promise(resolve => setTimeout(resolve, 30000));
                       await page.click("#submit");
                       await new Promise(resolve => setTimeout(resolve, 30000));
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
        case '#pubg': {
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)

             const pubg = body.slice(5)
              if (!pubg) return xbot.reply(from, 'Kirim perintah *#pubg [text]*\n\nContoh : #pubg XBOT', id)
               xbot.reply(from, mess.wait, id)
             const puppeteer = require('puppeteer')
                try {
                 (async () => {
             const browser = await puppeteer.launch({
                  headless: true,
                                });
            const page = await browser.newPage();
               await page
                    .goto("https://en.ephoto360.com/free-pubg-logo-maker-online-609.html", {
                  waitUntil: "networkidle2"
                            })
                .then(async () => {
                   await page.type("#text-0", pubg);
                    await page.click("#radio0-radio-c87fef3f338741be9153ad59020d1647");
                     await new Promise(resolve => setTimeout(resolve, 30000));
                       await page.click("#submit");
                       await new Promise(resolve => setTimeout(resolve, 30000));
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