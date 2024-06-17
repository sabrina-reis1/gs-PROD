/*************************************************************************Controle de Versão**************************************************************/
// Versão 1.0.01 																																		 //
// Alterando panelContabilidade para ser mostrada somente nas atividades de Incluir Classe de Avaliação e Cadastrar Item Liberado                        //
// Alterando atividade Aprovar Solicitação, caso for ampliação de material, é mostrado o campo de cadastro de material                                   //
/*********************************************************************************************************************************************************/
function displayFields(form,customHTML){	
    var atv = getValue("WKNumState");    
    //Versão 1.0.01
    if(atv == 0 || atv == 2 || atv == 20 || atv == 28){
        form.setVisibleById("panelContabilidade", false);
    }
    if(atv == 20){  
        var motivo = form.getValue("drop_motivo");
        if(motivo == "ampliacao"){
            form.setVisibleById("divcadastroMaterial", false);
        }
        if(motivo == 'ampliacao' || motivo == 'alteracao' || motivo == 'bloqueio'){
            form.setVisibleById("divnrmaterial", true);
        }
    }
    if(atv == 25){
        var motivo = form.getValue("drop_motivo");
        if(motivo == "inclusao"){
            form.setVisibleById("divcadastroMaterial", true);
        }
    }
	
	/* Data da Solicitação */
	var date = new Date();
    var month = date.getMonth()+ 1;
    var day = date.getDate();
    if(day < 10){
    	day='0'+day    	    
    }
    if(month < 10){    	
    	month='0'+month    	
    } 
    var dataAtual = day + "/" + month + "/" + date.getFullYear();
    form.setValue('datasol', dataAtual);
    
    /* Solicitante */
    var usuarioId = getValue("WKUser");
    var const1 = DatasetFactory.createConstraint("colleaguePK.colleagueId",usuarioId , usuarioId, ConstraintType.MUST);    
    var datasetAttachment = DatasetFactory.getDataset("colleague", null, [const1], null);    
    var usuario = datasetAttachment.getValue(0,"colleagueName");
    var mail = datasetAttachment.getValue(0,"mail");
    
    if (atv == 0){
    form.setValue("solicitante", usuario);
    form.setValue("email", mail);
    }

    if(atv == 0){
    	form.setVisibleById("obsSuprimentos", false);
    }

    var just1 = form.getValue("justJustificativas1");
    var just2 = form.getValue("justJustificativas2");
    var just3 = form.getValue("justJustificativas3");
    var just4 = form.getValue("justJustificativas4");
    var just5 = form.getValue("justJustificativas5");
    var just6 = form.getValue("justJustificativas6");
    if ((atv == 20 || atv == 25 || atv == 28 || atv == 33) && just1 == ""){
    	form.setVisibleById("justJustificativas1", false);    	
    }else{
    	form.setVisibleById("justJustificativas1", true);
    }
    if ((atv == 20 || atv == 25 || atv == 28 || atv == 33) && just2 == ""){
    	form.setVisibleById("justJustificativas2", false);    	
    }else{
    	form.setVisibleById("justJustificativas2", true);
    }
    if ((atv == 20 || atv == 25 || atv == 28 || atv == 33) && just3 == ""){
    	form.setVisibleById("justJustificativas3", false);    	
    }else{
    	form.setVisibleById("justJustificativas3", true);
    }
    if ((atv == 20 || atv == 25 || atv == 28 || atv == 33) && just4 == ""){
    	form.setVisibleById("justJustificativas4", false);    	
    }else{
    	form.setVisibleById("justJustificativas4", true);
    }
    if ((atv == 20 || atv == 25 || atv == 28 || atv == 33) && just5 == ""){
    	form.setVisibleById("justJustificativas5", false);    	
    }else{
    	form.setVisibleById("justJustificativas5", true);
    }
    if ((atv == 20 || atv == 25 || atv == 28 || atv == 33) && just6 == ""){
    	form.setVisibleById("justJustificativas6", false);    	
    }else{
    	form.setVisibleById("justJustificativas6", true);
    }
    if ((atv == 20 || atv == 25 || atv == 28 || atv == 33) && (just1 || "" || just2 == "" || just3 == "" || just4 == "" || just5 == "" || just6 == "")){
    	form.setVisibleById("divJustificativas", false);    	
    }else{
    	form.setVisibleById("divJustificativas", true);
    }

    var dropmotivo = form.getValue("drop_motivo");
    var nrnovoMaterial = form.getValue("nrnovomaterial");    
    if(dropmotivo == "inclusao"){
        form.setVisibleById("divnrmaterial", false);
    }
    if (atv == 20 && (dropmotivo != "inclusao")){
    	form.setVisibleById("numdomaterial", true)
    }else{
    	form.setVisibleById("numdomaterial", false)
    }
    if (atv == 20){
    	form.setVisibleById("divsuprimentosCSC", true);
    }else{
    	form.setVisibleById("divsuprimentosCSC", false);
    }
    if (atv == 33){
    	form.setVisibleById("divsuprimentosSMR", true);
    }else{
    	form.setVisibleById("divsuprimentosSMR", false);
    }
    if (atv == 0){
    	form.setVisibleById("divJustificativas", false);
    }else{
    	form.setVisibleById("divJustificativas", true);
    }
    if (atv == 28){
    	form.setVisibleById("divaddJustificativas", true);
    }else{
    	form.setVisibleById("divaddJustificativas", false);
    }    
    if(atv == 20 || atv == 25 || atv == 33){
    	form.setVisibleById("divRessuprimentos", true);
    	form.setVisibleById("divEstoque", true);
    }else{
    	form.setVisibleById("divRessuprimentos", false);
    	form.setVisibleById("divEstoque", false);
    }
    
    // var dropMotivo = form.getValue("drop_motivo");    
    // if((atv == 20 || atv == 28) && dropMotivo == "ampliacao"){
    // 	form.setVisibleById("divnrmaterial", true);
    // }else{
    //     form.setVisibleById("divnrmaterial", false);
    // }
    // if(atv == 25){
    //     form.setVisibleById("divnrmaterial", true);
    // }
    // if(atv == 49){
    //     form.setVisibleById("divnrmaterial", false);
    // }

    if(atv == 5){
        var dropmotivo = form.getValue("drop_motivo");
        if(dropmotivo == 'alteracao' || dropmotivo == 'ampliacao' || dropmotivo == 'bloqueio'){
            form.setVisibleById("divnrmaterial", true);
        }
        if(dropmotivo == "inclusao"){
            form.setVisibleById("divcadastroMaterial", true);
        }
        form.setShowDisabledFields(true);
        form.setVisibleById("txtSuprimentos", false);
        form.setVisibleById("obsTxtSuprimentos", false);
        form.setVisibleById("divsuprimentosCSC", true);
        form.setVisibleById("panelContabilidade", true);
    }

}