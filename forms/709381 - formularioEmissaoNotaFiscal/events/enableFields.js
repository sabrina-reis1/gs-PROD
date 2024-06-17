function enableFields(form){
    var atividade = getValue("WKNumState");
    form.setEnabled("inputCodigoProcesso",false);
    form.setEnabled("inputNumeroSolicitacao",false);
    form.setEnabled("inputNumeroAtividade",false);
    form.setEnabled("inputUsuarioSolicitante",false);
    form.setEnabled("inputIDSolicitante",false);
    form.setEnabled("inputEmailSolicitante",false);
    form.setEnabled("inputLoginSolicitante",false);
    if(atividade == 5){ // Etapa: Analisar Solicitação
        form.setEnabled("selectEmpresaRemetente",false);
        form.setEnabled("selectOperacao",false);
        form.setEnabled("selectMotivoOperacao", false);
        form.setEnabled("inputDataHoraRemessa",false);
        form.setEnabled("textareaJustificativaRemessa",false);
        form.setEnabled("inputNotaFiscalOrigem",false);
        form.setEnabled("inputDataVencimentoBoleto", false);
        form.setEnabled("btnAnexarNFOrigem",false);
        form.setEnabled("textareaObsNFOrigem",false);
        form.setEnabled("inputFornecedorDestinatario",false);
        form.setEnabled("inputCNPJDestinatario",false);
        form.setEnabled("inputIEDestinatario",false);
        form.setEnabled("inputIMDestinatario",false);
        form.setEnabled("inputCepDestinatario",false);
        form.setEnabled("inputEnderecoDestinatario",false);
        form.setEnabled("inputNumEnderecoDestinatario",false);
        form.setEnabled("inputBairroDestinatario",false);
        form.setEnabled("inputComplementoDestinatario",false);
        form.setEnabled("inputCidadeDestinatario",false);
        form.setEnabled("inputUFDestinatario",false);
        form.setEnabled("inputContatoDestinatario",false);
        form.setEnabled("inputCepEntrega",false);
        form.setEnabled("inputEnderecoEntrega",false);
        form.setEnabled("inputNumEnderecoEntrega",false);
        form.setEnabled("inputBairroEntrega",false);
        form.setEnabled("inputComplementoEntrega",false);
        form.setEnabled("inputCidadeEntrega",false);
        form.setEnabled("inputUFEntrega",false);
        form.setEnabled("inputContatoEntrega",false);
        form.setEnabled("inputTelefoneEntrega",false);
        form.setEnabled("selectResponsavelTransporte",false);
        form.setEnabled("inputTransportadoraRemetente",false);
        form.setEnabled("inputCNPJTransportadora",false);
        form.setEnabled("inputIETransportadora",false);
        form.setEnabled("textareaObsTransportadora",false);
        form.setEnabled("btnAdicionarItem",false);
        let indexes = form.getChildrenIndexes("tableItens");
        for (let i = 0; i < indexes.length; i++) {
            form.setEnabled("tdItem___"+ indexes[i], false);
            form.setEnabled("tdCentroLogistico___"+ indexes[i], false);
            form.setEnabled("tdMaterial___"+ indexes[i], false);
            form.setEnabled("tdUnidade___"+ indexes[i], false);
            form.setEnabled("tdQuantidade___"+ indexes[i], false);
            form.setEnabled("tdValorUnitario___"+ indexes[i], false);
            form.setEnabled("tdValorTotal___"+ indexes[i], false);
        }
        form.setEnabled("inputValorTotalSolicitacao",false);
    }
    if(atividade == 11){ // Etapa: Revisar Solicitação
        form.setEnabled("textareaJustificativaFiscal",false);
        form.setEnabled("btnAnexarNotaFiscal",false);
        form.setEnabled("inputNumeroNotaFiscal",false);
        form.setEnabled("inputNumeroMigo",false);
        form.setEnabled("inputNumeroMiro",false);
        form.setEnabled("inputNumeroNotaFiscalWriter",false);
    }
    if(atividade == 35){ // Etapa: Despachar Mercadoria
        form.setEnabled("selectEmpresaRemetente",false);
        form.setEnabled("selectOperacao",false);
        form.setEnabled("selectMotivoOperacao", false);
        form.setEnabled("inputDataHoraRemessa",false);
        form.setEnabled("textareaJustificativaRemessa",false);
        form.setEnabled("inputNotaFiscalOrigem",false);
        form.setEnabled("inputDataVencimentoBoleto", false);
        form.setEnabled("btnAnexarNFOrigem",false);
        form.setEnabled("textareaObsNFOrigem",false);
        form.setEnabled("inputFornecedorDestinatario",false);
        form.setEnabled("inputCNPJDestinatario",false);
        form.setEnabled("inputIEDestinatario",false);
        form.setEnabled("inputIMDestinatario",false);
        form.setEnabled("inputCepDestinatario",false);
        form.setEnabled("inputEnderecoDestinatario",false);
        form.setEnabled("inputNumEnderecoDestinatario",false);
        form.setEnabled("inputBairroDestinatario",false);
        form.setEnabled("inputComplementoDestinatario",false);
        form.setEnabled("inputCidadeDestinatario",false);
        form.setEnabled("inputUFDestinatario",false);
        form.setEnabled("inputContatoDestinatario",false);
        form.setEnabled("inputCepEntrega",false);
        form.setEnabled("inputEnderecoEntrega",false);
        form.setEnabled("inputNumEnderecoEntrega",false);
        form.setEnabled("inputBairroEntrega",false);
        form.setEnabled("inputComplementoEntrega",false);
        form.setEnabled("inputCidadeEntrega",false);
        form.setEnabled("inputUFEntrega",false);
        form.setEnabled("inputContatoEntrega",false);
        form.setEnabled("inputTelefoneEntrega",false);
        form.setEnabled("selectResponsavelTransporte",false);
        form.setEnabled("inputTransportadoraRemetente",false);
        form.setEnabled("inputCNPJTransportadora",false);
        form.setEnabled("inputIETransportadora",false);
        form.setEnabled("textareaObsTransportadora",false);
        form.setEnabled("btnAdicionarItem",false);
        let indexes = form.getChildrenIndexes("tableItens");
        for (let i = 0; i < indexes.length; i++) {
            form.setEnabled("tdItem___"+ indexes[i], false);
            form.setEnabled("tdCentroLogistico___"+ indexes[i], false);
            form.setEnabled("tdMaterial___"+ indexes[i], false);
            form.setEnabled("tdUnidade___"+ indexes[i], false);
            form.setEnabled("tdQuantidade___"+ indexes[i], false);
            form.setEnabled("tdValorUnitario___"+ indexes[i], false);
            form.setEnabled("tdValorTotal___"+ indexes[i], false);
        }
        form.setEnabled("inputValorTotalSolicitacao",false);
        form.setEnabled("textareaJustificativaFiscal",false);
        form.setEnabled("btnAnexarNotaFiscal",false);
        form.setEnabled("inputNumeroNotaFiscal",false);
        form.setEnabled("inputNumeroMigo",false);
        form.setEnabled("inputNumeroMiro",false);
        form.setEnabled("inputNumeroNotaFiscalWriter",false);
    }
    if(atividade == 37){ // Receber Protocolo
        form.setEnabled("selectEmpresaRemetente",false);
        form.setEnabled("selectOperacao",false);
        form.setEnabled("selectMotivoOperacao", false);
        form.setEnabled("inputDataHoraRemessa",false);
        form.setEnabled("textareaJustificativaRemessa",false);
        form.setEnabled("inputNotaFiscalOrigem",false);
        form.setEnabled("inputDataVencimentoBoleto", false);
        form.setEnabled("btnAnexarNFOrigem",false);
        form.setEnabled("textareaObsNFOrigem",false);
        form.setEnabled("inputFornecedorDestinatario",false);
        form.setEnabled("inputCNPJDestinatario",false);
        form.setEnabled("inputIEDestinatario",false);
        form.setEnabled("inputIMDestinatario",false);
        form.setEnabled("inputCepDestinatario",false);
        form.setEnabled("inputEnderecoDestinatario",false);
        form.setEnabled("inputNumEnderecoDestinatario",false);
        form.setEnabled("inputBairroDestinatario",false);
        form.setEnabled("inputComplementoDestinatario",false);
        form.setEnabled("inputCidadeDestinatario",false);
        form.setEnabled("inputUFDestinatario",false);
        form.setEnabled("inputContatoDestinatario",false);
        form.setEnabled("inputCepEntrega",false);
        form.setEnabled("inputEnderecoEntrega",false);
        form.setEnabled("inputNumEnderecoEntrega",false);
        form.setEnabled("inputBairroEntrega",false);
        form.setEnabled("inputComplementoEntrega",false);
        form.setEnabled("inputCidadeEntrega",false);
        form.setEnabled("inputUFEntrega",false);
        form.setEnabled("inputContatoEntrega",false);
        form.setEnabled("inputTelefoneEntrega",false);
        form.setEnabled("selectResponsavelTransporte",false);
        form.setEnabled("inputTransportadoraRemetente",false);
        form.setEnabled("inputCNPJTransportadora",false);
        form.setEnabled("inputIETransportadora",false);
        form.setEnabled("textareaObsTransportadora",false);
        form.setEnabled("btnAdicionarItem",false);
        let indexes = form.getChildrenIndexes("tableItens");
        for (let i = 0; i < indexes.length; i++) {
            form.setEnabled("tdItem___"+ indexes[i], false);
            form.setEnabled("tdCentroLogistico___"+ indexes[i], false);
            form.setEnabled("tdMaterial___"+ indexes[i], false);
            form.setEnabled("tdUnidade___"+ indexes[i], false);
            form.setEnabled("tdQuantidade___"+ indexes[i], false);
            form.setEnabled("tdValorUnitario___"+ indexes[i], false);
            form.setEnabled("tdValorTotal___"+ indexes[i], false);
        }
        form.setEnabled("inputValorTotalSolicitacao",false);
        form.setEnabled("textareaJustificativaFiscal",false);
        form.setEnabled("btnAnexarNotaFiscal",false);
        form.setEnabled("inputNumeroNotaFiscal",false);
        form.setEnabled("inputDataSaidaMercadoria",false);
        form.setEnabled("btnAnexarDespacho",false);
    }
    if(atividade == 22 || atividade == 53 || atividade == 24){ // Etapa: Compensar Nota e Fim
        form.setEnabled("selectEmpresaRemetente",false);
        form.setEnabled("selectOperacao",false);
        form.setEnabled("selectMotivoOperacao", false);
        form.setEnabled("inputDataHoraRemessa",false);
        form.setEnabled("textareaJustificativaRemessa",false);
        form.setEnabled("inputNotaFiscalOrigem",false);
        form.setEnabled("inputDataVencimentoBoleto", false);
        form.setEnabled("btnAnexarNFOrigem",false);
        form.setEnabled("textareaObsNFOrigem",false);
        form.setEnabled("inputFornecedorDestinatario",false);
        form.setEnabled("inputCNPJDestinatario",false);
        form.setEnabled("inputIEDestinatario",false);
        form.setEnabled("inputIMDestinatario",false);
        form.setEnabled("inputCepDestinatario",false);
        form.setEnabled("inputEnderecoDestinatario",false);
        form.setEnabled("inputNumEnderecoDestinatario",false);
        form.setEnabled("inputBairroDestinatario",false);
        form.setEnabled("inputComplementoDestinatario",false);
        form.setEnabled("inputCidadeDestinatario",false);
        form.setEnabled("inputUFDestinatario",false);
        form.setEnabled("inputContatoDestinatario",false);
        form.setEnabled("inputCepEntrega",false);
        form.setEnabled("inputEnderecoEntrega",false);
        form.setEnabled("inputNumEnderecoEntrega",false);
        form.setEnabled("inputBairroEntrega",false);
        form.setEnabled("inputComplementoEntrega",false);
        form.setEnabled("inputCidadeEntrega",false);
        form.setEnabled("inputUFEntrega",false);
        form.setEnabled("inputContatoEntrega",false);
        form.setEnabled("inputTelefoneEntrega",false);
        form.setEnabled("selectResponsavelTransporte",false);
        form.setEnabled("inputTransportadoraRemetente",false);
        form.setEnabled("inputCNPJTransportadora",false);
        form.setEnabled("inputIETransportadora",false);
        form.setEnabled("textareaObsTransportadora",false);
        form.setEnabled("btnAdicionarItem",false);
        let indexes = form.getChildrenIndexes("tableItens");
        for (let i = 0; i < indexes.length; i++) {
            form.setEnabled("tdItem___"+ indexes[i], false);
            form.setEnabled("tdCentroLogistico___"+ indexes[i], false);
            form.setEnabled("tdMaterial___"+ indexes[i], false);
            form.setEnabled("tdUnidade___"+ indexes[i], false);
            form.setEnabled("tdQuantidade___"+ indexes[i], false);
            form.setEnabled("tdValorUnitario___"+ indexes[i], false);
            form.setEnabled("tdValorTotal___"+ indexes[i], false);
        }
        form.setEnabled("inputValorTotalSolicitacao",false);
        form.setEnabled("textareaJustificativaFiscal",false);
        form.setEnabled("btnAnexarNotaFiscal",false);
        form.setEnabled("inputNumeroNotaFiscal",false);
        form.setEnabled("inputNumeroMigo",false);
        form.setEnabled("inputNumeroMiro",false);
        form.setEnabled("inputNumeroNotaFiscalWriter",false);
        form.setEnabled("inputDataSaidaMercadoria",false);
        form.setEnabled("btnAnexarDespacho",false);
    }
}