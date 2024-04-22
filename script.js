document.addEventListener("DOMContentLoaded", () => {
  const generateMemeBtn = document.querySelector(".meme-generator-btn");
  const memeImage = document.querySelector(".meme-generator img");
  const memeTitle = document.querySelector(".meme-title");
  const memeAuthor = document.querySelector(".meme-author");

  function updateDetails(url, title, author) {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
  }


  const generateMeme = async () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
      .then((response) => response.json())
      .then((data) => {
        updateDetails(data.url, data.title, data.author);
      }).catch((error)=>{
        console.log("Error in fetching API", error);
      })
  };

  generateMemeBtn.addEventListener("click", ()=>{
    memeTitle.innerHTML = "Loading...."
    setTimeout(() => {
        generateMeme()
    }, 1000);
  });
});
