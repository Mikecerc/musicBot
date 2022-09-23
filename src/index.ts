import env from "dotenv";
import { Client, Collection } from "discord.js";
import { readdirSync } from "fs";
//setup dotenv
env.config();
//initiate discordjs client
const client: any = new Client({ intents: 32767 });
client.subscriptions = new Map();
client.commands = new Collection();
client.reactionRoles = {};
export default client;
//run each handler file
readdirSync('./dist/handlers').forEach((handler) => {
    import(`./handlers/${handler}`).then((file) => file.default(client));
});
//loging client
client.login(process.env.token);
