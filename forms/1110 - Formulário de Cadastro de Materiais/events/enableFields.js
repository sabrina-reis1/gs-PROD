function enableFields(form){
	var state = getValue("WKNumState");
	//var motivo = form.getValue("drop_motivo");

	if(state == 20){
		form.setEnabled("drop_motivo", false);
		form.setEnabled("nrmaterial", false);
		form.setEnabled("centroLogistica", false);
	}
	if(state == 28){
		form.setEnabled("drop_motivo", true);
		form.setEnabled("nrmaterial", true);
		form.setEnabled("centroLogistica", true);
	}
	if(state == 49){
		form.setEnabled("drop_motivo", false);
		form.setEnabled("nrmaterial", false);
		form.setEnabled("centroLogistica", false);
	}	
	if(state == 25){
		form.setEnabled("drop_motivo", false);
		form.setEnabled("nrmaterial", false);
		form.setEnabled("centroLogistica", false);
		form.setEnabled("classeAvaliacao", false);
	}
}