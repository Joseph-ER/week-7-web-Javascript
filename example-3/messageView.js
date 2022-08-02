class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.mainCOntainerEl = document.querySelector('#main-container');
    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl = document.querySelector('#hide-message-button');
    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    const message = document.querySelector('#message-input').value;
    const messageElement = document.createElement('div');
    messageElement.id ='message';
    messageElement.innerText = message;
    console.log(message);

    document.querySelector('#main-container').append(messageElement);
  }

  hideMessage() {
    document.querySelector('#message').remove();
    console.clear();
  }
}

module.exports = MessageView;