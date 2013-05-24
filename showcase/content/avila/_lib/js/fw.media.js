/* ------------------------------------------------------------------------------ */
/* initVideo */
/* ------------------------------------------------------------------------------ */
function initVideos(vidBtnCls) {
	//vars
	var videos = { count:0, opts:{} },
		videoBtnCls = vidBtnCls || '.btnThumbVid',		
		$videoBtns = $(videoBtnCls),
		
		//layout functions
		setVideoTop = function (vidObj){
			var $container = vidObj.container,
				$parent = $container.parent(),
				parentScroll = $parent.scrollTop();
				vidTop = Math.round( $parent.offset().top + $(window).scrollTop() );
			//console.log( vidTop );
			$container.css( 'top', vidTop + 'px' );
		},
			
		//tech solution functions
		getFlashFormat = function(vidObj){
			var format = '';
			if (vidObj.src.flash.indexOf('flv')!=-1) { format = 'flv'; } 
			else if (vidObj.src.flash.indexOf('f4v')!=-1) {	format = 'f4v';	}
			else if (vidObj.src.flash.indexOf('mp4')!=-1) {	format = 'mp4';	} 
			else { format = undefined; }
			return format;
		},
		updateSolution = function(vidObj){
			if (Modernizr.video.h264 && vidObj.src.mp4) { vidObj.solution.tech = 'html5'; vidObj.solution.format = 'mp4'; } 
			else if (Modernizr.video.ogg && vidObj.src.ogg) { vidObj.solution.tech = 'html5'; vidObj.solution.format = 'ogg'; }
			else if (Modernizr.video.webm && vidObj.src.webm) { vidObj.solution.tech = 'html5'; vidObj.solution.format = 'webm'; }
			else if (swfobject.hasFlashPlayerVersion('10.0.0') && vidObj.src.flash) { vidObj.solution.tech = 'flash'; vidObj.solution.format = getFlashFormat(vidObj); }
			else { vidObj.solution.tech = vidObj.solution.format = undefined; }
		},
		
		//code templates
		flashPlayer_Ops = {
			debug:"0",
			movie:"_lib/swf/vidplayer_multi_purpose_v2.swf", 
			bgcolor:"#000000", 
			tint:"#0083c9", 
			loadBarTint:"#666666",
			autoplay:"1",
			mediaType:"Progressive",
			stream:"{url}",
			flashVars:null
		},
		vidContainer_tmpl = "<div id='' class='videoContainer videoContainerPopup nfp'><div class='videoBg'><div id='' class='video'><video id='' class='videoHTML5 video-js vjs-fw-skin' width='' height='' controls='controls' preload='auto'></video><div id='' class='videoFlash'><div id='swfobjectToReplace'><p class='noflash'><b>Please <a href='http://get.adobe.com/flashplayer/' target='_blank'>Install Adobe Flash Player to view this content.</a></b></p></div></div></div></div></div>";
		//<source type='video/mp4' src=''><source type='video/ogg' src=''><source type='video/webm' src=''>
	
	//update videos obj
	videos.currentVideo = '';
	videos.injectionTarget = $('#container');
	videos.noSolution = "<p style='text-align:center;'><b>It seems there's no supported video playback solution installed for your browser, <br/> please upgrade your browser or <a href='http://get.adobe.com/flashplayer/' target='_blank'>Install Adobe Flash Player.</a></b></p>";
	videos.on = {};
	videos.opts.speed = 300;
	
	//-------------------------------------------------------------------------------------
	//function - kill video
	//-------------------------------------------------------------------------------------
	videos.killVideo = function(vidObj){
		//stop on invalid vidObj
		if (!vidObj) { return false; }
		//console.log('[videos.killVideo]: Try killing '+vidObj.ref);
		//remove instance if exist
		if (vidObj && vidObj.container && vidObj.container.length) {
			vidObj.container.fadeOut(/*videos.opts.speed*/0,function(){ //fade instance
				if (vidObj.solution.tech == 'flash') { swfobject.removeSWF(vidObj.player); } //properly remove swf obj using swfobject
				if (vidObj.solution.tech == 'html5') { vidObj.player.destroy(); } //properly remove videoJS player from DOM
				vidObj.on = false;
				vidObj.player = null;
				vidObj.container.remove(); 
				vidObj.container = null;
				videos.currentVideo = '';
				delete videos.on[vidObj.ref];
				//console.log('[videos.killVideo]: Killed '+vidObj.ref);
			});
		}
	};
	
	//-------------------------------------------------------------------------------------
	//function - killAllVideos (temp)
	//-------------------------------------------------------------------------------------
	videos.killAllVideos = function(){//function to kill all videos
		console.log('Try killing all videos');
		var count = Number(videos.count);//get total count
		for (var i=1; i<=count; i++) {//kill all
			videos.killVideo(videos['video'+i]);
		}
	};
	
	//-------------------------------------------------------------------------------------
	//function - initClickOut (temp)
	//-------------------------------------------------------------------------------------
	videos.initClickOut = function(){//function to init click out
		$('#container').bind('click',function(e) {//use '#container' element to be compatible on iOS
			//e.preventDefault(); this will prevent all links and other functions
			//vars
			var tgt = e.target,//get event target DOM ele
				$vidsArea = $('.videoBg');//video player area
			//if event target DOM element not a child of the video area and trigger btns
			if (!$vidsArea.has(tgt).length && !$videoBtns.has(tgt).length) {
				console.log('Click Out on:', e.target);
				videos.killAllVideos();//kill all vids 
			}
		});	
	};
	
	
	//-------------------------------------------------------------------------------------
	//function - play video
	//-------------------------------------------------------------------------------------
	videos.playVideo = function(vidObj){
		//console.log('[videos.playVideo]: Try playing '+vidObj.ref);
		
		//stop if this video is already playing or there is a currentVideo playing
		if (vidObj.on) { 
			//console.log('[videos.playVideo]: Already playing '+vidObj.ref);
			//console.log('---------------------------------------------------');
			return false; 
		}
		
		//disable all trigger btns
		disableTriggerBtns();
		
		//kill current video
		videos.killVideo(videos[videos.currentVideo]);
		
		//assign current video
		videos.currentVideo = vidObj.ref;
			
		//function - enable STEP 3 
		function enableVideo(){			
			//enable player
			if (vidObj.solution.tech == 'html5') {
				//init videoJS and assign object reference
				vidObj.player = _V_(vidObj.ref+"HTML5", {}, function(){ 
					//console.log('Video'+vidID+': VideoJS Called'); 
				});
				//videoJS obj ready
				vidObj.player.ready(function(){ 
					//manual autoplay 
					vidObj.player.play();
					//showing video
					vidObj.container.fadeIn(videos.opts.speed, function(){ 
						enableTriggerBtns();
						//console.log('[videos.playVideo]: Playing '+vidObj.ref);
						//console.log('---------------------------------------------------');
					});
				});
			}
			else if (vidObj.solution.tech == 'flash') {
				//assign video container jQuery object as player reference
				vidObj.player = vidObj.ref+'FlashObj';	
				//showing video
				vidObj.container.fadeIn(videos.opts.speed, function(){ 
					enableTriggerBtns();
					//console.log('[videos.playVideo]: Playing '+vidObj.ref);
					//console.log('---------------------------------------------------');
				});			
			} else {
				vidObj.container.fadeIn(videos.opts.speed, function(){ 
					enableTriggerBtns();
					//console.log('[videos.playVideo]: Playing '+vidObj.ref);
					//console.log('---------------------------------------------------');
				});	
			}
		}
		
		//function - injection STEP 2 
		function injectVideo($vidContainer) {
			//prepare container source
			if (vidObj.solution.tech == 'html5') {
				//vars
				var $vidHTML5 = $vidContainer.find('video');
				
				//clean container
				$vidContainer.find('.videoFlash').remove();
				
				//update HTML5 video elem
				$vidHTML5
					.attr('id',vidObj.ref+'HTML5')
					.attr('width',vidObj.src.width)
					.attr('height',vidObj.src.height);
				vidObj.src.poster ? $vidHTML5.attr('poster',vidObj.src.poster) : $vidHTML5.attr('poster','')
				if ( vidObj.solution.format == 'mp4' ) {
					$vidHTML5.append("<source type='video/mp4' src='"+vidObj.src.mp4+"'>");
					$vidHTML5.attr('src',vidObj.src.mp4);
					//console.log('mp4');
					//$vidHTML5.find('source[type="video/mp4"]').attr('src',vidObj.src.mp4);
					//$vidHTML5.find('source[type="video/ogg"]').remove();
					//$vidHTML5.find('source[type="video/webm"]').remove(); 				
				} else if ( vidObj.solution.format == 'ogg' ) {
					$vidHTML5.append("<source type='video/ogg' src='"+vidObj.src.ogg+"'>");
					$vidHTML5.attr('src',vidObj.src.ogg);
					//console.log('ogg');
					//$vidHTML5.find('source[type="video/mp4"]').remove();
					//$vidHTML5.find('source[type="video/ogg"]').attr('src',vidObj.src.ogg);
					//$vidHTML5.find('source[type="video/webm"]').remove(); 	
				} else if ( vidObj.solution.format == 'webm' ) {
					$vidHTML5.append("<source type='video/webm' src='"+vidObj.src.webm+"'>");
					$vidHTML5.attr('src',vidObj.src.webm);
					//console.log('webm');
					//$vidHTML5.find('source[type="video/mp4"]').remove();
					//$vidHTML5.find('source[type="video/ogg"]').remove();
					//$vidHTML5.find('source[type="video/webm"]').attr('src',vidObj.src.webm); 	
				}
			}
			else if (vidObj.solution.tech == 'flash') {				
				//vars
				var $vidFLASH = $vidContainer.find('.videoFlash'),
					//$vidFLASHObj = $vidFLASH.find('#swfobjectToReplace'),
					flashvars = {},
					params = {},
					attributes = {};
								
				//clean container
				$vidContainer.find('.videoHTML5').remove();
				
				//update FLASH video elem
				$vidFLASH.attr('id',vidObj.ref+'Flash');
				//update flashPlayer options
				flashPlayer_Ops.stream = vidObj.src.flash;
				flashPlayer_Ops.flashVars = "debug="+flashPlayer_Ops.debug;
				flashPlayer_Ops.flashVars += "&movieW="+vidObj.src.width;
				flashPlayer_Ops.flashVars += "&movieH="+vidObj.src.height;
				flashPlayer_Ops.flashVars += "&tint="+flashPlayer_Ops.tint;
				flashPlayer_Ops.flashVars += "&loadBarTint="+flashPlayer_Ops.loadBarTint;
				flashPlayer_Ops.flashVars += "&autoplay="+flashPlayer_Ops.autoplay;
				flashPlayer_Ops.flashVars += "&mediaType="+flashPlayer_Ops.mediaType;
				flashPlayer_Ops.flashVars += "&stream="+flashPlayer_Ops.stream;
				//update flashPlayer params
				params.allowScriptAccess = 'sameDomain';
				params.allowFullScreen = 'true';
				params.movie = flashPlayer_Ops.movie;
				params.quality = 'high';
				params.bgcolor = flashPlayer_Ops.bgcolor;
				params.flashVars = flashPlayer_Ops.flashVars;
				//update flashPlayer attributes	
				attributes.id = vidObj.ref+'FlashObj';
				attributes.align = 'top';
				attributes.flashvars = flashPlayer_Ops.flashVars;
			}
			else {//no solution
				//update container 
				$vidContainer.empty().append(videos.noSolution);
			}
			
			//inject to DOM
			videos.injectionTarget/*.empty()*/.append($vidContainer);
			vidObj.container = $('#'+vidObj.ref+'Container');
			vidObj.on = videos.on[vidObj.ref] = true;
									
			//init swfobject
			if (vidObj.solution.tech == 'flash') {	
				//console.log('[injectVideo]: flashvars='+attributes.flashvars);
				swfobject.embedSWF(flashPlayer_Ops.movie,'swfobjectToReplace',vidObj.src.width,vidObj.src.height,"10.0.0",false,flashvars,params,attributes);
			}
				
			//enable video container
			enableVideo();
			
			//set video container obj top
			setVideoTop(vidObj);
			
		}
			
		//function - injection STEP 1
		function injectVideoContainer(){
			//getting html template
			var $vidContainer = $(vidContainer_tmpl);
			//prepare video container obj
			$vidContainer
				.attr('id',vidObj.ref+'Container')
				.css({ 'display':'none' })
				.addClass( 'videoContainer' + vidObj.src.width + vidObj.src.height );
			$vidContainer.find('.video').attr('id',vidObj.ref);
			//inject player obj
			injectVideo($vidContainer);
		}
		
		//init function sequence
		injectVideoContainer();
		
	};
	
	//-------------------------------------------------------------------------------------
	//function - triggerBtnHandler 
	//-------------------------------------------------------------------------------------
	function triggerBtnHandler(vidObj,e) {
		//if (!vidObj.on) { Popup.popIn(e.currentTarget); }//pop only when video is not on
		videos.playVideo(vidObj);
	}
	
	function disableTriggerBtns() {
		$videoBtns.unbind('click');
		$videoBtns.bind('click',function(e){
			e.preventDefault();
		});
	}
	function enableTriggerBtns() {
		$videoBtns.unbind('click');
		$.each($videoBtns,function(idx,ele){
			var vidObj = videos['video'+(idx+1)];
			vidObj.triggerBtn.bind('click',function(e){ 
				e.preventDefault();
				triggerBtnHandler(vidObj,e);
			});
		});
	}
	
	//-------------------------------------------------------------------------------------
	//init
	//-------------------------------------------------------------------------------------
	
	//init each video object
	$.each($videoBtns,function(idx,ele){
		//vars
		var vidObj = videos['video'+(idx+1)] = {//instance obj
				container:null,
				vidID:(idx+1),
				ref:'',
				triggerBtn:$(ele),
				solution:{ tech:'', format:'' },
				player:null,
				src:{}
			};
		
		//updating videoObj from trigger btn
		vidObj.on = false;
		vidObj.ref = 'video'+vidObj.vidID;
		vidObj.src.width = vidObj.triggerBtn.attr('data-w');
		vidObj.src.height = vidObj.triggerBtn.attr('data-h');
		vidObj.src.mp4 = vidObj.triggerBtn.attr('data-src-mp4');
		vidObj.src.ogg = vidObj.triggerBtn.attr('data-src-ogv');
		vidObj.src.webm = vidObj.triggerBtn.attr('data-src-webm');
		vidObj.src.flash = vidObj.triggerBtn.attr('data-src-flash');
		vidObj.src.poster = vidObj.triggerBtn.find('img').attr('src');
		//updating videoObj - tech and solution
		updateSolution(vidObj);
		
		//trigger btn
		vidObj.triggerBtn.bind('click',function(e){ 
			e.preventDefault();
			triggerBtnHandler(vidObj,e);
		});
		
		//adding instance to videos.count
		videos.count++;
	});
	
	//init clickout
	videos.initClickOut();
	
	//return videos collection obj
	return videos;
}
/* ------------------------------------------------------------------------------ */
/* initStaticVideos */
/* ------------------------------------------------------------------------------ */
function initStaticVideos(vidCls) {
	//vars
	var videos = {'count':0},//collection obj
		videoCls = vidCls || '.videoContainer';//get video container classes or go default
	if (!$(videoCls).length) return videos;//check video container and end if none found
		
	//define vars
	var $videoContainers = $('.videoContainer'),
		
		//playback functions
		playVideo = function(vidObj){
			if (vidObj.solution.tech == 'html5') {
				vidObj.player.play();
			} else if (vidObj.solution.tech == 'flash') {
				if(swfReady) vidObj.player.playVideo();
				//console.log('Playing: [video'+vidObj.objid+'] (Flash)'); //put here due to flash pauseVideo() has no callback
			}
		},
		pauseVideo = function(vidObj){
			if (vidObj.solution.tech == 'html5') {
				vidObj.player.pause();
			} else if (vidObj.solution.tech == 'flash') {
				if(swfReady) vidObj.player.pauseVideo();
				//console.log('Paused: [video'+vidObj.objid+'] (Flash)'); //put here due to flash pauseVideo() has no callback
			}
		},
		pauseOtherVideos = function(id){
			var count = Number(videos.count);
			for (var i=1; i<=count; i++) {
				if (i+'' != id) {
					//console.log('Try pausing others: [video'+i+']');
					pauseVideo(videos['video'+(i+'')]);
				}
			}
		},
		pauseAllVideos = videos.pauseAll = function(){
			//console.log('Try pausing all videos');
			var count = Number(videos.count);
			for (var i=1; i<=count; i++) {
				pauseVideo(videos['video'+(i+'')]);
			}
			return videos;
		},
		
		//tech solution functions
		getFlashFormat = function(vidObj){
			var format = '';
			if (vidObj.src.flash.indexOf('flv')!=-1) { format = 'flv'; } 
			else if (vidObj.src.flash.indexOf('f4v')!=-1) {	format = 'f4v';	}
			else if (vidObj.src.flash.indexOf('mp4')!=-1) {	format = 'mp4';	} 
			else { format = undefined; }
			return format;
		},
		noSolution = function(id){//function for no playback solution updates
			//console.log('Video'+id+': No Playback Solution!');		
		},
		updateSolution = function(vidObj){
			if (Modernizr.video.h264 && vidObj.src.mp4) { vidObj.solution.tech = 'html5'; vidObj.solution.format = 'mp4'; } 
			else if (Modernizr.video.ogg && vidObj.src.ogg) { vidObj.solution.tech = 'html5'; vidObj.solution.format = 'ogg'; }
			else if (Modernizr.video.webm && vidObj.src.webm) { vidObj.solution.tech = 'html5'; vidObj.solution.format = 'webm'; }
			else if (vidObj.src.flash) { vidObj.solution.tech = 'flash'; vidObj.solution.format = getFlashFormat(vidObj); }
			else { vidObj.solution.tech = vidObj.solution.format = undefined; }
		},
		
		//group functions	
		getGroupSiblings = function($vid) {//get group siblings
			var arr = [];
			$.each($vid.siblings('.videoContainer'),function(idx,ele){
				var index = $videoContainers.index($(ele)) + 1;
				arr.push(videos['video'+index]);
			});
			return arr;
		},
		initGroup = function(vidObj,odr) {//init group, check obj and hide if not the specified/1st one			
			var order = odr || 1;
			if ( order > 0 ) {//process and show selected
				if (vidObj.groupOrder != order) {
					pauseVideo(vidObj);//pause
					vidObj.container
						//.hide() manipulating display property on video elements causes troubles in webkit
						.removeClass('isCurrent')
						.addClass('notCurrent');
					vidObj.triggerBtn
						.parent('li')
						.removeClass('isCurrent')
						.addClass('notCurrent');
				} else {
					vidObj.container
						//.show() manipulating display property on video elements causes troubles in webkit
						.removeClass('notCurrent')
						.addClass('isCurrent');
					vidObj.triggerBtn
						.parent('li')
						.removeClass('notCurrent')
						.addClass('isCurrent');	
				}
			} else {//process and none selected
				pauseVideo(vidObj);//pause
				vidObj.container
					//.hide() manipulating display property on video elements causes troubles in webkit
					.removeClass('isCurrent')
					.addClass('notCurrent');
				vidObj.triggerBtn
					.parent('li')
					.removeClass('isCurrent')
					.addClass('notCurrent');
			}
		},
		updateGroup = function(vidObj){//update group, hide others except the specified one
			for(var i=0; i<vidObj.groupSiblings.length; i++){//hide siblings
				initGroup(vidObj.groupSiblings[i], vidObj.groupOrder);
			}
			initGroup(vidObj, vidObj.groupOrder);//show self
		},
		
		//header function
		showVidWallHeader = function(vidObj){
			//vars
			var $header = vidObj.vidWallHeader,
				$label = $header.find('.label'),
				$btnBack = $header.find('.btnBack'),
				labelText = $.trim(vidObj.triggerBtn.find('.label').text());
			
			//show header
			$label.text(labelText);//pop label
			$header.show();//show header
			
			//enable back btn
			$btnBack.one('click', function(e){
				e.preventDefault();
				$label.empty();//clean label
				$header.hide();//hide header
				initGroup(vidObj,-1);//pure processing, show none
			});
		},
		
		//control functions
		initTriggerBtn = function(vidObj){
			vidObj.triggerBtn.bind('click',function(e){
				e.preventDefault();
				vidObj.groupSiblings = getGroupSiblings(vidObj.container);
				updateGroup(vidObj);
				
				//if video wall
				if (vidObj.vidWallMode) {
					showVidWallHeader(vidObj);
					playVideo(vidObj);
				}
			});
		};
	
	//process btnVideo instances
	$.each($videoContainers,function(idx,ele){
		//vars
		var $ele = $(ele),//video container
			$multiVidContainer = $ele.parent('.multiVideoContainer'),//find multiVideo group container
			$vidWallContainer = $ele.parent('.videoWallContainer'),//find videoWall container
			$groupContainer = $multiVidContainer.length ? $multiVidContainer : $vidWallContainer.length ? $vidWallContainer : undefined,//define group container 
			$triggerBtns = $multiVidContainer.length ? $multiVidContainer.find('.btnMultiVideo') : $vidWallContainer.length ? $vidWallContainer.find('.btnVideoWall') : undefined,//trigger button
			groupID = $groupContainer ? $groupContainer.attr('id') : undefined,//group id
			uuid = $ele.attr('id').replace('video','').replace('Container',''),//uuid
			flashvars = $ele.find('object').attr('flashvars'),//flashvars
			vidID = (idx+1)+'',//order from current page
			vidObj = videos['video'+vidID] = {//instance obj
				'container':$ele,
				'id':$ele.attr('id'),
				'objid':idx+1,
				'uuid':uuid,
				'group':groupID ? groupID.replace('videoGroup','') : null,
				'groupCount':groupID ? $groupContainer.find('.videoContainer').length : null,
				'groupOrder':groupID ? ($groupContainer.find('.videoContainer').index(ele))+1 : null,
				'groupSiblings':groupID ? [] : null,
				'triggerBtn':groupID ? $('#btnVideo'+uuid) : null,
				'solution':{'tech':'','format':''},
				'player':{},
				'src':{},
				'vidWallMode':$vidWallContainer.length ? true : false,
				'vidWallHeader':$vidWallContainer.length ? $vidWallContainer.find('.videoWallHeader') : undefined
			};
				
		//updating videoObj sources from supplied video sources
		vidObj.src.mp4 = $ele.find('source[type="video/mp4"]').attr('src');
		vidObj.src.ogg = $ele.find('source[type="video/ogg"]').attr('src');
		vidObj.src.webm = $ele.find('source[type="video/webm"]').attr('src');
		vidObj.src.flash = flashvars.substring(flashvars.indexOf('stream=')+7);
		if (vidObj.src.flash.indexOf('flv')!=-1 || vidObj.src.flash.indexOf('f4v')!=-1 || vidObj.src.flash.indexOf('mp4')!=-1) {
			if (vidObj.src.flash.indexOf('&')!=-1) {//check if has additional vars after stream
				vidObj.src.flash = vidObj.src.flash.replace(vidObj.src.flash.substring(vidObj.src.flash.indexOf('&')),'');//trim additional vars after stream
			}
		} else {
			vidObj.src.flash = undefined;
		}
				
		//-------------------------------------------------------------------------------------
		//function - initVideo
		//-------------------------------------------------------------------------------------
		function initVideo(){
			//getting container
			var $vidContainer = $('#'+vidObj.id),
				tech = vidObj.solution.tech;
			if (tech == 'html5') { //html5 only
				$vidContainer.find('.videoFlash').remove();
				//init videoJS and assign object reference
				vidObj.player = _V_($vidContainer.find('.videoHTML5').attr('id'), {}, function(){ 
					//console.log('Video'+vidID+': VideoJS Called'); 
				});
				//videoJS obj ready
				vidObj.player.ready(function(){ 
					//console.log('Video'+vidID+': VideoJS Player Ready')
					//attach player events
					vidObj.player.addEvent('play',function(){
						pauseOtherVideos(vidID);	
					});
					vidObj.player.addEvent('pause',function(){
						//console.log('Paused: [video'+vidID+']');
					});
				});
			}
			else if (tech == 'flash') { //flash only
				$vidContainer.find('.videoHTML5').remove();
				vidObj.player = $vidContainer.find('object')[0];
			}
			else { //no solution
				$vidContainer.remove();
				vidObj.player = undefined;
			}
			
			//updating group if in a group
			if (groupID) {
				if (!vidObj.vidWallMode) {
					initGroup(vidObj);//process and show first
				} else {
					initGroup(vidObj,-1);//pure processing, show none
				}
				initTriggerBtn(vidObj);
			}
			
		}
		
		//updating videoObj
		updateSolution(vidObj);
		
		//init current video
		initVideo();
		
		//adding instance to videos.count
		videos.count++;
	});
	
	//console.log('Total Videos Found: '+videos.count,videos);
	return videos;//return videos collection obj
}

