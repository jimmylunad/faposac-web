// selector
var menu = document.querySelector('.hamburger');

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
	if(!menuOpen) {
		menuBtn.classList.add('open');
		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
		menuOpen = false;
	}
});


// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
if(menu) {
	menu.addEventListener('click', toggleMenu, false);
}

//Solución con jQUery
/*$(document).ready(function(){
	$('.hamburger').click(function() {
		$('.hamburger').toggleClass('is-active');
		$('.menuresponsive').toggleClass('is-active');
		return false;
	});
});*/