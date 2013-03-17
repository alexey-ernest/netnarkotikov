// RC send-mail

$(document).ready(function()
{
	// init autoresize for faq form
	$('textarea#feedback-message').autoResize(
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
	
	
	// initializing feedback form
	initFeedbackForm();
});


//-----------------------------------------------------------------------
// Feedback form
//-----------------------------------------------------------------------

function initFeedbackForm()
{
	var formId = "#feedback-form";

	// form validation
	$(formId).validate(
	{
		rules: 
		{
			email: {required: true, email: true, maxlength: 128},
			subject: {required: false, maxlength: 512},
			message: {required: true}
	  	},
		errorPlacement: function(error, element)
		{
			// don't show message
	   	}
	});
}