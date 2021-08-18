// SC NYA JANGAN DI JUAL NGENTOD
//MAKASIH DAH PAKE 
//Zeetoyah002 memperhatikanmu!!
//Enggak² canda om :v
//Sc seadanya ya bisa aja suatu saat nih sc gw update
//ganti nama bot dan owner di settings.json
//di sini jan lu obrak abrik NGENTOD
//ntar ga work bilang ke gua "Bang kok gak work"
//minta di tampol emang :v
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const google = require('google-it')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const imagenye = JSON.parse(fs.readFileSync('./database/image.js'))
const audionye = JSON.parse(fs.readFileSync('./database/audio.js'))
const setiker = JSON.parse(fs.readFileSync('./database/sticker.js'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const {
owner,
namabot,
nameowner,
zeeapi,
umur,
askot,
exif1,
exif2
} = settings
//========================================================================//
//tanggal by zee
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = hari + " " + tanggal + " " + bulan + " " + tahun;
//========================================================================//
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nameowner}\n`
            + 'ORG:OWNER BOTZ;\n'
            + `TEL;type=CELL;type=VOICE;waid=${owner}:+${owner}\n`
            + 'END:VCARD'
banChats = true
offline = false
waktu = '-'
alasan = '-'
numbernye = '0'
fake = `*Waktu : ${time}*\n-----------------------------------------------------------------\n*Tanggal : ${tampilTanggal}*`
targetpc = '-'
module.exports = Christ = async (Christ, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        	const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
                const type = Object.keys(mek.message)[0]        
                const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = Christ.user.jid
		const botNumberss = Christ.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const totalchat = await Christ.chats.all()
		const groupMetadata = isGroup ? await Christ.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isVote = isGroup ? voting.includes(from) : false
        const conts = mek.key.fromMe ? Christ.user.jid : Christ.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Christ.user.name : conts.notify || conts.vname || conts.name || '-'
    const Owner = (`${owner}@s.whatsapp.net`)
    const isOwner = Owner.includes(sender) || mek.key.fromMe

        //MESS
		mess = {
			wait: 'Tungggu sebentar ya kak!!',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu!!!',
			error: {
				stick: 'Itu bukan sticker kak!!!',
				Iv: 'Link kamu eror kak !!!'
			},
			only: {
				group: 'Fitur ini khusus grup kak !!!',
				owner: 'Fitur ini khusus owner kak !!!',
				admin: 'Fitur ini khusus admin grup !!!',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            Christ.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            Christ.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Christ.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Christ.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            Christ.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            Christ.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            Christ.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Christ.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Christ.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            const author = "_*Copy right ©2021 Zeevalya*_"
            const developer = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:Zeevalya\n`
            + `ORG:${namabot};\n`
            + `TEL;type=CELL;type=VOICE;waid=6285755007597:+6285755007597\n`
            + 'END:VCARD'
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe && !isOwner){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            Christ.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe && !isOwner){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        Christ.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
       // Auto Read
        Christ.chatRead(from, "read")









//========================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
	    if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	
        if (!mek.key.fromMe && !isOwner && banChats === true) return
switch (command) {
    case 'jadibot':
    if(mek.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
    jadibot(reply,Christ,from)
    break
    case 'stopjadibot':
    if(mek.key.fromMe)return reply('tidak bisa stopjadibot kecuali owner')
    stopjadibot(reply)
    break
    case 'listbot':
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
    case 'menu':
    case 'help':
    	var menu = `
Hai *${pushname}*

• _Bot_ ini menggunakan prefix *[ ${prefix} ]*
• Jika menemukan bug atau eror
  silahkan ketik *_${prefix}lpr_ <bug>*

---------------------------------------------------------------------
||                    *MY OWNER*                        ||
---------------------------------------------------------------------
| • Nama      : ${nameowner}
| • Umur       : ${umur}
| • Location : ${askot}
---------------------------------------------------------------------
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
*LIST MENU* :
---------------------------------------------------------------------
||                      *OWNER*                             ||
---------------------------------------------------------------------
|| • _${prefix}off_
|| • _${prefix}on_
|| • _${prefix}status_
|| • _${prefix}self_
|| • _${prefix}public_
|| • _${prefix}setthumb_
|| • _${prefix}settarget_
|| • _${prefix}setfakeimg_
|| • _${prefix}setreply_
---------------------------------------------------------------------
||                       *GRUB*                                ||
---------------------------------------------------------------------
|| • _${prefix}grup_ <0/1>
|| • _${prefix}tutuptime_
|| • _${prefix}linkgc_
|| • _${prefix}promote_ @target
|| • _${prefix}demote_ @target
|| • _${prefix}listadmin_
|| • _${prefix}setppgrup_
|| • _${prefix}kick_ @target
|| • _${prefix}add_ 628xx
|| • _${prefix}listonline_
---------------------------------------------------------------------
||                      *MAKER*                             ||
---------------------------------------------------------------------
|| • _${prefix}sticker_
|| • _${prefix}swm_ <author|packname>
|| • _${prefix}take_ <author|packname>
|| • _${prefix}fdeface_
|| • _${prefix}emoji_
|| • _${prefix}attp_
|| • _${prefix}nulis_ <query>
---------------------------------------------------------------------
||                    *CONVERT*                           ||
---------------------------------------------------------------------
|| • _${prefix}toimg_
|| • _${prefix}tomp3_
|| • _${prefix}tomp4_
|| • _${prefix}slow_
|| • _${prefix}fast_
|| • _${prefix}reverse_
|| • _${prefix}tourl_
---------------------------------------------------------------------
||                    *UP STORY*                          ||
---------------------------------------------------------------------
|| • _${prefix}upswteks_
|| • _${prefix}upswimage_
|| • _${prefix}upswvideo_
---------------------------------------------------------------------
||                        *FUN*                                 ||
---------------------------------------------------------------------
|| • _${prefix}fitnah_
|| • _${prefix}fitnahpc_
|| • _${prefix}getpp_
|| • _${prefix}kontak_
|| • _${prefix}caklontong_
|| • _${prefix}tebakgambar_
|| • _${prefix}fakedata_
|| • _${prefix}meme_
|| • _${prefix}quotes_
|| • _${prefix}quoteskanye_
|| • _${prefix}artinama_ <query>
|| • _${prefix}tts_ <query>
|| • _${prefix}jadian_
|| • _${prefix}slot_
|| • _${prefix}suit_
---------------------------------------------------------------------
||                        *TAG*                                 ||
---------------------------------------------------------------------
|| • _${prefix}hidetag_
|| • _${prefix}kontag_
|| • _${prefix}sticktag_
|| • _${prefix}totag_
|| • _${prefix}tagall_
---------------------------------------------------------------------
||                    *DOWNLOAD*                       ||
---------------------------------------------------------------------
|| • _${prefix}ytsearch_ <query>
|| • _${prefix}igstalk_ <query>
|| • _${prefix}play_ <query>
|| • _${prefix}video_ <query>
|| • _${prefix}ytmp3_ <link>
|| • _${prefix}ytmp4_ <link>
|| • _${prefix}ig_ <link>
|| • _${prefix}igstory_ <username>
|| • _${prefix}twitter_ <link>
|| • _${prefix}tiktok_ <link>
|| • _${prefix}tiktokaudio_ <link>
|| • _${prefix}fb_ <link>
|| • _${prefix}brainly_ <query>
|| • _${prefix}image_ <query>
|| • _${prefix}anime_ <random>
|| • _${prefix}pinterest_ <query>
|| • _${prefix}komiku_ <query>
|| • _${prefix}chara_ <query>
|| • _${prefix}playstore_ <query>
|| • _${prefix}otaku_ <query>
|| • _${prefix}kusonime_ <query>
|| • _${prefix}randomwpp_
|| • _${prefix}translate_
---------------------------------------------------------------------
||                    *OTHER*                                ||
---------------------------------------------------------------------
|| • _${prefix}linkwa_ <query
|| • _${prefix}owner_
|| • _${prefix}ping_
|| • _${prefix}inspect_
|| • _${prefix}join_
|| • _${prefix}caripesan_ <query>
|| • _${prefix}get_
|| • _${prefix}term_ <code>
|| • _${prefix}sourcecode_
|| • _x <code>_
---------------------------------------------------------------------
||                       *WIBU*                                ||
---------------------------------------------------------------------
|| • _${prefix}chara_ <query>
|| • _${prefix}otaku_ <query>
|| • _${prefix}kusonime_ <query>
---------------------------------------------------------------------
||                    *JADI BOT*                            ||
---------------------------------------------------------------------
|| • _${prefix}jadibot_
|| • _${prefix}stopjadibot_
|| • _${prefix}listbot_
---------------------------------------------------------------------
||                       *VOTE*                                ||
---------------------------------------------------------------------
|| • _${prefix}voting_ 
|| • _${prefix}delvote_
|| • _vote_
|| • _devote_
---------------------------------------------------------------------
||                    *INFORMATION*                  ||
---------------------------------------------------------------------
|| • _${prefix}developer_
|| • _${prefix}google_ <query>
|| • _${prefix}kbbi_ <query>
|| • _${prefix}film_ <query>
|| • _${prefix}coviddunia_
|| • _${prefix}covidindo_
|| • _${prefix}infogempa_
|| • _${prefix}map_ <daerah>
|| • _${prefix}chordlagu_ <query>
|| • _${prefix}lirik_ <query>
|| • _${prefix}wikipedia_ <query>
---------------------------------------------------------------------
_*${tampilTanggal}*_


${author}`
      	fakestatus(menu)
           	break
    case 'delvote':
            if(!mek.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            if(!isGroupAdmins && !mek.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
    case 'linkwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
    case 'igstory': 
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    Christ.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    Christ.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
    case 'caripesan':
            if(!q)return reply('pesannya apa bang?')
            let v = await Christ.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await Christ.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
    case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
    case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            Christ.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
    case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
    case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await Christ.sendMessage(from,li,image,{quoted: mek})
            break
    case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await Christ.sendMessage(from,di,image,{quoted: mek})
            break
    case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
    case 'on':
            if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
            offline = false
            fakestatus(' ```ANDA TELAH ONLINE``` ')
            break       
    case 'status':
            fakestatus(`---------------------------------------------------------------------
|                     *STATUS BOT*                       |
---------------------------------------------------------------------
| | • ${offline ? '> OFFLINE' : '> ONLINE'}
| | • ${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}
---------------------------------------------------------------------`)
            break
    case 'off':
            if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break   
    case 'get':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
    case 'kontag':
            if (!mek.key.fromMe && !isOwner) return
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            Christ.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Christ.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Christ.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Christ.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Christ.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Christ.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Christ.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Christ.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Christ.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Christ.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Christ.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Christ.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Christ.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Christ.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Christ.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Christ.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            Christ.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await Christ.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await Christ.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Christ.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Christ.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Christ.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Christ.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Christ.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Christ.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Christ.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Christ.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            Christ.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
    case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            Christ.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await Christ.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `${namabot}`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `${nameowner}`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, Christ, mek, from)
			break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await Christ.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            Christ.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            Christ.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await Christ.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            Christ.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            Christ.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'upswteks':
      if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
            if (!q) return fakestatus('Isi teksnya!')
            Christ.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
      if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await Christ.downloadMediaMessage(swsw)
            Christ.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            Christ.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
      if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await Christ.downloadMediaMessage(swsw)
            Christ.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            Christ.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await Christ.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await Christ.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		Christ.sendMessage(from, mat, MessageType.extendedText, anu)
            break
    case 'public':
          	if (!mek.key.fromMe && !isOwner) return
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!mek.key.fromMe && !isOwner) return
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *SELF-MODE* 」`)
          	break
 	case 'hidetag':
			if (!mek.key.fromMe && !isOwner && !isGroupAdmins) return
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await Christ.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			Christ.sendMessage(from, optionshidetag, text)
			break
	case 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
        case 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
            var a = `${exif1}`
            var b = `${exif2}`
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await Christ.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            Christ.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            Christ.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await Christ.downloadAndSaveMediaMessage(encmedia)
            var a = `${exif1}`
            var b = `${exif2}`
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            Christ.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            Christ.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}stiker atau tag gambar yang sudah dikirim`)
            }
            break
    case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await Christ.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await Christ.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '---------------------------------------------------------------------\n|||         「 *YOUTUBE SEARCH* 」          |||'
    		ytresult += '\n---------------------------------------------------------------------\n'
   			aramas.all.map((video) => {
        	ytresult += '||• Title: ' + video.title + '\n'
            ytresult += '||• Link: ' + video.url + '\n'
            ytresult += '||• Durasi: ' + video.timestamp + '\n'
            ytresult += `||• Upload: ` + video.ago +` \n---------------------------------------------------------------------\n||| *${namabot}*\n---------------------------------------------------------------------\n`
    		});
    		ytresult += `◩ *${namabot}*`
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	case 'setfake':
	  if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
	  if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await Christ.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await Christ.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case 'emoji':
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
	case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `---------------------------------------------------------------------\n||   *Data Berhasil Didapatkan!*\n\n---------------------------------------------------------------------\n||• *Title* : ${title}\n*||• Ext* : MP3\n*Filesize* : ${filesizeF}\n||• *Link* : ${a.data}\n---------------------------------------------------------------------\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captions = `-----------------------------------------------------------------------------------------\n||                                    *YTMP3*                                    ||\n-----------------------------------------------------------------------------------------\n||• *Title* : ${title}\n||• *Ext* : MP3\n||• *Size* : ${filesizeF}\n------------------------------------------------------------------------------------------\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
    case 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            Christ.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
 	case 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
		Christ.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { audio} = result
            sendMediaURL(from,audio,'')
    		})
     		.catch(e => console.log(e))
     		break
    case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			Christ.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
    case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        reply(mess.wait)
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    Christ.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    Christ.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break
    case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*Link video_normal* : ${G.Normal_video}`)
            })
            break    
	case 'term':
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
    case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await Christ.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${g.HD}`
            sendMediaURL(from,ren,'DONE')
            break
    case 'runtime':
    case 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
	case 'speed':
	case 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `${teks}*Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			break  
    case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Christ.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Christ.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Christ.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Christ.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Christ.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Christ.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Christ.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Christ.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Christ.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Christ.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Christ.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Christ.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'tomp4':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await Christ.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
    case 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await Christ.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
    case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await Christ.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             Christ.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
//====================================================================\\
case 'infogempa':
  reply(mess.wait)
  anu = await fetchJson(`https://api-zeevalya.herokuapp.com/api/infogempa?apikey=${zeeapi}`,{method: 'get'})
  teks = ` [ *INFO GEMPA* ]\n\nWaktu : ${anu.result.Waktu}\nLintang : ${anu.result.Lintang}\nBujur : ${anu.result.Bujur}\nMagnitudo : ${anu.result.Magnitudo}\nKedalaman : ${anu.result.Kedalaman}\nWilayah : ${anu.result.Wilayah}\n\n_By : ${namabot}_`
  reply(teks)
  break
