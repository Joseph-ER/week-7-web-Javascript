/**
 * @jest-environment jsdom
 */


const fs = require('fs');
const { isTypedArray } = require('util/types');
const NotesView = require('./notesView');
const notesModel = require('./notesModel');
const notesApi = require('./notesApi');
const NotesApi = require('./notesApi');
const { doesNotMatch } = require('assert');
require('jest-fetch-mock').enableMocks();


describe('notesView',() => {
  beforeEach(()=> {
    document.body.innerHTML = fs.readFileSync('./index.html');
    fetch.resetMocks()
  });

  it('displayNotes function lists all notes each ina  new div tag',() => {
    const model = new notesModel();
    const view = new NotesView(model);
    model.addItem('Item 1');
    model.addItem('Item 2');
    view.displayNotes();
    expect(document.body.querySelectorAll('div.note').length).toEqual(2);
  });

  it('button returns new note of whatever was input into text box',(done) => {
    const model = new notesModel();
    const api = new NotesApi();
    const view = new NotesView(model,api);

    fetch.mockResponse(JSON.stringify(['Note from test']));

    api.createNote('This note is added through fetch!',()=>{
      console.log(fetch.mock.calls);
      expect(fetch.mock.calls.length).toEqual(1);
      done();
    });
    // const noteTextEl = document.querySelector('#note-text');
    // noteTextEl.value ='This is a new note test';
    
    // const buttonEl = document.querySelector('#note-button');
    // buttonEl.click();
    // expect(document.querySelectorAll('div.note').length).toEqual(1);
    });

    it('calls displayNotes twice and both equal the same',() => {

      const model = new notesModel();
      const view = new NotesView(model);
      model.addItem('one');
      model.addItem('two');
    
      view.displayNotes();
      view.displayNotes();
    
      expect(document.querySelectorAll('div.note').length).toEqual(2);
    });

    it('calls displayNotesFromApi() and returns ...', (done) => {
      const NotesApi = new notesApi();
      const model = new notesModel();
      expect(document.body.querySelectorAll('div.note').length).toEqual(0);
      fetch.mockResponseOnce(JSON.stringify([{content: 'This note'}]));

      const view = new NotesView(model, NotesApi);
      // console.log('Fetch response:',test);
      view.displayNotesFromApi(()=> {
        expect(document.body.querySelectorAll('div.note').length).toEqual(1);
        done();
      });
    });

})