import dgram from 'react-native-udp';

function randomPort() {
  return (Math.random() * 60536) | (0 + 5000); // 60536-65536
}

const initSocket = () => {
  const socket = dgram.createSocket({
    type: 'udp4',
    debug: true,
  });
  socket.bind(randomPort());
  

  return socket;
};

export default initSocket;
