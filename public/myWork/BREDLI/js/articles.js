"use strict"

const panels_offer = document.getElementsByClassName('panels_offer');
const offer_text = document.getElementsByClassName('offer_text');
const offer_closes = document.querySelectorAll('div.offer_close');
const headpiece = document.querySelectorAll("img.headpiece");

const searchingItem = (collectionElem, classElem) =>{
	for (let i = 0; i < collectionElem.length; i++) {
		const elem = collectionElem[i];
		
		if (elem.tagName) {
			if (elem.classList.contains(classElem)) {
				return elem
			}
		}
	}
}

function look() {
	const block = this.parentNode;

	block.classList.remove("grid_4");
	block.classList.add("grid_12", "full_text");

	for (var i = 0; i < panels_offer.length; i++) {
		if (block != panels_offer[i]) {
			panels_offer[i].style.display = "none";
		}
	}

	for (let j = 0; j < headpiece.length; j++) {
		headpiece[j].style.display = "none";;
	}

	searchingItem(searchingItem(block.childNodes, 'title').childNodes, 'offer_close').classList.add('offer_close_active');
}

for (var i = 0; i < headpiece.length; i++) {
	headpiece[i].addEventListener("click", look);
}

function close() {

	const headpiece = document.getElementsByClassName('headpiece');
	const thisPanelsOffer = this;
 	const block = this.parentNode;

	thisPanelsOffer.classList.remove('offer_close_active');

 	for (var i = 0; i < headpiece.length; i++) {
		headpiece[i].style.display = "block";
	}

	block.parentNode.classList.remove("grid_12", "full_text");
	block.parentNode.classList.add("grid_4");

	for (var i = 0; i < panels_offer.length; i++) {
		// console.log(panels_offer[i]);
		panels_offer[i].style.display = "block";
	}
}

for (var i = 0; i < offer_closes.length; i++) {
	offer_closes[i].addEventListener("click", close);
}