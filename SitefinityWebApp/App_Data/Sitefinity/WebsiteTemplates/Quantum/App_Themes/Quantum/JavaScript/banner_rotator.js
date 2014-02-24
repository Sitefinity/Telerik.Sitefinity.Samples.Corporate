$(document).ready(function() {



	$current_language = $("#langsWrapper li.sflangSelected a span").html();
	$("#langsWrapper").parent().prepend("<div class='lang-selector'>"+$current_language+"</div>");
	$(".lang-selector").live("click", function() {
		$("#langsWrapper").slideToggle();
	})
//	$('#wrapper').click(function() {
//		$("#langsWrapper").hide();
//	})


	$(".productSpecs .sflistListItem:odd").addClass("altrow");

//	$(".quantum-banner-rotator .sfimagesList li").eq(0).fadeIn();

	var banners = $("#banner-area .sfimagesList li").size();
	
	if(banners > 1) {
		$("#banner-area").append("<div class='arrow left'></div>");
		$("#banner-area").append("<div class='arrow right'></div>");
		$("#banner-area").append("<div class='navigator'></div>");
	//	$("#banner-area .sfimagesList").disableSelection();
	}

	var position = 1;	
	$bullet_id = 0;
	$("#banner-area .sfimagesList li").each(function() {
		$(".navigator").append("<div class='bullet' id='"+$bullet_id+"'></div>");
		$bullet_id++;
	})
	
	$(".bullet").eq(0).addClass('selected');
	

	$('.bullet').live("click", function() {
			position = parseInt($(this).attr('id'))+1;
			$('.bullet').removeClass('selected');
			$(this).addClass('selected');
			$("#banner-area .sfimagesList").animate({"opacity": 0.5}, 100, function(){
				$("#banner-area .sfimagesList").animate({"opacity": 1}, 100);
			});
			$("#banner-area .sfimagesList").animate({"left": '-'+$(this).attr('id')*960+'px'}, 200);
			check_arrows(position, banners);
	});

	
	$('.arrow.left').live("click", function() {
		if(position > 1){
	
			position = position - 1;
			
			$('.bullet').removeClass('selected');
			$('#'+(position-1)).addClass('selected');

			$("#banner-area .sfimagesList").animate({"opacity": 0.5}, 100, function(){
				$("#banner-area .sfimagesList").animate({"opacity": 1}, 100);
			});
			$("#banner-area .sfimagesList").animate({"left": $("#banner-area .sfimagesList").position().left+960+'px'}, 200);
		}
		check_arrows(position, banners);
	});
	
	$('.arrow.right').live("click", function() {
		if(position < banners){
			position = position + 1;
			$('.bullet').removeClass('selected');
			$('#'+(position-1)).addClass('selected');


			$("#banner-area .sfimagesList").animate({"opacity": 0.5}, 100, function(){
				$("#banner-area .sfimagesList").animate({"opacity": 1}, 100);
			});
			$("#banner-area .sfimagesList").animate({"left": $("#banner-area .sfimagesList").position().left-960+'px'}, 200);

		}
		check_arrows(position, banners);
	});

})

function check_arrows($position, $banners) {
	if($position == '1') {
		$('.arrow.left').fadeOut();
	} else {
		$('.arrow.left').fadeIn();
	};
	if ($position == $banners) {
		$('.arrow.right').fadeOut();	
	} else {
		$('.arrow.right').fadeIn();
	}
	

}