/* ------------------------------------------------------------------------------ */
/* init */
/* ------------------------------------------------------------------------------ */
function init(){
	//$('.fittext').fitText();
	function slabTextHeadlines() {
        $('.fittext').slabText({
            // Don't slabtext the headers if the viewport is under 380px
            "viewportBreakpoint":380
        });
    };
	setTimeout(slabTextHeadlines, 1000);
	//slabTextHeadlines();
}
/* DOM.ready */
$(document).ready(function(){ 
	Platform.addDOMClass();
	init();	
});
