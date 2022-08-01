/**
 * @jest-environment jsdom
 */

const ParagraphView = require('./paragraphView');
const fs = require('fs');

describe('paragraphView', () => {
  it("initialises the class",() => {
    const view = new ParagraphView();
    expect(view).toBeTruthy();
  });
  it('changes paragraph',() => {
    document.body.innerHTML=fs.readFileSync('./index.html');
    const view = new ParagraphView();
    view.display('New paragraph');
    const paragraphEl = document.querySelector('p');
    expect(paragraphEl.innerText).toBe('New paragraph');
  });
});