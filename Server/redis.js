const { createClient } = require('redis');


const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

await client.set('Car', 'Lambo');
const value = await client.get('Car');
await client.quit()
