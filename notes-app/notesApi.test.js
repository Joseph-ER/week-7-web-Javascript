const Api = require('./notesApi');

require('jest-fetch-mock').enableMocks()

describe('API class', () => {
  it('calls fetch and loads data', () => {

    const api = new Api();


    fetch.mockResponseOnce(JSON.stringify({
      name: "Some value",
      id: 123
    }));

    api.loadNotes((noteI) => {
      expect(noteI.name).toBe("Some value");
      expect(noteI.id).toBe(123);
    });
  });
});