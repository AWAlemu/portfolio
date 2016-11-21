$(document).ready(function() {
	$('.nav-links, .nav-menu').click(function(event) {
		var selected = event.target.id;

		if (selected === 'about' || selected ==='mnu-about') {
			$('.page').addClass('hidden');
			$('.about').removeClass('hidden');
		} else if (selected === 'projects' || selected ==='mnu-projects') {
			$('.page').addClass('hidden');
			$('.projects').removeClass('hidden');
		} else if (selected === 'resume' || selected === 'mnu-resume') {
			$('.page').addClass('hidden');
			$('.resume').removeClass('hidden');
		}
	});

	$('.name').click(function(event) {
		$('.page').addClass('hidden');
		$('.home').removeClass('hidden');
	});

	$('.row').hover(
		function(event) {
			$(this.children[1]).css('z-index', '10');
		},
		function() {
			$(this.children[1]).css('z-index', '-1');
		}
	);
});
