/* ------------------------------------------------------------------------------ */
/* common - debug - log */
/* ------------------------------------------------------------------------------ */
if(!window.console){console={log:function(a){alert(a)}}};
/* ------------------------------------------------------------------------------ */
/* common - debug - displayDebugInfo */
/* ------------------------------------------------------------------------------ */
function displayDebugInfo(debug){
	
	//vars
	var $debug = $(debug),
		$html = $('html'),
		on = '',
		toggle = function() {
			if ( on == 'true' ) {
				$debug.css('opacity', '1');
				$html.addClass('debug');	
			} else {
				$debug.css('opacity', '0');
				$html.removeClass('debug');
			}
		},
		update = function(){
			$debug.attr('data-width',$(window).width());
			on = $debug.attr('data-on');
			toggle();
		};
	
	//init and bind event
	$debug.on('click', function(e){
		e.preventDefault();
		var state = '';
		( on == 'true' ) ? state = 'false' : state = 'true';
		$debug.attr('data-on', state);
		update();
	});
	
	//init
	update();
	$(window).bind('resize', update);
		
}
/* ------------------------------------------------------------------------------ */
/* common - get Platform */
/* ------------------------------------------------------------------------------ */
var Platform = new function(){
	//detecting functions
	function checkPlatform(os) { return (navigator.userAgent.toLowerCase().indexOf(os.toLowerCase())>=0); }
	function checkEvent(e) { return (e in document.documentElement); }
	//add properties
	this.iPhone = checkPlatform('iPhone');
	this.iPad = checkPlatform('iPad');
	this.iPod = checkPlatform('iPod');
	this.iOS = this.iPhone||this.iPad||this.iPod;
	this.android = checkPlatform('android');
	this.touchOS = checkEvent('ontouchstart');
	this.addDOMClass = function(){
		var $html = $('html'),
			cls = '';
		if ( this.iPhone )	cls = 'iPhone';
		if ( this.iPad )	cls = 'iPad';
		if ( this.iPod )	cls = 'iPod';
		if ( this.iOS )		cls = 'iOS';
		if ( this.android )	cls = 'android';
		$html.addClass(cls);
	}
	this.debugLog = function(){
		console.log('iPhone: '+this.iPhone);
		console.log('iPad: '+this.iPad);
		console.log('iPod: '+this.iPod);
		console.log('iOS: '+this.iOS);
		console.log('android: '+this.android);
		console.log('touchOS: '+this.touchOS);
	}
	//css3 transition end event
	this.transEndEventNames = {
		'WebkitTransition' : 'webkitTransitionEnd',
		'MozTransition'    : 'transitionend',
		'OTransition'      : 'oTransitionEnd',
		'msTransition'     : 'MSTransitionEnd',
		'transition'       : 'transitionend'
	}
	this.transEndEventName = this.transEndEventNames[ Modernizr.prefixed('transition') ];
	
	//return self
	return this;
}
/* ------------------------------------------------------------------------------ */
/* common - mqStates */
/* ------------------------------------------------------------------------------ */
var mqStates = {
	max960:	'only screen and (max-width:960px)',
	max800:	'only screen and (max-width:800px)',
	max640:	'only screen and (max-width:640px)',
	max500:	'only screen and (max-width:500px)',
	max400:	'only screen and (max-width:400px)',
	max320:	'only screen and (max-width:320px)'
}
/* ------------------------------------------------------------------------------ */
/* common - insert First and Last Child */
/* ------------------------------------------------------------------------------ */
function insertFirstLastChild(selection) {
	var $tgts = $(selection);//cache selection
	$.each($tgts,function(idx,ele){//go through all selected items
		var $ele = $(ele),//cache current item
			$fstChild = $ele.find('> :first-child'),//find and cache first-child
			$lstChild = $ele.find('> :last-child');//find and cache last-child
		//add class if not already
		if (!$fstChild.hasClass('first-child')) { $fstChild.addClass('first-child'); }
		if (!$lstChild.hasClass('last-child')) { $lstChild.addClass('last-child'); }
	});	
}
/* ------------------------------------------------------------------------------ */
/* common - initCSS3PIE */
/* ------------------------------------------------------------------------------ */
function initCSS3PIE() {
	var oldIE = $('html').hasClass('oldie'),
		triggerCLS = 'css3pie';
	if ( oldIE && window.PIE ) {
		$.each( $('.' + triggerCLS), function(idx, ele){
			PIE.attach(ele);
		});
	} else {
		return false;	
	}
}
/* ------------------------------------------------------------------------------ */
/* common - initAutoEllipsis */
/* ------------------------------------------------------------------------------ */
function initAutoEllipsis( cls ) {
	//vars
	var triggerCLS = cls || 'autoellipsis',
		$ellipsis = $('.' + triggerCLS),
		opts = {
			ellipsis: 	'...'	,
			setTitle: 	'onEllipsis',
			live: 		true
		};
	//cancel if no items found
	if ( !$ellipsis.length ) return false;
	//init plugin
	$ellipsis.ellipsis( opts );
}
/* ------------------------------------------------------------------------------ */
/* common - cssAnim (working specifically with animate.css) */
/* ------------------------------------------------------------------------------ */
function cssAnim(target,anim) {
	if ( !Modernizr.cssanimations || !target.length || !anim ) return false;
	var $target = target,
		animCls = anim,
		scopeCls = 'animated',
		cleanTarget = function(){ $target.removeClass(scopeCls).removeClass(animCls); },
		updateTarget = function(){ cleanTarget(); $target.addClass(scopeCls).addClass(animCls); },
		delay;
	updateTarget();
	delay = window.setTimeout( function(){ cleanTarget() }, 1300 );
}
/* ------------------------------------------------------------------------------ */
/* common - matchHeights */
/* ------------------------------------------------------------------------------ */
function matchHeights(tgt, noAutoValid, consistentPadding) {
	
	//check if parameters are valid
	if (!$(tgt).length || $(tgt).length < 2 || $('html').hasClass('oldie')) return false;
	
	//create global obj
	var matchGrpObj = {};

	//obj properties
	matchGrpObj.$targets = $(tgt);
	matchGrpObj.property = 'height';
	matchGrpObj.noAutoValid = noAutoValid;
	matchGrpObj.valid = true;
	matchGrpObj.maxHeight = 0;
	matchGrpObj.treshold = 98;
	matchGrpObj.delay = 600;//for lagging page rendering
	
	//functions - validToMatch
	matchGrpObj.validToMatch = function(){
		if ( this.noAutoValid ) return false;//skip validation if no autoValid
		this.valid = true;
		$.each( this.$targets, function( idx, ele ) {
			var $ele = $(ele),
				$parent = $ele.parent();
				pct = Math.round( $ele.innerWidth() / $parent.width() * 100 );
			if ( pct > matchGrpObj.treshold ) {
				matchGrpObj.valid = false;
			}
		});
	};
	
	//functions - updateMaxHeight
	matchGrpObj.updateMaxHeight = function(){
		this.maxHeight = 0;
		$.each( this.$targets, function( idx, ele ) {
			var $ele = $(ele).css('height','auto'),
				eleH,
				elePad = parseInt($ele.css('padding-top'), 10) + parseInt($ele.css('padding-bottom'), 10);
			//use height if elems have padding, otherwise use innerHeight
			matchGrpObj['ele'+idx+'Pad'] = elePad;
			if ( elePad != 0 ) {
				eleH = $ele.height();
			} else {
				eleH = $ele.innerHeight();
			}
			if (eleH > matchGrpObj.maxHeight) {
				matchGrpObj.maxHeight = eleH;
			}
		});
	};
	
	//functions - setMaxHeight
	matchGrpObj.setMaxHeight = function(){
		matchGrpObj.validToMatch();//check if targets are valid
		matchGrpObj.updateMaxHeight();//update max height value
		//console.log(this.valid);
		$.each(matchGrpObj.$targets, function(idx,ele){
			var $ele = $(ele),
				elePad = matchGrpObj['ele'+idx+'Pad'];
				//console.log(elePad);
			if ( matchGrpObj.valid ) {
				//JX: this logic is not perfect, need improvement
				consistentPadding ? $ele.height( matchGrpObj.maxHeight ) : $ele.height( matchGrpObj.maxHeight - elePad ); 
				//$(ele).animate( {'height': String(matchGrpObj.maxHeight) + 'px' }, 600, function(){  } );
			} else {
				$ele.css( 'height', 'auto' );
			}
		});
	};
	
	//functions - init
	matchGrpObj.init = function(){
		setTimeout( this.setMaxHeight, this.delay );
		$(window).bind('resize', this.setMaxHeight );
	};
	
	//init obj
	matchGrpObj.init();
	
	//retunr global obj
	return matchGrpObj;
	
}