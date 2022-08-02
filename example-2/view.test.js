/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays 2 paragraphs', () => {
    const view = new View();
    expect(document.querySelectorAll('p').length).toBe(2);
  });
  it('adds a new paragraph and then has 3 paragraphs',() => {
    const view = new View();
    view.addParagraph('This is a new paragraph!');
    expect(document.querySelectorAll('p').length).toBe(3);
  });
  it('clears all paragpraphs',() => {
    const view = new View();
    expect(document.querySelectorAll('p').length).toBe(2);
    view.clearParagraphs();
    expect(document.querySelectorAll('p').length).toBe(0);
    
  })
});