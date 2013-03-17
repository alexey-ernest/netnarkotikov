// RC article

$(document).ready(function()
{
	// initializing columnize plugin
	$("#article-text").columnize({
		columns: 3, 
		balance: true,
		column: 'columns-3',
		dontsplit: 'li'
	});
	
	$("#article-text .columns-3:last-child").css({marginRight:"0"});
});


//-----------------------------------------------------------------------
// Section
//-----------------------------------------------------------------------