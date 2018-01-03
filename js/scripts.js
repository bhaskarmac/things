$(document).ready(function () {
	console.log('document ready');

	$('.modal').modal();

	$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 50, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });

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

		var txtThingName = $('#txtThingName').val();
		var txtThingBoughtDate = $('#txtThingBoughtDate').val();
		console.log('txtThingName=>', txtThingName);
		console.log('txtThingBoughtDate=>', txtThingBoughtDate);

		$('.container').append('<div class="row">\
			<div class="col s12 m4 l2"></div>\
			<div class="col s12 m4 l8">\
			<div class="card blue-grey darken-1">\
			<div class="card-content white-text">\
			<div class="row">\
			<div class="input-field col s6">\
			<span class="card-title">'+txtThingName+'</span>\
			</div>\
			<div class="input-field col s6">\
			<span class="card-title">'+txtThingName+'</span>\
			</div>\
			</div>\
			</div>\
			</div>\
			</div>\
			<div class="col s12 m4 l2"></div>\
			</div>');




		thingsDB = localStorage.getItem("thingsDB");
		console.log('thingsDB=>', thingsDB);
		if(thingsDB){
			thingsDB.push({
				name: txtThingName,
				boughtDate: txtThingBoughtDate
			});
			console.log('after adding thingsDB=>', thingsDB);
		}else{
			
		}

	});

});
