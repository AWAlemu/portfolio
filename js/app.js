$(document).ready(function() {
	$('.nav-links').click(function(event) {
		var selected = event.target.id;

		if (selected === 'about') {
			$('.page').addClass('hidden');
			$('.about').removeClass('hidden');
		} else if (selected === 'skills') {
			$('.page').addClass('hidden');
			$('.skills').removeClass('hidden');
		} else if (selected === 'projects') {
			$('.page').addClass('hidden');
			$('.projects').removeClass('hidden');
		} else if (selected === 'resume') {
			$('.page').addClass('hidden');
			$('.resume').removeClass('hidden');
		}
	});

	$('.name').click(function(event) {
		$('.page').addClass('hidden');
		$('.home').removeClass('hidden');
	});

	$('.grid').hover(
		function(event) {
			$(this.children[1]).css('z-index', '10');
		},
		function() {
			$(this.children[1]).css('z-index', '1');
		}
	);
});
