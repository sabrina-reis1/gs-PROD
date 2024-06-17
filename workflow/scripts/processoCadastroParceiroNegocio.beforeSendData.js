function beforeSendData(customFields,customFacts){
    customFields[0] = hAPI.getCardValue("zEmpresa");
	customFields[1] = hAPI.getCardValue("drop_motivo");
	customFields[2] = hAPI.getCardValue("drop_eixo");
	customFields[3] = hAPI.getCardValue("codfornecedor");
	customFields[4] = hAPI.getCardValue("drop_tipo");
	customFields[5] = hAPI.getCardValue("drop_mei");
	customFields[6] = hAPI.getCardValue("tpservico");
	customFields[7] = hAPI.getCardValue("drop_nacional");
	customFields[8] = hAPI.getCardValue("drop_cpom");
	customFields[9] = hAPI.getCardValue("drop_contribuinte");
	customFields[10] = hAPI.getCardValue("txtnumerofornecedor");
	customFields[11] = hAPI.getCardValue("tp_forn");
}