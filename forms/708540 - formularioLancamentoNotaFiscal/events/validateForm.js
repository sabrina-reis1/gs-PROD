function validateForm(form){
	var isTransfer = getValue("WKIsTransfer");
	var state = getValue("WKNumState");
	var arrayMsg = [];
	if (state == 4 || state == 0 || state == 28 || state == 21 || state == 51){
		log.info("##########Entrou na validação da data 55...")
		arrayMsg = camposBody(form, arrayMsg);
		
		if (arrayMsg.length > 0){
			log.info("##########Entrou na validação da data 1000...")
			var msg = "Favor informar os seguintes campos:";
			var msgFinal = msg + "<br>- " + arrayMsg.join("<br>- ");
			throw (msgFinal);
		}
	}

}
function camposBody(form, arrayMsg){
	var state = getValue("WKNumState");
	var somaData = form.getValue("somadata");
	var dataMinima = form.getValue("dtMinima");
	var partesData3 = dataMinima.split("/");
	var dtMinima =  new Date(partesData3[2], partesData3[1] -1, partesData3[0]);
	var datavencimento = form.getValue("dtvenc");
	var partesData2 = datavencimento.split("/");
	var vencimento =  new Date(partesData2[2], partesData2[1] -1, partesData2[0]);
	var datasomada = form.getValue("somadata");
	var partesData = datasomada.split("/");
	var somaData = new Date(partesData[2], partesData[1] -1, partesData[0]);
	var fundoFixo = form.getValue("inputFundoFixo");
	var justsolic = form.getValue("txtJustSol");
	var adiantamento = form.getValue("inputAdiantamento");
	var tipoFornecedor = form.getValue("inputtipoFornecedor");
	var motivoRecusa = form.getValue("motivoRecusaFiscal");
	
/*	if(state == 4 || state == 0){
		log.info("##########Entrou na validação da data 33...")
		if (form.getValue("inputFrete") != "0"){
			if (form.getValue("numFretePedido") == ""){
				arrayMsg.push("<strong style='color:red;'>Pedido</strong>");
			}
		}
	}*/
	
	if (state == 4 || state == 0 && form.getValue("inputLancFinanc")== "0"){
		
		log.info("##########Entrou na validação da data 99...")
		
		log.info("##########datas..."+vencimento+ " - " + somaData)
		
		if (form.getValue("inputFrete") != "0"){
			if (form.getValue("numFretePedido") == ""){
				arrayMsg.push("<strong style='color:red;'>Pedido</strong>");
			}
		}
		// if (vencimento < somaData && vencimento >= dtMinima && justsolic == "" && fundoFixo == "0" && adiantamento == "0" && tipoFornecedor == "0"){
		// 	arrayMsg.push("<strong style='color:red;'>Justificativa</strong>");
		// }
		if (vencimento < somaData /*&& fundoFixo == "0" && adiantamento == "0" && tipoFornecedor == "0"*/){
			log.info("##########Entrou na validação da data...")
			arrayMsg.push("<strong style='color:red;'>Data de vencimento fora do prazo mínimo estipulado.</strong>");
		}
		if (form.getValue("nummigo") == "") {
			arrayMsg.push("<strong style='color:red;'>Número MIGO</strong>");
		}
		if (form.getValue("drop_emp") == "") {
			arrayMsg.push("<strong style='color:red;'>Empresa</strong>");
		}
		if (form.getValue("numpedido") == "") {
			arrayMsg.push("<strong style='color:red;'>Número Pedido</strong>");
		}
		if (form.getValue("numnf") == "") {
			arrayMsg.push("<strong style='color:red;'>Número Nota Fiscal</strong>");
		}
		if (form.getValue("numfornecedor") == "") {
			arrayMsg.push("<strong style='color:red;'>Número Fornecedor</strong>");
		}
		if (form.getValue("dtdoc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data Documento</strong>");
		}
		if (form.getValue("dtlanc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data Lançamento</strong>");
		}
		if (form.getValue("valornf") == "") {
			arrayMsg.push("<strong style='color:red;'>Valor Nota Fiscal</strong>");
		}
		if (form.getValue("dtvenc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data 1º Vencimento</strong>");
		}
	}
	if (state == 4 && form.getValue("inputFundoFixo")== "1"){
		if (form.getValue("nummigo") == "") {
			arrayMsg.push("<strong style='color:red;'>Número MIGO</strong>");
		}
		if (form.getValue("drop_emp") == "") {
			arrayMsg.push("<strong style='color:red;'>Empresa</strong>");
		}
		if (form.getValue("numpedido") == "") {
			arrayMsg.push("<strong style='color:red;'>Número Pedido</strong>");
		}
		if (form.getValue("numfornecedor") == "") {
			arrayMsg.push("<strong style='color:red;'>Número Fornecedor</strong>");
		}
		if (form.getValue("dtdoc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data Documento</strong>");
		}
		if (form.getValue("dtlanc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data Lançamento</strong>");
		}
		if (form.getValue("valornf") == "") {
			arrayMsg.push("<strong style='color:red;'>Valor Nota Fiscal</strong>");
		}
		if (form.getValue("dtvenc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data 1º Vencimento</strong>");
		}
	}
	if (state == 4 && form.getValue("inputAdiantamento")== "1"){
		if (form.getValue("nummigo") == "") {
			arrayMsg.push("<strong style='color:red;'>Número MIGO</strong>");
		}
		if (form.getValue("drop_emp") == "") {
			arrayMsg.push("<strong style='color:red;'>Empresa</strong>");
		}
		if (form.getValue("numpedido") == "") {
			arrayMsg.push("<strong style='color:red;'>Número Pedido</strong>");
		}
		if (form.getValue("numfornecedor") == "") {
			arrayMsg.push("<strong style='color:red;'>Número Fornecedor</strong>");
		}
		if (form.getValue("dtdoc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data Documento</strong>");
		}
		if (form.getValue("dtlanc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data Lançamento</strong>");
		}
		if (form.getValue("valornf") == "") {
			arrayMsg.push("<strong style='color:red;'>Valor Nota Fiscal</strong>");
		}
		if (form.getValue("dtvenc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data 1º Vencimento</strong>");
		}
	}
	if (state == 4 && form.getValue("inputLancFinanc") == "1"){
		// if (vencimento < somaData && vencimento > dtMinima && justsolic == "" && fundoFixo == "0" && adiantamento == "0" && tipoFornecedor == "0"){
		// 	arrayMsg.push("<strong style='color:red;'>Justificativa</strong>");
		// }
		if (vencimento < somaData && fundoFixo == "0" && adiantamento == "0" && tipoFornecedor == "0"){
			arrayMsg.push("<strong style='color:red;'>Data de vencimento fora do prazo mínimo estipulado.</strong>");
		}
		if (form.getValue("drop_emp") == "") {
			arrayMsg.push("<strong style='color:red;'>Empresa</strong>");
		}
		if (form.getValue("numpedido") == "") {
			arrayMsg.push("<strong style='color:red;'>Número Pedido</strong>");
		}
		if (form.getValue("numfornecedor") == "") {
			arrayMsg.push("<strong style='color:red;'>Número Fornecedor</strong>");
		}
		if (form.getValue("dtdoc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data Documento</strong>");
		}
		if (form.getValue("dtlanc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data Lançamento</strong>");
		}
		if (form.getValue("valornf") == "") {
			arrayMsg.push("<strong style='color:red;'>Valor Nota Fiscal</strong>");
		}
		if (form.getValue("dtvenc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data 1º Vencimento</strong>");
		}
	}
	if (state == 51){
		if (motivoRecusa == 2 || motivoRecusa == 4 || motivoRecusa == 8){
			arrayMsg.push("<strong style='color:red;'>ATENÇÃO: Conforme indicado no campo de justificativa de recusa, esta solicitação deve ser cancelada. Para continuar o processamento do documento, inicie uma nova solicitação.</strong>");
		}
	}
	if (state == 51 && form.getValue("inputLancFinanc")== "0"){
		// if (vencimento < somaData && vencimento > dtMinima && justsolic == "" && fundoFixo == "0" && adiantamento == "0" && tipoFornecedor == "0"){
		// 	if (motivoRecusa == ""){
		// 		arrayMsg.push("<strong style='color:red;'>Justificativa</strong>");
		// 	}			
		// }
		if (vencimento < somaData /*&& fundoFixo == "0" && adiantamento == "0" && tipoFornecedor == "0"*/){
			arrayMsg.push("<strong style='color:red;'>Data de vencimento fora do prazo mínimo estipulado.</strong>");
		}
		if (form.getValue("nummigo") == "") {
			arrayMsg.push("<strong style='color:red;'>Número MIGO</strong>");
		}
		if (form.getValue("drop_emp") == "") {
			arrayMsg.push("<strong style='color:red;'>Empresa</strong>");
		}
		if (form.getValue("numpedido") == "") {
			arrayMsg.push("<strong style='color:red;'>Número Pedido</strong>");
		}
		if (form.getValue("numnf") == "") {
			arrayMsg.push("<strong style='color:red;'>Número Nota Fiscal</strong>");
		}
		if (form.getValue("numfornecedor") == "") {
			arrayMsg.push("<strong style='color:red;'>Número Fornecedor</strong>");
		}
		if (form.getValue("dtdoc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data Documento</strong>");
		}
		if (form.getValue("dtlanc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data Lançamento</strong>");
		}
		if (form.getValue("valornf") == "") {
			arrayMsg.push("<strong style='color:red;'>Valor Nota Fiscal</strong>");
		}
		if (form.getValue("dtvenc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data 1º Vencimento</strong>");
		}
	}
	if (state == 51 && form.getValue("inputFundoFixo")== "1"){
		if (form.getValue("nummigo") == "") {
			arrayMsg.push("<strong style='color:red;'>Número MIGO</strong>");
		}
		if (form.getValue("drop_emp") == "") {
			arrayMsg.push("<strong style='color:red;'>Empresa</strong>");
		}
		if (form.getValue("numpedido") == "") {
			arrayMsg.push("<strong style='color:red;'>Número Pedido</strong>");
		}
		if (form.getValue("numfornecedor") == "") {
			arrayMsg.push("<strong style='color:red;'>Número Fornecedor</strong>");
		}
		if (form.getValue("dtdoc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data Documento</strong>");
		}
		if (form.getValue("dtlanc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data Lançamento</strong>");
		}
		if (form.getValue("valornf") == "") {
			arrayMsg.push("<strong style='color:red;'>Valor Nota Fiscal</strong>");
		}
		if (form.getValue("dtvenc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data 1º Vencimento</strong>");
		}
	}
	if (state == 51 && form.getValue("inputAdiantamento")== "1"){
		if (form.getValue("nummigo") == "") {
			arrayMsg.push("<strong style='color:red;'>Número MIGO</strong>");
		}
		if (form.getValue("drop_emp") == "") {
			arrayMsg.push("<strong style='color:red;'>Empresa</strong>");
		}
		if (form.getValue("numpedido") == "") {
			arrayMsg.push("<strong style='color:red;'>Número Pedido</strong>");
		}
		if (form.getValue("numfornecedor") == "") {
			arrayMsg.push("<strong style='color:red;'>Número Fornecedor</strong>");
		}
		if (form.getValue("dtdoc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data Documento</strong>");
		}
		if (form.getValue("dtlanc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data Lançamento</strong>");
		}
		if (form.getValue("valornf") == "") {
			arrayMsg.push("<strong style='color:red;'>Valor Nota Fiscal</strong>");
		}
		if (form.getValue("dtvenc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data 1º Vencimento</strong>");
		}
	}
	if (state == 51 && form.getValue("inputLancFinanc") == "1"){
		// if (vencimento < somaData && vencimento > dtMinima && justsolic == "" && fundoFixo == "0" && adiantamento == "0" && tipoFornecedor == "0"){
		// 	arrayMsg.push("<strong style='color:red;'>Justificativa</strong>");
		// }
		if (vencimento < somaData && fundoFixo == "0" && adiantamento == "0" && tipoFornecedor == "0"){
			arrayMsg.push("<strong style='color:red;'>Data de vencimento fora do prazo mínimo estipulado.</strong>");
		}
		if (form.getValue("drop_emp") == "") {
			arrayMsg.push("<strong style='color:red;'>Empresa</strong>");
		}
		if (form.getValue("numpedido") == "") {
			arrayMsg.push("<strong style='color:red;'>Número Pedido</strong>");
		}
		if (form.getValue("numfornecedor") == "") {
			arrayMsg.push("<strong style='color:red;'>Número Fornecedor</strong>");
		}
		if (form.getValue("dtdoc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data Documento</strong>");
		}
		if (form.getValue("dtlanc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data Lançamento</strong>");
		}
		if (form.getValue("valornf") == "") {
			arrayMsg.push("<strong style='color:red;'>Valor Nota Fiscal</strong>");
		}
		if (form.getValue("dtvenc") == "") {
			arrayMsg.push("<strong style='color:red;'>Data 1º Vencimento</strong>");
		}
	}
	if (state == 28) {
		var justFiscal = form.getValue("txtJustFisc");
		var statusAprovFiscal = form.getValue("inputAprovFisStatus");
		if (statusAprovFiscal == "0"){
			if (justFiscal == ""){
				arrayMsg.push("<strong style='color:red;'>Justificativa</strong>");
			}
		}
		if ((form.getValue("inputLancFinanc") == "0") && (form.getValue("inputAprovFisStatus") == "1")){
			if (form.getValue("nummiro") == ""){
				arrayMsg.push("<strong style='color:red;'>Número MIRO</strong>");
			}
		}
	}
	if (state == 21 && form.getValue("numfatura")== "") {
		arrayMsg.push("<strong style='color:red;'>Número Fatura</strong>");
	}
	return arrayMsg;
}