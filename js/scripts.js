$(document).ready(function () {
	console.log('DOM ready');

	var thingsDB = [];

	$('.modal').modal();

	$('.datepicker').pickadate({
    selectMonths: true, // Creates a drop-down to control month
    selectYears: 50, // Creates a drop-down of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });


	//check for the localStorage support in the browser or not
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
			localStorage.setItem("thingsDB", JSON.stringify(thingsDB));
			thingsDB = localStorage.getItem("thingsDB");
			console.log('thingsDB=>', thingsDB);
			console.log('thingsDB=>', JSON.parse(thingsDB));
		}
	} else {
		$('.notSupported').slideDown('slow');
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
			<div class="input-field col s8">\
			<span class="card-title">'+txtThingName+'</span>\
			</div>\
			<div class="input-field col s4">\
			<p>'+txtThingBoughtDate+'</p>\
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
			thingsDB = JSON.parse(localStorage.getItem("thingsDB"));
			console.log('thingsDB=>', thingsDB);
			thingsDB.push({
				name: txtThingName,
				boughtDate: txtThingBoughtDate
			});
			console.log('after adding thingsDB=>', thingsDB);
			localStorage.setItem("thingsDB", JSON.stringify(thingsDB));
		}else{

		}

	});

});
