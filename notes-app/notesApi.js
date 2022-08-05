class NotesApi{
   loadNotes(callback){
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(data => {
        callback(data)
      });
  }

  createNote(noteContent, callback){
    fetch('http://localhost:3000/notes',{
      method: 'POST',
      'Content-Type': 'application/json',
      body: JSON.stringify(noteContent)
    })
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((data) => {
        console.log('Success:', data);
        callback(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}

module.exports = NotesApi;