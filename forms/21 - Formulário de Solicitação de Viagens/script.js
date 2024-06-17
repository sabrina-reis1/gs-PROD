$(document).ready(function() {
	actionsByTask(getNumState());
	$("#btnCentroCusto").click(function(){
		var selectEmpresaSolicitante = $("#selectEmpresaSolicitante").val();
		SAPCentroCusto(selectEmpresaSolicitante);
		FLUIGC.modal({
			title: 'Centro Custo',
			content: 
					'<table id="tableModalCentroCusto" class="table table-datatable table-bordered table-hover table-responsive scroll">'+
						'<thead>'+
							'<tr>'+
								'<th class="fs-txt-center fs-no-padding">CÓDIGO</th>'+
								'<th class="fs-txt-center fs-no-padding">DESCRIÇÃO</th>'+
							'</tr>'+
						'</thead>'+
						'<tbody>'+
						'</tbody>'+
					'</table>',
			id: 'modalCentroCusto',
			size: 'large'
		});
		// Função para pegar o campo que o usuario clicou 
		$("#tableModalCentroCusto").on('click', 'tr', function(event){
			var tableData = $(this).children("td").map(function(){
				return $(this).text();
			}).get(); // cria um array que mapeia os dados
			var codigoCentroCusto = tableData[0];
			var descricaoCentroCusto = tableData[1];
			$("#inputCentroCusto").val(codigoCentroCusto+' | '+descricaoCentroCusto);
			$('#modalCentroCusto').modal('toggle');
		});
	});

	$('#datasaida').change(function(){
		if($('#datasaida').val().trim() != ""){
			let dataSaida = montaData($('#datasaida').val().split(" ")[0]);
			let dataAtual = new Date();
			if(validarIntervaloDatas(dataAtual, dataSaida) <= 6){
				FLUIGC.toast({
					title: 'Datas: ',
					message: 'Período de até 7 dias da viagem, preencher campo de observação.',
					type: 'warning'
				});
			}
		}
	});

	$("#obs").on("blur", function(){
		if($('#datasaida').val().trim() != ""){
			let dataSaida = montaData($('#datasaida').val().split(" ")[0]);
			let dataAtual = new Date();
			if(validarIntervaloDatas(dataAtual, dataSaida) <= 6 && $(this).val().length < 40){
				FLUIGC.toast({
					title: 'Datas: ',
					message: "Se data de saída for menor que 7 dias, será necessário preencher campo 'Observação' com 40 caracteres, conforme item 8.2.2 da política de viagens.",
					type: 'warning'
				});
			}
		}
	});

	$("#slc_aprovacao").change(function() {
		definirAprovacao($(this).val())
	});

		
	$("#txta_justificativa").blur(function(){ 
		if($(this).val().trim() == ""){
			if($("#tblHistoricoJust input[id^=hd_justificativa_statusMsg___]:last").val() == "EDIT"){
				$("#tblHistoricoJust tbody tr:last").remove();
			}
		}
		else{
			if($("#tblHistoricoJust input[id^=hd_justificativa_statusMsg___]:last").val() != "EDIT" || $("#tblHistoricoJust tbody tr").length == 1){
				wdkAddChild('tblHistoricoJust');
				$("#tblHistoricoJust tbody tr:last").hide(); 
			}
	
			let data = new Date(),
			dia  = data.getDate().toString().padStart(2, '0'),
			mes  = (data.getMonth()+1).toString().padStart(2, '0'),
			ano  = data.getFullYear();
			hora = data.getHours().toString().padStart(2, '0');
			minutos = data.getMinutes().toString().padStart(2, '0');
			$("#tblHistoricoJust input[id^=hd_justificativa_nomeUsu___]:last").val(getUserAtual().nome);
			$("#tblHistoricoJust input[id^=hd_justificativa_codigoUsu___]:last").val(getUserAtual().codigo);
			$("#tblHistoricoJust input[id^=hd_justificativa_horario___]:last").val(dia+"/"+mes+"/"+ano + " - "+hora+":"+minutos);
			$("#tblHistoricoJust input[id^=hd_justificativa_statusMsg___]:last").val("EDIT");
			$("#tblHistoricoJust tbody textarea:last").val($(this).val().trim()); 
		}
		
	});
	
});

function SAPCentroCusto(inputEmpresa){
	var loop = {
		'PLANT':inputEmpresa
	};
	var resultJSON = JSON.stringify(loop);
	var settings = {
		"type": "POST",
		//"url": "https://fiori.gsinima.com.br:10433/sap/bc/Z_FLUIG_REST/?C_COST_CTR="+resultJSON, => Antigo
		//"url": "https://gsi-app-qas01.brasil.corp:44300/sap/bc/Z_FLUIG_REST/?C_COST_CTR="+resultJSON, => QSA (Homologação)
		"url": "https://sap.gsinima.com.br/sap/bc/Z_FLUIG_REST/?C_COST_CTR="+resultJSON, // PRD
		"datatype": "json",
		"crossDomain": true,
		beforeSend: function(xhr){
			//xhr.setRequestHeader ("Authorization", "Basic Zmx1aWc6Rmx1aWdicmFzaWwyMDIxIQ==");  => QSA (Homologação)
			xhr.setRequestHeader ("Authorization", "Basic YXZhbm50OmF2YW5udDAy"); 
		}
	};
	console.log(settings);
	$.ajax(settings).done(function(response) {
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
		console.log(response2);
		if (response2 == "ER001"){                
			alert("Empresa não possui Centro de Custo!");   
			$('#modalCentroCusto').modal('toggle');             
		}else{
			var xmlDoc = $.parseXML(response2);
			var $xml = $(xmlDoc);
			var $zfluig = $xml.find("TAB");
			$zfluig.each(function(){
				var xmlLength = $(this).find("ZMMS_RETORNO").length;
				for(var i = 0; i < xmlLength; i++){
					var codigo = $(this).find("ZMMS_RETORNO").eq(i).find('COD').text();
					var descricao = $(this).find("ZMMS_RETORNO").eq(i).find('DES').text();
					if(descricao != "BLOQUEADO"){
						$("#tableModalCentroCusto").append( '<tr>' +
																'<td class="fs-txt-center fs-no-padding">' + codigo.slice(5) + '</td>' +
																'<td class="fs-txt-center fs-no-padding">' + descricao + '</td>' +
															'</tr>'
														);
					}
				}
			});
		}
	});
}

