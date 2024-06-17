/*************************************************************************Controle de Versão**************************************************************/
// Versão 1.0.01 																																		 //
// Alterando classeAvaliacao para ser obrigatoria somente na atividade de Incluir Classe de Avaliação                                                    //
// Alterando atividade Aprovar Solicitação, caso for ampliação de material, o campo novo numero material é obrigatorio o preenchimento                   //
/*********************************************************************************************************************************************************/

function validateForm(form){
	
	var atv = getValue("WKNumState");
	var msg = "";
	var motivo = form.getValue("drop_motivo");
	var dropCSCStatus = form.getValue("drop_cscsup_status");
	var dropSMRStatus = form.getValue("drop_smrsup_status");
	var obsRecusaCSC = form.getValue("divObsRecusaCSC");
	var obsRecusaSMR = form.getValue("divObsRecusaSMR");
	var nrmaterial = form.getValue("nrmaterial");
	var obsmaterial = form.getValue("obsampMaterial");

	if(atv == 2 || atv == 0){
		
		if ((form.getValue("drop_motivo") == "inclusao" )){throw "A partir de 23/08/2021 todas as solicitações de Cadastro de Materiais deverão ser realizadas através do Portal de Cadastros da Astrein-SSACAD.";}
		
		if(motivo != "inclusao" && nrmaterial == ""){			
			msg+= 'Campo "Nr. do Material" deve ser informado <br>'
		}
		if(motivo == "alteracao" && obsmaterial == "" ){
			msg+= 'Campo "Observação" deve ser informado <br>'
		}
	}
	


	//##############################################################################
	if(atv == 20 && motivo == "inclusao"){
		if((dropCSCStatus != "recusado") && (dropSMRStatus != "recusado")){
			var ressControlaMrp = form.getValue("mrp");
			var ressDeposito = form.getValue("deposito");
			var ressPrazo = form.getValue("prazo");
			var ressEstMinimo = form.getValue("estoquemin");
			var ressEstMaximo = form.getValue("estoquemax");
			var estControlaEst = form.getValue("ctlestoque");
			var estNDeposito = form.getValue("numerodeposito");
			var estTipoDepo = form.getValue("tipodeposito");
			var estCentroLucro = form.getValue("centrolucro");
			var estPosicaoEst = form.getValue("posicao");
			
		
		
		
			if(ressControlaMrp == "SIM" && ressDeposito == ""){
				msg+= 'Campo "Depósito(Ressuprimentos)" deve ser informado <br>'
			}
			if(ressControlaMrp == "SIM" && ressPrazo == ""){
				msg+= 'Campo "Prazo(Ressuprimentos)" deve ser informado <br>'
		    }
			if(ressControlaMrp == "SIM" && ressEstMinimo == ""){
				msg+= 'Campo "Est. Mínimo(Ressuprimentos)" deve ser informado <br>'
			}
			if(ressControlaMrp == "SIM" && ressEstMaximo == ""){
				msg+= 'Campo "Est. Máximo(Ressuprimentos)" deve ser informado <br>'
			}
			if(estControlaEst == "SIM" && estNDeposito == ""){
				msg+= 'Campo "N. Depósito(Estoque)" deve ser informado <br>'
			}
			if(estControlaEst == "SIM" && estTipoDepo == ""){
				msg+= 'Campo "Tipo Depósito(Estoque)" deve ser informado <br>'
			}
			if(estControlaEst == "SIM" && estCentroLucro == ""){
				msg+= 'Campo "Centro de Lucro(Estoque)" deve ser informado <br>'
			}
			if(estControlaEst == "SIM" && estPosicaoEst == ""){
				msg+= 'Campo Posição Estoque(Estoque) deve ser informado <br>'
			}
		}
	}
	
	//##############################################################################
	
	if(atv == 20){
		var dropCSCStatus = form.getValue("drop_cscsup_status");
		var obsRecusaCSC = form.getValue("obsRecusaCSC");
		var obsAjusteCSC = form.getValue("txtSuprimentosCSC");
		
		if(dropCSCStatus == "ajuste" && obsAjusteCSC == ""){
			msg+= 'Campo "Observação de Ajuste" deve ser preenchido <br>'			
		}
		if(dropCSCStatus == "recusado" && obsRecusaCSC == ""){
			msg+= 'Campo "Observação de Recusa" deve ser preenchido <br>'
		}
		
	}
	//##############################################################################
	
	if(atv == 33){
		
		var dropSMRStatus = form.getValue("drop_smrsup_status");		
		var obsRecusaSMR = form.getValue("obsRecusaSMR");		
		var obsAjusteSMR = form.getValue("txtSuprimentosSMR");
		
		if(dropSMRStatus == "ajuste" && obsAjusteSMR == ""){
			msg+= 'Campo "Observação de Ajuste" deve ser preenchido <br>'
		}	
		if(dropSMRStatus == "recusado" && obsRecusaSMR == ""){
			msg+= 'Campo "Observação de Recusa" deve ser preenchido <br>'
		}
		
	}
	
	//##############################################################################

	// Versão 1.0.01
	//if(atv == 49){
	//	if(form.getValue("classeAvaliacao") == "" || form.getValue("classeAvaliacao") == null || form.getValue("classeAvaliacao") == undefined){
	//		msg+= 'Campo "Classe Avaliação(Contabilidade)" deve ser informado <br>'
	//	}
	//	if(msg != ""){
	//		throw msg;
	//	}
	//}

	//###############################################################################		
	
	if (atv == 28){
		var addJustif = form.getValue("addjustJustificativas");
		
		if(addJustif == ""){
			msg+= 'Campo "Adicionar Justificativa" deve ser preenchido <br>'			
		}
	}


	if ((atv ==25) && motivo == "inclusao" && nrmaterial == ''){
		msg+= 'Campo "Nr. do Material" deve ser preenchido. <br>'
	}

	//##############################################################################
	
	if(atv == 2 || atv == 28 || atv == 33){
		//centro logistico para validar
		if(form.getValue('drop_motivo') != "inclusao" ){
			if(form.getValue('numdomaterial') == ""){
				msg+= 'Campo "Número do Material" deve ser informado <br>'
			}
		}
		
		if (form.getValue('centroLogistica') == null || form.getValue('centroLogistica') == ""){
			msg+= 'Campo "Centro Logístico" não selecionado <br>'
		}
		//Panel Dados Gerais
		if((motivo == "inclusao" || motivo == "alteracao") && form.getValue("tipoMaterial") == "vazio"){
			msg+= 'Campo "Tipo Material" não pode ficar em branco <br>'
		}
		
		if(motivo == "inclusao" || motivo == "alteracao" && form.getValue('tipoMaterial') == "zcon" || form.getValue('tipoMaterial') == "zequ" || form.getValue('tipoMaterial') == "zmat"){
			if(form.getValue('grupoMercadoria') == "vaziozcon"){
				msg += 'Campo Grupo Mercadoria não pode ficar vazio<br>'
			}
			if(form.getValue('grupoMercadoria') == "vaziozequ"){
				msg+= 'Campo Grupo Mercadoria não pode ficar vazio<br>'
			}
			if(form.getValue('grupoMercadoria') == "vaziozmat"){
				msg+= 'Campo Grupo Mercadoria não pode ficar vazio<br>'
			}
			
		}		
		
		if ((motivo == "inclusao" || motivo == "alteracao") && form.getValue('ncm') == ""){
			msg += 'Campo "NCM" não pode ficar em branco <br>'
			}
		
		if ((motivo == "inclusao" || motivo == "alteracao") && form.getValue('textoBreve') == ""){
			msg += 'Campo "Texto Breve" deve ser informado <br>'
		}
		
		if((motivo == "inclusao" || motivo == "alteracao") && (form.getValue("unimedida") == null || form.getValue("unimedida") == "")){
			msg += 'Campo "Unidade de Medida" não pode ficar em branco <br>'
		}
		
		
		//Panel Estoque
		
		/*if(atv == 20 || atv == 25 || atv == 33 && form.getValue('ctlestoque') == "ctlvazio"){
			msg += 'Campo "Controla Estoque" não foi informado<br>'
		}*/
		
		if(form.getValue('ctlestoque') == "simctl"){			
			
			if(form.getValue('centrolucro') == ""){
				msg += 'Campo "Centro de Lucro" não informado <br>'
			}
			if(form.getValue('numerodeposito') == ""){
				msg += 'Campo "N. Depósito" não informado <br>'
			}
			if(form.getValue('tipodeposito') == ""){
				msg += 'Campo "Tipo Depósito" não informado <br>'
			}
			if(form.getValue('posicao') == ""){
				msg += 'Campo "Posição Estoque" não informado <br>'
			}
			
		}
		
		if(msg != ""){
			throw msg;
		}
	}
	
	if(atv == 20){
		
		//if(form.getValue('drop_motivo') == "inclusao"){
			//if(form.getValue('numdomaterial') == ""){
				//msg += 'Campo Número do Material não pode ficar em branco <br>'
			//}
		//}
		
		if(form.getValue('aprovacao') == "reprovado"){
			if(form.getValue('txtSuprimentos') == ""){
				msg += 'Campo "observação" não pode ficar em branco <br>'
			}
		}	

		/*if(form.getValue('drop_motivo') == "inclusao" && form.getValue('drop_cscsup_status') == "aprovado"){
			if(form.getValue('nrnovomaterial') == ""){
				msg += 'Campo "Novo Número Material" não pode ficar em branco <br>'
			}
		}*/
		
		if(msg != ""){
			throw msg;
		}
	}

	/*if(atv == 25){
		if(form.getValue('drop_motivo') == "inclusao"){
			if(form.getValue('nrnovomaterial') == ""){
				msg += 'Campo "Novo Número Material" não pode ficar em branco <br>'
			}
		}
		if(msg != ""){
			throw msg;
		}
	}*/
}