/* ------------------------------------------------------------------------------ */
/* init */
/* ------------------------------------------------------------------------------ */
function init(){
	
	initLiveBg();

	//debug
	displayDebugInfo('#debugInfo');
}
/* DOM.ready */
$(document).ready(function(){
	Platform.addDOMClass();
	init();
});
