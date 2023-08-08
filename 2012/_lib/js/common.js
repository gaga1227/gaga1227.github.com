/* ------------------------------------------------------------------------------ */
/* initToggle */
/* ------------------------------------------------------------------------------ */
function initToggle(){
	//vars
	var $folio = $('#folio'),
		$btnFolioDev = $('#btnFolioDev'),
		//state classes
		activeCls = 'active';
	//button handler
	function toggleFolio(e) {
		e.preventDefault();
		$btnFolioDev.toggleClass(activeCls);
		$folio.toggleClass(activeCls);
	}
	//bind side menu interaction
	$btnFolioDev.on('click', toggleFolio);
}
/* ------------------------------------------------------------------------------ */
/* init */
/* ------------------------------------------------------------------------------ */
function init(){
	//interaction
	initToggle();
	//init live bg
	initLiveBg();
	//debug
	// displayDebugInfo('#debugInfo');
}
/* DOM.ready */
$(document).ready(function(){
	Platform.addDOMClass();
	init();
});
