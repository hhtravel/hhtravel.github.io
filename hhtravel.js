var slides = document.querySelectorAll('.pic');

var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 4000);

function nextSlide(){

	

	slides[currentSlide].className = 'pic';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'pic showing';
	

	if(currentSlide > 0){

	prevSlide = (currentSlide-1)%slides.length;
	slides[prevSlide].removeClass = 'showing';
	
	}

}

function screenScroll(){
	 if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("navbar").className = "hideBar";
    } else {
        document.getElementById("navbar").className = "navbar";
    }
}


window.onscroll = function(){screenScroll()};
document.window = nextSlide;

