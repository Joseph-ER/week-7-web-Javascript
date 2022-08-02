console.log('The notes app is running');

const notesModel = require("./notesModel");
const NotesView = require('./notesView');

const model = new notesModel();
const view = new NotesView(model);

