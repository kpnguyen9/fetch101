const url = document.getElementById("url");
const fetchButton = document.getElementById("fetchButton");
const resDiv = document.getElementById("res");

// console.log(url, fetchButton, resDiv);

fetchButton.addEventListener("click", goFetch);

function goFetch() {
  fetch(url.value)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      for (key in data) {
        // console.log(key);
        // console.log(data[key]);
        let tempP = document.createElement("p");
        tempP.textContent = `${key}: ${data[key]}`;
        // console.log(tempP);

        resDiv.appendChild(tempP);
      }
    });
}

// fetch("https://swapi.dev/api/starships/12")
//   .then((response) => response.json()) //return response.json()
//   .then((data) => {
//     console.log(data);
//   });
