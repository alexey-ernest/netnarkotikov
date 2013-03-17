// RC photo

$(document).ready(function()
{
	// initializing photos list
	initPhotos();	
});


//-----------------------------------------------------------------------
// Photos
//-----------------------------------------------------------------------

function initPhotos()
{
	$(".photo-tile img").mediaPreview({
		loading_text: 'Загрузка...',
		offset: 20
	});
}