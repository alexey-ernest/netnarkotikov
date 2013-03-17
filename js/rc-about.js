// RC about

$(document).ready(function()
{
	// initializing columnize plugin
	$('#tabs').bind('tabsshow', function(event, ui) 
	{
		if (ui.panel.id == "reviews") 
		{
			buidColumns();
		}
	});	
	
	buidColumns();
});


//-----------------------------------------------------------------------
// Section
//-----------------------------------------------------------------------

function buidColumns()
{
	$("#review-list").columnize({
		columns: 3, 
		balance: true,
		column: 'columns-3',
		dontsplit: 'p'
	});
	
	$("#review-list .columns-3:last-child").css({marginRight:"0"});
	$("#review-list .columns-3").slice(1, 2).addClass("water-sign");
}