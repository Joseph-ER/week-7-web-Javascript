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
    const searchedEl = document.createElement('div');
    const repoImage = document.createElement('img');
    searchedEl.id = 'message';
    searchedEl.title = this.repoData.name;
    searchedEl.innerText = this.repoData.description;
    repoImage.src = this.repoData.organization.avatar_url;
    document.querySelector('#repo-name').append(searchedEl.title);
    document.querySelector('#repo-description').append(searchedEl.innerText);
    document.querySelector('#repo-description').append(repoImage);
  }


}

module.exports = GithubView;