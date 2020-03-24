const express = require('express')
const app = express()

app.set("view engine", "html")



app.get('/', (req,res) => {
  res.render('index')
})


const server = app.listen(5500, () => {
  console.log("Serveur is listening on port 5500")
})

const io = require('socket.io')(server)

io.on('connection', (socket) => {
  console.log("utilisateur connecté")
  socket.username = "Inconnu"

  socket.on('new_message', data => {
    io.sockets.emit('new_message', {message:data.message,username:socket.username});
    socket.on('change_username', data => {
      socket.username = data.username;
    });
    socket.on('typing', data => {
      socket.broadcast.emit('typing',{username:socket.username});
    })
  });
})