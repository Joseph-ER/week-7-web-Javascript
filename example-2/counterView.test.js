/**
 * @jest-environment jsdom
 */
const fs = require("fs");

const counterView = require("./counterView");

describe("counterView", () => {
  it("increments value of counter by 1", () => {
    const view = new counterView();
    document.body.innerHTML = fs.readFileSync("./index.html");
    view.increment();

    expect(document.querySelector('span').innerText).toEqual(1);


  });
});