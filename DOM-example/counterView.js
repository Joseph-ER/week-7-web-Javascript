class counterView {

  // constructor () {
  //   this.counter = document.body.querySelector('#counter');
  //   this.counter.innerText = 0;
  // }
  increment() {
    const counter = document.body.querySelector('#counter');
    console.log(document.body.querySelector('#counter').textContent);
    // this.counter.innerText ++;
    counter.textContent = parseInt(counter.textContent) + 1;
  
  }

}

module.exports = counterView;