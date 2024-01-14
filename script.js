const mouseWheel =
document.querySelector('.box-scroll');

mouseWheel.addEventListener('Wheel', function(e){
	const race = 15;
	if(edeltay > 0)
		mouseWheel.scrollLeft +=
	race;
	else 
		mouseWheel.scrollLeft-=
	race;
	e.preventDefault();
});