function beforeTaskSave(colleagueId, nextSequenceId, userList){
    var atividade = getValue("WKNumState");
    var processo = getValue("WKNumProces");
    var switchAprovacaoFiscal = hAPI.getCardValue("switchAprovacaoFiscal");
    var anexado = false;
    var mensagem = "";

    if(atividade == 0 && hAPI.listAttachments().size() == 0) mensagem += "<br/>- É necessario anexar o documento;";

    if(atividade == 5 && switchAprovacaoFiscal == "on"){
        if(temAnexo() == false) mensagem += "<br/>- É necessario anexar o documento;";
    }

    if(atividade == 35){
        if(temAnexo() == false) mensagem += "<br/>- É necessario anexar o documento;";
    }

    if(mensagem != "") throw "<br/><strong>Os campos abaixo são de preencimento obrigatório:</strong><br/>" + mensagem;

    function temAnexo(){
        var constraintProcessAttachment = DatasetFactory.createConstraint('processAttachmentPK.processInstanceId', processo, processo, ConstraintType.MUST);
        var datasetProcessAttachment = DatasetFactory.getDataset('processAttachment', null, new Array(constraintProcessAttachment), null);
        for(var i = 0; i < datasetProcessAttachment.rowsCount; i++){
            var constraintProcessHistory1 = DatasetFactory.createConstraint('processHistoryPK.movementSequence', datasetProcessAttachment.getValue(i, "originalMovementSequence"), datasetProcessAttachment.getValue(i, "originalMovementSequence"), ConstraintType.MUST);
            var constraintProcessHistory2 = DatasetFactory.createConstraint('processHistoryPK.processInstanceId', processo, processo, ConstraintType.MUST);
            var constraintProcessHistory3 = DatasetFactory.createConstraint('processHistoryPK.companyId', datasetProcessAttachment.getValue(i, "processAttachmentPK.companyId"), datasetProcessAttachment.getValue(i, "processAttachmentPK.companyId"), ConstraintType.MUST);
            var constraintProcessHistory4 = DatasetFactory.createConstraint('stateSequence', atividade, atividade, ConstraintType.MUST);
            var datasetProcessHistory = DatasetFactory.getDataset('processHistory', null, new Array(constraintProcessHistory1, constraintProcessHistory2, constraintProcessHistory3, constraintProcessHistory4), null);
            for(var j = 0; j < datasetProcessHistory.rowsCount; j++){
                return true;
            }
        }
        return false;
    }
}