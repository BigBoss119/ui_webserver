$(document).ready(function() {
	console.log ("Ready")
	
	$('#name').keyup( function ( ) {
		var searchName = $ ( this ) .val ()
		var ajaxdata = {
			name: searchName,
			ajax: true
		}
		console.log (ajaxdata)


		if (ajaxdata.name) {
				$.post('/found', ajaxdata, function ( data ) {
					
					var empty = $('#results').empty();

					for (var person in data) {
						$ (empty).append('<option>'+ data[person].firstname + ' ' + '<option>' + data[person].lastname)
					}
					console.log(data)
				})
		}

	})
})