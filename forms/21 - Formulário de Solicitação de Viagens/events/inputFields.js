function inputFields(form){

    if(getValue("WKCompletTask").equals("true")){ // Verificar somente se for realizado uma tentativa de envio
        var indexesChat = form.getChildrenIndexes("tblHistoricoJust");

        //Efetivando mensagem no histórico de observações e retirando possibilidade de edição
        if (indexesChat.length > 0) {
            if (form.getValue("hd_justificativa_statusMsg___"+indexesChat[indexesChat.length-1]) == "EDIT") {
                form.setValue("hd_justificativa_statusMsg___"+indexesChat[indexesChat.length-1], "VIEW");
            }
        }
    }

}