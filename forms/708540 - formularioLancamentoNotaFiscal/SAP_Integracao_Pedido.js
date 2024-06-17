function IntegracaoSAPPedido(nrmigo){
	$("#listPedidos").empty();
	var settings = {
		//"url": "https://fiori.gsinima.com.br/sap/bc/zfluig_migo_ped/",
		"url": "https://sap.gsinima.com.br/sap/bc/zfluig_migo_ped/",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		"data": "username: " + "fluig" +
			    ", password : " + "Fluigbrasil2021!" +
				", I_NR_DOCUMENTO: " + nrmigo
	};
	//CHAMADA DO WEBSERVICE DA PRIMEIRA EMPRESA.
	ajaxCall = $.ajax(settings).done(function(response){
		response2 = response;
	}).fail(function(err){
		console.log(err);
	}).then(function(){
		var xmlDoc = $.parseXML(response2);
		var $xml = $(xmlDoc);
		// Find Node Tag
		var $zfluig = $xml.find("ITENS");
		//Get XML Tag Result para variavel;
		$zfluig.each(function(){
			var xmlLength = $(this).find("ZFLUIGS06").length;
			console.log("XMLLength: "+xmlLength);
			for(var i = 0; i < xmlLength; i++){
		  		if(i > 0){
		  			var nrPedidoAnterior = $(this).find("ZFLUIGS06").eq(i-1).find('BSTNR').text();
		    	}
		  		var textnrPedido = $(this).find("ZFLUIGS06").eq(i).find('BSTNR').text();
				console.log("Nr Pedido: "+textnrPedido);
		      	var textnrItem = $(this).find("ZFLUIGS06").eq(i).find('EBELP').text();
				console.log("Nr Item: "+textnrItem);
		      	var textcodMat = $(this).find("ZFLUIGS06").eq(i).find('MATERIAL').text();
				//Remove os Zeros da frente do numero do Fornecedor;
				textcodMat = textcodMat.replace(/^0+/, '');
				console.log("Cod Material: "+textcodMat);
		      	var textdescMat = $(this).find("ZFLUIGS06").eq(i).find('SHORT_TEXT').text();
				console.log("Desc Material: "+textdescMat);
		      	var texttipoclascust = $(this).find("ZFLUIGS06").eq(i).find('ACCTASSCAT').text();
				console.log("Classe Custo: "+texttipoclascust);
		      	var textElemPep = $(this).find("ZFLUIGS06").eq(i).find('WBS_ELEM').text();
				console.log("Elemento PEP: "+textElemPep);
		      	var textcCusto = $(this).find("ZFLUIGS06").eq(i).find('COSTCENTER').text();
				console.log("Centro de Custo: "+textcCusto);
		      	var textqtd = $(this).find("ZFLUIGS06").eq(i).find('QUANTITY').text();
				console.log("Quantidade: "+textqtd);
		      	var textPrice = $(this).find("ZFLUIGS06").eq(i).find('NET_PRICE').text();
				console.log("Preço: "+textPrice);
				fluxoDP(textcodMat);
		      	if(texttipoclascust == "K"){
					var tipoclasscusto = "Centro de Custo";
					var textvalorCusto = textcCusto;
				}
		      	if(texttipoclascust == "P"){
					var tipoclasscusto = "Elemento PEP";
					var textvalorCusto = textElemPep;
				}
		      	if(textnrPedido == nrPedidoAnterior){
		      		var addItens = "<li><strong>Item:</strong> " + textnrItem + " <strong>| Material:</strong> " + textcodMat + " " + textdescMat + "<strong> | Qtd:</strong> " + textqtd + " <strong>| Valor Unitário:</strong> R$" + textPrice + "<ul><li><strong>" + tipoclasscusto + "</strong>: " + textvalorCusto + "</li></ul></li>";
		        	var listItens = $("#listItens_"+(i-1));
		        	listItens.append(addItens);
		      	}
		      	else{
		        	var addPedido = "<li class='list-pedidos'><strong>Pedido:</strong> " + textnrPedido + "<ul class='list-item' id='listItens_"+i+"'><li><strong>Item:</strong> " + textnrItem + " <strong>| Material:</strong> " + textcodMat + " " + textdescMat + "<strong> | Qtd:</strong> " + textqtd + " <strong>| Valor Unitário:</strong> R$" + textPrice + "<ul><li>" + tipoclasscusto + ": " + textvalorCusto + "</li></ul></li></ul></li>";
					console.log("Adiciona Pedido: "+addPedido);
					var listPedido = $("#listPedidos");
		        	listPedido.append(addPedido);
		      	}
			}
			function fluxoDP(textcodMat){
				//Loop For para comparar valores entre CodMaterial e DataSet ds_CodMaterial_DP
				var codMatConstraint = new Array(DatasetFactory.createConstraint("CODMATERIAL", textcodMat, textcodMat, ConstraintType.MUST));
				var codMatReturnFields = new Array("CODMATERIAL");
				var codMatDataset = DatasetFactory.getDataset("ds_CodMaterial_DP");
				var codMatDatasetlength = codMatDataset.values.length;
				var fluxoDP = $("#inputfluxoDP").val();
				for (var j = 0; j < codMatDataset.values.length; j++){
					if(textcodMat == codMatDataset.values[j].CODMATERIAL){
						$("#inputfluxoDP").val("True");
						console.log("True");
						return;
					}else{
						$("#inputfluxoDP").val("False");
						console.log("False");
						return;
					}
				}
			}
		});
	});
}