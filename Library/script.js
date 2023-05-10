function getBook(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = isRead;
  this.info = `${title} by ${author}, ${pages} pages, have you read the book: ${isRead}`;
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
  const newBooks = new getBook(
    txtInputTitle.value,
    txtInputAuthers.value,
    txtInputPagenumbers.value,
    isReadInput.value
  );
  bookShelf.push(newBooks);
  console.log(txtInputTitle.value);
  console.log(txtInputAuthers.value);
  console.log(txtInputPagenumbers.value);
  console.log(isReadInput.value);
  funcResetForm();
  console.log(txtInputTitle.value);
}
// setting up reset btn
const btnReset = document.getElementById("btnResetForm");
btnReset.addEventListener("click", funcResetForm);

function funcResetForm() {
  txtInputTitle.value = "";
  txtInputAuthers.value = "";
  txtInputPagenumbers.value = "";
  isReadInput.checked = false;
}

// Getting info from the form, on click

// Setting up array to work as bookShelf
const bookShelf = [];

// adding books from bookshelf to html bookshelf
function bookShelfShowerRemover(shelfTitle, shelfAuther, shelfPages) {
  const bookShelfBody = document.getElementById("bookShelf");
  const newBookTemplate = document.getElementById("newBookShelf");
  while (bookShelfBody.lastElementChild) {
    bookShelfBody.removeChild(bookShelfBody.lastElementChild);
  }

  const clone = newBookTemplate.content.cloneNode(true);
  clone.getElementById("bookTitle").innerHTML = shelfTitle;
  clone.getElementById("bookAuther").textContent = shelfAuther;
  clone.getElementById("bookPages").innerHTML = `${shelfPages} Sider`;

  bookShelfBody.appendChild(clone);
}
bookShelf.forEach((element, index, Array) => {
  bookShelfShower(element.title, element.author, element.pages);
});

function bookShelfShower(shelfTitle, shelfAuther, shelfPages) {
  const bookShelfBody = document.getElementById("bookShelf");
  const newBookTemplate = document.getElementById("newBookShelf");

  const clone = newBookTemplate.content.cloneNode(true);
  clone.getElementById("bookTitle").innerHTML = shelfTitle;
  clone.getElementById("bookAuther").textContent = shelfAuther;
  clone.getElementById("bookPages").innerHTML = `${shelfPages} Sider`;

  bookShelfBody.appendChild(clone);
}
