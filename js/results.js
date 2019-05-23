$(document).ready(function(){

$(".dropdown-item").attr('href','html/results.html');
$(".social-list li").addClass("mx-3");
// Lazy again.......
  let resultList = [];
  for(let i = 0; i < 10; i++){
    let book = {
      bookname: "Book " + i,
      author: "Tac gia",
      gender: "The loai",
      views: 1000
    }
    resultList.push(book);
  }

  let tbody = $("tbody");
  resultList.forEach((book) => {
    tbody.append("<tr><th scope='row'>"+book.bookname.split(' ')[1]+"<td class='b-name'><a href='reading.html'>"+book.bookname+"</a></td><td><a href='results.html'>"+book.author+"</a></td><td><a href='results.html'>"+book.gender+"</a></td><td>"+book.views+"</td></th></tr>");
    console.log(book.bookname);
  });

  //Filter Now now now
  let filterInput = $(".filterInput");

  filterInput.keyup(filterName);

  function filterName(){
    let filterValue = $(".filterInput").val().toUpperCase();
    let bname = $("tr .b-name");
    let bnameParent = $(".b-name").parent();
    let bnameLength = bname.length;
    for(let i = 0; i < bnameLength; i++){
      if(bname[i].innerHTML.toUpperCase().indexOf(filterValue) > -1){
        bnameParent[i].style.display = '';
      } else{
        bnameParent[i].style.display = 'none';
      }
    }
  }
});
