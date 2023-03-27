function getBook(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = `${title} by ${author}, ${pages} pages, not read yet`;
  return title + author + pages;
}

const lordOfTheRings = new getBook("Lord of the rings", "J.R.R Tolkien", 295);

console.log(lordOfTheRings.info);
