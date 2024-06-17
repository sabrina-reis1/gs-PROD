function enviaContabilFiscal1(){
	
	var retorno = "";

	if 	(hAPI.getCardValue("selectOperacao") == "5101/6101" || 
		hAPI.getCardValue("selectOperacao") == "5102/6102" || 
		hAPI.getCardValue("selectOperacao") == "5210/6210" || 
		hAPI.getCardValue("selectOperacao") == "5412/6412" || 
		hAPI.getCardValue("selectOperacao") == "5413/6413" || 
		hAPI.getCardValue("selectOperacao") == "5551/6551" || 
		hAPI.getCardValue("selectOperacao") == "5553/6553" || 
		hAPI.getCardValue("selectOperacao") == "5556/6556" ||
		hAPI.getCardValue("selectOperacao") == "5601" || 
		hAPI.getCardValue("selectOperacao") == "5949/6949/" || 
		hAPI.getCardValue("selectOperacao") == "001" || 
		hAPI.getCardValue("selectOperacao") == "002") {

			retorno == 1;

	}else {

		retorno == 0;

	}
	
	return retorno;
	
}

function enviaContabilFiscal(){

	var retorno = "";

	if 	(hAPI.getCardValue("selectEmpresaRemetente") == "B003" &&
		hAPI.getCardValue("selectOperacao") == "5101/6101" || 
		hAPI.getCardValue("selectOperacao") == "5102/6102" || 
		hAPI.getCardValue("selectOperacao") == "5210/6210" || 
		hAPI.getCardValue("selectOperacao") == "5412/6412" || 
		hAPI.getCardValue("selectOperacao") == "5413/6413" || 
		hAPI.getCardValue("selectOperacao") == "5551/6551" || 
		hAPI.getCardValue("selectOperacao") == "5553/6553" || 
		hAPI.getCardValue("selectOperacao") == "5556/6556" ||
		hAPI.getCardValue("selectOperacao") == "5601" || 
		hAPI.getCardValue("selectOperacao") == "5949/6949/" || 
		hAPI.getCardValue("selectOperacao") == "001" || 
		hAPI.getCardValue("selectOperacao") == "002") {

			retorno == 1;

	}else if (hAPI.getCardValue("selectEmpresaRemetente") != "B003" &&
		hAPI.getCardValue("selectOperacao") == "5101/6101" || 
		hAPI.getCardValue("selectOperacao") == "5102/6102" || 
		hAPI.getCardValue("selectOperacao") == "5210/6210" || 
		hAPI.getCardValue("selectOperacao") == "5412/6412" || 
		hAPI.getCardValue("selectOperacao") == "5413/6413" || 
		hAPI.getCardValue("selectOperacao") == "5551/6551" || 
		hAPI.getCardValue("selectOperacao") == "5553/6553" || 
		hAPI.getCardValue("selectOperacao") == "5556/6556" ||
		hAPI.getCardValue("selectOperacao") == "5601" || 
		hAPI.getCardValue("selectOperacao") == "5949/6949/" || 
		hAPI.getCardValue("selectOperacao") == "001" || 
		hAPI.getCardValue("selectOperacao") == "002") {

			retorno == 2;

	}else if (hAPI.getCardValue("selectEmpresaRemetente") == "B001" &&
		hAPI.getCardValue("selectOperacao") == "5101/6101" || 
		hAPI.getCardValue("selectOperacao") == "5102/6102" || 
		hAPI.getCardValue("selectOperacao") == "5210/6210" || 
		hAPI.getCardValue("selectOperacao") == "5412/6412" || 
		hAPI.getCardValue("selectOperacao") == "5413/6413" || 
		hAPI.getCardValue("selectOperacao") == "5551/6551" || 
		hAPI.getCardValue("selectOperacao") == "5553/6553" || 
		hAPI.getCardValue("selectOperacao") == "5556/6556" ||
		hAPI.getCardValue("selectOperacao") == "5601" || 
		hAPI.getCardValue("selectOperacao") == "5949/6949/" || 
		hAPI.getCardValue("selectOperacao") == "001" || 
		hAPI.getCardValue("selectOperacao") == "002") {

			retorno == 3;

	}else if (hAPI.getCardValue("selectEmpresaRemetente") == "B002" &&
		hAPI.getCardValue("selectOperacao") == "5101/6101" || 
		hAPI.getCardValue("selectOperacao") == "5102/6102" || 
		hAPI.getCardValue("selectOperacao") == "5210/6210" || 
		hAPI.getCardValue("selectOperacao") == "5412/6412" || 
		hAPI.getCardValue("selectOperacao") == "5413/6413" || 
		hAPI.getCardValue("selectOperacao") == "5551/6551" || 
		hAPI.getCardValue("selectOperacao") == "5553/6553" || 
		hAPI.getCardValue("selectOperacao") == "5556/6556" ||
		hAPI.getCardValue("selectOperacao") == "5601" || 
		hAPI.getCardValue("selectOperacao") == "5949/6949/" || 
		hAPI.getCardValue("selectOperacao") == "001" || 
		hAPI.getCardValue("selectOperacao") == "002") {

			retorno == 4;

	}else if (hAPI.getCardValue("selectEmpresaRemetente") == "B003" &&
		hAPI.getCardValue("selectOperacao") == "5101/6101" || 
		hAPI.getCardValue("selectOperacao") == "5102/6102" || 
		hAPI.getCardValue("selectOperacao") == "5210/6210" || 
		hAPI.getCardValue("selectOperacao") == "5412/6412" || 
		hAPI.getCardValue("selectOperacao") == "5413/6413" || 
		hAPI.getCardValue("selectOperacao") == "5551/6551" || 
		hAPI.getCardValue("selectOperacao") == "5553/6553" || 
		hAPI.getCardValue("selectOperacao") == "5556/6556" ||
		hAPI.getCardValue("selectOperacao") == "5601" || 
		hAPI.getCardValue("selectOperacao") == "5949/6949/" || 
		hAPI.getCardValue("selectOperacao") == "001" || 
		hAPI.getCardValue("selectOperacao") == "002") {

			retorno == 5;

	}else if (hAPI.getCardValue("selectEmpresaRemetente") == "B004" &&
		hAPI.getCardValue("selectOperacao") == "5101/6101" || 
		hAPI.getCardValue("selectOperacao") == "5102/6102" || 
		hAPI.getCardValue("selectOperacao") == "5210/6210" || 
		hAPI.getCardValue("selectOperacao") == "5412/6412" || 
		hAPI.getCardValue("selectOperacao") == "5413/6413" || 
		hAPI.getCardValue("selectOperacao") == "5551/6551" || 
		hAPI.getCardValue("selectOperacao") == "5553/6553" || 
		hAPI.getCardValue("selectOperacao") == "5556/6556" ||
		hAPI.getCardValue("selectOperacao") == "5601" || 
		hAPI.getCardValue("selectOperacao") == "5949/6949/" || 
		hAPI.getCardValue("selectOperacao") == "001" || 
		hAPI.getCardValue("selectOperacao") == "002") {

			retorno == 6;

	}else if (hAPI.getCardValue("selectEmpresaRemetente") == "B005" &&
		hAPI.getCardValue("selectOperacao") == "5101/6101" || 
		hAPI.getCardValue("selectOperacao") == "5102/6102" || 
		hAPI.getCardValue("selectOperacao") == "5210/6210" || 
		hAPI.getCardValue("selectOperacao") == "5412/6412" || 
		hAPI.getCardValue("selectOperacao") == "5413/6413" || 
		hAPI.getCardValue("selectOperacao") == "5551/6551" || 
		hAPI.getCardValue("selectOperacao") == "5553/6553" || 
		hAPI.getCardValue("selectOperacao") == "5556/6556" ||
		hAPI.getCardValue("selectOperacao") == "5601" || 
		hAPI.getCardValue("selectOperacao") == "5949/6949/" || 
		hAPI.getCardValue("selectOperacao") == "001" || 
		hAPI.getCardValue("selectOperacao") == "002") {

			retorno == 7;

	}else if (hAPI.getCardValue("selectEmpresaRemetente") == "B006" &&
		hAPI.getCardValue("selectOperacao") == "5101/6101" || 
		hAPI.getCardValue("selectOperacao") == "5102/6102" || 
		hAPI.getCardValue("selectOperacao") == "5210/6210" || 
		hAPI.getCardValue("selectOperacao") == "5412/6412" || 
		hAPI.getCardValue("selectOperacao") == "5413/6413" || 
		hAPI.getCardValue("selectOperacao") == "5551/6551" || 
		hAPI.getCardValue("selectOperacao") == "5553/6553" || 
		hAPI.getCardValue("selectOperacao") == "5556/6556" ||
		hAPI.getCardValue("selectOperacao") == "5601" || 
		hAPI.getCardValue("selectOperacao") == "5949/6949/" || 
		hAPI.getCardValue("selectOperacao") == "001" || 
		hAPI.getCardValue("selectOperacao") == "002") {

			retorno == 8;

	}else if (hAPI.getCardValue("selectEmpresaRemetente") == "B007" &&
		hAPI.getCardValue("selectOperacao") == "5101/6101" || 
		hAPI.getCardValue("selectOperacao") == "5102/6102" || 
		hAPI.getCardValue("selectOperacao") == "5210/6210" || 
		hAPI.getCardValue("selectOperacao") == "5412/6412" || 
		hAPI.getCardValue("selectOperacao") == "5413/6413" || 
		hAPI.getCardValue("selectOperacao") == "5551/6551" || 
		hAPI.getCardValue("selectOperacao") == "5553/6553" || 
		hAPI.getCardValue("selectOperacao") == "5556/6556" ||
		hAPI.getCardValue("selectOperacao") == "5601" || 
		hAPI.getCardValue("selectOperacao") == "5949/6949/" || 
		hAPI.getCardValue("selectOperacao") == "001" || 
		hAPI.getCardValue("selectOperacao") == "002") {

			retorno == 9;

	}else if (hAPI.getCardValue("selectEmpresaRemetente") == "B008" &&
		hAPI.getCardValue("selectOperacao") == "5101/6101" || 
		hAPI.getCardValue("selectOperacao") == "5102/6102" || 
		hAPI.getCardValue("selectOperacao") == "5210/6210" || 
		hAPI.getCardValue("selectOperacao") == "5412/6412" || 
		hAPI.getCardValue("selectOperacao") == "5413/6413" || 
		hAPI.getCardValue("selectOperacao") == "5551/6551" || 
		hAPI.getCardValue("selectOperacao") == "5553/6553" || 
		hAPI.getCardValue("selectOperacao") == "5556/6556" ||
		hAPI.getCardValue("selectOperacao") == "5601" || 
		hAPI.getCardValue("selectOperacao") == "5949/6949/" || 
		hAPI.getCardValue("selectOperacao") == "001" || 
		hAPI.getCardValue("selectOperacao") == "002") {

			retorno == 10;

	}else if (hAPI.getCardValue("selectEmpresaRemetente") == "B009" &&
		hAPI.getCardValue("selectOperacao") == "5101/6101" || 
		hAPI.getCardValue("selectOperacao") == "5102/6102" || 
		hAPI.getCardValue("selectOperacao") == "5210/6210" || 
		hAPI.getCardValue("selectOperacao") == "5412/6412" || 
		hAPI.getCardValue("selectOperacao") == "5413/6413" || 
		hAPI.getCardValue("selectOperacao") == "5551/6551" || 
		hAPI.getCardValue("selectOperacao") == "5553/6553" || 
		hAPI.getCardValue("selectOperacao") == "5556/6556" ||
		hAPI.getCardValue("selectOperacao") == "5601" || 
		hAPI.getCardValue("selectOperacao") == "5949/6949/" || 
		hAPI.getCardValue("selectOperacao") == "001" || 
		hAPI.getCardValue("selectOperacao") == "002") {

			retorno == 11;

	}else if (hAPI.getCardValue("selectEmpresaRemetente") == "B010" &&
		hAPI.getCardValue("selectOperacao") == "5101/6101" || 
		hAPI.getCardValue("selectOperacao") == "5102/6102" || 
		hAPI.getCardValue("selectOperacao") == "5210/6210" || 
		hAPI.getCardValue("selectOperacao") == "5412/6412" || 
		hAPI.getCardValue("selectOperacao") == "5413/6413" || 
		hAPI.getCardValue("selectOperacao") == "5551/6551" || 
		hAPI.getCardValue("selectOperacao") == "5553/6553" || 
		hAPI.getCardValue("selectOperacao") == "5556/6556" ||
		hAPI.getCardValue("selectOperacao") == "5601" || 
		hAPI.getCardValue("selectOperacao") == "5949/6949/" || 
		hAPI.getCardValue("selectOperacao") == "001" || 
		hAPI.getCardValue("selectOperacao") == "002") {

			retorno == 12;

	}else if (hAPI.getCardValue("selectEmpresaRemetente") == "B011" &&
		hAPI.getCardValue("selectOperacao") == "5101/6101" || 
		hAPI.getCardValue("selectOperacao") == "5102/6102" || 
		hAPI.getCardValue("selectOperacao") == "5210/6210" || 
		hAPI.getCardValue("selectOperacao") == "5412/6412" || 
		hAPI.getCardValue("selectOperacao") == "5413/6413" || 
		hAPI.getCardValue("selectOperacao") == "5551/6551" || 
		hAPI.getCardValue("selectOperacao") == "5553/6553" || 
		hAPI.getCardValue("selectOperacao") == "5556/6556" ||
		hAPI.getCardValue("selectOperacao") == "5601" || 
		hAPI.getCardValue("selectOperacao") == "5949/6949/" || 
		hAPI.getCardValue("selectOperacao") == "001" || 
		hAPI.getCardValue("selectOperacao") == "002") {

			retorno == 13;

	}else if (hAPI.getCardValue("selectEmpresaRemetente") == "B012" &&
		hAPI.getCardValue("selectOperacao") == "5101/6101" || 
		hAPI.getCardValue("selectOperacao") == "5102/6102" || 
		hAPI.getCardValue("selectOperacao") == "5210/6210" || 
		hAPI.getCardValue("selectOperacao") == "5412/6412" || 
		hAPI.getCardValue("selectOperacao") == "5413/6413" || 
		hAPI.getCardValue("selectOperacao") == "5551/6551" || 
		hAPI.getCardValue("selectOperacao") == "5553/6553" || 
		hAPI.getCardValue("selectOperacao") == "5556/6556" ||
		hAPI.getCardValue("selectOperacao") == "5601" || 
		hAPI.getCardValue("selectOperacao") == "5949/6949/" || 
		hAPI.getCardValue("selectOperacao") == "001" || 
		hAPI.getCardValue("selectOperacao") == "002") {

			retorno == 14;

	}else if (hAPI.getCardValue("selectEmpresaRemetente") == "B013" &&
		hAPI.getCardValue("selectOperacao") == "5101/6101" || 
		hAPI.getCardValue("selectOperacao") == "5102/6102" || 
		hAPI.getCardValue("selectOperacao") == "5210/6210" || 
		hAPI.getCardValue("selectOperacao") == "5412/6412" || 
		hAPI.getCardValue("selectOperacao") == "5413/6413" || 
		hAPI.getCardValue("selectOperacao") == "5551/6551" || 
		hAPI.getCardValue("selectOperacao") == "5553/6553" || 
		hAPI.getCardValue("selectOperacao") == "5556/6556" ||
		hAPI.getCardValue("selectOperacao") == "5601" || 
		hAPI.getCardValue("selectOperacao") == "5949/6949/" || 
		hAPI.getCardValue("selectOperacao") == "001" || 
		hAPI.getCardValue("selectOperacao") == "002") {

			retorno == 15;

	}else if (hAPI.getCardValue("selectEmpresaRemetente") == "B014" &&
		hAPI.getCardValue("selectOperacao") == "5101/6101" || 
		hAPI.getCardValue("selectOperacao") == "5102/6102" || 
		hAPI.getCardValue("selectOperacao") == "5210/6210" || 
		hAPI.getCardValue("selectOperacao") == "5412/6412" || 
		hAPI.getCardValue("selectOperacao") == "5413/6413" || 
		hAPI.getCardValue("selectOperacao") == "5551/6551" || 
		hAPI.getCardValue("selectOperacao") == "5553/6553" || 
		hAPI.getCardValue("selectOperacao") == "5556/6556" ||
		hAPI.getCardValue("selectOperacao") == "5601" || 
		hAPI.getCardValue("selectOperacao") == "5949/6949/" || 
		hAPI.getCardValue("selectOperacao") == "001" || 
		hAPI.getCardValue("selectOperacao") == "002") {

			retorno == 16;

	}else if (hAPI.getCardValue("selectEmpresaRemetente") == "B015" &&
		hAPI.getCardValue("selectOperacao") == "5101/6101" || 
		hAPI.getCardValue("selectOperacao") == "5102/6102" || 
		hAPI.getCardValue("selectOperacao") == "5210/6210" || 
		hAPI.getCardValue("selectOperacao") == "5412/6412" || 
		hAPI.getCardValue("selectOperacao") == "5413/6413" || 
		hAPI.getCardValue("selectOperacao") == "5551/6551" || 
		hAPI.getCardValue("selectOperacao") == "5553/6553" || 
		hAPI.getCardValue("selectOperacao") == "5556/6556" ||
		hAPI.getCardValue("selectOperacao") == "5601" || 
		hAPI.getCardValue("selectOperacao") == "5949/6949/" || 
		hAPI.getCardValue("selectOperacao") == "001" || 
		hAPI.getCardValue("selectOperacao") == "002") {

			retorno == 17;

	}else if (hAPI.getCardValue("selectEmpresaRemetente") == "B016" &&
		hAPI.getCardValue("selectOperacao") == "5101/6101" || 
		hAPI.getCardValue("selectOperacao") == "5102/6102" || 
		hAPI.getCardValue("selectOperacao") == "5210/6210" || 
		hAPI.getCardValue("selectOperacao") == "5412/6412" || 
		hAPI.getCardValue("selectOperacao") == "5413/6413" || 
		hAPI.getCardValue("selectOperacao") == "5551/6551" || 
		hAPI.getCardValue("selectOperacao") == "5553/6553" || 
		hAPI.getCardValue("selectOperacao") == "5556/6556" ||
		hAPI.getCardValue("selectOperacao") == "5601" || 
		hAPI.getCardValue("selectOperacao") == "5949/6949/" || 
		hAPI.getCardValue("selectOperacao") == "001" || 
		hAPI.getCardValue("selectOperacao") == "002") {

			retorno == 18;

	}else if (hAPI.getCardValue("selectEmpresaRemetente") == "B017" &&
		hAPI.getCardValue("selectOperacao") == "5101/6101" || 
		hAPI.getCardValue("selectOperacao") == "5102/6102" || 
		hAPI.getCardValue("selectOperacao") == "5210/6210" || 
		hAPI.getCardValue("selectOperacao") == "5412/6412" || 
		hAPI.getCardValue("selectOperacao") == "5413/6413" || 
		hAPI.getCardValue("selectOperacao") == "5551/6551" || 
		hAPI.getCardValue("selectOperacao") == "5553/6553" || 
		hAPI.getCardValue("selectOperacao") == "5556/6556" ||
		hAPI.getCardValue("selectOperacao") == "5601" || 
		hAPI.getCardValue("selectOperacao") == "5949/6949/" || 
		hAPI.getCardValue("selectOperacao") == "001" || 
		hAPI.getCardValue("selectOperacao") == "002") {

			retorno == 19;

	}else if (hAPI.getCardValue("selectEmpresaRemetente") == "B701" &&
		hAPI.getCardValue("selectOperacao") == "5101/6101" || 
		hAPI.getCardValue("selectOperacao") == "5102/6102" || 
		hAPI.getCardValue("selectOperacao") == "5210/6210" || 
		hAPI.getCardValue("selectOperacao") == "5412/6412" || 
		hAPI.getCardValue("selectOperacao") == "5413/6413" || 
		hAPI.getCardValue("selectOperacao") == "5551/6551" || 
		hAPI.getCardValue("selectOperacao") == "5553/6553" || 
		hAPI.getCardValue("selectOperacao") == "5556/6556" ||
		hAPI.getCardValue("selectOperacao") == "5601" || 
		hAPI.getCardValue("selectOperacao") == "5949/6949/" || 
		hAPI.getCardValue("selectOperacao") == "001" || 
		hAPI.getCardValue("selectOperacao") == "002") {

			retorno == 20;

	}else {

		retorno == 0;

	}

	return retorno;

}