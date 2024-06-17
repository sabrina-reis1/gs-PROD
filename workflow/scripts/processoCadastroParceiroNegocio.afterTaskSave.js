function afterTaskSave(colleagueId,nextSequenceId,userList){
	var state = getValue("WKNumState");
	var aprove = hAPI.getCardValue("aprpselectfiscal");
	if(state == 16 && aprove == "apfiscal"){
		log.info("##############################START EMAIL SEND######################################");
			var param = new java.util.HashMap();
			var nrsolic = getValue("WKNumProces");
			//param.put("tipo_solicitacao", tipoDocumento);
			param.put("SOLICITANTE", (hAPI.getCardValue("nmSolicitante")));
			param.put("NRSOLICITACAO", nrsolic.toString());
			param.put("NRFORNECEDOR", (hAPI.getCardValue("txtnumerofornecedor")));
			param.put("subject", "Nr. Fornecedor");
			log.info("########PARAMETROS########### :"+param);
			var destinatarios = new java.util.ArrayList();
			destinatarios.add(hAPI.getCardValue("email"));
			log.info("########DESTINATARIOS########### :"+destinatarios);
			notifier.notify("admings", "tpl_mail_cadastro_fornecedor", param, destinatarios, "text/html");		
		}
	
}