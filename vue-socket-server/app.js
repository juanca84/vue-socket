const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/',(req, res) => {
  res.send('socket.io...');
})

io.on('connection', (socket) => {
  console.log('Nuevo socket conectado')
  socket.on('increment', (counter) => {
    console.log('Incrementar');
    console.log(counter);
    io.sockets.emit('COUNTER_INCREMENT', counter + 1);
  });

  socket.on('decrement', (counter) => {
    console.log('Decrementar');
    console.log(counter);
    io.sockets.emit('COUNTER_INCREMENT', counter - 1);
  });
})

http.listen(5000, () => {
  console.log('Listening on *:5000');
});

module.exports = app;
