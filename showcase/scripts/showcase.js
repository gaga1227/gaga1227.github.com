jQuery(document).ready(function() {

	/*
	*   Examples - manual call
	*/

	$("#example1").click(function() {
		$.fancybox({
			//'orig'		: $(this),
			'padding'		: 0,
			'href'			: 'http://farm3.static.flickr.com/2687/4220681515_cc4f42d6b9.jpg',
			'title'   		: 'Lorem ipsum dolor sit amet',
			'transitionIn'	: 'elastic',
			'transitionOut'	: 'elastic'
		});
    });
	
	$("#example2").click(function() {
		$.fancybox([
			'http://farm5.static.flickr.com/4044/4286199901_33844563eb.jpg',
			'http://farm3.static.flickr.com/2687/4220681515_cc4f42d6b9.jpg',
			{
				'href'	: 'http://farm5.static.flickr.com/4005/4213562882_851e92f326.jpg',
				'title'	: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
			}
		], {
			'padding'			: 0,
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'type'              : 'image',
			'changeFade'        : 100
		});
	});
    
    /*************************************************************************************************************************/
	//Web
    /*************************************************************************************************************************/
	$("#AIT").click(function() {
		$.fancybox([
			'content/WEB/ATOM-Web_An_Inconvenient_Truth_2006/ATOM-Web_An_Inconvenient_Truth_2006-09.png',
			'content/WEB/ATOM-Web_An_Inconvenient_Truth_2006/ATOM-Web_An_Inconvenient_Truth_2006-10.png',
			'content/WEB/ATOM-Web_An_Inconvenient_Truth_2006/ATOM-Web_An_Inconvenient_Truth_2006-11.png',
			'content/WEB/ATOM-Web_An_Inconvenient_Truth_2006/ATOM-Web_An_Inconvenient_Truth_2006-12.png',
			'content/WEB/ATOM-Web_An_Inconvenient_Truth_2006/ATOM-Web_An_Inconvenient_Truth_2006-13.png',
			'content/WEB/ATOM-Web_An_Inconvenient_Truth_2006/ATOM-Web_An_Inconvenient_Truth_2006-14b.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});
	
	$("#AITLIVE").fancybox({
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: 990,
		'height'			: 650,
		'scrolling'   		: 'auto'
	});
	
	$("#AITQUIZ").click(function() {
		$.fancybox([
			'content/WEB/ATOM-Web_An_Inconvenient_Truth_Quiz_2006/ATOM-Web_An_Inconvenient_Truth_Quiz_2006-01.png',
			'content/WEB/ATOM-Web_An_Inconvenient_Truth_Quiz_2006/ATOM-Web_An_Inconvenient_Truth_Quiz_2006-02.png',
			'content/WEB/ATOM-Web_An_Inconvenient_Truth_Quiz_2006/ATOM-Web_An_Inconvenient_Truth_Quiz_2006-03.png',
			'content/WEB/ATOM-Web_An_Inconvenient_Truth_Quiz_2006/ATOM-Web_An_Inconvenient_Truth_Quiz_2006-04.png',
			'content/WEB/ATOM-Web_An_Inconvenient_Truth_Quiz_2006/ATOM-Web_An_Inconvenient_Truth_Quiz_2006-05.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});
		
	$("#FW").click(function() {
		$.fancybox([
			'content/WEB/ATOM-Web_Freedom_Writers_2007/ATOM-Web_Freedom_Writers_2007-07.png',
			'content/WEB/ATOM-Web_Freedom_Writers_2007/ATOM-Web_Freedom_Writers_2007-09.png',
			'content/WEB/ATOM-Web_Freedom_Writers_2007/ATOM-Web_Freedom_Writers_2007-10.png',
			'content/WEB/ATOM-Web_Freedom_Writers_2007/ATOM-Web_Freedom_Writers_2007-12.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});
	
	$("#FWLIVE").fancybox({
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: 1200,
		'height'			: 790,
		'scrolling'   		: 'auto'
	});
	
	$("#HA").click(function() {
		$.fancybox([
			'content/WEB/ATOM-Web_Hunt_Angels_2006/ATOM-Web_Hunt_Angels_2006-10.png',
			'content/WEB/ATOM-Web_Hunt_Angels_2006/ATOM-Web_Hunt_Angels_2006-11.png',
			'content/WEB/ATOM-Web_Hunt_Angels_2006/ATOM-Web_Hunt_Angels_2006-17.png',
			'content/WEB/ATOM-Web_Hunt_Angels_2006/ATOM-Web_Hunt_Angels_2006-19.png',
			'content/WEB/ATOM-Web_Hunt_Angels_2006/ATOM-Web_Hunt_Angels_2006-20.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});	
	
	$("#HALIVE").fancybox({
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: 1200,
		'height'			: 800,
		'scrolling'   		: 'auto'
	});
	
	$("#TC").click(function() {
		$.fancybox([
			'content/WEB/ATOM-Web_Ten_Canoes_2006/ATOM-Web_Ten_Canoes_2006-01.png',
			'content/WEB/ATOM-Web_Ten_Canoes_2006/ATOM-Web_Ten_Canoes_2006-02.png',
			'content/WEB/ATOM-Web_Ten_Canoes_2006/ATOM-Web_Ten_Canoes_2006-04.png',
			'content/WEB/ATOM-Web_Ten_Canoes_2006/ATOM-Web_Ten_Canoes_2006-07.png',
			'content/WEB/ATOM-Web_Ten_Canoes_2006/ATOM-Web_Ten_Canoes_2006-09.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});
	
	$("#TCLIVE").fancybox({
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: 990,
		'height'			: 680,
		'scrolling'   		: 'auto'
	});
	
	$("#TCPE").click(function() {
		$.fancybox([
			'content/WEB/ATOM-Web_Ten_Canoes_Poster_Editor_2006/ATOM-Web_Ten_Canoes_Poster_Editor_2006-01.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});	
	
	$("#TCVE").click(function() {
		$.fancybox([
			'content/WEB/ATOM-Web_Ten_Canoes_Video_Editor_2006/ATOM-Web_Ten_Canoes_Video_Editor_2006-01.png',
			'content/WEB/ATOM-Web_Ten_Canoes_Video_Editor_2006/ATOM-Web_Ten_Canoes_Video_Editor_2006-02.png',
			'content/WEB/ATOM-Web_Ten_Canoes_Video_Editor_2006/ATOM-Web_Ten_Canoes_Video_Editor_2006-03.png',
			'content/WEB/ATOM-Web_Ten_Canoes_Video_Editor_2006/ATOM-Web_Ten_Canoes_Video_Editor_2006-04.png',
			'content/WEB/ATOM-Web_Ten_Canoes_Video_Editor_2006/ATOM-Web_Ten_Canoes_Video_Editor_2006-05.png',
			'content/WEB/ATOM-Web_Ten_Canoes_Video_Editor_2006/ATOM-Web_Ten_Canoes_Video_Editor_2006-06.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});	
	
	$("#CPC").click(function() {
		$.fancybox([
			'content/WEB/CPC-Web_Official_Site_2010/CPC-Web_Official_Site_2010-01.png',
			'content/WEB/CPC-Web_Official_Site_2010/CPC-Web_Official_Site_2010-03.png',
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300,
			'autoScale'			: false
		});
	});
	
	$("#CPCLIVE").fancybox({
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: 1000,
		'height'			: 680,
		'scrolling'   		: 'auto'
	});
	
	$("#GII").click(function() {
		$.fancybox([
			'content/WEB/etang-Web_Giftshop_Interactive_Intro_2004/etang-Web_Giftshop_Interactive_Intro_2004-01.png',
			'content/WEB/etang-Web_Giftshop_Interactive_Intro_2004/etang-Web_Giftshop_Interactive_Intro_2004-02.png',
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});
	
	$("#EG").click(function() {
		$.fancybox([
			'content/WEB/Evergreen-Web_Official_Site_2007/Evergreen-Web_Official_Site_2007-01.png',
			'content/WEB/Evergreen-Web_Official_Site_2007/Evergreen-Web_Official_Site_2007-02.png',
			'content/WEB/Evergreen-Web_Official_Site_2007/Evergreen-Web_Official_Site_2007-03.png',
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});	
	
	$("#FLM").click(function() {
		$.fancybox([
			'content/WEB/FinPa-Learning_Manager_2009/FinPa-Learning_Manager_2009-01.png',
			'content/WEB/FinPa-Learning_Manager_2009/FinPa-Learning_Manager_2009-02.png',
			'content/WEB/FinPa-Learning_Manager_2009/FinPa-Learning_Manager_2009-03.png',
			'content/WEB/FinPa-Learning_Manager_2009/FinPa-Learning_Manager_2009-04.png',
			'content/WEB/FinPa-Learning_Manager_2009/FinPa-Learning_Manager_2009-05.png',
			'content/WEB/FinPa-Learning_Manager_2009/FinPa-Learning_Manager_2009-06.png',
			'content/WEB/FinPa-Learning_Manager_2009/FinPa-Learning_Manager_2009-07.png',
			'content/WEB/FinPa-Learning_Manager_2009/FinPa-Learning_Manager_2009-08.png',
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300,
			'autoScale'			: false
		});
	});
	
	$("#WLR").click(function() {
		$.fancybox([
			'content/WEB/FinPa-Web_Learning_Reporter_2007/FinPa-Web_Learning_Reporter_2007-01.jpg',
			'content/WEB/FinPa-Web_Learning_Reporter_2007/FinPa-Web_Learning_Reporter_2007-02.jpg',
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300,
			'autoScale'			: false
		});
	});
	
	$("#LT").click(function() {
		$.fancybox([
			'content/WEB/FinPa-Web_LMS_Tutor_2010/FinPa-Web_LMS_Tutor_2010-01.jpg',
			'content/WEB/FinPa-Web_LMS_Tutor_2010/FinPa-Web_LMS_Tutor_2010-02.jpg',
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});	
	
	$("#FINPA").click(function() {
		$.fancybox([
			'content/WEB/FinPa-Web_Official_Site_2008/FinPa-Web_Official_Site_2008-01.png',
			'content/WEB/FinPa-Web_Official_Site_2008/FinPa-Web_Official_Site_2008-02.png',
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});	
	
	$("#COONGA").click(function() {
		$.fancybox([
			'content/WEB/GAGA-Web_Coonga_2007/GAGA-Web_Coonga_Home_2007.jpg',
			'content/WEB/GAGA-Web_Coonga_2007/GAGA-Web_Coonga_Character_2007-01.gif',
			'content/WEB/GAGA-Web_Coonga_2007/GAGA-Web_Coonga_Character_2007-02.gif',
			'content/WEB/GAGA-Web_Coonga_2007/GAGA-Web_Coonga_Character_2007-03.gif',
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});	
	
	$("#LDH").click(function() {
		$.fancybox([
			'content/WEB/LDH-Web_Interactive_Pet_2008/LDH-Web_Interactive_Pet_2008-01.png',
			'content/WEB/LDH-Web_Interactive_Pet_2008/LDH-Web_Interactive_Pet_2008-02.png',
			'content/WEB/LDH-Web_Interactive_Pet_2008/LDH-Web_Interactive_Pet_2008-03.png',
			'content/WEB/LDH-Web_Interactive_Pet_2008/LDH-Web_Interactive_Pet_2008-05.png',
			'content/WEB/LDH-Web_Interactive_Pet_2008/LDH-Web_Interactive_Pet_2008-06.png',
			'content/WEB/LDH-Web_Interactive_Pet_2008/LDH-Web_Interactive_Pet_2008-07.png',
			'content/WEB/LDH-Web_Interactive_Pet_2008/LDH-Web_Interactive_Pet_2008-10.png',
			'content/WEB/LDH-Web_Interactive_Pet_2008/LDH-Web_Interactive_Pet_2008-11.png',
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});	
	
	$("#LDHLIVE").fancybox({
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: 930,
		'height'			: 660,
		'scrolling'   		: 'auto'
	});

	$("#MILK").click(function() {
		$.fancybox([
			'content/WEB/Momentum-Web-DidYouRememberTheMilk_2007/Momentum-Web-DidYouRememberTheMilk_2007-01.png',
			'content/WEB/Momentum-Web-DidYouRememberTheMilk_2007/Momentum-Web-DidYouRememberTheMilk_2007-02.png',
			'content/WEB/Momentum-Web-DidYouRememberTheMilk_2007/Momentum-Web-DidYouRememberTheMilk_2007-03.png',
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});	

	$("#PMDI").click(function() {
		$.fancybox([
			'content/WEB/PMDI-Web_Diploma_of_PM_Online_2008/PMDI-Web_Diploma_of_PM_Online_2008-04.png',
			'content/WEB/PMDI-Web_Diploma_of_PM_Online_2008/PMDI-Web_Diploma_of_PM_Online_2008-13.png',
			'content/WEB/PMDI-Web_Diploma_of_PM_Online_2008/PMDI-Web_Diploma_of_PM_Online_2008-14.png',
			'content/WEB/PMDI-Web_Diploma_of_PM_Online_2008/PMDI-Web_Diploma_of_PM_Online_2008-17.png',
			'content/WEB/PMDI-Web_Diploma_of_PM_Online_2008/PMDI-Web_Diploma_of_PM_Online_2008-20.png',
			'content/WEB/PMDI-Web_Diploma_of_PM_Online_2008/PMDI-Web_Diploma_of_PM_Online_2008-24.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});	

	$("#PMDILIVE").fancybox({
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: 990,
		'height'			: 650,
		'scrolling'   		: 'no'
	});

	$("#RACA").click(function() {
		$.fancybox([
			'content/WEB/RACA-Web_Site_2007/RACA-Web_Site_2007-01.png',
			'content/WEB/RACA-Web_Site_2007/RACA-Web_Site_2007-02.png',
			'content/WEB/RACA-Web_Site_2007/RACA-Web_Site_2007-03.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300,
			'autoScale'			: false
		});
	});
	
	$("#RACALIVE").fancybox({
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: 990,
		'height'			: 610,
		'scrolling'   		: 'auto'
	});
	
	$("#HOPE").click(function() {
		$.fancybox([
			'content/WEB/Hope-Web_Official_Site_2008/Hope-Web_Official_Site_2008-01.png',
			'content/WEB/Hope-Web_Official_Site_2008/Hope-Web_Official_Site_2008-02.png',
			'content/WEB/Hope-Web_Official_Site_2008/Hope-Web_Official_Site_2008-03.png',
			'content/WEB/Hope-Web_Official_Site_2008/Hope-Web_Official_Site_2008-04.png',
			'content/WEB/Hope-Web_Official_Site_2008/Hope-Web_Official_Site_2008-05.png'		
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});	

	$("#VALA").click(function() {
		$.fancybox([
			'content/WEB/VALA-Web_Safe-T1_2009/VALA-Web_Safe-T1_2009-01.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300,
			'autoScale'			: false
		});
	});	
	
	$("#VALALIVE").fancybox({
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: 990,
		'height'			: 680,
		'scrolling'   		: 'auto',
	});
	
	$("#HAG").click(function() {
		$.fancybox([
			'content/WEB/WCNSW-Web_HAG_2009/WCNSW-Web_HAG_2009-01.png',
			'content/WEB/WCNSW-Web_HAG_2009/WCNSW-Web_HAG_2009-03.png',
			'content/WEB/WCNSW-Web_HAG_2009/WCNSW-Web_HAG_2009-05.png',
			'content/WEB/WCNSW-Web_HAG_2009/WCNSW-Web_HAG_2009-07.png',
			'content/WEB/WCNSW-Web_HAG_2009/WCNSW-Web_HAG_2009-10.png',
			'content/WEB/WCNSW-Web_HAG_2009/WCNSW-Web_HAG_2009-12.png',
			'content/WEB/WCNSW-Web_HAG_2009/WCNSW-Web_HAG_2009-13.png',
			'content/WEB/WCNSW-Web_HAG_2009/WCNSW-Web_HAG_2009-15.png',
			'content/WEB/WCNSW-Web_HAG_2009/WCNSW-Web_HAG_2009-16.png',
			'content/WEB/WCNSW-Web_HAG_2009/WCNSW-Web_HAG_2009-17.png',
			'content/WEB/WCNSW-Web_HAG_2009/WCNSW-Web_HAG_2009-18.png',
			'content/WEB/WCNSW-Web_HAG_2009/WCNSW-Web_HAG_2009-31-Char.png',
			'content/WEB/WCNSW-Web_HAG_2009/WCNSW-Web_HAG_2009-34-Char-Robber.gif',
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});
	
	$("#HAGLIVE").fancybox({
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: 1200,
		'height'			: 700,
		'scrolling'   		: 'auto'
	});
	
	$("#WCNSW").click(function() {
		$.fancybox([
			'content/WEB/WCNSW-Web_Site_Pitch_2008/WCNSW-Web_Site_Pitch_2008-01.jpg',
			'content/WEB/WCNSW-Web_Site_Pitch_2008/WCNSW-Web_Site_Pitch_2008-02.jpg',
			'content/WEB/WCNSW-Web_Site_Pitch_2008/WCNSW-Web_Site_Pitch_2008-03.jpg',
			'content/WEB/WCNSW-Web_Site_Pitch_2008/WCNSW-Web_Site_Pitch_2008-04.jpg',
			'content/WEB/WCNSW-Web_Site_Pitch_2008/WCNSW-Web_Site_Pitch_2008-05.jpg',
			'content/WEB/WCNSW-Web_Site_Pitch_2008/WCNSW-Web_Site_Pitch_2008-06.jpg',
			'content/WEB/WCNSW-Web_Site_Pitch_2008/WCNSW-Web_Site_Pitch_2008-07.jpg',
			'content/WEB/WCNSW-Web_Site_Pitch_2008/WCNSW-Web_Site_Pitch_2008-08.jpg'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300,
			'autoScale'			: false
		});
	});	

	/*************************************************************************************************************************/
	//eLearning
    /*************************************************************************************************************************/

	$("#EWISE").fancybox({
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: 800,
		'height'			: 600,
		'scrolling'   		: 'no'
	});
	
	$("#EWISELIVE").fancybox({
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: 796,
		'height'			: 690,
		'scrolling'   		: 'auto'
	});
	
	$("#SW").fancybox({
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: 800,
		'height'			: 600,
		'scrolling'   		: 'no'
	});
	
	$("#SWLIVE").fancybox({
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: 796,
		'height'			: 590,
		'scrolling'   		: 'auto'
	});
		
	$("#GTA08").click(function() {
		$.fancybox([
			'content/WEB/GTA-Web_OHS_Training_2008/GTA-Web_OHS_Training_2008-01.jpg',
			'content/WEB/GTA-Web_OHS_Training_2008/GTA-Web_OHS_Training_2008-02.jpg'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300,
			'autoScale'			: false
		});
	});	
	
	$("#GTA09").click(function() {
		$.fancybox([
			'content/WEB/GTA-Web_OHS_Training_2009/GTA-Web_OHS_Training_2009-01.png',
			'content/WEB/GTA-Web_OHS_Training_2009/GTA-Web_OHS_Training_2009-02.png',
			'content/WEB/GTA-Web_OHS_Training_2009/GTA-Web_OHS_Training_2009-03.png',
			'content/WEB/GTA-Web_OHS_Training_2009/GTA-Web_OHS_Training_2009-04.png',
			'content/WEB/GTA-Web_OHS_Training_2009/GTA-Web_OHS_Training_2009-05.png',
			'content/WEB/GTA-Web_OHS_Training_2009/GTA-Web_OHS_Training_2009-06.png',
			'content/WEB/GTA-Web_OHS_Training_2009/GTA-Web_OHS_Training_2009-07.png',
			'content/WEB/GTA-Web_OHS_Training_2009/GTA-Web_OHS_Training_2009-08.png',
			'content/WEB/GTA-Web_OHS_Training_2009/GTA-Web_OHS_Training_2009-09.png',
			'content/WEB/GTA-Web_OHS_Training_2009/GTA-Web_OHS_Training_2009-10.png',
			'content/WEB/GTA-Web_OHS_Training_2009/GTA-Web_OHS_Training_2009-11.png',
			'content/WEB/GTA-Web_OHS_Training_2009/GTA-Web_OHS_Training_2009-12.png',
			'content/WEB/GTA-Web_OHS_Training_2009/GTA-Web_OHS_Training_2009-13.png',
			'content/WEB/GTA-Web_OHS_Training_2009/GTA-Web_OHS_Training_2009-14.png',
			'content/WEB/GTA-Web_OHS_Training_2009/GTA-Web_OHS_Training_2009-15.png',
			'content/WEB/GTA-Web_OHS_Training_2009/GTA-Web_OHS_Training_2009-16.png',			
			'content/WEB/GTA-Web_OHS_Training_2009/GTA-Web_OHS_Training_2009-17.png'		
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});	
	
	$("#TELSTRA1").click(function() {
		$.fancybox([
			'content/WEB/Telstra-Web_Retail_Training_Concept_2006/Telstra-Web_Retail_Training_Concept_2006-01.png',
			'content/WEB/Telstra-Web_Retail_Training_Concept_2006/Telstra-Web_Retail_Training_Concept_2006-02.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});
	
	$("#TLFDJ").click(function() {
		$.fancybox([
			'content/WEB/TLF-Web_Dragons_Jumble_2007/TLF-Web_Dragons_Jumble_2007-01.png',
			'content/WEB/TLF-Web_Dragons_Jumble_2007/TLF-Web_Dragons_Jumble_2007-02.png',
			'content/WEB/TLF-Web_Dragons_Jumble_2007/TLF-Web_Dragons_Jumble_2007-03.png',
			'content/WEB/TLF-Web_Dragons_Jumble_2007/TLF-Web_Dragons_Jumble_2007-06.png',
			'content/WEB/TLF-Web_Dragons_Jumble_2007/TLF-Web_Dragons_Jumble_2007-08.png',
			'content/WEB/TLF-Web_Dragons_Jumble_2007/TLF-Web_Dragons_Jumble_2007-12.png',
			'content/WEB/TLF-Web_Dragons_Jumble_2007/TLF-Web_Dragons_Jumble_2007-22.png',
			'content/WEB/TLF-Web_Dragons_Jumble_2007/TLF-Web_Dragons_Jumble_2007-27.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});

	$("#TLFDJLIVE").fancybox({
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: 760,
		'height'			: 576,
		'scrolling'   		: 'no'
	});
	
	$("#TLFHH").click(function() {
		$.fancybox([

			'content/WEB/TLF-Web_Holiday_Hunt_2010/TLF-Web_Holiday_Hunt_2010-06.png',
			'content/WEB/TLF-Web_Holiday_Hunt_2010/TLF-Web_Holiday_Hunt_2010-07.png',
			'content/WEB/TLF-Web_Holiday_Hunt_2010/TLF-Web_Holiday_Hunt_2010-08.png',
			'content/WEB/TLF-Web_Holiday_Hunt_2010/TLF-Web_Holiday_Hunt_2010-09.png',
			'content/WEB/TLF-Web_Holiday_Hunt_2010/TLF-Web_Holiday_Hunt_2010-10.png',
			'content/WEB/TLF-Web_Holiday_Hunt_2010/TLF-Web_Holiday_Hunt_2010-11.png',
			'content/WEB/TLF-Web_Holiday_Hunt_2010/TLF-Web_Holiday_Hunt_2010-12.png',
			'content/WEB/TLF-Web_Holiday_Hunt_2010/TLF-Web_Holiday_Hunt_2010-13.png',
			'content/WEB/TLF-Web_Holiday_Hunt_2010/TLF-Web_Holiday_Hunt_2010-14.png',
			'content/WEB/TLF-Web_Holiday_Hunt_2010/TLF-Web_Holiday_Hunt_2010-15.png',
			'content/WEB/TLF-Web_Holiday_Hunt_2010/TLF-Web_Holiday_Hunt_2010-16.png',
			'content/WEB/TLF-Web_Holiday_Hunt_2010/TLF-Web_Holiday_Hunt_2010-17.png',
			'content/WEB/TLF-Web_Holiday_Hunt_2010/TLF-Web_Holiday_Hunt_2010-18.png',
			'content/WEB/TLF-Web_Holiday_Hunt_2010/TLF-Web_Holiday_Hunt_2010-19.png',
			'content/WEB/TLF-Web_Holiday_Hunt_2010/TLF-Web_Holiday_Hunt_2010-20.png',
			'content/WEB/TLF-Web_Holiday_Hunt_2010/TLF-Web_Holiday_Hunt_2010-21.png',
			'content/WEB/TLF-Web_Holiday_Hunt_2010/TLF-Web_Holiday_Hunt_2010-01.png',
			'content/WEB/TLF-Web_Holiday_Hunt_2010/TLF-Web_Holiday_Hunt_2010-02.png',
			'content/WEB/TLF-Web_Holiday_Hunt_2010/TLF-Web_Holiday_Hunt_2010-03.png',
			'content/WEB/TLF-Web_Holiday_Hunt_2010/TLF-Web_Holiday_Hunt_2010-04.png',
			'content/WEB/TLF-Web_Holiday_Hunt_2010/TLF-Web_Holiday_Hunt_2010-05.png',
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});
	
	$("#TLFIH").click(function() {
		$.fancybox([
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-01.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-02.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-03.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-04.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-05.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-06.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-07.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-08.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-09.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-10.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-11.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-12.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-13.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-14.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-15.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-16.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-17.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-18.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-19.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-20.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-21.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-22.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-23.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-24.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-25.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-26.png',
			'content/WEB/TLF-Web_Island_Hunt_2010/TLF-Web_Island_Hunt_2010-27.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});
	
	$("#TLFLP").click(function() {
		$.fancybox([
			'content/WEB/TLF-Web_Letter_Planet_2007/TLF-Web_Letter_Planet_2007-01.png',
			'content/WEB/TLF-Web_Letter_Planet_2007/TLF-Web_Letter_Planet_2007-02.png',
			'content/WEB/TLF-Web_Letter_Planet_2007/TLF-Web_Letter_Planet_2007-03.png',
			'content/WEB/TLF-Web_Letter_Planet_2007/TLF-Web_Letter_Planet_2007-04.png',
			'content/WEB/TLF-Web_Letter_Planet_2007/TLF-Web_Letter_Planet_2007-06.png',
			'content/WEB/TLF-Web_Letter_Planet_2007/TLF-Web_Letter_Planet_2007-07.png',
			'content/WEB/TLF-Web_Letter_Planet_2007/TLF-Web_Letter_Planet_2007-08.png',
			'content/WEB/TLF-Web_Letter_Planet_2007/TLF-Web_Letter_Planet_2007-09.png',
			'content/WEB/TLF-Web_Letter_Planet_2007/TLF-Web_Letter_Planet_2007-10.png',
			'content/WEB/TLF-Web_Letter_Planet_2007/TLF-Web_Letter_Planet_2007-11.png',
			'content/WEB/TLF-Web_Letter_Planet_2007/TLF-Web_Letter_Planet_2007-12.png',
			'content/WEB/TLF-Web_Letter_Planet_2007/TLF-Web_Letter_Planet_2007-13.png',
			'content/WEB/TLF-Web_Letter_Planet_2007/TLF-Web_Letter_Planet_2007-14.png',
			'content/WEB/TLF-Web_Letter_Planet_2007/TLF-Web_Letter_Planet_2007-15.png',
			'content/WEB/TLF-Web_Letter_Planet_2007/TLF-Web_Letter_Planet_2007-17.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});	

	$("#TLFMM").click(function() {
		$.fancybox([
			'content/WEB/TLF-Web_Metal_Munchers_2007/TLF-Web_Metal_Munchers_2007-01.png',
			'content/WEB/TLF-Web_Metal_Munchers_2007/TLF-Web_Metal_Munchers_2007-02.png',
			'content/WEB/TLF-Web_Metal_Munchers_2007/TLF-Web_Metal_Munchers_2007-03.png',
			'content/WEB/TLF-Web_Metal_Munchers_2007/TLF-Web_Metal_Munchers_2007-04.png',
			'content/WEB/TLF-Web_Metal_Munchers_2007/TLF-Web_Metal_Munchers_2007-05.png',
			'content/WEB/TLF-Web_Metal_Munchers_2007/TLF-Web_Metal_Munchers_2007-06.png',
			'content/WEB/TLF-Web_Metal_Munchers_2007/TLF-Web_Metal_Munchers_2007-07.png',
			'content/WEB/TLF-Web_Metal_Munchers_2007/TLF-Web_Metal_Munchers_2007-08.png',
			'content/WEB/TLF-Web_Metal_Munchers_2007/TLF-Web_Metal_Munchers_2007-09.png',
			'content/WEB/TLF-Web_Metal_Munchers_2007/TLF-Web_Metal_Munchers_2007-10.png',
			'content/WEB/TLF-Web_Metal_Munchers_2007/TLF-Web_Metal_Munchers_2007-11.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});	
	
	$("#TLFWAP").click(function() {
		$.fancybox([
			'content/WEB/TLF-Web_Words_And_Pictures_2007/TLF-Web_Words_And_Pictures_2007-01.png',
			'content/WEB/TLF-Web_Words_And_Pictures_2007/TLF-Web_Words_And_Pictures_2007-02.png',
			'content/WEB/TLF-Web_Words_And_Pictures_2007/TLF-Web_Words_And_Pictures_2007-03.png',
			'content/WEB/TLF-Web_Words_And_Pictures_2007/TLF-Web_Words_And_Pictures_2007-04.png',
			'content/WEB/TLF-Web_Words_And_Pictures_2007/TLF-Web_Words_And_Pictures_2007-05.png',
			'content/WEB/TLF-Web_Words_And_Pictures_2007/TLF-Web_Words_And_Pictures_2007-06.png',
			'content/WEB/TLF-Web_Words_And_Pictures_2007/TLF-Web_Words_And_Pictures_2007-07.png',
			'content/WEB/TLF-Web_Words_And_Pictures_2007/TLF-Web_Words_And_Pictures_2007-08.png',
			'content/WEB/TLF-Web_Words_And_Pictures_2007/TLF-Web_Words_And_Pictures_2007-09.png',
			'content/WEB/TLF-Web_Words_And_Pictures_2007/TLF-Web_Words_And_Pictures_2007-10.png',
			'content/WEB/TLF-Web_Words_And_Pictures_2007/TLF-Web_Words_And_Pictures_2007-11.png',
			'content/WEB/TLF-Web_Words_And_Pictures_2007/TLF-Web_Words_And_Pictures_2007-12.png',
			'content/WEB/TLF-Web_Words_And_Pictures_2007/TLF-Web_Words_And_Pictures_2007-13.png',
			'content/WEB/TLF-Web_Words_And_Pictures_2007/TLF-Web_Words_And_Pictures_2007-14.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});	
	
	$("#TLFWAPLIVE").fancybox({
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: 760,
		'height'			: 576,
		'scrolling'   		: 'no'
	});
	
	$("#TLFSC").click(function() {
		$.fancybox([
			'content/WEB/TLF-Web_Samurai_Castle_2010/TLF-Web_Samurai_Castle_2010-09.jpg',
			'content/WEB/TLF-Web_Samurai_Castle_2010/TLF-Web_Samurai_Castle_2010-10.jpg',
			'content/WEB/TLF-Web_Samurai_Castle_2010/TLF-Web_Samurai_Castle_2010-11.jpg',
			'content/WEB/TLF-Web_Samurai_Castle_2010/TLF-Web_Samurai_Castle_2010-12.jpg',
			'content/WEB/TLF-Web_Samurai_Castle_2010/TLF-Web_Samurai_Castle_2010-13.jpg',
			'content/WEB/TLF-Web_Samurai_Castle_2010/TLF-Web_Samurai_Castle_2010-14.jpg',
			'content/WEB/TLF-Web_Samurai_Castle_2010/TLF-Web_Samurai_Castle_2010-15.jpg',
			'content/WEB/TLF-Web_Samurai_Castle_2010/TLF-Web_Samurai_Castle_2010-16.jpg',
			'content/WEB/TLF-Web_Samurai_Castle_2010/TLF-Web_Samurai_Castle_2010-17.jpg',
			'content/WEB/TLF-Web_Samurai_Castle_2010/TLF-Web_Samurai_Castle_2010-18.jpg',
			'content/WEB/TLF-Web_Samurai_Castle_2010/TLF-Web_Samurai_Castle_2010-19.jpg',
			'content/WEB/TLF-Web_Samurai_Castle_2010/TLF-Web_Samurai_Castle_2010-20.jpg',
			'content/WEB/TLF-Web_Samurai_Castle_2010/TLF-Web_Samurai_Castle_2010-21.jpg',
			'content/WEB/TLF-Web_Samurai_Castle_2010/TLF-Web_Samurai_Castle_2010-22.jpg',
			'content/WEB/TLF-Web_Samurai_Castle_2010/TLF-Web_Samurai_Castle_2010-23.jpg',
			'content/WEB/TLF-Web_Samurai_Castle_2010/TLF-Web_Samurai_Castle_2010-24.jpg',
			'content/WEB/TLF-Web_Samurai_Castle_2010/TLF-Web_Samurai_Castle_2010-01.png',
			'content/WEB/TLF-Web_Samurai_Castle_2010/TLF-Web_Samurai_Castle_2010-25.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});	
		
	/*************************************************************************************************************************/
	//MM
    /*************************************************************************************************************************/
	
	$("#VEGE").click(function() {
		$.fancybox([
			'content/MM/GAGA-MM_Vegetarium_2005/GAGA-MM_Vegetarium_2005-01.png',
			'content/MM/GAGA-MM_Vegetarium_2005/GAGA-MM_Vegetarium_2005-02.png',
			'content/MM/GAGA-MM_Vegetarium_2005/GAGA-MM_Vegetarium_2005-03.png',
			'content/MM/GAGA-MM_Vegetarium_2005/GAGA-MM_Vegetarium_2005-04.png',
			'content/MM/GAGA-MM_Vegetarium_2005/GAGA-MM_Vegetarium_2005-05.png',
			'content/MM/GAGA-MM_Vegetarium_2005/GAGA-MM_Vegetarium_2005-06.png',
			'content/MM/GAGA-MM_Vegetarium_2005/GAGA-MM_Vegetarium_2005-07.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});			

	$("#EIP").click(function() {
		$.fancybox([
			'content/MM/MBAV-MM_EIP_CD_2007/MBAV-MM_EIP_CD_2007-03.png',
			'content/MM/MBAV-MM_EIP_CD_2007/MBAV-MM_EIP_CD_2007-06.png',
			'content/MM/MBAV-MM_EIP_CD_2007/MBAV-MM_EIP_CD_2007-07.png',
			'content/MM/MBAV-MM_EIP_CD_2007/MBAV-MM_EIP_CD_2007-09.png',
			'content/MM/MBAV-MM_EIP_CD_2007/MBAV-MM_EIP_CD_2007-08.png',
			'content/MM/MBAV-MM_EIP_CD_2007/MBAV-MM_EIP_CD_2007-14.png',
			'content/MM/MBAV-MM_EIP_CD_2007/MBAV-MM_EIP_CD_2007-16.png',
			'content/MM/MBAV-MM_EIP_CD_2007/MBAV-MM_EIP_CD_2007-22-Product.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});	
	
	$("#HM").click(function() {
		$.fancybox([
			'content/MM/MBAV-MM_Human_Body_CD_2007/MBAV-MM_Human_Body_CD_2007-01.png',
			'content/MM/MBAV-MM_Human_Body_CD_2007/MBAV-MM_Human_Body_CD_2007-02.png',
			'content/MM/MBAV-MM_Human_Body_CD_2007/MBAV-MM_Human_Body_CD_2007-05.png',
			'content/MM/MBAV-MM_Human_Body_CD_2007/MBAV-MM_Human_Body_CD_2007-07.png',
			'content/MM/MBAV-MM_Human_Body_CD_2007/MBAV-MM_Human_Body_CD_2007-08.png',
			'content/MM/MBAV-MM_Human_Body_CD_2007/MBAV-MM_Human_Body_CD_2007-09.png',
			'content/MM/MBAV-MM_Human_Body_CD_2007/MBAV-MM_Human_Body_CD_2007-10.png',
			'content/MM/MBAV-MM_Human_Body_CD_2007/MBAV-MM_Human_Body_CD_2007-11.png',
			'content/MM/MBAV-MM_Human_Body_CD_2007/MBAV-MM_Human_Body_CD_2007-12.png',
			'content/MM/MBAV-MM_Human_Body_CD_2007/MBAV-MM_Human_Body_CD_2007-13.png',
			'content/MM/MBAV-MM_Human_Body_CD_2007/MBAV-MM_Human_Body_CD_2007-14.png',
			'content/MM/MBAV-MM_Human_Body_CD_2007/MBAV-MM_Human_Body_CD_2007-15.png',
			'content/MM/MBAV-MM_Human_Body_CD_2007/MBAV-MM_Human_Body_CD_2007-16.png',
			'content/MM/MBAV-MM_Human_Body_CD_2007/MBAV-MM_Human_Body_CD_2007-17.png',
			'content/MM/MBAV-MM_Human_Body_CD_2007/MBAV-MM_Human_Body_CD_2007-18.png',
			'content/MM/MBAV-MM_Human_Body_CD_2007/MBAV-MM_Human_Body_CD_2007-19.png',
			'content/MM/MBAV-MM_Human_Body_CD_2007/MBAV-MM_Human_Body_CD_2007-20.png',
			'content/MM/MBAV-MM_Human_Body_CD_2007/MBAV-MM_Human_Body_CD_2007-21.png',
			'content/MM/MBAV-MM_Human_Body_CD_2007/MBAV-MM_Human_Body_CD_2007-22.png',
			'content/MM/MBAV-MM_Human_Body_CD_2007/MBAV-MM_Human_Body_CD_2007-23.png',
			'content/MM/MBAV-MM_Human_Body_CD_2007/MBAV-MM_Human_Body_CD_2007-24-product.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});	

	$("#HMLIVE").fancybox({
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: 800,
		'height'			: 600,
		'scrolling'   		: 'no'
	});
	
	$("#IR").click(function() {
		$.fancybox([
			'content/MM/MBAV-MM_IR_CD_2006/MBAV-MM_IR_CD_2006-02.png',
			'content/MM/MBAV-MM_IR_CD_2006/MBAV-MM_IR_CD_2006-05.png',
			'content/MM/MBAV-MM_IR_CD_2006/MBAV-MM_IR_CD_2006-06.png',
			'content/MM/MBAV-MM_IR_CD_2006/MBAV-MM_IR_CD_2006-08.png',
			'content/MM/MBAV-MM_IR_CD_2006/MBAV-MM_IR_CD_2006-10.png',
			'content/MM/MBAV-MM_IR_CD_2006/MBAV-MM_IR_CD_2006-13.png',
			'content/MM/MBAV-MM_IR_CD_2006/MBAV-MM_IR_CD_2006-14.png',
			'content/MM/MBAV-MM_IR_CD_2006/MBAV-MM_IR_CD_2006-15.png',
			'content/MM/MBAV-MM_IR_CD_2006/MBAV-MM_IR_CD_2006-17.png',
			'content/MM/MBAV-MM_IR_CD_2006/MBAV-MM_IR_CD_2006-19.png',
			'content/MM/MBAV-MM_IR_CD_2006/MBAV-MM_IR_CD_2006-21.png',
			'content/MM/MBAV-MM_IR_CD_2006/MBAV-MM_IR_CD_2006-22.png',
			'content/MM/MBAV-MM_IR_CD_2006/MBAV-MM_IR_CD_2006-23.png',
			'content/MM/MBAV-MM_IR_CD_2006/MBAV-MM_IR_CD_2006-24.png',
			'content/MM/MBAV-MM_IR_CD_2006/MBAV-MM_IR_CD_2006-25.png',
			'content/MM/MBAV-MM_IR_CD_2006/MBAV-MM_IR_CD_2006-27-Product.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});	

	$("#IRLIVE").fancybox({
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: 800,
		'height'			: 600,
		'scrolling'   		: 'no'
	});
	
	$("#STTP").click(function() {
		$.fancybox([
			'content/MM/SWIN-MM_STTP_CD_2007/SWIN-MM_STTP_CD_2007-05.png',
			'content/MM/SWIN-MM_STTP_CD_2007/SWIN-MM_STTP_CD_2007-08.png',
			'content/MM/SWIN-MM_STTP_CD_2007/SWIN-MM_STTP_CD_2007-09.png',
			'content/MM/SWIN-MM_STTP_CD_2007/SWIN-MM_STTP_CD_2007-10.png',
			'content/MM/SWIN-MM_STTP_CD_2007/SWIN-MM_STTP_CD_2007-11.png',
			'content/MM/SWIN-MM_STTP_CD_2007/SWIN-MM_STTP_CD_2007-12.png',
			'content/MM/SWIN-MM_STTP_CD_2007/SWIN-MM_STTP_CD_2007-13.png',
			'content/MM/SWIN-MM_STTP_CD_2007/SWIN-MM_STTP_CD_2007-14.png',
			'content/MM/SWIN-MM_STTP_CD_2007/SWIN-MM_STTP_CD_2007-15.png',
			'content/MM/SWIN-MM_STTP_CD_2007/SWIN-MM_STTP_CD_2007-16.png',
			'content/MM/SWIN-MM_STTP_CD_2007/SWIN-MM_STTP_CD_2007-17.png',
			'content/MM/SWIN-MM_STTP_CD_2007/SWIN-MM_STTP_CD_2007-18.png',
			'content/MM/SWIN-MM_STTP_CD_2007/SWIN-MM_STTP_CD_2007-19.png',
			'content/MM/SWIN-MM_STTP_CD_2007/SWIN-MM_STTP_CD_2007-20.png',
			'content/MM/SWIN-MM_STTP_CD_2007/SWIN-MM_STTP_CD_2007-21.png',
			'content/MM/SWIN-MM_STTP_CD_2007/SWIN-MM_STTP_CD_2007-23.png',
			'content/MM/SWIN-MM_STTP_CD_2007/SWIN-MM_STTP_CD_2007-27.png',
			'content/MM/SWIN-MM_STTP_CD_2007/SWIN-MM_STTP_CD_2007-28.png',
			'content/MM/SWIN-MM_STTP_CD_2007/SWIN-MM_STTP_CD_2007-29-Product.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});	

	$("#STTPLIVE").fancybox({
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: 800,
		'height'			: 600,
		'scrolling'   		: 'no'
	});
	
	$("#FY08").click(function() {
		$.fancybox([
			'content/MM/Telstra-MM_Accomplishments_FY08_2008/Telstra-MM_Accomplishments_FY08_2008-02.png',
			'content/MM/Telstra-MM_Accomplishments_FY08_2008/Telstra-MM_Accomplishments_FY08_2008-03.png',
			'content/MM/Telstra-MM_Accomplishments_FY08_2008/Telstra-MM_Accomplishments_FY08_2008-04.png',
			'content/MM/Telstra-MM_Accomplishments_FY08_2008/Telstra-MM_Accomplishments_FY08_2008-05.png',
			'content/MM/Telstra-MM_Accomplishments_FY08_2008/Telstra-MM_Accomplishments_FY08_2008-09.png',
			'content/MM/Telstra-MM_Accomplishments_FY08_2008/Telstra-MM_Accomplishments_FY08_2008-10.png',
			'content/MM/Telstra-MM_Accomplishments_FY08_2008/Telstra-MM_Accomplishments_FY08_2008-12.png',
			'content/MM/Telstra-MM_Accomplishments_FY08_2008/Telstra-MM_Accomplishments_FY08_2008-13.png',
			'content/MM/Telstra-MM_Accomplishments_FY08_2008/Telstra-MM_Accomplishments_FY08_2008-14.png',
			'content/MM/Telstra-MM_Accomplishments_FY08_2008/Telstra-MM_Accomplishments_FY08_2008-15.png',
			'content/MM/Telstra-MM_Accomplishments_FY08_2008/Telstra-MM_Accomplishments_FY08_2008-16.png',
			'content/MM/Telstra-MM_Accomplishments_FY08_2008/Telstra-MM_Accomplishments_FY08_2008-17.png',
			'content/MM/Telstra-MM_Accomplishments_FY08_2008/Telstra-MM_Accomplishments_FY08_2008-18.png',
			'content/MM/Telstra-MM_Accomplishments_FY08_2008/Telstra-MM_Accomplishments_FY08_2008-19.png',
			'content/MM/Telstra-MM_Accomplishments_FY08_2008/Telstra-MM_Accomplishments_FY08_2008-22.png',
			'content/MM/Telstra-MM_Accomplishments_FY08_2008/Telstra-MM_Accomplishments_FY08_2008-23.png',
			'content/MM/Telstra-MM_Accomplishments_FY08_2008/Telstra-MM_Accomplishments_FY08_2008-24.png',
			'content/MM/Telstra-MM_Accomplishments_FY08_2008/Telstra-MM_Accomplishments_FY08_2008-25.png',
			'content/MM/Telstra-MM_Accomplishments_FY08_2008/Telstra-MM_Accomplishments_FY08_2008-26.png',
			'content/MM/Telstra-MM_Accomplishments_FY08_2008/Telstra-MM_Accomplishments_FY08_2008-27.png',
			'content/MM/Telstra-MM_Accomplishments_FY08_2008/Telstra-MM_Accomplishments_FY08_2008-29.png',
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});	

	$("#FY08LIVE").fancybox({
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: 720,
		'height'			: 520,
		'scrolling'   		: 'no'
	});
	
	$("#MH").click(function() {
		$.fancybox([
			'content/MM/WCNSW-MM_Manual_Handling_for_Nurses_CD_2006/WCNSW-MM_Manual_Handling_for_Nurses_CD_2006-01.png',
			'content/MM/WCNSW-MM_Manual_Handling_for_Nurses_CD_2006/WCNSW-MM_Manual_Handling_for_Nurses_CD_2006-02.png',
			'content/MM/WCNSW-MM_Manual_Handling_for_Nurses_CD_2006/WCNSW-MM_Manual_Handling_for_Nurses_CD_2006-03-Cover.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300,
			'autoScale'			: false
		});
	});
	
	$("#SF").click(function() {
		$.fancybox([
			'content/MM/WCNSW-MM_Safer_Farming_CD_2007/WCNSW-MM_Safer_Farming_CD_2007-01.jpg',
			'content/MM/WCNSW-MM_Safer_Farming_CD_2007/WCNSW-MM_Safer_Farming_CD_2007-02.jpg',
			'content/MM/WCNSW-MM_Safer_Farming_CD_2007/WCNSW-MM_Safer_Farming_CD_2007-03-Cover.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300,
			'autoScale'			: false
		});
	});
	
	$("#TS").click(function() {
		$.fancybox([
			'content/MM/WCNSW-MM_Talk_Safety_CD_2008/WCNSW-MM_Talk_Safety_CD_2008-04.png',
			'content/MM/WCNSW-MM_Talk_Safety_CD_2008/WCNSW-MM_Talk_Safety_CD_2008-05.png',
			'content/MM/WCNSW-MM_Talk_Safety_CD_2008/WCNSW-MM_Talk_Safety_CD_2008-06.png',
			'content/MM/WCNSW-MM_Talk_Safety_CD_2008/WCNSW-MM_Talk_Safety_CD_2008-03.png',
			'content/MM/WCNSW-MM_Talk_Safety_CD_2008/WCNSW-MM_Talk_Safety_CD_2008-07.png',
			'content/MM/WCNSW-MM_Talk_Safety_CD_2008/WCNSW-MM_Talk_Safety_CD_2008-08-Cover.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});
	
	$("#ETSKIN").click(function() {
		$.fancybox([
			'content/UI/etang-UI_ET_Player_Skin_2004/etang-ET_Player_Skin_2004-01.png',
			'content/UI/etang-UI_ET_Player_Skin_2004/etang-ET_Player_Skin_2004-02.png',
			'content/UI/etang-UI_ET_Player_Skin_2004/etang-ET_Player_Skin_2004-04.png',
			'content/UI/etang-UI_ET_Player_Skin_2004/etang-ET_Player_Skin_2004-05.png',
			'content/UI/etang-UI_ET_Player_Skin_2004/etang-ET_Player_Skin_2004-06.png',
			'content/UI/etang-UI_ET_Player_Skin_2004/etang-ET_Player_Skin_2004-07.png',
			'content/UI/etang-UI_ET_Player_Skin_2004/etang-ET_Player_Skin_2004-08.png',
			'content/UI/etang-UI_ET_Player_Skin_2004/etang-ET_Player_Skin_2004-09.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});
	
	/*************************************************************************************************************************/
	//PRINT
    /*************************************************************************************************************************/

	$("#EWISEP").click(function() {
		$.fancybox([
			'content/PRINT/E-WISE-Print_Brochure_2005/E-WISE-Print_Brochure_2005-01.png',
			'content/PRINT/E-WISE-Print_Brochure_2005/E-WISE-Print_Brochure_2005-02.png'

		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});
	
	$("#SWP").click(function() {
		$.fancybox([
			'content/PRINT/SafeWorking-Print_Brochure_2010/SafeWorking-Print_Brochure_2010-01-Product.png',
			'content/PRINT/SafeWorking-Print_Brochure_2010/SafeWorking-Print_Brochure_2010-02-LMS.png',
			'content/PRINT/SafeWorking-Print_Brochure_2010/SafeWorking-Print_Brochure_2010-03-Feature.png',
			'content/PRINT/SafeWorking-Print_Brochure_2010/SafeWorking-Print_Brochure_2010-04-Certificate.png',
			'content/PRINT/SafeWorking-Print_Brochure_2010/SafeWorking-Print_Brochure_2010-05-DSK.png',
			'content/PRINT/SafeWorking-Print_Brochure_2010/SafeWorking-Print_Brochure_2010-06-Order_Form.png',
			'content/PRINT/SafeWorking-Print_Brochure_2010/SafeWorking-Print_Brochure_2010-08-ROI_Form.png',
			'content/PRINT/SafeWorking-Print_Brochure_2010/SafeWorking-Print_Brochure_2010-07-Pricesheet.png',
			'content/PRINT/SafeWorking-Print_Brochure_2010/SafeWorking-Print_Brochure_2010-09-Sales_Flow.png'

		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});
	
	$("#FMB").click(function() {
		$.fancybox([
			'content/PRINT/FinPa-Print_Marketing_Brochure_2009/FinPa-Print_Marketing_Brochure_2009-Learning_Manager.png',
			'content/PRINT/FinPa-Print_Marketing_Brochure_2009/FinPa-Print_Marketing_Brochure_2009-Learning_Model.png'

		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});
	
	$("#FP").click(function() {
		$.fancybox([
			'content/PRINT/FinPa-Print_Posters_2006/FinPa-Print_Posters_2006-01_Ten_Canoes.jpg',
			'content/PRINT/FinPa-Print_Posters_2006/FinPa-Print_Posters_2006-02_MBAV_IR.jpg',
			'content/PRINT/FinPa-Print_Posters_2006/FinPa-Print_Posters_2006-03_Scene_Savers.jpg'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});
	
	$("#GAGACD").click(function() {
		$.fancybox([
			'content/PRINT/GAGA-Print_CoverDesign_2003/GAGA-Print_CoverDesign_Shanghai_Gang_2003.png',
			'content/PRINT/GAGA-Print_CoverDesign_2003/GAGA-Print_CoverDesign_Tantrism_2003.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});
	
	$("#SOH").click(function() {
		$.fancybox([
			'content/PRINT/GAGA-Print_Seeds_of_Heaven_2006/GAGA-Print_Seeds_of_Heaven_2006_1.png',
			'content/PRINT/GAGA-Print_Seeds_of_Heaven_2006/GAGA-Print_Seeds_of_Heaven_2006_2.png',
			'content/PRINT/GAGA-Print_Seeds_of_Heaven_2006/GAGA-Print_Seeds_of_Heaven_2006_3.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});
	
	$("#VEGEP").click(function() {
		$.fancybox([
			'content/PRINT/GAGA-Print_Vegetarium_2005/GAGA-Print_Vegetarium_2005.jpg',
			'content/PRINT/GAGA-Print_Vegetarium_2005/GAGA-Print_Vegetarium_2005_Carrot.jpg',
			'content/PRINT/GAGA-Print_Vegetarium_2005/GAGA-Print_Vegetarium_2005_Tomatoe.jpg'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});
	
	$("#HYROP").click(function() {
		$.fancybox([
			'content/PRINT/Hyro-Print_Idaptive_Fastcard_2010/Hyro-Print_Idaptive_Fastcard_2010-01.png',
			'content/PRINT/Hyro-Print_Idaptive_Fastcard_2010/Hyro-Print_Idaptive_Fastcard_2010-02.png',
			'content/PRINT/Hyro-Print_Idaptive_Fastcard_2010/Hyro-Print_Idaptive_Fastcard_2010-03.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});
	
	$("#F10P").click(function() {
		$.fancybox([
			'content/VI/F10-VI_2009/F10-VI_Brochure_2009-01.png',
			'content/VI/F10-VI_2009/F10-VI_Brochure_2009-02.png',
			'content/VI/F10-VI_2009/F10-VI_Brochure_2009-03.png',
			'content/VI/F10-VI_2009/F10-VI_Brochure_2009-04.png',
			'content/VI/F10-VI_2009/F10-VI_Brochure_2009-05.png',
			'content/VI/F10-VI_2009/F10-VI_Brochure_2009-06.png',
			'content/VI/F10-VI_2009/F10-VI_Brochure_2009-07.png',
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});
	
	/*************************************************************************************************************************/
	//VI
    /*************************************************************************************************************************/

	$("#EWISEVI").click(function() {
		$.fancybox([
			'content/VI/E-WISE-VI_2009/E-WISE-VI_Styleguide_2009-01.png',
			'content/VI/E-WISE-VI_2009/E-WISE-VI_Styleguide_2009-02.png',
			'content/VI/E-WISE-VI_2009/E-WISE-VI_Styleguide_2009-03.png',
			'content/VI/E-WISE-VI_2009/E-WISE-VI_Styleguide_2009-04.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});
	
	$("#SWVI").click(function() {
		$.fancybox([
			'content/VI/SafeWorking-VI_2010/SafeWorking-VI_Logo_2010.jpg',
			'content/VI/SafeWorking-VI_2010/SafeWorking-VI_Card_2010-01.png',
			'content/VI/SafeWorking-VI_2010/SafeWorking-VI_Card_2010-02.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});

	$("#F10VI").click(function() {
		$.fancybox([
			'content/VI/F10-VI_2009/F10-VI_Logo_Color_2009.png',
			'content/VI/F10-VI_2009/F10-VI_Logo_Mono_2009.png',
			'content/VI/F10-VI_2009/F10-VI_Card_2009-02.png',
			'content/VI/F10-VI_2009/F10-VI_Card_2009-01.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});

	/*************************************************************************************************************************/
	//CHAR
    /*************************************************************************************************************************/

	$("#ET").click(function() {
		$.fancybox([
			'content/CHARACTER/etang-Character_Design_ET_2004/etang-Character_Design_ET_2004-01.png',
			'content/CHARACTER/etang-Character_Design_ET_2004/etang-Character_Design_ET_2004-02.png',
			'content/CHARACTER/etang-Character_Design_ET_2004/etang-Character_Design_ET_2004-03.png',
			'content/CHARACTER/etang-Character_Design_ET_2004/etang-Character_Design_ET_2004-04.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});

	/*************************************************************************************************************************/
	//CG
    /*************************************************************************************************************************/
	$("#DEST").click(function() {
		$.fancybox([
			'content/CG/GAGA-CG_Destination_2006/GAGA-CG_Destination_2006_1.jpg',
			'content/CG/GAGA-CG_Destination_2006/GAGA-CG_Destination_2006_2.jpg'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});

	$("#DESTLIVE").fancybox({
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoScale'     	: false,
		'type'				: 'iframe',
		'width'				: 640,
		'height'			: 512,
		'scrolling'   		: 'no'
	});
	
	/*************************************************************************************************************************/
	//BANNER / EDM
    /*************************************************************************************************************************/
	$("#ETEDM").click(function() {
		$.fancybox([
			'content/EDM/etang-EDM_club.etang.com_2004.png',
			'content/EDM/etang-EDM_Find_Your_Photo_2004.png',
			'content/EDM/etang-EDM_FM101_Amazing_Night_2004.jpg',
			'content/EDM/etang-EDM_OTVSTAR_GALA_2004.gif',
			'content/EDM/etang-EDM_OTVSTAR_Talent_Show_2004_1.gif',
			'content/EDM/etang-EDM_OTVSTAR_Talent_Show_2004_2.gif'
			
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});
	
	$("#ADIDAS").click(function() {
		$.fancybox([
			'content/BANNER/adidas-Banner_FIFA_Women_World_Cup_2003/adidas-Banner_FIFA_Women_World_Cup_2003.swf'		
		], {
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'autoScale'     	: false,
			'type'				: 'iframe',
			'width'				: 740,
			'height'			: 320,
			'scrolling'   		: 'no'
		});
	});
	
	$("#EA1").click(function() {
		$.fancybox([
			'content/BANNER/EA-Banner_NFS_2004/EA-Banner_NFS_2004.swf',	
			'content/BANNER/EA-Banner_MOH_2004/EA-Banner_MOH_2004.swf',	
			'content/BANNER/EA-Banner_LOTR_2004/EA-Banner_LOTR_2004.swf'	
		], {
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'autoScale'     	: false,
			'type'				: 'iframe',
			'width'				: 630,
			'height'			: 150,
			'scrolling'   		: 'no'
		});
	});
	
	$("#EA2").click(function() {
		$.fancybox([
			'content/BANNER/EA-Banner_FIFA_2004/EA-Banner_FIFA_2004.swf',
			'content/BANNER/EA-Banner_TIGER_2004/EA-Banner_TIGER_2004.swf'	
		], {
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'autoScale'     	: false,
			'type'				: 'iframe',
			'width'				: 630,
			'height'			: 150,
			'scrolling'   		: 'no'
		});
	});
	
	$("#OTVSTAR1").click(function() {
		$.fancybox([
			'content/BANNER/etang-Banner_etang.com_2004/etang-Banner_etang.com_2004_352x288.swf'
		], {
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'autoScale'     	: false,
			'type'				: 'iframe',
			'width'				: 352,
			'height'			: 288,
			'scrolling'   		: 'no'
		});
	});
	
	$("#OTVSTAR2").click(function() {
		$.fancybox([
			'content/BANNER/etang-Banner_OTVSTAR_2004/etang-Banner_OTVSTAR_2004_470x160.swf'
		], {
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'autoScale'     	: false,
			'type'				: 'iframe',
			'width'				: 470,
			'height'			: 160,
			'scrolling'   		: 'no'
		});
	});
	
	$("#ETMM").click(function() {
		$.fancybox([
			'content/BANNER/etang-Banner_Magic_Mirror_2004/etang-Banner_Magic_Mirror_2004_470x160.swf'
		], {
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'autoScale'     	: false,
			'type'				: 'iframe',
			'width'				: 470,
			'height'			: 160,
			'scrolling'   		: 'no'
		});
	});
	
	$("#LOREAL").click(function() {
		$.fancybox([
			'content/BANNER/LOreal-Banner_Maybelline_2003/LOreal-Banner_Maybelline_2003.swf'
		], {
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'autoScale'     	: false,
			'type'				: 'iframe',
			'width'				: 500,
			'height'			: 338,
			'scrolling'   		: 'no'
		});
	});
	
	$("#LDH1").click(function() {
		$.fancybox([
			'content/BANNER/LDH-Banner_Interactive_Pet_2008/LDH-Banner_Interactive_Pet_2008_120x600.swf'
		], {
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'autoScale'     	: false,
			'type'				: 'iframe',
			'width'				: 120,
			'height'			: 600,
			'scrolling'   		: 'no'
		});
	});
	
	$("#LDH2").click(function() {
		$.fancybox([
			'content/BANNER/LDH-Banner_Interactive_Pet_2008/LDH-Banner_Interactive_Pet_2008_468x60.swf'
		], {
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'autoScale'     	: false,
			'type'				: 'iframe',
			'width'				: 468,
			'height'			: 60,
			'scrolling'   		: 'no'
		});
	});
	
	$("#LDH3").click(function() {
		$.fancybox([
			'content/BANNER/LDH-Banner_Interactive_Pet_2008/LDH-Banner_Interactive_Pet_2008_125x125.swf'
		], {
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'autoScale'     	: false,
			'type'				: 'iframe',
			'width'				: 125,
			'height'			: 125,
			'scrolling'   		: 'no'
		});
	});
	
	$("#ODLTWITTER").click(function() {
		$.fancybox([
			'content/BANNER/oodles-Banner_Twitter_Tagline_2009/oodles-Banner_Twitter_Tagline_2009.swf'
		], {
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'autoScale'     	: false,
			'type'				: 'iframe',
			'width'				: 728,
			'height'			: 90,
			'scrolling'   		: 'no'
		});
	});
	
	$("#ODLVIP1").click(function() {
		$.fancybox([
			'content/BANNER/oodles-Banner_VIP_Promo_Bubbles_2009_728x90/oodles-Banner_VIP_Promo_Bubbles_2009_728x90.swf'
		], {
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'autoScale'     	: false,
			'type'				: 'iframe',
			'width'				: 728,
			'height'			: 90,
			'scrolling'   		: 'no'
		});
	});
	
	$("#ODLVIP2a").click(function() {
		$.fancybox([
			'content/BANNER/oodles-Banner_VIP_Promo_Pacman_2009_728x90/oodles-Banner_VIP_Promo_Pacman_2009_728x90.swf'
		], {
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'autoScale'     	: false,
			'type'				: 'iframe',
			'width'				: 728,
			'height'			: 90,
			'scrolling'   		: 'no'
		});
	});

	$("#ODLVIP2b").click(function() {
		$.fancybox([
			'content/BANNER/oodles-Banner_VIP_Promo_Pacman_2009_300x250/oodles-Banner_VIP_Promo_Pacman_2009_300x250.swf'
		], {
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'autoScale'     	: false,
			'type'				: 'iframe',
			'width'				: 300,
			'height'			: 250,
			'scrolling'   		: 'no'
		});
	});
	
	$("#ODLVIP2c").click(function() {
		$.fancybox([
			'content/BANNER/oodles-Banner_VIP_Promo_Pacman_2009_120x600/oodles-Banner_VIP_Promo_Pacman_2009_120x600.swf'
		], {
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'autoScale'     	: false,
			'type'				: 'iframe',
			'width'				: 120,
			'height'			: 600,
			'scrolling'   		: 'no'
		});
	});
	
	$("#ODLCLOUD").click(function() {
		$.fancybox([
			'content/BANNER/oodles-Banner_VIP_Cloud_2009/oodles-Banner_VIP_Cloud_2009-02.jpg',
			'content/BANNER/oodles-Banner_VIP_Cloud_2009/oodles-Banner_VIP_Cloud_2009-sample.png'
		], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 300
		});
	});
	
	$("#ODLANIM").click(function() {
		$.fancybox([
			'content/BANNER/oodles-Waiting_Anim_2009/oodles-Waiting_Anim_2009.swf'
		], {
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'autoScale'     	: false,
			'type'				: 'iframe',
			'width'				: 400,
			'height'			: 300,
			'scrolling'   		: 'no'
		});
	});
		
/*end of function*/
});
