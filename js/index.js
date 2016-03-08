$( document ).ready(); {
	/* will wait for page content to load all at once? curly braces go around whole jquery base. */

	$(".readmore").click(blogExpand);
	$(".readless").click(blogCollapse);
	$(".learnmore").click(blogPageExpand);

	function blogExpand () {
		event.preventDefault();  
				/* a tags won't navigate away */
		$("#show-this-on-click").slidedown();
		$(".readmore").hide;
		$(".readless").show;
	}

	function blogCollapse () {
		event.preventDefault();  
				/* pa tags wont navigate away */
		$("#show-this-on-click").slideup();
		$(".readmore").show;
		$(".readless").hide;
	}

	function blogPageExpand () {
	event.preventDefault();  
			/* a tags won't navigate away */
	$("#learnmoretext").slidedown();
	$(".learnmore").hide;
	$(".readless").show;
	}
}