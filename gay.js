require('dotenv').config()
const { decryptMedia } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
const ffmpeg = require('fluent-ffmpeg')
const axios = require('axios')
const moment = require('moment-timezone')
const getYouTubeID = require('get-youtube-id')
const os = require('os')
const get = require('got')
const webp = require('webp-converter')
const speed = require('performance-now')
const color = require('./lib/color')
const fetch = require('node-fetch')
//const { spawn, exec } = require('child_process')
const exec = require('await-exec')
const urlShortener = require('./lib/shortener')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const google = require('google-it')
const sharp = require('sharp')
const emojiUnicode = require("emoji-unicode")
const translatte = require('translatte')
const { stdout } = require('process')
const quotedd = require('./lib/quote')
const translate = require('translatte')
const { getStickerMaker } = require('./lib/ttp')
const Math_js = require('mathjs');
const imageToBase64 = require('image-to-base64')
const bent = require('bent')
const canvas = require('canvacord')
const request = require('request')
const { addFilter, isFiltered } = require('./lib/msgFilter')
const wkwk = '```'
const stext = require('./lib/stickertext.js')
/*
Terimakasih Kepada Elaina Bot Selau Source Asli Dari Bot Ini..
Dan juga kepada yang berpartisipasi dalam pembuatan bot ini.

Author : Bang Alif - Makassar
*/

const Exif = require('./tools/exif')

const exif = new Exif()
	
const cd = 4.32e+7



const { 
    downloader,
    liriklagu,
    quotemaker,
    randomNimek,
    sleep,
    jadwalTv,
    processTime,
    instagram,
    nulis
    } = require('./lib/functions')

const { 
    help,
    admincmd,
    ownercmd,
    nsfwcmd,
    kerangcmd,
    mediacmd,
    animecmd,
    othercmd,
    downloadcmd,
    praycmd,
    groupcmd,
    bahasalist,
    sewa,
    snk, 
    info, 
    sumbang, 
    readme, 
    listChannel,
    commandArray
    } = require('./lib/help')

const { 
    uploadImages, 
    custom,
    stickerburn,
    stickerlight
    } = require('./lib/fetcher')

const { JSDOM } = require('jsdom')
const scdl = require('soundcloud-downloader').default
const cahyo_ID = 'Cari sendiri di soundcloud.com! kalo bingung kontak saya via wa :D'

const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/



function yta(url) {
    return new Promise((resolve, reject) => {
        if (ytIdRegex.test(url)) {
            let ytId = ytIdRegex.exec(url)
            url = 'https://youtu.be/' + ytId[1]
            post('https://www.y2mate.com/mates/en60/analyze/ajax', {
                url,
                q_auto: 0,
                ajax: 1
            })
                .then(res => res.json())
                .then(res => {
                    let document = (new JSDOM(res.result)).window.document
                    let type = document.querySelectorAll('td')
                    let filesize = type[type.length - 10].innerHTML
                    let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
                    let thumb = document.querySelector('img').src
                    let title = document.querySelector('b').innerHTML

                    post('https://www.y2mate.com/mates/en60/convert', {
                        type: 'youtube',
                        _id: id[1],
                        v_id: ytId[1],
                        ajax: '1',
                        token: '',
                        ftype: 'mp3',
                        fquality: 128
                    })
                        .then(res => res.json())
                        .then(res => {
                            let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
                            resolve({
                                dl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
                                thumb,
                                title,
                                filesizeF: filesize,
                                filesize: KB
                            })
                        }).catch(reject)
                }).catch(reject)
        } else reject('URL INVALID')
    })
}

function post(url, formdata) {
    console.log(Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&'))
    return fetch(url, {
        method: 'POST',
        headers: {
            accept: "*/*",
            'accept-language': "en-US,en;q=0.9",
            'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&')
    })
}

function timeConvert(millis) {
            var minutes = Math.floor(millis / 60000);
            var seconds = ((millis % 60000) / 1000).toFixed(0);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}



// LOAD FILE
const banned = JSON.parse(fs.readFileSync('./lib/database/banned.json'))
const premium = JSON.parse(fs.readFileSync('./lib/database/premium.json'))
const nsfw_ = JSON.parse(fs.readFileSync('./lib/database/nsfwz.json'))
const simi_ = JSON.parse(fs.readFileSync('./lib/database/Simsimi.json'))
const limit = JSON.parse(fs.readFileSync('./lib/database/limit.json'))
const welkom = JSON.parse(fs.readFileSync('./lib/database/welcome.json'))
const left = JSON.parse(fs.readFileSync('./lib/database/left.json'))
const muted = JSON.parse(fs.readFileSync('./lib/database/muted.json'))
const setting = JSON.parse(fs.readFileSync('./lib/database/setting.json'))
const msgLimit = JSON.parse(fs.readFileSync('./lib/database/msgLimit.json'))
const adminNumber = JSON.parse(fs.readFileSync('./lib/database/admin.json'))
// SLOT
	    
	    const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍒 : 🍐',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
    '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌',
		'🍇 : 🍇 : 🍇'
		]

let { 
    limitCount,
    memberLimit, 
    groupLimit,
    banChats,
    barbarkey,
    vhtearkey,
    restartState: isRestart,
    mtc: mtcState
    } = setting

let state = {
    status: () => {
        if(banChats){
            return 'Nonaktif'
        }else if(mtcState){
            return 'Nonaktif'
        }else if(!mtcState){
            return 'Aktif'
        }else{
            return 'Aktif'
        }
    }
}

moment.tz.setDefault('Asia/Jakarta').locale('id')

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