case 'coviddunia':
  reply(mess.wait)
  anu = await fetchJson(`https://api-zeevalya.herokuapp.com/api/covidworld?apikey=${zeeapi}`,{method: 'get'})
  teks = ` [ *INFO COVID DUNIA* ]\n\nTotal kasus : ${anu.result.totalCases}\nPulih : ${anu.result.recovered}\nMeninggal : ${anu.result.deaths}\nKasus aktif : ${anu.result.activeCases}\nKasus tertutup : ${anu.result.closedCases}\nInfo di update : ${anu.result.lastUpdate}\n\n_By : ${namabot}_`
  reply(teks)
  break
case 'kusonime':
  reply(mess.wait)
  if (!q) return fakegroup('Masukan judul anime nya!!')
  anu = await fetchJson(`https://api-zeevalya.herokuapp.com/api/anime/kusonime?search=${q}&apikey=${zeeapi}`,{method: 'get'})
  gambar = await getBuffer(anu.result.thumbs)
  teks = ` [ *KUSONIME* ]\n\nJudul : ${anu.result.title}\nJudul jepang : ${anu.result.title_jp}\nGenre : ${anu.result.genre}\nSeason : ${anu.result.season}\nProducer : ${anu.result.producer}\nTipe : ${anu.result.type}\nStatus : ${anu.result.status}\nTotal episode : ${anu.result.total_episode}\nRating : ${anu.result.score}\nDurasi : ${anu.result.duration}\nTanggal realese : ${anu.result.released_on}\nDeskripsi: ${anu.result.description}\n\n_By : ${namabot}_`
  Christ.sendMessage(from,gambar,image, {caption: `${teks}`,quoted: mek})
  break
