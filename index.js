// on-scroll header style
window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  var windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-active", windowPosition);
});

var text = document.querySelector("textarea");
var postForever = document.getElementsByClassName("postforever")[0];

postForever.addEventListener("click", () => {
  var postHere = document.getElementsByClassName('post-here')[0];

  var newCommit = document.createElement('div');
  newCommit.setAttribute('class', 'new-commit');
  var para = document.createElement('p'); 
  var h4 = document.createElement('h4'); 

  var name = document.getElementById('name');
  var date = document.getElementById('date');
  para.textContent = text.value;
  h4.textContent = '- ' + name.textContent + ' : ' + date.textContent;
  newCommit.append(para);
  newCommit.append(h4);
  postHere.append(newCommit);
  text.value = '';
});