module.exports = xbot = async (xbot, message) => {
    try {
        const { 
            type, 
            id, 
            from, 
            t, 
            sender, 
            isGroupMsg, 
            chat, 
            chatId, 
            caption, 
            isMedia, 
            mimetype,
            quotedMsg, 
            quotedMsgObj, 
            author, 
            mentionedJidList 
            } = message

        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName } = sender
        pushname = pushname || verifiedName
        const commands = caption || body || ''
        const prefix = '#'
        const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
        const command = commands.toLowerCase().split(' ')[0] || ''
        const args =  commands.split(' ')
        const argx = commands.toLowerCase()
        const isCmd = command.startsWith(prefix)
        const q = args.join(' ')
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        const isQuotedAudio = quotedMsg && (quotedMsg.type === 'audio' || quotedMsg.type === 'ptt' || quotedMsg.type === 'ppt')
        const isQuotedFile = quotedMsg && quotedMsg.type === 'document'

        body = (type === 'chat' && body.startsWith(prefix)) ? body : (((type === 'image' || type === 'video') && caption) && caption.startsWith(prefix)) ? caption : ''

        function restartAwal(xbot){
            setting.restartState = false
            isRestart = false
            xbot.sendText(setting.restartId, 'Restart Succesfull!')
            setting.restartId = 'undefined'
            fs.writeFileSync('./lib/setting.json', JSON.stringify(setting, null,2));
        }
 
        const isMuted = (chatId) => {
          if(muted.includes(chatId)){
            return false
        }else{
            return true
            }
        }

        function banChat () {
            if(banChats == true) {
            return false
        }else{
            return true
            }
        }

        if (typeof Array.prototype.splice === 'undefined') {
            Array.prototype.splice = function (index, howmany, elemes) {
                howmany = typeof howmany === 'undefined' || this.length;
                var elems = Array.prototype.slice.call(arguments, 2), newArr = this.slice(0, index), last = this.slice(index + howmany);
                newArr = newArr.concat.apply(newArr, elems);
                newArr = newArr.concat.apply(newArr, last);
                return newArr;
            }
        }

        const apakah = [
            'Ya',
            'Tidak',
            'Coba Ulangi'
            ]

        const bisakah = [
            'Bisa',
            'Tidak Bisa',
            'Coba Ulangi'
            ]

        const kapankah = [
            '1 Minggu lagi',
            '1 Bulan lagi',
            '1 Tahun lagi'
            ]

        const rate = [
            '100%',
            '95%',
            '90%',
            '85%',
            '80%',
            '75%',
            '70%',
            '65%',
            '60%',
            '55%',
            '50%',
            '45%',
            '40%',
            '35%',
            '30%',
            '25%',
            '20%',
            '15%',
            '10%',
            '5%'
            ]

        const mess = {
            wait: '[ 🕜 ] Mohon menunggu, permintaan anda sedang di proses.',
            error: {
                St: '[❗] Kirim gambar dengan caption *#sticker* atau tag gambar yang sudah dikirim',
                Ti: '[❗] Replay sticker dengan caption *#stickertoimg* atau tag sticker yang sudah dikirim',
                Qm: '[❗] Terjadi kesalahan, mungkin themenya tidak tersedia!',
                Yt3: '[❗] Terjadi kesalahan, tidak dapat meng konversi ke mp3!',
                Yt4: '[❗] Terjadi kesalahan, mungkin error di sebabkan oleh sistem.',
                Ig: '[❗] Terjadi kesalahan, mungkin karena akunnya private',
                Ki: '[❗] Bot tidak bisa mengeluarkan Admin group!',
                Sp: '[❗] Bot tidak bisa mengeluarkan Admin',
                Ow: '[❗] Bot tidak bisa mengeluarkan Owner',
                Bk: '[❗] Bot tidak bisa memblockir Owner',
                Ad: '[❗] Tidak dapat menambahkan target, mungkin karena di private',
                Iv: '[❗] Link yang anda kirim tidak valid!'
            }
        }

        const time = moment(t * 1000).format('DD/MM HH:mm:ss')
        const timu = moment(t * 1000).format('DD/MM/YYYY');
        const timi = moment(t * 1000).add(30, 'days').calendar();
        const botNumber = await xbot.getHostNumber()
        const blockNumber = await xbot.getBlockedIds()
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await xbot.getGroupAdmins(groupId) : ''
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
        const serial = sender.id

        const isAdmin = adminNumber.includes(sender.id)
        const ownerNumber = '6281342077268@c.us'
        const isOwner = ownerNumber.includes(sender.id)
        
        const isWhite = (chatId) => adminNumber.includes(chatId) ? true : false
        const isWhiteList = (chatId) => {
            if(adminNumber.includes(sender.id)){
                if(muted.includes(chatId)) return false
                return true
            }else{
                return false
            }
        }
        
        const isBanned = banned.includes(sender.id)
        const isPremium = premium.includes(sender.id)
        const isBlocked = blockNumber.includes(sender.id)
        const isNsfw = isGroupMsg ? nsfw_.includes(chat.id) : false
        const isSimi = isGroupMsg ? simi_.includes(chat.id) : false
        const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
        const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi)
        const url = args.length !== 0 ? args[0] : ''

        const tutor = 'https://i.ibb.co/Hp1XGbL/a4dec92b8922.jpg'
        const errorurl = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
        const errorurl2 = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
        // FUNCTION
                function isMsgLimit(id){
                    if (isAdmin) {return false;}
                    let found = false;
                    for (let i of msgLimit){
                        if(i.id === id){
                            if (i.msg >= 12) {
                                found === true 
                                xbot.reply(from, '*[ANTI-SPAM]*\nMaaf, akun anda kami blok karena SPAM, dan tidak bisa di UNBLOK!', id)
                                xbot.contactBlock(id)
                                banned.push(id)
                                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(banned))
                                return true;
                            }else if(i.msg >= 7){
                                found === true
                                xbot.reply(from, '*[ANTI-SPAM]*\nNomor anda terdeteksi spam!\nMohon tidak spam 5 pesan lagi atau nomor anda AUTO BLOK!', id)
                                return true
                            }else{
                                found === true
                                return false;
                            }   
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, msg:1};
                        msgLimit.push(obj);
                        fs.writeFileSync('./lib/database/msgLimit.json',JSON.stringify(msgLimit));
                        return false;
                    }  
                }
                function addMsgLimit(id){
                    if (isAdmin) {return;}
                    var found = false
                    Object.keys(msgLimit).forEach((i) => {
                        if(msgLimit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        msgLimit[found].msg += 1;
                        fs.writeFileSync('./lib/database/msgLimit.json',JSON.stringify(msgLimit));
                    }
                }
                function isLimit(id){
                    if (isAdmin) {return false;}
                    let found = false;
                    for (let i of limit){
                        if(i.id === id){
                            let limits = i.limit;
                            if (limits >= limitCount) {
                                found = true;
                                xbot.reply(from, 'Perintah BOT anda sudah mencapai batas, coba esok hari :)', id)
                                return true;
                            }else{
                                limit
                                found = true;
                                return false;
                            }
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, limit:1};
                        limit.push(obj);
                        fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit));
                        return false;
                    }  
                }
                function limitAdd (id) {
                    if (isAdmin) {return;}
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit += 1;
                        fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit));
                    }
                }
        
                function monospace(string) {
                    return '```' + string + '```'
                }
                // END HELPER FUNCTION
           /*     if (isGroupMsg && !isGroupAdmins && !isAdmin && !isOwner){
                    if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                        const check = await xbot.inviteInfo(chats);
                        if (!check) {
                            return
                        } else {
                            xbot.reply(from, `*「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`, id).then(() => {
                                xbot.removeParticipant(groupId, sender.id)
                            })
                        }
                    }
                }
                // MRHRTZ
 /*               if (chats.match("anjing") || chats.match("gblk") || chats.match("tolol") || chats.match("kntl")) {
                    if (!isGroupAdmins) {
                        return xbot.reply(from, "JAGA UCAPAN DONG!! 😠", id)
                        .then(() => xbot.removeParticipant(groupId, sender.id))
                        .then(() => {
                            xbot.sendText(from, `*「 ANTI BADWORD 」*\nKamu mengirimkan kata badword/toxic, maaf kamu di kick dari grup 🙁`)
                        }).catch(() => xbot.sendText(from, `Untung XBOT Bukan Admin, Kalo Jadi Admin Udah Aku Kick Tuh! 😑`))
                    } else {
                        return xbot.reply(from, "Tolong Jaga Ucapan Min 😇", id)
                    }
                } */
                
                if(body === '#mute' && isMuted(chatId) == true){
                    if(isGroupMsg) {
                        if (!isAdmin) return xbot.reply(from, 'Maaf, perintah ini hanya dapat dilakukan oleh admin XBOT!', id)
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        muted.push(chatId)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        xbot.reply(from, 'Bot telah di mute pada chat ini! #unmute untuk unmute!', id)
                    }else{
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        muted.push(chatId)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        reply(from, 'Bot telah di mute pada chat ini! #unmute untuk unmute!', id)
                    }
                }
                if(body === '#unmute' && isMuted(chatId) == false){
                    if(isGroupMsg) {
                        if (!isAdmin) return xbot.reply(from, 'Maaf, perintah ini hanya dapat dilakukan oleh admin XBOT!', id)
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        let index = muted.indexOf(chatId);
                        muted.splice(index,1)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        xbot.reply(from, 'Bot telah di unmute!', id)         
                    }else{
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        let index = muted.indexOf(chatId);
                        muted.splice(index,1)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        xbot.reply(from, 'Bot telah di unmute!', id)                   
                    }
                }
                if (body === '#unbanchat') {
                    if (!isOwner) return xbot.reply(from, 'Maaf, perintah ini hanya dapat dilakukan oleh Owner XBOT!', id)
                    if(setting.banChats === false) return
                    setting.banChats = false
                    banChats = false
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    xbot.reply('Global chat has been disable!')
                }

 
        // [BETA] Avoid Spam Message
        if (isCmd && !isGroupMsg) {console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))}
        if (isCmd && isGroupMsg) {console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))}

        // [BETA] Avoid Spam Message
        addFilter(from)
        if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner ) {
        switch(command) {

        case '#banchat':
            if (setting.banChats === true) return
            if (!isOwner) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner XBOT!', id)
            setting.banChats = true
            banChats = true
            fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
            xbot.reply('Global chat has been enable!')
            break

        case '#unmute':
            console.log(`Unmuted ${name}!`)
            await xbot.sendSeen(from)
            break
        case '#unbanchat':
            console.log(`Banchat ${name}!`)
            await xbot.sendSeen(from)
            break
        case '#sticker':
        case '#stiker':
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await xbot.sendImageAsSticker(from, imageBase64)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await xbot.sendImageAsSticker(from, imageBase64)
            } else if (args.length === 2) {
                const url = args[1]
                if (url.match(isUrl)) {
                    await xbot.sendStickerfromUrl(from, url, { method: 'get' })
                        .catch(err => console.log('Caught exception: ', err))
                } else {
                    xbot.reply(from, mess.error.Iv, id)
                }
            } else {
                    xbot.reply(from, mess.error.St, id)
            }
            break
// Credit SlavyanDesu <--- stoopid
            // Note this only work if you have libwebp installed!
            // And I know the code is messy ok don't bully me :))))
        case '#stwm':
         //   if (!isAdmin) return await xbot.reply(from, `Fitur ini hanya untuk user Premium\n\nKetik #owner\n untuk menyewa bot ini ke grup anda.`, id)
            if (!q.includes('|')) return await xbot.reply(from, `Untuk membuat Sticker dengan watermark\nsilahkan upload foto atau reply foto dengan perintah #stickerwm packagename | author\n\nContoh: #stickerwm 2020 | XBOT`, id)
            if (isMedia && isImage || isQuotedImage) {
            await xbot.reply(from, mess, id)
		const stimker = body.slice(5)
            const packname = stimker.split('|')[0]
            const author = stimker.split('|')[1]
            exif.create(packname, author)
            const encryptMedia = isQuotedImage ? quotedMsg : message
            const mediaData = await decryptMedia(encryptMedia, uaOverride)
            webp.buffer2webpbuffer(mediaData, 'jpg', '-q 80')
                .then(async (res) => {
                    fs.writeFileSync(`./temp/stage_${sender.id}.webp`, res)
                    await exec(`webpmux -set exif ./temp/data.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: true })
                    if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                        fs.readFile(`./temp/${sender.id}.webp`, (err, data) => {
                            if (err) return console.error(err)
                                sharp(data)
                                    .resize(256, 256)
                                    .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                                        if (err) return console.error(err)
                                        const data = fs.readFileSync(`./temp/${sender.id}.webp`)
                                        const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                        await xbot.sendRawWebpAsSticker(from, base64)
                                        fs.unlinkSync(`./temp/stage_${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/${sender.id}.webp`)
                                        fs.unlinkSync('./temp/data.exif')
                                    })
                        })
                    }
                })
                .catch(async (err) => {
                    console.error(err)
                    await xbot.reply(from, 'Error!', id)
                })
            } else {
                await xbot.reply(from, `Format Yang Anda Masukkan Salah !`, id)
            }
    break
        case '#stickergif': // INSTALL FFMPEG, IF YOU WANT THIS COMMAND WORK!
        case '#stikergif': // TUTORIAL IN README, PLEASE READ!
        case '#sgif': // MRHRTZ
            xbot.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
            if (isMedia && type === 'video' || mimetype === 'image/gif') {
                try {
                    const mediaData = await decryptMedia(message, uaOverride)
                    await xbot.sendMp4AsSticker(from, mediaData, {fps: 10, startTime: `00:00:00.0`, endTime : `00:00:05.0`,loop: 0})
                } catch (e) {
                    xbot.reply(from, `Size media terlalu besar! mohon kurangi durasi video.`)
                }
            } else if (quotedMsg && quotedMsg.type == 'video' || quotedMsg && quotedMsg.mimetype == 'image/gif') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                await xbot.sendMp4AsSticker(from, mediaData, {fps: 10, startTime: `00:00:00.0`, endTime : `00:00:05.0`,loop: 0})
            } else {
                xbot.reply(from, `Kesalahan ⚠️ Hanya bisa video/gif apabila file media berbentuk gambar ketik #stickergif`, id)
            } 
            break
        case '#stic': {
            if (isMedia || isQuotedImage || isQuotedFile) {
            const encryptMedia = isQuotedImage || isQuotedFile ? quotedMsg : message
            const _mimetype = encryptMedia.mimetype
            const mediaData = await decryptMedia(encryptMedia)
            if (_mimetype === 'image/webp') xbot.sendRawWebpAsSticker(from, mediaData.toString('base64'), false)
            const sticker = await processSticker(mediaData, 'contain')
            await xbot.sendRawWebpAsSticker(from, sticker.toString('base64'), false)
            } else xbot.reply(from, config.msg.noMedia, id)
                }
            break

        case '#ttp':
                if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', message.id)
                try
                {
                    const string = body.toLowerCase().includes('#ttp') ? body.slice(5) : body.slice(5)
                    if(args)
                    {
                        if(quotedMsgObj == null)
                        {
                            const gasMake = await getStickerMaker(string)
                            if(gasMake.status == true)
                            {
                                try{
                                    await xbot.sendImageAsSticker(from, gasMake.base64)
                                }catch(err) {
                                    await xbot.reply(from, 'Gagal membuat.', id)
                                } 
                            }else{
                                await xbot.reply(from, gasMake.reason, id)
                            }
                        }else if(quotedMsgObj != null){
                            const gasMake = await getStickerMaker(quotedMsgObj.body)
                            if(gasMake.status == true)
                            {
                                try{
                                    await xbot.sendImageAsSticker(from, gasMake.base64)
                                }catch(err) {
                                    await xbot.reply(from, 'Gagal membuat.', id)
                                } 
                            }else{
                                await xbot.reply(from, gasMake.reason, id)
                            }
                        }
                       
                    }else{
                        await xbot.reply(from, 'Tidak boleh kosong.', id)
                    }
                }catch(error)
                {
                    console.log(error)
                }
            break;
                case '#st1':
                if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', message.id)
                  const tk = body.slice(4)
                  if (!tk) return await xbot.reply(from, 'Text tidak boleh kosong', id)
                //  if (args.length >= 6) return
               //   await xbot.reply(from, 'Ups. Maks 5 kata ya sob!', id)
                    const txt = await stext(tk)
                    xbot.sendImageAsSticker(from, txt)                       
                        limitAdd(serial)
                    break
        case '#ttg':
            if (!isGroupMsg) return xbot.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            try {
                if (quotedMsgObj == null) {
                    if (args.length === 1) return xbot.reply(from, `Kirim perintah *#ttg [ Teks ]*, contoh *#ttg aku bukan boneka*`, id)
                        await xbot.sendStickerfromUrl(from, `https://api.vhtear.com/textxgif?text=${body.slice(5)}&apikey=${vhtearkey}`)
                        limitAdd(serial)
                } else {
                    await xbot.sendStickerfromUrl(from, `https://api.vhtear.com/textxgif?text=${quotedMsgObj}&apikey=${vhtearkey}`)
                    limitAdd(serial)
                }
            } catch(e) {
                console.log(e)
                xbot.reply(from, 'Maaf, Server sedang Error')
            }
            break
 
        case '#stickertoimg':
        case '#toimg':
                if (quotedMsg && quotedMsg.type == 'sticker') {
                const mediaData = await decryptMedia(quotedMsg)
                xbot.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu!`, id)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await xbot.sendFile(from, imageBase64, 'imagesticker.jpg', 'Success Convert Sticker to Image!', id)
            } else if (!quotedMsg) return xbot.reply(from, `Mohon tag sticker yang ingin dijadikan gambar!`, id)
            break

                case '#stickerlightning':
        case '#slightning':
        case '#slight':
             xbot.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrle = await uploadImages(mediaData, false)
                const imgnye = await stickerlight(getUrle)
                const Slight = imgnye.result.imgUrl
                await xbot.sendStickerfromUrl(from, Slight)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const getUrle = await uploadImages(mediaData, false)
                const imgnye = await stickerlight(getUrle)
                const Slight = imgnye.result.imgUrl
                await xbot.sendStickerfromUrl(from, Slight)
            } else {
                await xbot.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan #stickerlightning`, id)
            }
            break
        case '#stickerfire':
        case '#sfire':
           // // // //  if (!isPremium) return xbot.reply(from, `Perintah ini hanya bisa di gunakan oleh Member Premium!`, id)
            xbot.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrli = await uploadImages(mediaData, false)
                const imgnya = await stickerburn(getUrli)
                const Sfire = imgnya.result.imgUrl
                await xbot.sendStickerfromUrl(from, Sfire)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const getUrli = await uploadImages(mediaData, false)
                const imgnya = await stickerburn(getUrli)
                const Sfire = imgnya.result.imgUrl
                await xbot.sendStickerfromUrl(from, Sfire)
            } else {
                await xbot.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan #stickerfire`, id)
            }
            break
        case '#groupinfo' :
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', message.id)
            isMuted(chatId) == false
            var totalMem = chat.groupMetadata.participants.length
            var desc = chat.groupMetadata.desc
            var groupname = name
            var welgrp = welkom.includes(chat.id)
            var leftgrp = left.includes(chat.id)
            var ngrp = nsfw_.includes(chat.id)
            var simu = simi_.includes(chat.id)
            var grouppic = await xbot.getProfilePicFromServer(chat.id)
            if (grouppic == undefined) {
                 var pfp = errorurl
            } else {
                 var pfp = grouppic 
            }
            await xbot.sendFileFromUrl(from, pfp, 'group.png', `➸ *Name : ${groupname}* 
*➸ Members : ${totalMem}*
*➸ Welcome : ${welgrp}*
*➸ Left : ${leftgrp}*
*➸ NSFW : ${ngrp}*
*➸ Simsimi : ${simu}*
*➸ Group Description* 
${desc}`)
            break
        case '#quoterandom' :
        case '#quote' :
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            xbot.sendText(from, quotedd())
            break
        case '#tts':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            try {
                if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#tts [ Bahasa ] [ Teks ]*, contoh *#tts id halo semua*')
                var dataBhs = args[1]      
                const ttsHZ = require('node-gtts')(dataBhs)
                var dataText = body.slice(8)
                if (dataText === '') return xbot.reply(from, 'Masukkan teksnya', id)
                if (dataText.length > 500) return xbot.reply(from, 'Teks terlalu panjang!', id)
                var dataBhs = body.slice(5, 7)
                ttsHZ.save('./media/tts.mp3', dataText, function () {
                xbot.sendPtt(from, './media/tts.mp3', id)
                })
            } catch (err){
                console.log(err)
                xbot.reply(from, bahasa_list, id)
            }
            break
        case '#koin':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const side = Math.floor(Math.random() * 2) + 1
            if (side == 1) {
              xbot.sendStickerfromUrl(from, 'https://i.ibb.co/YTWZrZV/2003-indonesia-500-rupiah-copy.png', { method: 'get' })
            } else {
              xbot.sendStickerfromUrl(from, 'https://i.ibb.co/bLsRM2P/2003-indonesia-500-rupiah-copy-1.png', { method: 'get' })
            }
            break
        case '#dadu':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const dice = Math.floor(Math.random() * 6) + 1
            await xbot.sendStickerfromUrl(from, 'https://www.random.org/dice/dice' + dice + '.png', { method: 'get' })
            break
        case '#kapankah':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const when = args.join(' ')
            const ans = kapankah[Math.floor(Math.random() * (kapankah.length))]
            if (!when) xbot.reply(from, '⚠️ Format salah! Ketik *#menu* untuk penggunaan.')
            await xbot.sendText(from, `Pertanyaan: *${when}* \n\nJawaban: ${ans}`)
            break
        case '#nilai':
        case '#rate':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const rating = args.join(' ')
            const awr = rate[Math.floor(Math.random() * (rate.length))]
            if (!rating) xbot.reply(from, '⚠️ Format salah! Ketik *#menu* untuk penggunaan.')
            await xbot.sendText(from, `Pertanyaan: *${rating}* \n\nJawaban: ${awr}`)
            break
        case '#apakah':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const nanya = args.join(' ')
            const jawab = apakah[Math.floor(Math.random() * (apakah.length))]
            if (!nanya) xbot.reply(from, '⚠️ Format salah! Ketik *#menu* untuk penggunaan.')
            await xbot.sendText(from, `Pertanyaan: *${nanya}* \n\nJawaban: ${jawab}`)
            break
         case '#bisakah':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const bsk = args.join(' ')
            const jbsk = bisakah[Math.floor(Math.random() * (bisakah.length))]
            if (!bsk) xbot.reply(from, '⚠️ Format salah! Ketik *#menu* untuk penggunaan.')
            await xbot.sendText(from, `Pertanyaan: *${bsk}* \n\nJawaban: ${jbsk}`)
            break
        case '#owner':
        case '#creator':
            xbot.sendContact(chatId, `6281342077268@c.us`)
            xbot.reply(from, 'Itu nomor ownerku, kalo mau pasang iklan atau mau jadi premium. chat aja diaa', id)
            break
        // ON OFF
        case '#nsfw':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length === 1) return xbot.reply(from, 'Pilih enable atau disable!', id)
            if (args[1].toLowerCase() === 'enable') {
                nsfw_.push(chat.id)
                fs.writeFileSync('./lib/database/nsfwz.json', JSON.stringify(nsfw_))
                xbot.reply(from, 'NSFW berhasil di aktifkan di group ini! kirim perintah *#nsfwMenu* untuk mengetahui menu', id)
            } else if (args[1].toLowerCase() === 'disable') {
                nsfw_.splice(chat.id, 1)
                fs.writeFileSync('./lib/database/nsfwz.json', JSON.stringify(nsfw_))
                xbot.reply(from, 'NSFW berhasil di nonaktifkan di group ini!', id)
            } else {
                xbot.reply(from, 'Pilih enable atau disable udin!', id)
            }
            break
        case '#simi':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isAdmin) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin XBOT!', id) // Hanya Admin yang bisa mengaktifkan
            if (args.length === 1) return xbot.reply(from, 'Pilih enable atau disable!', id)
            if (args[1].toLowerCase() === 'enable') {
                simi_.push(chat.id)
                fs.writeFileSync('./lib/database/Simsimi.json', JSON.stringify(simi_))
                xbot.reply(from, 'Simsimi berhasil di aktifkan di group ini! Kirim perintah *# [teks]*\nContoh : *# halo*', id)
            } else if (args[1].toLowerCase() === 'disable') {
                simi_.splice(chat.id, 1)
                fs.writeFileSync('./lib/database/Simsimi.json', JSON.stringify(simi_))
                xbot.reply(from, 'Simsimi berhasil di nonaktifkan di group ini!', id)
            } else {
                xbot.reply(from, 'Pilih enable atau disable udin!', id)
            }
            break
        case '#group':
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (args.length === 1) return xbot.reply(from, 'Pilih open atau close!', id)
            if (args[1].toLowerCase() === 'open') {
                xbot.setGroupToAdminsOnly(groupId, false)
                xbot.sendTextWithMentions(from, `Group telah dibuka oleh admin @${sender.id.replace('@c.us','')}\nSekarang *semua member* dapat mengirim pesan`)
            } else if (args[1].toLowerCase() === 'close') {
                xbot.setGroupToAdminsOnly(groupId, true)
                xbot.sendTextWithMentions(from, `Group telah ditutup oleh admin @${sender.id.replace('@c.us','')}\nSekarang *hanya admin* yang dapat mengirim pesan`)
            } else {
                xbot.reply(from, 'Pilih open atau disable close!', id)
            }
            break
        case '#left':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length === 1) return xbot.reply(from, 'Pilih enable atau disable!', id)
            if (args[1].toLowerCase() === 'enable') {
                left.push(chat.id)
                fs.writeFileSync('./lib/database/left.json', JSON.stringify(left))
                xbot.reply(from, 'Fitur left berhasil di aktifkan di group ini!', id)
            } else if (args[1].toLowerCase() === 'disable') {
                left.splice(chat.id, 1)
                fs.writeFileSync('./lib/database/left.json', JSON.stringify(left))
                xbot.reply(from, 'Fitur left berhasil di nonaktifkan di group ini!', id)
            } else {
                xbot.reply(from, 'Pilih enable atau disable udin!', id)
            }
            break
        case '#welcome':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length === 1) return xbot.reply(from, 'Pilih enable atau disable!', id)
            if (args[1].toLowerCase() === 'enable') {
                welkom.push(chat.id)
                fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(welkom))
                xbot.reply(from, 'Fitur welcome berhasil di aktifkan di group ini!', id)
            } else if (args[1].toLowerCase() === 'disable') {
                welkom.splice(chat.id, 1)
                fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(welkom))
                xbot.reply(from, 'Fitur welcome berhasil di nonaktifkan di group ini!', id)
            } else {
                xbot.reply(from, 'Pilih enable atau disable udin!', id)
            }
            break
        // ANIME //
        case '#otakudesu':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#otakudesu [query]*\nContoh : *#otakudesu darling in the franxx*', id)
            const animes = await axios.get('https://mhankbarbar.tech/api/otakudesu?q=' + body.slice(7) + '&apiKey=' + barbarkey)
            if (animes.data.error) return xbot.reply(from, animes.data.error, id)
            const res_animes = `${animes.data.title}\n\n${animes.data.info}\n\n${animes.data.sinopsis}`
            xbot.sendFileFromUrl(from, animes.data.thumb, 'otakudesu.jpg', res_animes, id)
            break
        case '#kusonime':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#kusonime [query]*\nContoh : *#kusonime darling in the franxx*', id)
            const animeq = await axios.get('https://mhankbarbar.tech/api/kuso?q=' + body.slice(7) + '&apiKey=' + barbarkey)
            if (animeq.data.error) return xbot.reply(from, animeq.data.error, id)
            const res_animeq = `${animeq.data.title}\n\n${animeq.data.info}\n\n${animeq.data.sinopsis}\n\n${animeq.data.link_dl}`
            xbot.sendFileFromUrl(from, animeq.data.thumb, 'kusonime.jpg', res_animeq, id)
            break
        case '#dewabatch':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#dewabatch [query]*\nContoh : *#dewabatch darling in the franxx*', id)
            const animek = await axios.get('https://mhankbarbar.tech/api/dewabatch?q=' + body.slice(7) + '&apiKey=' + barbarkey)
            if (animek.data.error) return xbot.reply(from, animek.data.error, id)
            const res_animek = `${animek.data.result}\n\n${animek.data.sinopsis}`
            xbot.sendFileFromUrl(from, animek.data.thumb, 'dewabatch.jpg', res_animek, id)
            break
        case '#komiku':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#komiku [query]*\nContoh : *#komiku darling in the franxx*', id)
            const animep = await axios.get('https://mhankbarbar.tech/api/komiku?q=' + body.slice(7) + '&apiKey=' + barbarkey)
            if (animep.data.error) return xbot.reply(from, animep.data.error, id)
            const res_animep = `${animep.data.info}\n\n${animep.data.sinopsis}\n\n${animep.data.link_dl}`
            xbot.sendFileFromUrl(from, animep.data.thumb, 'komiku.jpg', res_animep, id)
            break
        case '#pinterest':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#pinterest [query]*\nContoh : *#pinterest XBOT*', id)
            const ptrsq = body.slice(11)
            const ptrs = await axios.get('https://api.fdci.se/rep.php?gambar='+ptrsq)
            const b = JSON.parse(JSON.stringify(ptrs.data))
            const ptrs2 =  b[Math.floor(Math.random() * b.length)]
            const image = await bent("buffer")(ptrs2)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            xbot.sendImage(from, base64, 'ptrs.jpg', `*Pinterest*\n\n*Hasil Pencarian : ${ptrsq}*`)
            break
        case '#nhview':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#nhview [212121]*\nContoh : *#nhview 321421*', id)
            const nhsh = body.slice(11)
            const nhsh2 = await axios.get('https://mnazria.herokuapp.com/api/nhentai?code='+nhsh)
            for (let i = 0; i < nhsh2.length; i++) {
                await xbot.sendImage(from, nhsh2[i].data, 'thumbserc.jpg', '', id)
                }
            break
        case '#loli':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const loli = await axios.get(`https://api.vhtear.com/randomloli&apikey=${vhtearkey}`)
            const loly = loli.data.result
            xbot.sendFileFromUrl(from, loly.result, 'loli.jpeg', '*LOLI*', id)
            break
        case '#shota':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const imageToBase64 = require('image-to-base64')
            var shouta = ['shota anime','anime shota'];
            var shotaa = shouta[Math.floor(Math.random() * shouta.length)];
            var urlshot = "https://api.fdci.se/rep.php?gambar=" + shotaa;
            
            axios.get(urlshot)
            .then((result) => {
            var sht = JSON.parse(JSON.stringify(result.data));
            var shotaak =  sht[Math.floor(Math.random() * sht.length)];
            imageToBase64(shotaak)
            .then(
                (response) => {
            let img = 'data:image/jpeg;base64,'+response
            xbot.sendFile(from, img, "shota.jpg", `*SHOTA*`, id)
                    }) 
                .catch(
                    (error) => {
                        console.log(error);
                    })
            })
            break
        case '#waifu':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const waifu = await axios.get('https://mhankbarbar.tech/api/waifu' + '?apiKey=' + barbarkey)
            xbot.sendFileFromUrl(from, waifu.data.image, 'Waifu.jpg', `➸ Name : ${waifu.data.name}\n➸ Description : ${waifu.data.desc}\n\n➸ Source : ${waifu.data.source}`, id)
            break
        case '#husbu':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const diti = fs.readFileSync('./lib/database/husbu.json')
            const ditiJsin = JSON.parse(diti)
            const rindIndix = Math.floor(Math.random() * ditiJsin.length)
            const rindKiy = ditiJsin[rindIndix]
            xbot.sendFileFromUrl(from, rindKiy.image, 'Husbu.jpg', rindKiy.teks, id)
            break
        case '#randomnekonime':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const nekonime = await axios.get(`https://api.vhtear.com/randomnekonime&apikey=${vhtearkey}`)
            const nekon = nekonime.data
            if (nekon.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            xbot.sendFileFromUrl(from, nekon.result, `Nekonime${ext}`, 'Nekonime!', id)
            break
        case '#randomtrapnime':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return xbot.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const trapnime = await axios.get('https://mhankbarbar.tech/api/random/trap')
            const trapn = trapnime.data.result
            if (trapn.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            xbot.sendImage(from, trapn.result, `trapnime${ext}`, 'Trapnime!', id)
            break
        case '#randomhentai':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return xbot.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const hentai = await axios.get(`https://api.vhtear.com/randomhentai?apikey=${vhtearkey}`)
            const henta = hentai.data.result
            if (henta.url.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            xbot.sendImage(from, henta.result, `RandomHentai${ext}`, 'Random Hentai!', id)
            break
        case '#randomnsfwneko':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return xbot.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const nsfwneko = await axios.get('https://mhankbarbar.tech/api/random/nsfwneko')
            const nsfwn = nsfwneko.data
            if (nsfwn.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            xbot.sendImage(from, nsfwn.result, `NsfwNeko${ext}`, 'NsfwNeko!', id)
            break
        case '#randomanime':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const ranime = await axios.get('https://api.computerfreaker.cf/v1/anime')
            const ranimen = ranime.data
            if (ranimen.url.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            xbot.sendFileFromUrl(from, ranime.url, `RandomAnime${ext}`, 'Random Anime!', id)
            break
        case '#subreddit':
            arg = body.trim().split(' ')
            const sr = arg[1]
            try {
            const response1 = await axios.get('https://meme-api.herokuapp.com/gimme/' + sr + '/');
            const { postLink, title, subreddit, url, nsfw, spoiler } = response1.data
                if (nsfw == true) {
                    if ((isGroupMsg) && (isNsfw)) {
                        await xbot.sendFileFromUrl(from, `${url}`, 'Reddit.jpg', `*Title*: ${title}` + '\n\n*Postlink*:' + `${postLink}`)
                    } else if ((isGroupMsg) && (!isNsfw)) {
                        await xbot.reply(from, `Nsfw belum diaktifkan di Grup *${name}*`, id)
                    }
                } else { 
                    await xbot.sendFileFromUrl(from, `${url}`, 'Reddit.jpg', `*Title*: ${title}` + '\n\n*Postlink*:' + `${postLink}`)
                }
            } catch(err) {
                await xbot.sendFileFromUrl(from, errorurl, id) 
            }
            break
        case '#nhder':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return xbot.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length >=2){
                const code = args[1]
                const url = 'https://nhder.herokuapp.com/download/nhentai/'+code+'/zip'
                const short = []
                const shortener = await urlShortener(url)
                url['short'] = shortener
                short.push(url)
                const caption = `*NEKOPOI DOWNLOADER*\n\nLink: ${shortener}`
                xbot.sendText(from, caption)
            } else {
                xbot.sendText(from, 'Maaf tolong masukan code nuclear')
            }
            break
        /*case '#wallanime' :
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const walnime = ['https://wallpaperaccess.com/full/395986.jpg','https://wallpaperaccess.com/full/21628.jpg','https://wallpaperaccess.com/full/21622.jpg','https://wallpaperaccess.com/full/21612.jpg','https://wallpaperaccess.com/full/21611.png','https://wallpaperaccess.com/full/21597.jpg','https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png','https://wallpaperaccess.com/full/21591.jpg','https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg','https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg','https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png','https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg','https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg','https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png','https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png','https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg','https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg','https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png','https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png','https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg','https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png','https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg','https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg','https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg','https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png','https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg','https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg','https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png','https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg','https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png','https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg','https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg','https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg','https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png','https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg','https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png','https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg','https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg','https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg','https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg','https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg','https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg','https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg','https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg','https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png','https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg','https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg','https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg','https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png','https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png','https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png','https://cdn.nekos.life/wallpaper/yO6ioREenLA.png','https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg','https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png','https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png','https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg','https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg','https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg','https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg','https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/32EAswpy3M8.png','https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png','https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg','https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png','https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg','https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png','https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png','https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg','https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg','https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png','https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png','https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg','https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg','https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg','https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png','https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg','https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png','https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg','https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png','https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg','https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg','https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg','https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg','https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg','https://cdn.nekos.life/wallpaper/9ru2luBo360.png','https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png','https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png','https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg','https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg','https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg','https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg','https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png','https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png','https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg','https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg','https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png','https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg','https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg','https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg','https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg','https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg','https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg','https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg','https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg','https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg','https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg','https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png','https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg','https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png','https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg','https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png','https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg','https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png','https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png','https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png','https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png','https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png','https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png','https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png','https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg','https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg','https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg','https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg','https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg','https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png','https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg','https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg','https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg','https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg','https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg','https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg','https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png','https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png','https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png','https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg','https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg','https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg','https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg','https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg','https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png','https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png','https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg','https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg','https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg','https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png','https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png','https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg','https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png','https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg','https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg','https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png','https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg','https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg','https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg','https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg','https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg','https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png','https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png','https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg','https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png','https://cdn.nekos.life/wallpaper/58C37kkq39Y.png','https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg','https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg','https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg','https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png','https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg','https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg','https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png','https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg','https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg','https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png','https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg','https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg','https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png','https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png','https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg','https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg','https://cdn.nekos.life/wallpaper/89MQq6KaggI.png','https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']
            let walnimek = walnime[Math.floor(Math.random() * walnime.length)]
            xbot.sendFileFromUrl(from, walnimek, 'Nimek.jpg', '', id)
            break*/
        case '#quotesnime':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const skya = await axios.get('https://mhankbarbar.tech/api/quotesnime/random')
            skya_ = skya.data
            xbot.reply(from, `➸ *Quotes* : ${skya_.quote}\n➸ *Character* : ${skya_.character}\n➸ *Anime* : ${skya_.anime}`, id)
            break
        case '#meme':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const response = await axios.get('https://meme-api.herokuapp.com/gimme/wholesomeanimemes')
            const { postlink, title, subreddit, url, nsfw, spoiler } = response.data
            xbot.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`)
            break
        /* case '#nekopoi':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return xbot.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#nekopoi [linkNekopoi]*\nContoh : *#nekopoi https://nekopoi.care/tsunpuri-episode-1-subtitle-indonesia/*', id)
            try {
            xbot.reply(from, mess.wait, id)
            const nekipoi = await axios.get('https://mhankbarbar.tech/api/nekopoi?url=' + body.slice(7) + '&apikey=' + vhtearkey)
            const nekop = nekipoi.data.result
            const nekop2 = `*Anime Ditemukan!*\n➸ Judul : ${nekop.judul}\n➸ Dilihat : ${nekop.dilihat}\n➸ Info : ${nekop.info}`
            const image = await bent("buffer")(nekop.thumbnail)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            xbot.sendImage(from, base64, judul, nekop2)
            } catch (err) {
             console.error(err.message)
             await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
             xbot.sendText(ownerNumber, 'Nekopoi Error : ' + err)
           } */
            break
        case '#quoteanime':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
                        if(args[1]){
                            if(args[1] === 'anime'){
                                const anime = body.slice(13)
                                axios.get('https://animechanapi.xyz/api/quotes?anime='+anime).then(({ data }) => {
                                    let quote = data.data[0].quote 
                                    let char = data.data[0].character
                                    let anime = data.data[0].anime
                                    xbot.sendText(from, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)
                                }).catch(err => {
                                    xbot.sendText('Quote Char/Anime tidak ditemukan!')
                                })
                            }else{
                                const char = body.slice(12)
                                axios.get('https://animechanapi.xyz/api/quotes?char='+char).then(({ data }) => {
                                    let quote = data.data[0].quote 
                                    let char = data.data[0].character
                                    let anime = data.data[0].anime
                                    xbot.sendText(from, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)
                                }).catch(err => {
                                    xbot.sendText('Quote Char/Anime tidak ditemukan!')
                                })
                            }
                        }else{
                            axios.get('https://animechanapi.xyz/api/quotes/random').then(({ data }) => {
                                let penyanyi = data.result[0].penyanyi 
                                let judul = data.result[0].judul
                                let linkimg = data.result[0].linkImg
                                let lagu = data.result[0].linkMp3 
                                let size = data.result[0].filesize
                                let durasi = data.result[0].duration
                                xbot.sendText(from, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)                               
                            }).catch(err => {
                                console.log(err)
                            })
                        }
            break
        case '#malanime':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const keyword = message.body.replace('#malanime', '')
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/anime?q=${keyword}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan', id)
              return null
              }
            const { title, synopsis, episodes, url, rated, score, image_url } = parsed.results[0]
            const content = `*Anime Ditemukan!*
✨️ *Title:* ${title}
🎆️ *Episodes:* ${episodes}
💌️ *Rating:* ${rated}
❤️ *Score:* ${score}
💚️ *Synopsis:* ${synopsis}
🌐️ *URL*: ${url}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            xbot.sendImage(from, base64, title, content)
           } catch (err) {
             console.error(err.message)
             await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan')
           }
          break
        case '#malcharacter':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const keywords = message.body.replace('#malcharacter', '')
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/character?q=${keywords}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan', id)
              return null
              }
            const { name, alternative_names, url, image_url } = parsed.results[0]
            const contentt = `*Anime Ditemukan!*

✨️ *Name:* ${name}
💌️ *Alternative Names:* ${alternative_names}
🌐️ *URL*: ${url}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            xbot.sendImage(from, base64, name, contentt)
           } catch (err) {
             console.error(err.message)
             await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan')
           }
          break
   case '#cekongkir':
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return xbot.reply(from, `Kirim perintah *#cekongkir [ |kurir|dari|tujuan ]*, contoh *#cekongkir |jne|dumai|pekanbaru*`, id)
            await limitAdd(serial)
            xbot.reply(from, mess.wait, id)
            argz = body.trim().split('|')
            try {
                const kumri = argz[1]
                const formq = argz[2]
                const toq = argz[3]
                const dataplai = await axios.get(`https://api.vhtear.com/cekongkir?kurir=${kumri}&fromcity=${formq}&tocity=${toq}&apikey=${vhtearkey}`)
                const dataplay = dataplai.data.result
                 let haseel = `*pengiriman* = ${dataplay.title}\n*info* = ${dataplay.informasi}\n`
                for (let i = 0; i < dataplay.data.length; i++) {
                    haseel += `*perkiraan* : ${dataplay.data[i].etd}\n*tipe layanan* : ${dataplay.data[i].layanan}\n*tarif* : ${dataplay.data[i].tarif}\n`
                }
                await xbot.reply(from, haseel, id)
            }   catch (err){
                console.log(err)
            }
            break

		  case '#cekresi':     
        if (args.length === 1) return xbot.reply(from, 'salah! ketik #cekresi [nomor resi] [nama kurir]\nContoh: #cekresi JP0177687883 jnt', id)
        if (isLimit(serial)) return
        xbot.reply(from, mess.wait, id)
                var gntd = await axios.get(`https://api.vhtear.com/cekresi?resi=${args[1]}&kurir=${args[2]}&apikey=${vhtearkey}`)
                var gentod = gntd.data.result
                if (gentod.status.code !== 200) return xbot.reply(from, 'Upss terjadi kesalahan, pastikan data yang kamu kirimkan benar', id)
                let gindtod = `Info untuk Resi *${args[1]}*\n\n*Status*: ${gentod.result.summary.status}\n*WayBill Date*: ${gentod.result.details.waybill_date}\n*Status Pengiriman*:\n\n`
                var camtol = gentod.result.manifest
				for (let i = 0; i < camtol.length; i++) {
                    gindtod += `*City* : ${camtol[i].city_name}\n*Deskripsi* : ${camtol[i].manifest_description}\n*Tanggal*: ${camtol[i].manifest_date}\n\n`
                }
                await xbot.reply(from, gindtod, id)

        await limitAdd(serial)             
        break

        // PRAY //
        case '#jadwalshalat':
        case '#jadwalsholat':
            if (!isGroupMsg) return xbot.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return xbot.reply(from, `[❗] Kirim perintah *#jadwalShalat [ Daerah ]*\ncontoh : *#jadwalShalat Tangerang*\nUntuk list daerah kirim perintah *#listDaerah*`)
            const daerah = body.slice(14)
            const jadwalShalat = await axios.get(`https://api.vhtear.com/jadwalsholat?query=${daerah}&apiKey=${vhtearkey}`)
            if (jadwalShalat.data.error) return xbot.reply(from, jadwalShalat.data.error, id)
            const { Shubuh, Zduhur, Ashr, Magrib, Isya, kota } = await jadwalShalat.data
            arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
            tgl = new Date().getDate()
            bln = new Date().getMonth()
            thn = new Date().getFullYear()
            const resultJadwal = `「 JADWAL SHALAT 」\n\nJadwal shalat di ${kota}, ${tgl}-${arrbulan[bln]}-${thn}\n\nSubuh : ${Shubuh}\nDzuhur : ${Zduhur}\nAshar : ${Ashr}\nMaghrib : ${Magrib}\nIsya : ${Isya}`
            await limitAdd(serial)
            break
        case '#quran':
            if (!isGroupMsg) return xbot.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return xbot.reply(from, `Kirim perintah Surah Quran kamu dengan cara ketik perintah :\n*#quran* [ Urutan Surat ]\nContoh :\n*#quran 1*`, id)
            const qura = `https://api.vhtear.com/quran?no=${args[1]}&apikey=${vhtearkey}`
            const quraan = await axios.get(qura)
            const quraann = quraan.data
            let hasqu = `*「 AL-QURAN 」*\n\n*Surah : ${quraann.result.surah}*\n*Quran* : ${quraann.result.quran}*`
            await xbot.reply(from, `${hasqu}`, id).catch((e) => xbot.reply(from, `*Terdapat kesalahan saat mencari surat ${args[1]}*`, id))
            await limitAdd(serial)
            break
/*        case '#listsurah':
            if (!isGroupMsg) return xbot.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            try {
                axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/islam/surah.json')
                .then((response) => {
                    let hehex = '*「 DAFTAR SURAH 」*\n\n___________________________\n'
                    let nmr = 1
                    for (let i = 0; i < response.data.data.length; i++) {
                        hehex += nmr + '. ' +  monospace(response.data.data[i].name.transliteration.id.toLowerCase()) + '\n'
                        nmr++
                            }
                        hehex += '___________________________'
                    xbot.reply(from, hehex, id)
                })
            } catch(err) {
                xbot.reply(from, err, id)
            }
            break
        case '#infosurah':
            if (!isGroupMsg) return xbot.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length == 1) return xbot.reply(from, `Kirim perintah *#infosurah [ Nama Surah ]*\nContoh : *#infosurah al-fatihah*`, message.id)
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/islam/surah.json')
                var { data } = responseh.data
                var idx = data.findIndex(function(post, index) {
                if((post.name.transliteration.id.toLowerCase() == args[1].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[1].toLowerCase()))
                    return true;
                });
                try {
                    var pesan = "*「 INFORMASI SURAH 」*\n\n___________________________\n\n"
                    pesan = pesan + "➸ *Nama* : "+ data[idx].name.transliteration.id + "\n" + "➸ *Asma* : " +data[idx].name.short+"\n"+"➸ *Arti* : "+data[idx].name.translation.id+"\n"+"➸ *Jumlah ayat* : "+data[idx].numberOfVerses+"\n"+"➸ *Nomor surah* : "+data[idx].number+"\n"+"Jenis : "+data[idx].revelation.id+"\n"+"➸ *Keterangan* : "+data[idx].tafsir.id
                    pesan += '\n\n___________________________'
                    xbot.reply(from, pesan, message.id)
                    limitAdd(serial)
                }catch{
                    xbot.reply(from, 'Data tidak ditemukan, atau nama surah salah', id)
                }
            break*/
        case '#tafsir':
            if (!isGroupMsg) return xbot.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length == 1) return xbot.reply(from, `Kirim perintah *#tafsir [ Nama Surah ] [ Ayat ]*\nContoh : *#tafsir al-fatihah 2*`, message.id)
                var responsh = await axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/islam/surah.json')
                var {data} = responsh.data
                var idx = data.findIndex(function(post, index) {
                if((post.name.transliteration.id.toLowerCase() == args[1].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[1].toLowerCase()))
                    return true;
                });
            try{
                nmr = data[idx].number
                if(!isNaN(nmr)) {
                var responsih = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[2])
                    var {data} = responsih.data
                    pesan = ""
                    pesan = pesan + "*「 TAFSIR 」*\n\nTafsir Q.S. "+data.surah.name.transliteration.id+":"+args[2]+"\n\n"
                    pesan = pesan + data.text.arab + "\n\n"
                    pesan = pesan + "_" + data.translation.id + "_" + "\n\n" +data.tafsir.id.long
                    pesan += '\n\n___________________________'
                    xbot.reply(from, pesan, message.id)
                    limitAdd(serial)
                }
            }catch{
                xbot.reply(from, 'Data tidak ditemukan, mungkin nama surah/ayat salah', id)
            }
            break
        // MEDIA //
        case '#infogempa':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const bmkg = await axios.get('https://mhankbarbar.tech/api/infogempa'+'?apiKey='+barbarkey)
            const { potensi, koordinat, lokasi, kedalaman, magnitude, waktu, map } = bmkg.data
            const hasil = `*${waktu}*\n📍 *Lokasi* : *${lokasi}*\n〽️ *Kedalaman* : *${kedalaman}*\n💢 *Magnitude* : *${magnitude}*\n🔘 *Potensi* : *${potensi}*\n📍 *Koordinat* : *${koordinat}*`
            xbot.sendFileFromUrl(from, map, 'shakemap.jpg', hasil, id)
            break
        case '#ssweb':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#ssweb [linkWeb]*\nContoh : *#ssweb https://neonime.vip*', id)
            const ssw = await axios.get('https://mhankbarbar.tech/api/url2image?url=' + body.slice(7) + '&apiKey=' + barbarkey)
            const ssww = ssw.data
            if (ssww.error) return xbot.reply(from, ssww.error, id)
            const ssw2 = `Filesize: ${ssww.filesize}`
            xbot.sendFileFromUrl(from, ssww.result, 'ssweb.jpg', ssw2, id)
            break
        case '#shorturl':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#shorturl [linkWeb]*\nContoh : *#shorturl https://neonime.vip*', id)
            const surl = await axios.get('https://api.vhtear.com/shortener?link=' + body.slice(10) + '&apikey=' + vhtearkey)
            const surll = surl.data
            if (surll.error) return xbot.reply(from, ssww.error, id)
            const surl2 = `Link : ${surll.result.Url}\nShort URL : ${surll.result.Short}`
            xbot.sendText(from, surl2, id)
            break
        case '#cuaca':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#cuaca [tempat]*\nContoh : *#cuaca tangerang', id)
            const tempat = body.slice(7)
            const weather = await axios.get('https://mhankbarbar.tech/api/cuaca?q='+ tempat +'&apiKey='+ barbarkey)
            const weatherr = weather.data
            if (weatherr.error) {
                xbot.reply(from, weatherr.error, id)
            } else {
                xbot.reply(from, `➸ Tempat : ${weatherr.result.tempat}\n\n➸ Angin : ${weatherr.result.angin}\n➸ Cuaca : ${weatherr.result.cuaca}\n➸ Deskripsi : ${weatherr.result.desk}\n➸ Kelembapan : ${weatherr.result.kelembapan}\n➸ Suhu : ${weatherr.result.suhu}\n➸ Udara : ${weatherr.result.udara}`, id)
            }
            break
        case '#covid':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const country = await slicedArgs.join(' ')
            console.log(country)
            const response2 = await axios.get('https://coronavirus-19-api.herokuapp.com/countries/' + country + '/')
            const { cases, todayCases, deaths, todayDeaths, active } = response2.data
                await xbot.sendText(from, '🌎️ Covid Info - ' + country + ' 🌍️\n\n✨️ Total Cases: ' + `${cases}` + '\n📆️ Today\'s Cases: ' + `${todayCases}` + '\n☣️ Total Deaths: ' + `${deaths}` + '\n☢️ Today\'s Deaths: ' + `${todayDeaths}` + '\n⛩️ Active Cases: ' + `${active}` + '.')
            break
		case '#cekjodoh':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)

			if (args.length !== 2) return xbot.reply(from, `Untuk mengecek jodoh melalui nama\nketik: #cekjodoh nama-kamu nama-pasangan\n\ncontoh: #cekjodoh Alif Fafa\n\nhanya bisa pakai nama panggilan (satu kata)`)
			rugaapi.cekjodoh(args[0],args[1])
			.then(async(res) => {
				await xbot.sendFileFromUrl(from, `${res.link}`, '', `${res.text}`, id)
			})
			break
			
        // Random Kata
	case '#motivasi':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            fetch('https://raw.githubusercontent.com/selyxn/motivasi/main/motivasi.txt')
            .then(res => res.text())
            .then(body => {
                let splitmotivasi = body.split('\n')
                let randommotivasi = splitmotivasi[Math.floor(Math.random() * splitmotivasi.length)]
                xbot.reply(from, randommotivasi, id)
            })
            .catch(() => {
                xbot.reply(from, 'Ada yang Error!', id)
            })
            break
	case '#howgay':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)

		if (args.length == 0) return xbot.reply(from, `Untuk mengetahui seberapa gay seseorang gunakan #howgay namanya\n\nContoh: #howgay Nazaar`, id)
            fetch('https://raw.githubusercontent.com/xPenz69/HowGay-Lesbi/main/gay.txt')
            .then(res => res.text())
            .then(body => {
                let splithowgay = body.split('\n')
                let randomhowgay = splithowgay[Math.floor(Math.random() * splithowgay.length)]
                xbot.reply(from, randomhowgay, id)
            })
            .catch(() => {
                xbot.reply(from, 'Ada yang Error!', id)
            })
            break
        case '#fakta':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt')
            .then(res => res.text())
            .then(body => {
                let splitnix = body.split('\n')
                let randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                xbot.reply(from, randomnix, id)
            })
            .catch(() => {
                xbot.reply(from, 'Ada yang Error!', id)
            })
            break
        case '#katabijak':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/katabijax.txt')
            .then(res => res.text())
            .then(body => {
                let splitbijak = body.split('\n')
                let randombijak = splitbijak[Math.floor(Math.random() * splitbijak.length)]
                xbot.reply(from, randombijak, id)
            })
            .catch(() => {
                xbot.reply(from, 'Ada yang Error!', id)
            })
            break
        case '#pantun':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)    
			fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/pantun.txt')
            .then(res => res.text())
            .then(body => {
                let splitpantun = body.split('\n')
                let randompantun = splitpantun[Math.floor(Math.random() * splitpantun.length)]
                xbot.reply(from, randompantun.replace(/aruga-line/g,"\n"), id)
            })
            .catch(() => {
                xbot.reply(from, 'Ada yang Error!', id)
            })
            break
        case '#quote':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            const quotex = await rugaapi.quote()
            await xbot.reply(from, quotex, id)
            .catch(() => {
                xbot.reply(from, 'Ada yang Error!', id)
            })
            break

        case '#spamcall':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner, !isAdmin) return xbot.reply(from, 'Perintah ini hanya untuk Owner & Admin bot', id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const spam = await slicedArgs.join(' ')
            console.log(spam)
            const call2 = await axios.get('https://mhankbarbar.tech/api/spamcall?no=' + spam)
            const { logs } = call2.data
                await xbot.sendText(from, `Logs : ${logs}` + '.')
            break
        case '#ytmp4':
           // // // //  if (!isPremium) return xbot.reply(from, `Perintah ini hanya bisa di gunakan oleh Member Premium!`, id)
            if (!isGroupMsg) return xbot.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return xbot.reply(from, `Kirim perintah *#ytmp4 [ Link Yt ]*, untuk contoh silahkan kirim perintah *#readme*`)
            let isLin = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLin) return xbot.reply(from, mess.error.Iv, id)
            try {
                xbot.reply(from, mess.wait, id)
                const ytvh = await fetch(`http://api.vhtear.com/ytdl?link=${args[1]}&apikey=${vhtearkey}`)
                if (!ytvh.ok) throw new Error(`Error Get Video : ${ytvh.statusText}`)
                const ytvh2 = await ytvh.json()
                 if (ytvh2.status == false) {
                    xbot.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                } else {
                    if (Number(ytvh2.result.size.split(' MB')[0]) > 30.00) return xbot.reply(from, `Maaf durasi video sudah melebihi batas maksimal 30 MB!`, id)
                    const { title, UrlVideo, imgUrl, size } = await ytvh2.result
                    xbot.sendFileFromUrl(from, imgUrl, 'thumb.jpg', `*「 YOUTUBE MP4 」*\n\n➸ *Judul* : ${title}\n➸ *Filesize* : ${size}\n\n_*Untuk durasi lebih dari batas disajikan dalam bentuk link*._\n${UrlVideo}`, id)
                    await xbot.sendFileFromUrl(from, UrlVideo, `${title}.mp4`, '', id).catch(() => xbot.reply(from, mess.error.Yt4, id))
                    await limitAdd(serial)
                }
            } catch (err) {
                xbot.sendText(ownerNumber, 'Error ytmp4 : '+ err)
                xbot.reply(from, mess.error.Yt4, id)
                console.log(err)
            }
            break
