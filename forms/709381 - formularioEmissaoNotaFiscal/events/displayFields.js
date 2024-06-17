function displayFields(form,customHTML){
    form.setHidePrintLink(true);
    const codigoProcesso = getValue("WKDef");
    const numeroSolicitacao = parseInt(getValue("WKNumProces"));
    const numeroAtividade = parseInt(getValue("WKNumState"));
    form.setValue("inputCodigoProcesso", codigoProcesso);
    form.setValue("inputNumeroSolicitacao", numeroSolicitacao);
    form.setValue("inputNumeroAtividade", numeroAtividade);
	if(numeroAtividade === 0 || numeroAtividade === 4){ // Etapa: Início
        const usuario = getValue("WKUser");
        const constraintColleague = DatasetFactory.createConstraint("colleaguePK.colleagueId",usuario , usuario, ConstraintType.MUST);
		const datasetColleague = DatasetFactory.getDataset("colleague", null, [constraintColleague], null);
        const nomeUsuario = datasetColleague.getValue(0,"colleagueName");
        const idUsuario = datasetColleague.getValue(0,"colleaguePK.colleagueId");
        const emailUsuario = datasetColleague.getValue(0,"mail");
        const loginUsuario = datasetColleague.getValue(0,"login");
        form.setValue("inputUsuarioSolicitante", usuario);
        form.setValue("inputSolicitante", nomeUsuario);
        form.setValue("inputIDSolicitante", idUsuario);
        form.setValue("inputEmailSolicitante", emailUsuario);
        form.setValue("inputLoginSolicitante", loginUsuario);
        const data = new Date();
        let dia  = data.getDate();
        let mes  = data.getMonth() + 1;
        const ano  = data.getFullYear();
        dia = (dia<=9 ? "0"+dia : dia);
        mes = (mes<=9 ? "0"+mes : mes);
        const dataLocal = dia+"/"+mes+"/"+ano;
        form.setValue("inputDataSolicitacao", dataLocal);
        form.setVisibleById("divFiscal", false);
        form.setVisibleById("divDespachoMercadoria", false);
    }
    if(numeroAtividade === 5 || numeroAtividade === 11){
        form.setVisibleById("divDespachoMercadoria", false);
    }
    form.setVisibleById("divInfoSolicitacao", false);
}