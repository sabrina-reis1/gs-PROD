function afterTaskSave(colleagueId,nextSequenceId,userList){
    // VARIÁVEIS PROCESSO
    var atividade = getValue("WKNumState");
    var numeroSolicitacao = getValue("WKNumProces");
    var completTask = getValue("WKCompletTask");

    // VARIÁVEIS FORMULÁRIO
    var inputSolicitante = hAPI.getCardValue("inputSolicitante");
    var inputEmailUsuario = hAPI.getCardValue("inputEmailUsuario");
    var inputDataHoraRemessa = hAPI.getCardValue("inputDataHoraRemessa");
    var inputNumeroMigo = hAPI.getCardValue("inputNumeroMigo");
    var inputNumeroMiro = hAPI.getCardValue("inputNumeroMiro");
    var inputNumeroNotaFiscalWriter = hAPI.getCardValue("inputNumeroNotaFiscalWriter");

    // VARIÁVEIS EMAIL
    var parametro = new java.util.HashMap();
    var destinatario = new java.util.ArrayList();

    if(completTask.equals("true")){
        // ETAPA INICIAL - CASO A DATA DA REMESSA SEJA IGUAL A DATA DA SOLICITAÇÃO
        if(atividade == 0 || atividade == 4){
            var validarData = verificarDataRemessa(inputDataHoraRemessa);
            if(validarData){
                try{
                    var emails = buscarEmailGrupo("BPM_DeclaracaoNotaFiscalRemessa_GSC_Fiscal");
                    for(var i = 0; i < emails.length; i++){
                        destinatario.add(emails[i]);
                    }
                    parametro.put("NOMESOLICITANTE", inputSolicitante.toString());
                    parametro.put("NUMEROSOLICITACAO", numeroSolicitacao.toString());
                    parametro.put("LINK_ACESSO", "https://integra.gsinima.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID="+numeroSolicitacao);
                    parametro.put("subject", "Solicitação de Declaração/Nota Fiscal de Devolução/Simples Remessa");
                    notifier.notify("admings", "Template_Declaracao_NotaFiscal_Remessa_DataRemessa", parametro, destinatario, "text/html");
                }catch(e){
                    log.error(e);
                }
            }
        }
        // ETAPA ANALISE SOLICITAÇÃO - NOTIFICAR NOTA FISCAL
        if(atividade == 5){
            try{
                parametro.put("NOMESOLICITANTE", inputSolicitante.toString());
                parametro.put("NUMEROSOLICITACAO", numeroSolicitacao.toString());
                parametro.put("NUMEROMIGO", inputNumeroMigo.toString());
                parametro.put("NUMEROMIRO", inputNumeroMiro.toString());
                parametro.put("NUMERONFWRITER", inputNumeroNotaFiscalWriter.toString());
                parametro.put("LINK_ACESSO", "https://integra.gsinima.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID="+numeroSolicitacao);
                parametro.put("subject", "Solicitação de Declaração/Nota Fiscal de Devolução/Simples Remessa");
                destinatario.add(inputEmailUsuario);
                notifier.notify("admings", "Template_Declaracao_NotaFiscal_Remessa_NotaFiscal", parametro, destinatario, "text/html");
            }catch(e){
                log.error(e);
            }
        }
    }
    function verificarDataRemessa(dataHoraRemessa){
        var result = false;
    
        var dataRemessa = dataHoraRemessa.split(" ")[0];
    
        var newDate = new Date();
        var dia  = newDate.getDate();
        var mes  = newDate.getMonth()+1;
        var ano  = newDate.getFullYear();
        dia = (dia<=9 ? "0"+dia : dia);
        mes = (mes<=9 ? "0"+mes : mes);
        var dataAtual = dia+"/"+mes+"/"+ano;
    
        if(dataRemessa == dataAtual) result = true;
    
        return result;
    }
    function buscarEmailGrupo(grupo){
        var constraintGroup = DatasetFactory.createConstraint("colleagueGroupPK.groupId", grupo, grupo, ConstraintType.MUST);
        var datasetGroup = DatasetFactory.getDataset("colleagueGroup", null, [constraintGroup], null);
        var constraintsColleague = [];
        for(var i = 0; i < datasetGroup.rowsCount; i++){
            var colleague = datasetGroup.getValue(i, "colleagueGroupPK.colleagueId");
            constraintsColleague.push(DatasetFactory.createConstraint("colleaguePK.colleagueId", colleague, colleague, ConstraintType.SHOULD));
        }
        var emails = [];
        var datasetColleague = DatasetFactory.getDataset("colleague", null, constraintsColleague, null);
        for(var i = 0; i < datasetColleague.rowsCount; i++){
            var colleagueEmail = datasetColleague.getValue(i, "mail");
            emails.push(colleagueEmail);
        }
        return emails;
    }
}