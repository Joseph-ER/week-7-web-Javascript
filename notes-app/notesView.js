const notesModel = require("./notesModel");

class NotesView {
  constructor(model, api){
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');

    document.querySelector('#note-button').addEventListener('click',() =>{
      const newNote = document.querySelector('#note-text').value;
      this.addNote(newNote);
    });
  }

  displayNotes(){
    document.querySelectorAll('.note').forEach(element =>{
      element.remove();
    });
    
      const notes = this.model.getNotes();
      // const noteEl = document.createElement('div');
      // noteEl.innerText = notes;
      // noteEl.className = 'note';
      // this.mainContainerEl.append(noteEl);

    notes.forEach (note => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }

  addNote(newNote){
    this.model.addItem(newNote);
    this.displayNotes();
    document.querySelector('#note-text').value = null;
  }

  displayNotesFromApi(){
    this.api.loadNotes(notes => {
      this.model.setNotes(notes);
      this.displayNotes();
    });
    console.log('Function has run');
  }

}

module.exports = NotesView;