$('#settingspane').on('click', function(){
  $('.container-profile').css('display', 'none');
});

$('#profilepane').on('click', function(){
	window.location.reload();
});

$('#resetBtn').on('click', function(){
	var userid = localStorage.getItem('userid');
	$.get('/reset/' + userid, function(data){
		console.log(data);
	});
	console.log(userid);
});