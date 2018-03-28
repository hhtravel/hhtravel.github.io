var slides = document.querySelectorAll('.pic');

var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 4000);

function nextSlide(){

	console.log(slides);

	slides[currentSlide].className = 'pic';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'pic showing';
	console.log(currentSlide);

	if(currentSlide > 0){

	prevSlide = (currentSlide-1)%slides.length;
	slides[prevSlide].removeClass = 'showing';
	console.log(prevSlide);

	}

}

document.window = nextSlide;