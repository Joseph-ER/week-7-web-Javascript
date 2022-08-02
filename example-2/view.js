class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph(text){
    const pEl = document.createElement('p');
    pEl.append(text);
    document.querySelector('#main-container').append(pEl);
}
}

module.exports = View;