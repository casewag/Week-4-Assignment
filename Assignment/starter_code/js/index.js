$(document).ready(function(){

	$( ".readmore" ).click(showparagraph);
	function showparagraph()	{
		$( "#show-this-on-click" ).slideDown(1000);
		$( ".readless" ).show();
		$( ".readmore" ).hide();
	}

	$( ".readless" ).click(hideparagraph);
	function hideparagraph()	{
		$( ".hide" ).slideUp(1000);
		$( ".readmore" ).show();
		$( ".readless" ).hide();
	}

	$( ".learnmore" ).click(showlearnmore)
	function showlearnmore()	{
		$(".learnmore").hide();
		$("#learnmoretext").slideDown("slow");
	}
});

$("a").click(function(event){
    event.preventDefault();
});