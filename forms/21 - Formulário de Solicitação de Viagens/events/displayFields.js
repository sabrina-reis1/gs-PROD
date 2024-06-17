function displayFields(form,customHTML){
	var state = getValue("WKNumState");
	var date = new Date();
    var month = date.getMonth()+ 1;
    var day = date.getDate();
    var form_mode = form.getFormMode();

    customHTML.append('<script>function getNumState() { return ' + (form_mode == "VIEW" ? -1 : state) + ' }</script>');	
    
    var usuarioIdAtual = getValue("WKUser");
    var const1 = DatasetFactory.createConstraint("colleaguePK.colleagueId",usuarioIdAtual , usuarioIdAtual, ConstraintType.MUST);
    var datasetAttachment = DatasetFactory.getDataset("colleague", null, [const1], null);
    var usuarioAtual = datasetAttachment.getValue(0,"colleagueName");

    customHTML.append('<script>function getUserAtual() { return {"codigo": "' + usuarioIdAtual + '",  "nome": "' + usuarioAtual + '"};}</script>');	

    if(day<10){
    	day='0'+day    
    } 
    
    if(month<10){
    	month='0'+month
    } 
    var dataAtual = day + "/" + month + "/" + date.getFullYear(); 
    form.setValue('data_sol', dataAtual);
    
    if(state == 0){
    	var usuarioId = getValue("WKUser");
        var const1 = DatasetFactory.createConstraint("colleaguePK.colleagueId",usuarioId , usuarioId, ConstraintType.MUST);
        var datasetAttachment = DatasetFactory.getDataset("colleague", null, [const1], null);
        var usuario = datasetAttachment.getValue(0,"colleagueName");
        form.setValue("nmSolicitante", usuario);
        form.setValue("nmv", usuario);
        form.setValue("idSolicitante", usuarioId);
    }
    
	if(state == 0){
		//form.setVisibleById("ctr_log",false);
		form.setVisibleById("datafin",false);	

        var cod = "", emp = "";
        var datasetAt = DatasetFactory.getDataset("dsConsultaEmpCpf", null, null, null);
        if(datasetAt.values.length){
            emp = datasetAt.getValue(0,"EMP");
            cod = datasetAt.getValue(0,"COD");
            var codext = datasetAt.getValue(0,"CODEXTERNO");
            
            //form.setValue("nmempresa", codext + " - " +emp + " ("+ cod + ")");
            form.setValue("idempresa", cod);
            form.setValue("codpapelempresa", codext); 
        }
    
        if(cod  == "" || cod == "null"){
            //throw "Favor Preencher os seguintes campos RMCHAPA e RMEMPRESA no cadastro do usuário!!!!";
        }
	}
	
	if(state == 48){
		form.setVisibleById("idempresa",false);
	}
}