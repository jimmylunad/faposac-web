var slideIndex = 1;
var slideMaquinariaIndex = 1;


showSlides(slideIndex);
// showSlidesMaquinaria(slideMaquinariaIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

setInterval(() => {
plusSlides(-1)
}, 10000);

setInterval(() => {
plusSlides(1)
}, 15000);

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "flex";  
}



function plusSlidesMaquinaria(n) {
  showSlidesMaquinaria(slideMaquinariaIndex += n);
}

// function currentSlideMaquinaria(n) {
//   showSlidesMaquinaria(slideIndex = n);
// }

function showSlidesMaquinaria(n) {
  var i ;
  var slides = document.getElementsByClassName("mySlidesMaquinaria");
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideMaquinariaIndex = 1}    
  if (n < 1) {slideMaquinariaIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideMaquinariaIndex-1].style.display = "block";  
}

function showOverloadCollage(n) {
 showSlidesMaquinaria(slideMaquinariaIndex = n);
  const overload = document.getElementById('overloadCollage')
  overload.style.display = 'flex'
 
}

function unloadOverloadCollage () {
  const overload = document.getElementById('overloadCollage')
overload.style.display = 'none'
}

function goScroll(name) {
  var element = document.getElementById(name);
  var margin = 80
    // var headerOffset = 80;
    // var elementPosition = element.getBoundingClientRect().top;
    // var offsetPosition = elementPosition - headerOffset;

    // window.scrollTo({
    //      top: offsetPosition,
    //      behavior: "smooth"
    // });
  
    console.log("element",element)
  let dims = element.getBoundingClientRect();

  console.log("DIMS", dims)
  if (name === 'PORTADA') {
      window.scrollTo(window.scrollX, 0);
  }
     if (name === 'IDENTIDAD') {
      window.scrollTo(window.scrollX, 780);
  }
    if (name === 'FILOSOFIA') {
      window.scrollTo(window.scrollX, 1330);
  }
     if (name === 'SERVICIOS') {
      window.scrollTo(window.scrollX, 2019);
  }
       if (name === 'MAQUINARIAS') {
      window.scrollTo(window.scrollX, 2946);
  }
        if (name === 'PUERTOS') {
      window.scrollTo(window.scrollX, 3596);
  }
         if (name === 'CLIENTES') {
      window.scrollTo(window.scrollX, 4396);
  }
          if (name === 'CONTACTANOS') {
      window.scrollTo(window.scrollX, 4896);
  }


}




