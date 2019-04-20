$(document).ready(function () {

	//store page number
	var pageNumber = 1;


	//listen to a click
	$('#submit').click(function () {

		//reset pageNumber to default value
		pageNumber = 1;

		load(pageNumber);

	});

	//listen to click
	$('.container').on('click', 'button', function () {

		if ($(this).hasClass('prev')) {

			if (pageNumber > 1) {
				pageNumber--;

				//call function
				load(pageNumber);

			}

		}

		if ($(this).hasClass('next')) {
			if (pageNumber < 10) {
				pageNumber++;

				//call function
				load(pageNumber);

			}
		}

	});


	function load(page) {

		//get element from DOM
		var searchInput = $('#search');

		//default api link
		var url = ' https://api.unsplash.com/';

		//when input#search is not empty
		if (searchInput.val() !== '') {

			var toLowerCase = searchInput.val().toLowerCase();

			url += `search/photos?page=${page}&query=${toLowerCase}&per_page=14`;

			//add key to api link
			url += `&client_id=95b50323e9088ff9cb2368e19fc9f970a5c08b945fbc3fbc55972e1180989fbc`;

			//call ajax function
			apiRequest(url);

		}

	};


	function apiRequest(link) {

		$.ajax({
			url: link,
			type: 'GET',
			dataType: 'json',
		}).done(function (response) {

			var destructResponse = response.results;
			//destructResponse[0].urls.small);

			//create div tags
			var div = $('<div>');
			var divButton = $('<div class="buttons">');

			//create button elements
			var button1 = $('<button class="prev">');
			var button2 = $('<button class="next">');

			//create i elements
			var iTag1 = $('<i class="fa fa-arrow-left">');
			var iTag2 = $('<i class="fa fa-arrow-right">');

			//append
			button1.append(iTag1);
			button2.append(iTag2);
			divButton.append(button1, button2);


			destructResponse.forEach((data, index) => {

				//call function
				useApiData(data, index, div);

			});

			//append
			$('.container').append(divButton);

		});

	}


	function useApiData(data, index, domElement) {
		//get element from Dom
		var container = $('.container');

		//create img tag
		var img = $('<img>');

		//set src of each img created
		img.attr('src', data.urls.small);

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