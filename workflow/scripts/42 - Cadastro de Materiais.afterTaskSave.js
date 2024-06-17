function afterTaskSave(colleagueId,nextSequenceId,userList){
	var state = getValue("WKNumState");
	var aprove = hAPI.getCardValue("aprovacao");
	var motivo = hAPI.getCardValue("drop_motivo");
	var user = getValue("WKUser");
	var processo = getValue("WKNumProces");
	var motivo = hAPI.getCardValue("drop_motivo");
	var obs = '';
	var obsampMaterial = hAPI.getCardValue("obsampMaterial");
	var obsSurimentosCSC = hAPI.getCardValue("txtSuprimentosCSC");
	var obsSurimentosSMR = hAPI.getCardValue("txtSuprimentosSMR");
	var replicaUser = hAPI.getCardValue("addjustJustificativas");
	var validacaoCSC = hAPI.getCardValue("drop_cscsup_status");
	var obsrecusaCSC = hAPI.getCardValue("obsRecusaCSC");
	var validacaoSMR = hAPI.getCardValue("drop_smrsup_status");
	var obsrecusaSMR = hAPI.getCardValue("obsRecusaSMR");


	if (state == 2 && motivo != "inclusao"){
		if (obsampMaterial != ""){
			var obs = "<strong style='color:red;'>Justificativa (Alteração, Ampliação ou Bloqueio): " + obsampMaterial + "</strong>";
			hAPI.setTaskComments(user, processo,  0, obs);			
		}
	}
	if (state == 20 && obsSurimentosCSC != ""){
		var obs = "<strong style='color:red;'>Réplica Suprimentos(CSC): " + obsSurimentosCSC + "</strong>";
		hAPI.setTaskComments(user, processo,  0, obs);
	}
	if (state == 33 && obsSurimentosSMR != ""){
		var obs = "<strong style='color:red;'>Réplica Suprimentos(SMR): " + obsSurimentosSMR + "</strong>";
		hAPI.setTaskComments(user, processo,  0, obs);
	}	
	if (state == 28 && replicaUser != ""){
		var obs = "<strong style='color:red;'>Réplica do Usuário: " + replicaUser + "</strong>";
		hAPI.setTaskComments(user, processo,  0, obs);
	}	
	if (state == 33 && validacaoSMR == "recusado"){
		var obs = "<strong style='color:red;'>Justificativa de Recusa(SMR): " + obsrecusaSMR + "</strong>";
		hAPI.setTaskComments(user, processo,  0, obs);
	}
	if (state == 20 && validacaoCSC == "recusado"){
		var obs = "<strong style='color:red;'>Justificativa de Recusa(CSC): " + obsrecusaCSC + "</strong>";
		hAPI.setTaskComments(user, processo,  0, obs);
	}
	
	if(state == 22){
		if(hAPI.getCardValue("drop_cscsup_status") == "aprovado"){
			if(motivo == "ampliacao"){
				log.info("##############################START EMAIL SEND######################################");
				var param = new java.util.HashMap();
				var nrsolic = getValue("WKNumProces");
				//param.put("tipo_solicitacao", tipoDocumento);
				param.put("SOLICITANTE", (hAPI.getCardValue("solicitante")));
				param.put("NRSOLICITACAO", nrsolic.toString());
				param.put("NRMATERIAL", (hAPI.getCardValue("nrmaterial")));
				param.put("CENTROLOGISTICA", (hAPI.getCardValue("centroLogistica")));
				param.put("subject", "Ampliação de Material");
				log.info("########PARAMETROS########### :"+param);
				var destinatarios = new java.util.ArrayList();
				destinatarios.add(hAPI.getCardValue("email"));
				log.info("########DESTINATARIOS########### :"+destinatarios);
				notifier.notify("admings", "Template_Email_Cadastro_Material_Ampliacao", param, destinatarios, "text/html");		
			}
			if(motivo == "alteracao"){
				log.info("##############################START EMAIL SEND######################################");
				var param = new java.util.HashMap();
				var nrsolic = getValue("WKNumProces");
				//param.put("tipo_solicitacao", tipoDocumento);
				param.put("SOLICITANTE", (hAPI.getCardValue("solicitante")));
				param.put("NRSOLICITACAO", nrsolic.toString());
				param.put("NRMATERIAL", (hAPI.getCardValue("nrmaterial")));			
				param.put("subject", "Alteração de Material");
				log.info("########PARAMETROS########### :"+param);
				var destinatarios = new java.util.ArrayList();
				destinatarios.add(hAPI.getCardValue("email"));
				log.info("########DESTINATARIOS########### :"+destinatarios);
				notifier.notify("admings", "Template_Email_Cadastro_Material_Alteracao", param, destinatarios, "text/html");		
			}
			if(motivo == "bloqueio"){
				log.info("##############################START EMAIL SEND######################################");
				var param = new java.util.HashMap();
				var nrsolic = getValue("WKNumProces");
				//param.put("tipo_solicitacao", tipoDocumento);
				param.put("SOLICITANTE", (hAPI.getCardValue("solicitante")));
				param.put("NRSOLICITACAO", nrsolic.toString());
				param.put("NRMATERIAL", (hAPI.getCardValue("nrmaterial")));			
				param.put("subject", "Bloqueio de Material");
				log.info("########PARAMETROS########### :"+param);
				var destinatarios = new java.util.ArrayList();
				destinatarios.add(hAPI.getCardValue("email"));
				log.info("########DESTINATARIOS########### :"+destinatarios);
				notifier.notify("admings", "Template_Email_Cadastro_Material_Bloqueio", param, destinatarios, "text/html");		
			}
		}
	}

	if(state == 25){
		if(motivo == "inclusao"){
		log.info("##############################START EMAIL SEND######################################");
			var param = new java.util.HashMap();
			var nrsolic = getValue("WKNumProces");
			//param.put("tipo_solicitacao", tipoDocumento);
			param.put("SOLICITANTE", (hAPI.getCardValue("solicitante")));
			param.put("NRSOLICITACAO", nrsolic.toString());
			param.put("NRMATERIAL", (hAPI.getCardValue("nrnovomaterial")));
			param.put("subject", "Inclusão de Material");
			log.info("########PARAMETROS########### :"+param);
			var destinatarios = new java.util.ArrayList();
			destinatarios.add(hAPI.getCardValue("email"));
			log.info("########DESTINATARIOS########### :"+destinatarios);
			notifier.notify("admings", "Template_Email_Cadastro_Material_Inclusao", param, destinatarios, "text/html");		
		}
	}		
}