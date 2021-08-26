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
  })

  const hopeThisWorks1 = function() {
      const moves = ['Move: up', 'Move: left', 'Move: right', 'Move: down']
      const name = ['BU‎', 'B G', ' UG']
      const randMove = Math.floor(Math.random() * 4);
      const randName = Math.floor(Math.random() * 3);
      conn.write(`Name: ${name[randName]}`);
      conn.write(moves[randMove]);
  };

  setInterval(() => {
    hopeThisWorks1();
  }, 500);
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('end', () => {
    console.log('Server disconnected.');
    connect();
  })

  return conn;
};

module.exports = {
  connect
};