case 'tebakgambar':
  anu = await fetchJson(`https://api-zeevalya.herokuapp.com/api/kuis/tebakgambar?apikey=${zeeapi}`,{method: 'get'})
  gambar = await getBuffer(anu.result.images)
  Zee = `Jawaban : ${anu.result.jawaban}`
  Christ.sendMessage(from,gambar,image,{caption: '30 detik untuk menjawab ', quoted: mek})
  await sleep(10000)
  reply('20 detik lagi')
  await sleep(10000)
  reply('10 detik lagi')
  await sleep(10000)
  reply(Zee)
  break
case 'caklontong':
  anu = await fetchJson(`https://api-zeevalya.herokuapp.com/api/kuis/caklontong?apikey=${zeeapi}`,{method: 'get'})
  soal= `Soal : ${anu.result.soal}`
  Zee2 = `${anu.result.deskripsi}`
  reply(soal)
  await sleep(10000)
  reply('20 detik lagi')
  await sleep(10000)
  reply('10 detik lagi')
  await sleep(10000)
  reply(`${Zee2}`)
  break
case 'getpp':
  reply(mess.wait)
  			if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
linkpp = await Christ.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
buffer = await getBuffer(linkpp)
Christ.sendMessage(from, buffer, image, {caption: "Nih", quoted: mek })
} else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
mberr = mek.message.extendedTextMessage.contextInfo.participant
linkpp = await Christ.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
buffer = await getBuffer(linkpp)
Christ.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
} else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
linkpp = await Christ.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
buffer = await getBuffer(linkpp)
Christ.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
break
case 'addsticker':  
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
			    	if (!isQuotedSticker) return reply('Reply stiker nya')
			     	svst = q
			    	if (!svst) return reply('Nama sticker nya apa?')
			    	boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			     	delb = await Christ.downloadMediaMessage(boij)
			       	setiker.push(`${svst}`)
			    	fs.writeFileSync(`./sticker/${svst}.webp`, delb)
			     	fs.writeFileSync('./database/sticker.js', JSON.stringify(sticker))
			    	Christ.sendMessage(from, `Sukses Menambahkan Sticker kedalam database\nSilahkan Cek dengan cara ${prefix}lists`, MessageType.text, { quoted: mek})
      				break
		        	case 'gets':  
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
		        	if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
		      		namastc = q
			     	result = fs.readFileSync(`./sticker/${namastc}.webp`)
			    	Christ.sendMessage(from, result, sticker)
			     	break
                    case 'lists':  
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
		     		teks = '[ *Sticker List* ]\n\n'
	    			for (let awokwkwk of setiker) {
			 		teks += `- ${awokwkwk}\n`
    				}
		      		teks += `\n*Total : ${setiker.length}*`
		      		Christ.sendMessage(from, teks.trim(), extendedText, {  quoted: mek})
		      		break
