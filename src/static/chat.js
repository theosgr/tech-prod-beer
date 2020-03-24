$(document).ready(function (){
    var socket = io.connect('http://localhost:5500')

    var username = $('#username');

    var change_username = $('#change_username');

    var feedback = $('#feedback');

    var message = $('#message');

    var change_message = $('#change_message');

    change_message.click(function() {
        socket.emit('new_message', {message:message.val()})
    })

    socket.on('new_message', (data) =>  {
        feedback.append('');
        message.val('');

        feedback.html ('<p>' + data.username + " : " + data.message + '</p>');
    })

    change_username.click(function() {
        socket.emit('change_username', {username:username.val()})
    })

    message.bind('keypress', () => {
        socket.emit('typing');
    })

    socket.on('typing', (data) => {
        feedback.html('<p><i>' + data.username + "est en train d'écrire" + '</i></p>');
    })


    //manque le fait de pouvoir afficher la phrase "Inconnu est en train d'écrire" il faut que meme sans username perso on puisse l'afficher
    //sinon le fait de pouvoir ajouter en dessus les messages dans le chat

}) 