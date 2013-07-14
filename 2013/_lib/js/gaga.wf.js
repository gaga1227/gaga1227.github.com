/*custom loader config*/
var WebFontConfig = {
	custom: 		{ 
					families: 	['LoveloBlack', 'NovecentoWide:n2,n3,n4,n5,n6,n7', 'PenumbraSans:n3,n4,n6,n7'],
					urls: 		['_lib/font/lovelo/font.css', '_lib/font/novecentowide/font.css', '_lib/font/penumbrasans/font.css'] 
					},
	loading: 		function() { console.log('wf loading'); },
	active: 		function() { console.log('wf active'); },
	inactive: 		function() { console.log('wf inactive'); },
	fontloading: 	function( familyName, fvd ) { console.log( familyName, fvd, 'loading' ); },
	fontactive: 	function( familyName, fvd ) { console.log( familyName, fvd, 'active' ); },
	fontinactive: 	function( familyName, fvd ) { console.log( familyName, fvd, 'inactive' ); }
};	
if (WebFont) { WebFont.load(WebFontConfig) };