case '#nobg':
	    if (isMedia) {
                try {
                    var mediaData = await decryptMedia(message, uaOverride)
                    var imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                    var base64img = imageBase64
                    var outFile = './media/noBg.png'
                    // untuk api key kalian bisa dapatkan pada website remove.bg
                    var result = await removeBackgroundFromImageBase64({ base64img, apiKey: 'XLFgi9dscDMGXVHa5j6aYDMv', size: 'auto', type: 'auto', outFile })
                    await fs.writeFile(outFile, result.base64img)
                    await xbot.sendImageAsSticker(from, `data:${mimetype};base64,${result.base64img}`)
                } catch(err) {
                    console.log(err)
                }
            }
            break
       case '#play':  
        if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
	   //if (!isOwner) return xbot.reply(from,'FITUR DI MATIKAN SEMENTARA',id)
            if (args.length == 1) return xbot.reply(from, `Untuk mencari lagu from youtube\n\nPenggunaan: #play judul lagu`, id)
            try {
                xbot.reply(from,'[ WAIT ] Sedang mencari music...',id)
                const serplay = body.slice(6)
                const webplay = await fetch(`https://api.vhtear.com/ytmp3?query=${serplay}&apikey=${vhtearkey}`)
                if (!webplay.ok) throw new Error(`Error Get Video : ${webplay.statusText}`)
                const webplay2 = await webplay.json()
                 if (webplay2.status == false) {
                    xbot.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                } else {
                    if (Number(webplay2.result.size.split(' MB')[0]) >= 20.00) return xbot.reply(from, 'Maaf durasi music sudah melebihi batas maksimal 10 MB!', id)
                    const { image, mp3, size, ext, title, duration } = await webplay2.result
                    const captplay = `「 PLAY 」\n\n➸ Judul : ${title}\n➸ Durasi : ${duration}\n➸ Filesize : ${size}\n➸ Exp : ${ext}\n➸ Link Download : ${mp3}\n\nMusic Sedang Dikirim`
					const responses = await fetch(mp3);
                    const buffer = await responses.buffer();   
                    xbot.sendFileFromUrl(from, image, `thumb.jpg`, captplay, id)
                    await fs.writeFile(`./media/audio.mp3`, buffer)
	                await xbot.sendFile(from,'./media/audio.mp3', `p`,id)
                    await limitAdd(serial)
                    await limitAdd(serial)
                }
            } catch (err) {
                xbot.sendText(ownerNumber, 'Error Play : '+ err)
                xbot.reply(from, mess.error.Yt3, id)
            }
            break
        case '#ytmp3':
           // // // //  if (!isPremium) return xbot.reply(from, `Perintah ini hanya bisa di gunakan oleh Member Premium!`, id)
            if (!isGroupMsg) return xbot.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return xbot.reply(from, `Kirim perintah *#ytmp3 [ Link Yt ]*, untuk contoh silahkan kirim perintah *#readme*`, id)
            let isLinks = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
		await limitAdd(serial)
            if (!isLinks) return xbot.reply(from, mess.error.Iv, id)
            try {
                xbot.reply(from, mess.wait, id)
                const vhtearyt3 = await fetch(`https://api.vhtear.com/ytdl?link=${args[1]}&apikey=${vhtearkey}`)
                if (!vhtearyt3.ok) throw new Error(`Error ytmp3 3 : ${vhtearyt3.statusText}`)
                const vhtearyt33 = await vhtearyt3.json()
                 if (vhtearyt33.status == false) {
                    xbot.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                } else {
                    if (Number(vhtearyt33.result.size.split(' MB')[0]) >= 10.00) return xbot.reply(from, 'Maaf durasi audio sudah melebihi batas maksimal 10 MB!', id)
                    const { title, ext, size, UrlMp3, status, imgUrl } = await vhtearyt33.result
                    const captions = `*「 YOUTUBE MP3 」*\n\n➸ *Judul* : ${title}\n➸ *Filesize* : ${size}\n\n_*Untuk durasi lebih dari batas disajikan dalam bentuk link*._\n${UrlMp3}`
                    xbot.sendFileFromUrl(from, imgUrl, `thumb.jpg`, captions, id)
                    await xbot.sendFileFromUrl(from, UrlMp3, `${title}.mp3`, '', id).catch(() => xbot.reply(from, mess.error.Yt4, id))
                    await limitAdd(serial)
                }
            } catch (err) {
                xbot.sendText(ownerNumber, 'Error ytmp3 : '+ err)
                xbot.reply(from, mess.error.Yt3, id)
            }
            break   
        case '#google':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            xbot.reply(from, mess.wait, id)
            const googleQuery = body.slice(8)
            if(googleQuery == undefined || googleQuery == ' ') return xbot.reply(from, `*Hasil Pencarian : ${googleQuery}* tidak ditemukan`, id)
            google({ 'query': googleQuery }).then(results => {
            let vars = `_*Hasil Pencarian : ${googleQuery}*_\n`
            for (let i = 0; i < results.length; i++) {
                vars +=  `\n═════════════════\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
            }
                xbot.reply(from, vars, id);
            }).catch(e => {
                console.log(e)
                xbot.sendText(ownerNumber, 'Google Error : ' + e);
            })
            break
        case '#translate':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if(args[1] == undefined || args[2] == undefined) return
            if(args.length >= 2){
                var codelang = args[1]
                var text = body.slice(11+codelang.length);
                translatte(text, {to: codelang}).then(res => {
                    xbot.sendText(from,res.text);
                    limitAdd(serial)
                }).catch(err => {
                     xbot.sendText(from,`[ERROR] Teks tidak ada, atau kode bahasa ${codelang} tidak support\n~> *#bahasa* untuk melihat list kode bahasa`);
                });
            }
            break
        case '#xnxx':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return xbot.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#xnxx [linkXnxx]*, untuk contoh silahkan kirim perintah *#readme*')
            if (!args[1].match(isUrl) && !args[1].includes('xnxx.com')) return xbot.reply(from, mess.error.Iv, id)
            try {
                xbot.reply(from, mess.wait, id)
                const resq = await axios.get('https://mhankbarbar.tech/api/xnxx?url='+ args[1] +'&apiKey='+ barbarkey)
                const resp = resq.data
                 if (resp.error) {
                    xbot.reply(from, ytvv.error, id)
                } else {
                    if (Number(resp.result.size.split(' MB')[0]) > 20.00) return xbot.reply(from, 'Maaf durasi video sudah melebihi batas maksimal 20 menit!', id)
                    xbot.sendFileFromUrl(from, resp.result.thumb, 'thumb.jpg', `➸ *Judul* : ${resp.result.judul}\n➸ *Deskripsi* : ${resp.result.desc}\n➸ *Filesize* : ${resp.result.size}\n\nSilahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit.`, id)
                    await xbot.sendFileFromUrl(from, resp.result.vid, `${resp.result.title}.mp4`, '', id)}
            } catch (err) {
                console.log(err)
                await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
                xbot.sendText(ownerNumber, 'Xnxx Error : ' + err)
            }
            break
        case '#ramalpasangan':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#ramalpasangan [kamu|pasangan]*\nContoh : *#ramalpasangan xbot|XBOT*', id)
            arg = body.trim().split('|')
            if (arg.length >= 2) {
            xbot.reply(from, mess.wait, id)
            const kamu = arg[0]
            const pacar = arg[1]
            const rpmn = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn2 = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn3 = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn4 = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn5 = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn6 = rate[Math.floor(Math.random() * (rate.length))]
            const rjh2 = `*Hasil Pengamatan!*\nPasangan dengan nama ${kamu} dan ${pacar}\n\n➸ Cinta : ${rpmn}\n➸ Jodoh : ${rpmn2}\n➸ Kemiripan : ${rpmn3}\n➸ Kesukaan : ${rpmn4}\n➸ Kesamaan : ${rpmn5}\n➸ Kebucinan ${rpmn6}`
            xbot.reply(from, rjh2, id)
            } else {
            await xbot.reply(from, 'Wrong Format!', id)
            }
            break
        case '#artinama':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#artinama [query]*\nContoh : *#artinama xbot*', id)
            try {
            const resp = await axios.get('https://api.vhtear.com/artinama?nama=' + body.slice(9) + '&apikey=' + vhtearkey)
            if (resp.data.error) return xbot.reply(from, resp.data.error, id)
            const anm2 = `➸ Artinama : ${resp.data.result.hasil}`
            xbot.reply(from, anm2, id)
            } catch (err) {
                console.error(err.message)
                await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
                xbot.sendText(ownerNumber, 'Artinama Error : ' + err)
           }
            break
        case '#fb':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#fb [linkFb]*\nContoh : *#fb https://www.facebook.com/24609282673/posts/10158628585367674/*', id)
            try {
            xbot.reply(from, mess.wait, id)
            const resp = await axios.get('https://mhankbarbar.tech/api/epbe?url=' + body.slice(4) + '&apiKey=' + barbarkey)
            const epbe2 = `*Video Ditemukan!*\n➸ Title : ${resp.data.title}\n➸ Filesize : ${resp.data.filesize}\n➸ Published : ${resp.data.published}`
            xbot.sendFileFromUrl(from, resp.data.result, `${resp.data.title}.mp4`, epbe2, id)
            } catch (err) {
             console.error(err.message)
             await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
             xbot.sendText(ownerNumber, 'Facebook Error : ' + err)
           }
            break
        case '#tiktok':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#tiktok [linkTiktok]*\nContoh : *#tiktok https://vt.tiktok.com/yqyjPX/*', id)
            try {
            xbot.reply(from, mess.wait, id)
            const resp = await axios.get('https://api.vhtear.com/tiktokdl?link=' + body.slice(8) + '&apikey=' + vhtearkey)
            const { dibuat, duration, title, desk, video, image  } = resp.data.result
            const tpk = `*Video Ditemukan!*

➸ Judul : ${title}
➸ Deskripsi : ${desk}
➸ Durasi : ${duration}
➸ Dibuat : ${dibuat}

Menunggu video...`
            
            const pictk = await bent("buffer")(image)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            xbot.sendImage(from, base64, title, tpk)
            xbot.sendFileF(from, video, `${title}.mp4`, '', id)
            } catch (err) {
             console.error(err.message)
             await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
             xbot.sendText(ownerNumber, 'Tiktok Error : ' + err)
           }
            break
        case '#wiki':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#wiki [query]*\nContoh : *#wiki asu*', id)
            const queryz_ = body.slice(6)
            const wiki = await axios.get(`https://mhankbarbar.tech/api/wiki?q=${queryz_}&lang=id&apiKey=${barbarkey}`)

            if (wiki.data.error) {
                xbot.reply(from, wiki.data.error, id)
            } else {
                xbot.sendText(from, `➸ *Query* : ${queryz_}\n\n➸ *Result* : ${wiki.data.result}`, id)
            }
            break
        case '#kbbi':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#wiki [query]*\nContoh : *#wiki asu*', id)
            const kbbl = body.slice(6)
            const kbbl2 = await axios.get(`https://mnazria.herokuapp.com/api/kbbi?search=${kbbl}`)

            if (kbbl2.data.error) {
                xbot.reply(from, kbbl2.data.error, id)
            } else {
                xbot.sendText(from, `➸ *Query* : ${kbbl}\n\n➸ *Result* : ${kbbl2.data.result}`, id)
            }
            break
        case '#googleimage':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#googleimage [query]*\nContoh : *#googleimage XBOT*', id)
            try{
                xbot.reply(from, mess.wait, id)
                const gimgg = body.slice(13)
                const gamb = `https://api.vhtear.com/googleimg?query=${gimgg}&apikey=${vhtearkey}`
                const gimg = await axios.get(gamb)
                var gimg2 = Math.floor(Math.random() * gimg.data.result.result_search.length)
                console.log(gimg2)
                await xbot.sendFileFromUrl(from, gimg.data.result.result_search[gimg2], `gam.${gimg.data.result.result_search[gimg2]}`, `*Google Image*\n\n*Hasil Pencarian : ${gimgg}*`, id)
            } catch (err) {
                console.log(err); 
                xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Gambar tidak ditemukan')
                xbot.sendText(ownerNumber, 'Google Image Error : ' + err)
            }
          break
        case '#smule':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#smule [linkSmule]*\nContoh : *#smule https://www.smule.com/p/767512225_3062360163*', id)
            xbot.reply(from, mess.wait, id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const sml = await slicedArgs.join(' ')
            console.log(sml)
            try {
            const resp = await axios.get('https://api.vhtear.com/getsmule?link=' + sml + '&apikey=' + vhtearkey)
            const { Type, title, url, image } = resp.data.result
            const sml3 = `*Music Ditemukan!*

➸ *Judul:* ${title}
➸ *Type:* ${Type}`

            xbot.sendImage(from, image, `${title}.jpg`, sml3)
            xbot.sendFileFromUrl(from, url, `${title}.mp3`, sml3, id)
            } catch (err) {
             console.error(err.message)
             await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Music tidak ditemukan')
             xbot.sendText(ownerNumber, 'Smule Error : ' + err)
           }
          break
        case '#sandwriting':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1)  return xbot.reply(from, 'Kirim perintah *#sandwriting [ Teks ]*\nContoh *#sandwriting XBOT Cantik*', id)
            const swrt = body.slice(13)
            try {
            const swrt2 = await axios.get('https://api.vhtear.com/sand_writing?text1=' + swrt + '&apikey=' + vhtearkey)
            const { imgUrl } = swrt2.data.result
            const swrt3 = `*「 SAND WRITING 」*

*Text : ${swrt}*`
            const pictk = await bent("buffer")(imgUrl)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            xbot.sendImage(from, base64, swrt3)
            } catch (err) {
             console.error(err.message)
             await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             xbot.sendText(ownerNumber, 'Sand Writing Error : ' + err)
           }
          break
        case '#zodiak':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#zodiak [zodiak kamu]*\nContoh : *#zodiak scorpio*', id)
            try {
            const resp = await axios.get('https://api.vhtear.com/zodiak?query=' + body.slice(8) + '&apikey=' + vhtearkey)
            if (resp.data.error) return xbot.reply(from, resp.data.error, id)
            const anm2 = `➸ Zodiak : ${resp.data.result.zodiak}\n➸ Ramalan : ${resp.data.result.ramalan}\n➸ Nomor Keberuntungan : ${resp.data.result.nomorKeberuntungan}\n➸ Motivasi : ${resp.data.result.motivasi}\n➸ Inspirasi : ${resp.data.result.inspirasi}`
            xbot.reply(from, anm2, id)
            } catch (err) {
                console.error(err.message)
                await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
                xbot.sendText(ownerNumber, 'Zodiak Error : ' + err)
           }
           break
        case '#caklontong':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            try {
            const resp = await axios.get('https://api.vhtear.com/funkuis&apikey=' + vhtearkey)
            if (resp.data.error) return xbot.reply(from, resp.data.error, id)
            const anm2 = `➸ Soal : ${resp.data.result.soal}\n➸ Jawaban : ${resp.data.result.jawaban}\n➸ Deskripsi : ${resp.data.result.desk}\n➸ Poin : ${resp.data.result.poin}`
            xbot.reply(from, anm2, id)
            } catch (err) {
                console.error(err.message)
                await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
                xbot.sendText(ownerNumber, 'Zodiak Error : ' + err)
           }
           break
         case '#family100':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            try {
            const resp = await axios.get('https://api.vhtear.com/family100&apikey=' + vhtearkey)
            if (resp.data.error) return xbot.reply(from, resp.data.error, id)
            const anm2 = `➸ Soal : ${resp.data.result.soal}\n➸ Jawaban : ${resp.data.result.jawaban}`
            xbot.reply(from, anm2, id)
            } catch (err) {
                console.error(err.message)
                await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
                xbot.sendText(ownerNumber, 'Family100 Error : ' + err)
           }
           break
        case '#heroml':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#heroml [nama hero]*\nContoh : *#heroml akai*', id)
            try {
            const resp = await axios.get('https://api.vhtear.com/herodetail?query=' + body.slice(8) + '&apikey=' + vhtearkey)
            if (resp.data.error) return xbot.reply(from, resp.data.error, id)
            const anm2 = `➸ Title : ${resp.data.result.title}\n➸ Quotes : ${resp.data.result.quotes}\n➸ Info : ${resp.data.result.info}\n➸ Atribut : ${resp.data.result.attributes}`
            xbot.reply(from, anm2, id)
            } catch (err) {
                console.error(err.message)
                await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
                xbot.sendText(ownerNumber, 'Heroml Error : ' + err)
           }
            break
        case '#nomorhoki':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#nomorhoki [no hp kamu]*\nContoh : *#nomorhoki 0895384009405*', id)
            try {
            const resp = await axios.get('https://api.vhtear.com/nomerhoki?no=' + body.slice(11) + '&apikey=' + vhtearkey)
            if (resp.data.error) return xbot.reply(from, resp.data.error, id)
            const anm2 = `➸ Hasil :\n ${resp.data.result.hasil}`
            xbot.reply(from, anm2, id)
            } catch (err) {
                console.error(err.message)
                await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
                xbot.sendText(ownerNumber, 'Nomorhoki Error : ' + err)
           }
            break
        case '#artimimpi':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#artimimpi [mimpi]*\nContoh : *#artinama ular*', id)
            try {
            const resp = await axios.get('https://api.vhtear.com/artimimpi?query=' + body.slice(10) + '&apikey=' + vhtearkey)
            if (resp.data.error) return xbot.reply(from, resp.data.error, id)
            const anm2 = `➸ Artimimpi : ${resp.data.result.hasil}`
            xbot.reply(from, anm2, id)
            } catch (err) {
                console.error(err.message)
                await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
                xbot.sendText(ownerNumber, 'Artimimpi Error : ' + err)
           }
            break
        case '#resepmasakan':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1)  return xbot.reply(from, 'Kirim perintah *#resepmasakan [optional]*\nContoh *#resepmasakan rawon*', id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const rmk = await slicedArgs.join(' ')
            console.log(rmk)
            try {
            const resp = await axios.get('https://api.vhtear.com/resepmasakan?query=' + rmk + '&apikey=' + vhtearkey)
            const { bahan, cara, image, title  } = resp.data.result
            const rmk3 = `*Resep Ditemukan!*
➸ *Judul:* ${title}
➸ *Bahan:* ${bahan}
➸ *Cara:* ${cara}`

            const pictk = await bent("buffer")(image)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            xbot.sendImage(from, base64, title, rmk3)
            } catch (err) {
             console.error(err.message)
             await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Resep tidak ditemukan')
             xbot.sendText(ownerNumber, 'Resepmasakan Error : ' + err)
           }
           break
        case '#twitterstalk':
        case '#twtstalk':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1)  return xbot.reply(from, 'Kirim perintah *#twtstalk @username*\nContoh *#twtstalk @miakhalifah*', id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const twstalk = await slicedArgs.join(' ')
            console.log(twstalk)
            try {
            const twstalk2 = await axios.get('https://mhankbarbar.tech/api/twstalk?username=' + twstalk + '&apiKey=' + barbarkey)
            const { followers_count, full_name, name, profile_pic, status_count } = twstalk2.data
            const twstalk3 = `*User Ditemukan!*
➸ *Nama:* ${name}
➸ *Nama Panjang:* ${full_name}
➸ *Jumlah Pengikut:* ${followers_count}
➸ *Jumlah Postingan:* ${status_count}`

            const pictk = await bent("buffer")(profile_pic)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            xbot.sendImage(from, base64, name, twstalk3)
            } catch (err) {
             console.error(err.message)
             await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             xbot.sendText(ownerNumber, 'Twitter Error : ' + err)
           }
          break
        case '#igstalk':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1)  return xbot.reply(from, 'Kirim perintah *#igstalk @username*\nContoh *#igstalk duar_amjay*', id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const istalk = await slicedArgs.join(' ')
            console.log(istalk)
            try {
            const istalk2 = await axios.get('https://api.vhtear.com/igprofile?query=' + istalk + '&apikey=' + vhtearkey)
            const { biography, follower, follow, post_count, full_name, username, picture, is_private } = istalk2.data.result
            const istalk3 = `*User Ditemukan!*
➸ *Username:* ${username}
➸ *Nama:* ${full_name}
➸ *Bio:* ${biography}
➸ *Mengikuti:* ${follow}
➸ *Pengikut:* ${follower}
➸ *Jumlah Postingan:* ${post_count}`

            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            xbot.sendImage(from, base64, username, istalk3)
            } catch (err) {
             console.error(err.message)
             await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             xbot.sendText(ownerNumber, 'Igstalk Error : ' + err)
           }
          break
        case '#tiktokstalk':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1)  return xbot.reply(from, 'Kirim perintah *#tiktokstalk @username*\nContoh *#tiktokstalk @duar_amjay*', id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const tstalk = await slicedArgs.join(' ')
            console.log(tstalk)
            try {
            const tstalk2 = await axios.get('https://api.vhtear.com/tiktokprofile?query=' + tstalk + '&apikey=' + vhtearkey)
            const { username, bio, follow, follower, title, like_count, video_post, description, picture, url_account } = tstalk2.data.result
            const tiktod = `*User Ditemukan!*
➸ *Username:* ${username}
➸ *Judul:* ${title}
➸ *Bio:* ${bio}
➸ *Mengikuti:* ${follow}
➸ *Pengikut:* ${follower}
➸ *Jumlah Like*: ${like_count}
➸ *Jumlah Postingan:* ${video_post}
➸ *Deskripsi:* ${description}
➸ *Link:* ${url_account}`

            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            xbot.sendImage(from, base64, title, tiktod)
            } catch (err) {
             console.error(err.message)
             await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             xbot.sendText(ownerNumber, 'Error Tiktokstalk : '+ err)
           }
          break
        case '#smulestalk':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#smulestalk [@username]*\nContoh : *#smulestalk loli*', id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const sstalk = await slicedArgs.join(' ')
            console.log(sstalk)
            try {
            const sstalk2 = await axios.get('https://api.vhtear.com/smuleprofile?query=' + sstalk + '&apikey=' + vhtearkey)
            const { username, full_name, follower, follow, biography, is_vip, picture, recording } = sstalk2.data.result
            const smule = `*User Ditemukan!*
➸ *Username:* ${username}
➸ *Full Name:* ${title}
➸ *Biografi:* ${biography}
➸ *Mengikuti:* ${follow}
➸ *Pengikut:* ${follower}
➸ *VIP*: ${is_vip}
➸ *Total Rekaman:* ${recording}`

            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            xbot.sendImage(from, base64, title, smule)
            } catch (err) {
             console.error(err.message)
             await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             xbot.sendText(ownerNumber, 'Error Smulestalk : '+ err)
            }
          break
         case '#tebakgambar':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            try {
            const resp = await axios.get('https://api.vhtear.com/tebakgambar&apikey=' + vhtearkey)
            if (resp.data.error) return xbot.reply(from, resp.data.error, id)
            const jwban = `➸ Jawaban : ${resp.data.result.jawaban}`
            xbot.sendFileFromUrl(from, resp.data.result.soalImg, 'tebakgambar.jpg', '_Silahkan Jawab Maksud Dari Gambar Ini_', id)
            xbot.sendText(from, `30 Detik Lagi...`, id)
            await sleep(10000)
            xbot.sendText(from, `20 Detik Lagi...`, id)
            await sleep(10000)
            xbot.sendText(from, `10 Detik Lagi...`, id)
            await sleep(10000)
            xbot.reply(from, jwban, id)
            } catch (err) {
                console.error(err.message)
                await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
                xbot.sendText(ownerNumber, 'Tebak Gambar Error : ' + err)
           }
           break
                      case '#ig':
                        case '#instagram':
                           if (args.length == 0) return xbot.reply(from, `Kirim perintah *${prefix}ig [linkIg]*`, id)
                            const igUrl = body.split(' ')[1]
                            if (!igUrl.startsWith('https://www.instagram.com')) return xbot.reply(from, 'Maaf, ini bukan link instagram!')
                            xbot.reply(from, mess.wait, id)
                             {
                                request.get({
                                    url: `http://keepsaveit.com/api?api_key=${keepSave}&url=${igUrl}`,
                                    json: true,
                                    headers: {
                                        'User-Agent': 'request'
                                    }
                                }, (err, res, data) => {
                                    if (err) {
                                        console.log('Error : ', err);
                                    } else if (res.statusCode !== 200) {
                                        console.log('Status:', res.statusCode);
                                        xbot.reply(from, data.msg, id)
                                    } else {
                                        const { title, links } = data.response
                                        const { ext, url, size, resolution } = links
                                        const regexIg = /\\\//gi;
                                        const thisUrlIg = url.replace(regexIg, '/')
                                        if (ext === 'mp4') {
                                            xbot.sendFileFromUrl(from, thisUrlIg, 'KZ0-IGDL.mp4', `*From :* ${title.split(' on')[0]}\n*Size :* ${size}\n*Resolusi :* ${resolution}`, id)
                                        } else {
                                            xbot.sendFileFromUrl(from, thisUrlIg, 'KZ0-IGDL.mp3', `*From:* ${title.split(' on')[0]}\n*Size:* ${size}`, id)
                                        }
                                    }
                            })
                        }
                                break  
        case '#starmaker':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#starmaker [linkStarmaker]* untuk contoh silahkan kirim perintah *#readme*')
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const smkr = await slicedArgs.join(' ')
            console.log(smkr)
            try {
            const smkr2 = await axios.get('https://api.vhtear.com/starmakerdl?link=' + smkr + '&apikey=' + vhtearkey)
            const { image, desc, url, title } = smkr2.data.result
            const smkr3 = `*User Ditemukan!*

➸ *Judul:* ${title}
➸ *Deskripsi:* ${desc}`

            const pictk = await bent("buffer")(image)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            xbot.sendImage(from, base64, 'image.jpg', 'nihh mhank')
            xbot.sendFileFromUrl(from, url, `${title}.mp4`, '', id)
            } catch (err) {
             console.error(err.message)
             await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             xbot.sendText(ownerNumber, 'Error Starmaker : '+ err)
           }
          break
        case '#maps':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#maps [optional]*, Contoh : *#maps Jakarta*')
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const mapz = await slicedArgs.join(' ')
            console.log(mapz)
            try {
            const mapz2 = await axios.get('https://mnazria.herokuapp.com/api/maps?search=' + mapz)
            const { gambar } = mapz2.data
            const pictk = await bent("buffer")(gambar)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            xbot.sendImage(from, base64, 'maps.jpg', `*Hasil Maps : ${mapz}*`)
            } catch (err) {
             console.error(err.message)
             await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             xbot.sendText(ownerNumber, 'Error Maps : '+ err)
           }
          break
        case '#twitter':
           // // //  if (!isPremium) return xbot.reply(from, `Perintah ini hanya bisa di gunakan oleh Member Premium!`, id)
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#twitter [linkTwitter]* untuk contoh silahkan kirim perintah *#readme*')
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const twtdl = await slicedArgs.join(' ')
            console.log(twtdl)
            try {
            const twtdl2 = await axios.get('https://mhankbarbar.tech/api/twit?url=' + twtdl + '&apiKey=' + barbarkey)
            const { filesize, quote, result, title } = twtdl2.data
            const twtdl3 = `*User Ditemukan!*

➸ *Judul:* ${title}
➸ *Deskripsi:* ${quote}
➸ *Filesize:* ${filesize}`

            xbot.sendFileFromUrl(from, result, `${title}.mp4`, twtdl3, id)
            } catch (err) {
             console.error(err.message)
             await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
           }
          break
        case '#joox':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#joox [optional]*\nContoh : *#joox Alan Walker*', id)
            xbot.reply(from, mess.wait, id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const music = await slicedArgs.join(' ')
            console.log(music)
            try {
            const music2 = await axios.get('https://api.vhtear.com/music?query=' + music + '&apikey=' + vhtearkey)
            const { penyanyi, judul, album, linkImg, linkMp3, filesize, ext, duration } = music2.data.result[0]
            const musik = `*User Ditemukan!*

➸ *Penyanyi:* ${penyanyi}
➸ *Judul:* ${judul}
➸ *Album:* ${album}
➸ *Ext:* ${ext}
➸ *Size:* ${filesize}
➸ *Durasi:* ${duration}`

            const pictk = await bent("buffer")(linkImg)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            xbot.sendImage(from, base64, judul, musik)
            xbot.sendFileFromUrl(from, linkMp3, `${judul}.mp3`, '', id)
            } catch (err) {
             console.error(err.message)
             await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             xbot.sendText(ownerNumber, 'Error Joox : '+ err)
           }
          break
        case '#asupan': 
//          if (isGroupMsg) return xbot.reply(from, 'Khusus di grup ya bosku wkwk', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis/nJika Ingin Isi Ulang Chat Owner!/nKetik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            xbot.reply(from, mess.wait, id)
            const ditai = fs.readFileSync('./lib/asupan.json')
            const ditaiJsin = JSON.parse(ditai)
            const rindIndixa = Math.floor(Math.random() * ditaiJsin.length)
            const rindKiya = ditaiJsin[rindIndixa]
            xbot.sendFileFromUrl(from, rindKiya, 'asupan.mp4', 'Nih', id)
            break 
        case '#checkip':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#checkip [ipaddress]*\nContoh : *#checkip 182.0.144.145*', id)
            xbot.reply(from, mess.wait, id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const cekip = await slicedArgs.join(' ')
            console.log(cekip)
            try {
            const cekip2 = await axios.get('https://mnazria.herokuapp.com/api/check?ip=' + cekip)
            const { city, continent_name, country_name, ip, latitude, location, longitude, region_name } = cekip2.data
            const cekip3 = `*User Ditemukan!*

➸ *Kota:* ${city}
➸ *Benua:* ${continent_name}
➸ *Negara:* ${country_name}
➸ *Ip Address:* ${ip}
➸ *Garis Lintang:* ${latitude}
➸ *Kode Telepon:* +${location.calling_code}
➸ *Ibu Kota:* +${location.capital}
➸ *Bahasa:* +${location.languages[0].name}
➸ *Garis Bujur:* ${longitude}
➸ *Wilayah:* +${region_name}`

            const pictk = await bent("buffer")(location.country_flag)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            xbot.sendImage(from, base64, city, cekip3)
            } catch (err) {
             console.error(err.message)
             await xbot.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             xbot.sendText(ownerNumber, 'Error Check IP : '+ err)
           }
          break
        /*case '#nhentai':
        case '#nh':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return xbot.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (args.length === 2) {
                const nuklir = body.split(' ')[1]
                xbot.reply(from, mess.wait, id)
                const cek = await nhentai.exists(nuklir)
                if (cek === true)  {
                    try {
                        const api = new API()
                        const pic = await api.getBook(nuklir).then(book => {
                            return api.getImageURL(book.cover)
                        })
                        const dojin = await nhentai.getDoujin(nuklir)
                        const { title, details, link } = dojin
                        const { parodies, tags, artists, groups, languages, categories } = await details
                        var teks = `*Title* : ${title}\n\n*Parodies* : ${parodies}\n\n*Tags* : ${tags.join(', ')}\n\n*Artists* : ${artists.join(', ')}\n\n*Groups* : ${groups.join(', ')}\n\n*Languages* : ${languages.join(', ')}\n\n*Categories* : ${categories}\n\n*Link* : ${link}`
                        exec('nhentai --id=' + nuklir + ` -P mantap.pdf -o ./hentong/${nuklir}.pdf --format `+ `${nuklir}.pdf`, (error, stdout, stderr) => {
                            xbot.sendFileFromUrl(from, pic, 'hentod.jpg', teks, id).then(() => 
                            xbot.sendFile(from, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, `${title}.pdf`, '', id)).catch(() => 
                            xbot.sendFile(from, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, `${title}.pdf`, '', id))
                            if (error) {
                                console.log('error : '+ error.message)
                                return
                            }
                            if (stderr) {
                                console.log('stderr : '+ stderr)
                                return
                            }
                            console.log('stdout : '+ stdout)
                            })
                    } catch (err) {
                        xbot.reply(from, '[❗] Terjadi kesalahan, mungkin kode nuklir salah', id)
                    }
                } else {
                    xbot.reply(from, '[❗] Kode nuklir Salah!')
                }
            } else {
                xbot.reply(from, '[ WRONG ] Kirim perintah *#nhentai [kode]* untuk contoh kirim perintah *#readme*')
            }
            break*/
        case '#brainly':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length >= 2){
                const BrainlySearch = require('./lib/brainly')
                let tanya = body.slice(9)
                let jum = Number(tanya.split('.')[1]) || 2
                if (jum > 10) return xbot.reply(from, 'Max 10!', id)
                if (Number(tanya[tanya.length-1])){
                    tanya
                }
                xbot.reply(from, `➸ *Pertanyaan* : ${tanya.split('.')[0]}\n\n➸ *Jumlah jawaban* : ${Number(jum)}`, id)
                await BrainlySearch(tanya.split('.')[0],Number(jum), function(res){
                    res.forEach(x=>{
                        if (x.jawaban.fotoJawaban.length == 0) {
                            xbot.reply(from, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* : ${x.jawaban.judulJawaban}\n`, id)
                        } else {
                            xbot.reply(from, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* 〙: ${x.jawaban.judulJawaban}\n\n➸ *Link foto jawaban* : ${x.jawaban.fotoJawaban.join('\n')}`, id)
                        }
                    })
                })
            } else {
                xbot.reply(from, 'Usage :\n!brainly [pertanyaan] [.jumlah]\n\nEx : \n!brainly NKRI .2', id)
            }
            break
        case '#math':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (args.length === 1) return xbot.reply(from, '[❗] Kirim perintah *#math [ Angka ]*\nContoh : #math 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /')
            const mtk = body.slice(6)
            if (typeof Math_js.evaluate(mtk) !== "number") {
            xbot.reply(from, `"${mtk}", bukan angka!\n[❗] Kirim perintah *#math [ Angka ]*\nContoh : #math 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`, id)
        } else {
            xbot.reply(from, `*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`, id)
        }
        break
        case '#wait':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image') {
                if (isMedia) {
                    var mediaData = await decryptMedia(message, uaOverride)
                } else {
                    var mediaData = await decryptMedia(quotedMsg, uaOverride)
                }
                const fetch = require('node-fetch')
                const imgBS4 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                xbot.reply(from, 'Searching....', id)
                fetch('https://trace.moe/api/search', {
                    method: 'POST',
                    body: JSON.stringify({ image: imgBS4 }),
                    headers: { "Content-Type": "application/json" }
                })
                .then(respon => respon.json())
                .then(resolt => {
                    if (resolt.docs && resolt.docs.length <= 0) {
                        xbot.reply(from, 'Maaf, saya tidak tau ini anime apa', id)
                    }
                    const { is_adult, title, title_chinese, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = resolt.docs[0]
                    teks = ''
                    if (similarity < 0.92) {
                        teks = '*Saya memiliki keyakinan rendah dalam hal ini* :\n\n'
                    }
                    teks += `➸ *Title Japanese* : ${title}\n➸ *Title chinese* : ${title_chinese}\n➸ *Title Romaji* : ${title_romaji}\n➸ *Title English* : ${title_english}\n`
                    teks += `➸ *Ecchi* : ${is_adult}\n`
                    teks += `➸ *Eps* : ${episode.toString()}\n`
                    teks += `➸ *Kesamaan* : ${(similarity * 100).toFixed(1)}%\n`
                    var video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`;
                    xbot.sendFileFromUrl(from, video, 'nimek.mp4', teks, id).catch(() => {
                        xbot.reply(from, teks, id)
                    })
                })
                .catch(() => {
                    xbot.reply(from, 'Error !', id)
                })
            } else {
                xbot.sendFileFromUrl(from, tutor, 'Tutor.jpg', 'Neh contoh mhank!', id)
            }
            break
        case '#textmaker':
                if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
                await limitAdd(serial)
                arg = body.trim().split('|')
                xbot.reply(from, '[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!', id)
                if ((isMedia || isQuotedImage) && arg.length >= 2) {
                const top = arg[1]
                const bott = arg[2]
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const getUrl = await uploadImages(mediaData, false)
                const ImageBase64 = await custom(getUrl, top, bott)
                await xbot.sendFile(from, ImageBase64, 'image.png','neh...')
                } else {
                await xbot.reply(from, 'Wrong Format!', id)
                }
                break
                case '#goimg':{
                    if(isLimit(serial)) return
                    const qwery = arg.split('.')[0]
                    const jum = arg.split('.')[1]

                    if(!qwery) return await xbot.reply(from, 'Masukkan keyword, contoh = #goimg gambar jerapah.3', id)
                    if(!jum) return await xbot.reply(from, 'Jumlah gambar diperlukan, contoh = #goimg gambar jerapah.3', id)
                    if(jum >= 7) return await xbot.reply(from, 'Jumlah terlalu banyak! Max 6', id)
                    var gis = require('g-i-s');
                    var opts = {
                        searchTerm: qwery
                      };
                      gis(opts, logResults);
                    
                    function logResults(error, results) {
                        if (error) {
                          xbot.reply(from, 'Error bro -_-', id)
                        }
                        else {
                          const item = results.slice(0, jum)
                          item.forEach(async(res) => {
                              console.log(res)
                            const yurl = await urlShortener(res.url)
                            xbot.sendImage(from, res.url, null, `Nih bro`)  
                            limitAdd(serial) 
                            })
                         }
                      }		
                    }
                    break		
       case '#tahta':
       case '#harta':
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)

           // // //  if (!isPremium) return xbot.reply(from, `Perintah ini hanya bisa di gunakan oleh Member Premium!`, id)
             xbot.reply(from, mess.wait, id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            await limitAdd(serial)        
             const ttahta = body.slice(6)
             if (!ttahta) return xbot.reply(from, 'Masukin nama mu beb!\nMax 8 huruf biar bagus!', id)
             if (ttahta.length > 8) return xbot.reply(from, 'Hurufnya terlalu panjang sayang😔', id)
             await xbot.sendFileFromUrl(from, `https://api.vhtear.com/hartatahta?text=${ttahta}&apikey=${vhtearkey}`, `harta-tahta-${ttahta}.jpg`, `Nih...`, id)
             limitAdd(serial)
                break
       case '#logoapi':
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)

           // // //  if (!isPremium) return xbot.reply(from, `Perintah ini hanya bisa di gunakan oleh Member Premium!`, id)
             xbot.reply(from, mess.wait, id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            await limitAdd(serial)        
             const firecok = body.slice(9)
             if (!firecok) return xbot.reply(from, 'Masukin nama mu beb!\nMax 8 huruf biar bagus!', id)
             if (firecok.length > 8) return xbot.reply(from, 'Hurufnya terlalu panjang sayang😔', id)
             await xbot.sendFileFromUrl(from, `https://api.vhtear.com/fire_maker?text=${firecok}&apikey=${vhtearkey}`, `Kebakaran-${firecok}.jpg`, `Nih...`, id)
             limitAdd(serial)
                break
       case '#silkteks':
	   case '#silktext':
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
 
 // // //  if (!isPremium) return xbot.reply(from, `Perintah ini hanya bisa di gunakan oleh Member Premium!`, id)
             xbot.reply(from, mess.wait, id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            await limitAdd(serial)        
             const silk = body.slice(9)
             if (!silk) return xbot.reply(from, 'Masukin nama mu beb!\nMax 8 huruf biar bagus!', id)
             if (silk.length > 8) return xbot.reply(from, 'Hurufnya terlalu panjang sayang😔', id)
             await xbot.sendFileFromUrl(from, `https://api.vhtear.com/silktext?text=${silk}&apikey=${vhtearkey}`, `harta-tahta-${silk}.jpg`, `Nih Bosku`, id)
             limitAdd(serial)
                break
       case '#bpink':
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)

           // // //  if (!isPremium) return xbot.reply(from, `Perintah ini hanya bisa di gunakan oleh Member Premium!`, id)
             xbot.reply(from, mess.wait, id)
             const bpink = body.slice(6)
             if (!bpink) return xbot.reply(from, 'Masukin nama mu beb!\nMax 8 huruf biar bagus!', id)
             if (bpink.length > 8) return xbot.reply(from, 'Hurufnya terlalu panjang sayang😔', id)
             await xbot.sendFileFromUrl(from, `https://api.vhtear.com/blackpinkicon?text=${bpink}&apikey=${vhtearkey}`, `blackpink-${bpink}.jpg`, `*☑️ Logo Blackpink ${bpink}*`, id)
             limitAdd(serial)
                break
  /*     case '#thunder':
           // // //  if (!isPremium) return xbot.reply(from, `Perintah ini hanya bisa di gunakan oleh Member Premium!`, id)
             xbot.reply(from, mess.wait, id)
             const tthunder = body.slice()
             if (!tthunder) return xbot.reply(from, 'Masukin nama mu beb!\nMax 8 huruf biar bagus!', id)
             if (tthunder.length > 8) return xbot.reply(from, 'Hurufnya terlalu panjang sayang😔', id)
             await xbot.sendFileFromUrl(from, `https://api.vhtear.com/thundertext?text=${tthunder}&apikey=${vhtearkey}`, `thunder-logo-${tthunder}.jpg`, `*☑️ Logo Thunderex ${tthunder}*`, id)
             limitAdd(serial)
                break*/
        case `#slidteks`:
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
              ////if (!IsPremium) return xbot.reply(from, '*Fitur Ini Khusus VIP!*\n _Daftar VIP Hanya 5k/Bulan_\n\n*Mau Daftar VIP?*\nChat Owner BOT\n_wa.me/6281342077268_ ', id)
            if (!isGroupMsg) return xbot.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis/nJika Ingin Isi Ulang Chat Owner!/nKetik #limit Untuk Mengecek Kuota Limit Kamu`, id)
    
            await limitAdd(serial)
             const sleding = body.slice(9)
             if (!sleding) return xbot.reply(from, 'Kirim perintah *!slidingtext [teks]*\n\nContoh *!slidingtext ah mantap*', id)
             xbot.sendText(from, '_Sedang diproses, mohon tunggu sebentar!..._', id)
             await xbot.sendFileFromUrl(from, `https://api.vhtear.com/slidingtext?text=${sleding}&apikey=${vhtearkey}`,`${sleding}.mp4`,`slidingtext ${sleding}`, id)        
             break 
        case `#searchteks`: 
         case `#googleteks`:
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)

            ////if (!IsPremium) return xbot.reply(from, '*Fitur Ini Khusus VIP!*\n _Daftar VIP Hanya 5k/Bulan_\n\n*Mau Daftar VIP?*\nChat Owner BOT\n_wa.me/6281342077268_ ', id)       
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis/nJika Ingin Isi Ulang Chat Owner!/nKetik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return xbot.reply(from, `Kirim perintah *#searchteks [ |Teks1|Teks2|teks3 ]*, contoh *#searchteks |XBOT|Gans|Banget*`, id)
            argz = body.trim().split('|')
            if (argz.length >= 3) {
                xbot.reply(from, mess.wait, id)
                const missing = argz[1]
                const missing2 = argz[2]
                const missing3 = argz[3]
                if (missing.length > 8) return xbot.reply(from, '*Teks1 Terlalu Panjang!*\n_Maksimal 8 huruf!_', id)
                if (missing2.length > 8) return xbot.reply(from, '*Teks2 Terlalu Panjang!*\n_Maksimal 8 huruf!_', id)
                if (missing3.length > 8) return xbot.reply(from, '*Teks2 Terlalu Panjang!*\n_Maksimal 8 huruf!_', id)    
                xbot.sendFileFromUrl(from, `https://api.vhtear.com/googletext?text1=${missing}&text2=${missing2}&text3=${missing3}&apikey=${vhtearkey}`)
                await limitAdd(serial)
            } else {
                await xbot.reply(from, `Wrong Format!\n[❗] Kirim perintah *.googleteks [ |Teks1|Teks2|Teks3 ]*, contoh *.googleteks |XBOT|Bot|Ganteng*`, id)
            }
            break  
         case `#partytext`:
         case `#partyteks`:
             if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)

 //if(isReg(obj)) return
            //if(cekumur(cekage)) return         
            ////if (!IsPremium) return xbot.reply(from, '*Fitur Ini Khusus VIP!*\n _Daftar VIP Hanya 5k/Bulan_\n\n*Mau Daftar VIP?*\nChat Owner BOT\n_wa.me/6281342077268_ ', id)
             //if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
             if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis!*\nKetik #limit Untuk Mengecek Kuota Limit Kamu`, id)
    
             await limitAdd(serial)
             const partytext = body.slice(10)
             if (!partytext) return xbot.reply(from, 'Kirim perintah *#partyteks [teks]*\n\nContoh *#partyteks XBOT*', id)
             //xbot.sendText(from, '*Sedang di proses*...', id)
             await xbot.sendFileFromUrl(from, `https://api.vhtear.com/partytext?text=${partytext}&apikey=${vhtearkey}`,`${partytext}.jpg`,`────────────────\n*Di Buat pada* : \n *${moment().format('DD/MM/YY HH:mm:ss')}*\n────────────────\n _*By XBOT*_`, id)        
             break  
         case `#romancetext`:
         case `#romanceteks`:
            ////if (!IsPremium) return xbot.reply(from, '*Fitur Ini Khusus VIP!*\n _Daftar VIP Hanya 5k/Bulan_\n\n*Mau Daftar VIP?*\nChat Owner BOT\n_wa.me/6281342077268_ ', id)
             if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
             if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis!*\nKetik #limit Untuk Mengecek Kuota Limit Kamu`, id)
    
             await limitAdd(serial)
             const romancetext = body.slice(12)
             if (!romancetext) return xbot.reply(from, 'Kirim perintah *#romanceteks [teks]*\n\nContoh *#romanceteks XBOT*', id)
             //xbot.sendText(from, '*Sedang di proses*...', id)
             await xbot.sendFileFromUrl(from, `https://api.vhtear.com/romancetext?text=${romancetext}&apikey=${vhtearkey}`,`${romancetext}.jpg`,`────────────────\n*Di Buat pada* : \n *${moment().format('DD/MM/YY HH:mm:ss')}*\n────────────────\n _*By XBOT*_`, id)        
             break   
         case `#teksmaker`:
         case `#textmaker`:
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return         
            ////if (!IsPremium) return xbot.reply(from, '*Fitur Ini Khusus VIP!*\n _Daftar VIP Hanya 5k/Bulan_\n\n*Mau Daftar VIP?*\nChat Owner BOT\n_wa.me/6281342077268_ ', id)
             if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
             if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis!*\nKetik #limit Untuk Mengecek Kuota Limit Kamu`, id)
    
             await limitAdd(serial)
             const teksmaker1 = body.slice(10)
             if (!teksmaker1) return xbot.reply(from, 'Kirim perintah *#teksmaker1 [teks]*\n\nContoh *#teksmaker1 XBOT*', id)
             //xbot.sendText(from, '*Sedang di proses*...', id)
             await xbot.sendFileFromUrl(from, `https://api.vhtear.com/textmaker?text=${teksmaker1}&warna=green&apikey=${vhtearkey}`,`${teksmaker1}.jpg`,`────────────────\n*Di Buat pada* : \n *${moment().format('DD/MM/YY HH:mm:ss')}*\n────────────────\n _*By XBOT*_`, id)        
             break      
         case `#lovemaker`:
         case `#textlove`:
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return         
            ////if (!IsPremium) return xbot.reply(from, '*Fitur Ini Khusus VIP!*\n _Daftar VIP Hanya 5k/Bulan_\n\n*Mau Daftar VIP?*\nChat Owner BOT\n_wa.me/6281342077268_ ', id)
             if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
             if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis!*\nKetik #limit Untuk Mengecek Kuota Limit Kamu`, id)
    
             await limitAdd(serial)
             const love = body.slice(11)
             if (!love) return xbot.reply(from, 'Kirim perintah *#lovemaker [teks]*\n\nContoh *#lovemaker XBOT*', id)
             //xbot.sendText(from, '*Sedang di proses*...', id)
             await xbot.sendFileFromUrl(from, `https://api.vhtear.com/lovemessagetext?text=${love}&apikey=${vhtearkey}`,`${love}.jpg`,`────────────────\n*Di Buat pada* : \n *${moment().format('DD/MM/YY HH:mm:ss')}*\n────────────────\n _*By XBOT*_`, id)        
             break      
         case `#glowmaker`:
         case `#textglow`:
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return         
            ////if (!IsPremium) return xbot.reply(from, '*Fitur Ini Khusus VIP!*\n _Daftar VIP Hanya 5k/Bulan_\n\n*Mau Daftar VIP?*\nChat Owner BOT\n_wa.me/6281342077268_ ', id)
             if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
             if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis!*\nKetik #limit Untuk Mengecek Kuota Limit Kamu`, id)
    
             await limitAdd(serial)
             const glow = body.slice(10)
             if (!glow) return xbot.reply(from, 'Kirim perintah *#glowmaker [teks]*\n\nContoh *#glowmaker XBOT*', id)
             //xbot.sendText(from, '*Sedang di proses*...', id)
             await xbot.sendFileFromUrl(from, `https://api.vhtear.com/glowtext?text=${glow}&apikey=${vhtearkey}`,`${glow}.jpg`,`────────────────\n*Di Buat pada* : \n *${moment().format('DD/MM/YY HH:mm:ss')}*\n────────────────\n _*By XBOT*_`, id)        
             break             
        case `#glitchtext`: 
        case `#glitchteks`:
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return         
            //if (!IsPremium) return xbot.reply(from, '*Fitur Ini Khusus VIP!*\n _Daftar VIP Hanya 5k/Bulan_\n\n*Mau Daftar VIP?*\nChat Owner BOT\n_wa.me/6281342077268_ ', id)       
              if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)

			if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis/nJika Ingin Isi Ulang Chat Owner!/nKetik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return xbot.reply(from, `Kirim perintah *#glitchteks  |Teks1|Teks2*, contoh *#glitchteks  |Teks1|Teks2*`, id)
            argz = body.trim().split('|')
            if (argz.length >= 3) {
                xbot.reply(from, mess.wait, id)
                const glitch1 = argz[1]
                const glitch2 = argz[2]
                if (glitch1.length > 8) return xbot.reply(from, '*Teks1 Terlalu Panjang!*\n_Maksimal 8 huruf!_', id)
                if (glitch2.length > 8) return xbot.reply(from, '*Teks2 Terlalu Panjang!*\n_Maksimal 8 huruf!_', id) 
                xbot.sendFileFromUrl(from, `https://api.vhtear.com/glitchtext?text1=${glitch1}&text2=${glitch2}&apikey=${vhtearkey}`)
                await limitAdd(serial)
            } else {
                await xbot.reply(from, `Wrong Format!\n[❗] Kirim perintah *#glitchteks  |Teks1|Teks2*, contoh *#glitchteks |XBOT|Bot*`, id)
            }
            break   
        case `#valentinetext`: 
        case `#valentinemaker`:
        case `#valenmaker`:
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return         
            ////if (!IsPremium) return xbot.reply(from, '*Fitur Ini Khusus VIP!*\n _Daftar VIP Hanya 5k/Bulan_\n\n*Mau Daftar VIP?*\nChat Owner BOT\n_wa.me/6281342077268_ ', id)       
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis/nJika Ingin Isi Ulang Chat Owner!/nKetik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return xbot.reply(from, `Kirim perintah *#valentinemaker  |Teks1|Teks2*, contoh *#valentinemaker  |Teks1|Teks2*`, id)
            argz = body.trim().split('|')
            if (argz.length >= 3) {
                xbot.reply(from, mess.wait, id)
                const valent1 = argz[1]
                const valent2 = argz[2]
                if (valent1.length > 8) return xbot.reply(from, '*Teks1 Terlalu Panjang!*\n_Maksimal 8 huruf!_', id)
                if (valent2.length > 8) return xbot.reply(from, '*Teks2 Terlalu Panjang!*\n_Maksimal 8 huruf!_', id) 
                xbot.sendFileFromUrl(from, `https://api.vhtear.com/valentine?t1=${valent1}&t2=${valent2}&l1=https://obs-sg.line-apps.com/os/p/u3ef45bfb65e4c101f9126ea9b5d3b1e5&l2=https://obs-sg.line-apps.com/os/p/ue69deccc9ec05714297bc08184f75a15&apikey=${vhtearkey}`)
                await limitAdd(serial)
            } else {
                await xbot.reply(from, `Wrong Format!\n[❗] Kirim perintah *#valentinemaker  |Teks1|Teks2*, contoh *#valentinemaker |XBOT|Bot*`, id)
            }
            break                                                                          
        case `#fssarah`:
        case `#fsviloid`:
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return        
              ////if (!IsPremium) return xbot.reply(from, '*Fitur Ini Khusus VIP!*\n _Daftar VIP Hanya 5k/Bulan_\n\n*Mau Daftar VIP?*\nChat Owner BOT\n_wa.me/6281342077268_ ', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis/nJika Ingin Isi Ulang Chat Owner!/nKetik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)         
             xbot.reply(from, mess.wait, id)
             const srhe = body.slice(8)
             if (!srhe) return xbot.reply(from, 'Masukan nama!\nMax 8 huruf biar bagus!', id)
             await xbot.sendFileFromUrl(from, `https://rest.farzain.com/api/special/fansign/indo/viloid.php?apikey=ppqeuy&text=${srhe}`, `tytyd.jpg`, `nih..`, id)
             limitAdd(serial)
                break     
        case '#quotemaker':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            arg = body.trim().split('|')
            if (arg.length >= 4) {
                xbot.reply(from, mess.wait, id)
                const quotes = arg[1]
                const author = arg[2]
                const theme = arg[3]
                await quotemaker(quotes, author, theme).then(amsu => {
                    xbot.sendFile(from, amsu, 'quotesmaker.jpg','neh...').catch(() => {
                       xbot.reply(from, mess.error.Qm, id)
                    })
                })
            } else {
                xbot.reply(from, 'Usage: \n#quotemaker |teks|watermark|theme\n\nEx :\n#quotemaker |ini contoh|bicit|random', id)
            }
            break
case `#nyimak`:
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return        
            //if (!isOwner) return xbot.reply(from, 'Perintah Hanya bisa digunakan oleh Owner!', id)
            if (!isGroupMsg) return xbot.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)                
            if (!quotedMsg) return xbot.reply(from, `Tolong Reply Pesan Bot`, id)
            if (!quotedMsgObj.fromMe) return xbot.reply(from, `Tolong Reply Pesan Bot`, id)
            try {
                const reader = await xbot.getMessageReaders(quotedMsgObj.id)
                let list = ''
                for (let pembaca of reader) {
                list += `- @${pembaca.id.replace(/@c.us/g, '')}\n` 
            }
                xbot.sendTextWithMentions(from, `Ciee, Ngeread...\n${list}`)
            } catch(err) {
                console.log(err)
                xbot.reply(from, `Maaf, Belum Ada Yang Membaca Pesan Bot atau Mereka Menonaktifkan Read Receipts`, id)    
            }
            break
        case '#listchannel':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            xbot.reply(from, listChannel, id)
            break
        case '#jadwaltv':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#jadwalTv [channel]*', id)
            const query = body.slice(10).toLowerCase()
            const jadwal = await jadwalTv(query)
            xbot.reply(from, jadwal, id)
            break
        case '#jadwaltvnow':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const jadwalNow = await axios.get('https://api.haipbis.xyz/jadwaltvnow')
            xbot.reply(from, `Jam : ${jadwalNow.data.jam}\n\nJadwalTV : ${jadwalNow.data.jadwalTV}`, id)
            break
        case '#nulis':
           // // //  if (!isPremium) return xbot.reply(from, `Perintah ini hanya bisa di gunakan oleh Member Premium!`, id)
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#nulis [teks]*, contoh *#nulis aku bukan boneka*', id)
            const ngettik = body.slice(7)
            const ngetikk = await axios.get('https://mhankbarbar.tech/nulis?text='+ ngettik+'&apiKey='+ barbarkey)
            if (ngetikk.data.error) return xbot.reply(from, ngetikk.data.error, id)
            xbot.sendFileFromUrl(from, ngetikk.data.result, 'nulis.jpg', '', id)
            break
                case '#inu':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const list = ["https://cdn.shibe.online/shibes/247d0ac978c9de9d9b66d72dbdc65f2dac64781d.jpg","https://cdn.shibe.online/shibes/1cf322acb7d74308995b04ea5eae7b520e0eae76.jpg","https://cdn.shibe.online/shibes/1ce955c3e49ae437dab68c09cf45297d68773adf.jpg","https://cdn.shibe.online/shibes/ec02bee661a797518d37098ab9ad0c02da0b05c3.jpg","https://cdn.shibe.online/shibes/1e6102253b51fbc116b887e3d3cde7b5c5083542.jpg","https://cdn.shibe.online/shibes/f0c07a7205d95577861eee382b4c8899ac620351.jpg","https://cdn.shibe.online/shibes/3eaf3b7427e2d375f09fc883f94fa8a6d4178a0a.jpg","https://cdn.shibe.online/shibes/c8b9fcfde23aee8d179c4c6f34d34fa41dfaffbf.jpg","https://cdn.shibe.online/shibes/55f298bc16017ed0aeae952031f0972b31c959cb.jpg","https://cdn.shibe.online/shibes/2d5dfe2b0170d5de6c8bc8a24b8ad72449fbf6f6.jpg","https://cdn.shibe.online/shibes/e9437de45e7cddd7d6c13299255e06f0f1d40918.jpg","https://cdn.shibe.online/shibes/6c32141a0d5d089971d99e51fd74207ff10751e7.jpg","https://cdn.shibe.online/shibes/028056c9f23ff40bc749a95cc7da7a4bb734e908.jpg","https://cdn.shibe.online/shibes/4fb0c8b74dbc7653e75ec1da597f0e7ac95fe788.jpg","https://cdn.shibe.online/shibes/125563d2ab4e520aaf27214483e765db9147dcb3.jpg","https://cdn.shibe.online/shibes/ea5258fad62cebe1fedcd8ec95776d6a9447698c.jpg","https://cdn.shibe.online/shibes/5ef2c83c2917e2f944910cb4a9a9b441d135f875.jpg","https://cdn.shibe.online/shibes/6d124364f02944300ae4f927b181733390edf64e.jpg","https://cdn.shibe.online/shibes/92213f0c406787acd4be252edb5e27c7e4f7a430.jpg","https://cdn.shibe.online/shibes/40fda0fd3d329be0d92dd7e436faa80db13c5017.jpg","https://cdn.shibe.online/shibes/e5c085fc427528fee7d4c3935ff4cd79af834a82.jpg","https://cdn.shibe.online/shibes/f83fa32c0da893163321b5cccab024172ddbade1.jpg","https://cdn.shibe.online/shibes/4aa2459b7f411919bf8df1991fa114e47b802957.jpg","https://cdn.shibe.online/shibes/2ef54e174f13e6aa21bb8be3c7aec2fdac6a442f.jpg","https://cdn.shibe.online/shibes/fa97547e670f23440608f333f8ec382a75ba5d94.jpg","https://cdn.shibe.online/shibes/fb1b7150ed8eb4ffa3b0e61ba47546dd6ee7d0dc.jpg","https://cdn.shibe.online/shibes/abf9fb41d914140a75d8bf8e05e4049e0a966c68.jpg","https://cdn.shibe.online/shibes/f63e3abe54c71cc0d0c567ebe8bce198589ae145.jpg","https://cdn.shibe.online/shibes/4c27b7b2395a5d051b00691cc4195ef286abf9e1.jpg","https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg","https://cdn.shibe.online/shibes/4deaac9baec39e8a93889a84257338ebb89eca50.jpg","https://cdn.shibe.online/shibes/199f8513d34901b0b20a33758e6ee2d768634ebb.jpg","https://cdn.shibe.online/shibes/f3efbf7a77e5797a72997869e8e2eaa9efcdceb5.jpg","https://cdn.shibe.online/shibes/39a20ccc9cdc17ea27f08643b019734453016e68.jpg","https://cdn.shibe.online/shibes/e67dea458b62cf3daa4b1e2b53a25405760af478.jpg","https://cdn.shibe.online/shibes/0a892f6554c18c8bcdab4ef7adec1387c76c6812.jpg","https://cdn.shibe.online/shibes/1b479987674c9b503f32e96e3a6aeca350a07ade.jpg","https://cdn.shibe.online/shibes/0c80fc00d82e09d593669d7cce9e273024ba7db9.jpg","https://cdn.shibe.online/shibes/bbc066183e87457b3143f71121fc9eebc40bf054.jpg","https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70c3de1de7f8e7c646.jpg","https://cdn.shibe.online/shibes/9c87e6bb0f3dc938ce4c453eee176f24636440e0.jpg","https://cdn.shibe.online/shibes/0af1bcb0b13edf5e9b773e34e54dfceec8fa5849.jpg","https://cdn.shibe.online/shibes/32cf3f6eac4673d2e00f7360753c3f48ed53c650.jpg","https://cdn.shibe.online/shibes/af94d8eeb0f06a0fa06f090f404e3bbe86967949.jpg","https://cdn.shibe.online/shibes/4b55e826553b173c04c6f17aca8b0d2042d309fb.jpg","https://cdn.shibe.online/shibes/a0e53593393b6c724956f9abe0abb112f7506b7b.jpg","https://cdn.shibe.online/shibes/7eba25846f69b01ec04de1cae9fed4b45c203e87.jpg","https://cdn.shibe.online/shibes/fec6620d74bcb17b210e2cedca72547a332030d0.jpg","https://cdn.shibe.online/shibes/26cf6be03456a2609963d8fcf52cc3746fcb222c.jpg","https://cdn.shibe.online/shibes/c41b5da03ad74b08b7919afc6caf2dd345b3e591.jpg","https://cdn.shibe.online/shibes/7a9997f817ccdabac11d1f51fac563242658d654.jpg","https://cdn.shibe.online/shibes/7221241bad7da783c3c4d84cfedbeb21b9e4deea.jpg","https://cdn.shibe.online/shibes/283829584e6425421059c57d001c91b9dc86f33b.jpg","https://cdn.shibe.online/shibes/5145c9d3c3603c9e626585cce8cffdfcac081b31.jpg","https://cdn.shibe.online/shibes/b359c891e39994af83cf45738b28e499cb8ffe74.jpg","https://cdn.shibe.online/shibes/0b77f74a5d9afaa4b5094b28a6f3ee60efcb3874.jpg","https://cdn.shibe.online/shibes/adccfdf7d4d3332186c62ed8eb254a49b889c6f9.jpg","https://cdn.shibe.online/shibes/3aac69180f777512d5dabd33b09f531b7a845331.jpg","https://cdn.shibe.online/shibes/1d25e4f592db83039585fa480676687861498db8.jpg","https://cdn.shibe.online/shibes/d8349a2436420cf5a89a0010e91bf8dfbdd9d1cc.jpg","https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e1af66c67.jpg","https://cdn.shibe.online/shibes/3d14e3c32863195869e7a8ba22229f457780008b.jpg","https://cdn.shibe.online/shibes/79cedc1a08302056f9819f39dcdf8eb4209551a3.jpg","https://cdn.shibe.online/shibes/4440aa827f88c04baa9c946f72fc688a34173581.jpg","https://cdn.shibe.online/shibes/94ea4a2d4b9cb852e9c1ff599f6a4acfa41a0c55.jpg","https://cdn.shibe.online/shibes/f4478196e441aef0ada61bbebe96ac9a573b2e5d.jpg","https://cdn.shibe.online/shibes/96d4db7c073526a35c626fc7518800586fd4ce67.jpg","https://cdn.shibe.online/shibes/196f3ed10ee98557328c7b5db98ac4a539224927.jpg","https://cdn.shibe.online/shibes/d12b07349029ca015d555849bcbd564d8b69fdbf.jpg","https://cdn.shibe.online/shibes/80fba84353000476400a9849da045611a590c79f.jpg","https://cdn.shibe.online/shibes/94cb90933e179375608c5c58b3d8658ef136ad3c.jpg","https://cdn.shibe.online/shibes/8447e67b5d622ef0593485316b0c87940a0ef435.jpg","https://cdn.shibe.online/shibes/c39a1d83ad44d2427fc8090298c1062d1d849f7e.jpg","https://cdn.shibe.online/shibes/6f38b9b5b8dbf187f6e3313d6e7583ec3b942472.jpg","https://cdn.shibe.online/shibes/81a2cbb9a91c6b1d55dcc702cd3f9cfd9a111cae.jpg","https://cdn.shibe.online/shibes/f1f6ed56c814bd939645138b8e195ff392dfd799.jpg","https://cdn.shibe.online/shibes/204a4c43cfad1cdc1b76cccb4b9a6dcb4a5246d8.jpg","https://cdn.shibe.online/shibes/9f34919b6154a88afc7d001c9d5f79b2e465806f.jpg","https://cdn.shibe.online/shibes/6f556a64a4885186331747c432c4ef4820620d14.jpg","https://cdn.shibe.online/shibes/bbd18ae7aaf976f745bc3dff46b49641313c26a9.jpg","https://cdn.shibe.online/shibes/6a2b286a28183267fca2200d7c677eba73b1217d.jpg","https://cdn.shibe.online/shibes/06767701966ed64fa7eff2d8d9e018e9f10487ee.jpg","https://cdn.shibe.online/shibes/7aafa4880b15b8f75d916b31485458b4a8d96815.jpg","https://cdn.shibe.online/shibes/b501169755bcf5c1eca874ab116a2802b6e51a2e.jpg","https://cdn.shibe.online/shibes/a8989bad101f35cf94213f17968c33c3031c16fc.jpg","https://cdn.shibe.online/shibes/f5d78feb3baa0835056f15ff9ced8e3c32bb07e8.jpg","https://cdn.shibe.online/shibes/75db0c76e86fbcf81d3946104c619a7950e62783.jpg","https://cdn.shibe.online/shibes/8ac387d1b252595bbd0723a1995f17405386b794.jpg","https://cdn.shibe.online/shibes/4379491ef4662faa178f791cc592b52653fb24b3.jpg","https://cdn.shibe.online/shibes/4caeee5f80add8c3db9990663a356e4eec12fc0a.jpg","https://cdn.shibe.online/shibes/99ef30ea8bb6064129da36e5673649e957cc76c0.jpg","https://cdn.shibe.online/shibes/aeac6a5b0a07a00fba0ba953af27734d2361fc10.jpg","https://cdn.shibe.online/shibes/9a217cfa377cc50dd8465d251731be05559b2142.jpg","https://cdn.shibe.online/shibes/65f6047d8e1d247af353532db018b08a928fd62a.jpg","https://cdn.shibe.online/shibes/fcead395cbf330b02978f9463ac125074ac87ab4.jpg","https://cdn.shibe.online/shibes/79451dc808a3a73f99c339f485c2bde833380af0.jpg","https://cdn.shibe.online/shibes/bedf90869797983017f764165a5d97a630b7054b.jpg","https://cdn.shibe.online/shibes/dd20e5801badd797513729a3645c502ae4629247.jpg","https://cdn.shibe.online/shibes/88361ee50b544cb1623cb259bcf07b9850183e65.jpg","https://cdn.shibe.online/shibes/0ebcfd98e8aa61c048968cb37f66a2b5d9d54d4b.jpg"]
            let kya = list[Math.floor(Math.random() * list.length)]
            xbot.sendFileFromUrl(from, kya, 'Dog.jpeg', 'Inu')
            break
        case '#qrcode':
           if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
        if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
           if(!args.lenght >= 2) return
           let qrcodes = body.slice(8)
           await xbot.sendFileFromUrl(from, `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${qrcodes}`, 'gambar.png', 'Process sukses!')
           break
        case '#ptl':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const pptl = ["https://i.pinimg.com/564x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/236x/98/08/1c/98081c4dffde1c89c444db4dc1912d2d.jpg","https://i.pinimg.com/236x/a7/e2/fe/a7e2fee8b0abef9d9ecc8885557a4e91.jpg","https://i.pinimg.com/236x/ee/ae/76/eeae769648dfaa18cac66f1d0be8c160.jpg","https://i.pinimg.com/236x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/564x/78/7c/49/787c4924083a9424a900e8f1f4fdf05f.jpg","https://i.pinimg.com/236x/eb/05/dc/eb05dc1c306f69dd43b7cae7cbe03d27.jpg","https://i.pinimg.com/236x/d0/1b/40/d01b40691c68b84489f938b939a13871.jpg","https://i.pinimg.com/236x/31/f3/06/31f3065fa218856d7650e84b000d98ab.jpg","https://i.pinimg.com/236x/4a/e5/06/4ae5061a5c594d3fdf193544697ba081.jpg","https://i.pinimg.com/236x/56/45/dc/5645dc4a4a60ac5b2320ce63c8233d6a.jpg","https://i.pinimg.com/236x/7f/ad/82/7fad82eec0fa64a41728c9868a608e73.jpg","https://i.pinimg.com/236x/ce/f8/aa/cef8aa0c963170540a96406b6e54991c.jpg","https://i.pinimg.com/236x/77/02/34/77023447b040aef001b971e0defc73e3.jpg","https://i.pinimg.com/236x/4a/5c/38/4a5c38d39687f76004a097011ae44c7d.jpg","https://i.pinimg.com/236x/41/72/af/4172af2053e54ec6de5e221e884ab91b.jpg","https://i.pinimg.com/236x/26/63/ef/2663ef4d4ecfc935a6a2b51364f80c2b.jpg","https://i.pinimg.com/236x/2b/cb/48/2bcb487b6d398e8030814c7a6c5a641d.jpg","https://i.pinimg.com/236x/62/da/23/62da234d941080696428e6d4deec6d73.jpg","https://i.pinimg.com/236x/d4/f3/40/d4f340e614cc4f69bf9a31036e3d03c5.jpg","https://i.pinimg.com/236x/d4/97/dd/d497dd29ca202be46111f1d9e62ffa65.jpg","https://i.pinimg.com/564x/52/35/66/523566d43058e26bf23150ac064cfdaa.jpg","https://i.pinimg.com/236x/36/e5/27/36e52782f8d10e4f97ec4dbbc97b7e67.jpg","https://i.pinimg.com/236x/02/a0/33/02a033625cb51e0c878e6df2d8d00643.jpg","https://i.pinimg.com/236x/30/9b/04/309b04d4a498addc6e4dd9d9cdfa57a9.jpg","https://i.pinimg.com/236x/9e/1d/ef/9e1def3b7ce4084b7c64693f15b8bea9.jpg","https://i.pinimg.com/236x/e1/8f/a2/e18fa21af74c28e439f1eb4c60e5858a.jpg","https://i.pinimg.com/236x/22/d9/22/22d9220de8619001fe1b27a2211d477e.jpg","https://i.pinimg.com/236x/af/ac/4d/afac4d11679184f557d9294c2270552d.jpg","https://i.pinimg.com/564x/52/be/c9/52bec924b5bdc0d761cfb1160865b5a1.jpg","https://i.pinimg.com/236x/1a/5a/3c/1a5a3cffd0d936cd4969028668530a15.jpg"]
            let pep = pptl[Math.floor(Math.random() * pptl.length)]
            xbot.sendFileFromUrl(from, pep, 'pptl.jpg', 'Jangan jadikan bacol ya cok :v', message.id)
            break
        case '#neko':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            q2 = Math.floor(Math.random() * 900) + 300;
            q3 = Math.floor(Math.random() * 900) + 300;
            xbot.sendFileFromUrl(from, 'http://placekitten.com/'+q3+'/'+q2, 'neko.png','Neko ')
            break
        case '#pokemon':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            q7 = Math.floor(Math.random() * 890) + 1;
            xbot.sendFileFromUrl(from, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+q7+'.png','Pokemon.png',)
            break
        case '#quote':
        case '#quotes':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const quotez2 = await axios.get('https://mhankbarbar.tech/api/randomquotes')
            xbot.reply(from, `➸ *Quotes* : ${quotez2.data.quotes}\n➸ *Author* : ${quotez2.data.author}`, id)
            break
        case '#lirik':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length == 1) return xbot.reply(from, 'Kirim perintah *#lirik [optional]*, contoh *#lirik aku bukan boneka*', id)
            const lagu = body.slice(7)
            const lirik = await liriklagu(lagu)
            xbot.reply(from, lirik, id)
            break
        case '#chord':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah *#chord [query]*, contoh *#chord aku bukan boneka*', id)
            const query__ = body.slice(7)
            const chord = await axios.get('https://mhankbarbar.tech/api/chord?q='+ query__+'&apiKey='+ barbarkey)
            if (chord.data.error) return xbot.reply(from, chord.data.error, id)
            xbot.reply(from, chord.data.result, id)
            break
        case '#listdaerah':
            if (!isGroupMsg) return xbot.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const listDaerah = await axios.get('https://mhankbarbar.tech/daerah')
            xbot.reply(from, listDaerah.data.result, id)
            break
        // ADMIN & OWNER
        case '#bc': // KASIH CREDIT DONG KALO COPAS
            if (!isOwner) return xbot.reply(from, `Perintah ini hanya untuk Owner XBOT`, id)
                bctxt = body.slice(4)
                txtbc = `*「 XBOT BROADCAST 」*\n\n${bctxt}`
                const semuagrup = await xbot.getAllChatIds();
                if(quotedMsg && quotedMsg.type == 'image'){
                    const mediaData = await decryptMedia(quotedMsg)
                    const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                    for(let grupnya of semuagrup){
                        var cekgrup = await xbot.getChatById(grupnya)
                        if(!cekgrup.isReadOnly) xbot.sendImage(grupnya, imageBase64, 'gambar.jpeg', txtbc)
                    }
                    xbot.reply('Broadcast sukses!')
                }else{
                    for(let grupnya of semuagrup){
                        var cekgrup = await xbot.getChatById(grupnya)
                        if(!cekgrup.isReadOnly && isMuted(grupnya)) xbot.sendText(grupnya, txtbc)
                    }
                            xbot.reply('Broadcast Success!')
                }
                break
        case '#adminlist':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            let mimin = ''
            for (let admon of groupAdmins) {
                mimin += `➸ @${admon.replace(/@c.us/g, '')}\n` 
            }
            await sleep(2000)
            await xbot.sendTextWithMentions(from, mimin)
            break
        case '#ownergroup':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const Owner_ = chat.groupMetadata.owner
            await xbot.sendTextWithMentions(from, `Owner Group : @${Owner_}`)
            break
        case '#otagall': // FOR OWNER & ADMIN XBOT
        case '#omentionall':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isOwner, !isAdmin) return xbot.reply(from, 'Perintah ini hanya untuk Owner XBOT', id)
            const groupMek = await xbot.getGroupMembers(groupId)
            let heho = '╔══✪〘 Mention All 〙✪══\n'
            for (let i = 0; i < groupMek.length; i++) {
                heho += '╠➥'
                heho += ` @${groupMek[i].id.replace(/@c.us/g, '')}\n`
            }
            heho += '╚═〘 XBOT OFFICIAL 〙'
            await sleep(2000)
            await xbot.sendTextWithMentions(from, heho)
            break
        case '#tagall': // FOR GROUP ADMINS
        case '#mentionall':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            const groupMem = await xbot.getGroupMembers(groupId)
            let hehe = '╔══✪〘 Mention All 〙✪══\n'
            for (let i = 0; i < groupMem.length; i++) {
                hehe += '╠➥'
                hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
            }
            hehe += '╚═〘 XBOT OFFICIAL 〙'
            await sleep(2000)
            await xbot.sendTextWithMentions(from, hehe)
            break
        case '#ekickall':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isOwner) return xbot.reply(from, 'Perintah ini hanya untuk Owner XBOT', id)
            if (!isBotGroupAdmins) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMem = await xbot.getGroupMembers(groupId)
            for (let i = 0; i < allMem.length; i++) {
                if (ownerNumber.includes(allMem[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await xbot.removeParticipant(groupId, allMem[i].id)
                }
            }
            xbot.reply(from, 'Success kick all member', id)
            break
        case '#okickall':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isOwner) return xbot.reply(from, 'Perintah ini hanya untuk Admin XBOT', id)
            if (!isBotGroupAdmins) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMeq = await xbot.getGroupMembers(groupId)
            for (let i = 0; i < allMeq.length; i++) {
                if ((adminNumber, ownerNumber).includes(allMeq[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await xbot.removeParticipant(groupId, allMeq[i].id)
                }
            }
            xbot.reply(from, 'Succes kick all member', id)
            break
        case '#kickall':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const isGroupOwner = sender.id === chat.groupMetadata.owner
            if (!isGroupOwner) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner group', id)
            if (!isBotGroupAdmins) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMek = await xbot.getGroupMembers(groupId)
            for (let i = 0; i < allMek.length; i++) {
                if ((adminNumber, ownerNumber).includes(allMek[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await xbot.removeParticipant(groupId, allMek[i].id)
                }
            }
            xbot.reply(from, 'Success kick all member', id)
            break
        case '#leaveall':
            if (!isOwner) return xbot.reply(from, 'Perintah ini hanya untuk Owner XBOT', id)
            const allChats = await xbot.getAllChatIds()
            const allGroups = await xbot.getAllGroups()
            for (let gclist of allGroups) {
                await xbot.sendText(gclist.contact.id, `Maaf bot sedang pembersihan, total chat aktif : ${allChats.length}`)
                await xbot.leaveGroup(gclist.contact.id)
            }
            xbot.reply(from, 'Succes leave all group!', id)
            break
        case '#clearall':
            if (!isOwner) return xbot.reply(from, 'Perintah ini hanya untuk Owner XBOT', id)
            const allChatz = await xbot.getAllChats()
            for (let dchat of allChatz) {
                await xbot.deleteChat(dchat.id)
            }
            xbot.reply(from, 'Succes clear all chat!', id)
            break
        case '#oadd':
            const orang = args[1]
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (args.length === 1) return xbot.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#add* 628xxxxx', id)
            if (!isOwner, !isAdmin) return xbot.reply(from, 'Perintah ini hanya untuk Admin XBOT', id)
            if (!isBotGroupAdmins) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            try {
                await xbot.addParticipant(from,`${orang}@c.us`)
            } catch {
                xbot.reply(from, mess.error.Ad, id)
            }
            break
        case '#add':
            const orgh = body.slice(4)
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (args.length === 1) return xbot.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#add* 628xxxxx', id)
            if (!isGroupAdmins) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            try {
                await xbot.addParticipant(from,`${orgh}@c.us`)
            } catch {
                xbot.reply(from, mess.error.Ad, id)
            }
            break
		case 'balik':
            if (!isOwner, !isAdmin) return xbot.reply(from, 'Perintah ini hanya untuk Admin XBOT', id)
			const memek = quotedMsgObj.sender.id
			await xbot.addParticipant(from, memek)
		break
        case '#okick':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner) return xbot.reply(from, 'Perintah ini hanya untuk Owner XBOT', id)
            if (!isBotGroupAdmins) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return xbot.reply(from, 'Untuk menggunakan Perintah ini, kirim perintah *#okick* @tagmember', id)
            await xbot.sendText(from, `Perintah Owner diterima, mengeluarkan:\n${mentionedJidList.join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if ((adminNumber, ownerNumber).includes(mentionedJidList[i])) return xbot.reply(from, mess.error.Sp, id)
                await xbot.removeParticipant(groupId, mentionedJidList[i])
            }
            break
        case '#kick':
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return xbot.reply(from, 'Untuk menggunakan Perintah ini, kirim perintah *#kick* @tagmember', id)
            await xbot.sendText(from, `Perintah diterima, mengeluarkan:\n${mentionedJidList.join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if ((adminNumber, groupAdmins).includes(mentionedJidList[i])) return xbot.reply(from, mess.error.Sp, id)
                await xbot.removeParticipant(groupId, mentionedJidList[i])
            }
            break
		case 'tendang':
            if (!isOwner, !isAdmin) return xbot.reply(from, 'Perintah ini hanya untuk Admin XBOT', id)
			const jembot = quotedMsgObj.sender.id
			await xbot.removeParticipant(from, jembot)
		break
        case '#oleave':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner, !isAdmin) return xbot.reply(from, 'Perintah ini hanya untuk Admin XBOT', id)
            await xbot.sendText(from,'XBOT DIPERINTAHKAN KELUAR OLEH OWNER!!').then(() => xbot.leaveGroup(groupId))
            break
        case '#leave':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            await xbot.sendText(from,'Sayonara').then(() => xbot.leaveGroup(groupId))
            break
        case '#opromote':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner, !isAdmin) return xbot.reply(from, 'Perintah ini hanya untuk Admin XBOT', id)
            if (!isBotGroupAdmins) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return xbot.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#promote* @tagmember', id)
            if (mentionedJidList.length >= 2) return xbot.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 user.', id)
            if (groupAdmins.includes(mentionedJidList[0])) return xbot.reply(from, 'Maaf, user tersebut sudah menjadi admin.', id)
            await xbot.promoteParticipant(groupId, mentionedJidList[0])
            await xbot.sendTextWithMentions(from, `Perintah Owner diterima, menambahkan @${mentionedJidList[0]} sebagai admin.`)
            break
        case '#promote':
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return xbot.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#promote* @tagmember', id)
            if (mentionedJidList.length >= 2) return xbot.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 user.', id)
            if (groupAdmins.includes(mentionedJidList[0])) return xbot.reply(from, 'Maaf, user tersebut sudah menjadi admin.', id)
            await xbot.promoteParticipant(groupId, mentionedJidList[0])
            await xbot.sendTextWithMentions(from, `Perintah diterima, menambahkan @${mentionedJidList[0]} sebagai admin.`)
            break
        case '#odemote':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner, !isAdmin) return xbot.reply(from, 'Perintah ini hanya untuk Admin XBOT', id)
            if (!isBotGroupAdmins) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return xbot.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#demote* @tagadmin', id)
            if (mentionedJidList.length >= 2) return xbot.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 orang.', id)
            if (!groupAdmins.includes(mentionedJidList[0])) return xbot.reply(from, 'Maaf, user tersebut tidak menjadi admin.', id)
            await xbot.demoteParticipant(groupId, mentionedJidList[0])
            await xbot.sendTextWithMentions(from, `Perintah Owner diterima, menghapus jabatan @${mentionedJidList[0]}.`)
            break
        case '#demote':
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return xbot.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#demote* @tagadmin', id)
            if (mentionedJidList.length >= 2) return xbot.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 orang.', id)
            if (!groupAdmins.includes(mentionedJidList[0])) return xbot.reply(from, 'Maaf, user tersebut tidak menjadi admin.', id)
            await xbot.demoteParticipant(groupId, mentionedJidList[0])
            await xbot.sendTextWithMentions(from, `Perintah diterima, menghapus jabatan @${mentionedJidList[0]}.`)
            break
        case '#join':
            if (args.length === 1) return xbot.reply(from, 'Hanya Owner yang bisa memasukan Bot ke dalam Grup!', id)
            if (!isOwner) return xbot.reply(from, 'Perintah ini hanya untuk Owner XBOT', id)
            const link = body.slice(6)
            const tGr = await xbot.getAllGroups()
            const minMem = 5
            const isLink = link.match(/(https:\/\/chat.whatsapp.com)/gi)
            const check = await xbot.inviteInfo(link)
            if (!isLink) return xbot.reply(from, 'Ini link? 👊🤬', id)
            if (tGr.length > 256) return xbot.reply(from, 'Maaf jumlah group sudah maksimal!', id)
            if (check.size < minMem) return xbot.reply(from, 'Member group tidak melebihi 5, bot tidak bisa masuk', id)
            if (check.status === 200) {
                await xbot.joinGroupViaLink(link).then(() => xbot.reply(from, 'Bot akan segera masuk!'))
            } else {
                xbot.reply(from, 'Link group tidak valid!', id)
            }
            break
        case '#odelete':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner, !isAdmin) return xbot.reply(from, 'Perintah ini hanya untuk Admin XBOT', id)
            if (!quotedMsg) return xbot.reply(from, 'Salah!!, kirim perintah *#delete [tagpesanbot]*', id)
            if (!quotedMsgObj.fromMe) return xbot.reply(from, 'Salah!!, Bot tidak bisa mengahpus chat user lain!', id)
            xbot.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
 case `#addlimit`:
         // if (!isOwner) return xbot.reply(from, 'Perintah ini hanya untuk Owner XBOT', id)
 
		if (!isAdmin) return xbot.reply(from, 'Maaf kak, hanya untuk Admim XBOT!.', id)
			var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == mentionedJidList[0]){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit -= args[1];
                        fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit));
                    }
						xbot.sendTextWithMentions(from, `Berhasil menambahkan ${args[1]} limit ke @${mentionedJidList[0].replace('@c.us', '')}` )
					break
        case '#delete':
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!quotedMsg) return xbot.reply(from, 'Salah!!, kirim perintah *#delete [tagpesanbot]*', id)
            if (!quotedMsgObj.fromMe) return xbot.reply(from, 'Salah!!, Bot tidak bisa mengahpus chat user lain!', id)
            xbot.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
        case '#getses':
            if (!isOwner) return xbot.reply(from, 'Perintah ini hanya untuk Owner XBOT', id)            
            const sesPic = await xbot.getSnapshot()
            xbot.sendFile(from, sesPic, 'session.png', 'Nih boss', id)
            break
        case '#xbotadmin':
            let admn = `This is list of XBOT Admin\nTotal : ${adminNumber.length}\n`
            for (let i of adminNumber) {
                admn += `➸ ${i.replace(/@c.us/g,'')}\n`
            }
            await xbot.reply(from, admn, id)
            break
        case '#limit':
            var found = false
            const limidat = JSON.parse(fs.readFileSync('./lib/database/limit.json'))
            for(let lmt of limidat){
                if(lmt.id === serial){
                    let limitCounts = limitCount-lmt.limit
                    if(limitCounts <= 0) return xbot.reply(from, `_Limit request anda sudah habis_`, id)
                    xbot.reply(from, `Sisa limit penggunaan bot anda tersisa : *${limitCounts}*`, id)
                    found = true
                }
            }
            console.log(limit)
            console.log(limidat)
            if (found === false){
                let obj = {id: `${serial}`, limit:1};
                limit.push(obj);
                fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit, 1));
                xbot.reply(from, `Sisa limit request anda tersisa : *${limitCount}*`, id)
            }
            break
        case '#restart': // WORK IF YOU RUN USING PM2
            if(isOwner){
                xbot.sendText(from, '*[WARN]* Restarting ...')
                setting.restartState = true
                setting.restartId = chatId
                var obj = []
                //fs.writeFileSync('./lib/setting.json', JSON.stringify(obj, null,2));
                fs.writeFileSync('./lib/database/limit.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/muted.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/msgLimit.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/left.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/Simsimi.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/nsfwz.json', JSON.stringify(obj));
                const spawn = require('child_process').exec;
                function os_func() {
                    this.execCommand = function (command) {
                        return new Promise((resolve, reject)=> {
                        spawn(command, (error, stdout, stderr) => {
                            if (error) {
                                reject(error);
                                return;
                            }
                            resolve(stdout)
                        });
                    })
                }}
                var oz = new os_func();
                oz.execCommand('pm2 restart index').then(res=> {
                }).catch(err=> {
                    console.log("os >>>", err);
                })
            }
            break
        case '#addadmin':
            if (!isOwner) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner XBOT!', id)
                for (let i = 0; i < mentionedJidList.length; i++) {
                adminNumber.push(mentionedJidList[i])
                fs.writeFileSync('./lib/database/admin.json', JSON.stringify(adminNumber))
                xbot.reply(from, 'Success Menambahkan Admin XBOT!', id)
                }
            break
        case '#deladmin':
            if (!isOwner) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner XBOT!', id)
                let inq = adminNumber.indexOf(mentionedJidList[0])
                adminNumber.splice(inq, 1)
                fs.writeFileSync('./lib/database/admin.json', JSON.stringify(adminNumber))
                xbot.reply(from, 'Success Menghapus Admin XBOT!', id)
 
            break 
 		case `#addprem`:
		 	if (!isAdmin) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin XBOT!', id)
         //   if (!isOwner) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner XBOT!', id)
				for (let i = 0; i < mentionedJidList.length; i++) {
				premium.push(mentionedJidList[i])
				fs.writeFileSync('./lib/database/premium.json', JSON.stringify(premium))
				xbot.sendTextWithMentions(from, `Success Menambahkan User VIP XBOT!\n╭──────「 *VIP👑* 」──────\n│+ *UserID* : @${mentionedJidList[0].replace('@c.us', '')}\n│+ *Status* : *ACTIVE*\n│+ *Since* : ${time}\n│+ *Expired* : ${timi}\n│ Thx for Upgrade to VIP🥰\n╰──────「 *XBOT* 」────`, id)
				}
            break
            case '#delprem':
		 	if (!isAdmin) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin XBOT!', id)
          //  if (!isOwner) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner Bot!', id)
                if (mentionedJidList.length === 0) return xbot.reply(from, ind.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return xbot.reply(from, ind.wrongFormat(), id)
                let predel = premium.indexOf(mentionedJidList[0])
                premium.splice(predel, 1)
                fs.writeFileSync('./lib/database/premium.json', JSON.stringify(premium))
                xbot.reply(from, 'Success Menghapus Member Premium!', id)
            break

        case '#block':
            if (!isOwner) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner XBOT!', id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                let unblock = `${mentionedJidList[i]}`
                await xbot.contactBlock(unblock).then((a)=>{
                    console.log(a)
                    xbot.reply(from, `Success block ${args[1]}!`, id)
                })
            }
            break
        case '#unblock':
            if (!isOwner) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner XBOT!', id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                let unblock = `${mentionedJidList[i]}`
                await xbot.contactUnblock(unblock).then((a)=>{
                    console.log(a)
                    xbot.reply(from, `Success unblok ${args[1]}!`, id)
                })
            } 
            break
        case '#ban':
            if (!isAdmin) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin XBOT!', id)
                for (let i = 0; i < mentionedJidList.length; i++) {
                banned.push(mentionedJidList[i])
                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(banned))
                xbot.reply(from, 'Succes ban target!',id)
            }
            break
        case '#unban':
            if (!isAdmin) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin XBOT!', id)
                let inz = banned.indexOf(mentionedJidList[0])
                banned.splice(inz, 1)
                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(banned))
                xbot.reply(from, 'Unbanned User!', id)
            break
        case '#listgroup':
                xbot.getAllGroups().then((res) => {
                let berhitung1 = 1
                let gc = `*This is list of group* :\n`
                for (let i = 0; i < res.length; i++) {
                    gc += `\n═════════════════\n\n*No : ${i+1}*\n*Nama* : ${res[i].name}\n*Pesan Belum Dibaca* : ${res[i].unreadCount} chat\n*Tidak Spam* : ${res[i].notSpam}\n`
                }
                xbot.reply(from, gc, id)
            })
            break
        case '#listbanned':
            let bened = `This is list of banned number\nTotal : ${banned.length}\n`
            for (let i of banned) {
                bened += `➸ ${i.replace(/@c.us/g,'')}\n`
            }
            await xbot.reply(from, bened, id)
            break
        case '#listblock':
            let hih = `This is list of blocked number\nTotal : ${blockNumber.length}\n`
            for (let i of blockNumber) {
                hih += `➸ ${i.replace(/@c.us/g,'')}\n`
            }
            await xbot.reply(from, hih, id)
            break
        case `#listprem`:

            let lv = `  「 *MEMBER PREMIUM* 」\n\nTotal : ${Premium.length}\n`
            for (let i of Premium) {
                lv += `\n ➥ ${i.replace(/@c.us/g,'')}\n`
            }
            await xbot.reply(from, lv, id)
            break        
        case '#ping':
            const loadedMsg = await xbot.getAmountOfLoadedMessages()
            const chatIds = await xbot.getAllChatIds()
            const groups = await xbot.getAllGroups()
            const timestamp = speed();
            const latensi = speed() - timestamp
            xbot.sendText(from, `Penggunaan RAM: *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*\nCPU: *${os.cpus().length}*\n\nStatus :\n- *${loadedMsg}* Loaded Messages\n- *${groups.length}* Group Chats\n- *${chatIds.length - groups.length}* Personal Chats\n- *${chatIds.length}* Total Chats\n\nSpeed: ${latensi.toFixed(4)} _Second_`)
            break
        case '#setgroupicon':
            if (!isGroupMsg) return xbot.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return xbot.reply(from, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return xbot.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            if (isMedia) {
                const mediaData = await decryptMedia(message)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await xbot.setGroupIcon(from, imageBase64)
                xbot.sendTextWithMentions(from, `Profile group telah diubah oleh admin @${sender.id.replace('@c.us','')}`)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await xbot.setGroupIcon(from, imageBase64)
                xbot.sendTextWithMentions(from, `Profile group telah diubah oleh admin @${sender.id.replace('@c.us','')}`)
            } else {
                xbot.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan #setgroupicon`, id)
            }
            break
        case '#bugreport':
            if (args.length === 1) return xbot.reply(from, '[❗] Kirim perintah *#bugreport [teks]*\ncontoh : *#bugreport Permisi Owner, Ada bug pada command #otakudesu, Tolong diperbaiki*')
            const bug = body.slice(11)
            if(!bug) return
            if(isGroupMsg){
                xbot.sendText(ownerNumber, `*[BUG REPORT]*\n*WAKTU* : ${time}\nNO PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\nGroup : ${formattedTitle}\n\n${bug}`)
                xbot.reply(from, 'Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.' ,id)
            }else{
                xbot.sendText(ownerNumber, `*[BUG REPORT]*\n*WAKTU* : ${time}\nNO PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\n\n${bug}`)
                xbot.reply(from, 'Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.', id)
            }
            break
        case '#toadmin':
            if (args.length === 1) return xbot.reply(from, '[❗] Kirim perintah *#toadmin [teks]*\ncontoh : *#toadmin Hai admin, saya ingin menyewa bot anda.')
            const bjir = body.slice(8)
            if(!bjir) return
            if(isGroupMsg){
                xbot.sendText(ownerNumber, `*[NEW MESSAGE]*\n*WAKTU* : ${time}\nNO PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\nGroup : ${formattedTitle}\n\n${bjir}`)
                xbot.reply(from, 'Pesan anda telah terkirim ke owner bot, silahkan menunggu sampai owner membalas pesan anda.' ,id)
            }else{
                xbot.sendText(ownerNumber, `*[ NEW MESSAGE ]*\n*WAKTU* : ${time}\nNO PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\n\n${bjir}`)
                xbot.reply(from, 'Pesan anda telah terkirim ke owner bot, silahkan menunggu sampai owner membalas pesan anda.', id)
            }
            break

         case '#profile':
            if (isBanned, isBlocked) return false
            if (isGroupMsg) {
                if (!quotedMsg) {
                var block = blockNumber.includes(author)
                var bend = banned.includes(author)
                var pic = await xbot.getProfilePicFromServer(author)
                var namae = pushname
                var sts = await xbot.getStatus(author)
                var adm = isGroupAdmins
                var donate = isAdmin
                const { status } = sts
                if (pic == undefined) {
                    var pfp = errorurl 
                } else {
                    var pfp = pic
                } 
                await xbot.sendFileFromUrl(from, pfp, 'pfp.jpg', `*User Profile* ✨️ \n\n➸ *Username: ${namae}*\n\n➸ *User Info: ${status}*\n\n*➸ Block : ${block}*\n\n*➸ Banned : ${bend}*\n\n➸ *Admin Group: ${adm}*\n\n➸ *Admin XBOT: ${donate}*`)
             } else if (quotedMsg) {
             var qmid = quotedMsgObj.sender.id
             var block = blockNumber.includes(qmid)
             var bend = banned.includes(author)
             var pic = await xbot.getProfilePicFromServer(qmid)
             var namae = quotedMsgObj.sender.name
             var sts = await xbot.getStatus(qmid)
             var adm = isGroupAdmins
             var donate = isAdmin
             const { status } = sts
              if (pic == undefined) {
              var pfp = errorurl 
              } else {
              var pfp = pic
              } 
              await xbot.sendFileFromUrl(from, pfp, 'pfp.jpg', `*User Profile* ✨️ \n\n➸ *Username: ${namae}*\n\n➸ *User Info: ${status}*\n\n*➸ Block : ${block}*\n\n*➸ Banned : ${bend}*\n\n➸ *Admin Group: ${adm}*\n\n➸ *Admin XBOT: ${donate}*`)
             }
            }
            break
  		case `#getpp`:
			if (!isGroupMsg) return xbot.reply(from, 'Hanya untuk di grup!.', id)
				var pik = await xbot.getProfilePicFromServer(mentionedJidList[0])
				await xbot.sendFileFromUrl(from, pik, 'pik.jpg', 'Nih Kak...', id)
				break
  /*      case `#statshp`:
            const tanda2 = '```'    
            const isCas = await xbot.getIsPlugged() ? "Charging ⚡" : "Not Charged"
            const MyPhone = await xbot.getMe()
            const { battery, plugged, phone } = MyPhone
            const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model, os_build_number } = phone
                xbot.reply(from, `${monospace(`
 ❏ 『 𝐒𝐓𝐀𝐓𝐈𝐒𝐓𝐈𝐊 𝐇𝐏 』
❍ Baterai : ${battery}%
❍ Charger : ${isCas}
❍ V.WhatsApp : ${wa_version}
❍ MCC : ${mcc}
❍ MNC : ${mnc}
❍ Versi OS : ${os_version}
❍ Merk HP : _${device_manufacturer}_
❍ Versi HP : _${device_model}_
`)}`, id)
            break  
      case `#statswa`:
            const loadedMsg = await xbot.getAmountOfLoadedMessages()
            const chatIds = await xbot.getAllChatIds()
            const groups = await xbot.getAllGroups()
            const blok = await xbot.getBlockedIds()
            const me = await xbot.getMe() 
                xbot.reply(from, `${monospace(`
  ❏ 『 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 𝐁𝐎𝐓 』 
❍ ${loadedMsg} : Pesan Masuk
❍ ${groups.length} : Pesan Grup
❍ ${chatIds.length - groups.length} : Chat Pribadi
❍ ${blok.length} : Kontak Diblokir
❍ ${chatIds.length} : Jumlah Chat
`)}`, id)     
            break
        case `#statspc`:

            const used = process.memoryUsage()
            const titit = moment().millisecond()
                xbot.reply(from, `${monospace(`
  ❏ 『 𝐒𝐘𝐒𝐓𝐄𝐌 𝐁𝐎𝐓 』
❍ HOST : ${os.hostname()}
❍ PLATFORM : ${os.platform()}
❍ SPEED : ${os.cpus()[0].speed} MHz
❍ CORE : ${os.cpus().length}
❍ RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
❍ N.Latency : ${titit} Ms
`)}`, id) 
            break    */
        case `#runtime`:
            function format(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
             var minutes = Math.floor(seconds % (60*60) / 60);
             var seconds = Math.floor(seconds % 60);

             return pad(hours) + ' Jam-' + pad(minutes) + ' Menit-' + pad(seconds) + ' Detik';
              }

            var uptime = process.uptime();
            xbot.reply(from, `Bot telah berjalan selama ${format(uptime)}`, id)
            break  
        case `#xvideos`:
            //if (!ispremium) return xbot.reply(from, '*Fitur Ini Khusus VIP!*\n _Daftar VIP Hanya 5k/Bulan_\n\n*Mau Daftar VIP?*\nChat Owner BOT\n_wa.me/6281342077268_ ', id)
            if (!isNsfw) return xbot.reply(from, `command/Perintah NSFW belum di aktifkan di group ini!`, id)
            if (!isGroupMsg) return xbot.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis/nJika Ingin Isi Ulang Chat Owner!/nKetik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return xbot.reply(from, `Kirim perintah *#xvideos* [ Lagu ]`)
            const querVID = body.slice(9)
            xbot.reply(from, mess.wait, id)
            try {
                const resvid = await fetch(`https://mnazria.herokuapp.com/api/porn?search=${encodeURIComponent(querVID)}`)
                if (!resvid.ok) throw new Error(`unexpected response ${resvid.statusText}`)
                const jsonserxvid = await resvid.json()
                const { result } = await jsonserxvid
                let berhitung = 1
                let xixixi = `*「 XVIDEOS 」*\n\n*Hasil Pencarian : ${querVID}*\n\n─────────────────\n\nKetik #getxvideos [angka] untuk mengambil ID, Contoh : #getxvideos 2\n`
                for (let i = 0; i < result.length; i++) {
                    xixixi += `\n─────────────────\n\n*Urutan* : ${berhitung+i}\n*Title* : ${result[i].title}\n*Actors* : ${result[i].actors}\n*Durasi* : ${result[i].duration}\n*Perintah download* : *#getxvideos ${result[i].url}*\n`
                }
                    xixixi += `\n\n`
                for (let ii = 0; ii < result.length; ii++) {
                    xixixi += `(#)${result[ii].url}`
                }
                await xbot.sendFileFromUrl(from, result[0].image, 'thumbxvid.jpg', xixixi, id)
                await limitAdd(serial)
            } catch (err){
                console.log(err)
                xbot.sendFileFromUrl(from, errorurl, 'error.png', '💔️ Maaf, Xvideos tidak ditemukan')
                xbot.sendText(ownerNumber, 'Xvideos Error : ' + err)
            }
            break
        case `#getxvideos`:
      //      if (!isAdmin) return xbot.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin XBOT!`, id)
            if (!isNsfw) return xbot.reply(from, `command/Perintah NSFW belum di aktifkan di group ini!`, id)
            if (!isGroupMsg) return xbot.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis/nJika Ingin Isi Ulang Chat Owner!/nKetik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            try {
                if (quotedMsg && quotedMsg.type == 'image') {
                    if (args.length === 1) return xbot.reply(from, `Kirim perintah *#getxvideos [ Id Download ]*, untuk contoh silahkan kirim perintah *#readme*`)
                    if (!Number(args[1])) return xbot.reply(from, `*Apabila ditag hanya cantumkan nomer urutan bukan ID Download!*\nContoh : *#getxvideos 1*`, id)
                    const datavideo = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                    const pilur = datavideo.split('(#)')
                    console.log(pilur[args[1]])
                    xbot.reply(from, mess.wait, id)
                    const vidxvid = await fetch(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${pilur[args[1]]}`)
                    if (!vidxvid.ok) throw new Error(`Error Get Video : ${vidxvid.statusText}`)
                    const vidxvideo = await vidxvid.json()
                     if (vidxvideo.status == false) {
                        xbot.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                    } else {
                        try{
                        const { mp4 } = await vidxvideo
                        const shortvidxv = await urlShortener(mp4)
                        const captions = `*「 XVIDEOS DOWNLOADER 」*\n\n*Website* : XVideos\n*Ext* : MP3\n\n*Silahkan download file media sedang melalui link yang tersedia.*\n${shortvidxv}`
                        xbot.sendFileFromUrl(from, `https://sensorstechforum.com/wp-content/uploads/2019/07/xvideos-virus-image-sensorstechforum-com.jpg`, ``, captions, id)
                        // await xbot.sendFileFromUrl(from, result, `${title}.mp3`, `XVIDEOS BY xbot`, id).catch(() => xbot.reply(from, mess.error.Yt4, id))
                        await limitAdd(serial)
                        } catch (err){
                            console.log(err)
                        }
                    }    
                } else if (quotedMsg && quotedMsg.type == 'chat') { 
                    xbot.reply(from, `*Salah tag! hanya tag pesan berisi data hasil dari penelusuran videp.*`, id)
                } else {
                    if (args.length === 1) return xbot.reply(from, `Kirim perintah *#getxvideos [ Id Download ]*, untuk contoh silahkan kirim perintah *.readme*`)
                    if (args[1] <= 25) return xbot.reply(from, `*Apabila ingin mengambil data video dengan nomor urutan, mohon tag pesan bot tentang pencarian videp!*`,)
                    xbot.reply(from, mess.wait, id)
                    const getvide = await get.get(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${pilur[args[1]]}`).json
                    if (getvide.error) {
                        xbot.reply(from, getvide.error, id)
                    } else {
                        const { mp4 } = await mhankyt35
                        const shortvidxv2 = await urlShortener(mp4)
                        console.log(`CHANGE API BARBAR : ${ext}\n${filesize}\n${status}`)
                        const captions = `*「 XVIDEOS DOWNLOADER 」*\n\n*Website* : XVideos\n\n*Ext* : MP4\n*Link* : ${shortvidxv2}\n*Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit*`
                        xbot.sendFileFromUrl(from, `https://sensorstechforum.com/wp-content/uploads/2019/07/xvideos-virus-image-sensorstechforum-com.jpg`, ``, captions, id)
                        // await xbot.sendFileFromUrl(from, result, `${title}.mp3`, `Music telah terkirim ${pushname}`, id).catch(() => xbot.reply(from, mess.error.Yt4, id))
                        await limitAdd(serial)
                   }
                }
            } catch (err) {
                xbot.sendText(ownerNumber, 'Error XVideos : '+ err)
                xbot.reply(from, `*Kesalahan! Pastikan id download sudah benar.*`, id)
                console.log(err)
            }
            break
