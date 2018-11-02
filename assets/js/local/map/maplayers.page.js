
$.get('/maplayers?sort=createdAt DESC', function (data) {
  console.log(data);
});
function hideAddForm(){
	$('div#maplayers-add-container').fadeOut();
	$('div#maplayers-add-container').find('input:text').val('');
	$('div#maplayers-add-container').find('textarea').val('');
}
function openAddMapLayerForm(){
	$('div#maplayers-add-container').fadeIn();
}