case 'listvn':  
	         		case 'vnlist': 
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
		     		teks = '*List Vn:*\n\n'
		     		for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${audionye.length}*`
		    		Christ.sendMessage(from, teks.trim(), extendedText, {  quoted: mek})
		    		break
case 'addvn': 
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
			    	if (!isQuotedAudio) return reply('Reply vnnya blokk!')
			    	svst = q
		    		if (!svst) return reply('Nama audionya apa su?')
			    	boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delb = await Christ.downloadMediaMessage(boij)
			    	audionye.push(`${svst}`)
			     	fs.writeFileSync(`./audio/${svst}.mp3`, delb)
			     	fs.writeFileSync('./database/audio.js', JSON.stringify(audionye))
			     	Christ.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek}) 
			      	break
		         	case 'getvn':  
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
			     	namastc = q
				    buffer = fs.readFileSync(`./audio/${namastc}.mp3`)
			    	Christ.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: mek})
			     	break
case 'addimg':  
  if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
		     		if (!isQuotedImage) return reply('Reply imagenya blokk!')
			    	svst = q
			    	if (!svst) return reply('Nama imagenya apa su?')
		     		boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	 	     		delb = await Christ.downloadMediaMessage(boij)
		     		imagenye.push(`${svst}`)
			    	fs.writeFileSync(`./image/${svst}.jpeg`, delb)
			    	fs.writeFileSync('./database/image.js', JSON.stringify(imagenye))
		      		Christ.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek})		     	 
		     		break
                    case 'getimg':  
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
	      			namastc = q
	      			buffer = fs.readFileSync(`./image/${namastc}.jpeg`)
    				Christ.sendMessage(from, buffer, image, {  quoted: mek})
	      			break
		        	case 'imglist':
		        	case 'listimg':
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
		    		teks = '*List Image :*\n\n'
		    		for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${imagenye.length}*`
			    	Christ.sendMessage(from, teks.trim(), extendedText, {  quoted: mek})
			    	break
