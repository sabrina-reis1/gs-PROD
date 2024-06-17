function enableFields(form){

	var state = getValue("WKNumState");

	if(state == "0" || state == "4"){
		form.setEnabled("numFretePedido", true);
	}else{
		if(form.getValue("inputFrete") == "1"){
			form.setEnabled("numFretePedido", false);
		}
	}

	if (form.getValue('inputLancFinanc') == "1" )
	{
	form.setEnabled("numnf",false);
	form.setEnabled("numpedido",false);
	form.setEnabled("nummigo",false);
	}
	if (state == 28 || state == 15){
		form.setEnabled("numpedido", false);
		form.setEnabled("numnf", false);
		form.setEnabled("nummigo", false);
		form.setEnabled("numfornecedor", false);
		form.setEnabled("drop_emp", false);
		form.setEnabled("dtdoc", false);
		form.setEnabled("dtlanc", false);
		form.setEnabled("valornf", false);
		form.setEnabled("dtvenc", false);
	}

	if (state == 17){
		form.setEnabled("nummiro", false);
		form.setEnabled("numpedido", false);
		form.setEnabled("numnf", false);
		form.setEnabled("nummigo", false);
		form.setEnabled("numfornecedor", false);
		form.setEnabled("drop_emp", false);
		form.setEnabled("dtdoc", false);
		form.setEnabled("dtlanc", false);
		form.setEnabled("valornf", false);
		form.setEnabled("dtvenc", false);
	}
	if (state == 21){
		form.setEnabled("nummiro", false);
		form.setEnabled("numpedido", false);
		form.setEnabled("numnf", false);
		form.setEnabled("nummigo", false);
		form.setEnabled("numfornecedor", false);
		form.setEnabled("drop_emp", false);
		form.setEnabled("dtdoc", false);
		form.setEnabled("dtlanc", false);
		form.setEnabled("valornf", false);
		form.setEnabled("dtvenc", false);
	}


}
