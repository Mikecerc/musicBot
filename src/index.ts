import env from "dotenv";
import { Client, Collection } from "discord.js";
//setup dotenv
env.config();
//connect to mongoose db
//initiate discordjs client
const client: any = new Client({ intents: 32767 });
client.subscriptions = new Map();
client.commands = new Collection();
client.reactionRoles = {};
export default client;
//run each handler file
["Events.js", "Commands.js"].forEach((handler) => {
    import(`./Handlers/${handler}`).then((file) => file.default(client));
});
//loging client
client.login(process.env.token);
