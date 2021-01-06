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
  console.log('VidMXApp', name, state);
  return JSON.stringify({source: 'VidMXApp', [name]: state});
};

export const sendUDP = (message, socket) => {
  socket.setBroadcast(true);

  socket.send(message, undefined, undefined, 5001, '192.168.1.255', function (
    err,
  ) {
    if (err) throw err;

    console.log('Message sent!');
  });
};
