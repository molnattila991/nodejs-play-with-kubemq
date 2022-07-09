import { EventsClient, Config, Utils } from 'kubemq-js';

const subChannel = process.argv[2] ? process.argv[2] : "loadbalance";

async function main() {
    const opts: Config = {
        address: 'localhost:50000',
        clientId: Utils.uuid(),
    };
    const eventsClient = new EventsClient(opts);
    for (let i = 0; i < 1; i++) {
        await eventsClient.send({
            channel: `events.${subChannel}`,
            body: Utils.stringToBytes('event message'),
        });
    }
}
main();