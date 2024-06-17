function validateForm(form){
	
	var state = getValue("WKNumState");
	var obsCaracters = form.getValue('obs');
	
	var date = new Date();
    var month = date.getMonth()+ 1;
    var day = date.getDate();
    if(day<10)
    {    	
    	day='0'+day; 	    
    }     
    if(month<10)
    {    	
    	month='0'+month;
    } 
    var dtAtual = day + "/" + month + "/" + date.getFullYear();
    
    
    //var dtViagem = form.getValue("datasaida");
    /*
     *calcular dtAtual - datasaida, para quando < 7 dias 
     */
    
    var adiantamento = form.getValue("valoradiantamento");
    var msg = "";

	if (state == 0){
		var dataSaida = montaData(form.getValue('datasaida').split(" ")[0]);
		var dataRetorno = montaData(form.getValue('dataret').split(" ")[0]);
		if(validarIntervaloDatas(dataSaida, dataRetorno) <= 7 && form.getValue('obs').trim() == ''){
			msg += 'Campo "Observação" não informado <br>'
		}
	}
    
	if (state == 3){
		
		if(form.getValue('nmSuperior') == ""){
			msg += 'Campo "Superior Responsável" não informado <br>'
		}
		
		if(form.getValue('drop_empresa') == "dropempresavazio" ){
			msg += 'Campo "Empresa" não pode ficar em branco <br>'
		}
		
		if(form.getValue('nmv') == ""){
			msg += 'Campo "Viajante" não pode ficar em branco <br>'
		}
		
		if (form.getValue('nmCidade1') == ""){
			msg += 'Compo "Cidade Origem" não foi informado <br>'
		}
		
		if(form.getValue('nmcidadedest1') == ""){
			msg += 'Campo "Cidade de Destino" não foi informado <br>'
		}
		
		if(form.getValue('datasaida') == ""){
			msg += 'Campo "Data Saída" não pode ficar em branco <br>'
		}
		
		if(form.getValue('horasaida') == ""){
			msg += 'Campo "hora Saída" não pode ficar em branco <br>'
		}
		
		if(form.getValue('dataret') == ""){
			msg += 'Campo "Data Retorno" não pode ficar em branco <br>'
		}
		
		if(form.getValue('horaret') == ""){
			msg += 'Campo "Hora Retorno" não pode ficar em branco <br>'
		}
		
		if(form.getValue('motivoViagem') == ""){
			msg += 'Campo "Motivo da viagem" não pode ficar em branco <br>'
		}
		
		//se data saida < que 7 dias
		if(form.getValue('somadata') < 7){
			if (form.getValue('obs') == ""){
				msg += 'Campo "Observação" não pode ficar em branco: Data saída menor que 7 dias <br>'
			}
			else
			if(obsCaracters.length() < 40){				
				msg+= 'Observação exige no mínimo 40 caracteres'
			}
		}
		
		
		if(adiantamento != 0 && form.getValue('datarec') == ""){
			msg += 'Campo "Data Recebimento" não pode ficar em branco <br>'
			}
			
		if(form.getValue('veic_crtl') == 'sim'){
			if(form.getValue('drop_mot') == 'dropmot_vazio'){
				msg += 'Campo "Motorista" deve ser informado <br>'
			}
		}
		
		if(msg != ""){
			throw msg;
		}
	}

	if(state == 4){
		if(form.getValue('slc_aprovacao').trim() == ''){
			msg += 'Campo "Aprovado?" não informado <br>'
		}
		else if(form.getValue('slc_aprovacao').trim() == 'reprovado' && form.getValue('txta_justificativa').trim() == ''){
			msg += 'Campo "Justificativa" não informado <br>'
		}

		if(msg != ""){
			throw msg;
		}
	}
	
	if(state == 23){
		
		
		if(form.getValue('dataprog') == ""){
			msg += 'Campo "Data Programada" não informado'
		}
		
		if(msg != ""){
			throw msg;
		}
	}
	
	if(state == 24){
		
		if(form.getValue('nmveiculo') == ""){
			msg += 'Campo "Veículo/Modelo" não pode ficar em branco <br>'
		}
		if(form.getValue('nmplaca') == ""){
			msg += 'Campo "Placa" não pode ficar em branco <br>'
		}
		if(form.getValue('dtent') == ""){
			msg += 'Campo "Data Entrega" não pode ficar em branco <br>'
		}
		if(form.getValue('dtdev') == ""){
			msg += 'Campo "Data Devolução" não pode ficar em branco <br>'
		}
		
		if(form.getValue('drop_mot') == 'SIM'){
			if(form.getValue('nmmotorista') == ""){
				msg += 'Campo "Nome do Motorista" não pode ficar em branco <br>'
			}
		}
		
		
		if(msg != ""){
			throw msg;
		}
		
		
	}

	if(form.getValue('somadata') < 7){
		if (form.getValue('obs') == ""){
			msg += 'Campo "Observação" não pode ficar em branco: Data saída menor que 7 dias <br>'
		}
		else
		if(obsCaracters.length() < 40){				
			msg+= 'Observação exige no mínimo 40 caracteres'
		}
	}

	if(msg != ""){
		throw msg;
	}
	/*
	
    if (form.getValue('calendario4') > form.getValue('calendario3')	)
		{
			 throw "A data de retorno não pode ser menor que a data de saída e não pode ser nula";
		
		}
			   		
				if(form.getValue('calendario4') <= form.getValue('data_sol')  )
					{
					throw "Favor Preencher a Observação com mais de 30 caracteres";		
					} 
			    log.info("Validacao_do_campo");
			    
	*/		    
}

function montaData(data) {
    return new Date(data.split('/')[2], parseFloat(data.split('/')[1] - 1), data.split('/')[0])
}

function validarIntervaloDatas(idInicio, idFim){	
	var difTempo = idFim.getTime() - idInicio.getTime();
    var difDias = difTempo / (1000 * 3600 * 24); 
	
	return difDias;
} 