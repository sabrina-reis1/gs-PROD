function enableFields(form){
    var state = getValue("WKNumState");
    form.setEnabled("painelfin",false);
    var indece = form.getChildrenIndexes("tabledetailname1");
    form.setEnabled("data_sol",false);
    form.setEnabled("nrSolicitacao",false);
    form.setEnabled("nmSolicitante",false);
    form.setEnabled("nmSuperior",false);
    form.setEnabled("nmempresa",false);
    form.setVisibleById("obsContabilidade",false);
    form.setVisibleById("obsFiscal",false);
    form.setVisibleById("obsFinanceiro",false);
    form.setVisibleById("aprpContabilidade",false);
    form.setVisibleById("aprpFiscal",false);
    form.setVisibleById("aprpFinan",false);
    form.setVisibleById("idempresa",false);
    form.setVisibleById("painelfiscal",false);
    if(state == 0) form.setVisibleById("painelcont",false);
    if(state == 15){
        if(indece.length > 0){
            for(var i = 0; i < indece.length; i++){ // percorre os campos Pai x Filho
                    form.setEnabled(('column1_1___' + indece[i]),false);
                    form.setEnabled(('column2_1___' + indece[i]),false);    
                    form.setEnabled(('column3_1___' + indece[i]),false);
            }
        }
        form.setEnabled("ted",false);
        form.setEnabled("doc",false);
        form.setEnabled("boleto",false);
        form.setEnabled("cheque",false);
        form.setEnabled("transferencia",false);
        form.setEnabled("fundofixo",false);
        form.setVisibleById("painelfin",true);
        form.setVisibleById("painelfiscal",true);
        form.setEnabled("drop_nacional",false);
        form.setEnabled("drop_cpom",false);
        form.setEnabled("drop_contribuinte",false);
        form.setEnabled("tp_forn",false);
        form.setEnabled("drop_tipo",false);
        if(form.getValue("drop_tipo") == 'pj' && form.getValue("drop_mei") == 'S' && form.getValue("tpservico") != 'out'){
            form.setEnabled("drop_mei",false);
            form.setEnabled("dtnasc",false);
            form.setEnabled("cpf",false);
            form.setEnabled("tpservico",false);
        }
        if(form.getValue("drop_tipo") == 'pf') form.setEnabled("dtnasc",false);
        form.setEnabled("zEmpresa", false);
        form.setEnabled("codfornecedor",false);
        form.setEnabled("data_sol",false);
        form.setEnabled("nrSolicitacao",false);
        form.setEnabled("nmSolicitante",false);
        form.setEnabled("nmSuperior",false);
        form.setEnabled("nmempresa",false);
        form.setEnabled("drop_motivo",false);
        form.setEnabled("drop_eixo",false);
        form.setEnabled("nmrazao",false);
        form.setEnabled("drop_tipo",false);
        form.setEnabled("cpfcnpj",false);
        form.setEnabled("inscrest",false);
        form.setEnabled("inscrmun",false);
        form.setEnabled("ende",false);
        form.setEnabled("num",false);
        form.setEnabled("compl",false);//
        form.setEnabled("bairro",false);
        form.setEnabled("cidade",false);
        form.setEnabled("uf",false);
        form.setEnabled("cep",false);
        form.setEnabled("ramoativ",false);
        form.setEnabled("inscrest",false);
        form.setEnabled("inscrmun",false);
        form.setEnabled("ende",false);
        form.setEnabled("num",false);
        form.setEnabled("compl",false);
        form.setEnabled("txttelefone",false);
        form.setEnabled("txtcel",false);
        form.setEnabled("txtfax",false);
        form.setEnabled("txtemail",false);
        form.setEnabled("txtsite",false);
        form.setEnabled("txtcontato",false);
        form.setEnabled("txtnumerofornecedor", false);
        form.setEnabled("cc",false);
        form.setVisibleById("aprpFinan",true);
    }
    if(state == 16){
        if(indece.length > 0){
            for(var i = 0; i < indece.length; i++){ // percorre os campos Pai x Filho
                    form.setEnabled(('column1_1___' + indece[i]),false);
                    form.setEnabled(('column2_1___' + indece[i]),false);    
                    form.setEnabled(('column3_1___' + indece[i]),false);
            }
        }
        form.setEnabled("ted",false);
        form.setEnabled("doc",false);
        form.setEnabled("boleto",false);
        form.setEnabled("cheque",false);
        form.setEnabled("transferencia",false);
        form.setEnabled("fundofixo",false);
        form.setVisibleById("painelfiscal",true);
        form.setEnabled("data_sol",false);
        form.setEnabled("nrSolicitacao",false);
        form.setEnabled("nmSolicitante",false);
        form.setEnabled("nmSuperior",false);
        form.setEnabled("nmempresa",false);
        form.setEnabled("zEmpresa", false);
        form.setEnabled("codfornecedor",false);
        form.setEnabled("drop_motivo",false);
        form.setEnabled("drop_eixo",false);
        form.setEnabled("nmrazao",false);
        form.setEnabled("drop_tipo",false);
        if(form.getValue("drop_tipo") == 'pj' && form.getValue("drop_mei") == 'S' && form.getValue("tpservico") != 'out'){
            form.setEnabled("drop_mei",false);
            form.setEnabled("dtnasc",false);
            form.setEnabled("cpf",false);
            form.setEnabled("tpservico",false);
        }
        if(form.getValue("drop_tipo") == 'pf') form.setEnabled("dtnasc",false);
        form.setEnabled("cpfcnpj",false);
        form.setEnabled("inscrest",false);
        form.setEnabled("inscrmun",false);
        form.setEnabled("ende",false);
        form.setEnabled("num",false);
        form.setEnabled("compl",false);
        form.setEnabled("bairro",false);
        form.setEnabled("cidade",false);
        form.setEnabled("uf",false);
        form.setEnabled("cep",false);
        form.setEnabled("ramoativ",false);
        form.setEnabled("inscrest",false);
        form.setEnabled("inscrmun",false);
        form.setEnabled("ende",false);
        form.setEnabled("num",false);
        form.setEnabled("compl",false);
        form.setEnabled("txttelefone",false);
        form.setEnabled("txtcel",false);
        form.setEnabled("txtfax",false);
        form.setEnabled("txtemail",false);
        form.setEnabled("txtsite",false);
        form.setEnabled("txtcontato",false);
        if(form.getValue("cc") != ""){
            form.setEnabled("cc",false);
            form.setEnabled("tp_forn",false);
        }
         form.setVisibleById("aprpFiscal",true);
    }
    if( state == 11 ){
        if(indece.length > 0){
            for(var i = 0; i < indece.length; i++){ // percorre os campos Pai x Filho
                    form.setEnabled(('column1_1___' + indece[i]),false);
                    form.setEnabled(('column2_1___' + indece[i]),false);    
                    form.setEnabled(('column3_1___' + indece[i]),false);
            }
        }
        form.setEnabled("ted",false);
        form.setEnabled("doc",false);
        form.setEnabled("boleto",false);
        form.setEnabled("cheque",false);
        form.setEnabled("transferencia",false);
        form.setEnabled("fundofixo",false);
        form.setEnabled("data_sol",false);
        form.setEnabled("nrSolicitacao",false);
        form.setEnabled("nmSolicitante",false);
        form.setEnabled("nmSuperior",false);
        form.setEnabled("nmempresa",false);
        form.setEnabled("zEmpresa", false);
        form.setEnabled("codfornecedor",false);
        form.setEnabled("drop_motivo",false);
        form.setEnabled("drop_eixo",false);
        form.setEnabled("nmrazao",false);
        form.setEnabled("drop_tipo",false);
        if(form.getValue("drop_tipo") == 'pj' && form.getValue("drop_mei") == 'S' && form.getValue("tpservico") != 'out'){
            form.setEnabled("drop_mei",false);
            form.setEnabled("dtnasc",false);
            form.setEnabled("cpf",false);
            form.setEnabled("tpservico",false);
        }
        if(form.getValue("drop_tipo") == 'pf'){
            form.setEnabled("dtnasc",false);
        }
        form.setEnabled("cpfcnpj",false);
        form.setEnabled("inscrest",false);
        form.setEnabled("inscrmun",false);
        form.setEnabled("ende",false);
        form.setEnabled("num",false);
        form.setEnabled("compl",false);
        form.setEnabled("bairro",false);
        form.setEnabled("cidade",false);
        form.setEnabled("uf",false);
        form.setEnabled("cep",false);
        form.setEnabled("ramoativ",false);
        form.setEnabled("inscrest",false);
        form.setEnabled("inscrmun",false);
        form.setEnabled("ende",false);
        form.setEnabled("num",false);
        form.setEnabled("compl",false);
        form.setEnabled("txttelefone",false);
        form.setEnabled("txtcel",false);
        form.setEnabled("txtfax",false);
        form.setEnabled("txtemail",false);
        form.setEnabled("txtsite",false);
        form.setEnabled("txtcontato",false);
        form.setVisibleById("aprpContabilidade",true);
    }
    if(state == 57){
        if(indece.length > 0){
            for(var i = 0; i < indece.length; i++){ // percorre os campos Pai x Filho
                    form.setEnabled(('column1_1___' + indece[i]),false);
                    form.setEnabled(('column2_1___' + indece[i]),false);    
                    form.setEnabled(('column3_1___' + indece[i]),false);
            }
        }
        form.setEnabled("ted",false);
        form.setEnabled("doc",false);
        form.setEnabled("boleto",false);
        form.setEnabled("cheque",false);
        form.setEnabled("transferencia",false);
        form.setEnabled("fundofixo",false);
        form.setVisibleById("painelfiscal",true);
        form.setEnabled("drop_nacional",false);
        form.setEnabled("drop_cpom",false);
        form.setEnabled("drop_contribuinte",false);
        form.setEnabled("txtnumerofornecedor", false);
        form.setEnabled("zEmpresa", false);
        form.setEnabled("codfornecedor",false);
        form.setEnabled("nmSolicitante",false);
        form.setEnabled("drop_motivo",false);
        form.setEnabled("drop_eixo",false);
        form.setEnabled("nmrazao",false);
        form.setEnabled("drop_tipo",false);
        if(form.getValue("drop_tipo") == 'pj' && form.getValue("drop_mei") == 'S' && form.getValue("tpservico") != 'out'){
            form.setEnabled("drop_mei",false);
            form.setEnabled("dtnasc",false);
            form.setEnabled("cpf",false);
            form.setEnabled("tpservico",false);
        }
        if(form.getValue("drop_tipo") == 'pf') form.setEnabled("dtnasc",false);
        form.setEnabled("cpfcnpj",false);
        form.setEnabled("inscrest",false);
        form.setEnabled("inscrmun",false);
        form.setEnabled("cep",false);
        form.setEnabled("bairro",false);
        form.setEnabled("cidade",false);
        form.setEnabled("uf",false);
        form.setEnabled("ende",false);
        form.setEnabled("num",false);
        form.setEnabled("compl",false);
        form.setEnabled("ramoativ",false);
        form.setEnabled("tp_forn",false);
        form.setEnabled("txttelefone",false);
        form.setEnabled("txtcel",false);
        form.setEnabled("txtfax",false);
        form.setEnabled("txtemail",false);
        form.setEnabled("txtsite",false);
        form.setEnabled("txtcontato",false);
        form.setEnabled("cc",false);
    }
    if(state == 66){//atividade ajustes
        form.setVisibleById("painelcont",false);
        if(form.getValue('txtRpFiscal') != "" && form.getValue('aprpselectfiscal') == 'rpfiscal'){
            form.setVisibleById("obsFiscal", true);
            form.setValue('txtInfoFiscal' , form.getValue('txtRpFiscal'));
            form.setEnabled("txtInfoFiscal" , false);
        }
        if(form.getValue('txtRpFinan') != "" && form.getValue('aprpselectfinanceiro') == 'rpfinanceiro'){
            form.setVisibleById("obsFinanceiro", true);
            form.setValue('txtInfoFinanceiro' , form.getValue('txtRpFinan'));
            form.setEnabled("txtInfoFinanceiro" , false);
        }
    }
}