function beforeTaskSave(colleagueId,nextSequenceId,userList){	
	var anexo = hAPI.listAttachments();
    var state = getValue("WKNumState");
    if (state == 11 && anexo.size() == 0) {
    	throw "<br>- <strong style='color:red;'>Favor Anexar Arquivo!!!</strong>"
    }
}