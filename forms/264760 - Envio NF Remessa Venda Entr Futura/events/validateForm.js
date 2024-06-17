function validateForm(form){
    var atividade = getValue("WKNumState");
    var arrayMsg = [];

    if(atividade == 0 || atividade == 9 || atividade == 8 || atividade == 6 || atividade == 5){
		arrayMsg = camposBody(form, arrayMsg);
    }
    
	if(arrayMsg.length > 0){
		var msg = "Favor informar os seguintes campos:";
		var msgFinal = msg + "<br>- " + arrayMsg.join("<br>- ");
		throw (msgFinal);
    }

}
function camposBody(form, arrayMsg){

    var atividade = getValue("WKNumState");

    var selectEmpresa = form.getValue("selectEmpresa");
    var selectNaturezaOperacao = form.getValue("selectNaturezaOperacao");
    var inputFornecedor = form.getValue("inputFornecedor");
    var inputDataDocumento = form.getValue("inputDataDocumento");
    var inputDataEntrada = form.getValue("inputDataEntrada");
    var inputNumeroNotaFiscal = form.getValue("inputNumeroNotaFiscal");
    var inputValorNotaFiscal = form.getValue("inputValorNotaFiscal");
    var inputNumeroPedido = form.getValue("inputNumeroPedido");
    var switchAprovacaoFiscal = form.getValue("switchAprovacaoFiscal");
    var textareaJustificativaFiscal = form.getValue("textareaJustificativaFiscal");
    var inputDataVencimento = form.getValue("inputDataVencimento");
    var inputNumeroMigo = form.getValue("inputNumeroMigo");
    var inputNumeroMiro = form.getValue("inputNumeroMiro");
    var inputNumeroNotaFiscalWriter = form.getValue("inputNumeroNotaFiscalWriter");
    var inputNumeroDocumentoContabil = form.getValue("inputNumeroDocumentoContabil");

    if(atividade == 0 || atividade == 9 || atividade == 6){ // Etapa: Início e Revisar Solicitação
        if(selectEmpresa == "") arrayMsg.push("<b style='color:red;'>Favor informar empresa antes de enviar a solicitação!</b>");
        if(selectNaturezaOperacao == "") arrayMsg.push("<b style='color:red;'>Favor informar natureza da operação antes de enviar a solicitação!</b>");
        if(inputFornecedor == "") arrayMsg.push("<b style='color:red;'>Favor informar fornecedor antes de enviar a solicitação!</b>");
        if(inputDataDocumento == "") arrayMsg.push("<b style='color:red;'>Favor informar data do documento antes de enviar a solicitação!</b>");
        if(inputDataEntrada == "") arrayMsg.push("<b style='color:red;'>Favor informar data da entrada antes de enviar a solicitação!</b>");
        if(inputNumeroNotaFiscal == "") arrayMsg.push("<b style='color:red;'>Favor informar número da nota fiscal antes de enviar a solicitação!</b>");
        if(inputValorNotaFiscal == "") arrayMsg.push("<b style='color:red;'>Favor informar valor da nota fiscal antes de enviar a solicitação!</b>");
        if(selectNaturezaOperacao == "5116/6116" || selectNaturezaOperacao == "5117/6117" || selectNaturezaOperacao == "5922/6922"){
            if(inputNumeroPedido == "") arrayMsg.push("<b style='color:red;'>Favor informar número do pedido antes de enviar a solicitação!</b>");
        }
    }

    if(atividade == 8){ // Etapa: Analisar Solicitação
        if(switchAprovacaoFiscal == "" && textareaJustificativaFiscal == "") arrayMsg.push("<b style='color:red;'>Favor informar justificativa antes de enviar a solicitação!</b>");
        if(switchAprovacaoFiscal == "on"){
            if(selectNaturezaOperacao == "5116/6116" || selectNaturezaOperacao == "5117/6117"){
                if(inputNumeroMigo == "" || inputNumeroMiro == "") arrayMsg.push("<b style='color:red;'>Favor informar número Migo/Miro antes de enviar a solicitação!</b>");
            }
            if( selectNaturezaOperacao == "5908/6908" || selectNaturezaOperacao == "5910/6910" || selectNaturezaOperacao == "5912/6912" || selectNaturezaOperacao == "5916/6916" || 
                selectNaturezaOperacao == "5920/6920" || selectNaturezaOperacao == "5921/6921" || selectNaturezaOperacao == "5925/6925" || selectNaturezaOperacao == "5949/6949"){
                if(inputNumeroNotaFiscalWriter == "") arrayMsg.push("<b style='color:red;'>Favor informar número nota fiscal writer antes de enviar a solicitação!</b>");
            }
            if(selectNaturezaOperacao == "5922/6922"){
                if(inputDataVencimento == "") arrayMsg.push("<b style='color:red;'>Favor informar data de vencimento antes de enviar a solicitação!</b>");
                if(inputNumeroMiro == "") arrayMsg.push("<b style='color:red;'>Favor informar número MIRO antes de enviar a solicitação!</b>");
            }
        }
    }

    if(atividade == 5){
        if(selectNaturezaOperacao == "5910/6910") {
            if(inputNumeroDocumentoContabil == "") arrayMsg.push("<b style='color:red;'>Favor informar número do documento contábil antes de enviar a solicitação!</b>");
        }
    }

    return arrayMsg;
}