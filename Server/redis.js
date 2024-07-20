import {redis} from "redis"
const client = redis.createClient();

client.on('connect', function() {
    console.log('Connected!');
  });   

  client.set('Name', 'Ajay'); 

  client.get('framework', function(err, reply) {
    console.log(reply); // ReactJS
  });
