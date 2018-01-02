$(document).ready(function () {
	console.log('document ready');

	if (typeof(Storage) !== "undefined") {
		console.log('localStorage supported!');
  } else {
  	alert('Oops! this application will not work, your browser does not support localStorage feature!')
  }


  $('#btnAdd').click(function () {
  	console.log('btnAdd clicked');

  });

});
