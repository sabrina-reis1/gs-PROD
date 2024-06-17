function validateForm(form){
	var indece = form.getChildrenIndexes("tabledetailname1");
	var state = getValue("WKNumState");
	var msg = "";
	if(state == 1 || state == 66){
		if(form.getValue("zEmpresa") == null || form.getValue("zEmpresa") == "") msg+= 'Campo "Empresa" não pode ficar em branco <br>';
		if(form.getValue("drop_motivo") == 'ALT' || form.getValue("drop_motivo") == 'AMP' || form.getValue("drop_motivo") ==  'BLOQ'){
			if(form.getValue("codfornecedor") == "") msg+= 'Campo "Código do Fornecedor" não pode ficar em branco<br>';
		}
		if(form.getValue('nmrazao') == null || form.getValue('nmrazao') == '') msg += 'Campo "Razão Social/Nome" não informado <br>'; 
		if(form.getValue('drop_tipo') == "pj" && form.getValue('drop_mei') == 'S' && form.getValue('tpservico') != 'out'){
			if(form.getValue('cpf') == "") msg += 'Campo "CPF do Empreendedor" não informado <br>';
			if(form.getValue('dtnasc') == '') msg += 'Campo "Data Nascimento" não pode ficar em branco <br>';
		}
		if(form.getValue('drop_tipo') == "pj"){
			if(form.getValue('cpfcnpj') == null || form.getValue('cpfcnpj') == '') msg += 'Campo "CNPJ" não informado <br>';
			if(form.getValue('inscrest') == null || form.getValue('inscrest') == '') msg += 'Campo "IE" não informada <br>';
			if(form.getValue('inscrmun') == "") msg += 'Campo "IM" não pode ficar em branco <br>';
		}
		if(form.getValue('drop_tipo') == "pf"){
			if(form.getValue('cpfcnpj') == null || form.getValue('cpfcnpj') == '') msg += 'Campo "CPF" não informado <br>'; 
			if(form.getValue('inscrest') == null || form.getValue('inscrest') == '') msg += 'Campo "RG" não informada <br>';
			if(form.getValue('inscrmun') == "") msg += 'Campo "NIT/PIS" não pode ficar em branco <br>';
		}
		if(form.getValue('cep') == null || form.getValue('cep') == '') msg += 'Campo "CEP" não informado <br>'; 
		if(form.getValue('bairro') == null || form.getValue('bairro') == '') msg += 'Campo "Bairro" não informado <br>'; 
		if(form.getValue('cidade') == null || form.getValue('cidade') == '') msg += 'Campo "Cidade" não foi informada <br>'; 
		if(form.getValue('uf') == null || form.getValue('uf') == '') msg += 'Campo "Estado" não informado <br>';	   
		if(form.getValue('ende') == null || form.getValue('ende') == '') msg += 'Campo "Endereço" não foi informado <br>'; 
		if(form.getValue('num') == null || form.getValue('num') == '') msg += 'Campo "Número" não informado <br>'; 
		if(form.getValue('ramoativ') == null || form.getValue('ramoativ') == '') msg += 'Campo "Ramo de Atividade" não informado <br>';  
		if((form.getValue('ted') != "on") && (form.getValue('doc') != "on") && (form.getValue('boleto') != "on") && (form.getValue('transferencia') != "on") && (form.getValue('fundofixo') != "on")){
			msg += 'Campo "Formas de Pagamento" obrigatório ao menos um tipo<br>'
		}
		if((form.getValue('ted') == "on") || (form.getValue('doc') == "on") || (form.getValue('transferencia') == "on")){	
			if(indece.length == 0) msg += 'Necessário ao menos um Banco<br>';
	   	}
		if(form.getValue('txttelefone') == "") msg += 'Campo "Telefone" não pode ficar em branco <br>';
		if(form.getValue('txtemail') == "") msg += 'Campo "E-mail" deve ser preenchido <br>';
		if(form.getValue('txtcontato') == "") msg += 'Campo "Contato" não pode ficar em branco <br>';   
		if(indece.length > 0){
	        for(var i = 0; i < indece.length; i++){
	            if(form.getValue('column1_1___' + indece[i]) == null || form.getValue('column1_1___' + indece[i]) == '') msg += 'Campo "Banco" não informado <br>';
	            if(form.getValue('column2_1___' + indece[i]) == null || form.getValue('column2_1___' + indece[i]) == '') msg += 'Campo "Agência" não informado <br>';
	            if(form.getValue('column3_1___' + indece[i]) == null || form.getValue('column3_1___' + indece[i]) == '') msg += 'Campo "Conta Corrente" não informado <br>';
	        }
	    }
		if(msg != "") throw msg;
	}
	if(state == 11){
		if(form.getValue("cc") == "") msg += 'Campo "Conta Contábil deve ser informado"<br>';
		if(msg != "") throw msg;
	}
	if(state == 16){
		if(form.getValue("aprpselectfiscal") == 'apfiscal'){
			if(form.getValue("txtnumerofornecedor") == "") msg += 'Campo "N.Fornecedor" deve ser informado <br>';
		}
		if(form.getValue("tp_forn") == "tpvazio") msg += 'Campo "Tipo" não pode ficar em branco <br>';
		if(form.getValue("aprpselectfiscal") == 'brancofiscal') msg += 'Campo "Aprovação" deve ser informado <br>';
		if(form.getValue("aprpselectfiscal") == 'rpfiscal' && form.getValue("txtRpFiscal") == "") msg+= 'Necessário preenchimento do Campo Observação <br>';
		if(msg != "") throw msg;
	}
	if(state == 15){
		if(form.getValue("aprpselectfinanceiro") == 'brancofinanceiro') msg += 'Campo "Aprovação" deve ser informado <br>';
		if(form.getValue("aprpselectfinanceiro") == 'rpfinanceiro' && form.getValue("txtRpFinan") == "") msg+= 'Necessário preenchimento do Campo Observação';
		if(msg != "") throw msg;
	}
}