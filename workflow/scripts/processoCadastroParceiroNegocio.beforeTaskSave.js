function beforeTaskSave(colleagueId,nextSequenceId,userList){
	
	var atv = getValue("WKNumState");
	/*
	if(atv == 57){
		
		var obj = new com.fluig.foundation.mail.service.EMailServiceBean();
		var subject = "Solicitação de Cadastro de Fornecedor";//assunto e-mail
		var emailSolic = "miguel.scarpini@innovaresolutions.com.br";//conta que recebera e-mail
		var mensagem   = "";
		var mailFluig  = "integra@gsinima.com.br";//e-mail cadastrado no fluig
		var numeroSolicitacao = hAPI.getCardValue("num_processo");// numero do processo
		var numeroFornecedor = hAPI.getCardValue("txtnumerofornecedor");//codigo fornecedor
		
		mensagem += "Número da Solicitação: <b>" + numeroSolicitacao + "</b><br>";
		mensagem += "Código Fornecedor: <b>" + numeroFornecedor + "</b><br>";
		
		mensagem += "<br><br><br>";
		mensagem += "<font face='Arial' color='Gray' size='1'><br><strong>Esta é uma mensagem gerada automaticamente pelo Fluig, portanto, não deve ser respondida.</strong></font>";
	    	
	    	obj.simpleEmail(1,subject, mailFluig, emailSolic, mensagem, "text/html");
		
	}
	*/
	
}