https://docs.kubemq.io/development/sdk

#Install
- docker run -d -p 8080:8080 -p 50000:50000 -p 9090:9090 kubemq/kubemq-community:latest
- npm install
- npm install -g typescript

#Build
- tsc ./src/index.ts
- tsc ./src/producer.ts
- tsc ./src/consumer.ts

#Run with one group of consumers
- node ./src/index.js

#Run with groups of consumers
- node ./src/consumer.js (subchannel)
- node ./src/producer.js
