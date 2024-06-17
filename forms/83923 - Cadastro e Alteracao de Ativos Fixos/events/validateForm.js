function validateForm(form){
	var atividade = getValue("WKNumState");
	var arrayMsg = [];
	
	if (atividade == 4 || atividade == 10 || atividade == 11){
		arrayMsg = camposBody(form, arrayMsg);
	}
	if (arrayMsg.length > 0){
		var msg = "Favor preencher os seguintes campos:";

		var msgFinal = msg + "<br>- " + arrayMsg.join("<br>- ");

		throw (msgFinal);
	}

}
	
	
function camposBody(form, arrayMsg){
	var atividade = getValue("WKNumState");
	var empresa = form.getValue("selectEmpresa");
	var operacao = form.getValue("selectOperacao");
	var selectAquisicao = form.getValue("selectAquisicaoTipo");
	var analiseContabil = form.getValue("selectAnaliseContabil");
	
	if (atividade == 4){
		
		if (empresa == "B001"){
		
			if (operacao == "Novo Ativo"){

				if (selectAquisicao != "Subitem"){
					
					var CC = form.getValue("inputAquisicaoCentroLucro");
					var countAquisicao = form.getValue("inputAqCountChar");
					var countBaixa = form.getValue("inputbaixaCountChar");
					var countVenda = form.getValue("inputvendaCountChar");
					var countDoacao = form.getValue("inputdoacaoCountChar");
					var countTransf = form.getValue("inputtransfCountChar");

					
					if (form.getValue("selectAquisicaoTipo") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Selecione o Tipo de Aquisição.</strong>");
						
					}
					if (form.getValue("inputAquisicaoQtd") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Quantidade não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoCodigoItem") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Código Material não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoLocalizacao") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Localização não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoUsuario") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Usuário não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoCentroLogistico") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Centro Logístico não foi preenchido.</strong>");
						
					}
					if (countAquisicao < 40){
						
						arrayMsg.push("<strong style='color:red;'>Campo Descrição do Ativo deve ser preenchido com 40 caractéres ou mais.</strong>");
						
					}
					if (form.getValue("inputAquisicaoCentroLucro") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Centro de Lucro não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoCentroCusto") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Centro de Custo não foi preenchido.</strong>");
						
					}							
					if (CC == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Centro de Lucro não foi preenchido.</strong>");
						
					}					


					var index = form.getChildrenIndexes("tableSubItem");				
					for (var i = 0; i < index.length; i++){
						var quantidade = form.getValue("inputTableAquisicaoQtd___"+index[i]);					
						var codMaterial = form.getValue("inputTableAquisicaoCodigoItem___"+index[i]);					
						var descricao = form.getValue("inputTableAquisicaoDescAtivo___"+index[i]);
						var countSubDesc = form.getValue("inputTableAquisicaoCountChar___"+index[i]);
						if (quantidade == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Quantidade do Subitem não foi preenchido.</strong>");

						}
						if (codMaterial == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Código Material do Subitem não foi preenchido.</strong>");

						}
						if (countSubDesc < 40){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Descrição do Subitem deve ser preenchido com 40 caractéres ou mais.</strong>");

						}

					}

				}else{
					var codAtivo = form.getValue("inputAquisicaoCodigoAtivo");
					if (codAtivo == ""){

						arrayMsg.push("<strong style='color:red;'>Campo Código do Ativo não foi preenchido.</strong>");

					}
					var index = form.getChildrenIndexes("tableSubItem");
					if (index.length == 0){

						arrayMsg.push("<strong style='color:red;'>Adicionar ao menos 1 subitem.</strong>");

					}			
					for (var i = 0; i < index.length; i++){						
						var quantidade = form.getValue("inputTableAquisicaoQtd___"+index[i]);					
						var codMaterial = form.getValue("inputTableAquisicaoCodigoItem___"+index[i]);					
						var descricao = form.getValue("inputTableAquisicaoDescAtivo___"+index[i]);
						var countSubDesc = form.getValue("inputTableAquisicaoCountChar___"+index[i]);
						
						if (quantidade == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Quantidade do Subitem não foi preenchido.</strong>");

						}
						if (codMaterial == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Código Material do Subitem não foi preenchido.</strong>");

						}
						if (countSubDesc < 40){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Descrição do Subitem deve ser preenchido com 40 caractéres ou mais.</strong>");

						}

					}

				}
				
			}
			if (operacao == "Novo Ativo Baixa"){

				if (selectAquisicao != "Subitem"){
					
					var CC = form.getValue("inputAquisicaoCentroLucro");
					var countAquisicao = form.getValue("inputAqCountChar");
					var countBaixa = form.getValue("inputbaixaCountChar");
					var countVenda = form.getValue("inputvendaCountChar");
					var countDoacao = form.getValue("inputdoacaoCountChar");
					var countTransf = form.getValue("inputtransfCountChar");
					
					if (form.getValue("selectAquisicaoTipo") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Selecione o Tipo de Aquisição.</strong>");
						
					}
					if (form.getValue("inputAquisicaoQtd") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Quantidade não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoCodigoItem") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Código Material não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoLocalizacao") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Localização não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoUsuario") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Usuário não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoCentroLogistico") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Centro Logístico não foi preenchido.</strong>");
						
					}
					if (countAquisicao < 40){
						
						arrayMsg.push("<strong style='color:red;'>Campo Descrição do Ativo(Aquisição) deve ser preenchido com 40 caractéres ou mais.</strong>");
						
					}
					if (form.getValue("inputAquisicaoCentroLucro") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Centro de Lucro não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoCentroCusto") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Centro de Custo não foi preenchido.</strong>");
						
					}					
					if (CC == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Centro de Custo não foi preenchido.</strong>");
						
					}						
					if (form.getValue("selectBaixaTipo") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Selecione o Tipo de Baixa.</strong>");
						
					}
					if (form.getValue("inputBaixaLocalizacao") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Localização não foi preenchido.</strong>");
						
					}				
					if (countBaixa < 40){
						
						arrayMsg.push("<strong style='color:red;'>Campo Descrição do Ativo(Baixa) deve ser preenchido com 40 caractéres ou mais.</strong>");
						
					}
					var index = form.getChildrenIndexes("tableSubItem");
					if (index.length == 0){

						arrayMsg.push("<strong style='color:red;'>Adicionar ao menos 1 subitem.</strong>");

					}				
					for (var i = 0; i < index.length; i++){
						var quantidade = form.getValue("inputTableAquisicaoQtd___"+index[i]);					
						var codMaterial = form.getValue("inputTableAquisicaoCodigoItem___"+index[i]);					
						var descricao = form.getValue("inputTableAquisicaoDescAtivo___"+index[i]);
						var countSubDesc = form.getValue("inputTableAquisicaoCountChar___"+index[i]);
						if (quantidade == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Quantidade do Subitem não foi preenchido.</strong>");

						}
						if (codMaterial == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Código Material do Subitem não foi preenchido.</strong>");

						}
						if (countSubDesc < 40){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Descrição do Subitem deve ser preenchido com 40 caractéres ou mais.</strong>");

						}

					}

				}else{
					var codAtivo = form.getValue("inputAquisicaoCodigoAtivo");
					if (codAtivo == ""){

						arrayMsg.push("<strong style='color:red;'>Campo Código do Ativo não foi preenchido.</strong>");

					}
					var index = form.getChildrenIndexes("tableSubItem");				
					for (var i = 0; i < index.length; i++){
						var quantidade = form.getValue("inputTableAquisicaoQtd___"+index[i]);					
						var codMaterial = form.getValue("inputTableAquisicaoCodigoItem___"+index[i]);					
						var descricao = form.getValue("inputTableAquisicaoDescAtivo___"+index[i]);
						var countSubDesc = form.getValue("inputTableAquisicaoCountChar___"+index[i]);
						if (quantidade == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Quantidade do Subitem não foi preenchido.</strong>");

						}
						if (codMaterial == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Código Material do Subitem não foi preenchido.</strong>");

						}
						if (countSubDesc < 40){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Descrição do Subitem deve ser preenchido com 40 caractéres ou mais.</strong>");

						}

					}

				}
				
			}
			if (operacao == "Baixa"){

				var countAquisicao = form.getValue("inputAqCountChar");
				var countBaixa = form.getValue("inputbaixaCountChar");
				var countVenda = form.getValue("inputvendaCountChar");
				var countDoacao = form.getValue("inputdoacaoCountChar");
				var countTransf = form.getValue("inputtransfCountChar");
				
				if (form.getValue("selectBaixaTipo") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Selecione o Tipo de Baixa.</strong>");
					
				}
				if (form.getValue("inputBaixaLocalizacao") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Localização não foi preenchido.</strong>");
					
				}				
				if (countBaixa < 40){
						
					arrayMsg.push("<strong style='color:red;'>Campo Descrição do Ativo deve ser preenchido com 40 caractéres ou mais.</strong>");
					
				}
				
			}
			if (operacao == "Transferencia"){

				var countAquisicao = form.getValue("inputAqCountChar");
				var countBaixa = form.getValue("inputbaixaCountChar");
				var countVenda = form.getValue("inputvendaCountChar");
				var countDoacao = form.getValue("inputdoacaoCountChar");
				var countTransf = form.getValue("inputtransfCountChar");
				
				if (form.getValue("inputDataTransferencia") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Data Transferência não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputTransfDeLocalizacao") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo 'De' Localização não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputTransfParaLocalizacao") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo 'Para' Localização não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputTransfDeUsuario") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo 'De' Usuário não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputTransfParaUsuario") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo 'Para' Usuário não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputTransfDeCentroLucro") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo 'De' Centro de Lucro não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputTransfParaCentroLucro") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo 'Para' Centro de Lucro não foi preenchido.</strong>");
					
				}				
				if (form.getValue("inputTransfMotivoTransf") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Motivo da Transferência não foi preenchido.</strong>");
					
				}
				if (countTransf < 40){
						
					arrayMsg.push("<strong style='color:red;'>Campo Descrição do Ativo deve ser preenchido com 40 caractéres ou mais.</strong>");
					
				}
				
			}
			if (operacao == "Doacao"){

				var countAquisicao = form.getValue("inputAqCountChar");
				var countBaixa = form.getValue("inputbaixaCountChar");
				var countVenda = form.getValue("inputvendaCountChar");
				var countDoacao = form.getValue("inputdoacaoCountChar");
				var countTransf = form.getValue("inputtransfCountChar");
				
				if (form.getValue("inputDoacaoCPFCNPJ") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Beneficiário não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputDoacaoDataDoacao") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Data de Doação não foi preenchido.</strong>");
					
				}			
				if (countDoacao < 40){
						
					arrayMsg.push("<strong style='color:red;'>Campo Descrição do Ativo deve ser preenchido com 40 caractéres ou mais.</strong>");
					
				}
				
			}
			if (operacao == "Venda"){

				var countAquisicao = form.getValue("inputAqCountChar");
				var countBaixa = form.getValue("inputbaixaCountChar");
				var countVenda = form.getValue("inputvendaCountChar");
				var countDoacao = form.getValue("inputdoacaoCountChar");
				var countTransf = form.getValue("inputtransfCountChar");
				
				if (form.getValue("inputVendaDataVenda") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Valor de Venda não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputVendaValorVenda") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Valor de Venda não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputVendaCPFCNPJ") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Comprador não foi preenchido.</strong>");
					
				}
				if (countVenda < 40){
						
					arrayMsg.push("<strong style='color:red;'>Campo Descrição do Ativo deve ser preenchido com 40 caractéres ou mais.</strong>");
					
				}				
				
			}
			
		}			
		
	
		if (empresa != "B001" && empresa != "B009"){
			
			if (operacao == "Novo Ativo"){

				if (selectAquisicao != "Subitem"){

					var countAquisicao = form.getValue("inputAqCountChar");
					var countBaixa = form.getValue("inputbaixaCountChar");
					var countVenda = form.getValue("inputvendaCountChar");
					var countDoacao = form.getValue("inputdoacaoCountChar");
					var countTransf = form.getValue("inputtransfCountChar");
								
					if (form.getValue("selectAquisicaoTipo") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Selecione o Tipo de Aquisição.</strong>");
						
					}
					if (form.getValue("inputAquisicaoQtd") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Quantidade não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoCodigoItem") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Código Material não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoLocalizacao") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Localização não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoUsuario") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Usuário não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoCentroLogistico") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Centro Logístico não foi preenchido.</strong>");
						
					}
					if (countAquisicao < 40){
						
						arrayMsg.push("<strong style='color:red;'>Campo Descrição do Ativo deve ser preenchido com 40 caractéres ou mais.</strong>");
						
					}
					if (form.getValue("inputAquisicaoCentroLucro") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Centro de Lucro não foi preenchido.</strong>");
						
					}
					var index = form.getChildrenIndexes("tableSubItem");				
					for (var i = 0; i < index.length; i++){
						var quantidade = form.getValue("inputTableAquisicaoQtd___"+index[i]);					
						var codMaterial = form.getValue("inputTableAquisicaoCodigoItem___"+index[i]);					
						var descricao = form.getValue("inputTableAquisicaoDescAtivo___"+index[i]);
						var countSubDesc = form.getValue("inputTableAquisicaoCountChar___"+index[i]);
						if (quantidade == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Quantidade do Subitem não foi preenchido.</strong>");

						}
						if (codMaterial == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Código Material do Subitem não foi preenchido.</strong>");

						}
						if (countSubDesc < 40){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Descrição do Subitem deve ser preenchido com 40 caractéres ou mais.</strong>");

						}

					}

				}else{

					var codAtivo = form.getValue("inputAquisicaoCodigoAtivo");
					if (codAtivo == ""){

						arrayMsg.push("<strong style='color:red;'>Campo Código do Ativo não foi preenchido.</strong>");

					}
					var index = form.getChildrenIndexes("tableSubItem");
					if (index.length == 0){

						arrayMsg.push("<strong style='color:red;'>Adicionar ao menos 1 subitem.</strong>");

					}				
					for (var i = 0; i < index.length; i++){
						var quantidade = form.getValue("inputTableAquisicaoQtd___"+index[i]);					
						var codMaterial = form.getValue("inputTableAquisicaoCodigoItem___"+index[i]);					
						var descricao = form.getValue("inputTableAquisicaoDescAtivo___"+index[i]);
						var countSubDesc = form.getValue("inputTableAquisicaoCountChar___"+index[i]);
						if (quantidade == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Quantidade do Subitem não foi preenchido.</strong>");

						}
						if (codMaterial == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Código Material do Subitem não foi preenchido.</strong>");

						}
						if (countSubDesc < 40){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Descrição do Subitem deve ser preenchido com 40 caractéres ou mais.</strong>");

						}

					}

				}								
				
			}
			if (operacao == "Novo Ativo Baixa"){

				if (selectAquisicao != "Subitem"){

					var countAquisicao = form.getValue("inputAqCountChar");
					var countBaixa = form.getValue("inputbaixaCountChar");
					var countVenda = form.getValue("inputvendaCountChar");
					var countDoacao = form.getValue("inputdoacaoCountChar");
					var countTransf = form.getValue("inputtransfCountChar");
				
					if (form.getValue("selectAquisicaoTipo") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Selecione o Tipo de Aquisição.</strong>");
						
					}
					if (form.getValue("inputAquisicaoQtd") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Quantidade não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoCodigoItem") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Código Material não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoLocalizacao") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Localização não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoUsuario") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Usuário não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoCentroLogistico") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Centro Logístico não foi preenchido.</strong>");
						
					}
					if (countAquisicao < 40){
						
						arrayMsg.push("<strong style='color:red;'>Campo Descrição do Ativo(Aquisição) deve ser preenchido com 40 caractéres ou mais.</strong>");
						
					}
					if (form.getValue("inputAquisicaoCentroLucro") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Centro de Lucro não foi preenchido.</strong>");
						
					}
					if (form.getValue("selectBaixaTipo") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Selecione o Tipo de Baixa.</strong>");
						
					}
					if (form.getValue("inputBaixaLocalizacao") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Localização não foi preenchido.</strong>");
						
					}
					if (countBaixa < 40){
						
						arrayMsg.push("<strong style='color:red;'>Campo Descrição do Ativo(Baixa) deve ser preenchido com 40 caractéres ou mais.</strong>");
						
					}
					var index = form.getChildrenIndexes("tableSubItem");				
					for (var i = 0; i < index.length; i++){
						var quantidade = form.getValue("inputTableAquisicaoQtd___"+index[i]);					
						var codMaterial = form.getValue("inputTableAquisicaoCodigoItem___"+index[i]);					
						var descricao = form.getValue("inputTableAquisicaoDescAtivo___"+index[i]);
						var countSubDesc = form.getValue("inputTableAquisicaoCountChar___"+index[i]);
						if (quantidade == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Quantidade do Subitem não foi preenchido.</strong>");

						}
						if (codMaterial == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Código Material do Subitem não foi preenchido.</strong>");

						}
						if (countSubDesc < 40){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Descrição do Subitem deve ser preenchido com 40 caractéres ou mais.</strong>");

						}

					}

				}else{
					var codAtivo = form.getValue("inputAquisicaoCodigoAtivo");
					if (codAtivo == ""){

						arrayMsg.push("<strong style='color:red;'>Campo Código do Ativo não foi preenchido.</strong>");

					}
					var index = form.getChildrenIndexes("tableSubItem");
					if (index.length == 0){

						arrayMsg.push("<strong style='color:red;'>Adicionar ao menos 1 subitem.</strong>");

					}			
					for (var i = 0; i < index.length; i++){
						var quantidade = form.getValue("inputTableAquisicaoQtd___"+index[i]);					
						var codMaterial = form.getValue("inputTableAquisicaoCodigoItem___"+index[i]);					
						var descricao = form.getValue("inputTableAquisicaoDescAtivo___"+index[i]);
						var countSubDesc = form.getValue("inputTableAquisicaoCountChar___"+index[i]);
						if (quantidade == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Quantidade do Subitem não foi preenchido.</strong>");

						}
						if (codMaterial == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Código Material do Subitem não foi preenchido.</strong>");

						}
						if (countSubDesc < 40){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Descrição do Subitem deve ser preenchido com 40 caractéres ou mais.</strong>");

						}

					}

				}
				
			}
			if (operacao == "Baixa"){

				var countAquisicao = form.getValue("inputAqCountChar");
				var countBaixa = form.getValue("inputbaixaCountChar");
				var countVenda = form.getValue("inputvendaCountChar");
				var countDoacao = form.getValue("inputdoacaoCountChar");
				var countTransf = form.getValue("inputtransfCountChar");
				
				if (form.getValue("selectBaixaTipo") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Selecione o Tipo de Baixa.</strong>");
					
				}
				if (form.getValue("inputBaixaLocalizacao") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Localização não foi preenchido.</strong>");
					
				}
				if (countBaixa < 40){
						
					arrayMsg.push("<strong style='color:red;'>Campo Descrição do Ativo deve ser preenchido com 40 caractéres ou mais.</strong>");
					
				}
				
			}
			if (operacao == "Transferencia"){

				var countAquisicao = form.getValue("inputAqCountChar");
				var countBaixa = form.getValue("inputbaixaCountChar");
				var countVenda = form.getValue("inputvendaCountChar");
				var countDoacao = form.getValue("inputdoacaoCountChar");
				var countTransf = form.getValue("inputtransfCountChar");
				
				if (form.getValue("inputDataTransferencia") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Data Transferência não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputTransfDeLocalizacao") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo 'De' Localização não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputTransfParaLocalizacao") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo 'Para' Localização não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputTransfDeUsuario") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo 'De' Usuário não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputTransfParaUsuario") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo 'Para' Usuário não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputTransfDeCentroLucro") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo 'De' Centro de Lucro não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputTransfParaCentroLucro") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo 'Para' Centro de Lucro não foi preenchido.</strong>");
					
				}				
				if (form.getValue("inputTransfMotivoTransf") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Motivo da Transferência não foi preenchido.</strong>");
					
				}
				if (countTransf < 40){
						
					arrayMsg.push("<strong style='color:red;'>Campo Descrição do Ativo deve ser preenchido com 40 caractéres ou mais.</strong>");
					
				}
				
			}
			if (operacao == "Doacao"){

				var countAquisicao = form.getValue("inputAqCountChar");
				var countBaixa = form.getValue("inputbaixaCountChar");
				var countVenda = form.getValue("inputvendaCountChar");
				var countDoacao = form.getValue("inputdoacaoCountChar");
				var countTransf = form.getValue("inputtransfCountChar");
				
				if (form.getValue("inputDoacaoCPFCNPJ") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Beneficiário não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputDoacaoDataDoacao") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Data de Doação não foi preenchido.</strong>");
					
				}
				if (countDoacao < 40){
						
					arrayMsg.push("<strong style='color:red;'>Campo Descrição do Ativo deve ser preenchido com 40 caractéres ou mais.</strong>");
					
				}
				
			}
			if (operacao == "Venda"){

				var countAquisicao = form.getValue("inputAqCountChar");
				var countBaixa = form.getValue("inputbaixaCountChar");
				var countVenda = form.getValue("inputvendaCountChar");
				var countDoacao = form.getValue("inputdoacaoCountChar");
				var countTransf = form.getValue("inputtransfCountChar");
				
				if (form.getValue("inputVendaDataVenda") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Valor de Venda não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputVendaValorVenda") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Valor de Venda não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputVendaCPFCNPJ") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Comprador não foi preenchido.</strong>");
					
				}
				if (countVenda < 40){
						
					arrayMsg.push("<strong style='color:red;'>Campo Descrição do Ativo deve ser preenchido com 40 caractéres ou mais.</strong>");
					
				}			
				
			}
			
		}
		if (empresa == "B009"){
			
			if (operacao == "Novo Ativo"){

				if (selectAquisicao != "Subitem"){

					
					var CC = form.getValue("inputAquisicaoCentroLucro");

					var countAquisicao = form.getValue("inputAqCountChar");
					var countBaixa = form.getValue("inputbaixaCountChar");
					var countVenda = form.getValue("inputvendaCountChar");
					var countDoacao = form.getValue("inputdoacaoCountChar");
					var countTransf = form.getValue("inputtransfCountChar");
				
					if (form.getValue("selectAquisicaoTipo") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Selecione o Tipo de Aquisição.</strong>");
						
					}
					if (form.getValue("inputAquisicaoQtd") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Quantidade não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoCodigoItem") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Código Material não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoLocalizacao") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Localização não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoUsuario") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Usuário não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoCentroLogistico") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Centro Logístico não foi preenchido.</strong>");
						
					}
					if (countAquisicao < 40){
						
						arrayMsg.push("<strong style='color:red;'>Campo Descrição do Ativo deve ser preenchido com 40 caractéres ou mais.</strong>");
						
					}					
					if (form.getValue("inputAquisicaoCentroLucro") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Centro de Lucro não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoCentroCusto") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Centro de Custo não foi preenchido.</strong>");
						
					}
					var index = form.getChildrenIndexes("tableSubItem");				
					for (var i = 0; i < index.length; i++){
						var quantidade = form.getValue("inputTableAquisicaoQtd___"+index[i]);					
						var codMaterial = form.getValue("inputTableAquisicaoCodigoItem___"+index[i]);					
						var descricao = form.getValue("inputTableAquisicaoDescAtivo___"+index[i]);
						var countSubDesc = form.getValue("inputTableAquisicaoCountChar___"+index[i]);
						if (quantidade == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Quantidade do Subitem não foi preenchido.</strong>");

						}
						if (codMaterial == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Código Material do Subitem não foi preenchido.</strong>");

						}
						if (countSubDesc < 40){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Descrição do Subitem deve ser preenchido com 40 caractéres ou mais.</strong>");

						}

					}
				}else{
					var codAtivo = form.getValue("inputAquisicaoCodigoAtivo");
					if (codAtivo == ""){

						arrayMsg.push("<strong style='color:red;'>Campo Código do Ativo não foi preenchido.</strong>");

					}
					var index = form.getChildrenIndexes("tableSubItem");
					if (index.length == 0){

						arrayMsg.push("<strong style='color:red;'>Adicionar ao menos 1 subitem.</strong>");

					}			
					for (var i = 0; i < index.length; i++){
						var quantidade = form.getValue("inputTableAquisicaoQtd___"+index[i]);					
						var codMaterial = form.getValue("inputTableAquisicaoCodigoItem___"+index[i]);					
						var descricao = form.getValue("inputTableAquisicaoDescAtivo___"+index[i]);
						var countSubDesc = form.getValue("inputTableAquisicaoCountChar___"+index[i]);
						if (quantidade == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Quantidade do Subitem não foi preenchido.</strong>");

						}
						if (codMaterial == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Código Material do Subitem não foi preenchido.</strong>");

						}
						if (countSubDesc < 40){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Descrição do Subitem deve ser preenchido com 40 caractéres ou mais.</strong>");

						}

					}

				}
				
			}
			if (operacao == "Novo Ativo Baixa"){

				if (selectAquisicao != "Subitem"){

					
					var CC = form.getValue("inputAquisicaoCentroLucro");

					var countAquisicao = form.getValue("inputAqCountChar");
					var countBaixa = form.getValue("inputbaixaCountChar");
					var countVenda = form.getValue("inputvendaCountChar");
					var countDoacao = form.getValue("inputdoacaoCountChar");
					var countTransf = form.getValue("inputtransfCountChar");
				
					if (form.getValue("selectAquisicaoTipo") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Selecione o Tipo de Aquisição.</strong>");
						
					}
					if (form.getValue("inputAquisicaoQtd") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Quantidade não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoCodigoItem") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Código Material não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoLocalizacao") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Localização não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoUsuario") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Usuário não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoCentroLogistico") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Centro Logístico não foi preenchido.</strong>");
						
					}
					if (countAquisicao < 40){
						
						arrayMsg.push("<strong style='color:red;'>Campo Descrição do Ativo deve ser preenchido com 40 caractéres ou mais.</strong>");
						
					}
					if (form.getValue("inputAquisicaoCentroLucro") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Centro de Lucro não foi preenchido.</strong>");
						
					}
					if (form.getValue("inputAquisicaoCentroCusto") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Centro de Custo não foi preenchido.</strong>");
						
					}
					if (form.getValue("selectBaixaTipo") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Selecione o Tipo de Baixa.</strong>");
						
					}
					if (form.getValue("inputBaixaPlacaPatrimonio") == ""){
						
						arrayMsg.push("<strong style='color:red;'>Campo Placa de Patrimônio não foi preenchido.</strong>");
						
					}
					var index = form.getChildrenIndexes("tableSubItem");				
					for (var i = 0; i < index.length; i++){
						var quantidade = form.getValue("inputTableAquisicaoQtd___"+index[i]);					
						var codMaterial = form.getValue("inputTableAquisicaoCodigoItem___"+index[i]);					
						var descricao = form.getValue("inputTableAquisicaoDescAtivo___"+index[i]);
						var countSubDesc = form.getValue("inputTableAquisicaoCountChar___"+index[i]);
						if (quantidade == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Quantidade do Subitem não foi preenchido.</strong>");

						}
						if (codMaterial == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Código Material do Subitem não foi preenchido.</strong>");

						}
						if (countSubDesc < 40){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Descrição do Subitem deve ser preenchido com 40 caractéres ou mais.</strong>");

						}

					}

				}else{
					var codAtivo = form.getValue("inputAquisicaoCodigoAtivo");
					if (codAtivo == ""){

						arrayMsg.push("<strong style='color:red;'>Campo Código do Ativo não foi preenchido.</strong>");

					}
					var index = form.getChildrenIndexes("tableSubItem");
					if (index.length == 0){

						arrayMsg.push("<strong style='color:red;'>Adicionar ao menos 1 subitem.</strong>");

					}			
					for (var i = 0; i < index.length; i++){
						var quantidade = form.getValue("inputTableAquisicaoQtd___"+index[i]);					
						var codMaterial = form.getValue("inputTableAquisicaoCodigoItem___"+index[i]);					
						var descricao = form.getValue("inputTableAquisicaoDescAtivo___"+index[i]);
						var countSubDesc = form.getValue("inputTableAquisicaoCountChar___"+index[i]);
						if (quantidade == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Quantidade do Subitem não foi preenchido.</strong>");

						}
						if (codMaterial == ""){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Código Material do Subitem não foi preenchido.</strong>");

						}
						if (countSubDesc < 40){

							arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Descrição do Subitem deve ser preenchido com 40 caractéres ou mais.</strong>");

						}

					}

				}		
				
			}
			if (operacao == "Baixa"){
				
				if (form.getValue("selectBaixaTipo") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Selecione o Tipo de Baixa.</strong>");
					
				}
				if (form.getValue("inputBaixaPlacaPatrimonio") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Placa de Patrimônio não foi preenchido.</strong>");
					
				}
				
			}
			if (operacao == "Transferencia"){
				
				if (form.getValue("inputDataTransferencia") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Data Transferência não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputTransfPatrimonio") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Placa Patrimônio não foi preenchido.</strong>");
					
				}	
				if (form.getValue("inputTransfDeLocalizacao") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo 'De' Localização não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputTransfParaLocalizacao") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo 'Para' Localização não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputTransfDeUsuario") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo 'De' Usuário não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputTransfParaUsuario") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo 'Para' Usuário não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputTransfDeCentroLucro") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo 'De' Centro de Lucro não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputTransfParaCentroLucro") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo 'Para' Centro de Lucro não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputTransfDeCentroCusto") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo 'De' Centro de Custo não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputTransfParaCentroCusto") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo 'Para' Centro de Custo não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputTransfMotivoTransf") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Motivo da Transferência não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputTransfDescAtivo") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Descrição do Ativo não foi preenchido.</strong>");
					
				}				
				
			}
			if (operacao == "Doacao"){
				
				if (form.getValue("inputDoacaoCPFCNPJ") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Beneficiário não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputDoacaoDataDoacao") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Data de Doação não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputDoacaoPlacaPatrimonio") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Placa Patrimônio não foi preenchido.</strong>");
					
				}
				
			}
			if (operacao == "Venda"){
				
				if (form.getValue("inputVendaDataVenda") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Valor de Venda não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputVendaValorVenda") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Valor de Venda não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputVendaCPFCNPJ") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Comprador não foi preenchido.</strong>");
					
				}
				if (form.getValue("inputVendaPlacaPatrimonio") == ""){
					
					arrayMsg.push("<strong style='color:red;'>Campo Placa Patrimônio não foi preenchido.</strong>");
					
				}				
				
			}
			
		}
	
	}
	if (atividade == 10){

		if (empresa == "B009" || empresa == "B001" || (empresa != "B009" && empresa != "B001")){

			if (operacao == "Novo Ativo" && analiseContabil != "cancelado"){

				if (form.getValue("inputAquisicaoCodigoAtivo") == ""){

					arrayMsg.push("<strong style='color:red;'>Campo Código do Ativo não foi preenchido.</strong>");

				}
				if (form.getValue("inputAquisicaoNrSubPrincipal") == ""){

					arrayMsg.push("<strong style='color:red;'>Campo Sub Nº não foi preenchido.</strong>");

				}
				var index = form.getChildrenIndexes("tableSubItem");

				for (var i = 0; i < index.length; i++){

					var subN = form.getValue("inputnrSubItem___"+index[i]);
					var quantidade = form.getValue("inputTableAquisicaoQtd___"+index[i]);					
					var codMaterial = form.getValue("inputTableAquisicaoCodigoItem___"+index[i]);					
					var descricao = form.getValue("inputTableAquisicaoDescAtivo___"+index[i]);
					var countSubDesc = form.getValue("inputTableAquisicaoCountChar___"+index[i]);
									
					if (subN == ""){

						arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Sub Nº não foi preenchido.</strong>");

					}
					if (quantidade == ""){

						arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Quantidade do Subitem não foi preenchido.</strong>");

					}
					if (codMaterial == ""){

						arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Código Material do Subitem linha não foi preenchido.</strong>");

					}
					if (countSubDesc < 40){

						arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Descrição do Subitem deve ser preenchido com 40 caractéres ou mais.</strong>");

					}					

				}

			}
			if (operacao == "Novo Ativo Baixa" && analiseContabil != "cancelado"){

				if (form.getValue("inputAquisicaoCodigoAtivo") == ""){

					arrayMsg.push("<strong style='color:red;'>Campo Código do Ativo não foi preenchido.</strong>");

				}
				if (form.getValue("inputAquisicaoNrSubPrincipal") == ""){

					arrayMsg.push("<strong style='color:red;'>Campo Sub Nº não foi preenchido.</strong>");

				}
				if (form.getValue("inputBaixaCodAtivo") == ""){

					arrayMsg.push("<strong style='color:red;'>Campo Código do Ativo não foi preenchido.</strong>");

				}
				var index = form.getChildrenIndexes("tableSubItem");

				for (var i = 0; i < index.length; i++){

					var subN = form.getValue("inputnrSubItem___"+index[i]);
					var quantidade = form.getValue("inputTableAquisicaoQtd___"+index[i]);					
					var codMaterial = form.getValue("inputTableAquisicaoCodigoItem___"+index[i]);					
					var descricao = form.getValue("inputTableAquisicaoDescAtivo___"+index[i]);
					var countSubDesc = form.getValue("inputTableAquisicaoCountChar___"+index[i]);
									
					if (subN == ""){

						arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Sub Nº não foi preenchido.</strong>");

					}
					if (quantidade == ""){

						arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Quantidade do Subitem não foi preenchido.</strong>");

					}
					if (codMaterial == ""){

						arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Código Material do Subitem linha não foi preenchido.</strong>");

					}
					if (countSubDesc < 40){

						arrayMsg.push("<strong style='color:red;'>Linha "+index[i]+" - Campo Descrição do Subitem deve ser preenchido com 40 caractéres ou mais.</strong>");

					}					

				}

			}
			if (operacao == "Baixa" && analiseContabil != "cancelado"){

				if (form.getValue("inputBaixaCodAtivo") == ""){

					arrayMsg.push("<strong style='color:red;'>Campo Código do Ativo não foi preenchido.</strong>");

				}

			}			
			if (operacao == "Venda" && analiseContabil != "cancelado"){

				if (form.getValue("inputVendaNrAtivo") == ""){

					arrayMsg.push("<strong style='color:red;'>Campo Número do Ativo não foi preenchido.</strong>");

				}

			}
			if (operacao == "Doacao" && analiseContabil != "cancelado"){

				if (form.getValue("inputDoacaoNrAtivo") == ""){

					arrayMsg.push("<strong style='color:red;'>Campo Número do Ativo não foi preenchido.</strong>");

				}

			}			

		}

	}
	if (atividade == 10){

		if (form.getValue("selectAnaliseContabil") == ""){
						
			arrayMsg.push("<strong style='color:red;'>Campo Status da Analise Contabil não foi preenchido.</strong>");
			
		}
		if (form.getValue("selectAnaliseContabil") == "cancelado"){

			if (form.getValue("txtareaAnaliseContabil") == ""){

				arrayMsg.push("<strong style='color:red;'>Campo Justificativa da Analise Contabil não foi preenchido.</strong>");

			}

		}

	}

	return arrayMsg;
	
}