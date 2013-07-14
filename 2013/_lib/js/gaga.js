/* ------------------------------------------------------------------------------ */
/* init */
/* ------------------------------------------------------------------------------ */
function init(){
	//init live bg
	initLiveBg();
	//debug
	displayDebugInfo('#debugInfo');
}
/* DOM.ready */
$(document).ready(function(){
	Platform.addDOMClass();
	init();
});
