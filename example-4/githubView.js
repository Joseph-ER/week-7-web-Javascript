class GithubView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;
      this.api.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.repoData = repoData;
        this.display();
      });
    });
  }

  display() {
    document.querySelectorAll('img').forEach(element =>{
      element.remove();
    });
    const repoImage = document.createElement('img');
    repoImage.src = this.repoData.organization.avatar_url;
    document.querySelector('#repo-name').innerText = this.repoData.name;
    document.querySelector('#repo-description').innerText =this.repoData.description;
    document.querySelector('div').append(repoImage);
  }


}

module.exports = GithubView;