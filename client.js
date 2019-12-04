
const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.2.204',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('connect', () => {
    console.log('Sucessfully connected to game server');
    conn.write('Name: MEH', (data) => {
    });
/*
    setInterval(() => {
      conn.write("Move: up", (data) => {});
    }  , 300);
    */
    





  });
  return conn;
};

const connecting = {
  connect
}

module.exports = connecting;