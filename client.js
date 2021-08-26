const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: '50542'
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Server successfully connected.');
    conn.write('Name: DAN');
  })

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('end', () => {
    console.log('Server disconnected.');
  })

  return conn;
};

module.exports = {
  connect
};