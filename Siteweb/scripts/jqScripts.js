$("document").ready(function(){
	
	$("#acceuil").fadeIn(3000);
	
	$("button#fav").click(function(){
		$("#" + currentDiv).effect( "highlight", {color:"#669966"}, 1000 );
	});

	$("button").click(function(){
		$("#divConnect").slideToggle();
	});
	$("button#e").click(function(){
		$("li:last").hide();
		$("li:last").toggle("slide");
	});
	
	$("#mix").click(function(){
		$("#" + currentDiv).hide();
		$("#" + currentDiv).fadeIn(1000);
	});
	$("#mix").click(function(){
		$('#mix').animate({  borderSpacing: -360 }, {
			step: function(now) {
			  $(this).css('transform','rotate('+now+'deg)');
			},duration:'slow'
		});
	});
});