import { ActivityType } from "discord.js";
export default {
    name: "ready",
    execute(client: any) {
        console.log("The client is ready :)");
        client.user.setActivity("For song requests", { type: ActivityType.Watching });
    },
};