case 'attp':
  reply(mess.wait)
                     if (args.length < 1) return reply('Kasih teks lah omm')
                     ini = q
                     atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(ini)}`)
                     Christ.sendMessage(from, atetepe, sticker, {quoted: mek})
                     break
case 'tagall':
  		     	if (!isGroup) return reply(mess.only.group)
  		     	if (!isGroupAdmins) return reply(mess.only.admin)
			   		members_id = []
		  			teks = (args.length > 1) ? q.trim() : ''
	  				teks += '\n\n'
				  	for (let mem of groupMembers) {
		 				teks += `*•* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
	  				}
			  		mentions(teks, members_id, true)
		  			break
case 'fakedata':
  reply(mess.wait)
  anu = await fetchJson(`https://api-zeevalya.herokuapp.com/api/fakedata?country=en&apikey=${zeeapi}`,{method: 'get'})
  teks = `[ *FAKE DATA* ]\n\nName : ${anu.result.name}\nBirthday : ${anu.result.birthday}\nAddress : ${anu.result.address}\nCity : ${anu.result.city}\nRegion : ${anu.result.region}\nCountry : ${anu.result.country}\nZip : ${anu.result.zip}\nPhone number : ${anu.result.phone_number}\nUsername : ${anu.result.username}\nPassword : ${anu.result.password}\nEmail : ${anu.result.email}\n\nBy : ${namabot}`
  reply(`${anu.result.message} memperoleh data`)
  await sleep(1000)
  fakestatus(teks)
  break
case 'meme':
  reply(mess.wait)
  anu = await fetchJson(`https://api-zeevalya.herokuapp.com/api/random/meme?apikey=${zeeapi}`,{method: 'get'})
  gambar = await getBuffer(anu.result.url)
  teks = `---------------------------------------------------------------------\n||                          [ *MEME* ]                        ||\n---------------------------------------------------------------------\n|| • Subreddit : ${anu.result.subreddit}\n|| • Title : ${anu.result.title}\n|| • Author : ${anu.result.author}\n---------------------------------------------------------------------\n\n*${namabot}*`
Christ.sendMessage(from,gambar,image, {caption: `${teks}`, quoted: mek})
break
case 'translate':
  reply(mess.wait)
  if (!q) return reply('Apa ajg yang mau di translate?')
  anu = await fetchJson(`https://api-zeevalya.herokuapp.com/api/translate?kata=${q}&apikey=${zeeapi}`)
teks = `[ *TRANSLATE* ]\n\nTeks kamu : ${q}\nHasil : ${anu.result.text}`
reply(teks)
break
case 'quotes':
  reply(mess.wait)
  anu = await fetchJson(`https://api-zeevalya.herokuapp.com/api/randomquote?apikey=${zeeapi}`)
  teks = `[ *QUOTES* ]\n\n${anu.result.quotes}\n\n_#${nameowner}_`
  fakestatus(teks)
  break
case 'admin':
case 'owner':
case 'creator':
      Christ.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
      Christ.sendMessage(from, `Tuh nomor ${nameowner} selaku ownerku`,MessageType.text, { quoted: mek} )
					break
