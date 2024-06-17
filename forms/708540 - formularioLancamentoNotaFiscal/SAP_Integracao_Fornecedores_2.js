function IntegracaoSAPFornecedores2() {
	var inputCodigo = $("#modalInputNr").val();
	var inputNome = $("#modalInputName").val();
	inputNome = inputNome.replace(/[ÁÀÃÂ]/g, 'A').replace(/[ÉÈÊ]/g, 'E').replace(/[ÓÒÕÔ]/g, 'O').replace(/[Í]/g, 'I').replace(/[ÚÙÛ]/g,'U').replace(/[Ç]/g,'C').replace(/[áàâã]/g, 'a').replace(/[éèê]/g, 'e').replace(/[óòôõ]/g, 'o').replace(/[í]/g, 'i').replace(/[úùû]/g,'u').replace(/[ç]/g,'c');
	var inputCPFCNPJ = $("#modalInputCNPJCPF").val();
	if(inputCPFCNPJ != ""){
		var settings = {
			//"url": "https://fiori.gsinima.com.br/sap/bc/zfluig_cliente/",
			"url": "https://sap.gsinima.com.br/sap/bc/zfluig_cliente/",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			"data": "username: " + "fluig" +
				    ", password : " + "Fluigbrasil2021!" +
					", I_CPFCNPJ: " + inputCPFCNPJ,
		}
	}
	if(inputNome != ""){
		var settings = {
			//"url": "https://fiori.gsinima.com.br/sap/bc/zfluig_cliente/",
			"url": "https://sap.gsinima.com.br/sap/bc/zfluig_cliente/",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			"data": "username: " + "fluig" +
				    ", password : " + "Fluigbrasil2021!" +
					", I_name: " + inputNome,
		}
	}
	if(inputCodigo != ""){
		var settings = {
			//"url": "https://fiori.gsinima.com.br/sap/bc/zfluig_cliente/",
			"url": "https://sap.gsinima.com.br/sap/bc/zfluig_cliente/",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			"data": "username: " + "fluig" +
				    ", password : " + "Fluigbrasil2021!" +
					", I_lifnr: " + inputCodigo,
		}
	}

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
		//Get XML Tag Result para variavel;
		$xml.each(function(){
		var xmlLength = $(this).find("ZFLUIGS04").length;
		//Limpa tabela antes de exibir novo resultado.
		$("#modalTableFornecedores").find("tr:gt(0)").remove();
		//Loop For para restornar linhas para resultado
		for(var i = 0; i < xmlLength; i++){
				var rslttipoFornec = $(this).find('FRGRP').eq(i).text();
				var rsltNrFornec = $(this).find('LIFNR').eq(i).text();
				var rsltNameFornec = $(this).find('NAME').eq(i).text();
				var rsltCPFFornec = $(this).find('CPF').eq(i).text();
				var rsltCNPJFornec = $(this).find('CNPJ').eq(i).text();
		    //Remove os Zeros da frente do numero do Fornecedor;
				rsltNrFornec = rsltNrFornec.replace(/^0+/, '');
		    //Insert do XML Result em table HTML;modalTableFornecedores
				$("#modalTableFornecedores tbody").append("<tr><td>" + rsltNrFornec + "</td><td>" + rsltNameFornec + "</td><td>" + rsltCPFFornec + rsltCNPJFornec+"</td><td>" + rslttipoFornec+"</td></tr>");
			}
		});
	});
}
