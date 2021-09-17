// on-scroll header style
window.addEventListener('scroll', () => {
  var header = document.querySelector('header');
  var windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
});