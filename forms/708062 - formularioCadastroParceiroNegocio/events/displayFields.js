function displayFields(form,customHTML){
	var state = getValue("WKNumState");
	var tipo = form.getValue("tp_forn");
	form.setValue('num_processo', getValue("WKNumProces"));
	log.info("Valores do tipo" + tipo);
	var date = new Date();
    var month = date.getMonth()+ 1;
    var day = date.getDate();
    if(form.getValue("drop_motivo") == "INC") form.setVisibleById("divcodfornecedor",false);
    if(day<10) day='0'+day;
    if(month<10) month='0'+month; 
    var dataAtual = day + "/" + month + "/" + date.getFullYear();
    log.info("Testando o log info");
    form.setValue('data_sol', dataAtual);
	if(state == 0){
		var usuarioId = getValue("WKUser");
		var const1 = DatasetFactory.createConstraint("colleaguePK.colleagueId",usuarioId , usuarioId, ConstraintType.MUST);
		var datasetAttachment = DatasetFactory.getDataset("colleague", null, [const1], null);
		var usuario = datasetAttachment.getValue(0,"colleagueName");
		var mail = datasetAttachment.getValue(0,"mail");
		form.setValue("nmSolicitante", usuario);
		form.setValue("email", mail);
		var datasetAt = DatasetFactory.getDataset("dsConsultaEmpCpf", null, null, null);
		log.info("VALENDOOOO" + datasetAt);
		var emp = datasetAt.getValue(0,"EMP");
		var cod = datasetAt.getValue(0,"COD");
		var codext = datasetAt.getValue(0,"CODEXTERNO");
		form.setValue("idempresa", cod);
		form.setValue("codExterno", codext);
	}
    if(state == 50 || state == 57){
		form.setVisibleById("aprpContabilidade",false);
		form.setVisibleById("aprpFiscal",false);
		form.setVisibleById("aprpFinan",false);
		if(form.getValue("txtInfoContabil") == "") form.setVisibleById("obsContabilidade",false);
		if(form.getValue("txtInfoFiscal") == "") form.setVisibleById("obsFiscal",false);
		if(form.getValue("txtInfoFinanceiro") == "") form.setVisibleById("obsFinanceiro",false);
		if(form.getValue("drop_tipo") == 'pf'){
			form.setVisibleById("drop_mei",false);
			form.setVisibleById("lblmei",false);
			form.setVisibleById("lblservico",false);
			form.setVisibleById("tpservico",false);
			form.setVisibleById("lbldtnasc",false);
			form.setVisibleById("dtnasc",false);
			form.setVisibleById("cpf",false);
			form.setVisibleById("lblcpf",false);
		}
		if(form.getValue("drop_tipo") == 'pj' && form.getValue("drop_mei") == 'S' && form.getValue("tpservico") == 'out'){
			form.setVisibleById("lbldtnasc",false);
			form.setVisibleById("dtnasc",false);
			form.setVisibleById("cpf",false);
			form.setVisibleById("lblcpf",false); 
		}
		if(form.getValue("drop_tipo") == 'pj' && form.getValue("drop_mei") == 'N'){
			form.setVisibleById("lblservico",false);
			form.setVisibleById("tpservico",false);
			form.setVisibleById("lbldtnasc",false);
			form.setVisibleById("dtnasc",false);
			form.setVisibleById("cpf",false);
			form.setVisibleById("lblcpf",false);
		}
	}      
}