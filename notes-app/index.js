console.log('The notes app is running');

const notesModel = require("./notesModel");
const NotesView = require('./notesView');
const NotesApi = require('./notesApi');

const model = new notesModel();
const api =  new NotesApi();
const view = new NotesView(model,api);
view.displayNotesFromApi();
// api.createNote("http://localhost:3000/notes", 'This note is added through fetch!', view.addNote);

