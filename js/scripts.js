$(document).ready(function () {
	console.log('document ready');

	var thingsDB = [];

	if (typeof(Storage) !== "undefined") {
		console.log('localStorage supported!');

		thingsDB = localStorage.getItem("thingsDB");
		if(thingsDB){
			thingsDB = JSON.parse(thingsDB);
			console.log('thingsDB found=>', thingsDB);
			$('#btnSettings').show();
		}else{
			console.log('thingsDB=>', thingsDB);
			console.log('thingsDB not found setting up DB!');
			thingsDB = [];
			// thingsDB.push({
			// 	name: 'test',
			// 	on: 'something'
			// });
			localStorage.setItem("thingsDB", JSON.stringify(thingsDB));
			thingsDB = localStorage.getItem("thingsDB");
			console.log('thingsDB=>', thingsDB);
			console.log('thingsDB=>', JSON.parse(thingsDB));
		}
	} else {
		alert('Oops! this application will not work, your browser does not support localStorage feature!')
	}


	$('#btnAdd').click(function () {
		console.log('btnAdd clicked');

		thingsDB = localStorage.getItem("lastname");
		console.log('thingsDB=>', thingsDB);
		if(thingsDB){

		}else{
			
		}

	});

});
