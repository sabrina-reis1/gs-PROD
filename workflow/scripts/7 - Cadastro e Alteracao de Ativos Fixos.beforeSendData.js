function beforeSendData(customFields,customFacts){
	customFields[0] = hAPI.getCardValue("selectEmpresa");
	customFields[1] = hAPI.getCardValue("selectOperacao");
	customFields[2] = hAPI.getCardValue("selectAquisicaoTipo");
	customFields[3] = hAPI.getCardValue("inputAquisicaoCodigoAtivo");
	customFields[4] = hAPI.getCardValue("inputAquisicaoNrSubPrincipal");
	customFields[5] = hAPI.getCardValue("inputAquisicaoCentroLogistico");
	customFields[6] = hAPI.getCardValue("inputAquisicaoCentroLucro");
	customFields[7] = hAPI.getCardValue("inputAquisicaoCentroCusto");
	customFields[8] = hAPI.getCardValue("selectBaixaTipo");
	customFields[9] = hAPI.getCardValue("inputBaixaCodAtivo");
	customFields[10] = hAPI.getCardValue("inputVendaNrAtivo");
	customFields[11] = hAPI.getCardValue("inputDoacaoNrAtivo");
}