const { KEYBINDS } = require("./constants");

// setup interface to handle user input from stdin
let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  connection = conn;
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else {
    connection.write(KEYBINDS[key]);
  }
};

module.exports = {
  setupInput
};
