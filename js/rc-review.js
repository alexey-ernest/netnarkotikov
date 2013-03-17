// RC review

$(document).ready(function()
{
	// initializing columnize plugin
	$("#review-text").columnize({
		columns: 2, 
		balance: true,
		column: 'columns-2',
		dontsplit: 'li'
	});
	
	$("#review-text .columns-2:last-child").css({marginRight:"0"});
});