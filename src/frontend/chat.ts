const socket = (window as any).io();

interface ChatMessage {
    message: string;
}

class Chat {
    static io: any;
    constructor(private callback: Function) {
        Chat.io.on('messageFromServer', this.callback);
    };

    emmitMessage(message: string) {
        Chat.io.emit('message', message);
    }
};

Chat.io = socket;

function messageReceived(response: ChatMessage) {
    let parent: HTMLElement = (document.querySelector('#messages') as HTMLElement);

    let child: HTMLElement = document.createElement('li');
    child.innerHTML = response.message;
    parent.appendChild(child);
}

let chat: Chat = new Chat(messageReceived);


const query: HTMLElement = (document.querySelector('#form') as HTMLElement);
query.addEventListener('submit', (event) => {
    event.preventDefault();
    const message: string = (document.querySelector('#message') as HTMLInputElement).value;

    chat.emmitMessage(message);
    return false;
});
