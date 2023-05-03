import dotenv from 'dotenv';
import { Input, Telegraf } from 'telegraf';
import { execSync } from 'child_process';

dotenv.config();

if(!process.env.BOT_TOKEN) {
    throw new Error('Bot token not set');
}

const allowedClients = (process.env.ALLOWED_CLIENTS || '').split(',').map(id => Number.parseInt(id.trim(), 10));

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('new', (ctx) => {
    if(!allowedClients.includes(ctx.update.message.from.id)) {
        ctx.reply('Forbidden');
        return;
    }

    const vpnClientName = ctx.update.message.text.split(' ')[1] || '';

    if(!/^\w+$/.test(vpnClientName)) {
        ctx.reply('Wrong vpn client name');
        return;
    }

    execSync(`sudo bash wireguard.sh <<ANSWERS\n1\n${vpnClientName}\n1\nANSWERS`);
    
    ctx.replyWithDocument(Input.fromLocalFile(`/root/${vpnClientName}.conf`))
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));