case `#edotensei`:
        if (!isAdmin) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin XBOT!', id)

			if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
      //      if (!isGroupAdmins) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan ketika menjadi admin!', id)	
			if (mentionedJidList.length === 0) return xbot.reply(from, `Untuk menggunakan Perintah ini, kirim perintah *#edotensei* @tagmember`, id)
            //const org = args[1]
			await xbot.sendText(from, `Edotensei Hiyaaaa:\n${mentionedJidList.join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if ((adminNumber, ownerNumber).includes(mentionedJidList[i])) return xbot.reply(from, mess.error.Sp, id)
                await xbot.removeParticipant(groupId, mentionedJidList[i])
                await sleep(10000)
				await xbot.addParticipant(from, mentionedJidList[i])
            /*} catch {
                xbot.reply(from, mess.error.Ad, id)*/
            }
			break
            case '#triggered':
				if(isLimit(serial)) return
                                try {
                                    if (isMedia && isImage) {
                                        const ppRaw = await decryptMedia(message, uaOverride)
                                        canvas.Canvas.trigger(ppRaw)
                                            .then(async (buffer) => {
                                                canvas.write(buffer, `${sender.id}_triggered.png`)
                                                await xbot.sendFile(from, `${sender.id}_triggered.png`, `${sender.id}_triggered.png`, '', id)
                                                fs.unlinkSync(`${sender.id}_triggered.png`)
                                            })
                                    } else if (quotedMsg) {
                                        const ppRaw = await xbot.getProfilePicFromServer(quotedMsgObj.sender.id)
                                        canvas.Canvas.trigger(ppRaw)
                                            .then(async (buffer) => {
                                                canvas.write(buffer, `${sender.id}_triggered.png`)
                                                await xbot.sendFile(from, `${sender.id}_triggered.png`, `${sender.id}_triggered.png`, '', id)
                                                fs.unlinkSync(`${sender.id}_triggered.png`)
                                            })
                                    } else {
                                        const ppRaw = await xbot.getProfilePicFromServer(sender.id)
                                        canvas.Canvas.trigger(ppRaw)
                                            .then(async (buffer) => {
                                                canvas.write(buffer, `${sender.id}_triggered.png`)
                                                await xbot.sendFile(from, `${sender.id}_triggered.png`, `${sender.id}_triggered.png`, '', id)
                                                fs.unlinkSync(`${sender.id}_triggered.png`)
                                                limitAdd(serial)
                                            })
                                    }
                                } catch (err) {
                                    console.error(err)
                                    await xbot.reply(from, `Error!\n${err}`, id)
                                }
                            break
              case '#penjara':
                  if (!isGroupMsg) return xbot.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
                try {
                    if (isMedia && isImage) {
                        const ppRaw = await decryptMedia(message, uaOverride)
                        canvas.Canvas.jail(ppRaw)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_hitlered.jpg`)
                                await xbot.sendFile(from, `${sender.id}_hitlered.jpg`, `${sender.id}_hitlered.jpg`, '', id)
                                fs.unlinkSync(`${sender.id}_hitlered.jpg`)
                            })
                    } else if (quotedMsg) {
                        const ppRaw = await xbot.getProfilePicFromServer(quotedMsgObj.sender.id)
                        canvas.Canvas.jail(ppRaw)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_hitlered.jpg`)
                                await xbot.sendFile(from, `${sender.id}_hitlered.jpg`, `${sender.id}_hitlered.jpg`, '', id)
                                fs.unlinkSync(`${sender.id}_hitlered.jpg`)
                            })
                    } else {
                        const ppRaw = await xbot.getProfilePicFromServer(sender.id)
                        canvas.Canvas.jail(ppRaw)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_hitlered.jpg`)
                                await xbot.sendFile(from, `${sender.id}_hitlered.jpg`, `${sender.id}_hitlered.jpg`, 'Done, Jika ingin Foto Orang yang ingin di Penjara silahkan kirim foto/link image dengan caption #Penjara', id)
                                fs.unlinkSync(`${sender.id}_hitlered.jpg`)
                            })
                    }
                } catch (err) {
                    console.error(err)
                    await xbot.reply(from, `Error!\n${err}`, id)
                }
            break
                case '#kiss':
                  if (!isGroupMsg) return xbot.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
                     try {
                      if (isMedia && isImage) {
                        const ppRaw = await xbot.getProfilePicFromServer(sender.id)
                        const ppSecond = await decryptMedia(message, uaOverride)
                        if (ppRaw === undefined) {
                            var ppFirst = errorImg
                        } else {
                            var ppFirst = ppRaw
                        }
                        canvas.Canvas.kiss(ppFirst, ppSecond)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_kiss.png`)
                                await xbot.sendFile(from, `${sender.id}_kiss.png`, `${sender.id}_kiss.png`, 'Done, Jika ingin Foto Orang yang ingin di kiss silahkan kirim foto dengan caption #kiss', id)
                                fs.unlinkSync(`${sender.id}_kiss.png`)
                            })
                    } else if (quotedMsg) {
                        const ppRaw = await xbot.getProfilePicFromServer(sender.id)
                        const ppSecond = await xbot.getProfilePicFromServer(quotedMsgObj.sender.id)
                        if (ppRaw === undefined) {
                            var ppFirst = errorImg
                        } else {
                            var ppFirst = ppRaw
                        }
                        canvas.Canvas.kiss(ppFirst, ppSecond)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_kiss.png`)
                                await xbot.sendFile(from, `${sender.id}_kiss.png`, `${sender.id}_kiss.png`, '', id)
                                fs.unlinkSync(`${sender.id}_kiss.png`)
                            })
                    }
                } catch (err) {
                    console.error(err)
                    await xbot.reply(from, `Error!\n${err}`, id)
                }
            break
    case '#mascot':
	   if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)

    if (args.length == 0) return xbot.reply(from, `Membuat Mascot Giming\nPemakaian: ${prefix}mascotlogo [teks]\n\ncontoh: ${prefix}mascotlogo Dimas`, id)
                    await xbot.reply(from, `Sabar ya cin lagi aq prosess....`, id)
                console.log('Creating mascotlogo text...')
                const lmascotlogo = body.slice(7)
                await xbot.sendFileFromUrl(from, `https://api.vhtear.com/gamelogo?text=${lmascotlogo}&apikey=${vhtearkey}`, '', 'Nih...', id)
                    .then(() => console.log('Success creting image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await xbot.reply(from, `Error!`, id)
                    })
            break
			

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
    case '#logoml':
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)

            if (args.length === 1) return xbot.reply(from, `Kirim perintah *#logoml |Hero| Text*,\n\n contoh : *#logoml |layla| DXXOO*`, id)
            argz = body.trim().split('|')
            if (argz.length >= 2) {
                xbot.reply(from, `sabar brok eug proses dolo....`, id)
                const lheroml = argz[1]
                const llogoml = argz[2]   
                if (lheroml > 10) return xbot.reply(from, '*Masukin Nama Hero*\n_Contoh : layla_', id)
                if (llogoml > 10) return xbot.reply(from, '*Masukan Text*\n_Maksimal 10 huruf!_', id)
                xbot.sendFileFromUrl(from, `https://api.vhtear.com/logoml?hero=${lheroml}&text=${llogoml}&apikey=${vhtearkey}`)
            } else {
                await xbot.reply(from, `Wrong Format!\n[❗] Kirim perintah *#logoml |Hero| Text*,\n\n contoh : *#logoml |layla| DXXOO*`, id)
            }
       c
    case '#pornhub':
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)

            if (args.length === 1) return xbot.reply(from, `Kirim perintah *#logopornhub [ |Teks1|Teks2 ]*,\n\n contoh : *#pornhub |Dimas| HUB*`, id)
            argz = body.trim().split('|')
            if (argz.length >= 2) {
                xbot.reply(from, `sabar brok eug proses dolo....`, id)
                const lpornhub = argz[1]
                const lpornhub2 = argz[2]   
                if (lpornhub > 10) return xbot.reply(from, '*Teks1 Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
                if (lpornhub2 > 10) return xbot.reply(from, '*Teks2 Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
                xbot.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/phblogo?text1=${lpornhub}&text2=${lpornhub2}`)
            } else {
                await xbot.reply(from, `Wrong Format!\n[❗] Kirim perintah *#pornhub [ |Teks1| Teks2 ]*,\n\n contoh : *#pornhub |Dimas| HUB*`, id)
            }
            break
       case `#esticker`: //XBOT
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)

        if (!isAdmin) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin XBOT!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            xbot.reply(from, mess.wait, id)
            const emoji = emojiUnicode(args[1])
            xbot.sendStickerfromUrl(from, `https://api.vhtear.com/emojitopng?code=${emoji}&apikey=${vhtearkey}`)
            break  
      case '#stikerwa':
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)

        if (!isAdmin) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin XBOT!', id)
       if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
          const stikerwa = body.slice(10)
           const data_json = await axios.get(`https://api.vhtear.com/wasticker?query=${stikerwa}&apikey=${vhtearkey}`) 
            const wastiker = data_json.data.result.data
            for (let i = 0; i < wastiker.length; i++) {
            xbot.sendStickerfromUrl(from, wastiker[i], { method: 'get' })
                  }
              break
    case '#nulis2':
            if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)

    if (args.length == 0) return xbot.reply(from, `Membuat Text Sliding\nPemakaian: ${prefix}nulis2 [teks]\n\ncontoh: ${prefix}nulis2 Dimas`, id)
                    await xbot.reply(from, `sabar ya aq nuliss dulu....`, id)
                console.log('sedang menulis...')
                const nulis2q = body.slice(8)
                await xbot.sendFileFromUrl(from, `https://api.vhtear.com/write?text=${nulis2q}&apikey=${vhtearkey}`, '', 'nih pemalas....', id)
                    .then(() => console.log('Success creting image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await xbot.reply(from, `Error!`, id)
                    })
            break
	case '#getlink':
            if (!isGroupAdmins) return xbot.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
            if (!isBotGroupAdmins) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (isGroupMsg) {
                const inviteLink = await xbot.getGroupInviteLink(groupId);
                xbot.sendLinkWithAutoPreview(from, inviteLink, `\nLink group *${name}* Gunakan *#revoke* untuk mereset Link group`)
            } else {
            	xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            }
            break
	case "#revoke":
            if (!isGroupAdmins) return xbot.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id)
	        if (!isBotGroupAdmins) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
                    if (isBotGroupAdmins) {
                        aruga
                            .revokeGroupInviteLink(from)
                            .then((res) => {
                                xbot.reply(from, `Berhasil Revoke Grup Link gunakan *#getlink* untuk mendapatkan group invite link yang terbaru`, id);
                            })
                            .catch((err) => {
                                console.log(`[ERR] ${err}`);
                            });
                    }
                    break;
        case '#shopee':
            if (!isGroupMsg) return xbot.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (args.length == 0) return xbot.reply(from, `Kirim perintah *${prefix}shopee [ Query ]*\n\nContoh : *${prefix}shopee HP Samsul a20*`, id)
            const shopek = body.slice(8)
            xbot.reply(from, 'Wait.....', id)
            try {
                const dataplai = await axios.get(`https://api.vhtear.com/shopee?query=${shopek}&count=5&apikey=${vhtearkey}`)
                const dataplay = dataplai.data.result
                 let shopeq = `*「 SHOPEE 」*\n\n*Hasil Pencarian : ${shopek}*\n`
                for (let i = 0; i < dataplay.items.length; i++) {
                    shopeq += `\n─────────────────\n\n• *Nama* : ${dataplay.items[i].nama}\n• Harga* : ${dataplay.items[i].harga}\n• *Terjual* : ${dataplay.items[i].terjual}\n• *Lokasi Toko* : ${dataplay.items[i].shop_location}\n• *Deskripsi* : ${dataplay.items[i].description}\n• *Link Product : ${dataplay.items[i].link_product}*\n`
                }
                await xbot.sendFileFromUrl(from, dataplay.items[0].image_cover, `shopee.jpg`, shopeq, id)
            } catch (err){
                console.log(err)
            }
            break
    case '#tod':
    xbot.reply(from, 'Sebelum bermain berjanjilah akan melaksanakan apapun perintah yang diberikan.\n\nSilahkan Pilih:\n➥ #truth\n➥ #dare', id)
    break
    case '#truth':
            fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/truth.txt')
            .then(res => res.text())
            .then(body => {
                let truthx = body.split('\n')
                let truthz = truthx[Math.floor(Math.random() * truthx.length)]
                xbot.reply(from, truthz, id)
            })
            .catch(() => {
                xbot.reply(from, 'Hayolohhh, ada yang error!!', id)
            })
            break
    case '#dare':
            fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/dare.txt')
            .then(res => res.text())
            .then(body => {
                let darex = body.split('\n')
                let darez = darex[Math.floor(Math.random() * darex.length)]
                xbot.reply(from, darez, id)
            })
            .catch(() => {
                xbot.reply(from, 'Hayolohhh, ada yang error!!', id)
            })
            break
