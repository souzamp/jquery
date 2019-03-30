$(function(){
	$('#azul').click(function(){
		//$('h1').hide();
		//$('p').css("color", "blue");
		$('p')
			.css("background-color", "blue")
			.fadeOut()
			.delay(1000)
			.fadeIn();
	});

	$('#vermelho').click(function(){
		//$('h1').hide();
		//$('p').css("color", "red");
		$('p').css("background-color", "red");
			/*.fadeOut('slow')
			.delay(1000)
			.fadeIn('slow'); */
		$('#mensagem')
			.text("Cor altera com sucesso")
			.css({color:'red', border:'1px solid black'})
			.delay(3000)
			.addClass('green')
			.fadeOut('fast')
		$('button').removeClass('red');
	});
});

$(function() {
	$('#l1').click(function() {
		/* Act on the event */
		$('#i1')
			.show();
			.hide();
			.hide();
			.hide();
	});

	$('#l2').click(function() {
		/* Act on the event */
		$('#i1')
			.hide();
			.show();
			.hide();
			.hide();
	});


	$('#l3').click(function() {
		/* Act on the event */
		$('#i1')
			.hide();
			.hide();
			.show();
			.hide();
	});

	$('#l4').click(function() {
		/* Act on the event */
		$('#i1')
			.hide();
			.hide();
			.hide();
			.show();
	});
});