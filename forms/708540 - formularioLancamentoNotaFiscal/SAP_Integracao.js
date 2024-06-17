
function IntegracaoSAP() {
	var nrmigo = document.getElementById("nummigo").value;
	var nrpedido = document.getElementById("numpedido");
	var nrnf = document.getElementById("numnf");
	var nrfornecedor = document.getElementById("numfornecedor");
	var descfornecedor = document.getElementById("descfornecedor");
	var settings = {
		//"url": "https://fiori.gsinima.com.br/sap/bc/zfluig_service/",
		"url": "https://sap.gsinima.com.br/sap/bc/zfluig_service/",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		"type":"POST",
		"data": "username: " + "fluig" +
			    ", password : " + "Fluigbrasil2021!" +
				", I_NR_DOCUMENTO: " + nrmigo,
	};


	//Verifica se MIGO ja foi lançada
var processId;
var status;
var nrmigo = $("#nummigo").val();
var c1 = DatasetFactory.createConstraint("nummigo", nrmigo, nrmigo, ConstraintType.MUST);
var constraint1 = new Array(c1);
var returnfields1 = new Array ("nummigo","documentId");
var lancFinancDataset = DatasetFactory.getDataset("ds_form_Lancamento_NF_v2", returnfields1, constraint1, null);
for (var i = 0; i < lancFinancDataset.values.length; i++){
  var docId = lancFinancDataset.values[i]["documentId"];
	var c2 = DatasetFactory.createConstraint("cardDocumentId", docId, docId, ConstraintType.MUST);	
	var constraint2 = new Array(c2);	
	var returnfields2 = new Array("workflowProcessPK.processInstanceId","status");	
	var workflowDataset = DatasetFactory.getDataset("workflowProcess", returnfields2, constraint2, null);
	for (var j = 0; j < workflowDataset.values.length; j++){
			processId = workflowDataset.values[j]["workflowProcessPK.processInstanceId"];
			status = workflowDataset.values[j]["status"];
	}
}
	console.log("Status MIGO: "+status);
	console.log("ProcessId: "+processId);

	if (status == 2){
		FLUIGC.toast({
			title: 'Aviso: ',
			message: 'O processo de numero '+processId+' já foi concluído para essa MIGO',
			type: 'danger'
		});
	}else if (status == 0){
		FLUIGC.toast({
			title: 'Aviso: ',
			message: 'Essa MIGO já possui o processo '+processId+' em aberto.',
			type: 'danger'
		});
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
		// Find Node Tag
		var $zfluig = $xml.find("ZFLUIGS03", "ZFLUIGS01");
		//Get XML Tag Result para variavel;
		$zfluig.each(function(){
		    var rsltnrnf = $(this).find('XBLNR').text();
		    var rsltdtdoct = $(this).find('BLDAT').text();
		    var rsltdtlanc = $(this).find('BUDAT').text();
		    var rsltemp = $(this).find('BUKRS').contents().eq(0).text();
		    var rsltnrforn = $(this).find('LIFNR').contents().eq(0).text();
		    var rsltnrped = $(this).find('BSTNR').contents().eq(0).text();
		    var rsltdescforn = $(this).find('NAME1').contents().eq(0).text();
				var rsltTipoFornec = $(this).find('FRGRP').contents().eq(0).text();
		    //Troca formato para dd/mm/yyyy da data do Documento;
		    var dtdocSplit = rsltdtdoct.split("-");
		    var dtdocConvert = new Date(dtdocSplit[0], dtdocSplit[1]-1, dtdocSplit[2]);
		    var dtdoc = new Date(dtdocConvert);
		    var dtdocdia = dtdoc.getDate();
		    var dtdocmes = (dtdoc.getMonth() + 1);
		    var dtdocano = dtdoc.getFullYear();
		    	if(dtdocdia<10){dtdocdia='0'+dtdocdia}
					if(dtdocmes<10){dtdocmes='0'+dtdocmes}
			  var datedoc = (dtdocdia + '/' + dtdocmes + '/' + dtdocano);
		    //Troca formato para dd/mm/yyyy da data de Lançamento;
		    var dtlancSplit = rsltdtlanc.split("-");
		    var dtlancConvert = new Date(dtlancSplit[0], dtlancSplit[1]-1, dtlancSplit[2]);
		    var dtlanc = new Date(dtlancConvert);
		    var dtlancdia = dtlanc.getDate();
		    var dtlancmes = (dtlanc.getMonth() + 1);
		    var dtlancano = dtlanc.getFullYear();
		    	if(dtlancdia<10){dtlancdia='0'+dtlancdia}
					if(dtlancmes<10){dtlancmes='0'+dtlancmes}
				var datelanc = (dtlancdia + '/' + dtlancmes + '/' + dtlancano);
		    //Remove os Zeros da frente do numero do Fornecedor;3
		    rsltnrforn = rsltnrforn.replace(/^0+/, '');
		    //Insert do XML Result em formulario HTML;
		    $("#numnf").val(rsltnrnf);
		    $("#dtdoc").val(datedoc);
		    $('#dtlanc').val(datelanc);
		    $('#drop_emp').val(rsltemp);
		    $("#numfornecedor").val(rsltnrforn);
		    $("#descfornecedor").val(rsltdescforn);
		    $("#numpedido").val(rsltnrped);

			//Preenche Coligada Resumida ao carregar WebService
			if(rsltemp == "B001"){
		      $("#inputcoligResum").val(" B001-GS INIMA BRASIL");
		    }
		    if(rsltemp == "B002"){
		      $("#inputcoligResum").val(" B002-AMBIENT");
		    }
		    if(rsltemp == "B003"){
		      $("#inputcoligResum").val(" B003-SESAMM");
		    }
		    if(rsltemp == "B004"){
		      $("#inputcoligResum").val(" B004-ARAUCARIA");
		    }
		    if(rsltemp == "B005"){
		      $("#inputcoligResum").val(" B005-SANEVAP");
		    }
		    if(rsltemp == "B006"){
		      $("#inputcoligResum").val(" B006-SANAMA");
		    }
		    if(rsltemp == "B007"){
		      $("#inputcoligResum").val(" B007-CAEPA");
		    }
		    if(rsltemp == "B008"){
		      $("#inputcoligResum").val(" B008-COMASA");
		    }
		    if(rsltemp == "B009"){
		      $("#inputcoligResum").val(" B009-SAMAR");
			}
			if (rsltemp == "B010") {
				$("#inputcoligResum").val(" B010-GS INDUSTRIAL");
			}
			if (rsltemp == "B011") {
				$("#inputcoligResum").val(" B011-GS SERVICO");
			}
			if (rsltemp == "B012") {
				$("#inputcoligResum").val(" B012-PALMEIRAS SANEAMENTO");
			}
			if (rsltemp == "B013") {
				$("#inputcoligResum").val(" B013-SANEOURO");
			}
			if(rsltemp == "B014"){
				$("#inputcoligResum").val(" B014-JECEABA");
			}
			if(rsltemp == "B015"){
				$("#inputcoligResum").val(" B015-AQUAPOLO");
			}
			if(rsltemp == "B016"){
				$("#inputcoligResum").val(" B016-TRIUNFO");
			}
			if(rsltemp == "B017"){
				$("#inputcoligResum").val(" B017-SANEL");
			}
		    if(rsltemp == "B701"){
		      $("#inputcoligResum").val(" B701-CC ALTA MACEIO");
		    }
		    /*if(rsltemp == "BJ02"){
		      $("#inputcoligResum").val(" BJ02-CC VALE DO PARAIBA");
		    }*/

		    if (rsltnrnf != "" ) {
		    	$("#numnf").attr("readonly", true);
		    } else {
		    	$("#numnf").attr("readonly", false);
		    }

			//$("#numnf").attr("readonly", true);
		    $("#dtdoc").attr("readonly", true);
		    $('#dtlanc').attr("readonly", true);
		    $('#drop_emp').attr("readonly", true);
		    $("#numfornecedor").attr("readonly", true);
		    $("#descfornecedor").attr("readonly", true);
		    $("#numpedido").attr("readonly", true);
			$("#modalBtnFornec").attr("disabled", true);

			if ($(".required-integracaoSAP").val() == '') {
		      addErro($(".required-integracaoSAP"));
		    }else{
		      addSuccess($(".required-integracaoSAP"));
		    }

				var dtvenc = $("#dtvenc").val("");				

				IntegracaoSAPFornecedores(rsltnrforn);
				IntegracaoSAPPedido(nrmigo);

		});
	});

}
function addErro(campo) {
  campo.parents("div.form-group").removeClass('has-success').addClass('has-error');

}
function addSuccess(campo) {
  campo.parents("div.form-group").removeClass('has-error').addClass('has-success');

}
