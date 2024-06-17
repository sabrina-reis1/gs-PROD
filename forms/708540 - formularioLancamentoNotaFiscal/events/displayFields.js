/*************************************************************************Controle de Versão*************************************************************/
// Versão 1.0.86 																																		//
// Correção na função somaData para meses com 31 dias                                                                                                   //
/********************************************************************************************************************************************************/

function displayFields(form,customHTML){
	var state = getValue("WKNumState");
	form.setValue("atividadeAtual",state);
	
	
	//Insere as Datas para validação
	//Data Valida Formulário
	var dataAtual = new Date();
	var dia = dataAtual.getDate();
	var diaMes = dataAtual.getDate();
	var mes = dataAtual.getMonth()+ 1;
	var ano = dataAtual.getYear();

	if(dia<10){dia='0'+dia}
	if(mes<10){mes='0'+mes}

	dataValida = dia + "/" + mes + "/" + dataAtual.getFullYear();
	
	
	
	
	
	
	//Insere Valores de Data e dia da Semana no Formulário
	if (state == 0){
		form.setValue("data_sol", dataValida);
		
	}if (state == 51){
		form.setValue("novaDataReprovado", dataValida);
	}
	
	form.setValue("monthDay", diaMes);
	
	
	
	if (state == 28){
		form.setValue("nrtask", state);
		//form.setValue("txtJustFisc", "");
	}
	var processCod = getValue("WKDef");
	form.setValue("nrproc", processCod);

	if(state == 0 || state == 4){
		
		var usuarioId = getValue("WKUser");
		var const1 = DatasetFactory.createConstraint("colleaguePK.colleagueId",usuarioId , usuarioId, ConstraintType.MUST);    
		var datasetAttachment = DatasetFactory.getDataset("colleague", null, [const1], null);    
		var usuario = datasetAttachment.getValue(0,"colleagueName");
		form.setValue("solicitante", usuario);
		var numerosolicitacao = getValue("WKNumProces");
		form.setValue("numsolicitacao", numerosolicitacao);
		
		
		
		//novo desenvolvimento
		
		//Soma data para Alert de data de Pagamento ATUAL
		/*var d = new Date();
		var n = d.getMonth();
		if (n == 0 || n == 2 || n == 4 || n == 6 || n == 7 || n == 9 || n == 11) {
			
			var soma;
			// se for BR02 SOMA = 5 e BR03 soma = 3
			var tipoFornecedorSAP = form.getValue("tipoFornecedor");
			log.info("########## - tipoFornecedorSAP "+tipoFornecedorSAP);
			
			if (tipoFornecedorSAP == "BR02"){
				soma = 5;
				log.info("########## - 1");
				
			} else if (tipoFornecedorSAP == "BR03"){
				soma = 3;
				log.info("########## - 2");
				
			} else {
				var soma = 7;
				log.info("########## - 3");
			}
			
			
			form.setValue("qtdDias", soma);

			var somaData = new Date();
			somaData.setDate(dataAtual.getDate() + soma);
			var somaDia = somaData.getDate();
			var somaMes = somaData.getMonth() + 1;
			var somaAno = somaData.getYear();
			if(somaDia<10){somaDia='0'+somaDia}
			if(somaMes<10){somaMes='0'+somaMes}
			dataSomada = somaDia + "/" + somaMes + "/" + somaData.getFullYear();
			form.setValue("somadata", dataSomada);

			var dtMinima = new Date();
			if(dtMinima.getDate() >= 11 && dtMinima.getDate() <= 20){
				dtMinima.setDate(dataAtual.getDate() + (soma - 11));
			}else{
				dtMinima.setDate(dataAtual.getDate() + (soma - 10));
			}
			
			var dtMinimaDia = dtMinima.getDate();
			var dtMinimaMes = dtMinima.getMonth() + 1;
			var dtMinimaAno = dtMinima.getYear();
			if(dtMinimaDia<10){dtMinimaDia='0'+dtMinimaDia}
			if(dtMinimaMes<10){dtMinimaMes='0'+dtMinimaMes}
			dtMinimaMesSomada = dtMinimaDia + "/" + dtMinimaMes + "/" + dtMinima.getFullYear();
			form.setValue("dtMinima", dtMinimaMesSomada);

			var sucesso = form.getValue("fismsgsucesso");
			var warning = form.getValue("fismsgwarning");
			var erro = form.getValue("fismsgerro");
			var justSol = form.getValue("soljust");
			var atualData = form.getValue("data_sol");
			var justFis = form.getValue("fisrep2");
			var fisJust2 = form.getValue("fisjust2");
			var lancfin = form.getValue("inputLancFinanc");
			var somaData = form.getValue("somadata");
			var datavencimento = form.getValue("dtvenc");
			var partesData2 = datavencimento.split("/");
			var vencimento =  new Date(partesData2[2], partesData2[1] -1, partesData2[0]);
			var somaData = form.getValue("somadata");
			var datasomada = form.getValue("somadata");
			var partesData = datasomada.split("/");
			var somaData = new Date(partesData[2], partesData[1] -1, partesData[0]);
			var fundoFixo = form.getValue("inputFundoFixo");
			var adiantamento = form.getValue("inputAdiantamento");
			var tipoFornecedor = form.getValue("inputtipoFornecedor");
		}else if (n == 3 || n == 5 || n == 8 || n == 10) {
			var soma;
			// se for BR02 SOMA = 5 e BR03 soma = 3
			log.info("########## - tipoFornecedor "+tipoFornecedorSAP);
			
			if (tipoFornecedorSAP == "BR02"){
				soma = 5;
				log.info("########## - 10");
				
			} else if (tipoFornecedorSAP == "BR03"){
				soma = 3;
				log.info("########## - 20");
				
			} else {
				var soma = 7;
				log.info("########## - 30");
			}
			
			
			form.setValue("qtdDias", soma);
					
			var somaData = new Date();
			somaData.setDate(dataAtual.getDate() + soma);
			var somaDia = somaData.getDate();
			var somaMes = somaData.getMonth() + 1;
			var somaAno = somaData.getYear();
			if(somaDia<10){somaDia='0'+somaDia}
			if(somaMes<10){somaMes='0'+somaMes}
			dataSomada = somaDia + "/" + somaMes + "/" + somaData.getFullYear();
			form.setValue("somadata", dataSomada);


			var dtMinima = new Date();
			dtMinima.setDate(dataAtual.getDate() + (soma - 10));
			var dtMinimaDia = dtMinima.getDate();
			var dtMinimaMes = dtMinima.getMonth() + 1;
			var dtMinimaAno = dtMinima.getYear();
			if(dtMinimaDia<10){dtMinimaDia='0'+dtMinimaDia}
			if(dtMinimaMes<10){dtMinimaMes='0'+dtMinimaMes}
			dtMinimaMesSomada = dtMinimaDia + "/" + dtMinimaMes + "/" + dtMinima.getFullYear();
			form.setValue("dtMinima", dtMinimaMesSomada);

			var sucesso = form.getValue("fismsgsucesso");
			var warning = form.getValue("fismsgwarning");
			var erro = form.getValue("fismsgerro");
			var justSol = form.getValue("soljust");
			var atualData = form.getValue("data_sol");
			var justFis = form.getValue("fisrep2");
			var fisJust2 = form.getValue("fisjust2");
			var lancfin = form.getValue("inputLancFinanc");
			var somaData = form.getValue("somadata");
			var datavencimento = form.getValue("dtvenc");
			var partesData2 = datavencimento.split("/");
			var vencimento =  new Date(partesData2[2], partesData2[1] -1, partesData2[0]);
			var somaData = form.getValue("somadata");
			var datasomada = form.getValue("somadata");
			var partesData = datasomada.split("/");
			var somaData = new Date(partesData[2], partesData[1] -1, partesData[0]);
			var fundoFixo = form.getValue("inputFundoFixo");
			var adiantamento = form.getValue("inputAdiantamento");
			var tipoFornecedor = form.getValue("inputtipoFornecedor");
		}else if (n == 1) {
			var soma;
			// se for BR02 SOMA = 5 e BR03 soma = 3
			log.info("########## - tipoFornecedor "+tipoFornecedorSAP);
			
			if (tipoFornecedorSAP == "BR02"){
				soma = 5;
				log.info("########## - 100");
				
			} else if (tipoFornecedorSAP == "BR03"){
				soma = 3;
				log.info("########## - 200");
				
			} else {
				var soma = 7;
				log.info("########## - 300");
			}
			
			
			form.setValue("qtdDias", soma);
						
			var somaData = new Date();
			somaData.setDate(dataAtual.getDate() + soma);
			var somaDia = somaData.getDate();
			var somaMes = somaData.getMonth() + 1;
			var somaAno = somaData.getYear();
			if(somaDia<10){somaDia='0'+somaDia}
			if(somaMes<10){somaMes='0'+somaMes}
			dataSomada = somaDia + "/" + somaMes + "/" + somaData.getFullYear();
			form.setValue("somadata", dataSomada);


			var dtMinima = new Date();
			dtMinima.setDate(dataAtual.getDate() + (soma - 10));
			var dtMinimaDia = dtMinima.getDate();
			var dtMinimaMes = dtMinima.getMonth() + 1;
			var dtMinimaAno = dtMinima.getYear();
			if(dtMinimaDia<10){dtMinimaDia='0'+dtMinimaDia}
			if(dtMinimaMes<10){dtMinimaMes='0'+dtMinimaMes}
			dtMinimaMesSomada = dtMinimaDia + "/" + dtMinimaMes + "/" + dtMinima.getFullYear();
			form.setValue("dtMinima", dtMinimaMesSomada);*/

/*			var sucesso = form.getValue("fismsgsucesso");
			var warning = form.getValue("fismsgwarning");
			var erro = form.getValue("fismsgerro");
			var justSol = form.getValue("soljust");
			var atualData = form.getValue("data_sol");
			var justFis = form.getValue("fisrep2");
			var fisJust2 = form.getValue("fisjust2");
			var lancfin = form.getValue("inputLancFinanc");
			var somaData = form.getValue("somadata");
			var datavencimento = form.getValue("dtvenc");
			var partesData2 = datavencimento.split("/");
			var vencimento =  new Date(partesData2[2], partesData2[1] -1, partesData2[0]);
			var somaData = form.getValue("somadata");
			var datasomada = form.getValue("somadata");
			var partesData = datasomada.split("/");
			var somaData = new Date(partesData[2], partesData[1] -1, partesData[0]);
			var fundoFixo = form.getValue("inputFundoFixo");
			var adiantamento = form.getValue("inputAdiantamento");
			var tipoFornecedor = form.getValue("inputtipoFornecedor");*/
		
		//}
		
		//
		
		//validação de datas no inicio do processo
		//Soma data para Alert de data de Pagamento ATUAL
		/*var d = new Date();
		var n = d.getMonth();
		if (n == 0 || n == 2 || n == 4 || n == 6 || n == 7 || n == 9 || n == 11) {
			var soma = 0;
			if (diaMes == "1"){soma = 24}
			if (diaMes == "2"){soma = 23}
			if (diaMes == "3"){soma = 22}
			if (diaMes == "4"){soma = 21}
			if (diaMes == "5"){soma = 20}
			if (diaMes == "6"){soma = 19}
			if (diaMes == "7"){soma = 18}
			if (diaMes == "8"){soma = 17}
			if (diaMes == "9"){soma = 16}
			if (diaMes == "10"){soma = 15}
			if (diaMes == "11"){soma = 25} // Versão 1.0.86
			if (diaMes == "12"){soma = 24} // Versão 1.0.86
			if (diaMes == "13"){soma = 23} // Versão 1.0.86
			if (diaMes == "14"){soma = 22} // Versão 1.0.86
			if (diaMes == "15"){soma = 21} // Versão 1.0.86
			if (diaMes == "16"){soma = 20} // Versão 1.0.86
			if (diaMes == "17"){soma = 19} // Versão 1.0.86
			if (diaMes == "18"){soma = 18} // Versão 1.0.86
			if (diaMes == "19"){soma = 17} // Versão 1.0.86
			if (diaMes == "20"){soma = 16} // Versão 1.0.86
			if (diaMes == "21"){soma = 25} // Versão 1.0.86
			if (diaMes == "22"){soma = 24} // Versão 1.0.86
			if (diaMes == "23"){soma = 23} // Versão 1.0.86
			if (diaMes == "24"){soma = 22} // Versão 1.0.86
			if (diaMes == "25"){soma = 21} // Versão 1.0.86
			if (diaMes == "26"){soma = 20} // Versão 1.0.86
			if (diaMes == "27"){soma = 19} // Versão 1.0.86
			if (diaMes == "28"){soma = 18} // Versão 1.0.86
			if (diaMes == "29"){soma = 17} // Versão 1.0.86
			if (diaMes == "30"){soma = 16} // Versão 1.0.86
			if (diaMes == "31"){soma = 15} // Versão 1.0.86
			var somaData = new Date();
			somaData.setDate(dataAtual.getDate() + soma);
			var somaDia = somaData.getDate();
			var somaMes = somaData.getMonth() + 1;
			var somaAno = somaData.getYear();
			if(somaDia<10){somaDia='0'+somaDia}
			if(somaMes<10){somaMes='0'+somaMes}
			dataSomada = somaDia + "/" + somaMes + "/" + somaData.getFullYear();
			form.setValue("somadata", dataSomada);

			var dtMinima = new Date();
			if(dtMinima.getDate() >= 11 && dtMinima.getDate() <= 20){
				dtMinima.setDate(dataAtual.getDate() + (soma - 11));
			}else{
				dtMinima.setDate(dataAtual.getDate() + (soma - 10));
			}
			
			var dtMinimaDia = dtMinima.getDate();
			var dtMinimaMes = dtMinima.getMonth() + 1;
			var dtMinimaAno = dtMinima.getYear();
			if(dtMinimaDia<10){dtMinimaDia='0'+dtMinimaDia}
			if(dtMinimaMes<10){dtMinimaMes='0'+dtMinimaMes}
			dtMinimaMesSomada = dtMinimaDia + "/" + dtMinimaMes + "/" + dtMinima.getFullYear();
			form.setValue("dtMinima", dtMinimaMesSomada);

			var sucesso = form.getValue("fismsgsucesso");
			var warning = form.getValue("fismsgwarning");
			var erro = form.getValue("fismsgerro");
			var justSol = form.getValue("soljust");
			var atualData = form.getValue("data_sol");
			var justFis = form.getValue("fisrep2");
			var fisJust2 = form.getValue("fisjust2");
			var lancfin = form.getValue("inputLancFinanc");
			var somaData = form.getValue("somadata");
			var datavencimento = form.getValue("dtvenc");
			var partesData2 = datavencimento.split("/");
			var vencimento =  new Date(partesData2[2], partesData2[1] -1, partesData2[0]);
			var somaData = form.getValue("somadata");
			var datasomada = form.getValue("somadata");
			var partesData = datasomada.split("/");
			var somaData = new Date(partesData[2], partesData[1] -1, partesData[0]);
			var fundoFixo = form.getValue("inputFundoFixo");
			var adiantamento = form.getValue("inputAdiantamento");
			var tipoFornecedor = form.getValue("inputtipoFornecedor");
		}else if (n == 3 || n == 5 || n == 8 || n == 10) {
			var soma = 0;
			if (diaMes == "1"){soma = 24}
			if (diaMes == "2"){soma = 23}
			if (diaMes == "3"){soma = 22}
			if (diaMes == "4"){soma = 21}
			if (diaMes == "5"){soma = 20}
			if (diaMes == "6"){soma = 19}
			if (diaMes == "7"){soma = 18}
			if (diaMes == "8"){soma = 17}
			if (diaMes == "9"){soma = 16}
			if (diaMes == "10"){soma = 15}
			if (diaMes == "11"){soma = 24}
			if (diaMes == "12"){soma = 23}
			if (diaMes == "13"){soma = 22}
			if (diaMes == "14"){soma = 21}
			if (diaMes == "15"){soma = 20}
			if (diaMes == "16"){soma = 19}
			if (diaMes == "17"){soma = 18}
			if (diaMes == "18"){soma = 17}
			if (diaMes == "19"){soma = 16}
			if (diaMes == "20"){soma = 15}
			if (diaMes == "21"){soma = 24}
			if (diaMes == "22"){soma = 23}
			if (diaMes == "23"){soma = 22}
			if (diaMes == "24"){soma = 21}
			if (diaMes == "25"){soma = 20}
			if (diaMes == "26"){soma = 19}
			if (diaMes == "27"){soma = 18}
			if (diaMes == "28"){soma = 17}
			if (diaMes == "29"){soma = 16}
			if (diaMes == "30"){soma = 15}		
			var somaData = new Date();
			somaData.setDate(dataAtual.getDate() + soma);
			var somaDia = somaData.getDate();
			var somaMes = somaData.getMonth() + 1;
			var somaAno = somaData.getYear();
			if(somaDia<10){somaDia='0'+somaDia}
			if(somaMes<10){somaMes='0'+somaMes}
			dataSomada = somaDia + "/" + somaMes + "/" + somaData.getFullYear();
			form.setValue("somadata", dataSomada);


			var dtMinima = new Date();
			dtMinima.setDate(dataAtual.getDate() + (soma - 10));
			var dtMinimaDia = dtMinima.getDate();
			var dtMinimaMes = dtMinima.getMonth() + 1;
			var dtMinimaAno = dtMinima.getYear();
			if(dtMinimaDia<10){dtMinimaDia='0'+dtMinimaDia}
			if(dtMinimaMes<10){dtMinimaMes='0'+dtMinimaMes}
			dtMinimaMesSomada = dtMinimaDia + "/" + dtMinimaMes + "/" + dtMinima.getFullYear();
			form.setValue("dtMinima", dtMinimaMesSomada);

			var sucesso = form.getValue("fismsgsucesso");
			var warning = form.getValue("fismsgwarning");
			var erro = form.getValue("fismsgerro");
			var justSol = form.getValue("soljust");
			var atualData = form.getValue("data_sol");
			var justFis = form.getValue("fisrep2");
			var fisJust2 = form.getValue("fisjust2");
			var lancfin = form.getValue("inputLancFinanc");
			var somaData = form.getValue("somadata");
			var datavencimento = form.getValue("dtvenc");
			var partesData2 = datavencimento.split("/");
			var vencimento =  new Date(partesData2[2], partesData2[1] -1, partesData2[0]);
			var somaData = form.getValue("somadata");
			var datasomada = form.getValue("somadata");
			var partesData = datasomada.split("/");
			var somaData = new Date(partesData[2], partesData[1] -1, partesData[0]);
			var fundoFixo = form.getValue("inputFundoFixo");
			var adiantamento = form.getValue("inputAdiantamento");
			var tipoFornecedor = form.getValue("inputtipoFornecedor");
		}else if (n == 1) {
			var soma = 0;
			if (diaMes == "1"){soma = 24}
			if (diaMes == "2"){soma = 23}
			if (diaMes == "3"){soma = 22}
			if (diaMes == "4"){soma = 21}
			if (diaMes == "5"){soma = 20}
			if (diaMes == "6"){soma = 19}
			if (diaMes == "7"){soma = 18}
			if (diaMes == "8"){soma = 17}
			if (diaMes == "9"){soma = 16}
			if (diaMes == "10"){soma = 15}
			if (diaMes == "11"){soma = 22}
			if (diaMes == "12"){soma = 21}
			if (diaMes == "13"){soma = 20}
			if (diaMes == "14"){soma = 19}
			if (diaMes == "15"){soma = 18}
			if (diaMes == "16"){soma = 17}
			if (diaMes == "17"){soma = 16}
			if (diaMes == "18"){soma = 15}
			if (diaMes == "19"){soma = 14}
			if (diaMes == "20"){soma = 13}
			if (diaMes == "21"){soma = 22}
			if (diaMes == "22"){soma = 21}
			if (diaMes == "23"){soma = 20}
			if (diaMes == "24"){soma = 19}
			if (diaMes == "25"){soma = 18}
			if (diaMes == "26"){soma = 17}
			if (diaMes == "27"){soma = 16}
			if (diaMes == "28"){soma = 15}
			if (diaMes == "29"){soma = 15}			
			var somaData = new Date();
			somaData.setDate(dataAtual.getDate() + soma);
			var somaDia = somaData.getDate();
			var somaMes = somaData.getMonth() + 1;
			var somaAno = somaData.getYear();
			if(somaDia<10){somaDia='0'+somaDia}
			if(somaMes<10){somaMes='0'+somaMes}
			dataSomada = somaDia + "/" + somaMes + "/" + somaData.getFullYear();
			form.setValue("somadata", dataSomada);


			var dtMinima = new Date();
			dtMinima.setDate(dataAtual.getDate() + (soma - 10));
			var dtMinimaDia = dtMinima.getDate();
			var dtMinimaMes = dtMinima.getMonth() + 1;
			var dtMinimaAno = dtMinima.getYear();
			if(dtMinimaDia<10){dtMinimaDia='0'+dtMinimaDia}
			if(dtMinimaMes<10){dtMinimaMes='0'+dtMinimaMes}
			dtMinimaMesSomada = dtMinimaDia + "/" + dtMinimaMes + "/" + dtMinima.getFullYear();
			form.setValue("dtMinima", dtMinimaMesSomada);

			var sucesso = form.getValue("fismsgsucesso");
			var warning = form.getValue("fismsgwarning");
			var erro = form.getValue("fismsgerro");
			var justSol = form.getValue("soljust");
			var atualData = form.getValue("data_sol");
			var justFis = form.getValue("fisrep2");
			var fisJust2 = form.getValue("fisjust2");
			var lancfin = form.getValue("inputLancFinanc");
			var somaData = form.getValue("somadata");
			var datavencimento = form.getValue("dtvenc");
			var partesData2 = datavencimento.split("/");
			var vencimento =  new Date(partesData2[2], partesData2[1] -1, partesData2[0]);
			var somaData = form.getValue("somadata");
			var datasomada = form.getValue("somadata");
			var partesData = datasomada.split("/");
			var somaData = new Date(partesData[2], partesData[1] -1, partesData[0]);
			var fundoFixo = form.getValue("inputFundoFixo");
			var adiantamento = form.getValue("inputAdiantamento");
			var tipoFornecedor = form.getValue("inputtipoFornecedor");
		}*/

		
		////////////////////////////////
		
		
	}if (state == 51){ //VALIDAÇÃO DA DATA NA ETAPA DE REPROVADO
		
		//Soma data para Alert de data de Pagamento ATUAL
		var d = new Date();
		var n = d.getMonth();
		if (n == 0 || n == 2 || n == 4 || n == 6 || n == 7 || n == 9 || n == 11) {
			
			var soma;
			// se for BR02 SOMA = 5 e BR03 soma = 3
			var tipoFornecedor = form.getValue("tipoFornecedor");
			
			if (tipoFornecedor == "BR02"){
				soma = 5;
				
			} else if (tipoFornecedor == "BR03"){
				soma = 3;
				
			} else {
				
				if (diaMes == "1"){soma = 14}
				if (diaMes == "2"){soma = 13}
				if (diaMes == "3"){soma = 12}
				if (diaMes == "4"){soma = 11}
				if (diaMes == "5"){soma = 10}
				if (diaMes == "6"){soma = 9}
				if (diaMes == "7"){soma = 8}
				if (diaMes == "8"){soma = 7}
				if (diaMes == "9"){soma = 16}
				if (diaMes == "10"){soma = 15}
				if (diaMes == "11"){soma = 14} 
				if (diaMes == "12"){soma = 13}
				if (diaMes == "13"){soma = 12}
				if (diaMes == "14"){soma = 11}
				if (diaMes == "15"){soma = 10}
				if (diaMes == "16"){soma = 9}
				if (diaMes == "17"){soma = 8}
				if (diaMes == "18"){soma = 7}
				if (diaMes == "19"){soma = 16}
				if (diaMes == "20"){soma = 15} 
				if (diaMes == "21"){soma = 14}
				if (diaMes == "22"){soma = 13}
				if (diaMes == "23"){soma = 12}
				if (diaMes == "24"){soma = 11}
				if (diaMes == "25"){soma = 10}
				if (diaMes == "26"){soma = 9}
				if (diaMes == "27"){soma = 8}
				if (diaMes == "28"){soma = 7}
				if (diaMes == "29"){soma = 16}
				if (diaMes == "30"){soma = 15}
				if (diaMes == "31"){soma = 14}
			}
			
			
			form.setValue("qtdDias", soma);

			var somaData = new Date();
			somaData.setDate(dataAtual.getDate() + soma);
			var somaDia = somaData.getDate();
			var somaMes = somaData.getMonth() + 1;
			var somaAno = somaData.getYear();
			if(somaDia<10){somaDia='0'+somaDia}
			if(somaMes<10){somaMes='0'+somaMes}
			dataSomada = somaDia + "/" + somaMes + "/" + somaData.getFullYear();
			form.setValue("somadata", dataSomada);

			var dtMinima = new Date();
			if(dtMinima.getDate() >= 11 && dtMinima.getDate() <= 20){
				dtMinima.setDate(dataAtual.getDate() + (soma - 11));
			}else{
				dtMinima.setDate(dataAtual.getDate() + (soma - 10));
			}
			
			var dtMinimaDia = dtMinima.getDate();
			var dtMinimaMes = dtMinima.getMonth() + 1;
			var dtMinimaAno = dtMinima.getYear();
			if(dtMinimaDia<10){dtMinimaDia='0'+dtMinimaDia}
			if(dtMinimaMes<10){dtMinimaMes='0'+dtMinimaMes}
			dtMinimaMesSomada = dtMinimaDia + "/" + dtMinimaMes + "/" + dtMinima.getFullYear();
			form.setValue("dtMinima", dtMinimaMesSomada);

			var sucesso = form.getValue("fismsgsucesso");
			var warning = form.getValue("fismsgwarning");
			var erro = form.getValue("fismsgerro");
			var justSol = form.getValue("soljust");
			var atualData = form.getValue("data_sol");
			var justFis = form.getValue("fisrep2");
			var fisJust2 = form.getValue("fisjust2");
			var lancfin = form.getValue("inputLancFinanc");
			var somaData = form.getValue("somadata");
			var datavencimento = form.getValue("dtvenc");
			var partesData2 = datavencimento.split("/");
			var vencimento =  new Date(partesData2[2], partesData2[1] -1, partesData2[0]);
			var somaData = form.getValue("somadata");
			var datasomada = form.getValue("somadata");
			var partesData = datasomada.split("/");
			var somaData = new Date(partesData[2], partesData[1] -1, partesData[0]);
			var fundoFixo = form.getValue("inputFundoFixo");
			var adiantamento = form.getValue("inputAdiantamento");
			var tipoFornecedor = form.getValue("inputtipoFornecedor");
		}else if (n == 3 || n == 5 || n == 8 || n == 10) {
			var soma;
			// se for BR02 SOMA = 5 e BR03 soma = 3
			var tipoFornecedor = form.getValue("tipoFornecedor");
			
			if (tipoFornecedor == "BR02"){
				soma = 5;
				
			} else if (tipoFornecedor == "BR03"){
				soma = 3;
				
			} else {
				if (diaMes == "1"){soma = 14}
				if (diaMes == "2"){soma = 13}
				if (diaMes == "3"){soma = 12}
				if (diaMes == "4"){soma = 11}
				if (diaMes == "5"){soma = 10}
				if (diaMes == "6"){soma = 9}
				if (diaMes == "7"){soma = 8}
				if (diaMes == "8"){soma = 7}
				if (diaMes == "9"){soma = 16}
				if (diaMes == "10"){soma = 15}
				if (diaMes == "11"){soma = 14} 
				if (diaMes == "12"){soma = 13}
				if (diaMes == "13"){soma = 12}
				if (diaMes == "14"){soma = 11}
				if (diaMes == "15"){soma = 10}
				if (diaMes == "16"){soma = 9}
				if (diaMes == "17"){soma = 8}
				if (diaMes == "18"){soma = 7}
				if (diaMes == "19"){soma = 16}
				if (diaMes == "20"){soma = 15} 
				if (diaMes == "21"){soma = 14}
				if (diaMes == "22"){soma = 13}
				if (diaMes == "23"){soma = 12}
				if (diaMes == "24"){soma = 11}
				if (diaMes == "25"){soma = 10}
				if (diaMes == "26"){soma = 9}
				if (diaMes == "27"){soma = 8}
				if (diaMes == "28"){soma = 7}
				if (diaMes == "29"){soma = 16}
				if (diaMes == "30"){soma = 15}
			}
			
			
			form.setValue("qtdDias", soma);
					
			var somaData = new Date();
			somaData.setDate(dataAtual.getDate() + soma);
			var somaDia = somaData.getDate();
			var somaMes = somaData.getMonth() + 1;
			var somaAno = somaData.getYear();
			if(somaDia<10){somaDia='0'+somaDia}
			if(somaMes<10){somaMes='0'+somaMes}
			dataSomada = somaDia + "/" + somaMes + "/" + somaData.getFullYear();
			form.setValue("somadata", dataSomada);


			var dtMinima = new Date();
			dtMinima.setDate(dataAtual.getDate() + (soma - 10));
			var dtMinimaDia = dtMinima.getDate();
			var dtMinimaMes = dtMinima.getMonth() + 1;
			var dtMinimaAno = dtMinima.getYear();
			if(dtMinimaDia<10){dtMinimaDia='0'+dtMinimaDia}
			if(dtMinimaMes<10){dtMinimaMes='0'+dtMinimaMes}
			dtMinimaMesSomada = dtMinimaDia + "/" + dtMinimaMes + "/" + dtMinima.getFullYear();
			form.setValue("dtMinima", dtMinimaMesSomada);

			var sucesso = form.getValue("fismsgsucesso");
			var warning = form.getValue("fismsgwarning");
			var erro = form.getValue("fismsgerro");
			var justSol = form.getValue("soljust");
			var atualData = form.getValue("data_sol");
			var justFis = form.getValue("fisrep2");
			var fisJust2 = form.getValue("fisjust2");
			var lancfin = form.getValue("inputLancFinanc");
			var somaData = form.getValue("somadata");
			var datavencimento = form.getValue("dtvenc");
			var partesData2 = datavencimento.split("/");
			var vencimento =  new Date(partesData2[2], partesData2[1] -1, partesData2[0]);
			var somaData = form.getValue("somadata");
			var datasomada = form.getValue("somadata");
			var partesData = datasomada.split("/");
			var somaData = new Date(partesData[2], partesData[1] -1, partesData[0]);
			var fundoFixo = form.getValue("inputFundoFixo");
			var adiantamento = form.getValue("inputAdiantamento");
			var tipoFornecedor = form.getValue("inputtipoFornecedor");
		}else if (n == 1) {
			var soma;
			// se for BR02 SOMA = 5 e BR03 soma = 3
			var tipoFornecedor = form.getValue("tipoFornecedor");
			
			if (tipoFornecedor == "BR02"){
				soma = 5;
				
			} else if (tipoFornecedor == "BR03"){
				soma = 3;
				
			} else {
				//var soma = 7;
				
				if (diaMes == "1"){soma = 14}
				if (diaMes == "2"){soma = 13}
				if (diaMes == "3"){soma = 12}
				if (diaMes == "4"){soma = 11}
				if (diaMes == "5"){soma = 10}
				if (diaMes == "6"){soma = 9}
				if (diaMes == "7"){soma = 8}
				if (diaMes == "8"){soma = 7}
				if (diaMes == "9"){soma = 16}
				if (diaMes == "10"){soma = 15}
				if (diaMes == "11"){soma = 14} //
				if (diaMes == "12"){soma = 13}
				if (diaMes == "13"){soma = 12}
				if (diaMes == "14"){soma = 11}
				if (diaMes == "15"){soma = 10}
				if (diaMes == "16"){soma = 9}
				if (diaMes == "17"){soma = 8}
				if (diaMes == "18"){soma = 7}
				if (diaMes == "19"){soma = 14}
				if (diaMes == "20"){soma = 13}
				if (diaMes == "21"){soma = 12}
				if (diaMes == "22"){soma = 11}
				if (diaMes == "23"){soma = 10}
				if (diaMes == "24"){soma = 9}
				if (diaMes == "25"){soma = 8}
				if (diaMes == "26"){soma = 7}
				if (diaMes == "27"){soma = 16}
				if (diaMes == "28"){soma = 15}
				if (diaMes == "29"){soma = 15}

				
				
			}
			
			
			form.setValue("qtdDias", soma);
						
			var somaData = new Date();
			somaData.setDate(dataAtual.getDate() + soma);
			var somaDia = somaData.getDate();
			var somaMes = somaData.getMonth() + 1;
			var somaAno = somaData.getYear();
			if(somaDia<10){somaDia='0'+somaDia}
			if(somaMes<10){somaMes='0'+somaMes}
			dataSomada = somaDia + "/" + somaMes + "/" + somaData.getFullYear();
			form.setValue("somadata", dataSomada);


			var dtMinima = new Date();
			dtMinima.setDate(dataAtual.getDate() + (soma - 10));
			var dtMinimaDia = dtMinima.getDate();
			var dtMinimaMes = dtMinima.getMonth() + 1;
			var dtMinimaAno = dtMinima.getYear();
			if(dtMinimaDia<10){dtMinimaDia='0'+dtMinimaDia}
			if(dtMinimaMes<10){dtMinimaMes='0'+dtMinimaMes}
			dtMinimaMesSomada = dtMinimaDia + "/" + dtMinimaMes + "/" + dtMinima.getFullYear();
			form.setValue("dtMinima", dtMinimaMesSomada);

			var sucesso = form.getValue("fismsgsucesso");
			var warning = form.getValue("fismsgwarning");
			var erro = form.getValue("fismsgerro");
			var justSol = form.getValue("soljust");
			var atualData = form.getValue("data_sol");
			var justFis = form.getValue("fisrep2");
			var fisJust2 = form.getValue("fisjust2");
			var lancfin = form.getValue("inputLancFinanc");
			var somaData = form.getValue("somadata");
			var datavencimento = form.getValue("dtvenc");
			var partesData2 = datavencimento.split("/");
			var vencimento =  new Date(partesData2[2], partesData2[1] -1, partesData2[0]);
			var somaData = form.getValue("somadata");
			var datasomada = form.getValue("somadata");
			var partesData = datasomada.split("/");
			var somaData = new Date(partesData[2], partesData[1] -1, partesData[0]);
			var fundoFixo = form.getValue("inputFundoFixo");
			var adiantamento = form.getValue("inputAdiantamento");
			var tipoFornecedor = form.getValue("inputtipoFornecedor");
		}

		
		////////////////////////////////
		
	}




	

	//Etapa Inicial ou Correção
	if (state == 0 || state == 51){
		form.setVisibleById("btnAnexarArquivos", true);
		form.setVisibleById("btnparcela", true);
	}else{
		form.setVisibleById("btnAnexarArquivos", false);
		form.setVisibleById("btnparcela", false);
	}

	//Etapa Reprovado
	if (state == 51 && lancfin == "1" ){
		form.setVisibleById("divnumpedido", false);
		form.setVisibleById("divnumnf", false);
		form.setVisibleById("divnummigo", false);
	}
	if (state == 51 && vencimento > somaData){
		form.setVisibleById("fismsgsucesso", true);
		form.setVisibleById("fismsgwarning", false);
		form.setVisibleById("fismsgerro", false);
	}
	if (state == 51 && vencimento < somaData && fundoFixo == "0"){
		form.setVisibleById("fismsgsucesso", false);
		form.setVisibleById("fismsgwarning", true);
		form.setVisibleById("fismsgerro", false);
	}
	if (state == 51 && vencimento < somaData && fundoFixo == "1"){
		form.setVisibleById("fismsgsucesso", false);
		form.setVisibleById("fismsgwarning", false);
		form.setVisibleById("fismsgerro", false);
	}
	if (state == 51 && vencimento < somaData && adiantamento == "1"){
		form.setVisibleById("fismsgsucesso", false);
		form.setVisibleById("fismsgwarning", false);
		form.setVisibleById("fismsgerro", false);
	}
	if (state == 51){
		form.setVisibleById("divJustRecusa", true);
	}else{
		form.setVisibleById("divJustRecusa", false);
	}
	if (state == 51){
		form.setValue("txtJustSol", "");
	}

	//Etapa aprovação Lider ou Presidente
	if((state == 64) || (state == 73)){
		form.setVisibleById("dvparcelas", false);

	}

	//Verificação campo Pedido
	if(state != 4 || state != 0){//Update
		if(form.getValue("inputFrete") != "0"){//Update
			form.setVisibleById("divnumPedido", true);//Update
		}//Update
		else{//Update
			form.setVisibleById("divnumPedido", false);//Update
		}//Update
	}//Update


	//Etapa Fiscal
	if ((state == 28 || state == 17) && (form.getValue("inputLancFinanc") == "0")){
		form.setVisibleById("divNumMiro", true);
	}
	else{
		form.setVisibleById("divNumMiro", false);
	}
	if (state == 28){
		form.setVisibleById("divAnaliseFiscal", true)
	}else{
		form.setVisibleById("divAnaliseFiscal", false)
	}
	if(form.getValue("column0_1___1") != ""){
		if(state != 0 && state != 64 && state != 73)
		form.setVisibleById("dvparcelas", true);
	}
	if(state == 28){
		form.setVisibleById("divJustFisc", true);
	}else{
		form.setVisibleById("divJustFisc", false);
	}
	if (state == 28 || state == 51){
		if ((form.getValue("switchFundoFixo") == "on") || (form.getValue("switchAdiantamento") == "on") || (tipoFornecedor == "BR02") || (tipoFornecedor == "BR03")){
			form.setVisibleById("fismsgerro", false);
			form.setVisibleById("fismsgsucesso", false);
			form.setVisibleById("fismsgwarning", false);
		}
		else if (((form.getValue("switchFundoFixo") == "") || (form.getValue("switchAdiantamento") == "")) && vencimento > somaData){
			form.setVisibleById("fismsgsucesso", true);
			form.setVisibleById("fismsgwarning", false);
			form.setVisibleById("fismsgerro", false);
		}
		else if (((form.getValue("switchFundoFixo") == "") || (form.getValue("switchAdiantamento") == "")) && vencimento < somaData){
			form.setVisibleById("fismsgsucesso", false);
			form.setVisibleById("fismsgwarning", true);
			form.setVisibleById("fismsgerro", false);
		}
	}
	if (form.getValue("switchLancFinanc") == "on"){
		form.setVisibleById("divnumpedido", false);
		form.setVisibleById("divnumnf", false);
		form.setVisibleById("divnummigo", false);
	}

	//Etapa Recebe NF e Boleto
	if (state == 17){
		if ((form.getValue("switchFundoFixo") == "on") || (form.getValue("switchAdiantamento") == "on") || (tipoFornecedor == "BR02") || (tipoFornecedor == "BR03")){
			form.setVisibleById("fismsgerro", false);
			form.setVisibleById("fismsgsucesso", false);
			form.setVisibleById("fismsgwarning", false);
		}
		else if (vencimento > somaData){
			form.setVisibleById("fismsgsucesso", true);
			form.setVisibleById("fismsgwarning", false);
			form.setVisibleById("fismsgerro", false);
		}
		else if (vencimento < somaData){
			form.setVisibleById("fismsgsucesso", false);
			form.setVisibleById("fismsgwarning", true);
			form.setVisibleById("fismsgerro", false);
		}
	}

	//Etapa Gerar Lançamento
	if (state == 21){
		if ((form.getValue("switchFundoFixo") == "on") || (form.getValue("switchAdiantamento") == "on") || (tipoFornecedor == "BR02") || (tipoFornecedor == "BR03")){
			form.setVisibleById("fismsgerro", false);
			form.setVisibleById("fismsgsucesso", false);
			form.setVisibleById("fismsgwarning", false);
		}else if (vencimento > somaData){
			form.setVisibleById("fismsgsucesso", true);
			form.setVisibleById("fismsgwarning", false);
			form.setVisibleById("fismsgerro", false);
		}else if (vencimento < somaData){
			form.setVisibleById("fismsgsucesso", false);
			form.setVisibleById("fismsgwarning", true);
			form.setVisibleById("fismsgerro", false);
		}
	}

	if (state == 21 || state == 123){
		form.setVisibleById("divnrFat", true);
	}else{
		form.setVisibleById("divnrFat", false);
	}

	//Etapa Analise Financeira
	if (state == 123){
		if ((form.getValue("switchFundoFixo") == "on") || (form.getValue("switchAdiantamento") == "on") || (tipoFornecedor == "BR02") || (tipoFornecedor == "BR03")){
			form.setVisibleById("fismsgerro", false);
			form.setVisibleById("fismsgsucesso", false);
			form.setVisibleById("fismsgwarning", false);
		}
		else if (vencimento > somaData){
			form.setVisibleById("fismsgsucesso", true);
			form.setVisibleById("fismsgwarning", false);
			form.setVisibleById("fismsgerro", false);
		}
		else if (vencimento < somaData){
			form.setVisibleById("fismsgsucesso", false);
			form.setVisibleById("fismsgwarning", true);
			form.setVisibleById("fismsgerro", false);
		}
	}

	// Verificação campo Pedido
	if(state != 4 || state != 0){
		if(form.getValue("inputFrete") != "0"){
			form.setVisibleById("divnumPedido", true);
		}
		else{
			form.setVisibleById("divnumPedido", false);
		}
	}

}
