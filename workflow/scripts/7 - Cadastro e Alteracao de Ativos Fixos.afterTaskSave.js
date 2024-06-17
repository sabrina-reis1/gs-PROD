function afterTaskSave(colleagueId,nextSequenceId,userList){
	
	var state = getValue("WKNumState");
	var user = getValue("WKUser");
	var nrSolicitacao = getValue("WKNumProces");

	var txtJustContabil = hAPI.getCardValue("txtareaAnaliseContabil");
	var obs = '';
	var completTask = getValue("WKCompletTask");
	
	var Aquisicao = hAPI.getCardValue("selectAquisicaoTipo");
	var Baixa = hAPI.getCardValue("selectBaixaTipo");
	var Transferencia = hAPI.getCardValue("inputTransfDeLocalizacao");
	var Venda = hAPI.getCardValue("inputVendaCPFCNPJ");
	var Doacao = hAPI.getCardValue("inputDoacaoCPFCNPJ");
	var analiseContabil = hAPI.getCardValue("selectAnaliseContabil");

	if (completTask.equals("true")){

		if (state == 10){

			if(Aquisicao != "" && analiseContabil != "cancelado"){

				try {

					//Cria Array para destinatarios e parametros da mensagem de email
					var param = new java.util.HashMap();
					var dest = new java.util.ArrayList();
					
					//Coleta dados do campo do formulário, com endereço de email do solicitante para adicionar como destinatário
					var email = hAPI.getCardValue("inputHiddenEmail");
					dest.add(email);

					//Coleta dados do formulário para adicionar como parametros do corpo do email.
					param.put("SOLICITANTE", (hAPI.getCardValue("inputSolicitante")));
					param.put("SELECTEMPRESA", (hAPI.getCardValue("selectEmpresa")));
					param.put("NRSOLICITACAO", nrSolicitacao.toString());
					param.put("LINK_ACESSO", "https://integra.gsinima.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID="+nrSolicitacao);
					param.put("subject", "Cadastro e Alteração de Ativos Fixos - Novo Ativo");

					notifier.notify("admings", "Template_Email_Cadastro_Alt_Ativo - Novo_Ativo", param, dest, "text/html");

				} catch (e) {
	                log.error(">>>>> Erro Envio de email de customizado: " + e);
	            }

			}

			if(Baixa != "" && analiseContabil != "cancelado"){

				try {

					//Cria Array para destinatarios e parametros da mensagem de email
					var param = new java.util.HashMap();
					var dest = new java.util.ArrayList();
					
					//Coleta dados do campo do formulário, com endereço de email do solicitante para adicionar como destinatário
					var email = hAPI.getCardValue("inputHiddenEmail");
					dest.add(email);

					//Coleta dados do formulário para adicionar como parametros do corpo do email.
					param.put("SOLICITANTE", (hAPI.getCardValue("inputSolicitante")));
					param.put("SELECTEMPRESA", (hAPI.getCardValue("selectEmpresa")));
					param.put("NRSOLICITACAO", nrSolicitacao.toString());
					param.put("LINK_ACESSO", "https://integra.gsinima.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID="+nrSolicitacao);
					param.put("subject", "Cadastro e Alteração de Ativos Fixos - Baixa de Ativo");

					notifier.notify("admings", "Template_Email_Cadastro_Alt_Ativo - Baixa_Ativo", param, dest, "text/html");

				} catch (e) {
	                log.error(">>>>> Erro Envio de email de customizado: " + e);
	            }

			}

			if(Transferencia != "" && analiseContabil != "cancelado"){

				try {

					//Cria Array para destinatarios e parametros da mensagem de email
					var param = new java.util.HashMap();
					var dest = new java.util.ArrayList();
					
					//Coleta dados do campo do formulário, com endereço de email do solicitante para adicionar como destinatário
					var email = hAPI.getCardValue("inputHiddenEmail");
					dest.add(email);

					//Coleta dados do formulário para adicionar como parametros do corpo do email.
					param.put("SOLICITANTE", (hAPI.getCardValue("inputSolicitante")));
					param.put("SELECTEMPRESA", (hAPI.getCardValue("selectEmpresa")));
					param.put("NRSOLICITACAO", nrSolicitacao.toString());
					param.put("LINK_ACESSO", "https://integra.gsinima.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID="+nrSolicitacao);
					param.put("subject", "Cadastro e Alteração de Ativos Fixos - Transferência de Ativo");

					notifier.notify("admings", "Template_Email_Cadastro_Alt_Ativo - Transf_Ativo", param, dest, "text/html");

				} catch (e) {
	                log.error(">>>>> Erro Envio de email de customizado: " + e);
	            }

			}

		}

		if (state == 10 && txtJustContabil != ""){

			var obs = "<strong style='color:red;'>Justificativa Contabil: " + txtJustContabil + "</strong>";
			hAPI.setTaskComments(user, nrSolicitacao,  0, obs);

		}


		if (state == 11){

			if (Venda != ""){

				try {

					//Cria Array para destinatarios e parametros da mensagem de email
					var param = new java.util.HashMap();
					var dest = new java.util.ArrayList();
					
					//Coleta dados do campo do formulário, com endereço de email do solicitante para adicionar como destinatário
					var email = hAPI.getCardValue("inputHiddenEmail");
					dest.add(email);

					//Coleta dados do formulário para adicionar como parametros do corpo do email.
					param.put("SOLICITANTE", (hAPI.getCardValue("inputSolicitante")));
					param.put("SELECTEMPRESA", (hAPI.getCardValue("selectEmpresa")));
					param.put("NRSOLICITACAO", nrSolicitacao.toString());
					param.put("LINK_ACESSO", "https://integra.gsinima.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID="+nrSolicitacao);
					param.put("subject", "Cadastro e Alteração de Ativos Fixos - Venda de Ativo");

					notifier.notify("admings", "Template_Email_Cadastro_Alt_Ativo - Venda_Ativo", param, dest, "text/html");

				} catch (e) {
	                log.error(">>>>> Erro Envio de email de customizado: " + e);
	            }

			}

			if (Doacao != ""){

				try {

					//Cria Array para destinatarios e parametros da mensagem de email
					var param = new java.util.HashMap();
					var dest = new java.util.ArrayList();
					
					//Coleta dados do campo do formulário, com endereço de email do solicitante para adicionar como destinatário
					var email = hAPI.getCardValue("inputHiddenEmail");
					dest.add(email);

					//Coleta dados do formulário para adicionar como parametros do corpo do email.
					param.put("SOLICITANTE", (hAPI.getCardValue("inputSolicitante")));
					param.put("SELECTEMPRESA", (hAPI.getCardValue("selectEmpresa")));
					param.put("NRSOLICITACAO", nrSolicitacao.toString());
					param.put("LINK_ACESSO", "https://integra.gsinima.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID="+nrSolicitacao);
					param.put("subject", "Cadastro e Alteração de Ativos Fixos - Doação de Ativo");

					notifier.notify("admings", "Template_Email_Cadastro_Alt_Ativo - Doacao_Ativo", param, dest, "text/html");

				} catch (e) {
	                log.error(">>>>> Erro Envio de email de customizado: " + e);
	            }

			}

		}

	}

}