case 'developer':
case 'dev':
      Christ.sendMessage(from, {displayname: "Jeff", vcard: developer}, MessageType.contact, { quoted: mek})
      Christ.sendMessage(from, `Tuh nomor Developer ${namabot}`,MessageType.text, { quoted: mek} )
					break
case 'randomwpp':
  reply(mess.wait)
  anu = await fetchJson(`https://api-zeevalya.herokuapp.com/api/random/wallpaper?apikey=${zeeapi}`,{method: 'GET'})
  zetz = await getBuffer(anu.result.url)
  Christ.sendMessage(from,zetz,image,{quoted: mek})
  break
case 'grup':
		case 'group':
		  if (!q) return reply(`Masukan parameter\n1 untuk membuka dan 0 untuk menutup\nContoh : ${prefix}grup 0`)
		  if (!isGroupAdmins) return reply(mess.only.admin)
					if (args[0] === '1') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						Christ.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === '0') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						Christ.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
case 'tutuptime':
  if (!isGroupAdmins) return reply(mess.only.admin)
              Christ.updatePresence(from, Presence.composing) 
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `Grup ditutup oleh admin *${pushname}*\nsekarang *hanya admin* yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					Christ.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
case 'lpr':
					const bug = q
					var nomor = mek.participant
					teks1 = `*[ _LAPORAN_ ]*\n\nPelapor : ${pushname}\nPesan : ${bug}\n\n${namabot}`
					var options = {
					text: teks1,
					contextInfo: {mentionedJid: [nomor]},
					}
					Christ.sendMessage(`${owner}@s.whatsapp.net`, options, text, {quoted: mek})
					reply(`Masalah telah di laporkan ke owner _*${namabot}*_ Laporan palsu atau main² tidak akan ditanggapi.`)
					break
case 'linkgc':
  			if (!isGroup) return reply(mess.only.group)
				linkgc = await Christ.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				Christ.sendMessage(from, yeh, text, {quoted: mek})
				break
case 'promote':
if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag your target')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Selamat🥳 anda naik menjadi admin grub (+_+) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						Christ.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`selamat🥳 @${mentioned[0].split('@')[0]} anda naik menjadi admin grub (+_+)`, mentioned, true)
						Christ.groupMakeAdmin(from, mentioned)
					}
					break
 	case 'demote':
 	  if (!isGroupAdmins) return reply(mess.only.admin)
 	  if (!isGroup) return reply(mess.only.group)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag your target')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Status adminmu dicopot. Makanya jan jadi sider🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						Christ.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Yah @${mentioned[0].split('@')[0]} Jabatan adminmu di copot, Makanya jan jadi sider🏃`, mentioned, true)
						Christ.groupDemoteAdmin(from, mentioned)
					}
					break
case 'listadmin':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
case 'setppgrup': 
  			if (!isGroup) return reply(mess.only.group)
  			if (!isGroupAdmins) return reply(mess.only.admin)
  			reply(`Oke kak ${pushname} tunggu sekitar 1 menit`)
  Zee = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
  media = await Christ.downloadAndSaveMediaMessage(Zee)
          await Christ.updateProfilePicture (from, media)
                reply('[SUKSES]\nMengganti icon grub')
                break
 case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Nomornya mana?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara kak!!')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						Christ.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
 case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Christ.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						Christ.groupRemove(from, mentioned)
					}
					break
 case 'film':
				if (args.length < 1) return reply('Mau Cari Film Apa?')
				reply(mess.wait)
				anu = await fetchJson(`http://www.omdbapi.com/?s=${q}&plot=full&apikey=56b1b6f0&r=json`, {method: 'get'})
				hasil = '=========================\n'
				for(let film of anu.Search) {
				hasil += `• *Title:* ${film.Title}\n• *Rilis Tahun:* ${film.Year}\n• *Type:* ${film.Type}\n• *Link:* https://m.imdb.com/title/${film.imdbID}\n=========================\n`
				}
				reply(hasil.trim())
					break 
 case 'artinama':
		reply(mess.wait)
					if (args.length < 1) return reply('Apa yang mau dicari gan?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${q}`, {method: 'get'})
					Christ.sendMessage(from, anu.result, text, {quoted: mek})
					break 
 case 'map':
   if (!q) return reply('Masukan nama daerah!!')
			    reply(mess.wait)
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${q}`, {method: 'get'})
                buffer = await getBuffer(anu.gambar)
                Christ.sendMessage(from, buffer, image, {quoted: mek, caption: `${q}`})
				break 
 case 'kbbi':
			    reply(mess.wait)
					if (args.length < 1) return reply('Apa yang mau dicari gan?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${q}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					break
case 'google':
        reply(mess.wait)
                const googleQuery = q
                if(googleQuery == undefined || googleQuery == ' ') return reply(`*Hasil Pencarian : ${googleQuery}* tidak ditemukan`)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Hasil Pencarian : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n═════════════════\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    reply(vars)
                }).catch(e => {
                    console.log(e)
                    Christ.sendMessage(from, 'Google Error : ' + e);
                })
                break 
case 'quoteskanye':
  anu = await fetchJson(`https://api-zeevalya.herokuapp.com/api/quotes/kanye?apikey=${zeeapi}`)
  teks = `[ *QUOTES KANYE* ]\n\n*${anu.result.text_en}*\n---------------------------------\n_${anu.result.text_id}_\n\n_*By : ${anu.result.author}*_`
  fakestatus(teks)
  break
 case 'chordlagu':
   if (!q) return reply('masukan judul lagu !!!')
   anu = await fetchJson(`https://api-zeevalya.herokuapp.com/api/chordlagu?lagu=${q}&apikey=${zeeapi}`)
   fakestatus(anu.result.result)
   break
case 'covidindo':
const get = require('got')
    const body = await get.post('https://api.kawalcorona.com/indonesia', {
    }).json();
    var positif = (body[0]['positif']);
    var sembuh  = (body[0]['sembuh']);
    var meninggal = (body[0]['meninggal']);
    var dirawat = (body[0]['dirawat']);
    console.log(body[0]['name'])
    Christ.sendMessage(from,`[ *COVID INDO* ]\n\n*Positif* : ${positif} Kasus\n*Sembuh* : ${sembuh} Kasus\n*Meninggal* : ${meninggal} Kasus\n*Dirawat* : ${dirawat} Kasus\n\n*Stay safe dan selalu gunakan masker saat berpergian*`, MessageType.text, { quoted: mek } );
break
 case 'tts':
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 1) return Christ.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = q
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							Christ.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
           case 'nulis':{
           if (args.length < 2) return reply(`Kirim perintah *${prefix}nulis* teks`)
           reply(mess.wait)
           anu = await getBuffer(`https://api.zeks.xyz/api/nulis?apikey=apivinz&text=${q}`)
            Christ.sendMessage(from, anu, image, {quoted:mek})
          .catch(() => reply(mess.error.api))
                }
                break
         case 'jadian':
					if (!isGroup)return reply(mess.OnlyGrup)
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					let vejs = `Ciee.. yang lagi jadian\n*@${aku.jid.split('@')[0]}* ♥️ @${cintax.jid.split('@')[0]}\nSemoga Langgeng Hii`
					mentions(vejs, [aku.jid, cintax.jid], true)
					break
