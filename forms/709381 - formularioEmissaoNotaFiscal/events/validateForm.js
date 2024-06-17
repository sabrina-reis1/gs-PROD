function validateForm(form){
    var atividade = getValue("WKNumState");
    var arrayMsg = [];
    if(atividade == 0 || atividade == 4 || atividade == 5 || atividade == 11 || atividade == 22){
		arrayMsg = camposBody(form, arrayMsg);
	}
	if (arrayMsg.length > 0){
		var msg = "Favor informar os seguintes campos:";
		var msgFinal = msg + "<br>- " + arrayMsg.join("<br>- ");
		throw (msgFinal);
    }
}
function camposBody(form, arrayMsg){
    var atividade = parseInt(getValue("WKNumState"));
    var selectEmpresaRemetente = form.getValue("selectEmpresaRemetente");
    var selectOperacao = form.getValue("selectOperacao");
    var selectMotivoOperacao = form.getValue("selectMotivoOperacao");
    var inputDataHoraRemessa = form.getValue("inputDataHoraRemessa");
    var textareaJustificativaRemessa = form.getValue("textareaJustificativaRemessa");
    var inputNotaFiscalOrigem = form.getValue("inputNotaFiscalOrigem");
    var inputDataVencimentoBoleto = form.getValue("inputDataVencimentoBoleto");
    var textareaObsNFOrigem = form.getValue("textareaObsNFOrigem");
    var inputFornecedorDestinatario = form.getValue("inputFornecedorDestinatario");
    var inputCNPJDestinatario = form.getValue("inputCNPJDestinatario");
    var inputIEDestinatario = form.getValue("inputIEDestinatario");
    var inputIMDestinatario = form.getValue("inputIMDestinatario");
    var inputCepDestinatario = form.getValue("inputCepDestinatario");
    var inputEnderecoDestinatario = form.getValue("inputEnderecoDestinatario");
    var inputNumEnderecoDestinatario = form.getValue("inputNumEnderecoDestinatario");
    var inputBairroDestinatario = form.getValue("inputBairroDestinatario");
    var inputComplementoDestinatario = form.getValue("inputComplementoDestinatario");
    var inputCidadeDestinatario = form.getValue("inputCidadeDestinatario");
    var inputUFDestinatario = form.getValue("inputUFDestinatario");
    var inputContatoDestinatario = form.getValue("inputContatoDestinatario");
    var switchDiferenteEnderecoEntrega = form.getValue("switchDiferenteEnderecoEntrega");
    var inputCepEntrega = form.getValue("inputCepEntrega");
    var inputEnderecoEntrega = form.getValue("inputEnderecoEntrega");
    var inputNumEnderecoEntrega = form.getValue("inputNumEnderecoEntrega");
    var inputBairroEntrega = form.getValue("inputBairroEntrega");
    var inputComplementoEntrega = form.getValue("inputComplementoEntrega");
    var inputCidadeEntrega = form.getValue("inputCidadeEntrega");
    var inputUFEntrega = form.getValue("inputUFEntrega");
    var inputContatoEntrega = form.getValue("inputContatoEntrega");
    var inputTelefoneEntrega = form.getValue("inputTelefoneEntrega");
    var selectResponsavelTransporte = form.getValue("selectResponsavelTransporte");
    var inputTransportadoraRemetente = form.getValue("inputTransportadoraRemetente");
    var inputCNPJTransportadora = form.getValue("inputCNPJTransportadora");
    var inputIETransportadora = form.getValue("inputIETransportadora");
    var textareaObsTransportadora = form.getValue("textareaObsTransportadora");
    var tableItens = form.getChildrenIndexes("tableItens");
    var inputValorTotalSolicitacao = form.getValue("inputValorTotalSolicitacao");
    var switchAprovacaoFiscal = form.getValue("switchAprovacaoFiscal");
    var textareaJustificativaFiscal = form.getValue("textareaJustificativaFiscal");
    var inputNumeroNotaFiscal = form.getValue("inputNumeroNotaFiscal");
    var inputNumeroMigo = form.getValue("inputNumeroMigo");
    var inputNumeroMiro = form.getValue("inputNumeroMiro");
    var inputNumeroNotaFiscalWriter = form.getValue("inputNumeroNotaFiscalWriter");
    var inputDataSaidaMercadoria = form.getValue("inputDataSaidaMercadoria");
    if(atividade == 0 || atividade == 4 || atividade == 11){ // Etapa: Início e Revisar Solicitação
        if(selectEmpresaRemetente == "") arrayMsg.push("<b style='color:red;'>Empresa Remetente</b>");
        if(selectOperacao == "") arrayMsg.push("<b style='color:red;'>Operação</b>");
        if(selectMotivoOperacao == "") arrayMsg.push("<b style='color:red;'>Motivo Operação</b>");
        if(inputDataHoraRemessa == "") arrayMsg.push("<b style='color:red;'>Data e Hora da Remessa</b>");
        var dataRemessa = inputDataHoraRemessa.split(" ")[0];
        var data = new Date();
        var dia  = data.getDate();
        var mes  = data.getMonth() + 1;
        var ano  = data.getFullYear();
        dia = (dia<=9 ? "0"+dia : dia);
        mes = (mes<=9 ? "0"+mes : mes);
        var dataLocal = dia+"/"+mes+"/"+ano;
        if(selectMotivoOperacao == "Outros" && textareaJustificativaRemessa == "") arrayMsg.push("<b style='color:red;'>Justificativa Motivo Operação</b>");
        if(dataRemessa == dataLocal && textareaJustificativaRemessa == "") arrayMsg.push("<b style='color:red;'>Justificativa Data e Hora da Remessa</b>");
        if(inputNotaFiscalOrigem == "") arrayMsg.push("<b style='color:red;'>Nota Fiscal de Origem</b>");
        if(inputDataVencimentoBoleto == "") arrayMsg.push("<b style='color:red;'>Data de Vencimento Boleto</b>");
        if(textareaObsNFOrigem == "") arrayMsg.push("<b style='color:red;'>Observações Nota Fiscal de Origem</b>");
        if(inputFornecedorDestinatario == "") arrayMsg.push("<b style='color:red;'>Destinatário</b>");
        // if(inputCNPJDestinatario == "") arrayMsg.push("<b style='color:red;'>CNPJ Destinatário</b>");
        // if(inputIEDestinatario == "") arrayMsg.push("<b style='color:red;'>Inscrição Estadual Destinatário</b>");
        // if(inputIMDestinatario == "") arrayMsg.push("<b style='color:red;'>Inscrição Municipal Destinatário</b>");
        // if(inputCepDestinatario == "") arrayMsg.push("<b style='color:red;'>CEP Destinatário</b>");
        // if(inputEnderecoDestinatario == "") arrayMsg.push("<b style='color:red;'>Endereço Destinatário</b>");
        // if(inputNumEnderecoDestinatario == "") arrayMsg.push("<b style='color:red;'>Número Endereço Destinatário</b>");
        // if(inputBairroDestinatario == "") arrayMsg.push("<b style='color:red;'>Bairro Destinatário</b>");
        // if(inputComplementoDestinatario == "") arrayMsg.push("<b style='color:red;'>Complemento Destinatário</b>");
        // if(inputCidadeDestinatario == "") arrayMsg.push("<b style='color:red;'>Cidade Destinatário</b>");
        // if(inputUFDestinatario == "") arrayMsg.push("<b style='color:red;'>UF Destinatário</b>");
        // if(inputContatoDestinatario == "") arrayMsg.push("<b style='color:red;'>Contato Destinatário</b>");
        if(switchDiferenteEnderecoEntrega == "on"){
            if(inputCepEntrega == "") arrayMsg.push("<b style='color:red;'>CEP Local da Entrega</b>");
            if(inputEnderecoEntrega == "") arrayMsg.push("<b style='color:red;'>Endereço Local da Entrega</b>");
            if(inputNumEnderecoEntrega == "") arrayMsg.push("<b style='color:red;'>Número Endereço Local da Entrega</b>");
            if(inputBairroEntrega == "") arrayMsg.push("<b style='color:red;'>Bairro Local da Entrega</b>");
            // if(inputComplementoEntrega == "") arrayMsg.push("<b style='color:red;'>Complemento Local da Entrega</b>");
            if(inputCidadeEntrega == "") arrayMsg.push("<b style='color:red;'>Cidade Local da Entrega</b>");
            if(inputUFEntrega == "") arrayMsg.push("<b style='color:red;'>UF Local da Entrega</b>");
            if(inputContatoEntrega == "") arrayMsg.push("<b style='color:red;'>Contato Local da Entrega</b>");
            if(inputTelefoneEntrega == "") arrayMsg.push("<b style='color:red;'>Telefone Local da Entrega</b>");
        }
        if(selectResponsavelTransporte == "") arrayMsg.push("<b style='color:red;'>Responsável Pelo Transporte</b>");
        // if(selectResponsavelTransporte == "destinatario" || selectResponsavelTransporte == "proprioRemetente"){
        //     if(textareaObsTransportadora == "") arrayMsg.push("<b style='color:red;'>Observações Transportadora</b>");
        // }
        if(selectResponsavelTransporte == "remetente" || selectResponsavelTransporte == "proprioRemetente"){
            if(inputTransportadoraRemetente == "") arrayMsg.push("<b style='color:red;'>Transportadora</b>");
            if(inputCNPJTransportadora == "") arrayMsg.push("<b style='color:red;'>CNPJ Transportadora</b>");
            if(inputIETransportadora == "") arrayMsg.push("<b style='color:red;'>Inscrição Estadual Transportadora</b>");
        }
        if(tableItens.length > 0){
            for(var i = 0; i < tableItens.length; i++){
                var item = form.getValue("tdItem___"+ tableItens[i]);
                var centroLogistico = form.getValue("tdCentroLogistico___"+ tableItens[i]);
                var material = form.getValue("tdMaterial___"+ tableItens[i]);
                var unidade = form.getValue("tdUnidade___"+ tableItens[i]);
                var quantidade = form.getValue("tdQuantidade___"+ tableItens[i]);
                var valorUnitario = form.getValue("tdValorUnitario___"+ tableItens[i]);
                var valorTotal = form.getValue("tdValorTotal___"+ tableItens[i]);
                if(item == "") arrayMsg.push("<b style='color:red;'>Número do item " + tableItens[i] + "</b>");
                if(centroLogistico == "") arrayMsg.push("<b style='color:red;'>Centro logístico do item " + tableItens[i] + "</b>");
                if(material == "") arrayMsg.push("<b style='color:red;'>Material do item " + tableItens[i] + "</b>");
                if(unidade == "") arrayMsg.push("<b style='color:red;'>Unidade de medida do item " + tableItens[i] + "</b>");
                if(quantidade == "") arrayMsg.push("<b style='color:red;'>Quantidade do item " + tableItens[i] + "</b>");
                if(valorUnitario == "") arrayMsg.push("<b style='color:red;'>Valor unitário do item " + tableItens[i] + "</b>");
                if(valorTotal == "") arrayMsg.push("<b style='color:red;'>Valor total do item " + tableItens[i] + "</b>");
            }
        }else{
            arrayMsg.push("<b style='color:red;'>Item</b>");
        }
        if(inputValorTotalSolicitacao == "") arrayMsg.push("<b style='color:red;'>Valor total da solicitação</b>");
    }
    if(atividade == 5){ // Etapa: Analisar Solicitação
        if(switchAprovacaoFiscal == "" && textareaJustificativaFiscal == "") arrayMsg.push("<b style='color:red;'>Justificativa de recusa</b>");
        if(switchAprovacaoFiscal == "on" && inputNumeroNotaFiscal == "") arrayMsg.push("<b style='color:red;'>Número da Nota Fiscal</b>");
    }
    if(atividade == 35){ // Etapa: Despachar Mercadoria
        if(inputDataSaidaMercadoria == "") arrayMsg.push("<b style='color:red;'>Data da Saída da Mercadoria</b>");
    }
    if(atividade == 37){ // Etapa: Receber Protocolo
        if(selectOperacao == "5210/6210" || selectOperacao == "5412/6412" || selectOperacao == "5413/6413" || selectOperacao == "5553/6553" || selectOperacao == "5556/6556"){
            if(inputNumeroMigo == "" || inputNumeroMiro == "") arrayMsg.push("<b style='color:red;'>Número de MIGO/MIRO</b>");
        }
        if( selectOperacao == "5921/6921" || selectOperacao == "5913/6913" || selectOperacao == "5909/6909" || selectOperacao == "5901/6901" || selectOperacao == "5910/6910" || selectOperacao == "5920/6920" ||
            selectOperacao == "5949/6949" || selectOperacao == "5915/6915"){
            if(inputNumeroNotaFiscalWriter == "") arrayMsg.push("<b style='color:red;'>Número Nota Fiscal Writer</b>");
        }
    }
    return arrayMsg;
}