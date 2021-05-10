let _socket = null;
module.exports = {
  setNotifierSocket(socket) {
    _socket = socket;
  },
  sendNotification(message) {
    _socket.emit("notifications", message);
  },
};
