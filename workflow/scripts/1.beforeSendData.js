function beforeSendData(customFields,customFacts){
    customFields[0] = hAPI.getCardValue("nmempresa");
	customFields[1] = hAPI.getCardValue("nmSuperior");
	customFields[2] = hAPI.getCardValue("nmv");
	customFields[3] = hAPI.getCardValue("drop_empresa");
	customFields[4] = hAPI.getCardValue("drop_filial");
	customFields[5] = hAPI.getCardValue("nmCidade1");
	customFields[6] = hAPI.getCardValue("nmcidadedest1");
	customFields[7] = hAPI.getCardValue("datasaida");
	customFields[8] = hAPI.getCardValue("dataret");
	customFields[9] = hAPI.getCardValue("motivoViagem");
	customFields[10] = hAPI.getCardValue("drop_hotel");
	customFields[11] = hAPI.getCardValue("drop_passagem");
	customFields[12] = hAPI.getCardValue("drop_veic");
	customFields[13] = hAPI.getCardValue("tipomoeda");
	customFields[14] = hAPI.getCardValue("veic_crtl");
	customFields[15] = hAPI.getCardValue("drop_mot");
    customFields[16] = hAPI.getCardValue("valoradiantamento");
}