const topNews = () => {
  const url = `https://www.thesportsdb.com/api/v1/json/2/all_sports.php`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => topGameDisplay(data.sports))
    .catch((error) => console.log("File missing"));
};

const topGameDisplay = (data) => {
  const gameField = document.getElementById("top-games");
  data.forEach((sport) => {
    const gameDiv = document.createElement("div");
    gameDiv.classList.add("border-2");
    gameDiv.innerHTML = `
        <img class="w-full" src="${sport.strSportThumb}" alt="Image Unavilable">
        <h3 class="text-center text-3xl py-2">${sport.strSport}</h3> 
    `;
    gameField.appendChild(gameDiv);
  });
};

topNews();
