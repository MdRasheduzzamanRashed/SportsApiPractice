const topNews = () => {
  const url = `https://www.thesportsdb.com/api/v1/json/2/all_sports.php`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => topGameDisplay(data.sports))
    .catch((error) => console.log(error));
};

const topGameDisplay = (data) => {
  const gameField = document.getElementById("top-games");
  data.forEach((sport) => {
    const gameDiv = document.createElement("div");
    gameDiv.classList.add("border-2");

    const gameImg = document.createElement("img");
    gameImg.onerror = function () {
      this.src = "./src/img/sports.jpg";
    };
    gameImg.src = sport.strSportThumb;
    gameImg.classList.add("w-full");
    gameDiv.appendChild(gameImg);

    const title = document.createElement("h3");
    title.innerText = sport.strSport;
    title.classList.add("text-center", "mt-2", "font-bold", "text-3xl", "pb-3")
    gameDiv.appendChild(title);

    const gameBtn = document.createElement("button");
    gameBtn.innerText = "More Detail";
    gameBtn.classList.add(
      "block",
      "w-full",
      "py-2",
      "text-white",
      "bg-blue-700"
    );
    gameBtn.addEventListener("click", function () {
      gameDetail(sport);
    });
    gameDiv.appendChild(gameBtn);
    gameField.appendChild(gameDiv);
  });
};
const gameDetail = (data) => {
  const gameTitle = document.getElementById("game-title");
  const gameDetail = document.getElementById("game-detail-field");
  const gameIcon = document.getElementById("game-icon");
  const hideDetail = document.getElementById("game-detail2");
  hideDetail.classList.replace("hidden", "relative");
  gameTitle.innerText = data.strSport;
  gameDetail.innerText = data.strSportDescription;

  gameIcon.innerHTML = `
  <img src="${data.strSportIconGreen}" alt="">
  `;
};
const hiddenFunction = () => {
  const hideDetail = document.getElementById("game-detail2");
  hideDetail.classList.replace("relative", "hidden");
};
topNews();
