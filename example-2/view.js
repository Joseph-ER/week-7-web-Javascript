class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph(newText){
    const newP = document.createElement('p');
    newP.innerText = newText;
    this.mainContainerEl.append(newP);
  }

  clearParagraphs(){
    const allParagraphs = document.querySelectorAll('p');
    allParagraphs.forEach (paragraph => {
      paragraph.remove();
    })
  }
}

module.exports = View;