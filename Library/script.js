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