case 'sourcecode':
case 'sc':
case 'src':
     fakegroup(`Bot ini menggunakan sc : https://github.com/Zeetoyah002/Takio-Botz`)
     break
case 'slot':
            const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : ?? : 🍊',
		'?? : 🍒 : 🍐',
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
		'🍒 : ?? : 🍒',
		'🍌 : 🍌 : 🍌',
		'🍇 : ?? : 🍇'
		]
                somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                if (somtoyy  == '🍌 : 🍌 : 🍌') {
	     	    reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <===\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
	     	    } else if (somtoyy == '🍒 : 🍒 : 🍒') {
	     	    reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <===\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
	     	    } else if (somtoyy == '🔔 : 🔔 : 🔔') {
	     	    reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <===\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
	     	    } else if (somtoyy == '🍐 : 🍐 : 🍐') {
	     	    reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <===\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
	     	    } else if (somtoyy == '🍇 : 🍇 : 🍇') {
	     	    reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <===\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
	     	    } else {
	     	    reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <===\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
	     	    }
	        break
              case 'suit':
                if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)

                const userspilih = q
                if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
                var computer = Math.random();
                if (computer < 0.34 ) {
                    computer = 'batu';
                } else if( computer >= 0.34 && computer < 0.67) {
                    computer = 'gunting';
                } else {
                    computer = 'kertas';
                }
                if ( userspilih == computer ) {
                    reply(`Pertandingan Seri!`)
                } else if ( userspilih == 'batu' ) {
                    if( computer == 'gunting' ) {
                        // hasil = 'MENANG';
                        reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
                    } else {
                        reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
                    }
                } else if ( userspilih == 'gunting' ) {
                    if( computer == 'batu' ) {
                        // hasil = 'MENANG';
                        reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
                    } else {
                        reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
                    }
                } else if ( userspilih == 'kertas' ) {
                    if( computer == 'batu' ) {
                        // hasil = 'MENANG';
                        reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
                    } else {
                        reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
                    }
                    }
            break
case 'online':
										  case 'listonline':
										  
                if (!isGroup) return reply(`Only group`)
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(Christ.chats.get(ido).presences), Christ.user.jid]
                Christ.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: mek,
                    contextInfo: { mentionedJid: online }
                })
                break
case 'wikipedia':
  if (!q) return reply('Apa yang mau di cari??')
  anu = await fetchJson(`https://api-zeevalya.herokuapp.com/api/wikipedia?search=${q}&apikey=${zeeapi}`,{method: 'GET'})
  teks = `[ *WIKIPEDIA* ]\n\n_*Menurut wikipedia :*_\n${anu.result.result}`
  reply(teks)
  break
