/**
 * @jest-environment jsdom
 */
const fs = require("fs");


const counterView = require("./counterView");

describe("counterView", () => {
  it("increments value of counter by 1", () => {
    document.body.innerHTML = fs.readFileSync('index.html');

    const view = new counterView();
    let counter = document.body.querySelector('#counter');
    console.log(counter.textContent);
    view.increment();


    
    expect(parseInt(counter.textContent)).toBe(1);


  });
});