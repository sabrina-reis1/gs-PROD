// Converte string em data
function toDate(dateStr) {
    const [day, month, year] = dateStr.split("/");
    return new Date(year, month - 1, day)
}
// Completa com 0 a esquerda
function LPad(sValue, iPadBy) {
    sValue = sValue.toString();
    return sValue.length < iPadBy ? LPad("0" + sValue, iPadBy) : sValue;
}
//Script Modal Parcelas
function myModal(tablename) {
    // Valida campo data de emissão
    var emissao = document.getElementById("dtvenc").value;
    if (emissao.length == 0) {
        alert("Data 1º Vencimento Não Preenchida!");
        return;
    }
    var valornf = document.getElementById("valornf").value;
    if (valornf.length == 0) {
        alert("ValorNF não foi preenchido!");
        return;
    }
    // Apaga as linhas da tabela, caso exista alguma linha
    var qtdLinha = rowIndex[tablename];
    if (!tablename || qtdLinha > 0) {
        $('table[tablename=' + tablename + '] tbody tr').not(':first').remove();
    }
    // Abre o Modal
    FLUIGC.modal({
        title: "Parcelas",
        content: '<div class="form-group col-sm-12">' +
            '<table tablename="tableparcelado" class="table">' +
            '<thead>' +
            '<tr class="tableHeadRow">' +
            '<th class="tableColumn">Parcelas</th>' +
            '<th class="tableColumn">Intervalo</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody id= "linha">' +
            '<tr class="tableBodyRow">' +
            '<td class="fs-v-align-middle form-group col-sm-2">' +
            '<div class="form-input" style="width: 50.999999995%">' +
            '<input id="modalparcela" name="modalparcela" class="form-control" type="text">' +
            '</div>' +
            '</td>' +
            '<td class="fs-v-align-middle form-group col-sm-2">' +
            '<div class="form-input"  style="width: 50.999999995%">' +
            '<input id="modalint" name="modalint" class="form-control">' +
            '</div>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div>',
        id: "fluig-modal",
        size: "small",
        actions: [{
            'label': 'Save',
            'bind': 'data-open-modal',
            'autoClose': true
        }]
    });
    // Ao clicar no botão Save do Modal
    $("button[data-open-modal]").click(function (){
        var dvParcela = document.getElementById("dvparcelas");
        if (dvParcela != "" || dvParcela != 0 || dvParcela != null) {
            dvParcela.style.display = "block";
        }
        var dataEmissao = toDate(document.getElementById("dtvenc").value);
        var data = toDate(document.getElementById("dtvenc").value);
        var recorrencia = document.getElementById("modalint").value;
        var dias = document.getElementById("modalparcela").value;
        var valor = document.getElementById("valornf").value;
        var soma2 = 0;
        var soma = 0;
        var ultimoValor = 0;
        var ultimaLinha = 0;
        var dataParcela;
        for(var i = 1; i <= dias; i++){
            if(i == 1){
                var dd = dataEmissao.getDate();
                var mm = dataEmissao.getMonth() + 1;
                var y = dataEmissao.getFullYear();
                dataParcela = LPad(dd, 2) + '/' + LPad(mm, 2) + '/' + y;
            }else{
                data.setTime(data.getTime() + recorrencia * 86400000);
                var dd = data.getDate();
                var mm = data.getMonth() + 1;
                var y = data.getFullYear();
                dataParcela = LPad(dd, 2) + '/' + LPad(mm, 2) + '/' + y;
            }
            wdkAddChild("tableparc");
            var iLinha = rowIndex["tableparc"];
            $("#column0_1___" + iLinha).val(dataParcela);
            //Aplica Calendário às Parcelas
            FLUIGC.calendar('#column0_1___' + iLinha);
            //divide valor total pelas parcelas
            valor = valor.replace(".", "");
            valor2 = valor.replace(",", ".");
            var valparc = ((valor2 / dias).toFixed(2));
            soma += parseFloat(valparc);
            soma2 = soma.toFixed(2);
            valparc = valparc.toString().replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            $("#column2_1___" + iLinha).val(valparc);
            ultimoValor = valparc;
            ultimaLinha = iLinha;
        }
        var diferenca = 0;
        valor = valor.replace(".", "");
        valor2 = valor.replace(",", ".");
        ultimoValor = ultimoValor.replace(".", "");
        ultimoValor2 = ultimoValor.replace(",", ".");
        if(soma2 != valor2){
            diferenca = (valor2 - soma2).toFixed(2);
        }
        var soma3 = (parseFloat(diferenca) + parseFloat(ultimoValor2)).toString().replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        $("#column2_1___" + ultimaLinha).val(soma3);
    });
}
//Script para anexar arquivo à solicitação
var identificadorAnexo = 0;
function anexarArquivo() {
    var dataVenc = document.getElementById("dtvenc").value;
    var dataDoc = document.getElementById("dtdoc").value;
    var dataLanc = document.getElementById("dtlanc").value;
    if ((dataVenc == "" && dataDoc == "" && dataLanc == "") || (dataVenc == null && dataDoc == null && dataLanc == null) || (dataVenc == "" || dataDoc == "" || dataLanc == "")) {
        alert("Preencher todos os campos do formulário antes de anexar algum arquivo!")
    }else{
        var datasomada = document.getElementById("somadata").value;
        var partesData = datasomada.split("/");
        var somaData = new Date(partesData[2], partesData[1] - 1, partesData[0]);
        var datavencimento = document.getElementById("dtvenc").value;
        var partesData2 = datavencimento.split("/");
        var vencimento = new Date(partesData2[2], partesData2[1] - 1, partesData2[0]);
        var filtrodate = new Date(vencimento);
        var filtroDia = filtrodate.getDate();
        var filtroMes = filtrodate.getMonth() + 1;
        var datalancamento = document.getElementById("dtlanc").value;
        var parteslancData2 = datalancamento.split("/");
        var lancamento = new Date(parteslancData2[2], parteslancData2[1] - 1, parteslancData2[0]);
        var lancfiltrodate = new Date(lancamento);
        var lancfiltroDia = lancfiltrodate.getDate();
        var lancfiltroMes = lancfiltrodate.getMonth() + 1;
        var anoFull = new Date();
        var dateAno = anoFull.getFullYear();
        if (lancfiltroDia < 10) {
            lancfiltroDia = '0' + lancfiltroDia;
        }
        if (lancfiltroMes < 10) {
            lancfiltroMes = '0' + lancfiltroMes;
        }
        var lancfiltrodate = lancfiltroMes + "-" + lancfiltroDia;
        if (filtroDia < 10) {
            filtroDia = '0' + filtroDia;
        }
        if (filtroMes < 10) {
            filtroMes = '0' + filtroMes;
        }
        var filtrodateVenc = filtroMes + "-" + filtroDia;
        var numFornecedor = document.getElementById("numfornecedor").value;
        var numNF = document.getElementById("numnf").value;
        var dtVenc = document.getElementById("dataFiltro").value;
        var dtlancFiltro = document.getElementById("datalancFiltro").value;
        identificadorAnexo++;
        var lancFinanc = $("#inputLancFinanc").val();
        if(lancFinanc == "0"){
            var nmArquivo = dateAno + "-" + lancfiltrodate + "_" + numFornecedor + "_" + numNF + "_" + dateAno + "-" + filtrodateVenc + "_" + identificadorAnexo;
        }else{
            var nmArquivo = "FI - " + dateAno + "-" + lancfiltrodate + "_" + numFornecedor + "_" + numNF + "_" + dateAno + "-" + filtrodateVenc + "_" + identificadorAnexo;
        }
        JSInterface.showCamera(nmArquivo);
        $(window.top.document).find('#attachmentsStatusTab').trigger('click');
    }
}
//Script para validação de Datas de NF com Alertas e Campos de Justificativas
function validaData(){
    var sucesso = document.getElementById("fismsgsucesso");
    var warning = document.getElementById("fismsgwarning");
    var erro = document.getElementById("fismsgerro");
    var retroativa = document.getElementById("fismsgretroativa");
    var datasomada = document.getElementById("somadata").value;
    var partesData = datasomada.split("/");
    var somaData = new Date(partesData[2], partesData[1] - 1, partesData[0]);
    var datavencimento = document.getElementById("dtvenc").value;
    var partesData2 = datavencimento.split("/");
    var vencimento = new Date(partesData2[2], partesData2[1] - 1, partesData2[0]);
    var dataMinima = document.getElementById("dtMinima").value;
    var partesData3 = dataMinima.split("/");
    var dtMinima = new Date(partesData3[2], partesData3[1] - 1, partesData3[0]);
    var dvjustfis = document.getElementById("divJustSol");
    

    	//novo desenvolvimento
    
    var d = new Date();
	var n = d.getMonth();
	
	//Insere as Datas para validação
	//Data Valida Formulário
	var dataAtual = new Date();
	var dia = dataAtual.getDate();
	var diaMes = dataAtual.getDate();
	var mes = dataAtual.getMonth()+ 1;
	var ano = dataAtual.getYear();
	
	var atividadeAtual = document.getElementById("atividadeAtual").value;
	
	console.log("atividadeAtual: "+atividadeAtual)
	
	if (atividadeAtual == 0 || atividadeAtual == 4) {
	
	if (n == 0 || n == 2 || n == 4 || n == 6 || n == 7 || n == 9 || n == 11) {
		
		var soma;
		// se for 0002 SOMA = 5 e 0003 soma = 3
		var tipoFornecedorSAP = $("#tipoFornecedor").val();
		console.log("########## - tipoFornecedorSAP "+tipoFornecedorSAP);
		
		if (tipoFornecedorSAP == "0002"){
			soma = 6;
			console.log("########## - 1");
			
		} else if (tipoFornecedorSAP == "0003"){
			soma = 2;
			console.log("########## - 2");
			
		} else {
			
			//nova tratativa
			var dataAtual = new Date();
			var dia = dataAtual.getDate();
			var diaMes = dataAtual.getDate();
			var mes = dataAtual.getMonth()+ 1;
			var ano = dataAtual.getYear();
			
			if (diaMes == "1"){soma = 13}
			if (diaMes == "2"){soma = 22}
			if (diaMes == "3"){soma = 21}
			if (diaMes == "4"){soma = 20}
			if (diaMes == "5"){soma = 19}
			if (diaMes == "6"){soma = 18}
			if (diaMes == "7"){soma = 17}
			if (diaMes == "8"){soma = 16}
			if (diaMes == "9"){soma = 15}
			if (diaMes == "10"){soma = 14}
			if (diaMes == "11"){soma = 24} 
			if (diaMes == "12"){soma = 23} 
			if (diaMes == "13"){soma = 22} 
			if (diaMes == "14"){soma = 21} 
			if (diaMes == "15"){soma = 20} 
			if (diaMes == "16"){soma = 19} 
			if (diaMes == "17"){soma = 18} 
			if (diaMes == "18"){soma = 17} 
			if (diaMes == "19"){soma = 16} 
			if (diaMes == "20"){soma = 15}
			if (diaMes == "21"){soma = 24} 
			if (diaMes == "22"){soma = 23} 
			if (diaMes == "23"){soma = 22} 
			if (diaMes == "24"){soma = 21} 
			if (diaMes == "25"){soma = 20} 
			if (diaMes == "26"){soma = 19} 
			if (diaMes == "27"){soma = 18} 
			if (diaMes == "28"){soma = 17} 
			if (diaMes == "29"){soma = 16} 
			if (diaMes == "30"){soma = 15} 
			if (diaMes == "31"){soma = 14} 
			
			//
			
			
		}
		
		$("#qtdDias").val(soma)
		//form.setValue("qtdDias", soma);

		var somaData = new Date();
		somaData.setDate(dataAtual.getDate() + soma);
		var somaDia = somaData.getDate();
		var somaMes = somaData.getMonth() + 1;
		var somaAno = somaData.getYear();
		if(somaDia<10){somaDia='0'+somaDia}
		if(somaMes<10){somaMes='0'+somaMes}
		dataSomada = somaDia + "/" + somaMes + "/" + somaData.getFullYear();
		
		$("#somadata").val(dataSomada)
		//form.setValue("somadata", dataSomada);

		var dtMinima = new Date();
		if(dtMinima.getDate() >= 11 && dtMinima.getDate() <= 20){
			dtMinima.setDate(dataAtual.getDate() + (soma - 11));
		}else{
			dtMinima.setDate(dataAtual.getDate() + (soma - 10));
		}
		
		var dtMinimaDia = dtMinima.getDate();
		var dtMinimaMes = dtMinima.getMonth() + 1;
		var dtMinimaAno = dtMinima.getYear();
		if(dtMinimaDia<10){dtMinimaDia='0'+dtMinimaDia}
		if(dtMinimaMes<10){dtMinimaMes='0'+dtMinimaMes}
		dtMinimaMesSomada = dtMinimaDia + "/" + dtMinimaMes + "/" + dtMinima.getFullYear();
		$("#dtMinima").val(dtMinimaMesSomada)
		//form.setValue("dtMinima", dtMinimaMesSomada);

/*		var sucesso = form.getValue("fismsgsucesso");
		var warning = form.getValue("fismsgwarning");
		var erro = form.getValue("fismsgerro");
		var justSol = form.getValue("soljust");
		var atualData = form.getValue("data_sol");
		var justFis = form.getValue("fisrep2");
		var fisJust2 = form.getValue("fisjust2");
		var lancfin = form.getValue("inputLancFinanc");
		var somaData = form.getValue("somadata");
		var datavencimento = form.getValue("dtvenc");
		var partesData2 = datavencimento.split("/");
		var vencimento =  new Date(partesData2[2], partesData2[1] -1, partesData2[0]);
		var somaData = form.getValue("somadata");
		var datasomada = form.getValue("somadata");
		var partesData = datasomada.split("/");
		var somaData = new Date(partesData[2], partesData[1] -1, partesData[0]);
		var fundoFixo = form.getValue("inputFundoFixo");
		var adiantamento = form.getValue("inputAdiantamento");
		var tipoFornecedor = form.getValue("inputtipoFornecedor");*/
	}else if (n == 3 || n == 5 || n == 8 || n == 10) {
		
		var soma;
		var tipoFornecedorSAP = $("#tipoFornecedor").val();
		console.log("########## - tipoFornecedorSAP "+tipoFornecedorSAP);
		
		if (tipoFornecedorSAP == "0002"){
			soma = 6;
			console.log("########## - 10");
			
		} else if (tipoFornecedorSAP == "0003"){
			soma = 2;
			console.log("########## - 20");
			
		} else {
			if (diaMes == "1"){soma = 13}
			if (diaMes == "2"){soma = 22}
			if (diaMes == "3"){soma = 21}
			if (diaMes == "4"){soma = 20}
			if (diaMes == "5"){soma = 19}
			if (diaMes == "6"){soma = 18}
			if (diaMes == "7"){soma = 17}
			if (diaMes == "8"){soma = 16}
			if (diaMes == "9"){soma = 15}
			if (diaMes == "10"){soma = 14}
			if (diaMes == "11"){soma = 23}
			if (diaMes == "12"){soma = 22}
			if (diaMes == "13"){soma = 21}
			if (diaMes == "14"){soma = 20}
			if (diaMes == "15"){soma = 19}
			if (diaMes == "16"){soma = 18}
			if (diaMes == "17"){soma = 17}
			if (diaMes == "18"){soma = 16}
			if (diaMes == "19"){soma = 15}
			if (diaMes == "20"){soma = 14}
			if (diaMes == "21"){soma = 23}
			if (diaMes == "22"){soma = 22}
			if (diaMes == "23"){soma = 21}
			if (diaMes == "24"){soma = 20}
			if (diaMes == "25"){soma = 19}
			if (diaMes == "26"){soma = 18}
			if (diaMes == "27"){soma = 17}
			if (diaMes == "28"){soma = 16}
			if (diaMes == "29"){soma = 15}
			if (diaMes == "30"){soma = 14}
		}
		
		$("#qtdDias").val(soma);
		//form.setValue("qtdDias", soma);
				
		var somaData = new Date();
		somaData.setDate(dataAtual.getDate() + soma);
		var somaDia = somaData.getDate();
		var somaMes = somaData.getMonth() + 1;
		var somaAno = somaData.getYear();
		if(somaDia<10){somaDia='0'+somaDia}
		if(somaMes<10){somaMes='0'+somaMes}
		dataSomada = somaDia + "/" + somaMes + "/" + somaData.getFullYear();
		$("#somadata").val(dataSomada);
		//form.setValue("somadata", dataSomada);


		var dtMinima = new Date();
		dtMinima.setDate(dataAtual.getDate() + (soma - 10));
		var dtMinimaDia = dtMinima.getDate();
		var dtMinimaMes = dtMinima.getMonth() + 1;
		var dtMinimaAno = dtMinima.getYear();
		if(dtMinimaDia<10){dtMinimaDia='0'+dtMinimaDia}
		if(dtMinimaMes<10){dtMinimaMes='0'+dtMinimaMes}
		dtMinimaMesSomada = dtMinimaDia + "/" + dtMinimaMes + "/" + dtMinima.getFullYear();
		$("#dtMinima").val(dtMinimaMesSomada);
		
		//form.setValue("dtMinima", dtMinimaMesSomada);
/*
		var sucesso = form.getValue("fismsgsucesso");
		var warning = form.getValue("fismsgwarning");
		var erro = form.getValue("fismsgerro");
		var justSol = form.getValue("soljust");
		var atualData = form.getValue("data_sol");
		var justFis = form.getValue("fisrep2");
		var fisJust2 = form.getValue("fisjust2");
		var lancfin = form.getValue("inputLancFinanc");
		var somaData = form.getValue("somadata");
		var datavencimento = form.getValue("dtvenc");
		var partesData2 = datavencimento.split("/");
		var vencimento =  new Date(partesData2[2], partesData2[1] -1, partesData2[0]);
		var somaData = form.getValue("somadata");
		var datasomada = form.getValue("somadata");
		var partesData = datasomada.split("/");
		var somaData = new Date(partesData[2], partesData[1] -1, partesData[0]);
		var fundoFixo = form.getValue("inputFundoFixo");
		var adiantamento = form.getValue("inputAdiantamento");
		var tipoFornecedor = form.getValue("inputtipoFornecedor");*/
	}else if (n == 1) {
		var soma;
		// se for 0002 SOMA = 5 e 0003 soma = 3
		var tipoFornecedorSAP = $("#tipoFornecedor").val();
		console.log("########## - tipoFornecedorSAP "+tipoFornecedorSAP);
		
		if (tipoFornecedorSAP == "0002"){
			soma = 6;
			console.log("########## - 100");
			
		} else if (tipoFornecedorSAP == "0003"){
			soma = 2;
			console.log("########## - 200");
			
		} else {
			if (diaMes == "1"){soma = 13}
			if (diaMes == "2"){soma = 22}
			if (diaMes == "3"){soma = 21}
			if (diaMes == "4"){soma = 20}
			if (diaMes == "5"){soma = 19}
			if (diaMes == "6"){soma = 18}
			if (diaMes == "7"){soma = 17}
			if (diaMes == "8"){soma = 16}
			if (diaMes == "9"){soma = 15}
			if (diaMes == "10"){soma = 14}
			if (diaMes == "11"){soma = 21}
			if (diaMes == "12"){soma = 20}
			if (diaMes == "13"){soma = 19}
			if (diaMes == "14"){soma = 18}
			if (diaMes == "15"){soma = 17}
			if (diaMes == "16"){soma = 16}
			if (diaMes == "17"){soma = 15}
			if (diaMes == "18"){soma = 14}
			if (diaMes == "19"){soma = 13}
			if (diaMes == "20"){soma = 12}
			if (diaMes == "21"){soma = 21}
			if (diaMes == "22"){soma = 20}
			if (diaMes == "23"){soma = 19}
			if (diaMes == "24"){soma = 18}
			if (diaMes == "25"){soma = 17}
			if (diaMes == "26"){soma = 16}
			if (diaMes == "27"){soma = 15}
			if (diaMes == "28"){soma = 14}
			if (diaMes == "29"){soma = 14}
		}
		
		$("#qtdDias").val(soma);
		//form.setValue("qtdDias", soma);
					
		var somaData = new Date();
		somaData.setDate(dataAtual.getDate() + soma);
		var somaDia = somaData.getDate();
		var somaMes = somaData.getMonth() + 1;
		var somaAno = somaData.getYear();
		if(somaDia<10){somaDia='0'+somaDia}
		if(somaMes<10){somaMes='0'+somaMes}
		dataSomada = somaDia + "/" + somaMes + "/" + somaData.getFullYear();
		
		$("#somadata").val(dataSomada);
		//form.setValue("somadata", dataSomada);


		var dtMinima = new Date();
		dtMinima.setDate(dataAtual.getDate() + (soma - 10));
		var dtMinimaDia = dtMinima.getDate();
		var dtMinimaMes = dtMinima.getMonth() + 1;
		var dtMinimaAno = dtMinima.getYear();
		if(dtMinimaDia<10){dtMinimaDia='0'+dtMinimaDia}
		if(dtMinimaMes<10){dtMinimaMes='0'+dtMinimaMes}
		dtMinimaMesSomada = dtMinimaDia + "/" + dtMinimaMes + "/" + dtMinima.getFullYear();
		
		$("#dtMinima").val(dtMinimaMesSomada)
		//form.setValue("dtMinima", dtMinimaMesSomada);
    
    	//
	}
	}
/*    var dataAtual = document.getElementById("data_sol").value;
    var novaDataReprovado = document.getElementById("novaDataReprovado").value; //variável para validar data reprovado
*/    
    var dataAtual;
    var atividadeAtual = $("#atividadeAtual").val();
    
    if (atividadeAtual == 0 || atividadeAtual == 4){
    	dataAtual = document.getElementById("data_sol").value;
    	
    }else if (atividadeAtual == 51){
    	dataAtual = document.getElementById("novaDataReprovado").value;
    }
    
    console.log("data atual é: " +dataAtual);
    
    var partesData3 = dataAtual.split("/");
    var atualData = new Date(partesData3[2], partesData3[1] - 1, partesData3[0]);
    var tipoFornec = $("#inputtipoFornecedor").val();
    var inputAdiant = $("#inputAdiantamento").val();
    var inputFFixo = $("#inputFundoFixo").val();
    var motivoFiscal = $("#motivoRecusaFiscal").val();
    if(vencimento < atualData){
        console.log(">>>>>>>>>>>>Vencimento: "+vencimento);
        console.log(">>>>>>>>>>>>data Atual: "+atualData);
        console.log(">>>>>>>>>>>>Tratando Data: Retroativo<<<<<<<<<<<<<<<<<")
        erro.style.display = "none";
        warning.style.display = "none";
        sucesso.style.display = "none";
        retroativa.style.display = "block";
        retroativa.style.color = "#f64445";
        $(".divData").removeClass("has-success has-error has-warning");
        $(".divData").addClass("has-error");
    }else{
        retroativa.style.display = "none";
    }
    if((tipoFornec == "0") && (inputAdiant == "0") && (inputFFixo == "0")){
        if(vencimento < somaData){
            console.log(">>>>>>>>>>>>Vencimento: "+vencimento);
            console.log(">>>>>>>>>>>>SomaData: "+somaData);
            console.log(">>>>>>>>>>>>Tratando Data: False<<<<<<<<<<<<<<<<<")
            sucesso.style.display = "none";
            warning.style.display = "none";
            erro.style.display = "block";
            dvjustfis.style.display = "none";
            erro.style.color = "#f64445";
            $(".divData").removeClass("has-success has-error has-warning");
            $(".divData").addClass("has-error");
            $("#inputprazoAceitavel").val("False");
            $("#inputFluxo").val("");
        }else{
            console.log(">>>>>>>>>>>>Vencimento: "+vencimento);
            console.log(">>>>>>>>>>>>SomaData: "+somaData);
            console.log(">>>>>>>>>>>>Tratando Data: True<<<<<<<<<<<<<<<<<")
            $("#inputFluxo").val("Fiscal");
            warning.style.display = "none";
            sucesso.style.display = "block";
            erro.style.display = "none";
            dvjustfis.style.display = "none";
            $("#inputprazoAceitavel").val("True");
            sucesso.style.color = "#38cf5a";
            $(".divData").removeClass("has-success has-error has-warning");
            $(".divData").addClass("has-success");
        }
    }else if(tipoFornec == "0002"){
        if(vencimento < atualData){
            console.log(">>>>>>>>>>>>Vencimento: "+vencimento);
            console.log(">>>>>>>>>>>>data Atual: "+atualData);
            console.log(">>>>>>>>>>>>Tratando Data: Retroativo<<<<<<<<<<<<<<<<<")
            erro.style.display = "none";
            warning.style.display = "none";
            sucesso.style.display = "none";
            retroativa.style.display = "block";
            retroativa.style.color = "#f64445";
            $(".divData").removeClass("has-success has-error has-warning");
            $(".divData").addClass("has-error");
        }else{
        	
        	if(vencimento < somaData){
       		 console.log("EROOOOOOO");
       		 console.log(">>>>>>>>>>>>Vencimento: "+vencimento);
                console.log(">>>>>>>>>>>>SomaData: "+somaData);
                console.log(">>>>>>>>>>>>Tratando Data de bloqueio: True<<<<<<<<<<<<<<<<<")
                erro.style.display = "none";
                warning.style.display = "none";
                sucesso.style.display = "none";
                erro.style.display = "block";
                erro.style.color = "#f64445";
                $(".divData").removeClass("has-success has-error has-warning");
                $(".divData").addClass("has-error");
       		
       	}else{
        	
            retroativa.style.display = "none";
            console.log(">>>>>>>>>>>>Vencimento: "+vencimento);
            console.log(">>>>>>>>>>>>SomaData: "+somaData);
            console.log(">>>>>>>>>>>>Tratando Data: True<<<<<<<<<<<<<<<<<")
            $("#inputFluxo").val("Fiscal");
            warning.style.display = "none";
            sucesso.style.display = "block";
            erro.style.display = "none";
            dvjustfis.style.display = "none";
            $("#inputprazoAceitavel").val("True");
            sucesso.style.color = "#38cf5a";
            $(".divData").removeClass("has-success has-error has-warning");
            $(".divData").addClass("has-success");
        }  
       }
    }else if(tipoFornec == "0003"){
        if(vencimento < atualData){
            console.log(">>>>>>>>>>>>Vencimento: "+vencimento);
            console.log(">>>>>>>>>>>>data Atual: "+atualData);
            console.log(">>>>>>>>>>>>Tratando Data: Retroativo<<<<<<<<<<<<<<<<<")
            erro.style.display = "none";
            warning.style.display = "none";
            sucesso.style.display = "none";
            retroativa.style.display = "block";
            retroativa.style.color = "#f64445";
            $(".divData").removeClass("has-success has-error has-warning");
            $(".divData").addClass("has-error");
        }else{
        	
        	if(vencimento < somaData){
        		 console.log("EROOOOOOO");
        		 console.log(">>>>>>>>>>>>Vencimento: "+vencimento);
                 console.log(">>>>>>>>>>>>SomaData: "+somaData);
                 console.log(">>>>>>>>>>>>Tratando Data de bloqueio: True<<<<<<<<<<<<<<<<<")
                 erro.style.display = "none";
                 warning.style.display = "none";
                 sucesso.style.display = "none";
                 erro.style.display = "block";
                 erro.style.color = "#f64445";
                 $(".divData").removeClass("has-success has-error has-warning");
                 $(".divData").addClass("has-error");
        		
        	}else{
        	
            retroativa.style.display = "none";
            console.log(">>>>>>>>>>>>Vencimento: "+vencimento);
            console.log(">>>>>>>>>>>>SomaData: "+somaData);
            console.log(">>>>>>>>>>>>Tratando Data: True<<<<<<<<<<<<<<<<<")
            $("#inputFluxo").val("Fiscal");
            warning.style.display = "none";
            sucesso.style.display = "block";
            erro.style.display = "none";
            dvjustfis.style.display = "none";
            $("#inputprazoAceitavel").val("True");
            sucesso.style.color = "#38cf5a";
            $(".divData").removeClass("has-success has-error has-warning");
            $(".divData").addClass("has-success");

        	}
        }
    }
    FiltroData();
    FiltroLancData();
    function FiltroData() {
        var datasomada = document.getElementById("somadata").value;
        var partesData = datasomada.split("/");
        var somaData = new Date(partesData[2], partesData[1] - 1, partesData[0]);
        var datavencimento = document.getElementById("dtvenc").value;
        var partesData2 = datavencimento.split("/");
        var vencimento = new Date(partesData2[2], partesData2[1] - 1, partesData2[0]);
        var dvjustfis = document.getElementById("divJustSol");
        var filtrodate = new Date(vencimento);
        var filtroDia = filtrodate.getDate();
        var filtroMes = filtrodate.getMonth() + 1;
        if(filtroDia < 10){
            filtroDia = '0' + filtroDia;
        }
        if(filtroMes < 10){
            filtroMes = '0' + filtroMes;
        }
        var filtrodate = filtroMes + "/" + filtroDia;
        document.getElementById("dataFiltro").value = filtrodate;
    }
    function FiltroLancData(){
        var datasomada = document.getElementById("somadata").value;
        var partesData = datasomada.split("/");
        var somaData = new Date(partesData[2], partesData[1] - 1, partesData[0]);
        var datalancamento = document.getElementById("dtlanc").value;
        var partesData2 = datalancamento.split("/");
        var lancamento = new Date(partesData2[2], partesData2[1] - 1, partesData2[0]);
        var lancfiltrodate = new Date(lancamento);
        var lancfiltroDia = lancfiltrodate.getDate();
        var lancfiltroMes = lancfiltrodate.getMonth() + 1;
        if(lancfiltroDia < 10){
            lancfiltroDia = '0' + lancfiltroDia;
        }
        if(lancfiltroMes < 10){
            lancfiltroMes = '0' + lancfiltroMes;
        }
        var lancfiltrodate = lancfiltroMes + "/" + lancfiltroDia;
        document.getElementById("datalancFiltro").value = lancfiltrodate;
    }
}
$(document).ready(function (){
    //Campo Pedido
    if($("#inputFrete").val() != 0){
        $("#divnumPedido").show();
    }else{
        $("#divnumPedido").hide();
    }
    //Verificação Motivo Recusa Fiscal
    var analiseFiscal = $("#aprovaRecusaFiscal").val();
    var motivoRecusa = $("#motivoRecusaFiscal").val();
    if(analiseFiscal == "Recusado"){
        if(motivoRecusa == "1" || motivoRecusa == "3" || motivoRecusa == "5" || motivoRecusa == "7" || motivoRecusa == "6"){
            $("#inputFluxo").val("Fiscal");
        }
        // if(motivoRecusa == "6"){
        //     $("#inputFluxo").val("AprovDiretoria");
        // }
    }
    //ShortName para Empresa (Approval)
    $("#drop_emp").on('change', function(){
        if (this.value == "B001") {
            $("#inputcoligResum").val(" B001-GS INIMA BRASIL");
        }
        if (this.value == "B002") {
            $("#inputcoligResum").val(" B002-AMBIENT");
        }
        if (this.value == "B003") {
            $("#inputcoligResum").val(" B003-SESAMM");
        }
        if (this.value == "B004") {
            $("#inputcoligResum").val(" B004-ARAUCARIA");
        }
        if (this.value == "B005") {
            $("#inputcoligResum").val(" B005-SANEVAP");
        }
        if (this.value == "B006") {
            $("#inputcoligResum").val(" B006-SANAMA");
        }
        if (this.value == "B007") {
            $("#inputcoligResum").val(" B007-CAEPA");
        }
        if (this.value == "B008") {
            $("#inputcoligResum").val(" B008-COMASA");
        }
        if (this.value == "B009") {
            $("#inputcoligResum").val(" B009-SAMAR");
        }
        if (this.value == "B010") {
            $("#inputcoligResum").val(" B010-GS INDUSTRIAL");
        }
        if (this.value == "B011") {
            $("#inputcoligResum").val(" B011-GS SERVICO");
        }
        if (this.value == "B012") {
            $("#inputcoligResum").val(" B012-PALMEIRAS SANEAMENTO");
        }
        if (this.value == "B013") {
            $("#inputcoligResum").val(" B013-SANEOURO");
        }
        if(this.value == "B014"){
            $("#inputcoligResum").val(" B014-JECEABA");
        }
        if(this.value == "B015"){
            $("#inputcoligResum").val(" B015-AQUAPOLO");
        }
        if(this.value == "B016"){
            $("#inputcoligResum").val(" B016-TRIUNFO");
        }
        if(this.value == "B017"){
            $("#inputcoligResum").val(" B017-SANEL");
        }
        if (this.value == "B701") {
            $("#inputcoligResum").val(" B701-CC ALTA MACEIO");
        }
        /*if (this.value == "BJ02") {
            $("#inputcoligResum").val(" BJ02-CC VALE DO PARAIBA");
        }*/
    });
    //Carrega campos com read-only
    $("#numnf").attr("readonly", true);
    $("#dtdoc").attr("readonly", true);
    $('#dtlanc').attr("readonly", true);
    $('#drop_emp').attr("readonly", true);
    $("#numfornecedor").attr("readonly", true);
    $("#descfornecedor").attr("readonly", true);
    $("#numpedido").attr("readonly", true);
    //Disable Botão de pesquisa a fornecedores
    $("#modalBtnFornec").attr("disabled", true);
    //Verifica se existe MIGO para aplicar no modal pedidos
    var nrmigo = $("#nummigo").val();
    if(nrmigo != ""){
        IntegracaoSAPPedido(nrmigo);
    }
    //Adiciona valor selecionado na tabela de fornecedores ao campo do formulário
    $("#modalTableFornecedores").on('click', 'tr', function (event) {
        var tableData = $(this).children("td").map(function () {
            return $(this).text();
        }).get();
        var rsltNrFornec = tableData[0];
        var rsltDescFornec = tableData[1];
        $("#numfornecedor").val(rsltNrFornec);
        $("#descfornecedor").val(rsltDescFornec);
        $('#modalFornec').css("display", "none");
        IntegracaoSAPFornecedores(rsltNrFornec);
    })
    var mobile = /Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)
    if(mobile){
        $("#dtlanc").datepicker();
        $("#dtvenc").datepicker();
        $("#modalvenc").datepicker();
        $("#dtdoc").datepicker();
    }
    else{
        FLUIGC.calendar('#dtlanc');
        FLUIGC.calendar('#dtvenc');
        FLUIGC.calendar('#modalvenc');
        FLUIGC.calendar('#dtdoc');
    }
    FLUIGC.switcher.onChange("#switchAprovFis", function(event, state){
        if(state == true){
            $("#inputAprovFisStatus").val("1");
            $("#divJustFisc").css("display", "none");
        }else{
            $("#inputAprovFisStatus").val("0");
            $("#divJustFisc").css("display", "block");
        }
    })
    FLUIGC.popover('#divFrete',{trigger: 'hover', placement: 'bottom'});
    FLUIGC.switcher.onChange("#switchFrete", function (event, state){
        if(state == true){//Update
            $("#inputFrete").val("1");//Update
            $("#divnumPedido").css("display", "block");//Update            
            $("#nummigo").attr("disabled", true);//Update            
            $("#btnnumMigo").attr("disabled", true);//Update
            //Remove read-only
            $("#numnf").attr("readonly", false);//Update
            $("#dtdoc").attr("readonly", false);//Update
            $('#dtlanc').attr("readonly", false);//Update
            $('#drop_emp').attr("readonly", false);//Update
            $("#numfornecedor").attr("readonly", false);//Update
            $("#descfornecedor").attr("readonly", false);//Update
            //Enable Botão de pesquisa a fornecedores
            $("#modalBtnFornec").attr("disabled", false);//Update
            $("#btnModalPedido").hide();
        }else{
            $("#inputFrete").val("0");//Update
            $("#divnumPedido").css("display", "none");//Update            
            $("#nummigo").attr("disabled", false);//Update            
            $("#btnnumMigo").attr("disabled", false);//Update
            //Aplica read-only
            $("#numnf").attr("readonly", true);//Update
            $("#dtdoc").attr("readonly", true);//Update
            $('#dtlanc').attr("readonly", true);//Update
            $('#drop_emp').attr("readonly", true);//Update
            $("#numfornecedor").attr("readonly", true);//Update
            $("#descfornecedor").attr("readonly", true);//Update
            //Disable Botão de pesquisa a fornecedores
            $("#modalBtnFornec").attr("disabled", true);//Update
            $("#btnModalPedido").show();
        }      
    })
    FLUIGC.switcher.onChange("#switchLancFinanc", function (event, state){
        if(state == true){
            $("#inputLancFinanc").val("1"); inputtipoSolicitacao
            $("#inputtipoSolicitacao").val("Lançamento Financeiro");
            $("#nummigo").attr("disabled", true);
            $("#numnf").attr("disabled", true);
            $("#btnnumMigo").attr("disabled", true);
            //Remove read-only
            $("#dtdoc").attr("readonly", false);
            $('#dtlanc').attr("readonly", false);
            $('#drop_emp').attr("readonly", false);
            $("#numfornecedor").attr("readonly", false);
            $("#descfornecedor").attr("readonly", false);
            //Enable Botão de pesquisa a fornecedores
            $("#modalBtnFornec").attr("disabled", false);
        }else{
            $("#inputLancFinanc").val("0");
            $("#inputtipoSolicitacao").val("");
            $("#nummigo").attr("disabled", false);
            $("#numnf").attr("disabled", false);
            $("#btnnumMigo").attr("disabled", false);
            //Aplica read-only
            $("#dtdoc").attr("readonly", true);
            $('#dtlanc').attr("readonly", true);
            $('#drop_emp').attr("readonly", true);
            $("#numfornecedor").attr("readonly", true);
            $("#descfornecedor").attr("readonly", true);
            //Disable Botão de pesquisa a fornecedores
            $("#modalBtnFornec").attr("disabled", true);
        }
    })
    FLUIGC.switcher.onChange("#switchFundoFixo", function (event, state){
        if(state == true){
            $("#inputFluxo").val("Fiscal");
            $("#inputFundoFixo").val("1");
            $("#inputtipoSolicitacao").val("Fundo Fixo");
            $("#fismsgsucesso").hide();
            $("#fismsgwarning").hide();
            $("#fismsgerro").hide();
            $("#divJustSol").hide();
        }else{
            //$("#inputFluxo").val("");
            $("#inputtipoSolicitacao").val("");
            $("#inputFundoFixo").val("0");
            if ($("#dtvenc").val() != "") {
                validaData();
            }
        }
    })
    FLUIGC.switcher.onChange("#switchAdiantamento", function (event, state){
        if (state == true) {
            $("#inputFluxo").val("Fiscal");
            $("#inputtipoSolicitacao").val("Adiantamento");
            $("#inputAdiantamento").val("1");
            $("#fismsgsucesso").hide();
            $("#fismsgwarning").hide();
            $("#fismsgerro").hide();
            $("#divJustSol").hide();
        }else{
            //$("#inputFluxo").val("");
            $("#inputtipoSolicitacao").val("");
            $("#inputAdiantamento").val("0");
            if ($("#dtvenc").val() != "") {
                validaData();
            }
        }
    })
    FLUIGC.switcher.onChange("#switchBoleto", function (event, state){
        if (state == true) {
            $("#inputBoleto").val("1");
            FLUIGC.switcher.setFalse('#switchTED');
        }else{
            $("#inputBoleto").val("0");
            FLUIGC.switcher.setTrue('#switchTED');
        }
    })
    FLUIGC.switcher.onChange("#switchTED", function (event, state){
        if (state == true) {
            $("#inputTED").val("1");
            FLUIGC.switcher.setFalse('#switchBoleto');
        }else{
            $("#inputTED").val("0");
            FLUIGC.switcher.setTrue('#switchBoleto');
        }
    })
    //Aprovacao Fiscal
    $("#aprovaRecusaFiscal").on('change', function () {
        var statusAprovacao = $("#aprovaRecusaFiscal").val();
        if (statusAprovacao == "Recusado") {
            $("#inputAprovFisStatus").val("0");
            $("#divJustFisc").css("display", "block");
            $("#divmotivoRecusaFiscal").css("display", "block");
        } else {
            $("#inputAprovFisStatus").val("1");
            $("#divJustFisc").css("display", "none");
            $("#divmotivoRecusaFiscal").css("display", "none");
        }
    })
    //Motivo Recusa Fiscal
    $("#motivoRecusaFiscal").on('change', function () {
        $("#inputstatusRecusaFiscal").val(this);
    })
    //Attach the plugin to the radio inputs.
    $("input:radio").radiocharm();
    //Script para mostrar campos obrigatórios dinamicamente
    if ($(".required").val() == '') {
        addErro($(".required"));
    } else {
        addSuccess($(".required"));
    }
    $('.required').change(function () {
        $('.required').each(function () {
            var requiredValue = $(this).val();
            if (requiredValue == '') {
                console.log(requiredValue);
                addErro($(this));
            } else {
                addSuccess($(this));
                console.log(requiredValue);
            }
        });
    });
    function camposObrigatorios() {
        $(".required").each(function (index, value) {
            $(this).parent().find("label.control-label:first").append('<span class="text-danger"> *</span>');
        });
    }
    function addErro(campo) {
        campo.parents("div.form-group").removeClass('has-success').addClass('has-error');
    }
    function addSuccess(campo) {
        campo.parents("div.form-group").removeClass('has-error').addClass('has-success');
    }
    //Função open modal Pedidos
    $("#btnModalPedido").on('click', function () {
        $('#modalPedidos').show();
    });
    //Função close modal fornecedor
    $('.modal_closeBtn').on('click', function () {
        $('.modal_custom').css('display', 'none');
    });
    //Função clique fora fornecedor
    $(window).on('click', function (e) {
        var modal = $('modalPedidos');
        if (e.target == modal) {
            $('.modal_custom').css('display', 'none');
        }
    });
    //Função muda campo input conforme radio selecionado (Modal Fornecedor)
    $('#divModalSearch input[type=radio]').change(function () {
        if ($(this).val() == "CNPJ") {
            $('#modalInputCNPJCPF').css("display", "block");
            $('#modalInputName').css("display", "none");
            $('#modalInputNr').css("display", "none");
        }
        if ($(this).val() == "Nome") {
            $('#modalInputCNPJCPF').css("display", "none");
            $('#modalInputName').css("display", "block");
            $('#modalInputNr').css("display", "none");
        }
        if ($(this).val() == "Nr") {
            $('#modalInputCNPJCPF').css("display", "none");
            $('#modalInputName').css("display", "none");
            $('#modalInputNr').css("display", "block");
        }
    })
    //Função open modal fornecedor
    $("#modalBtnFornec").on('click', function () {
        $(".table_custom").css('display', 'none');
        $('#modalFornec').css("display", "block");
        $("#modalTableFornecedores").find("tr:gt(0)").remove();
    });
    //Função close modal fornecedor
    $('.closeBtnModal').on('click', function () {
        $('.modal_custom').css('display', 'none');
    });
    //Função clique fora fornecedor
    $(window).on('click', function (e) {
        var modal = $('modalFornec');
        if (e.target == modal) {
            $('.modal_custom').css('display', 'none');
        }
    });
    //Script para bloquear alguns botões da aba de Anexos do Fluig
    $($(window.top.document).find("button:contains('Carregar arquivos')")).attr("disabled", true);
    $($(window.top.document).find("button:contains('Buscar no ECM')")).attr("disabled", true);
    //Script para carregar todos os Switches Buttons
    FLUIGC.switcher.init('#switchLancFinanc');
    FLUIGC.switcher.init('#switchFundoFixo');
    FLUIGC.switcher.init('#switchAdiantamento');
    FLUIGC.switcher.init('#switchFrete');
    FLUIGC.switcher.init('#switchBoleto');
    FLUIGC.switcher.init('#switchTED');
    FLUIGC.switcher.init('#switchMeiPf');
    FLUIGC.switcher.init('#switchAprovLider');
    FLUIGC.switcher.init('#switchAprovPres');
    FLUIGC.switcher.init('#switchAprovFis');
    //Integração com SAP
    $("#nummigo").on('keyup', function () {
        var input = $("#nummigo").val().trim(); // Versão 1.0.01
        console.log(input);
        console.log(input.length);
        var count = input.length;
        if (count == 10) {
            var textInput = document.getElementById("nummigo");
            var timeout = null;
            timeout = setTimeout(function () {
                $("#listPedidos").empty();
                IntegracaoSAP();
            }, 50);
        }else if(count < 10) {
            var textInput = document.getElementById("nummigo");
            var timeout = null;
            timeout = setTimeout(function () {
                var sucesso = document.getElementById("fismsgsucesso");
                var warning = document.getElementById("fismsgwarning");
                var erro = document.getElementById("fismsgerro");
                var dvjustfis = document.getElementById("divJustSol");
                //Limpa os campos
                $("#numnf").val("");
                $("#dtdoc").val("");
                $('#dtlanc').val("");
                $('#dtvenc').val("");
                $('#drop_emp').val("");
                $("#numfornecedor").val("");
                $("#descfornecedor").val("");
                $("#numpedido").val("");
                sucesso.style.display = "none";
                warning.style.display = "none";
                erro.style.display = "none";
                dvjustfis.style.display = "none";

                //Desbloqueia botão de busca por fornecedores
                $("#modalBtnFornec").attr("disabled", false);
            }, 50);
        }
    });
    //Integração SAP Código Fornecedor
    $("#numfornecedor").on('keyup', function () {
        var input = document.getElementById("numfornecedor").value;
        var count = input.length;
        if (count == 7) {
            var textInput = document.getElementById("numfornecedor");
            var timeout = null;
            timeout = setTimeout(function () {
                IntegracaoSAPFornecedoresCodigo();
            }, 50);
        }
    });
    //Script onChange Nr Fornecedor, chamar integração SAP.
    $("#numfornecedor").on('change', function () {
        nr_fornec = $(this).val();
        IntegracaoSAPFornecedores(nr_fornec);
    });
    //Aciona busca de fornecedores pelo botão do modal
    $("#modal_BtnBuscaFornec").on('click', function () {
        $(".table_custom").css('display', 'block');
        IntegracaoSAPFornecedores2();
    })
});