function beforeTaskSave(colleagueId,nextSequenceId,userList){
    var atividade = getValue("WKNumState");
    var anexo = hAPI.listAttachments();
    if(atividade == 0 || atividade == 4 || atividade == 6){ // Etapa: Início e Revisar Solicitação
        if(anexo.size() == 0){
            throw "<b style='color:red;'>Favor anexar documento antes de enviar a solicitação!</b>";
        }
    }
}