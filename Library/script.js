function getBook(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = `${title} by ${author}, ${pages} pages, not read yet`;
  return title + author + pages;
}

const lordOfTheRings = new getBook("Lord of the rings", "J.R.R Tolkien", 295);

console.log(lordOfTheRings.info);
function showNewBookForm() {
  showBookContainerDom.setAttribute("hidden", "");
  newBookFormDom.removeAttribute("hidden");
}

const newBookFormDom = document.getElementById("newBookForm");
const showBookContainerDom = document.getElementById("showBookContainer");

const addNewBookClick = document.getElementById("addNewBook");
addNewBookClick.addEventListener("click", showNewBookForm);

// Setting up btn in form
// Setting up sumit btn
const btnSubmit = document.getElementById("btnSubmitForm");
btnSubmit.addEventListener("click", funcSubmitForm);
// Setting up form text filed for var
const txtInputTitle = document.getElementById("newBookTitle");
const txtInputAuthers = document.getElementById("newBookAuther");
const txtInputPagenumbers = document.getElementById("newBookPages");
const isReadInput = document.getElementById("newBookRead");

function funcSubmitForm() {
  console.log(txtInputTitle.value);
  console.log(txtInputAuthers.value);
  console.log(txtInputPagenumbers.value);
  console.log(isReadInput.value);
}
// setting up reset btn
const btnReset = document.getElementById("btnResetForm");
btnReset.addEventListener("click", funcResetForm);

function funcResetForm() {
  console.log("hey babe, You reset me bitch!");
}

// Getting info from the form, on click
