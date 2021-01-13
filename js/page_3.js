let navCont1 = document.querySelector('.navbar__container');
let navCont2 = document.querySelector('.navbar__border__container');

let pageNavLinksArr = [...navCont1.querySelectorAll('.page__link')];
let pagesArr = [...document.querySelectorAll('.page')];

let removeClass = (item, className) => {
	item.classList.remove(className);
}

pageNavLinksArr.forEach(link => {
	let index = pageNavLinksArr.indexOf(link);

	link.addEventListener('click', () => {
		pageNavLinksArr.forEach(item => {removeClass(item, 'active')});
		pagesArr.forEach(item => {removeClass(item, 'active')});
		link.classList.add('active');
		pagesArr[index].classList.add('active');
	});
})