// RC inner

$(document).ready(function()
{
	// init address
	initAddress();
	
	// init tabs
	initTabs(); 
});


//-----------------------------------------------------------------------
// Address
//-----------------------------------------------------------------------

function initAddress()
{
	var tabsId = "#tabs";
	var currentSelector = function(value) 
	{
		return 'a[href=#' + value + ']';
	};
	
	// For forward and back
	$.address.change(function(event)
	{	
		// selecting proper tab
  		$(tabsId).tabs("select" , window.location.hash);
		
		// Sets the page title
		var titleParts = $.address.title().split('|');
		var mainTitle = (titleParts.length > 1) ? titleParts[1] : titleParts[0];
		if ($(currentSelector(event.value)).text())
		{
			$.address.title($(currentSelector(event.value)).first().text() + ' | ' + mainTitle);
		}
  	});
	
	// when the tab is selected update the url with the hash
	$("#tabs").bind("tabsselect", function(event, ui) 
	{ 
  		window.location.hash = ui.tab.hash;
  	});
}


//-----------------------------------------------------------------------
// Tabs
//-----------------------------------------------------------------------

function initTabs()
{
	$("#tabs").tabs();
}