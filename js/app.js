$(document).ready(function() {
	$('.nav-links').click(function(event) {
		var selected = event.target.id;
		
		if(selected === 'about') {
			$('.home').hide();
			$('.skills').hide();
			$('.projects').hide();
			$('.contact').hide();
			$('.np').show();
			$('.about').show();
		} else if(selected === 'skills') {
			$('.home').hide();
			$('.about').hide();
			$('.projects').hide();
			$('.contact').hide();
			$('.np').show();
			$('.skills').show();
		} else if(selected === 'projects') {
			$('.home').hide();
			$('.skills').hide();
			$('.about').hide();
			$('.contact').hide();
			$('.np').show();
			$('.projects').show();
		} else if(selected === 'contact') {
			$('.home').hide();
			$('.skills').hide();
			$('.projects').hide();
			$('.about').hide();
			$('.np').show();
			$('.contact').show();
		} 
	});

	$('.name').click(function(event) {
		$('.about').hide();
		$('.skills').hide();
		$('.projects').hide();
		$('.contact').hide();
		$('.np').hide();
		$('.home').show();
	});

	$('.grid').hover(
		function(event) {
			$(this.children).show();
		}, 
		function() {
			$(this.children).hide();
		}
	);
});