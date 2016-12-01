var userid = localStorage.getItem('userid');

var userVariance = localStorage.getItem('userVariance');


//When 'Settings' tab is clicked, 'My Photos' tab becomes invisible
$('#settingspane').on('click', function(){
  $('.container-profile').css('display', 'none');
});

//When 'My Photos' tab is clicked, the window reloads
$('#profilepane').on('click', function(){
	window.location.reload();
});


//Function to reset user's color profile to default RGB values of 130, 130, 130
$('#resetBtn').on('click', function(){
	var userid = localStorage.getItem('userid');
	var URL = '/reset/'
	$.get('/reset/' + userid, function(data){
		console.log(data);
	});
});

//Slider to set color variance
$("#slider").on("mouseup", function() { 
	var sliderNum = $('#slider').val();
	var currentURL = window.location.origin;
	var URL = currentURL + '/setvariance/' + userid + '/' + sliderNum;

	$.get(URL);
});

