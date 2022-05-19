// Create variables targetting the relevant DOM elements here 👇
var showRandomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var makeNewButton = document.querySelector(".make-new-button");
var homeButtonHidden = document.querySelector(".make-new-button");
var bookImageButton = document.querySelector(".cover-image");
var bookTitleButton = document.querySelector(".cover-title");
var bookTaglineButton = document.querySelector(".tagline");
var makeMyBookButton = document.querySelector(".create-new-book-button");

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
//missing function names
showRandomCoverButton.addEventListener("click", );
saveCoverButton.addEventListener("click", );
viewSavedButton.addEventListener("click", );
makeNewButton.addEventListener("click", );
homeButtonHidden.addEventListener("click", );
bookImageButton.addEventListener("click", );
bookTitleButton.addEventListener("click", );
bookTaglineButton.addEventListener("click", );
makeMyBookButton.addEventListener("click", );

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
