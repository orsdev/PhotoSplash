$(document).ready(function () {

	//store page number
	var pageNumber = 1;

	//listen to a click event
	$('#submit').click(function () {

		//get element from DOM
		var searchInput = $('#search');

		//default api link
		var url = ' https://api.unsplash.com/';

		//when input#search is not empty
		if (searchInput.val() !== '') {

			var toLowerCase = searchInput.val().toLowerCase();

			url += `search/photos?page=${pageNumber}&query=${toLowerCase}&per_page=14`;

			//add key to api link
			url += `&client_id=95b50323e9088ff9cb2368e19fc9f970a5c08b945fbc3fbc55972e1180989fbc`;

			apiRequest(url);

		}

	});

	function apiRequest(link) {

		$.ajax({
			url: link,
			type: 'GET',
			dataType: 'json',
		}).done(function (response) {

			var destructResponse = response.results;
			//destructResponse[0].urls.small);

			//create div tag
			var div = $('<div>');

			destructResponse.forEach((data, index) => {

				//call function
				useApiData(data, index, div);

			});


		});

	}


	function useApiData(data, index, domElement) {
		//get element from Dom
		var container = $('.container');

		//create img tag
		var img = $('<img>');

		//set src of each img created
		img.attr('src', data.urls.regular);

		//create div tag
		var div = $('<div>');

		//add classes to divs
		domElement.attr('class', 'gallery');
		div.attr('class', ' gallery__item gallery__item--' + index);

		//append
		div.append(img);
		domElement.append(div);

		//put element inside container
		container.html(domElement);
	}


});