case '#spam':
       if(!isOwner) return xbot.reply(from, 'Are you crazy >.<', message.id)
      sperm = body.trim().split('|')
      for (let i = 0; i < sperm[1]; i++) {
       xbot.sendText(message.from, `${sperm[2]}`, message.id)
 }
break

 
case '#matrix': {
              if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            
             const logojoker = body.slice(7)
            const puppeteer = require('puppeteer')
               if (!logojoker) return xbot.reply(from, 'Kirim perintah *#matrix [text]*\n\nContoh : #matrix laylay', id)
                                xbot.reply(from, mess.wait, id)
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
                                        xbot.sendFileFromUrl(from, texts1, id)
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
case '#cerpen':  //By Kris A.K.A SPLBOT
	     xbot.reply(from, mess.wait, id)
		 const cerpen = await fetch(`https://masgi.herokuapp.com/api/cerpen`)
		 const cherpem = await cerpen.json()
		 xbot.reply(from, cherpem.data, id)
		 break


case '#puisi': //By Kris A.K.A SPLBOT
	     xbot.reply(from, mess.wait, id)
		 const puisi = await fetch(`https://masgi.herokuapp.com/api/puisi2`)
		 const pumisi = await puisi.json()
		 xbot.reply(from, pumisi.data, id)
		 break        

case '#indohot': // ARUGAZ
            if (!isGroupMsg) return xbot.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
         //   if (!isNsfw) return xbot.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            axios.get(`https://arugaz.herokuapp.com/api/indohot`)
            .then((res) => {
                let hasil = `Judul = ${res.data.result.judul}\n Genre = ${res.data.result.genre}\n Durasi = ${res.data.result.durasi}\n Link= ${res.data.result.url}`
                xbot.reply(from, hasil, id)
            })
            break         
         case `#mock`:
            const mock1 = body.slice(6)
            axios.get('https://arugaz.herokuapp.com/api/bapakfont?kata=' + mock1)
            .then((res) => {
                let hasil = `${res.data.result}`
                xbot.reply(from, hasil, id)
            })
            break
         case `#hilih`:
            const hilk1 = body.slice(7)
            axios.get('https://freerestapi.herokuapp.com/api/v1/hilih?kata=' + hilk1)
            .then((res) => {
                let hasil = `${res.data.result}`
                xbot.reply(from, hasil, id)
            })
            break
case '#email':

            if (!isGroupMsg) return xbot.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            const readcuys = body.slice(7)
            const email = readcuys.split('|')[0]
            const subjek = readcuys.split('|')[1]
            const pesan = readcuys.split('|')[2]
            const spamEmail = await axios.get(`https://videfikri.com/api/spamemail?email=${email}&subjek=${subjek}&pesan=${pesan}`)
            if (spamEmail.data.result.status == 204) return xbot.reply(from, spamEmail.data.result.logs, id)
            xbot.reply(from, spamEmail.data.result.log_lengkap, id)
            await limitAdd(serial)
            break
    case '#snobg':
            if (!isGroupMsg) return xbot.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
                if (isMedia && type === 'image' || isQuotedImage){
                    const encryptMedi = isQuotedImage ? quotedMsg : message
                    const datanobg = await decryptMedia(encryptMedi, uaOverride)
                    const fotonobg = await uploadImages(datanobg , `FotoPiyo.${sender.id}`)
                    await xbot.reply(from, `Sedang di proses bos ${pushname} xixi` , id)
                   const nobgg = await axios.get(`https://api.vhtear.com/removebgwithurl?link=${fotonobg}&apikey=${vhtearkey}`)
                   await xbot.sendStickerfromUrl(from, nobgg.data.result.image  ,'',  'Ini kak' , id)
                    console.log('Succes sending Sticker ')
                }
                break
case '#watersplash': //BY OGGYBOT
case '#waterplash':
                if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
                xbot.reply(from, '[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!', id)
                if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrla = await uploadImages(mediaData, false)
				const water = await axios.get(`https://api.zeks.xyz/api/watersplash?img=${getUrla}&apikey=vinzapi`)
				const splash = water.data
                await limitAdd(serial)
				xbot.sendImage(from, splash.result, 'thndr.jpg', '', id)
                } else {
                await xbot.reply(from, 'Wrong Format!', id)
                }
                break
