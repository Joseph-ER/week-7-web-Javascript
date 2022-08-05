class notesModel {
  constructor() {
    this.notes = [];
  }
  getNotes() {
    return this.notes;
  }
  addItem(note) {
    this.notes.push(note);
  }
  reset() {
    this.notes = [];
  }

  setNotes(notes){
    // notes.forEach (note => {
    //   this.notes.push(note);
    // });
    this.notes = notes;
  }

};

module.exports = notesModel;