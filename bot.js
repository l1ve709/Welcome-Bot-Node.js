const { Client, GatewayIntentBits, VoiceConnectionStatus, createAudioPlayer, createAudioResource, joinVoiceChannel } = require('discord.js');
const { token1, token2, token3 } = require('./config.json'); // config.json dosyasındaki tokenleri kendi tokeninle degis
const path = require('path');
const { promisify } = require('util');
const fs = require('fs');
const existsAsync = promisify(fs.exists);

const sesYolu = "/home/container/merhabaoyuncu.mp3";  // DOSYA YOLUNU DEĞİŞTİR
const ytRolü = '1247644798782017576';  // ROL ID Sİ

async function createBot(token, voiceChannelId) {
    const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildMembers] });

    client.once('ready', async () => {
        console.log(`${client.user.tag} aktif`);

        const guild = client.guilds.cache.first();
        const voiceChannel = guild.channels.cache.get(voiceChannelId);

        if (voiceChannel) {
            await connectToVoiceChannel(client, voiceChannel);
        }
    });

    async function connectToVoiceChannel(client, voiceChannel) {
        const connection = joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: voiceChannel.guild.id,
            adapterCreator: voiceChannel.guild.voiceAdapterCreator,
        });

        connection.on(VoiceConnectionStatus.Ready, () => {
            console.log(`${client.user.tag} ${voiceChannel.name} kanalına bağlandı`);
        });

        connection.on(VoiceConnectionStatus.Disconnected, async (oldState, newState) => {
            if (newState === VoiceConnectionStatus.Disconnected) {
                try {
                    await connection.reconnect();
                } catch (error) {
                    console.log('Bağlantı yeniden sağlanamadı:', error);
                }
            }
        });
    }

    client.on('voiceStateUpdate', async (oldState, newState) => {
        const member = newState.member;
        const voiceChannel = newState.channel;

        if (voiceChannel) {
            const role = member.guild.roles.cache.get(ytRolü);
            if (role && member.roles.cache.has(ytRolü)) {
                const connection = getVoiceConnection(member.guild.id);
                if (connection && connection.state.status === VoiceConnectionStatus.Ready) {
                    const audioPlayer = createAudioPlayer();
                    connection.subscribe(audioPlayer);

                    if (await existsAsync(sesYolu)) {
                        const audioResource = createAudioResource(sesYolu, {
                            inlineVolume: true,
                        });
                        audioPlayer.play(audioResource);
                        console.log(`${sesYolu} dosyası çalınıyor!`);
                    } else {
                        console.log(`Hata: ${sesYolu} dosyası bulunamadı`);
                    }
                }
            }
        }
    });

    client.login(token);
}

async function main() {
    const botTokens = [
        token1,
        token2,
        token3
    ];

    const voiceChannelIds = [
        '1254503055517552751',  // VC CHANNEL 1 
        '1254503143618772992',  // VC CHANNEL 2
        '1254503169904611348'   // VC CHANNEL 3
    ];

    for (let i = 0; i < botTokens.length; i++) {
        createBot(botTokens[i], voiceChannelIds[i]);
    }
}

main();
