/* ------------------------------------------------------------------------------ */
/* initSelectBox */
/* ------------------------------------------------------------------------------ */
function initSelectBox(cls) {
		
	//vars
	var selectCls = cls || '.selectBox',
		$selectBoxes = $(selectCls),
		iconOpenCls = 'icon icon-chevron-up',
		iconCloseCls = 'icon icon-chevron-down';
		
	//exit if no instance found
	if ( !$selectBoxes.length ) return false;
	
	//function - initCal
	function initSelect(idx, ele) {
		
		//vars
		var $select = $(ele),
			settings = { 
				menuTransition:	'slide',	//[default,slide,fade] - the show/hide transition for dropdown menus
				menuSpeed:		'fast',		//[slow,normal,fast] - the show/hide transition speed
				loopOptions:	true		//[boolean] - flag to allow arrow keys to loop through options
			},
			toggleIcon = function(isOpen) {
				var $dropdown = $( $select.selectBox('control') ),
					$btn = $dropdown.find('.selectBox-arrow');
				if ( isOpen ) { 
					$btn.removeClass(iconCloseCls);
					$btn.addClass(iconOpenCls); 
				} else {
					$btn.removeClass(iconOpenCls); 
					$btn.addClass(iconCloseCls); 
				}
			};
		
		//init plugin
		$select
			.selectBox(settings)
			.bind({
				'open': 	function() { toggleIcon( true ); },
				'close':	function() { toggleIcon( false ); }
			});
			
		//add initial icon
		toggleIcon( false );
											
	}
	
	//loop through and process each instance
	$.each( $selectBoxes, initSelect );
	
}
/* ------------------------------------------------------------------------------ */
/* initCalendar */
/* ------------------------------------------------------------------------------ */
function initCalendar(cls) {
	
	//vars
	var calCls = cls || '.calendarView',
		$cals = $(calCls);
	
	//exit if no instance found
	if ( !$cals.length ) return false;
	
	//function - initCal
	function initCal(idx, ele) {
		
		var //common
			$cal = $(ele),
			$calBody = $cal.find('.calendarViewBody:first'),
			$calWeeks = $cal.find('.week'),
			$calDays = $cal.find('.day'),
			$calToday = $cal.find('.today:first'),
			$calEntries = $cal.find('.entries'),
			
			//view interaction
			$btnViewGrid = $cal.find('.btnViewGrid'),
			$btnViewList = $cal.find('.btnViewList'),
			view = $cal.attr('data-view'),
			lastSelectedView = view,
			noEvents,
			viewCls = { grid: 'calendarViewGrid', list: 'calendarViewList' },
			hasDataCls = 'hasData',
			selectedCls = 'selected',
			noEventsCls = 'showMsg noEvents',
						
			//function - checkHasData
			checkHasData = function() {
				
				//reset noEvents
				noEvents = true;
				
				//go through all entries containers to find data
				$.each($calEntries, function(idx, ele) {
					var $entries = $(ele),
						$day = $entries.parent('.day'),
						$weekends = $day.parent('.weekends'),
						$entry = $entries.find('.entry');
					if ($entry.length && !$day.hasClass('pastMonth') && !$day.hasClass('nextMonth')) {
						$day.addClass(hasDataCls);
						if ( $weekends.length ) $weekends.addClass(hasDataCls);
						noEvents = false;
					} else {
						$day.removeClass(hasDataCls);
						if ( $weekends.length && !$day.siblings('.day').hasClass('hasData') ) $weekends.removeClass(hasDataCls);
					}
				});
				
				//if no data at all
				if ( noEvents ) {
					$cal.addClass(noEventsCls);
				} else {
					$cal.removeClass(noEventsCls);
				}
				
			}
		
		/* ------------------------------------------------------------------------------ */
		/* grid view interaction */		
		
		//process week to get max height
		function setWeekHeight( idx, week ) {
			
			//vars
			var $week = $(week),
				$days = $week.find('> .day'),
				maxHeight = 0;
			
			//loop through week days to get max height
			$.each($days, function(idx,ele){
				var $day = $(ele),
					dayHeight = $day.outerHeight();
				if ( dayHeight > maxHeight ) {
					maxHeight = dayHeight	
				}
			});
			
			//apply max height to week
			$week.height( maxHeight );  
			
		}
		
		//loop through all weeks
		function setWeeksHeight() { 
			if (view == 'grid') { $.each($calWeeks, setWeekHeight);  }
		}
		
		/* ------------------------------------------------------------------------------ */
		/* view switching interaction */
		function setGridView(){
			view = 'grid';
			$cal
				.removeClass( viewCls.list )
				.addClass( viewCls.grid )
				.attr('data-view', 'grid');
			$btnViewList.removeClass('selected');
			$btnViewGrid.addClass('selected');
			setWeeksHeight();
		}
		function setListView(){
			view = 'list';
			$cal
				.removeClass( viewCls.grid )
				.addClass( viewCls.list )
				.attr('data-view', 'list');
			$btnViewGrid.removeClass('selected');
			$btnViewList.addClass('selected');
		}
		function initView() {
			//init view mode			
			updateView(view);
			//bind btnView
			$btnViewGrid.unbind().on('click', function(e){ 
				e.preventDefault();
				updateView('grid');
				lastSelectedView = 'grid';
			});
			$btnViewList.unbind().on('click', function(e){ 
				e.preventDefault();
				updateView('list');
				lastSelectedView = 'list';
			});
		}
		
		//updateView
		function updateView(mode) {
			//vars
			var forceList;
			//manually test forceList for oldie
			if ( $('html').hasClass('no-mediaqueries') ) {
				forceList = ( $(window).width() <= 640 ); 
			} else {
				forceList = Modernizr.mq(mqStates.max640);
			}
			//apply specified view mode
			view = mode || view;
			//apply layout
			if ( (!forceList && view == 'grid') || ( !forceList && view == 'list' && lastSelectedView == 'grid' && !mode ) ) {
				setGridView();
			} else {
				setListView();
			}
		}
		
		/* ------------------------------------------------------------------------------ */

		/* update */
		function update() {
			updateView();
		}
		
		/* ------------------------------------------------------------------------------ */
		/* init */
		function init() {
			checkHasData(); //update hasData class
			initView(); //init cal view
			$(window).bind('resize', update); //bind resize event handler
		}
		init();	
		
	}
	
	//loop through and process each instance
	$.each( $cals, initCal );
	
}
/* ------------------------------------------------------------------------------ */
/* initSuperBg */
/* ------------------------------------------------------------------------------ */
function initSuperBg() {
	
	//vars
	var slidesArr = [],
		effect = $('html').hasClass('ie7') ? 'none' : 'fade';
	
	//adding slide images
	slidesArr[0] = { image: '_lib/img/img-slide-1.jpg' }
	slidesArr[1] = { image: '_lib/img/img-slide-2.jpg' }
	slidesArr[2] = { image: '_lib/img/img-slide-3.jpg' }
	slidesArr[3] = { image: '_lib/img/img-slide-4.jpg' }
	slidesArr[4] = { image: '_lib/img/img-slide-5.jpg' }
	slidesArr[5] = { image: '_lib/img/img-slide-6.jpg' }
	
	//init supersized
	$.supersized({
		// Functionality
		slide_interval          :   6000,
		transition              :   effect, 			
		transition_speed		:	600,
												   
		// Components							
		slide_links				:	false,
		slides 					:  	slidesArr
	});
	
}
/* ------------------------------------------------------------------------------ */
/* initRandomBanner */
/* ------------------------------------------------------------------------------ */
function initRandomBanner(arr, $tgt) {
	
	//abort if no enough supply
	if ( !arr || !arr.length || !$tgt || !$tgt.length ) return false;
	
	//vars
	var randomID = Math.floor((Math.random()*arr.length)+1);
	
	//console.log(randomID);
	
	//assign random image to target
	$tgt.attr('src', arr[randomID-1] );

}
/* ------------------------------------------------------------------------------ */
/* initNav */
/* ------------------------------------------------------------------------------ */
function initNav() {
	
	//vars
	var $container = $('#container'),
		$nav = $('#nav'),
		$btnMenu = $('#btnNavMenu'),
		$icon = $btnMenu.find('.icon'),
		classes = [ 'active' ],
		icons = { plus: 'foundicon-plus', minus: 'foundicon-minus' },
		
		//function - clickOut
		clickOut = function(e) {
			if (!$nav.has($(e.target)).length) {
				$nav.removeClass( classes[0] );
				$icon
					.removeClass( icons.minus )
					.addClass( icons.plus );
			}
		};
	
	//interaction
	$btnMenu.on('click', function(e){
		e.preventDefault();
		$nav.toggleClass( classes[0] );
		if ( $nav.hasClass( classes[0] ) ) {
			$icon
				.removeClass( icons.plus )
				.addClass( icons.minus );
			//bind clickout for once
			setTimeout( function(){ $container.one('click',clickOut) }, 300 );
		} else {
			$icon
				.removeClass( icons.minus )
				.addClass( icons.plus );
		}
	});
	
}
/* ------------------------------------------------------------------------------ */
/* initHomeSections */
/* ------------------------------------------------------------------------------ */
function initHomeSections() {
	
	//vars
	var $secContainer = $('#content'),
		$secs = $secContainer.find('.section'),
		$sec1 = $('#secWelcome'),
		$sec2 = $('#secNews'),
		$sec3 = $('#secLinks'),
		classes = [ 'hover', 'active' ],
		icons = { plus: 'foundicon-plus', minus: 'foundicon-minus' },
		secArr = [ $sec1, $sec2, $sec3 ],
		speed = 600,
		touch = Modernizr.touch,
		transEndEventName = Platform.transEndEventName;
		
		//functions
		initSec = function(idx, ele){
			
			//var
			var $sec = $(ele),
				$header = $sec.find('.header'),
				$content = $sec.find('.content'),
				secID = idx+1,
				hoverCls = classes[0] + String(secID),
				activeCls = classes[1] + String(secID),
				headerH = 50,
				contentH = 0,
				secH = 0,
				
				//functions - updateVars
				updateVars = function() {
					headerH = 50; //$header.innerHeight()
					contentH = $content.innerHeight();
					secH = headerH + contentH;
				},
				
				//functions - mobileMode
				mobileMode = function() {
					var mode = Modernizr.mq('only screen and (max-width:640px)'); 
					return mode;
				},
				
				//functions - hoverOn
				hoverOn = function() {
					if (touch) return false;
					$secContainer.removeClass(hoverCls);
					$secContainer.addClass(hoverCls);
				},
				
				//functions - hoverOff
				hoverOff = function() {
					if (touch) return false;
					$secContainer.removeClass(hoverCls);
				},
				
				//functions - showContent
				showContent = function() {
					//show current section 
					$content
						.slideDown(speed, function(){});	
					$sec.siblings('.section')
						.each(function(idx,ele){
							var $content = $(ele).find('.content');
							$content
								.slideUp(speed);
						});
					
					//swap icons
					$sec.find( '.header > .icon' )
						.removeClass( icons.plus )
						.addClass( icons.minus );
					$.each($sec.siblings('.section'), function(idx,ele){
						var $icon = $(ele).find( '.header > .icon' );
						$icon.removeClass( icons.minus )
						$icon.addClass( icons.plus );
					});
				},
				
				//functions - hideContent
				hideContent = function() {
					//hide current section 
					$content
						.slideUp(speed);
					
					//swap icons
					$sec.find('.header > .icon')
						.removeClass( icons.minus )
						.addClass( icons.plus );
				},
				
				//functions - onClick
				onClick = function() {
					
					//if target is not active
					if ( !$secContainer.hasClass(activeCls) ) {
						//update active class
						$secContainer.removeClass( classes[1]+'1 '+classes[1]+'2 '+classes[1]+'3' );
						$secContainer.addClass(activeCls);
						
						//show content
						
						if ( !touch ) {
							showContent();
						} else {
							if ( mobileMode() ) {
								showContent();
							} else {
								$sec.one( transEndEventName, showContent );	
							}
						}
					} 
					//if target is active
					else {
						//update active class
						$secContainer.removeClass( classes[1]+'1 '+classes[1]+'2 '+classes[1]+'3' );
						
						//show content
						if ( !touch ) {
							hideContent();
						} else {
							if ( mobileMode() ) {
								hideContent();
							} else {
								$sec.one( transEndEventName, hideContent );	
							}
						}				
					}
						
				}
			
			//set initial section height
			$content.hide();
			
			//bind interaction
			if ( !touch ) $header.hoverIntent( hoverOn, hoverOff );
			$header.on('click', function(e){
				e.preventDefault();
				updateVars();
				onClick();
			});
						
		};
		
	//init interaction on each
	$.each($secs, initSec);
		
}
/* ------------------------------------------------------------------------------ */
/* init */
/* ------------------------------------------------------------------------------ */
function init(){
	
	//nav
	insertFirstLastChild('#nav');
	
	//interaction
	initNav();
	
	//template specific functions
	if ( $('body#home').length ) {
	
		initHome();
	
	} else {
		
		//sideNav
		insertFirstLastChild('#sideNav, #sideNav ul');
		
		//random banner
		initRandomBanner( (function(){
			var bannersArr = [],
				prefix = '_lib/img/img-banner-',
				format = '.jpg',
				total = 10;
			while ( total-- ) {
				bannersArr[total] = prefix + (total + 1) + format;
				//console.log( total, bannersArr[total] );
			}
			return bannersArr;
		})(), $('#bannerImg') );
		
		//calendar
		initCalendar();
	
		//initAutoEllipsis
		//initAutoEllipsis();
		
		//initSelectBox
		initSelectBox();
		
		//init match group
		MatchGroups = {};
		MatchGroups.enewsPods = matchHeights('#enewsEdition .content, #enewsSubscribe .content', true, false);
		
	}

	//css3pie rendering
	initCSS3PIE();
	
	//debug
	displayDebugInfo('#debugInfo');
	
}
function initHome(){
	
	//layout assistance
	
	//interactions	
	initSuperBg();
	initHomeSections();
	
}
/* DOM.ready */
$(document).ready(function(){ 
	Platform.addDOMClass();
	init();	
});
