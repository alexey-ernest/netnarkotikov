// RC lib

$(document).ready(function()
{
	// initializing columnize plugin
	$('#tabs').bind('tabsshow', function(event, ui) 
	{
		if (ui.panel.id == "dict") 
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
	$(".dict-items").columnize({
		columns: 3, 
		balance: true,
		column: 'columns-3',
		dontsplit: 'p'
	});
	
	$(".dict-items .columns-3:last-child").css({marginRight:"0"});
}