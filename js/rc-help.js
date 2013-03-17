// RC help

$(document).ready(function()
{
	// init autoresize for faq form
	$('textarea#faq-question').autoResize(
	{
		// On resize:
		onResize : function() {
			$(this).css({opacity:0.8});
		},
		// After resize:
		animateCallback : function() {
			$(this).css({opacity:1});
		},
		// Quite slow animation:
		animateDuration : 300,
		// More extra space:
		extraSpace : 18
	});
	
	// initializing faq form
	initFaqForm();
});

//-----------------------------------------------------------------------
// Faq form
//-----------------------------------------------------------------------

function initFaqForm()
{
	var formId = "#faq-form";

	// form validation
	$(formId).validate(
	{
		rules: 
		{
			email: {required: true, email: true, maxlength: 128},
			question: {required: true}
	  	},
		errorPlacement: function(error, element)
		{
			// don't show message
	   	}
	});
}