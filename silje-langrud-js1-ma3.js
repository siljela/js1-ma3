//q1: Convert the function below to an arrow function:
//function(a, b) {
//    return a - b;
//}

(a, b) => a - b;

//q2: Make a call to the URL below, pass the JSON it returns to a function and inside that function loop through the results and log each game's name.
//In the catch method of your code, redirect to error.html if there is an error.
//https://api.rawg.io/api/games?genres=sports
const genresSportsURL = "https://api.rawg.io/api/games?genres=sports";

fetch(genresSportsURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    //console.dir(json.results);
    const results = json.results;
    for (var i = 0; i < results.length; i++) {
      console.log(results[i].name);
    }
  })
  .catch(function (error) {
    document.location.href = "/error.html";
  });

//q3: Replace the word cats with the word giraffes in the following sentence:
//These cats are outrageous.
const sentence = "These cats are outrageous.";
const formattedSentence = sentence.replace("cats", "giraffes");
sentence.innerText = formattedSentence;

//q4: Given the URL below, write code that checks if there is a userId parameter in the query string.
//If there is no userID parameter, redirect the browser to third.html.
//If there is a userID parameter and its value is less than 10, redirect to first.html.
//If there is a userID parameter and its value is 10 or greater, redirect to second.html.
//https://my.site.com?userId=7
const queryString = document.location.search; 
const params = new URLSearchParams(queryString);

let userId;

if (params.has("userId")) {
    userId = params.get("userId");
if else(params.has("userID" <== 10)){
      document.location.href = "/first.html";
    }
if else(params.has("userID" >== 10)){
      document.location.href = "/second.html";
    }
} else {
    document.location.href = "/third.html";
}

//q5: Write code that removes the button, and only the button, from its parent element in the HTML below:
//<div class="container">
//<p>Lorem ipsum dolor</p>
//<button class="btn">Click me</button>
//</div>
const container = document.querySelector(".container");
const button = document.querySelector(".btn");

container.removeChild(button);

//q6: Create an li element with a text value of Parrots and a class of parrots.
//Add the new item as the second item in the ul below (add it after Cows).
//<ul class="animals">
//<li class="cows">Cows</li>
//<li class="elephants">Elephants</li>
//</ul>
const container = document.querySelector("ul");
const liElementLastItem = document.querySelector(".elephants");
const liElement = document.createElement("li");

liElement.className = "parrots";
liElement.innerText = "Parrots";

container.appendChild(liElement);
liElementLastItem.before(liElement);

//q7:Make a call to the URL below and pass the JSON it returns to a function.
//Inside that function select the div from the HTML below and assign the rating property from the JSON object as it's text value.
//In the catch method, log the error that may be returned.
//https://api.rawg.io/api/games/3801
//<div class="rating"></div>

const games = "https://api.rawg.io/api/games/3801";

fetch(games)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    //console.dir(json.rating);
    const rating = document.querySelector(".rating");
    rating.innerHTML = json.rating;
  })
  .catch(function (error) {
    console.dir(error);
  });