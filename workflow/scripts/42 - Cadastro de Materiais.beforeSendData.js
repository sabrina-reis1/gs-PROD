function beforeSendData(customFields,customFacts){
    customFields[0] = hAPI.getCardValue("centroLogistica");
	customFields[1] = hAPI.getCardValue("drop_motivo");
	customFields[2] = hAPI.getCardValue("nrmaterial");
	customFields[3] = hAPI.getCardValue("tipoMaterial");
	customFields[4] = hAPI.getCardValue("grupoMercadoria");
	customFields[5] = hAPI.getCardValue("itemgrupomercadoria");
	customFields[6] = hAPI.getCardValue("ncm");
	customFields[7] = hAPI.getCardValue("mrp");
	customFields[8] = hAPI.getCardValue("deposito");
	customFields[9] = hAPI.getCardValue("ctlestoque");
	customFields[10] = hAPI.getCardValue("centrolucro");
	customFields[11] = hAPI.getCardValue("classeAvaliacao");
	customFields[12] = hAPI.getCardValue("nrnovomaterial");
}