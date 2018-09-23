"use strict";
const socket = window.io();
class Chat {
    constructor(callback) {
        this.callback = callback;
        Chat.io.on('messageFromServer', this.callback);
    }
    ;
    emmitMessage(message) {
        Chat.io.emit('message', message);
    }
}
;
Chat.io = socket;
function messageReceived(response) {
    let parent = document.querySelector('#messages');
    let child = document.createElement('li');
    child.innerHTML = response.message;
    parent.appendChild(child);
}
let chat = new Chat(messageReceived);
const query = document.querySelector('#form');
query.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.querySelector('#message').value;
    chat.emmitMessage(message);
    return false;
});
