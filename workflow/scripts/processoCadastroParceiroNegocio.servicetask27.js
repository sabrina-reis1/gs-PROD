function servicetask27(attempt, message) {
	
	var empresa = hAPI.getCardValue("idempresa");
	var papel = ""; 
		
	log.info("EMPRESA DO SERVIÇO!!!!!!!!!!!!" + empresa );
		
	
	if ( empresa == "1") 
	{
		papel = "Pool:Role:AMB";
	}
	else
	if ( empresa == "2") 
	{
		papel = "Pool:Role:SAM";
	}
	else 
	{
		papel = "Pool:Role:SAM";
 	}
	
	hAPI.setCardValue("aprov", papel);	

	if (empresa == "") {
		return false;
    } else {
    	return true;
    }
}