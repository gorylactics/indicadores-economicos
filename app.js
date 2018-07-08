$(document).ready(function(){
	// alert('holaaaa');

	var web = 'https://mindicador.cl/api';
	var dolar, uf, utm, euro;
	

	$.ajax({
		url: web, 
		type: 'GET'
	}).then(function(data){
		console.log(data);
		dolar = data.dolar.valor;
		uf = data.uf.valor;
		utm = data.utm.valor;
		euro = data.euro.valor;
		peso = 1 / dolar;

		// console.log(euro)

		$('#dolar').text('$' + dolar.toLocaleString('es-CL'));
		$('#euro').text('$' + euro.toLocaleString('es-CL'));
		$('#uf').text('$' + uf.toLocaleString('es-CL'));
		$('#utm').text('$' + utm.toLocaleString('es-CL'));


	$('#conversor').click(function(){
		// alert(dolar);
		 var pesos = $('#pesos').val(); 
		 $('#resultado-dolar').text(pesos / dolar);
		 $('#resultado-euro').text(pesos / euro);


	});

	$('#conversor--dolar').click(function(){
		// alert(hola)
		
		var dolar = $('#dolar--americano').val();
		$('#resultado-peso').text(  dolar / peso );
		console.log(dolar);
	});
	





	});



});