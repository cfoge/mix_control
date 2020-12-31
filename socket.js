import dgram from 'react-native-udp';

function randomPort() {
  return (Math.random() * 60536) | (0 + 5000); // 60536-65536
}

export const initSocket = () => {
  const socket = dgram.createSocket({
    type: 'udp4',
    debug: true,
  });
  socket.bind(randomPort());

  return socket;
};

export const constructUDPMessage = (name, state) => {
  console.log('entered constructor function');
  return JSON.stringify({[name]: state});
};

export const sendUDP = (message, socket) => {
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