case 'kodenuklir':
nase = await getBuffer('https://telegra.ph/file/333de66fc980c2891bae7.png')
teks = `[ _*code nuklir*_ ]
•𝙽𝙰𝙼𝙸 𝙲𝙷𝙰𝙽 
~310024
~305080
•𝙸𝙲𝙷𝙸𝙺𝙰 𝙲𝙷𝙰𝙽
~ 305062
~ 273182
𝙽𝙸𝙽𝙾 𝙲𝙷𝙰𝙽
~305216 
~302152
𝙼𝙸𝙺𝚄 𝙲𝙷𝙰𝙽 
~311007 
~306088
𝚈𝙾𝚃𝚂𝚄𝙱𝙰 𝙲𝙷𝙰𝙽
~ 281722
𝙸𝚃𝚂𝚄𝙺𝙸 𝙲𝙷𝙰𝙽 
~298064 
~264779
•𝙴𝚁𝙸𝙽𝙰 𝙲𝙷𝙰𝙽
~183270
~172228
~190509
•𝙰𝙻𝙸𝙲𝙴 𝙲𝙷𝙰𝙽
~180663
~203497
~237556
•𝙼𝙴𝙶𝚄𝙼𝙸 𝙲𝙷𝙰𝙽
~117327
~147676
~166412
•𝙰𝚀𝚄𝙰 𝙲𝙷𝙰𝙽
~173911
~218917
~195287
~316277
~306950
~323026
•𝚄𝚉𝙰𝙺𝙸 𝙲𝙷𝙰𝙽
~297346
~276023
~304002
•𝙰𝚂𝚄𝙽𝙰 𝙲𝙷𝙰𝙽
~319893
~316198
~322874
•𝙷𝙸𝙽𝙰𝚃𝙰 𝙲𝙷𝙰𝙽
~316242
~318326
~306672
~310481
•𝚁𝙴𝙼 𝙲𝙷𝙰𝙽
~314259
~312354
~300508
~288873
~189632
~289276
~178283
•𝙼𝙸𝚃𝚂𝚄𝙷𝙰 𝙲𝙷𝙰𝙽
~256038
~185333
~191532
~186151
•𝚂𝙰𝙶𝙸𝚁𝙸 𝙲𝙷𝙰𝙽
~240912
~239436
~193941
•𝙽𝙴𝚉𝚄𝙺𝙾 𝙲𝙷𝙰𝙽
~319115
~306954
~283001
•𝙺𝙰𝙽𝚁𝙾𝙹𝙸 𝙲𝙷𝙰𝙽
~310502
~321881
~303578
•𝙵𝚄𝙹𝙸𝚆𝙰𝚁𝙰 𝙲𝙷𝙸𝙺𝙰 𝙲𝙷𝙰𝙽
~276478
~267858
~270370
~278513
•𝙺𝙰𝙶𝚄𝚈𝙰 𝚂𝙷𝙸𝙽𝙾𝙼𝙸𝚈𝙰 𝙲𝙷𝙰𝙽
~270251
~267979
~265175
•𝚂𝙸𝙻𝙴𝙽𝚃 𝚅𝙾𝙸𝙲𝙴(𝚂𝙷𝙸𝙽𝙾𝙼𝙸𝚈𝙰)
~215660 
•𝚉𝙴𝚁𝙾 𝚃𝚆𝙾 
~260606
~308637
•𝙷𝚒𝚗𝚊𝚝𝚊 𝙲𝚑𝚊𝚗
~310481
~304204
~304212
•𝚂𝚊𝚔𝚞𝚛𝚊 𝙲𝚑𝚊𝚗
~306443
~309406
~308515
•𝚃𝚘𝚜𝚊𝚔𝚊 𝙲𝚑𝚊𝚗
~320669
~314130
•𝚆𝚒𝚣𝚣[𝙺𝚘𝚗𝚘𝚜𝚞𝚋𝚊]
~301377
~293855
•𝚈𝚞𝚗𝚗𝚊 𝙲𝚑𝚊𝚗
~317969
~272578
•𝙺𝚑𝚞𝚜𝚒𝚗𝚊 𝙲𝚑𝚊𝚗
~318537
~265876`
 Christ.sendMessage(from,nase,image,{caption: teks,quoted:mek})
 break















//====================================================================\\
default:
if (budy.includes(`@${owner}`)) {
                  fakestatus(`Ada apa tag owner saya?`)
                  }
if (budy.includes(`Botq`)) {
  reply(`Hai ${pushname}\nAku di sini !!`)
}
/*if (budy.includes(`Bot`)) {
  buff = fs.readFileSync('./audio/Bot.mp3')
  Christ.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
}
if (budy.includes(`Baka`)) {
  buff = fs.readFileSync('./audio/Baka.mp3')
  Christ.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
}
if (budy.includes(`${prefix}${command}`)){
  reply('Command tidak ada di database')
}*/
//====================================================================\\
if (budy.startsWith('x')){
try {
return Christ.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color(`[ ${nameowner} ]`, 'yellow'), `Copy right ©2021 Zeevalya`, color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
