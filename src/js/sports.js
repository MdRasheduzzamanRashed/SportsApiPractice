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
        <div class="text-center mt-2 font-bold">
        <h3 class=" text-3xl pb-3">${sport.strSport}</h3>
        <button onClick="gameDetail('${sport.strSportDescription}')" class="block w-full py-2 text-white bg-blue-700" >More Detail</button>
        </div> 
    `;
    gameField.appendChild(gameDiv);
  });
};
const gameDetail = (gameData) => {
    console.log(gameData);
};

topNews();
