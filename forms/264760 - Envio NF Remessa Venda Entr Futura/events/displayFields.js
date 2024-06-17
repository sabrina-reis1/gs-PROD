function displayFields(form,customHTML){
    form.setHidePrintLink(true);
    var codigoProcesso = getValue("WKDef");
    var solicitacao = getValue("WKNumProces");
    var atividade = getValue("WKNumState");
    form.setValue("inputCodigoProcesso", codigoProcesso);
    form.setValue("inputSolicitacao", solicitacao);
    form.setValue("inputAtividade", atividade);
	if(atividade == 0 || atividade == 4){ // Etapa: Início
        var usuario = getValue("WKUser");
        var constraintColleague = DatasetFactory.createConstraint("colleaguePK.colleagueId",usuario , usuario, ConstraintType.MUST);
		var datasetColleague = DatasetFactory.getDataset("colleague", null, [constraintColleague], null);
        var nomeUsuario = datasetColleague.getValue(0,"colleagueName");
        var idUsuario = datasetColleague.getValue(0,"colleaguePK.colleagueId");
        var emailUsuario = datasetColleague.getValue(0,"mail");
        var loginUsuario = datasetColleague.getValue(0,"login");
        form.setValue("inputUsuario", usuario);
        form.setValue("inputSolicitante", nomeUsuario);
        form.setValue("inputUsuarioId", idUsuario);
        form.setValue("inputEmailUsuario", emailUsuario);
        form.setValue("inputLoginUsuario", loginUsuario);
        var data = new Date();
        var dia  = data.getDate();
        var mes  = data.getMonth() + 1;
        var ano  = data.getFullYear();
        dia = (dia<=9 ? "0"+dia : dia);
        mes = (mes<=9 ? "0"+mes : mes);
        var dataLocal = dia+"/"+mes+"/"+ano;
        form.setValue("inputDataSolicitacao", dataLocal);
        form.setVisibleById("divFiscal", false);
        form.setVisibleById("divContabil", false);
    }
    if(atividade == 8 || atividade == 6){ // Etapa: Analisar Solicitação e Revisar Solicitação
        form.setVisibleById("divFiscal", true);
        form.setVisibleById("divContabil", false);
    }
    if(atividade == 24){ // Etapa: Verificar Lançamento (Financeiro)
        form.setVisibleById("divFiscal", true);
        form.setVisibleById("divContabil", false);
    }
    if(atividade == 5 || atividade == 26){ // Etapa: Revisar Lançamento (Contábil) 
        form.setVisibleById("divFiscal", true);
        form.setVisibleById("divContabil", true);
    }
    form.setVisibleById("divInfoSolicitacao", false);
}