case '#sketch': //BY OGGYBOT

                if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
                xbot.reply(from, '[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!', id)
                if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrla = await uploadImages(mediaData, false)
				const sketch = await axios.get(`https://api.zeks.xyz/api/sketchf?img=${getUrla}&apikey=vinzapi`)
				const sket = sketch.data
                await limitAdd(serial)
				xbot.sendImage(from, sket.result, 'thndr.jpg', '', id)
                } else {
                await xbot.reply(from, 'Wrong Format!', id)
                }
                break
case '#apigif': //BY OGGYBOT

                if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
                xbot.reply(from, '[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!', id)
                if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrla = await uploadImages(mediaData, false)
				const sapi = await axios.get(`http://api.zeks.xyz/api/sfire?img=${getUrla}&apikey=vinzapi`)
				const pisa = sapi.data
                await limitAdd(serial)
				xbot.sendMp4AsSticker(from, pisa.result, 'sapi.jpg', '', id)
                } else {
                await xbot.reply(from, 'Wrong Format!', id)
                }
                break
case '#calender': //BY OGGYBOT
case '#kalender':
                if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
                xbot.reply(from, '[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!', id)
                if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrla = await uploadImages(mediaData, false)
				const calender = await axios.get(`https://api.zeks.xyz/api/calendar?img=${getUrla}&apikey=vinzapi`)
				const kalender = calender.data
                await limitAdd(serial)
				xbot.sendImage(from, kalender.result, 'thndr.jpg', '', id)
                } else {
                await xbot.reply(from, 'Wrong Format!', id)
                }
                break
      case '#gtriger':
                if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
                await limitAdd(serial)
                if (isMedia && type === 'image' || isQuotedImage) {
                    await xbot.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const imageLink = await uploadImages(mediaData, `triger.${sender.id}`)
                            await xbot.sendStickerfromUrl(from, `https://api.zeks.xyz/api/triger?apikey=vinzapi&img=${imageLink}`, '', id)
                                .then(() => console.log('Success creating Sticker!'))
                        .catch(async (err) => {
                            console.error(err)
                            await xbot.reply(from, `[❗] Maaf Ada Yang Salah, Mungkin Server Lagi Error`, id)
                        })
                } else {
                    await xbot.reply(from, `Wrong Format!\n[❗] `, id)
                }
            break
