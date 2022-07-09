import { EventsClient, Config, Utils } from 'kubemq-js';

async function main() {
  const opts: Config = {
    address: 'localhost:50000',
    clientId: Utils.uuid(),
  };
  const eventsClient = new EventsClient(opts);
  await eventsClient
    .subscribe(
      {
        channel: 'events.loadbalance',
        group: 'g1',
        clientId: 'SubscriberA',
      },
      (err, msg) => {
        if (err) {
          console.error('SubscriberA', err);
          return;
        }
        if (msg) {
          console.log('SubscriberA', msg);
        }
      },
    )
    .catch((reason) => {
      console.log(reason);
    });

  await eventsClient
    .subscribe(
      {
        channel: 'events.loadbalance',
        group: 'g1',
        clientId: 'SubscriberB',
      },
      (err, msg) => {
        if (err) {
          console.error('SubscriberB', err);
          return;
        }
        if (msg) {
          console.log('SubscriberB', msg);
        }
      },
    )
    .catch((reason) => {
      console.log(reason);
    });

    await eventsClient
    .subscribe(
      {
        channel: 'events.loadbalance',
        group: 'g2',
        clientId: 'SubscriberC',
      },
      (err, msg) => {
        if (err) {
          console.error('SubscriberC', err);
          return;
        }
        if (msg) {
          console.log('SubscriberC', msg);
        }
      },
    )
    .catch((reason) => {
      console.log(reason);
    });

    await eventsClient
    .subscribe(
      {
        channel: 'events.*',
        group: 'g3',
        clientId: 'SubscriberD',
      },
      (err, msg) => {
        if (err) {
          console.error('SubscriberD', err);
          return;
        }
        if (msg) {
          console.log('SubscriberD', msg);
        }
      },
    )
    .catch((reason) => {
      console.log(reason);
    });
}
main();