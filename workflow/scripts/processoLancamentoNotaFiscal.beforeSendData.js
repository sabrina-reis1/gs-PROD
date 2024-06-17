function beforeSendData(customFields,customFacts){
	customFields[0] = hAPI.getCardValue("switchLancFinanc");
	customFields[1] = hAPI.getCardValue("switchFundoFixo");
	customFields[2] = hAPI.getCardValue("switchAdiantamento");
	customFields[3] = hAPI.getCardValue("switchMeiPf");
	customFields[4] = hAPI.getCardValue("switchFrete");
	customFields[5] = hAPI.getCardValue("nummigo");
	customFields[6] = hAPI.getCardValue("drop_emp");
	customFields[7] = hAPI.getCardValue("numFretePedido");
	customFields[8] = hAPI.getCardValue("nummiro");
	customFields[9] = hAPI.getCardValue("numfatura");
	customFields[10] = hAPI.getCardValue("numfornecedor");
	customFields[11] = hAPI.getCardValue("dtdoc");
	customFields[12] = hAPI.getCardValue("dtlanc");
	customFields[13] = hAPI.getCardValue("dtvenc");
	customFields[14] = hAPI.getCardValue("numnf");
	customFields[15] = hAPI.getCardValue("motivoRecusaFiscal");
    customFields[16] = hAPI.getCardValue("valornf");
}