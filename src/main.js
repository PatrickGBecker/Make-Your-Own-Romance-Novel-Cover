// Create variables targetting the relevant DOM elements here 👇
var showRandomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var savedCoversSection = document.querySelector(".saved-covers-section");
var makeNewButton = document.querySelector(".make-new-button");
var homeButtonHidden = document.querySelector(".home-button");
var bookImageButton = document.querySelector(".cover-image");
var bookTitleButton = document.querySelector(".cover-title");
var bookTagline1Button = document.querySelector(".tagline-1");
var bookTagline2Button = document.querySelector(".tagline-2");
var makeMyBookButton = document.querySelector(".create-new-book-button");
var savedViewPage = document.querySelector(".saved-view");
var formViewPage = document.querySelector(".form-view");
var homeViewPage = document.querySelector(".home-view");

// data from HTML file
var formCoverField = document.querySelector("#cover");
var formTitleField = document.querySelector("#title");
var formDescriptor1Field = document.querySelector("#descriptor1");
var formDescriptor2Field = document.querySelector("#descriptor2");
// class that listens for event 'click'
var formCoverInput = document.querySelector(".user-cover");
var formTitleInput = document.querySelector(".user-title");
var formdescriptor1Input = document.querySelector(".user-desc1");
var formdescriptor2Input = document.querySelector(".user-desc2");


// We've provided a few variables below
var savedCovers = [new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")];
var currentCover;

// Add your event listeners here 👇
showRandomCoverButton.addEventListener("click", uponLoad);

// saveCoverButton.addEventListener("click", );
viewSavedButton.addEventListener("click", showSavedView);
makeNewButton.addEventListener("click", showMakeYourOwnView);
homeButtonHidden.addEventListener("click", showHomeView);

saveCoverButton.addEventListener("click", noDuplicates);
viewSavedButton.addEventListener("click", showSavedCoverSection);
makeNewButton.addEventListener("click", showMakeYourOwnView);
//homeButtonHidden.addEventListener("click", );

// bookImageButton.addEventListener("click", );
// bookTitleButton.addEventListener("click", );
// bookTagline1Button.addEventListener("click", );
// bookTagline2Button.addEventListener("click", );
makeMyBookButton.addEventListener("click", makeMyBookForm);


// Create your event handlers and other functions here 👇
window.addEventListener("load", uponLoad);

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function getRandomElement(array) {
  let randomNum = getRandomIndex(array);
  let randomItem = array[randomNum];
  return randomItem;
};

function uponLoad() {
  currentCover = new RandomCover(covers, titles, descriptors);
  bookImageButton.src = currentCover.cover;
  bookTitleButton.innerHTML = currentCover.title;
  bookTagline1Button.innerHTML = currentCover.tagline1;
  bookTagline2Button.innerHTML = currentCover.tagline2;
};

function showSavedView() {
  homeViewPage.classList.add("hidden");
  formViewPage.classList.add("hidden");
  showRandomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButtonHidden.classList.remove("hidden");
  savedViewPage.classList.remove("hidden");
};

function showMakeYourOwnView() {
  homeViewPage.classList.add("hidden");
  showRandomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  savedViewPage.classList.add("hidden");
  formViewPage.classList.remove("hidden");
  homeButtonHidden.classList.remove("hidden");
};

function showHomeView() {
  homeViewPage.classList.remove("hidden");
  showRandomCoverButton.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");
  homeButtonHidden.classList.add("hidden");
  formViewPage.classList.add("hidden");
  savedViewPage.classList.add("hidden");
};

function makeNewBook(newUserCover, newUserTitle, newUserDesc1, newUserDesc2) {
  currentCover = new Cover(newUserCover, newUserTitle, newUserDesc1, newUserDesc2)
};

function makeMyBookForm() {
  event.preventDefault();
  makeNewBook(formCoverField.value, formTitleField.value, formDescriptor1Field.value, formDescriptor2Field.value);
  pushToArray();
  showHomeView();
  showCoverForm();
  displayNewUserCover();
  formCoverField.value = "";
  formTitleField.value = "";
  formDescriptor1Field.value = "";
  formDescriptor2Field.value = "";
};

function showCoverForm() {
  formCoverInput.src = currentCover.cover;
  formTitleInput.innerText = currentCover.title;
  formdescriptor1Input.innerText = currentCover.descriptor1;
  formdescriptor2Input.innerText = currentCover.descriptor2;
};

function displayNewUserCover() {
  bookImageButton.src = currentCover.cover;
  bookTitleButton.innerHTML = currentCover.title;
  bookTagline1Button.innerHTML = currentCover.tagline1;
  bookTagline2Button.innerHTML = currentCover.tagline2;
};

function pushToArray() {
  covers.push(currentCover.cover);
  titles.push(currentCover.title);
  descriptors.push(currentCover.tagline1);
  descriptors.push(currentCover.tagline2);
};

function noDuplicates() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover)
  }
}

function showSavedCoverArray() {
  var displaySavedCovers = "";
  for (let i = 0; i < savedCovers.length; i++) {
    displaySavedCovers +=
    `<section class='mini-cover'>
    <img class="cover-image" id="${savedCovers[i].id}" src="${savedCovers[i].cover}">
     <h2 class="cover-title">${savedCovers[i].title}</h2>
     <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
     </section>`;
    }
    savedCoversSection.innerHTML = displaySavedCovers;
}

function showSavedCoverSection() {
  showSavedView();
  showSavedCoverArray();
}