/* ------------------------------------------------------------------------------ */
/* initSlideshows */
/* ------------------------------------------------------------------------------ */
function initSlideshows(ssCls) {		
	
	//vars
	var slideshows = { 'count' : 0, 'hasTouch' : Modernizr.touch },//prepare container obj with count
		slideshowCls = ssCls || '.slideshow',//get slideshow element class or by default
		
		//function - go through container obj to pause all slideshows
		pauseAll = function(){
			for (var i=1; i<=slideshows.count; i++) {
				slideshows['slideshow'+i].cycle('pause');
			}
		},
		
		//function - updateCaption
		updateCaption = function(nextSlide, $tgt) {
			var $src = $(nextSlide).find('img:first'),
				captionText = $.trim($src.attr('alt'));
			$tgt
				.hide()
				.text(captionText)
				.fadeIn(300);
		};
	
	//only proceed if found slideshow element
	if (!$(slideshowCls).length) return false;
	
	//going through all slideshow elements
	$.each($(slideshowCls),function(idx,ele){
		
		//vars
		var $ele = $(ele),//cache element
			autoplay = ($ele.attr('data-autoplay')=='1') ? true : false,//get autoplay setting
			effect = $ele.attr('data-effect') ? effect = $ele.attr('data-effect') : effect = 'fade',//get effect setting
			$btnToggle = $ele.find('.btnToggle'),//cache toggle button
			$caption = $ele.find('.caption'),//cache caption container
			hasCaption = $caption.length,//determine if has caption
			
			//functions - cycle plugin handlers
			onPaused = function( cont, opts, byHover ){
				//pause event callback to swap states
				!byHover && $btnToggle.removeClass('btnTogglePause').html('<span>Play</span>');
			},
			onResumed = function( cont, opts, byHover ){
				//resume event callback to swap states
				!byHover && $btnToggle.addClass('btnTogglePause').html('<span>Pause</span>');
			},
			onBefore = function( currSlide, nextSlide, opts, forwardFlag ){//onBefore transition handler
				//update caption text if has caption
				if (hasCaption) updateCaption(nextSlide, $caption);
			},
			
			//init cycle plugin
			slideshowObj = slideshows['slideshow'+(idx+1)] = $ele.cycle({//init cycle for element and save to obj 
				fx:     	effect, 
				speed:  	'slow', 
				timeout: 	6000,
				nowrap:		0,
				prev:   	$ele.find('.btnPrev'), 
				next:   	$ele.find('.btnNext'),
				pager:		$ele.find('.pager'),
				slideExpr:	$ele.find('.slide'),
				before:		onBefore,
				paused: 	onPaused,
				resumed:	onResumed
			});		
		
		//pause/play slideshow based on autoplay, play from 1st slide
		slideshowObj.cycle(autoplay ? 'resume' : 'pause', false);
		
		//add to slideshow count
		slideshows.count++;
		
		//toggle button behaviors
		$btnToggle.click(function(e) {
			e.preventDefault();
			var paused = slideshowObj.is(':paused');//get slideshow pause state
			//if (paused) pauseAll();//pause all slideshows if click to play, disabled now with autoplay setting
			slideshowObj.cycle(paused ? 'resume' : 'pause', true);//play/pause slideshow, play from next slide after pause
		})
		
		//bind events for touch devices
		if ( slideshows.hasTouch && typeof($.fn.touchSwipe) == 'function' ) {
			/*using jquery mobile touch*/
			$ele.touchSwipe(function(dir) {
				if ( dir == 'left' ) 		{slideshowObj.cycle('next'); }
				else if ( dir == 'right' ) 	{slideshowObj.cycle('prev'); }
			});
		}
		
	});
	
	//return container obj
	return slideshows;

}