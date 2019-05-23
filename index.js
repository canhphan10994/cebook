$(document).ready(function() {
  // I'm a lazy man =))
  $(".social-list li").addClass("mx-3");
  $(".dropdown-item").attr('href','html/results.html');

  let newBooks = $(".n.contents .list-items");
  let viewBooks = $('.v.contents .list-items');
  let favoriteBooks = $('.f.contents .list-items');
  let recommentBooks = $('.r.contents .list-items');
  let nbookList = [];
  let vbookList = [];
  let fbookList = [];
  let rbookList = [];
  for (let i = 0; i < 10; i++) {
    let book = {
      bookname: "New books " + i,
      image: "img/categories.jpg",
      views: 1000
    };
    nbookList.push(book);
  }
  for (let i = 0; i < 10; i++) {
    let book = {
      bookname: "Viewest books " + i,
      image: "img/categories.jpg",
      views: 1000
    };
    vbookList.push(book);
  }

// I don't want to copy alot of html @_@!
  nbookList.forEach(function(book) {
    newBooks.append("<li class='c-item mt-3'> <div class='card p-2'> <img src=" + book.image + " class='card-img-top' alt='books'><div class='card-body p-0'><a href='html/reading.html' class='card-title'>" + book.bookname + "</a> <span class='float-right'>Lượt xem: "+ book.views +"</span> </div> </div> </li>");

  });
  vbookList.forEach(function(book) {
    viewBooks.append("<li class='c-item mt-3'> <div class='card p-2'> <img src=" + book.image + " class='card-img-top' alt='books'><div class='card-body p-0'><a href='html/reading.html' class='card-title'>" + book.bookname + "</a> <span class='float-right'>Lượt xem: "+ book.views +"</span> </div> </div> </li>");

  });

  /** end js **/

});
