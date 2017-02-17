var content = document.getElementById('content').innerHTML;
var template = ' \
<!DOCTYPE html> \
<html lang="en"><head> \
<meta http-equiv="content-type" content="text/html; charset=UTF-8"> \
    <meta charset="utf-8"> \
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> \
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> \
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags --> \
    <meta name="description" content=""> \
    <meta name="author" content=""> \
    <link rel="icon" href="favicon.ico"> \
 \
    <title>Package List</title> \
 \
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css" 
integrity="sha384-AysaV+vQoT3kOAXZkl02PThvDr8HYKPZhNT5h/CXfBThSRXQ6jW5DO2ekP5ViFdi" crossorigin="anonymous"> \
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/js/bootstrap.min.js" 
integrity="sha384-BLiI7JTZm+JWlgKa0M0kGRpJbF2J8q+qreVrKBC47e3K6BW78kGLrCkeRX6I9RoK" crossorigin="anonymous"></script> \
    <!-- Custom styles for this template --> \
    <link href="starter-template.css" rel="stylesheet"> \
	 \
  </head> \
 \
  <body> \
 \
    <nav class="navbar navbar-fixed-top navbar-dark bg-inverse"> \
      <a class="navbar-brand" href="#">Kevinsal03's Cydia Repo</a> \
      <ul class="nav navbar-nav"> \
        <li class="nav-item active"> \
          <a class="nav-link" href="https://kevinsal03.github.io/APT/cydiaAPT/index.html">Home <span class="sr-only">(current)</span></a> \
        </li> \
        <li class="nav-item"> \
          <a class="nav-link" href="#">Packages</a> \
        </li> \
      </ul> \
    </nav> \
 \
    <div class="container"> \
      <div class="starter-template"> \
'+ content + '\
 \
 \
    	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" 
integrity="sha384-3ceskX3iaEnIogmQchP8opvBy3Mi7Ce34nWjpBIwVTHfGYWQS9jwHDVRnpKKHJg7" crossorigin="anonymous"></script> \
	<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.3.7/js/tether.min.js" 
integrity="sha384-XTs3FgkjiBgo8qjEjBk0tGmf3wPrWtA6coPfQDfFEY8AnYJwjalXCiosYRBIBZX8" crossorigin="anonymous"></script> \
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/js/bootstrap.min.js" 
integrity="sha384-BLiI7JTZm+JWlgKa0M0kGRpJbF2J8q+qreVrKBC47e3K6BW78kGLrCkeRX6I9RoK" crossorigin="anonymous"></script> \
 \
 \
</body></html> \
';
document.documentElement.innerHTML = template;