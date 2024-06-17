function afterTaskSave(colleagueId,nextSequenceId,userList){
	var state = getValue("WKNumState");
	var user = getValue("WKUser");
	var processo = getValue("WKNumProces");
	var obs = '';
	var txtJustFiscal = hAPI.getCardValue("txtJustFisc");
	var txtJustSol = hAPI.getCardValue("txtJustSol");
	var txtJustRecusa = hAPI.getCardValue("txtJustRecusa");
	if (state == 4 && txtJustSol != ""){
		var obs = "<strong style='color:red;'>Justificativa Fora do Prazo: " + txtJustSol + "</strong>";
		hAPI.setTaskComments(user, processo,  0, obs);
	}
	if (state == 28 && txtJustFiscal != ""){
		var obs = "<strong style='color:red;'>Justificativa Recusa Fiscal: " + txtJustFiscal + "</strong>";
		hAPI.setTaskComments(user, processo,  0, obs);
	}
	if (state == 51 && txtJustRecusa != ""){
		var obs = "<strong style='color:red;'>Justificativa Recusa Solicitante: " + txtJustRecusa + "</strong>";
		hAPI.setTaskComments(user, processo,  0, obs);
	}
	if (state == 134){
		var empresa = hAPI.getCardValue("drop_emp");
		var lancFinanc = hAPI.getCardValue("inputLancFinanc");
		if (empresa != "B009" && empresa != "B014" && empresa != "B015" && empresa != "B016"){
			//Abre Processo Contabilidade CSC
			log.info("###!!!Start Processo Contabilidade GSC!!!###")
			var usersContabil = new java.util.ArrayList();
			usersContabil.add("Pool:Group:CSC_BPM_FIS_LancamentoNF_Contabilidade");
			var inputnrsolicitacao = hAPI.getCardValue("numsolicitacao");
			var inputsolicitante = hAPI.getCardValue("solicitante");
			var inputnrmigo = hAPI.getCardValue("nummigo");
			var inputnrmiro = hAPI.getCardValue("nummiro");
			var inputnmempresa = hAPI.getCardValue("drop_emp");
			var inputcodFornec = hAPI.getCardValue("numfornecedor");
			var inputnmFornec = hAPI.getCardValue("descfornecedor");
			var inputdtEntrada = hAPI.getCardValue("data_sol");
			var inputdtLanc = hAPI.getCardValue("dtlanc");
			var inputdtDoc = hAPI.getCardValue("dtdoc");
			var inputdtVenc = hAPI.getCardValue("dtvenc");
			var inputnrnf = hAPI.getCardValue("numnf");
			var inputvalornf = hAPI.getCardValue("valornf");
			var inputdocumentID1 = hAPI.getCardValue("inputdocumentId1");
			var inputdocumentID2 = hAPI.getCardValue("inputdocumentId2");
			var inputdocumentID3 = hAPI.getCardValue("inputdocumentId3");
			var inputdocumentID4 = hAPI.getCardValue("inputdocumentId4");
			var inputdocumentID5 = hAPI.getCardValue("inputdocumentId5");
			var inputdocumentID6 = hAPI.getCardValue("inputdocumentId6");
			var inputdocumentID7 = hAPI.getCardValue("inputdocumentId7");
			var inputdocumentID8 = hAPI.getCardValue("inputdocumentId8");
			var inputdocumentID9 = hAPI.getCardValue("inputdocumentId9");
			var inputdocumentID10 = hAPI.getCardValue("inputdocumentId10");
			var proccessIdContabil = "62_1 - Lancamento NF e Fatura - Contabilidade";
	    	var formDataContabil = new java.util.HashMap();
			if (lancFinanc == "0"){
				formDataContabil.put("numsolicitacao", inputnrsolicitacao);
				formDataContabil.put("solicitante", inputsolicitante);
				formDataContabil.put("nummigo", inputnrmigo);
				formDataContabil.put("nummiro", inputnrmiro);
				formDataContabil.put("drop_emp", inputnmempresa);
				formDataContabil.put("numfornecedor", inputcodFornec);
				formDataContabil.put("descfornecedor", inputnmFornec);
				formDataContabil.put("data_sol", inputdtEntrada);
				formDataContabil.put("datalanc", inputdtLanc);
				formDataContabil.put("datadoc", inputdtDoc);
				formDataContabil.put("datavenc", inputdtVenc);
				formDataContabil.put("numnf", inputnrnf);
				formDataContabil.put("valornf", inputvalornf);
				formDataContabil.put("inputdocumentId1", inputdocumentID1);
				formDataContabil.put("inputdocumentId2", inputdocumentID2);
				formDataContabil.put("inputdocumentId3", inputdocumentID3);
				formDataContabil.put("inputdocumentId4", inputdocumentID4);
				formDataContabil.put("inputdocumentId5", inputdocumentID5);
				formDataContabil.put("inputdocumentID6", inputdocumentID6);
				formDataContabil.put("inputdocumentID7", inputdocumentID7);
				formDataContabil.put("inputdocumentID8", inputdocumentID8);
				formDataContabil.put("inputdocumentID9", inputdocumentID9);
				formDataContabil.put("inputdocumentID10", inputdocumentID10);
			}else{
				formDataContabil.put("numsolicitacao", inputnrsolicitacao);
				formDataContabil.put("solicitante", inputsolicitante);
				formDataContabil.put("drop_emp", inputnmempresa);
				formDataContabil.put("numfornecedor", inputcodFornec);
				formDataContabil.put("descfornecedor", inputnmFornec);
				formDataContabil.put("data_sol", inputdtEntrada);
				formDataContabil.put("datalanc", inputdtLanc);
				formDataContabil.put("datadoc", inputdtDoc);
				formDataContabil.put("datavenc", inputdtVenc);
				formDataContabil.put("valornf", inputvalornf);
				formDataContabil.put("inputdocumentId1", inputdocumentID1);
				formDataContabil.put("inputdocumentId2", inputdocumentID2);
				formDataContabil.put("inputdocumentId3", inputdocumentID3);
				formDataContabil.put("inputdocumentId4", inputdocumentID4);
				formDataContabil.put("inputdocumentId5", inputdocumentID5);
				formDataContabil.put("inputdocumentID6", inputdocumentID6);
				formDataContabil.put("inputdocumentID7", inputdocumentID7);
				formDataContabil.put("inputdocumentID8", inputdocumentID8);
				formDataContabil.put("inputdocumentID9", inputdocumentID9);
				formDataContabil.put("inputdocumentID10", inputdocumentID10);
			}
	    	hAPI.startProcess(proccessIdContabil, 5, usersContabil, "Processo Iniciado pelo Lançamento de Nota Fiscal", true, formDataContabil, false);
			//Abre Processo Departamento Pessoal CSC
			var fluxoDP = hAPI.getCardValue("inputfluxoDP");
			if (fluxoDP == "True"){
				console.info("###!!!Start Processo Departamento Pessoal GSC!!!###")
				var usersDP = new java.util.ArrayList();
				usersDP.add("Pool:Group:CSC_BPM_FIS_LancamentoNF_DP");
				var inputnrmigo = hAPI.getCardValue("nummigo");
				var inputnrmiro = hAPI.getCardValue("nummiro");
				var inputnmempresa = hAPI.getCardValue("drop_emp");
				var inputcodFornec = hAPI.getCardValue("numfornecedor");
				var inputnmFornec = hAPI.getCardValue("descfornecedor");
				var inputdtEntrada = hAPI.getCardValue("data_sol");
				var inputdtLanc = hAPI.getCardValue("dtlanc");
				var inputdtDoc = hAPI.getCardValue("dtdoc");
				var inputdtVenc = hAPI.getCardValue("dtvenc");
				var inputnrnf = hAPI.getCardValue("numnf");
				var inputvalornf = hAPI.getCardValue("valornf");
				var inputdocumentID1 = hAPI.getCardValue("inputdocumentId1");
				var inputdocumentID2 = hAPI.getCardValue("inputdocumentId2");
				var inputdocumentID3 = hAPI.getCardValue("inputdocumentId3");
				var inputdocumentID4 = hAPI.getCardValue("inputdocumentId4");
				var inputdocumentID5 = hAPI.getCardValue("inputdocumentId5");
				var inputdocumentID6 = hAPI.getCardValue("inputdocumentId6");
				var inputdocumentID7 = hAPI.getCardValue("inputdocumentId7");
				var inputdocumentID8 = hAPI.getCardValue("inputdocumentId8");
				var inputdocumentID9 = hAPI.getCardValue("inputdocumentId9");
				var inputdocumentID10 = hAPI.getCardValue("inputdocumentId10");
				var proccessIdDP = "62_2 - Lancamento NF e Fatura - Depto Pessoal";
		    	var formDataDP = new java.util.HashMap();
				formDataDP.put("nummigo", inputnrmigo);
				formDataDP.put("nummiro", inputnrmiro);
				formDataDP.put("drop_emp", inputnmempresa);
				formDataDP.put("numfornecedor", inputcodFornec);
				formDataDP.put("descfornecedor", inputnmFornec);
				formDataDP.put("data_sol", inputdtEntrada);
				formDataDP.put("datalanc", inputdtLanc);
				formDataDP.put("datadoc", inputdtDoc);
				formDataDP.put("datavenc", inputdtVenc);
				formDataDP.put("numnf", inputnrnf);
				formDataDP.put("valornf", inputvalornf);
				formDataDP.put("inputdocumentId1", inputdocumentID1);
				formDataDP.put("inputdocumentId2", inputdocumentID2);
				formDataDP.put("inputdocumentId3", inputdocumentID3);
				formDataDP.put("inputdocumentId4", inputdocumentID4);
				formDataDP.put("inputdocumentId5", inputdocumentID5);
				formDataDP.put("inputdocumentID6", inputdocumentID6);
				formDataDP.put("inputdocumentID7", inputdocumentID7);
				formDataDP.put("inputdocumentID8", inputdocumentID8);
				formDataDP.put("inputdocumentID9", inputdocumentID9);
				formDataDP.put("inputdocumentID10", inputdocumentID10);
		    	hAPI.startProcess(proccessIdDP, 5, usersDP, "Processo Iniciado pelo Lançamento de Nota Fiscal", true, formDataDP, false);
			}
		}else if(empresa == "B009"){
			//Abre Processo Contabilidade SMR
			console.info("###!!!Start Processo Contabilidade Samar!!!###")
			var usersContabil = new java.util.ArrayList();
			usersContabil.add("Pool:Group:SMR_BPM_FIS_LancamentoNF_Contabilidade");
			var inputnrsolicitacao = hAPI.getCardValue("numsolicitacao");
			var inputsolicitante = hAPI.getCardValue("solicitante");
			var inputnrmigo = hAPI.getCardValue("nummigo");
			var inputnrmiro = hAPI.getCardValue("nummiro");
			var inputnmempresa = hAPI.getCardValue("drop_emp");
			var inputcodFornec = hAPI.getCardValue("numfornecedor");
			var inputnmFornec = hAPI.getCardValue("descfornecedor");
			var inputdtEntrada = hAPI.getCardValue("data_sol");
			var inputdtLanc = hAPI.getCardValue("dtlanc");
			var inputdtDoc = hAPI.getCardValue("dtdoc");
			var inputdtVenc = hAPI.getCardValue("dtvenc");
			var inputnrnf = hAPI.getCardValue("numnf");
			var inputvalornf = hAPI.getCardValue("valornf");
			var inputdocumentID1 = hAPI.getCardValue("inputdocumentId1");
			var inputdocumentID2 = hAPI.getCardValue("inputdocumentId2");
			var inputdocumentID3 = hAPI.getCardValue("inputdocumentId3");
			var inputdocumentID4 = hAPI.getCardValue("inputdocumentId4");
			var inputdocumentID5 = hAPI.getCardValue("inputdocumentId5");
			var inputdocumentID6 = hAPI.getCardValue("inputdocumentId6");
			var inputdocumentID7 = hAPI.getCardValue("inputdocumentId7");
			var inputdocumentID8 = hAPI.getCardValue("inputdocumentId8");
			var inputdocumentID9 = hAPI.getCardValue("inputdocumentId9");
			var inputdocumentID10 = hAPI.getCardValue("inputdocumentId10");
			var proccessIdContabil = "62_1 - Lancamento NF e Fatura - Contabilidade";
	    	var formDataContabil = new java.util.HashMap();
			if (lancFinanc == "0"){
				formDataContabil.put("numsolicitacao", inputnrsolicitacao);
				formDataContabil.put("solicitante", inputsolicitante);
				formDataContabil.put("nummigo", inputnrmigo);
				formDataContabil.put("nummiro", inputnrmiro);
				formDataContabil.put("drop_emp", inputnmempresa);
				formDataContabil.put("numfornecedor", inputcodFornec);
				formDataContabil.put("descfornecedor", inputnmFornec);
				formDataContabil.put("data_sol", inputdtEntrada);
				formDataContabil.put("datalanc", inputdtLanc);
				formDataContabil.put("datadoc", inputdtDoc);
				formDataContabil.put("datavenc", inputdtVenc);
				formDataContabil.put("numnf", inputnrnf);
				formDataContabil.put("valornf", inputvalornf);
				formDataContabil.put("inputdocumentId1", inputdocumentID1);
				formDataContabil.put("inputdocumentId2", inputdocumentID2);
				formDataContabil.put("inputdocumentId3", inputdocumentID3);
				formDataContabil.put("inputdocumentId4", inputdocumentID4);
				formDataContabil.put("inputdocumentId5", inputdocumentID5);
				formDataContabil.put("inputdocumentID6", inputdocumentID6);
				formDataContabil.put("inputdocumentID7", inputdocumentID7);
				formDataContabil.put("inputdocumentID8", inputdocumentID8);
				formDataContabil.put("inputdocumentID9", inputdocumentID9);
				formDataContabil.put("inputdocumentID10", inputdocumentID10);
			}else{
				formDataContabil.put("numsolicitacao", inputnrsolicitacao);
				formDataContabil.put("solicitante", inputsolicitante);
				formDataContabil.put("drop_emp", inputnmempresa);
				formDataContabil.put("numfornecedor", inputcodFornec);
				formDataContabil.put("descfornecedor", inputnmFornec);
				formDataContabil.put("data_sol", inputdtEntrada);
				formDataContabil.put("datalanc", inputdtLanc);
				formDataContabil.put("datadoc", inputdtDoc);
				formDataContabil.put("datavenc", inputdtVenc);
				formDataContabil.put("valornf", inputvalornf);
				formDataContabil.put("inputdocumentId1", inputdocumentID1);
				formDataContabil.put("inputdocumentId2", inputdocumentID2);
				formDataContabil.put("inputdocumentId3", inputdocumentID3);
				formDataContabil.put("inputdocumentId4", inputdocumentID4);
				formDataContabil.put("inputdocumentId5", inputdocumentID5);
				formDataContabil.put("inputdocumentID6", inputdocumentID6);
				formDataContabil.put("inputdocumentID7", inputdocumentID7);
				formDataContabil.put("inputdocumentID8", inputdocumentID8);
				formDataContabil.put("inputdocumentID9", inputdocumentID9);
				formDataContabil.put("inputdocumentID10", inputdocumentID10);
			}
	    	hAPI.startProcess(proccessIdContabil, 5, usersContabil, "Processo Iniciado pelo Lançamento de Nota Fiscal", true, formDataContabil, false);
			//Abre Processo Departamento Pessoal SMR
			var fluxoDP = hAPI.getCardValue("inputfluxoDP");
			if (fluxoDP == "True"){
				console.info("###!!!Start Processo Departamento Pessoal SMR!!!###")
				var usersDP = new java.util.ArrayList();
				usersDP.add("Pool:Group:SMR_BPM_FIS_LancamentoNF_DP");
				var inputnrmigo = hAPI.getCardValue("nummigo");
				var inputnrmiro = hAPI.getCardValue("nummiro");
				var inputnmempresa = hAPI.getCardValue("drop_emp");
				var inputcodFornec = hAPI.getCardValue("numfornecedor");
				var inputnmFornec = hAPI.getCardValue("descfornecedor");
				var inputdtEntrada = hAPI.getCardValue("data_sol");
				var inputdtLanc = hAPI.getCardValue("dtlanc");
				var inputdtDoc = hAPI.getCardValue("dtdoc");
				var inputdtVenc = hAPI.getCardValue("dtvenc");
				var inputnrnf = hAPI.getCardValue("numnf");
				var inputvalornf = hAPI.getCardValue("valornf");
				var inputdocumentID1 = hAPI.getCardValue("inputdocumentId1");
				var inputdocumentID2 = hAPI.getCardValue("inputdocumentId2");
				var inputdocumentID3 = hAPI.getCardValue("inputdocumentId3");
				var inputdocumentID4 = hAPI.getCardValue("inputdocumentId4");
				var inputdocumentID5 = hAPI.getCardValue("inputdocumentId5");
				var inputdocumentID6 = hAPI.getCardValue("inputdocumentId6");
				var inputdocumentID7 = hAPI.getCardValue("inputdocumentId7");
				var inputdocumentID8 = hAPI.getCardValue("inputdocumentId8");
				var inputdocumentID9 = hAPI.getCardValue("inputdocumentId9");
				var inputdocumentID10 = hAPI.getCardValue("inputdocumentId10");
				var proccessIdDP = "62_2 - Lancamento NF e Fatura - Depto Pessoal";
		    	var formDataDP = new java.util.HashMap();
				formDataDP.put("nummigo", inputnrmigo);
				formDataDP.put("nummiro", inputnrmiro);
				formDataDP.put("drop_emp", inputnmempresa);
				formDataDP.put("numfornecedor", inputcodFornec);
				formDataDP.put("descfornecedor", inputnmFornec);
				formDataDP.put("data_sol", inputdtEntrada);
				formDataDP.put("datalanc", inputdtLanc);
				formDataDP.put("datadoc", inputdtDoc);
				formDataDP.put("datavenc", inputdtVenc);
				formDataDP.put("numnf", inputnrnf);
				formDataDP.put("valornf", inputvalornf);
				formDataDP.put("inputdocumentId1", inputdocumentID1);
				formDataDP.put("inputdocumentId2", inputdocumentID2);
				formDataDP.put("inputdocumentId3", inputdocumentID3);
				formDataDP.put("inputdocumentId4", inputdocumentID4);
				formDataDP.put("inputdocumentId5", inputdocumentID5);
				formDataDP.put("inputdocumentID6", inputdocumentID6);
				formDataDP.put("inputdocumentID7", inputdocumentID7);
				formDataDP.put("inputdocumentID8", inputdocumentID8);
				formDataDP.put("inputdocumentID9", inputdocumentID9);
				formDataDP.put("inputdocumentID10", inputdocumentID10);
		    	hAPI.startProcess(proccessIdDP, 5, usersDP, "Processo Iniciado pelo Lançamento de Nota Fiscal", true, formDataDP, false);
			}
		}
		else if(empresa == "B014"){
			//Abre Processo Contabilidade Jeceaba
			console.info("###!!!Start Processo Contabilidade Jeceaba!!!###")
			var usersContabil = new java.util.ArrayList();
			usersContabil.add("Pool:Group:JCB_BPM_FIS_LancamentoNF_Contabilidade");
			var inputnrsolicitacao = hAPI.getCardValue("numsolicitacao");
			var inputsolicitante = hAPI.getCardValue("solicitante");
			var inputnrmigo = hAPI.getCardValue("nummigo");
			var inputnrmiro = hAPI.getCardValue("nummiro");
			var inputnmempresa = hAPI.getCardValue("drop_emp");
			var inputcodFornec = hAPI.getCardValue("numfornecedor");
			var inputnmFornec = hAPI.getCardValue("descfornecedor");
			var inputdtEntrada = hAPI.getCardValue("data_sol");
			var inputdtLanc = hAPI.getCardValue("dtlanc");
			var inputdtDoc = hAPI.getCardValue("dtdoc");
			var inputdtVenc = hAPI.getCardValue("dtvenc");
			var inputnrnf = hAPI.getCardValue("numnf");
			var inputvalornf = hAPI.getCardValue("valornf");
			var inputdocumentID1 = hAPI.getCardValue("inputdocumentId1");
			var inputdocumentID2 = hAPI.getCardValue("inputdocumentId2");
			var inputdocumentID3 = hAPI.getCardValue("inputdocumentId3");
			var inputdocumentID4 = hAPI.getCardValue("inputdocumentId4");
			var inputdocumentID5 = hAPI.getCardValue("inputdocumentId5");
			var inputdocumentID6 = hAPI.getCardValue("inputdocumentId6");
			var inputdocumentID7 = hAPI.getCardValue("inputdocumentId7");
			var inputdocumentID8 = hAPI.getCardValue("inputdocumentId8");
			var inputdocumentID9 = hAPI.getCardValue("inputdocumentId9");
			var inputdocumentID10 = hAPI.getCardValue("inputdocumentId10");
			var proccessIdContabil = "62_1 - Lancamento NF e Fatura - Contabilidade";
	    	var formDataContabil = new java.util.HashMap();
			if (lancFinanc == "0"){
				formDataContabil.put("numsolicitacao", inputnrsolicitacao);
				formDataContabil.put("solicitante", inputsolicitante);
				formDataContabil.put("nummigo", inputnrmigo);
				formDataContabil.put("nummiro", inputnrmiro);
				formDataContabil.put("drop_emp", inputnmempresa);
				formDataContabil.put("numfornecedor", inputcodFornec);
				formDataContabil.put("descfornecedor", inputnmFornec);
				formDataContabil.put("data_sol", inputdtEntrada);
				formDataContabil.put("datalanc", inputdtLanc);
				formDataContabil.put("datadoc", inputdtDoc);
				formDataContabil.put("datavenc", inputdtVenc);
				formDataContabil.put("numnf", inputnrnf);
				formDataContabil.put("valornf", inputvalornf);
				formDataContabil.put("inputdocumentId1", inputdocumentID1);
				formDataContabil.put("inputdocumentId2", inputdocumentID2);
				formDataContabil.put("inputdocumentId3", inputdocumentID3);
				formDataContabil.put("inputdocumentId4", inputdocumentID4);
				formDataContabil.put("inputdocumentId5", inputdocumentID5);
				formDataContabil.put("inputdocumentID6", inputdocumentID6);
				formDataContabil.put("inputdocumentID7", inputdocumentID7);
				formDataContabil.put("inputdocumentID8", inputdocumentID8);
				formDataContabil.put("inputdocumentID9", inputdocumentID9);
				formDataContabil.put("inputdocumentID10", inputdocumentID10);
			}else{
				formDataContabil.put("numsolicitacao", inputnrsolicitacao);
				formDataContabil.put("solicitante", inputsolicitante);
				formDataContabil.put("drop_emp", inputnmempresa);
				formDataContabil.put("numfornecedor", inputcodFornec);
				formDataContabil.put("descfornecedor", inputnmFornec);
				formDataContabil.put("data_sol", inputdtEntrada);
				formDataContabil.put("datalanc", inputdtLanc);
				formDataContabil.put("datadoc", inputdtDoc);
				formDataContabil.put("datavenc", inputdtVenc);
				formDataContabil.put("valornf", inputvalornf);
				formDataContabil.put("inputdocumentId1", inputdocumentID1);
				formDataContabil.put("inputdocumentId2", inputdocumentID2);
				formDataContabil.put("inputdocumentId3", inputdocumentID3);
				formDataContabil.put("inputdocumentId4", inputdocumentID4);
				formDataContabil.put("inputdocumentId5", inputdocumentID5);
				formDataContabil.put("inputdocumentID6", inputdocumentID6);
				formDataContabil.put("inputdocumentID7", inputdocumentID7);
				formDataContabil.put("inputdocumentID8", inputdocumentID8);
				formDataContabil.put("inputdocumentID9", inputdocumentID9);
				formDataContabil.put("inputdocumentID10", inputdocumentID10);
			}
	    	hAPI.startProcess(proccessIdContabil, 5, usersContabil, "Processo Iniciado pelo Lançamento de Nota Fiscal", true, formDataContabil, false);
			//Abre Processo Departamento Pessoal Jeceaba
			var fluxoDP = hAPI.getCardValue("inputfluxoDP");
			if (fluxoDP == "True"){
				console.info("###!!!Start Processo Departamento Pessoal JCB!!!###")
				var usersDP = new java.util.ArrayList();
				usersDP.add("Pool:Group:JCB_BPM_FIS_LancamentoNF_DP");
				var inputnrmigo = hAPI.getCardValue("nummigo");
				var inputnrmiro = hAPI.getCardValue("nummiro");
				var inputnmempresa = hAPI.getCardValue("drop_emp");
				var inputcodFornec = hAPI.getCardValue("numfornecedor");
				var inputnmFornec = hAPI.getCardValue("descfornecedor");
				var inputdtEntrada = hAPI.getCardValue("data_sol");
				var inputdtLanc = hAPI.getCardValue("dtlanc");
				var inputdtDoc = hAPI.getCardValue("dtdoc");
				var inputdtVenc = hAPI.getCardValue("dtvenc");
				var inputnrnf = hAPI.getCardValue("numnf");
				var inputvalornf = hAPI.getCardValue("valornf");
				var inputdocumentID1 = hAPI.getCardValue("inputdocumentId1");
				var inputdocumentID2 = hAPI.getCardValue("inputdocumentId2");
				var inputdocumentID3 = hAPI.getCardValue("inputdocumentId3");
				var inputdocumentID4 = hAPI.getCardValue("inputdocumentId4");
				var inputdocumentID5 = hAPI.getCardValue("inputdocumentId5");
				var inputdocumentID6 = hAPI.getCardValue("inputdocumentId6");
				var inputdocumentID7 = hAPI.getCardValue("inputdocumentId7");
				var inputdocumentID8 = hAPI.getCardValue("inputdocumentId8");
				var inputdocumentID9 = hAPI.getCardValue("inputdocumentId9");
				var inputdocumentID10 = hAPI.getCardValue("inputdocumentId10");
				var proccessIdDP = "62_2 - Lancamento NF e Fatura - Depto Pessoal";
		    	var formDataDP = new java.util.HashMap();
				formDataDP.put("nummigo", inputnrmigo);
				formDataDP.put("nummiro", inputnrmiro);
				formDataDP.put("drop_emp", inputnmempresa);
				formDataDP.put("numfornecedor", inputcodFornec);
				formDataDP.put("descfornecedor", inputnmFornec);
				formDataDP.put("data_sol", inputdtEntrada);
				formDataDP.put("datalanc", inputdtLanc);
				formDataDP.put("datadoc", inputdtDoc);
				formDataDP.put("datavenc", inputdtVenc);
				formDataDP.put("numnf", inputnrnf);
				formDataDP.put("valornf", inputvalornf);
				formDataDP.put("inputdocumentId1", inputdocumentID1);
				formDataDP.put("inputdocumentId2", inputdocumentID2);
				formDataDP.put("inputdocumentId3", inputdocumentID3);
				formDataDP.put("inputdocumentId4", inputdocumentID4);
				formDataDP.put("inputdocumentId5", inputdocumentID5);
				formDataDP.put("inputdocumentID6", inputdocumentID6);
				formDataDP.put("inputdocumentID7", inputdocumentID7);
				formDataDP.put("inputdocumentID8", inputdocumentID8);
				formDataDP.put("inputdocumentID9", inputdocumentID9);
				formDataDP.put("inputdocumentID10", inputdocumentID10);
		    	hAPI.startProcess(proccessIdDP, 5, usersDP, "Processo Iniciado pelo Lançamento de Nota Fiscal", true, formDataDP, false);
			}
		}
		else if(empresa == "B015"){
			//Abre Processo Contabilidade Aquapolo
			console.info("###!!!Start Processo Contabilidade Aquapolo!!!###")
			var usersContabil = new java.util.ArrayList();
			usersContabil.add("Pool:Group:AQP_BPM_FIS_LancamentoNF_Contabilidade");
			var inputnrsolicitacao = hAPI.getCardValue("numsolicitacao");
			var inputsolicitante = hAPI.getCardValue("solicitante");
			var inputnrmigo = hAPI.getCardValue("nummigo");
			var inputnrmiro = hAPI.getCardValue("nummiro");
			var inputnmempresa = hAPI.getCardValue("drop_emp");
			var inputcodFornec = hAPI.getCardValue("numfornecedor");
			var inputnmFornec = hAPI.getCardValue("descfornecedor");
			var inputdtEntrada = hAPI.getCardValue("data_sol");
			var inputdtLanc = hAPI.getCardValue("dtlanc");
			var inputdtDoc = hAPI.getCardValue("dtdoc");
			var inputdtVenc = hAPI.getCardValue("dtvenc");
			var inputnrnf = hAPI.getCardValue("numnf");
			var inputvalornf = hAPI.getCardValue("valornf");
			var inputdocumentID1 = hAPI.getCardValue("inputdocumentId1");
			var inputdocumentID2 = hAPI.getCardValue("inputdocumentId2");
			var inputdocumentID3 = hAPI.getCardValue("inputdocumentId3");
			var inputdocumentID4 = hAPI.getCardValue("inputdocumentId4");
			var inputdocumentID5 = hAPI.getCardValue("inputdocumentId5");
			var inputdocumentID6 = hAPI.getCardValue("inputdocumentId6");
			var inputdocumentID7 = hAPI.getCardValue("inputdocumentId7");
			var inputdocumentID8 = hAPI.getCardValue("inputdocumentId8");
			var inputdocumentID9 = hAPI.getCardValue("inputdocumentId9");
			var inputdocumentID10 = hAPI.getCardValue("inputdocumentId10");
			var proccessIdContabil = "62_1 - Lancamento NF e Fatura - Contabilidade";
	    	var formDataContabil = new java.util.HashMap();
			if (lancFinanc == "0"){
				formDataContabil.put("numsolicitacao", inputnrsolicitacao);
				formDataContabil.put("solicitante", inputsolicitante);
				formDataContabil.put("nummigo", inputnrmigo);
				formDataContabil.put("nummiro", inputnrmiro);
				formDataContabil.put("drop_emp", inputnmempresa);
				formDataContabil.put("numfornecedor", inputcodFornec);
				formDataContabil.put("descfornecedor", inputnmFornec);
				formDataContabil.put("data_sol", inputdtEntrada);
				formDataContabil.put("datalanc", inputdtLanc);
				formDataContabil.put("datadoc", inputdtDoc);
				formDataContabil.put("datavenc", inputdtVenc);
				formDataContabil.put("numnf", inputnrnf);
				formDataContabil.put("valornf", inputvalornf);
				formDataContabil.put("inputdocumentId1", inputdocumentID1);
				formDataContabil.put("inputdocumentId2", inputdocumentID2);
				formDataContabil.put("inputdocumentId3", inputdocumentID3);
				formDataContabil.put("inputdocumentId4", inputdocumentID4);
				formDataContabil.put("inputdocumentId5", inputdocumentID5);
				formDataContabil.put("inputdocumentID6", inputdocumentID6);
				formDataContabil.put("inputdocumentID7", inputdocumentID7);
				formDataContabil.put("inputdocumentID8", inputdocumentID8);
				formDataContabil.put("inputdocumentID9", inputdocumentID9);
				formDataContabil.put("inputdocumentID10", inputdocumentID10);
			}else{
				formDataContabil.put("numsolicitacao", inputnrsolicitacao);
				formDataContabil.put("solicitante", inputsolicitante);
				formDataContabil.put("drop_emp", inputnmempresa);
				formDataContabil.put("numfornecedor", inputcodFornec);
				formDataContabil.put("descfornecedor", inputnmFornec);
				formDataContabil.put("data_sol", inputdtEntrada);
				formDataContabil.put("datalanc", inputdtLanc);
				formDataContabil.put("datadoc", inputdtDoc);
				formDataContabil.put("datavenc", inputdtVenc);
				formDataContabil.put("valornf", inputvalornf);
				formDataContabil.put("inputdocumentId1", inputdocumentID1);
				formDataContabil.put("inputdocumentId2", inputdocumentID2);
				formDataContabil.put("inputdocumentId3", inputdocumentID3);
				formDataContabil.put("inputdocumentId4", inputdocumentID4);
				formDataContabil.put("inputdocumentId5", inputdocumentID5);
				formDataContabil.put("inputdocumentID6", inputdocumentID6);
				formDataContabil.put("inputdocumentID7", inputdocumentID7);
				formDataContabil.put("inputdocumentID8", inputdocumentID8);
				formDataContabil.put("inputdocumentID9", inputdocumentID9);
				formDataContabil.put("inputdocumentID10", inputdocumentID10);
			}
	    	hAPI.startProcess(proccessIdContabil, 5, usersContabil, "Processo Iniciado pelo Lançamento de Nota Fiscal", true, formDataContabil, false);
			//Abre Processo Departamento Pessoal Aquapolo
			var fluxoDP = hAPI.getCardValue("inputfluxoDP");
			if (fluxoDP == "True"){
				console.info("###!!!Start Processo Departamento Pessoal AQP!!!###")
				var usersDP = new java.util.ArrayList();
				usersDP.add("Pool:Group:AQP_BPM_FIS_LancamentoNF_DP");
				var inputnrmigo = hAPI.getCardValue("nummigo");
				var inputnrmiro = hAPI.getCardValue("nummiro");
				var inputnmempresa = hAPI.getCardValue("drop_emp");
				var inputcodFornec = hAPI.getCardValue("numfornecedor");
				var inputnmFornec = hAPI.getCardValue("descfornecedor");
				var inputdtEntrada = hAPI.getCardValue("data_sol");
				var inputdtLanc = hAPI.getCardValue("dtlanc");
				var inputdtDoc = hAPI.getCardValue("dtdoc");
				var inputdtVenc = hAPI.getCardValue("dtvenc");
				var inputnrnf = hAPI.getCardValue("numnf");
				var inputvalornf = hAPI.getCardValue("valornf");
				var inputdocumentID1 = hAPI.getCardValue("inputdocumentId1");
				var inputdocumentID2 = hAPI.getCardValue("inputdocumentId2");
				var inputdocumentID3 = hAPI.getCardValue("inputdocumentId3");
				var inputdocumentID4 = hAPI.getCardValue("inputdocumentId4");
				var inputdocumentID5 = hAPI.getCardValue("inputdocumentId5");
				var inputdocumentID6 = hAPI.getCardValue("inputdocumentId6");
				var inputdocumentID7 = hAPI.getCardValue("inputdocumentId7");
				var inputdocumentID8 = hAPI.getCardValue("inputdocumentId8");
				var inputdocumentID9 = hAPI.getCardValue("inputdocumentId9");
				var inputdocumentID10 = hAPI.getCardValue("inputdocumentId10");
				var proccessIdDP = "62_2 - Lancamento NF e Fatura - Depto Pessoal";
		    	var formDataDP = new java.util.HashMap();
				formDataDP.put("nummigo", inputnrmigo);
				formDataDP.put("nummiro", inputnrmiro);
				formDataDP.put("drop_emp", inputnmempresa);
				formDataDP.put("numfornecedor", inputcodFornec);
				formDataDP.put("descfornecedor", inputnmFornec);
				formDataDP.put("data_sol", inputdtEntrada);
				formDataDP.put("datalanc", inputdtLanc);
				formDataDP.put("datadoc", inputdtDoc);
				formDataDP.put("datavenc", inputdtVenc);
				formDataDP.put("numnf", inputnrnf);
				formDataDP.put("valornf", inputvalornf);
				formDataDP.put("inputdocumentId1", inputdocumentID1);
				formDataDP.put("inputdocumentId2", inputdocumentID2);
				formDataDP.put("inputdocumentId3", inputdocumentID3);
				formDataDP.put("inputdocumentId4", inputdocumentID4);
				formDataDP.put("inputdocumentId5", inputdocumentID5);
				formDataDP.put("inputdocumentID6", inputdocumentID6);
				formDataDP.put("inputdocumentID7", inputdocumentID7);
				formDataDP.put("inputdocumentID8", inputdocumentID8);
				formDataDP.put("inputdocumentID9", inputdocumentID9);
				formDataDP.put("inputdocumentID10", inputdocumentID10);
		    	hAPI.startProcess(proccessIdDP, 5, usersDP, "Processo Iniciado pelo Lançamento de Nota Fiscal", true, formDataDP, false);
			}
		}
		else if(empresa == "B016"){
			//Abre Processo Contabilidade Triunfo
			console.info("###!!!Start Processo Contabilidade Triunfo!!!###")
			var usersContabil = new java.util.ArrayList();
			usersContabil.add("Pool:Group:DAT_BPM_FIS_LancamentoNF_Contabilidade");
			var inputnrsolicitacao = hAPI.getCardValue("numsolicitacao");
			var inputsolicitante = hAPI.getCardValue("solicitante");
			var inputnrmigo = hAPI.getCardValue("nummigo");
			var inputnrmiro = hAPI.getCardValue("nummiro");
			var inputnmempresa = hAPI.getCardValue("drop_emp");
			var inputcodFornec = hAPI.getCardValue("numfornecedor");
			var inputnmFornec = hAPI.getCardValue("descfornecedor");
			var inputdtEntrada = hAPI.getCardValue("data_sol");
			var inputdtLanc = hAPI.getCardValue("dtlanc");
			var inputdtDoc = hAPI.getCardValue("dtdoc");
			var inputdtVenc = hAPI.getCardValue("dtvenc");
			var inputnrnf = hAPI.getCardValue("numnf");
			var inputvalornf = hAPI.getCardValue("valornf");
			var inputdocumentID1 = hAPI.getCardValue("inputdocumentId1");
			var inputdocumentID2 = hAPI.getCardValue("inputdocumentId2");
			var inputdocumentID3 = hAPI.getCardValue("inputdocumentId3");
			var inputdocumentID4 = hAPI.getCardValue("inputdocumentId4");
			var inputdocumentID5 = hAPI.getCardValue("inputdocumentId5");
			var inputdocumentID6 = hAPI.getCardValue("inputdocumentId6");
			var inputdocumentID7 = hAPI.getCardValue("inputdocumentId7");
			var inputdocumentID8 = hAPI.getCardValue("inputdocumentId8");
			var inputdocumentID9 = hAPI.getCardValue("inputdocumentId9");
			var inputdocumentID10 = hAPI.getCardValue("inputdocumentId10");
			var proccessIdContabil = "62_1 - Lancamento NF e Fatura - Contabilidade";
	    	var formDataContabil = new java.util.HashMap();
			if (lancFinanc == "0"){
				formDataContabil.put("numsolicitacao", inputnrsolicitacao);
				formDataContabil.put("solicitante", inputsolicitante);
				formDataContabil.put("nummigo", inputnrmigo);
				formDataContabil.put("nummiro", inputnrmiro);
				formDataContabil.put("drop_emp", inputnmempresa);
				formDataContabil.put("numfornecedor", inputcodFornec);
				formDataContabil.put("descfornecedor", inputnmFornec);
				formDataContabil.put("data_sol", inputdtEntrada);
				formDataContabil.put("datalanc", inputdtLanc);
				formDataContabil.put("datadoc", inputdtDoc);
				formDataContabil.put("datavenc", inputdtVenc);
				formDataContabil.put("numnf", inputnrnf);
				formDataContabil.put("valornf", inputvalornf);
				formDataContabil.put("inputdocumentId1", inputdocumentID1);
				formDataContabil.put("inputdocumentId2", inputdocumentID2);
				formDataContabil.put("inputdocumentId3", inputdocumentID3);
				formDataContabil.put("inputdocumentId4", inputdocumentID4);
				formDataContabil.put("inputdocumentId5", inputdocumentID5);
				formDataContabil.put("inputdocumentID6", inputdocumentID6);
				formDataContabil.put("inputdocumentID7", inputdocumentID7);
				formDataContabil.put("inputdocumentID8", inputdocumentID8);
				formDataContabil.put("inputdocumentID9", inputdocumentID9);
				formDataContabil.put("inputdocumentID10", inputdocumentID10);
			}else{
				formDataContabil.put("numsolicitacao", inputnrsolicitacao);
				formDataContabil.put("solicitante", inputsolicitante);
				formDataContabil.put("drop_emp", inputnmempresa);
				formDataContabil.put("numfornecedor", inputcodFornec);
				formDataContabil.put("descfornecedor", inputnmFornec);
				formDataContabil.put("data_sol", inputdtEntrada);
				formDataContabil.put("datalanc", inputdtLanc);
				formDataContabil.put("datadoc", inputdtDoc);
				formDataContabil.put("datavenc", inputdtVenc);
				formDataContabil.put("valornf", inputvalornf);
				formDataContabil.put("inputdocumentId1", inputdocumentID1);
				formDataContabil.put("inputdocumentId2", inputdocumentID2);
				formDataContabil.put("inputdocumentId3", inputdocumentID3);
				formDataContabil.put("inputdocumentId4", inputdocumentID4);
				formDataContabil.put("inputdocumentId5", inputdocumentID5);
				formDataContabil.put("inputdocumentID6", inputdocumentID6);
				formDataContabil.put("inputdocumentID7", inputdocumentID7);
				formDataContabil.put("inputdocumentID8", inputdocumentID8);
				formDataContabil.put("inputdocumentID9", inputdocumentID9);
				formDataContabil.put("inputdocumentID10", inputdocumentID10);
			}
	    	hAPI.startProcess(proccessIdContabil, 5, usersContabil, "Processo Iniciado pelo Lançamento de Nota Fiscal", true, formDataContabil, false);
			//Abre Processo Departamento Pessoal Triunfo
			var fluxoDP = hAPI.getCardValue("inputfluxoDP");
			if (fluxoDP == "True"){
				console.info("###!!!Start Processo Departamento Pessoal DAT!!!###")
				var usersDP = new java.util.ArrayList();
				usersDP.add("Pool:Group:DAT_BPM_FIS_LancamentoNF_DP");
				var inputnrmigo = hAPI.getCardValue("nummigo");
				var inputnrmiro = hAPI.getCardValue("nummiro");
				var inputnmempresa = hAPI.getCardValue("drop_emp");
				var inputcodFornec = hAPI.getCardValue("numfornecedor");
				var inputnmFornec = hAPI.getCardValue("descfornecedor");
				var inputdtEntrada = hAPI.getCardValue("data_sol");
				var inputdtLanc = hAPI.getCardValue("dtlanc");
				var inputdtDoc = hAPI.getCardValue("dtdoc");
				var inputdtVenc = hAPI.getCardValue("dtvenc");
				var inputnrnf = hAPI.getCardValue("numnf");
				var inputvalornf = hAPI.getCardValue("valornf");
				var inputdocumentID1 = hAPI.getCardValue("inputdocumentId1");
				var inputdocumentID2 = hAPI.getCardValue("inputdocumentId2");
				var inputdocumentID3 = hAPI.getCardValue("inputdocumentId3");
				var inputdocumentID4 = hAPI.getCardValue("inputdocumentId4");
				var inputdocumentID5 = hAPI.getCardValue("inputdocumentId5");
				var inputdocumentID6 = hAPI.getCardValue("inputdocumentId6");
				var inputdocumentID7 = hAPI.getCardValue("inputdocumentId7");
				var inputdocumentID8 = hAPI.getCardValue("inputdocumentId8");
				var inputdocumentID9 = hAPI.getCardValue("inputdocumentId9");
				var inputdocumentID10 = hAPI.getCardValue("inputdocumentId10");
				var proccessIdDP = "62_2 - Lancamento NF e Fatura - Depto Pessoal";
		    	var formDataDP = new java.util.HashMap();
				formDataDP.put("nummigo", inputnrmigo);
				formDataDP.put("nummiro", inputnrmiro);
				formDataDP.put("drop_emp", inputnmempresa);
				formDataDP.put("numfornecedor", inputcodFornec);
				formDataDP.put("descfornecedor", inputnmFornec);
				formDataDP.put("data_sol", inputdtEntrada);
				formDataDP.put("datalanc", inputdtLanc);
				formDataDP.put("datadoc", inputdtDoc);
				formDataDP.put("datavenc", inputdtVenc);
				formDataDP.put("numnf", inputnrnf);
				formDataDP.put("valornf", inputvalornf);
				formDataDP.put("inputdocumentId1", inputdocumentID1);
				formDataDP.put("inputdocumentId2", inputdocumentID2);
				formDataDP.put("inputdocumentId3", inputdocumentID3);
				formDataDP.put("inputdocumentId4", inputdocumentID4);
				formDataDP.put("inputdocumentId5", inputdocumentID5);
				formDataDP.put("inputdocumentID6", inputdocumentID6);
				formDataDP.put("inputdocumentID7", inputdocumentID7);
				formDataDP.put("inputdocumentID8", inputdocumentID8);
				formDataDP.put("inputdocumentID9", inputdocumentID9);
				formDataDP.put("inputdocumentID10", inputdocumentID10);
		    	hAPI.startProcess(proccessIdDP, 5, usersDP, "Processo Iniciado pelo Lançamento de Nota Fiscal", true, formDataDP, false);
			}
		}
	}
}