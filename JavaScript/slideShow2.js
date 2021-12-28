
var slideIndexs = 1;
showSlides(slideIndexs);

function plusSlides(n) {
  showSlides(slideIndexs += n);
}

function currentSlide(n) {
  showSlides(slideIndexs = n);
}

function showSlides(n) {
  var x;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexs = 1}    
  if (n < 1) {slideIndexs = slides.length}
  for (i = 0; x < slides.length; x++) {
      slides[x].style.display = "none";  
  }
  for (x = 0; x < dots.length; x++) {
      dots[x].className = dots[x].className.replace(" active", "");
  }
  slides[slideIndexs-1].style.display = "block";  
  dots[slideIndexs-1].className += " active";
}