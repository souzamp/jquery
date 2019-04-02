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
		$('#i1').show();
		$('#i2').hide();
		$('#i3').hide();
		$('#i4').hide();
	});

	$('#l2').click(function() {
		/* Act on the event */
		$('#i1').hide();
		$('#i2').show();
		$('#i3').hide();
		$('#i4').hide();
	});


	$('#l3').click(function() {
		/* Act on the event */
		$('#i1').hide();
		$('#i2').hide();
		$('#i3').show();
		$('#i4').hide();
	});

	$('#l4').click(function() {
		/* Act on the event */
		$('#i1').hide();
		$('#i2').hide();
		$('#i3').hide();
		$('#i4').show();
	});
});