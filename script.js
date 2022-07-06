let button = document.querySelector("#search");
let input = document.querySelector("#search-input");
let section = document.querySelector(`.movie-list`);
// const renderList = (movies) => {
//   movies.map((currentMovie) => {
//     let movieName = currentMovie.title;
//     console.log(movieName);
//     // let movieImage = currentMovie.poster_path;
//     let movieTitle = document.createElement("h1");
//     // let movieImage2 = document.createElement("img");
//     movieTitle.innerText = `${movieName}`;
//     // movieImage2.setAttribute("src", `${IMAGE_BASE_PATH}${movieImage}`);

//     section.appendChild(movieTitle);
//     section.appendChild(movieImage2);
//   });
// };

let button2 = document.querySelector("#search2");
let input2 = document.querySelector("#allegiance-input");
let section2 = document.querySelector(`.allg-list`);

button2.addEventListener("click", async () => {
  let allgValue = input2.value;
  const response2 = await axios.get(
    `https://anapioficeandfire.com/api/houses/${allgValue}`
  );
  console.log(response2);
  let houseName = response2.data.name;
  let houseNameResult = document.createElement("h1");
  houseNameResult.innerHTML = `House Name: ${houseName}`;
  section2.appendChild(houseNameResult);

  let armsCoat = response2.data.coatOfArms;
  let armsCoatResult = document.createElement("h3");
  armsCoatResult.innerHTML = `Coat of Arms: ${armsCoat}`;
  section2.appendChild(armsCoatResult);

  let motto = response2.data.words;
  let mottoResult = document.createElement("h3");
  mottoResult.innerHTML = `Motto: ${motto}`;
  section2.appendChild(mottoResult);
});

button.addEventListener("click", async () => {
  let movieChoice = input.value;
  const response = await axios.get(
    `https://anapioficeandfire.com/api/characters/${movieChoice}`
  );
  console.log(response);

  let nameOptions = response.data.name;
  let result = document.createElement("h1");
  result.innerHTML = `Name: ${nameOptions}`;
  section.appendChild(result);

  let genderOptions = response.data.gender;
  let gender = document.createElement("h3");
  gender.innerHTML = `Sex: ${genderOptions}`;
  section.appendChild(gender);
  let title = response.data.titles;
  let titleResult = document.createElement("h3");
  titleResult.innerHTML = `Titles: ${title}`;
  section.appendChild(titleResult);

  let allegiancesOptions = response.data.allegiances;
  let allegiances = document.createElement("h3");
  allegiances.innerHTML = `Allegiance: ${allegiancesOptions}`;
  section.appendChild(allegiances);

  let diedOptions = response.data.died;
  let died = document.createElement("h3");
  died.innerHTML = `Year of Death: ${diedOptions}`;
  section.appendChild(died);

  //   renderList(movieOptions);
  //   console.log(movieOptions);
});
