/**
 * @jest-environment jsdom
 */

const Api = require('./notesApi');


require('jest-fetch-mock').enableMocks()

describe('API class', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  it('calls fetch and loads data', () => {
    
    const api = new Api();
    
    
    fetch.mockResponseOnce(JSON.stringify({
      name: "Some value",
      id: 123
    }));
    
    api.loadNotes((note) => {
      expect(note.name).toBe("Some value");
      expect(note.id).toBe(123);
    });
  });
  
  it('when createNote is called succesfully send a POST request with JSON using fetch',(done) => {
    const api = new Api();

    fetch.mockResponse(JSON.stringify(['Note from test']));

    api.createNote('This note is added through fetch!',()=>{
      console.log(fetch.mock.calls);
      expect(fetch.mock.calls.length).toEqual(1);
      done();
    });

  });
});