const p_Tag=document.querySelector(".b_text");
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  if (n<1){
    n=1;
    slideIndex=n;
  }
  if (n>3){
    n=3;
    slideIndex=n;
  }
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n <1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
  p_Tag.textContent = String(n)+'/3';
}