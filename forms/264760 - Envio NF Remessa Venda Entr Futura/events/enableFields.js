function enableFields(form){
    var atividade = getValue("WKNumState");
    form.setEnabled("inputCodigoProcesso",false);
    form.setEnabled("inputSolicitacao",false);
    form.setEnabled("inputAtividade",false);
    form.setEnabled("inputUsuario",false);
    form.setEnabled("inputUsuarioId",false);
    form.setEnabled("inputEmailUsuario",false);
    form.setEnabled("inputLoginUsuario",false);
    if(atividade == 8){ // Etapa: Analisar Solicitação
        form.setEnabled("selectEmpresa",false);
        form.setEnabled("selectNaturezaOperacao",false);
        form.setEnabled("inputFornecedor",false);
        form.setEnabled("inputDataDocumento",false);
        form.setEnabled("inputDataEntrada",false);
        form.setEnabled("inputNumeroNotaFiscal",false);
        form.setEnabled("inputValorNotaFiscal",false);
        form.setEnabled("inputNumeroPedido",false);
        form.setEnabled("inputAnexarArquivo", false);
    }
    if(atividade == 6){ // Etapa: Revisar Solicitação
        form.setEnabled("textareaJustificativaFiscal",false);
        form.setEnabled("inputDataVencimento", false);
        form.setEnabled("inputNumeroMigo",false);
        form.setEnabled("inputNumeroMiro",false);
        form.setEnabled("inputNumeroNotaFiscalWriter",false);
    }
    if(atividade == 5){ // Etapa: Revisar Lançamento (Contábil)
        form.setEnabled("selectEmpresa",false);
        form.setEnabled("selectNaturezaOperacao",false);
        form.setEnabled("inputFornecedor",false);
        form.setEnabled("inputDataDocumento",false);
        form.setEnabled("inputDataEntrada",false);
        form.setEnabled("inputNumeroNotaFiscal",false);
        form.setEnabled("inputValorNotaFiscal",false);
        form.setEnabled("inputNumeroPedido",false);
        form.setEnabled("inputAnexarArquivo", false);
        form.setEnabled("textareaJustificativaFiscal",false);
        form.setEnabled("inputDataVencimento", false);
        form.setEnabled("inputNumeroMigo",false);
        form.setEnabled("inputNumeroMiro",false);
        form.setEnabled("inputNumeroNotaFiscalWriter",false);
    }
    if(atividade == 24 || atividade == 26){ // Etapa: Verificar Lançamento (Financeiro) e Fim
        form.setEnabled("selectEmpresa",false);
        form.setEnabled("selectNaturezaOperacao",false);
        form.setEnabled("inputFornecedor",false);
        form.setEnabled("inputDataDocumento",false);
        form.setEnabled("inputDataEntrada",false);
        form.setEnabled("inputNumeroNotaFiscal",false);
        form.setEnabled("inputValorNotaFiscal",false);
        form.setEnabled("inputNumeroPedido",false);
        form.setEnabled("inputAnexarArquivo", false);
        form.setEnabled("textareaJustificativaFiscal",false);
        form.setEnabled("inputDataVencimento", false);
        form.setEnabled("inputNumeroMigo",false);
        form.setEnabled("inputNumeroMiro",false);
        form.setEnabled("inputNumeroNotaFiscalWriter",false);
        form.setEnabled("inputNumeroDocumentoContabil",false);
    }
}