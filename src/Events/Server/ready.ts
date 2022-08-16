import { ActivityType } from "discord.js";
export default {
    name: "ready",
    execute(client: any) {
        console.log("The client is ready :)");
        client.user.setActivity("for song requests", { type: ActivityType.Watching });
    },
};
