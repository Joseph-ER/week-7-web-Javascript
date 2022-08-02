/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button and displays the message from the user input', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input');
    inputEl.value = 'This is a test';
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message-input')).toEqual('This is a test');
  });
  // it('clicks the buttona then clicks hide button', () => {
  //   document.body.innerHTML = fs.readFileSync('./index.html');

  //   const view = new MessageView();

  //   const buttonEl = document.querySelector('#show-message-button');
  //   const hideButtonEl = document.querySelector('#hide-message-button');
  //   buttonEl.click();
  //   hideButtonEl.click();
  //   expect(document.querySelector('#message')).toBeNull();
    
  // });
});