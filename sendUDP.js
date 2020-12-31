const sendUDP = (message, socket) => {
  socket.setBroadcast(true);
  console.log('sendUDP called');

  console.log('mysock onece called');
  socket.send(message, undefined, undefined, 5001, '192.168.1.255', function (
    err,
  ) {
    if (err) throw err;

    console.log('Message sent!');
  });
};

export default sendUDP;