case '#slot':
                if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                const somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                const somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                if (somtoyy  == '🍌 : 🍌 : 🍌') {
	     	    xbot.reply(from, `[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *SLOTS* ]\n\n*HOKI ANJAY*`, id)
	     	    } else if (somtoyy == '🍒 : 🍒 : 🍒') {
	     	    xbot.reply(from, `[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *SLOTS* ]\n\n*HOKI ANJAY*`, id)
	     	    } else if (somtoyy == '🔔 : 🔔 : 🔔') {
	     	    xbot.reply(from, `[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *SLOTS* ]\n\n*HOKI ANJAY*`, id)
	     	    } else if (somtoyy == '🍐 : 🍐 : 🍐') {
	     	    xbot.reply(from, `[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *SLOTS* ]\n\n*HOKI ANJAY*`, id)
	     	    } else if (somtoyy == '🍇 : 🍇 : 🍇') {
	     	    xbot.reply(from, `[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *SLOTS* ]\n\n*HOKI ANJAY*`, id)
	     	    } else {
	     	    xbot.reply(from, `[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *SLOTS* ]\n\n`, id)
	     	    }
	        break
            case '#play2'://silahkan kalian custom sendiri jika ada yang ingin diubah
           if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa digunakan didalam Grup!' , id)
            if (args.length == 0) return xbot.reply(from, `Untuk mencari lagu dari youtube\n\nPenggunaan: ${prefix}play judul lagu`, id)
            axios.get(`https://api.arugaz.my.id/api/media/ytsearch?query=${body.slice(6)}`)
            .then(async (res) => {
                await xbot.sendFileFromUrl(from, `${res.data.result[0].thumbnail}`, ``, `「 *PLAY VIDEO* 」\n\nJudul: ${res.data.result[0].title}\nDurasi: ${res.data.result[0].duration}detik\nUploaded: ${res.data.result[0].uploadDate}\nView: ${res.data.result[0].viewCount}\nChannel: ${res.data.result[0].channel.name}\n\n*_Wait, Sedang Mengirimkan Audio_*`, id)
				rugaapi.ytmp4(`https://youtu.be/${res.data.result[0].id}`)
				.then(async(res) => {
					await xbot.sendFileFromUrl(from, `${res.getVideo}`, '', '', id)
					.catch(() => {
						xbot.reply(from, `Error ngab...`, id)
					})
				})
            })
            break
