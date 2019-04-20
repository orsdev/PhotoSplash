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

					url += `search/photos?page=${pageNumber}&query=${toLowerCase}&per_page=12`;

					//add key to api link
					url += `&client_id=95b50323e9088ff9cb2368e19fc9f970a5c08b945fbc3fbc55972e1180989fbc`;

				}


			});