// RC home

$(document).ready(function()
{
	// initializing cycle plugin
	$('#splash').cycle({ 
		timeout:       5000,  // milliseconds between slide transitions (0 to disable auto advance) 
		speed:         500,  // speed of the transition (any valid fx speed value) 
		sync:          1,     // true if in/out transitions should occur simultaneously 
		fit:           1,     // force slides to fit container 
		pause:         1,     // true to enable "pause on hover" 
		delay:         0     // additional delay (in ms) for first transition (hint: can be negative) 
	});
});


//-----------------------------------------------------------------------
// Section
//-----------------------------------------------------------------------