function actionsByTask(numTask){
	loadChat();

	if(numTask == '-1') {
		$("#painel-aprovacao").removeClass('hide')
	}
	
	if(numTask == '0'){
		let dtsEmpresa = DatasetFactory.getDataset("dsConsultaEmpCpf", null, null, null);
		if(dtsEmpresa.values.length > 0){
			$("#nmempresa").append(`<option value="${dtsEmpresa.values[0].EMP}" selected>${dtsEmpresa.values[0].EMP}</option>`);
		}
	}

	if(numTask == '4'){
		$("#painel-aprovacao").removeClass("hide");
		$("#slc_aprovacao").val('');
		$("#txta_justificativa").val('');
	}

	if(numTask == '62'){
		$("#painel-aprovacao>.panel-heading h4 a").text("Retorno da Aprovação");
		$("#painel-aprovacao").removeClass("hide");
		$("#slc_aprovacao").parents('.form-group').hide();
		$("#txta_justificativa").parents('.form-group').removeClass("hide");
		$("#txta_justificativa").attr('disabled', true);
		$("#painel-aprovacao").insertAfter("#painel-info-processo");
	}

	let tipoApont = ((numTask == '-1') ? $('#drop_apontamento').text().toLowerCase() : $('#drop_apontamento').val());
	$(".opcoes-apontamento input, .opcoes-apontamento label").hide();
	if(tipoApont == 'selecione'){
	}else if(tipoApont == 'centroCusto' || tipoApont == 'centro de custo'){
		$('#labelCentroCusto').show();
		$('#inputCentroCusto').show();
		$('#btnCentroCusto').show();
	}else if(tipoApont == 'projeto' || tipoApont == 'pep'){
		$('#labelPEP').show();
		$('#inputPEP').show();
	}else if(tipoApont == 'ordem'){
		$('#labelOrdem').show();
		$('#inputOrdem').show();
	}

	definirAprovacao($("#slc_aprovacao").val());
}

function montaData(data) {
    return new Date(data.split('/')[2], parseFloat(data.split('/')[1] - 1), data.split('/')[0])
}

function validarIntervaloDatas(idInicio, idFim){	
	var difTempo = idFim.getTime() - idInicio.getTime();
    var difDias = difTempo / (1000 * 3600 * 24); 
	
	return difDias;
}

function definirAprovacao(valorAprov) {
    if(valorAprov == 'reprovado'){
        $("#txta_justificativa").parents('.form-group').removeClass("hide");
    }
    else{
        $("#txta_justificativa").parents('.form-group').addClass("hide");
    }
}

function validaData() {
	// data digitado no formulÃ¡rio
	var datasaida = document.getElementById("datasaida").value;
	datasaida = datasaida.split(" ")[0];
	var partesDataSaida = datasaida.split("/");
	var atualDataSaida = new Date(partesDataSaida[2],
		  partesDataSaida[1] - 1, partesDataSaida[0]);
 
	// data atual data_sol
	var dataAtaul = document.getElementById("data_sol").value;
	var partesDataAtual = dataAtaul.split("/");
	var atualData = new Date(partesDataAtual[2],
		  partesDataAtual[1] - 1, partesDataAtual[0]);
 
	/*
 
	var data1 = moment(atualData, 'DD/MM/YYYY');
	//setando data2
	var data2 = moment(atualDataSaida, 'DD/MM/YYYY');
	//tirando a diferenca da data2 - data1 em dias
	var diff = data2.diff(data1, 'days');
 
	*/
 
	var timeDiff = Math.abs(atualData.getTime() - atualDataSaida.getTime());
	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
 
	document.getElementById("somadata").value = diffDays;
	var t = document.getElementById("somadata");
 
}

function loadChat(){
    $("#tblHistoricoJust tbody tr").not(':first').each(function(){
        
        $(this).find(".lbl-nomeUsuario").text($(this).find("input[id^=hd_justificativa_nomeUsu]").val());
        $(this).find(".lbl-horario").text($(this).find("input[id^=hd_justificativa_horario]").val());
        $(this).show();
    });

	if($("#tblHistoricoJust tbody tr").not(':first').length > 0){
		$("#painel-historico-justificativas").show();
		$("#collapseHistoricoJust").collapse("hide");
	
		if($("#tblHistoricoJust tbody tr:last input[id^=hd_justificativa_statusMsg___]").val() == "EDIT"){
			$("#tblHistoricoJust tbody tr:last").hide();
			$("#txta_justificativa").val($("#tblHistoricoJust tbody tr:last textarea").val());
		}
	}
}