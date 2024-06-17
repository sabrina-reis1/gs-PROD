function enableFields(form){
	var atividade = getValue("WKNumState");

	
	
	if(atividade == "0" || atividade == "4"){
		form.setEnabled("selectEmpresa", true);		
		

		var indexes = form.getChildrenIndexes("tableSubItem");
		
		if(indexes.length > 0){
			for(var i = 0; i < indexes.length; i++){
				form.setEnabled("inputnrSubItem__" + indexes[i], false);
			}
		}
	}else{
		form.setEnabled("selectEmpresa", false);


		var indexes = form.getChildrenIndexes("tableSubItem");
		
		if(indexes.length > 0){
			for(var i = 0; i < indexes.length; i++){
				form.setEnabled("inputnrSubItem__" + indexes[i], true);
			}
		}
	}	
}