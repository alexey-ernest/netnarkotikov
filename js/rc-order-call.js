// RC order-call

$(document).ready(function()
{
	// initializing ordercall form
	initOrderCallForm();
});


//-----------------------------------------------------------------------
// OrderCall form
//-----------------------------------------------------------------------

function initOrderCallForm()
{
	var formId = "#ordercall-form";

	// form validation
	$(formId).validate(
	{
		rules: 
		{
			phone: {required: true, digits: true, maxlength: 128},
			name: {required: false, maxlength: 128}
	  	},
		errorPlacement: function(error, element)
		{
			// don't show message
	   	}
	});
}