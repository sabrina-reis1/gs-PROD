function displayFields(form,customHTML){
	var atividade = getValue("WKNumState");
	form.setHidePrintLink(true);

	/*************************************************************************************************/
	/****************************************Get User Logado******************************************/
	/*************************************************************************************************/
	
	if(atividade == 0 || atividade == 4){
		var usuarioId = getValue("WKUser");
		var const1 = DatasetFactory.createConstraint("colleaguePK.colleagueId",usuarioId , usuarioId, ConstraintType.MUST);
		var datasetAttachment = DatasetFactory.getDataset("colleague", null, [const1], null);
		var usuario = datasetAttachment.getValue(0,"colleagueName");
		var mail = datasetAttachment.getValue(0,"mail");
		form.setValue("inputSolicitante", usuario);
		form.setValue("inputHiddenEmail", mail);
	}

	/*************************************************************************************************/
	/*************************************************************************************************/
	/*************************************************************************************************/



	/*************************************************************************************************/
	/*****************************************Get Data Atual******************************************/
	/*************************************************************************************************/	
	var date = new Date();
	var month = date.getMonth()+ 1;
	var day = date.getDate();

	if(day<10){
		day='0'+day	    
	}
	if(month<10){	
		month='0'+month	
	} 
	var dataAtual = day + "/" + month + "/" + date.getFullYear();	
	form.setValue('inputDataSolicitacao', dataAtual);
	/*************************************************************************************************/
	/*************************************************************************************************/
	/*************************************************************************************************/

	form.setValue("inputHiddenAtividade", atividade);

	if(atividade == 0 || atividade == 4){
		form.setVisibleById("Aquisicao", false);
		form.setVisibleById("Baixa", false);
		form.setVisibleById("Transferencia", false);
		form.setVisibleById("Venda", false);
		form.setVisibleById("Doacao", false);
		form.setVisibleById("divBaixaCodAtivo", false);
		form.setVisibleById("divAquisicaoCodigoAtivo", false);
		form.setVisibleById("divAquisicaoNrSubPrincipal", false);
		customHTML.append(
				'<script>'+
				'$("#divVendaPlacaPatrimonio").css("display", "none");'+
				'$("#divBaixaPlacaPatrimonio").css("display", "none");'+
				'$("#divAquisicaoCodItemPrinc").css("display", "none");'+
				'$("#trTransfClassesAtivos").css("display", "none");'+
				'</script>'
			);
	}

	
	/*************************************************************************************************/
	/**********************************Exibe SubItems na etapa Final**********************************/
	/*************************************************************************************************/

	if(atividade == 6){
		var nrSubItemPrincipal = getValue("inputAquisicaoNrSubPrincipal");
		if(nrSubItemPrincipal != ""){
			form.setVisibleById("divAquisicaoNrSubPrincipal", true);
		}else{
			form.setVisibleById("divAquisicaoNrSubPrincipal", false);
		}

	}
	/*************************************************************************************************/
	/*************************************************************************************************/
	/*************************************************************************************************/

	/*************************************************************************************************/
	/****************************Exibe botões apenas para a etapa Fiscal******************************/
	/*************************************************************************************************/

	if(atividade == 11){
		form.setVisibleById("btnVendaAnexarArquivos", true);
		form.setVisibleById("btnDoacaoAnexarArquivos", true);
	}else{
		form.setVisibleById("btnVendaAnexarArquivos", false);
		form.setVisibleById("btnDoacaoAnexarArquivos", false);
	}
	/*************************************************************************************************/
	/*************************************************************************************************/
	/*************************************************************************************************/

	/*************************************************************************************************/
	/****************************Trata Campos SubItem na Etapa Contabil*******************************/
	/*************************************************************************************************/
	if(atividade == 10){
		var getAquisicao = form.getValue("selectAquisicaoTipo");
		var getBaixa = form.getValue("selectBaixaTipo");
		var getTransferencia = form.getValue("inputTransfDeLocalizacao");
		var getDoacao = form.getValue("inputDoacaoCPFCNPJ");
		var getVenda = form.getValue("inputVendaCPFCNPJ");
		var getCodAtivoBaixa = form.getValue("inputBaixaCodAtivo");
		var getCodAtivoDoacao = form.getValue("inputDoacaoNrAtivo");
		var getCodAtivoVenda = form.getValue("inputVendaNrAtivo");
		var getTipoAquisicao =form.getValue("selectAquisicaoTipo");
		if(getAquisicao != ""){
			customHTML.append('<script>'+
								'var codAtivo = $("#inputAquisicaoCodigoAtivo").val();'+
								'if (codAtivo == ""){'+
								'	$("#inputAquisicaoCodigoAtivo").addClass("animation");'+
								'}'+
								'$("#inputAquisicaoCodigoAtivo").click(function(){'+ //Ao clicar no campo ele remove a animação.
							      	'$(this).removeClass("animation");'+ 
							    '});'+
								'$("#inputAquisicaoNrSubPrincipal").addClass("animation");'+
								'$("#inputAquisicaoNrSubPrincipal").click(function(){'+ //Ao clicar no campo ele remove a animação.
								    '$(this).removeClass("animation");'+ 
								'});'+
								'var linhas = $(".tableRow").length;'+
							    'if(linhas != "1"){'+							    	
								    '$("#divAquisicaoNrSubPrincipal").show();'+
								    'for (var i = 0; i < linhas; i++){'+
								        '$("#inputnrSubItem___"+i).attr("readonly", false);'+
								        '$("#inputnrSubItem___"+i).addClass("animation");'+
								        '$("#inputnrSubItem___"+i).click(function(){'+ //Ao clicar no campo ele remove a animação.
									      	'$(this).removeClass("animation");'+ 
									    '});'+
								    '}'+
							    '}'+
							  '</script>'
							 );		    
		}
		if(getBaixa != "" && getCodAtivoBaixa == ""){
			customHTML.append(
					'<script>'+
					'$("#inputBaixaCodAtivo").addClass("animation");'+
					'$("#inputBaixaCodAtivo").click(function(){'+ //Ao clicar no campo ele remove a animação.
				      	'$(this).removeClass("animation");'+ 
				    '});'+
					'</script>'
				);
		}
		if(getDoacao != "" && getCodAtivoDoacao == ""){
			customHTML.append(
					'<script>'+
					'$("#inputDoacaoNrAtivo").addClass("animation");'+
					'$("#inputDoacaoNrAtivo").click(function(){'+ //Ao clicar no campo ele remove a animação.
				      	'$(this).removeClass("animation");'+ 
				    '});'+
					'</script>'
				);
		}
		if(getVenda != "" && getCodAtivoVenda == ""){
			customHTML.append(
					'<script>'+
					'$("#inputVendaNrAtivo").addClass("animation");'+
					'$("#inputVendaNrAtivo").click(function(){'+ //Ao clicar no campo ele remove a animação.
				      	'$(this).removeClass("animation");'+ 
				    '});'+
					'</script>'
				);
		}		

	}
	/**********************************************Fim************************************************/
	/*************************************************************************************************/
	/*********************************Exibe Painel Analise Contabil***********************************/

	if(atividade == 10){
		form.setVisibleById("divanaliseContabil", true);
	}else{
		form.setVisibleById("divanaliseContabil", false);
	}

	/**********************************************Fim************************************************/
	/*************************************************************************************************/
	/**********************Trata Abas de Navegação Conforme o que foi preenchido**********************/

	if(atividade == 10 || atividade == 6 || atividade == 23 || atividade == 11){

		var selectEmpresa = form.getValue("selectEmpresa");
		var getAquisicao = form.getValue("selectAquisicaoTipo");
		var getBaixa = form.getValue("selectBaixaTipo");
		var getTransferencia = form.getValue("inputTransfDeLocalizacao");
		var getDoacao = form.getValue("inputDoacaoCPFCNPJ");
		var getVenda = form.getValue("inputVendaCPFCNPJ");
		var getTipoAquisicao =form.getValue("selectAquisicaoTipo");

		if(getAquisicao != "" && getBaixa == ""){ //Se apenas Aquisicao;
			
				form.setVisibleById("Aquisicao", true);
				form.setVisibleById("divAquisicao", true);
				form.setVisibleById("divAquisicaoNrSubPrincipal", true);			
				form.setVisibleById("Baixa", false);
				form.setVisibleById("Transferencia", false);
				form.setVisibleById("Venda", false);
				form.setVisibleById("Doacao", false);
				form.setVisibleById("Orientacoes", false);

				customHTML.append("<script>$('#divAquisicao').addClass('active in');</script>");
				customHTML.append("<script>$('#divOrientacoes').removeClass('active in');</script>");

			if(getTipoAquisicao == "Subitem"){
				form.setVisibleById("divAquisicaoCodItemPrinc", false);
				form.setVisibleById("divAquisicaoQtd", false);
				form.setVisibleById("divAquisicaoCodigoItem", false);
				form.setVisibleById("divAquisicaoLocalizacao", false);
				form.setVisibleById("divAquisicaoUsuario", false);
				form.setVisibleById("divAquisicaoCentroLogistico", false);
				form.setVisibleById("divAquisicaoCentroCusto", false);
				form.setVisibleById("divAquisicaoCentroLucro", false);
				form.setVisibleById("divAquisicaoDescricaoAtivo", false);				
			}

		}
		if(getAquisicao == "" && getBaixa != ""){ //Se apenas Baixa;
			form.setVisibleById("Baixa", true);
			form.setVisibleById("divBaixa", true);
			form.setVisibleById("Aquisicao", false);
			form.setVisibleById("Transferencia", false);
			form.setVisibleById("Venda", false);
			form.setVisibleById("Doacao", false);
			form.setVisibleById("Orientacoes", false);
			if (selectEmpresa == "B009"){
				form.setVisibleById("divBaixaPlacaPatrimonio", true);
				form.setVisibleById("divBaixaLocalizacao", false);
				form.setVisibleById("divBaixaDataAquisicao", false);
				form.setVisibleById("divBaixaDescricaoAtivo", false);
				form.setVisibleById("divBaixaFornecedor", false);
			}else{
				form.setVisibleById("divBaixaPlacaPatrimonio", false);
				form.setVisibleById("divBaixaLocalizacao", true);
				form.setVisibleById("divBaixaDataAquisicao", true);
				form.setVisibleById("divBaixaDescricaoAtivo", true);
				form.setVisibleById("divBaixaFornecedor", true);
			}
			customHTML.append("<script>$('#divBaixa').addClass('active in');</script>");
			customHTML.append("<script>$('#divOrientacoes').removeClass('active in');</script>");
		}
		if(getAquisicao != "" && getBaixa != ""){ //Se Aquisicao + Baixa;
			form.setVisibleById("Aquisicao", true);
			form.setVisibleById("divAquisicao", true);
			form.setVisibleById("divAquisicaoNrSubPrincipal", true);
			form.setVisibleById("Baixa", true);
			form.setVisibleById("divBaixa", true);
			form.setVisibleById("Transferencia", false);
			form.setVisibleById("Venda", false);
			form.setVisibleById("Doacao", false);
			form.setVisibleById("Orientacoes", false);
			if(getTipoAquisicao == "Subitem"){
				form.setVisibleById("divAquisicaoCodItemPrinc", false);
				form.setVisibleById("divAquisicaoQtd", false);
				form.setVisibleById("divAquisicaoCodigoItem", false);
				form.setVisibleById("divAquisicaoLocalizacao", false);
				form.setVisibleById("divAquisicaoUsuario", false);
				form.setVisibleById("divAquisicaoCentroLogistico", false);
				form.setVisibleById("divAquisicaoCentroCusto", false);
				form.setVisibleById("divAquisicaoCentroLucro", false);
				form.setVisibleById("divAquisicaoDescricaoAtivo", false);				
			}
			if (selectEmpresa == "B009"){
				form.setVisibleById("divBaixaPlacaPatrimonio", true);
				form.setVisibleById("divBaixaLocalizacao", false);
				form.setVisibleById("divBaixaDataAquisicao", false);
				form.setVisibleById("divBaixaDescricaoAtivo", false);
				form.setVisibleById("divBaixaFornecedor", false);
			}else{
				form.setVisibleById("divBaixaPlacaPatrimonio", false);
				form.setVisibleById("divBaixaLocalizacao", true);
				form.setVisibleById("divBaixaDataAquisicao", true);
				form.setVisibleById("divBaixaDescricaoAtivo", true);
				form.setVisibleById("divBaixaFornecedor", true);
			}
			customHTML.append("<script>$('#divBaixa').addClass('active in');</script>");
			customHTML.append("<script>$('#divAquisicao').addClass('active in');</script>");
			customHTML.append("<script>$('#divOrientacoes').removeClass('active in');</script>");
		}
		if(getTransferencia != ""){ //Se Transferencia;
			form.setVisibleById("Transferencia", true);
			form.setVisibleById("divTransferencia", true);
			form.setVisibleById("Baixa", false);
			form.setVisibleById("Aquisicao", false);
			form.setVisibleById("Venda", false);
			form.setVisibleById("Doacao", false);
			form.setVisibleById("Orientacoes", false);
			if (selectEmpresa == "B009"){				
				form.setVisibleById("divtTransfPatrimonio", true);
			}else{
				form.setVisibleById("divtTransfPatrimonio", false);
			}
			customHTML.append("<script>$('#divTransferencia').addClass('active in');</script>");
			customHTML.append("<script>$('#divOrientacoes').removeClass('active in');</script>");
		}
		if(getDoacao != ""){ //Se Doação;
			form.setVisibleById("Doacao", true);
			form.setVisibleById("divDoacao", true);
			form.setVisibleById("Transferencia", false);
			form.setVisibleById("Baixa", false);
			form.setVisibleById("Aquisicao", false);
			form.setVisibleById("Venda", false);
			form.setVisibleById("Orientacoes", false);
			if (selectEmpresa == "B009"){				
				form.setVisibleById("divDoacaoPlacaPatrimonio", true);
				form.setVisibleById("divDoacaoDataAquisicao", false);
				form.setVisibleById("divDoacaoDescricaoAtivo", false);
			}else{
				form.setVisibleById("divDoacaoPlacaPatrimonio", false);
				form.setVisibleById("divDoacaoDataAquisicao", true);
				form.setVisibleById("divDoacaoDescricaoAtivo", true);
			}
			customHTML.append("<script>$('#divDoacao').addClass('active in');</script>");
			customHTML.append("<script>$('#divOrientacoes').removeClass('active in');</script>");
		}
		if(getVenda != ""){ //Se Venda;			
			form.setVisibleById("Venda", true);
			form.setVisibleById("divVenda", true);
			form.setVisibleById("Doacao", false);
			form.setVisibleById("Transferencia", false);
			form.setVisibleById("Baixa", false);
			form.setVisibleById("Aquisicao", false);
			form.setVisibleById("Orientacoes", false);
			if (selectEmpresa == "B009"){				
				form.setVisibleById("divVendaPlacaPatrimonio", true);
				form.setVisibleById("divVendaDataAquisicao", false);
				form.setVisibleById("divVendaDescricaoAtivo", false);
			}else{
				form.setVisibleById("divVendaPlacaPatrimonio", false);
				form.setVisibleById("divVendaDataAquisicao", true);
				form.setVisibleById("divVendaDescricaoAtivo", true);
			}
			customHTML.append("<script>$('#divVenda').addClass('active in');</script>");
			customHTML.append("<script>$('#divOrientacoes').removeClass('active in');</script>");
		}

	}

	/*************************************************************************************************/
	/*************************************************************************************************/
	/*************************************************************************************************/
						
	

	
	
	
	
}