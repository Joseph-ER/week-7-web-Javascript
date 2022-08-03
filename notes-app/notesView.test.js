/**
 * @jest-environment jsdom
 */


const fs = require('fs');
const { isTypedArray } = require('util/types');
const NotesView = require('./notesView');
const notesModel = require('./notesModel');
const notesApi = require('./notesApi');
require('jest-fetch-mock').enableMocks()

describe('notesView',() => {
  beforeEach(()=> {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displayNotes function lists all notes each ina  new div tag',() => {
    const model = new notesModel();
    const view = new NotesView(model);
    model.addItem('Item 1');
    model.addItem('Item 2');
    view.displayNotes();
    expect(document.body.querySelectorAll('div.note').length).toEqual(2);
  });

  it('button returns new note of whatever was input into text box',() => {
    const model = new notesModel();
    const view = new NotesView(model);

    const noteTextEl = document.querySelector('#note-text');
    noteTextEl.value ='This is a new note test';
    
    const buttonEl = document.querySelector('#note-button');
    buttonEl.click();
    expect(document.querySelectorAll('div.note').length).toEqual(1);
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

    it('calls displayNotesFromApi() and returns ...',() => {
      const NotesApi = new notesApi();
      const model = new notesModel();
      const view = new NotesView(model, NotesApi);

      fetch.mockResponseOnce(JSON.stringify({
        title: { title1: 'a', title2: 'b' }
      }));
      view.displayNotesFromApi();
      
      // expect(document.body.querySelectorAll('div.note').length).toEqual(1);
      NotesApi.loadNotes((note) => {
        expect(note.title).toBe("Some value");
      });
    });
})