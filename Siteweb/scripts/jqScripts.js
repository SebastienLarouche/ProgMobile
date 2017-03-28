$("button#fav").click(function(){
	$("#" + currentDiv).effect( "highlight", {color:"#669966"}, 1000 );
});

$("button").click(function(){
	$("#divConnect").slideToggle(1000);
});