case '/neko':
                try {
                    xbot.reply(from, mess.wait, id)
                    axios.get('https://akaneko-api.herokuapp.com/api/neko').then(res => {
                        xbot.sendFileFromUrl(from, res.data.url, 'neko.jpeg', 'Neko *Nyaa*~');
                    });
                } catch (err) {
                    console.log(err);
                    throw(err);
                };
                break
                case '/boobs':
                if (!isPremium) return xbot.reply(from, 'Command Premium\nChat owner buat mendaftar', id)
                xbot.reply(from, mess.wait, id);
                axios.get('https://nekos.life/api/v2/img/boobs').then(res => {
                	xbot.sendFileFromUrl(from, res.data.url, 'bakaaa hentaii>~<');
                });
                break
                case '/gifhentai':
                if (!isPremium) return xbot.reply(from, 'Command Premium\nChat owner buat mendaftar', id)
                xbot.reply(from, mess.wait, id);
                axios.get('https://nekos.life/api/v2/img/Random_hentai_gif').then(res => {
                	xbot.sendFileFromUrl(from, res.data.result, '.gif');
                });
                break
                case '/bjanime':
                if (!isPremium) return xbot.reply(from, 'Command Premium\nChat owner buat mendaftar', id)
                xbot.reply(from, mess.wait, id)
                const sblow = await axios.get('https://tobz-api.herokuapp.com/api/nsfwblowjob?&apikey=BotWeA')
                const rblow = sblow.data
                xbot.sendFileFromUrl(from, rblow.result, `RandoBlow.gif`, 'Random Blowjob!', id)
                    break
                case '/pussy':
                if (!isPremium) return xbot.reply(from, 'Command Premium\nChat owner buat mendaftar', id)
                xbot.reply(from, mess.wait, id);
                axios.get('https://nekos.life/api/v2/img/pussy_jpg').then(res => {
                	xbot.sendFileFromUrl(from, res.data.url);
                });
                break
               case '/rhentai':
                if (!isPremium) return xbot.reply(from, 'Command Premium\nChat owner buat mendaftar', id)
               xbot.reply(from, mess.wait, id);
               axios.get('https://nekos.life/api/v2/img/hentai').then(res => {
               	xbot.sendFileFromUrl(from, res.data.url);
               });
               break
               case '/kissgif':
                if (!isPremium) return xbot.reply(from, 'Command Premium\nChat owner buat mendaftar', id)
               xbot.reply(from, mess.wait, id);
               axios.get('https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA').then(res => {
               	xbot.sendFileFromUrl(from, res.data.result, `kiss.gif`, '', id)
               });
               break
                case '/cumgif':
                if (!isPremium) return xbot.reply(from, 'Command Premium\nChat owner buat mendaftar', id)
                xbot.reply(from, mess.wait, id);
                axios.get('https://nekos.life/api/v2/img/cum').then(res => {
                	xbot.sendFileFromUrl(from, res.data.url)
                });
                break
                case '/bjgif':
                if (!isPremium) return xbot.reply(from, 'Command Premium\nChat owner buat mendaftar', id)
                xbot.reply(from, mess.wait, id);
                axios.get('https://nekos.life/api/v2/img/bj').then(res => {
                	xbot.sendFileFromUrl(from, res.data.url);
                });
                break
                case '/nsfwgif':
                if (!isPremium) return xbot.reply(from, 'Command Premium\nChat owner buat mendaftar', id)
                xbot.reply(from, mess.wait, id);
                axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif').then(res => {
                	xbot.sendFileFromUrl(from, res.data.url);
                });
                break
                case '/waifu':
                if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa digunakan didalam Grup!', id)
                if (!isPremium) return xbot.reply(from, 'Command Premium\nChat owner buat mendaftar', id)
                xbot.reply(from, mess.wait, id);
                axios.get('https://nekos.life/api/v2/img/waifu').then(res => {
                    xbot.sendFileFromUrl(from, res.data.url, 'Waifu UwU');
                });
                break
                case '/slap':
                if (!isPremium) return xbot.reply(from, 'Command Premium\nChat owner buat mendaftar', id)
                xbot.reply(from, mess.wait, id);
                axios.get('https://nekos.life/api/v2/img/slap').then(res => {
                	xbot.sendFileFromUrl(from, res.data.url);
                });
                break
                case '/rhug':
                if (!isPremium) return xbot.reply(from, 'Command Premium\nChat owner buat mendaftar', id)
                xbot.reply(from, mess.wait, id);
                axios.get('https://nekos.life/api/v2/img/hug').then(res => {
                	xbot.sendFileFromUrl(from, res.data.url);
                });
                break
                case '/animeavatar':
                    if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa digunakan didalam Grup!' , id)
                    xbot.reply(from, mess.wait, id);
                    axios.get('https://nekos.life/api/v2/img/avatar').then(res => {
                        xbot.sendFileFromUrl(from, res.data.url, 'Avatar UwU');
                    });
                    break
            case '/nekonsfw':
                if (!isGroupMsg) return xbot.reply(from, 'Fitur ini hanya bisa digunakan didalam Grup!', id)
                if (!isPremium) return xbot.reply(from, 'Command Premium\nChat owner buat mendaftar', id)
                    xbot.sendText(from, mess.wait);
                    axios.get('https://tobz-api.herokuapp.com/api/nsfwneko').then(res => {
                        xbot.sendFileFromUrl(from, res.data.url, 'Sange kok sama 2D');
            })
                break
            case '/wallpaper2':
                xbot.reply(from, mess.wait, id);
                axios.get('https://akaneko-api.herokuapp.com/api/wallpapers').then(res => {
                    xbot.sendFileFromUrl(from, res.data.url, 'Desktop Wallpaper.jpeg', 'Enjoy :>', id);
                });
                break
            case '/baka':
                xbot.reply(from, mess.wait, id);
                axios.get('https://nekos.life/api/v2/img/baka').then(res => {
                    xbot.sendFileFromUrl(from, res.data.url, 'baka')
                })
                break
                case '/aesthetic':
                    const estutak = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic`, {method: 'get'})
                    const n = JSON.parse(JSON.stringify(estutak));
                    const anjayani = n[Math.floor(Math.random() * n.length)];
                    await xbot.sendImage(from, anjayani, 'img.jpg', 'nehh wallpaper', id)
                    break

case '#ytmp3':
        case '#mp3':
            if (args.length == 0) return xbot.reply(from, `Link Youtubenya Mana Kocak?`, id)
            await xbot.reply(from, `*[ WAIT ]*`, id)
            const mp3 = await yta (args[0])
            const { title, filesize, dl_link, thumb } = mp3
            if (filesize > '40' * 1000) return xbot.reply(from, `Filesize Terlalu Besar!!, Gunakan Saja Link Download Ini\n${dl_link}`, id)
            await cahyo.sendImage(from, thumb, 'thumb.jpg',`Title: ${title}\nFilesize: ${filesize}`, id)
            await cahyo.sendFileFromUrl(from, dl_link, `${title}.mp3`, `${title}`, id)
            break
case '#scplay':
			const judulagu = body.slice(8)
			if(!judulagu) return await xbot.reply(from, 'Masukkan judul lagu nya dik!', id)
			scdl.search("tracks", judulagu, cahyo_ID).then(res => {
			const urllagu = res.collection[0].permalink_url  
			scdl.getInfo(urllagu, cahyo_ID).then(info =>{
			const dur = timeConvert(info.full_duration)
			if (info.full_duration >= 900000) return xbot.reply(from, "Lagu lebih dari 15 menit tidak diperbolehkan!", id)
			const captione = `SoundCloud request by @${sender.id.replace(/[@c.us]/g, '')}\n\n? Judul : ${info.title}\n? Profile  : ${info.user.username}\n? Durasi : ${dur}\n? Diputar : ${info.playback_count}\n? Likes : ${info.likes_count}\n\n_sek dik gek ngirim lagune_`
			cahyo.sendTextWithMentions(from, captione)
				})
			scdl.download(urllagu, cahyo_ID)
			.then(stream => {
			stream.pipe(fs.createWriteStream('./media/audio/audio.mp3'))
				})
			})
			await sleep(15000)
			await xbot.sendFile(from, './media/audio/audio.mp3', 'audio.mp3', id)
			await sleep(30000)
			.then(() => fs.unlinkSync('./media/audio/audio.mp3'))
			.catch(() => xbot.reply(from, 'Link salah, coba cari link dulu menggunakan #scfind judul lagu', id))
			break
case '#spotify':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return xbot.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
                    
            await limitAdd(serial)
            if (args.length === 1) return xbot.reply(from, 'Kirim perintah #spotify [query]\nContoh : #spotify  Payphone', id)
            try{
            xbot.reply(from, mess.wait, id)
            const gimgg = body.slice(9)
            const gamb = `https://api.vhtear.com/spotify?query=${gimgg}&apikey=${vhtearkey}`
            const gimg = await axios.get(gamb)
            // var gimg2 = Math.floor(Math.random() * gimg.data.result.result.length)
            await xbot.reply(from, `**𝙎𝙋𝙊𝙏𝙄𝙁𝙔*\n\n*- Judul*: ${gimg.data.result.result[0].title}\n- *Link*: ${gimg.data.result.result[0].url}`, id)
            await xbot.sendFileFromUrl(from, gimg.data.result.result[0].music_prev, `${gimgg}.mp3`, `© XBOT 2020`, id)
         } catch (err) {
            console.log(err); 
            xbot.reply(from, '?? Maaf, Terjadi kesalahan, coba gunakan judul lain..', id)
            // xbot.sendText(ownerNumber, 'Google Image Error : ' + err)
            }
          break
        // LIST MENU
        case '#menu':
        case '#help':
            xbot.sendFileFromUrl(from, 'https://i.ibb.co/6XhWHgN/xbot.jpg', 'xbot.jpg', `╭─────「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」──────
│🔸 ${wkwk}Bot Name :${wkwk} *XBOT OFFICIAL*
│🔸 ${wkwk}Author :${wkwk} *BangAliff*🦅
│🔸 ${wkwk}Status Bot :${wkwk} *Activated*
│🔸 ${wkwk}Message For You :${wkwk} *Don't Spam and Call!*
╰────────────────────────

╭────「 𝐌𝐄𝐍𝐔 𝐔𝐓𝐀𝐌𝐀 」──
│🔸 ${wkwk}#limit${wkwk}
│🔸 ${wkwk}#sewa${wkwk}
│🔸 ${wkwk}#ping${wkwk}
│🔸 ${wkwk}#toadmin${wkwk} *Messages*
│🔸 ${wkwk}#listblock${wkwk}
│🔸 ${wkwk}#listbanned${wkwk}
│🔸 ${wkwk}#readme${wkwk}
│🔸 ${wkwk}#owner${wkwk}
│🔸 ${wkwk}#donate${wkwk}
╰───────────────────

╭────「 𝐏𝐀𝐋𝐈𝐍𝐆 𝐒𝐄𝐑𝐔 」──
│🔸 ${wkwk}#play${wkwk} *Song*
│🔸 ${wkwk}#joox${wkwk} *Song*
│🔸 ${wkwk}#ytmp3${wkwk} *Link Youtube*
│🔸 ${wkwk}#ytmp4${wkwk} *Link Youtube*
│🔸 ${wkwk}#shoppe${wkwk} *Nama Barang*
│🔸 ${wkwk}#nulis${wkwk} *<text>*
│🔸 ${wkwk}#nulis2${wkwk} *<text>*
│🔸 ${wkwk}#cekresi${wkwk} *NoResi* *Kurir*
│🔸 ${wkwk}#cekongkir${wkwk} *|Kurir|Dari|Tujuan*
│🔸 ${wkwk}#email${wkwk} *YourMail* | *Subject* | *Pesanmu*
╰────────────────────

╭────「 𝐓𝐄𝐗𝐓 𝐈𝐌𝐆 𝐌𝐀𝐊𝐄𝐑 」──
│🔸 ${wkwk}#stiker${wkwk} *ReplyMsg/Img*
│🔸 ${wkwk}#stic${wkwk} *ReplyMsg/Img*
│🔸 ${wkwk}#snobg${wkwk} *ReplyMsg/Img*
│🔸 ${wkwk}#silktext${wkwk} *<text>*
│🔸 ${wkwk}#tahta${wkwk} *<text>*
│🔸 ${wkwk}#bpink${wkwk} *<text>*
│🔸 ${wkwk}#partytext${wkwk} *<text>*
│🔸 ${wkwk}#textmaker${wkwk} *<text>*
│🔸 ${wkwk}#lovemaker${wkwk} *<text>*
│🔸 ${wkwk}#glowmaker${wkwk} *<text>*
│🔸 ${wkwk}#fssarah${wkwk} *<text>*
│🔸 ${wkwk}#mascot${wkwk} *<text>*
│🔸 ${wkwk}#sketch${wkwk} *<img>*
│🔸 ${wkwk}#calender${wkwk} *<img>*
│🔸 ${wkwk}#watersplash${wkwk} *<img>*
│🔸 ${wkwk}#pornhub${wkwk} *|text1|text2*
│🔸 ${wkwk}#glithctext${wkwk} *|text1|text2*
│🔸 ${wkwk}#googleteks${wkwk} *|text1|text2*
│🔸 ${wkwk}#slidteks${wkwk} Text1 Text2
╰────────────────────

╭────「 𝐈𝐒𝐋𝐀𝐌𝐈𝐂 」──
│🔸 ${wkwk}#quran${wkwk}  *Urutan Surah*
│🔸 ${wkwk}#infosurah${wkwk}  *Nama Surah*
│🔸 ${wkwk}#tafsir${wkwk}  *Nama Surah* *Ayat*
│🔸 ${wkwk}#jadwalsholat${wkwk} *Daerah*
│🔸 ${wkwk}#listsurah${wkwk} 
│🔸 ${wkwk}#listdaerah${wkwk} 
╰────────────────────

╭────「 𝐊𝐄𝐑𝐀𝐍𝐆 𝐌𝐄𝐍𝐔 」──
│🔸 ${wkwk}#apakah${wkwk}  *text*
│🔸 ${wkwk}#bisakah${wkwk}  *text*
│🔸 ${wkwk}#kapankah${wkwk}  *text*
│🔸 ${wkwk}#rate${wkwk}  *text*
╰────────────────────

╭────「 𝐌𝐄𝐍𝐔 𝐆𝐀𝐁𝐔𝐓 」──
│🔸 ${wkwk}#spin${wkwk} 
│🔸 ${wkwk}#puisi${wkwk} 
│🔸 ${wkwk}#cerpen${wkwk} 
│🔸 ${wkwk}#indohot${wkwk} 
│🔸 ${wkwk}#mock${wkwk} *<text>*
│🔸 ${wkwk}#hilih${wkwk}  *<text>*
╰────────────────────

╭────「 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 」──
│🔸 ${wkwk}#snk${wkwk} 
│🔸 ${wkwk}#groupinfo${wkwk} 
│🔸 ${wkwk}#getpp${wkwk} *@tagmember*
│🔸 ${wkwk}#group${wkwk} *open/close*
│🔸 ${wkwk}#add${wkwk}  *nomor*
│🔸 ${wkwk}#kick${wkwk}  *@tagmember*
│🔸 ${wkwk}#tagall${wkwk} 
│🔸 ${wkwk}#getlink${wkwk} 
│🔸 ${wkwk}#revoke${wkwk} 
│🔸 ${wkwk}#promote${wkwk} 
│🔸 ${wkwk}#demote${wkwk} 
│🔸 ${wkwk}#nyimak${wkwk} 
╰────────────────────

╭────「 𝐒𝐄𝐖𝐀 𝐅𝐈𝐓𝐔𝐑 」──
│🔸 ${wkwk}#addlimit${wkwk}  *Nom* *@tagmember*
│🔸 ${wkwk}#addprem${wkwk}  *@tagmember*
│🔸 ${wkwk}#delprem${wkwk}  *@tagmember*
│🔸 ${wkwk}#ban${wkwk}  *@tagmember*
│🔸 ${wkwk}#unban${wkwk}  *@tagmember*
│🔸 ${wkwk}#edotensei${wkwk}  *@tagmember*
│🔸 ${wkwk}#stikerwa${wkwk}  *Name*
│🔸 ${wkwk}#esticker${wkwk}  *Emoticon*
│🔸 ${wkwk}tendang${wkwk}  *ReplyMsg*
│🔸 ${wkwk}balik${wkwk}  *ReplyMsg*
╰────────────────────

╭────「 𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔 」──
│🔸 ${wkwk}#st1${wkwk}  *text*
│🔸 ${wkwk}#tod${wkwk}  *text*
│🔸 ${wkwk}#zodiak${wkwk}  *zodiakmu*
│🔸 ${wkwk}#artinama${wkwk}  *name*
│🔸 ${wkwk}#caklontong${wkwk} 
│🔸 ${wkwk}#family100${wkwk} 
│🔸 ${wkwk}#artimimpi${wkwk}  *name*
│🔸 ${wkwk}#heroml${wkwk}  *text*
│🔸 ${wkwk}#howgay${wkwk}  *@tagmember*
│🔸 ${wkwk}#pantun${wkwk} 
│🔸 ${wkwk}#katabijak${wkwk} 
│🔸 ${wkwk}#fakta${wkwk} 
│🔸 ${wkwk}#penjara${wkwk} 
│🔸 ${wkwk}#triggered${wkwk} 
╰────────────────────

_*Author By ♥️ BangAliff*_🦅`, id)
            break
        case '#xbotgroup':
            xbot.reply(from, `Link Group XBOT : https://chat.whatsapp.com/J3LHFRxkSLf7VakvKDwfBj\nJangan Lupa Join Ya Kak ${pushname}`, id)
 
            break
        case '#sewa':
             xbot.reply(from, `Halo ${pushname}, terimakasih telah menggunakan layanan bot kami. jika anda berminat untuk sewa bot ini untuk bergabung ke grup anda, silahkan hubungi owner bot dengan perintah #owner .`, id)
             break
        case '#adminmenu':
            if (!isAdmin) return xbot.reply(from, 'Perintah ini hanya untuk Admin XBOT', id)
            xbot.sendText(from, admincmd)
            break
        case '#ownermenu':
            if (!isOwner) return xbot.reply(from, 'Perintah ini hanya untuk Owner XBOT', id)
            xbot.sendText(from, ownercmd)
            break
        case '#praymenu':
            xbot.reply(from, praycmd)
            break
        case '#nsfwmenu':
            if (!isGroupMsg) return xbot.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return xbot.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            xbot.sendText(from, nsfwcmd)
            break
        // INFORMATION
        case '#donate':
            xbot.sendText(from, sumbang)
            break
        case '#readme':
            xbot.reply(from, readme, id)
            break
        case '#info':
            xbot.sendText(from, info)
            break
        case '#bahasa':
            xbot.sendText(from, bahasalist)
            break
        case '#snk':
            xbot.reply(from, snk, id)
            break
        default:
            await xbot.sendSeen(from) 
            }
        }
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
        //xbot.kill().then(a => console.log(a))
    }
}