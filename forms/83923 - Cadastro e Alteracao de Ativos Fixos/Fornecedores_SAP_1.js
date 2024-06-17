function IntegracaoSAPFornecedores(rsltnrforn) {

	var settings = {
		//"url": "https://fiori.inima.com/sap/bc/zfluig_cliente/",
		"url": "https://sap.gsinima.com.br/sap/bc/zfluig_cliente/",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		"data": "username: " + "fluig" +
			    ", password : " + "Fluigbrasil2021!" +
				", I_lifnr: " + rsltnrforn,
	};

	//CHAMADA DO WEBSERVICE DA PRIMEIRA EMPRESA.
	ajaxCall = $.ajax(settings).done(function(response) {

		response2 = response;

	}).fail(function(xhr, statusReq) {
		if (xhr.status == 0) {
			alert('Verifique a internet');
		}
		if (xhr.status == 404) {

			alert('Página não encontrada.');
		}
		if (xhr.status == 500) {
			alert('Servidor está fora do ar. Entre em contato com a TI');
		}
	}).then(function() {
		var xmlDoc = $.parseXML(response2);
		var $xml = $(xmlDoc);

		// Find Node Tag
		var $zfluig = $xml.find("ZFLUIGS04");
		//Get XML Tag Result para variavel;
		$zfluig.each(function(){
				var rslttipoFornec = $(this).find('BRSCH').contents().eq(0).text();
		    //Remove os Zeros da frente do numero do Fornecedor;

		    //Insert do XML Result em formulario HTML;
				if(rslttipoFornec == "BR02"){
		    	$("#inputtipoFornecedor").val(rslttipoFornec);
					$("#inputFluxo").val("Fiscal");
				}
				else if(rslttipoFornec == "BR03"){
					$("#inputtipoFornecedor").val(rslttipoFornec);
				}
				else if(rslttipoFornec == "" || rslttipoFornec == null){
					$("#inputtipoFornecedor").val("0");
				}
		});
	});
}


function IntegracaoSAPFornecedoresCodigo(){
	var nrFornec = $("#numfornecedor").val();
	var settings = {
		//"url": "https://fiori.inima.com/sap/bc/zfluig_cliente/",
		"url": "https://sap.gsinima.com.br/sap/bc/zfluig_cliente/",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		"data": "username: " + "fluig" +
					", password : " + "Fluigbrasil2021!" +
				", I_lifnr: " + nrFornec,
	};

	//CHAMADA DO WEBSERVICE DA PRIMEIRA EMPRESA.
	ajaxCall = $.ajax(settings).done(function(response) {

		response2 = response;

	}).fail(function(xhr, statusReq) {
		if (xhr.status == 0) {
			alert('Verifique a internet');
		}
		if (xhr.status == 404) {

			alert('Página não encontrada.');
		}
		if (xhr.status == 500) {
			alert('Servidor está fora do ar. Entre em contato com a TI');
		}
	}).then(function() {
		var xmlDoc = $.parseXML(response2);
		var $xml = $(xmlDoc);

		// Find Node Tag
		var $zfluig = $xml.find("ZFLUIGS04");
		//Get XML Tag Result para variavel;
		$zfluig.each(function(){
				var rsltdescFornec = $(this).find('NAME').contents().eq(0).text();
				$("#descfornecedor").val(rsltdescFornec);

		});
	});
}
