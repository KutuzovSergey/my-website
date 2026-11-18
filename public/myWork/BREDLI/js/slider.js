"use strict"

const sliderButtonLeft = document.querySelector('.slider__button_left');
const sliderButtonRight = document.querySelector('.slider__button_right');
const images = document.querySelectorAll('.slider__image');
const sliderNavigation = document.querySelector('.slider__navigation');
const navigationButtons = document.querySelectorAll('.navigation__button');
let currentIndex = 0; 

const showImage = (index) =>{
	if (+index < 0) {
		index = images.length - 1;
	} else if (+index > images.length - 1) {
		index = 0;
	} 

	images[currentIndex].classList.remove('slider__image_active');
	images[+index].classList.add('slider__image_active');
	currentIndex = +index;
}

const trackingNavigation = (indexNav) =>{
	if (indexNav === 6) {
		navigationButtons[0].classList.add('navigation__active');
		navigationButtons[5].classList.remove('navigation__active');
	} else if(indexNav === -1){
		navigationButtons[5].classList.add('navigation__active');
		navigationButtons[0].classList.remove('navigation__active');
	} else {
		for (let i = 0; i < navigationButtons.length; i++) {
			if (+navigationButtons[i].dataset.nav === indexNav) {
				navigationButtons[i].classList.add('navigation__active');
			} else {
				navigationButtons[i].classList.remove('navigation__active');
			}
		}
	}
}


sliderButtonLeft.addEventListener('click', () => {
	const newIndex = currentIndex - 1;
	showImage(newIndex);
	trackingNavigation(newIndex);
});
sliderButtonRight.addEventListener('click', () => {
	const newIndex = currentIndex + 1;
	showImage(newIndex);
	trackingNavigation(newIndex);
});

const navigation = (event) =>{
	const elem = event.target;

	if (elem.classList.contains('slider__navigation')) {
		return
	}

	for (let i = 0; i < navigationButtons.length; i++) {
		navigationButtons[i].classList.remove('navigation__active');
	}

	if(elem.classList.contains('navigation__button')){
		elem.classList.add('navigation__active');
		showImage(elem.dataset.nav);
	} else {
		elem.parentElement.classList.add('navigation__active');
		showImage(elem.parentElement.dataset.nav);
	}
}

sliderNavigation.addEventListener('click', navigation);

const launchingSlider = () => {
	const newIndex = currentIndex + 1;
	showImage(newIndex);

	trackingNavigation(newIndex);
}

setInterval(launchingSlider, 6000);