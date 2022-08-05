const notesModel = require("./notesModel");

class NotesView {
  constructor(model, api){
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
    // const myButton = document.querySelector('#note-button');
    console.log('document issue: ',document.querySelector('#note-button'));
    document.querySelector('#note-button').addEventListener('click',() =>{
      // const newNote = document.querySelector('#note-text').value;
      // this.addNote(newNote);
      const note = document.querySelector('#note-text').value
      this.api.createNote(note);

    });
  }

  displayNotes(){
    document.querySelectorAll('.note').forEach(element =>{
      element.remove();
    });
    
      const notes = this.model.getNotes();
      console.log(notes);

    notes.forEach (note => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    });
  }

  addNote(newNote){
    this.model.addItem(newNote);
    this.displayNotes();
    document.querySelector('#note-text').value = null;
  }

  displayNotesFromApi(callback){
    this.api.loadNotes(notes => {
      this.model.setNotes(notes);
      this.displayNotes();
      callback();
    });
  }

}

module.exports = NotesView;