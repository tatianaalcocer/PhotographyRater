window.onload = function(){
    var userid = localStorage.getItem('userid');
    // console.log(userid);
    var currentLocation = window.location.origin;
    var URL = currentLocation + '/profile/' + userid;
    // console.log(URL);

    //AJAX call to pull the user's saved images
    $.get(URL, function(data, status){
      console.log(status);

      for (var i = 0; i < data.length; i++){
        // console.log(data[i].url);
        var imgurl = data[i].url;
        var imgId = data[i].id;

        // console.log(imgId);

        var img = $('<img>');
        img.data('id', imgId);
        img.addClass('profile-img');
        img.attr('src', imgurl);
        $('#profile-display').append(img);
      }
      $('.profile-img').on('click', function(e) {
        // console.log(e);
        var photoid = $(this).data('id');        
        console.log('id: '+ photoid);
        var clickedImg = e.currentTarget;
        // console.log(clickedImg.url);
        // console.log(clickedImg.src);
        deletePhoto(userid, photoid);
        window.location.reload();
      });
    });
  
  function deletePhoto(userId, photoId){
    var currentLocation = window.location.origin;
    var URL = currentLocation + '/delete/'+ photoId + '/' + userId;
    $.post(URL, function(data){
      console.log(data);
    });
  }
  

	var currentLocation = window.location.origin;
	var URL2 = currentLocation + '/userRGB/' + userid;

	var red;
	var green;
	var blue;

	//AJAX call to obtain the user's color profile for the settings tab.
	$.get(URL2, function(data, status){
		// console.log(data.red);
		// console.log(data.green);
		// console.log(data.blue);
		red = data.red/255;
		green = data.green/255;
		blue = data.blue/255;
		displayCanvas(red, green, blue);
	});

	function displayCanvas(r, g, b){
		var chart = new CanvasJS.Chart("settings", {
		theme: "theme4",//theme1
		backgroundColor: "white",
		title:{
			text: "Color Preference"              
		},
		animationEnabled: true,   // change to true
		data: [              
			{
				// Change type to "bar", "area", "spline", "pie",etc.
				type: "column",
				dataPoints: [
					{ label: "red",  y: r, color:'red'  },
					{ label: "green", y: g, color: 'green' },
					{ label: "blue", y: b, color: 'blue'  },
				]
			}
		]
		});

		chart.render();
		}

  }