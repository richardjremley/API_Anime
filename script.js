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
  let houseNameResult = document.createElement("h2");
  houseNameResult.innerHTML = `${houseName}`;
  section2.appendChild(houseNameResult);

  let armsCoat = response2.data.coatOfArms;
  let armsCoatResult = document.createElement("h3");
  armsCoatResult.innerHTML = `Coat of Arms: ${armsCoat}`;
  section2.appendChild(armsCoatResult);

  let motto = response2.data.words;
  let mottoResult = document.createElement("h3");
  mottoResult.innerHTML = `Motto: ${motto}`;
  section2.appendChild(mottoResult);

  let overlords = response2.data.overlord;
  let overlordResult = document.createElement("h3");
  overlordResult.innerHTML = `Overlord: ${overlords}`;
  section2.appendChild(overlordResult);

  let regions = response2.data.region;
  let regionResult = document.createElement("h3");
  regionResult.innerHTML = `Home Region: ${regions}`;
  section2.appendChild(regionResult);

  let foundeds = response2.data.founded;
  let foundedResult = document.createElement("h3");
  foundedResult.innerHTML = `Year of Founding: ${foundeds}`;
  section2.appendChild(foundedResult);

  let lord = response2.data.currentLord;
  let lordResult = document.createElement("h3");
  lordResult.innerHTML = `Current Lord: ${lord}`;
  section2.appendChild(lordResult);

  //   let swornMember = response2.data.swornMembers;
  //   let memberResult = document.createElement("h3");
  //   memberResult.innerHTML = `Sworn Members: ${swornMember}`;
  //   section2.appendChild(memberResult);
});

button.addEventListener("click", async () => {
  let movieChoice = input.value;
  const response = await axios.get(
    `https://anapioficeandfire.com/api/characters/${movieChoice}`
  );
  console.log(response);

  let nameOptions = response.data.name;
  let result = document.createElement("h2");
  result.innerHTML = `Name: ${nameOptions}`;
  section.appendChild(result);

  let genderOptions = response.data.gender;
  let gender = document.createElement("h3");
  gender.innerHTML = `Sex: ${genderOptions}`;
  section.appendChild(gender);
  let title = response.data.titles.join(",    ");
  let titleResult = document.createElement("h3");
  titleResult.innerHTML = `Titles: ${title}`;
  section.appendChild(titleResult);

  let alias = response.data.aliases.join(",   ");
  let aliasResult = document.createElement("h3");
  aliasResult.innerHTML = `Aliases: ${alias}`;
  if ((alias = ` ""`)) {
  } else {
    section.appendChild(aliasResult);
  }

  let allegiancesOptions = response.data.allegiances;
  let allegiances = document.createElement("h3");
  allegiances.innerHTML = `Allegiance: ${allegiancesOptions}`;
  if ((allegiancesOptions = ` ""`)) {
  } else {
    section.appendChild(allegiances);
  }

  let cultureOptions = response.data.culture;
  let cultures = document.createElement("h3");
  cultures.innerHTML = `Culture: ${cultureOptions}`;
  if ((cultureOptions = ` ""`)) {
  } else {
    section.appendChild(cultures);
  }
  let diedOptions = response.data.died;
  let died = document.createElement("h3");
  died.innerHTML = `Year of Death: ${diedOptions}`;
  if ((diedOptions = ` ""`)) {
  } else {
    section.appendChild(died);
  }
});
