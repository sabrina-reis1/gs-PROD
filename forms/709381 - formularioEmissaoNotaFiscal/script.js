let valores = [];
function fnCustomDelete(element){
    let atividade = parseInt($("#inputNumeroAtividade").val());
    if(atividade === 0 || atividade === 4 || atividade === 11){
        let valorTotalSolicitacao = null;
        const index = element.id.split('___')[1];
        valores = valores.filter((item) => item.id != index);
        valores.forEach(item => valorTotalSolicitacao += parseFloat(item.valor));
        if(valorTotalSolicitacao === null) $('#inputValorTotalSolicitacao').val('');
        else $('#inputValorTotalSolicitacao').val(valorTotalSolicitacao.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
        fnWdkRemoveChild(element);
    }
}
$(document).ready( () => {
    // VARIÁVEIS CABEÇALHO PRINCIPAL
    let inputDataSolicitacao = $("#inputDataSolicitacao");
    let inputSolicitante = $("#inputSolicitante");
    let selectEmpresaRemetente = $("#selectEmpresaRemetente");
    let selectOperacao = $("#selectOperacao");
    let selectMotivoOperacao = $("#selectMotivoOperacao");
    let inputDataHoraRemessa = $("#inputDataHoraRemessa");
    let textareaJustificativaRemessa = $('#textareaJustificativaRemessa');

    // VARIÁVEIS NOTA FISCAL DE ORIGEM
    let inputNotaFiscalOrigem = $("#inputNotaFiscalOrigem");
    let inputDataVencimentoBoleto = $("#inputDataVencimentoBoleto");
    let switchPgtoJuntoFornecedor = $("#switchPgtoJuntoFornecedor");
    const btnAnexarNFOrigem = $("#btnAnexarNFOrigem");
    let textareaObsNFOrigem = $("#textareaObsNFOrigem");
    
    // VARIÁVEIS DESTINATÁRIO
    let inputFornecedorDestinatario = $("#inputFornecedorDestinatario");
    let inputCNPJDestinatario = $("#inputCNPJDestinatario");
    let inputIEDestinatario = $("#inputIEDestinatario");
    let inputIMDestinatario = $("#inputIMDestinatario");
    let inputCepDestinatario = $("#inputCepDestinatario");
    let inputEnderecoDestinatario = $("#inputEnderecoDestinatario");
    let inputNumEnderecoDestinatario = $("#inputNumEnderecoDestinatario");
    let inputBairroDestinatario = $("#inputBairroDestinatario");
    let inputComplementoDestinatario = $("#inputComplementoDestinatario");
    let inputCidadeDestinatario = $("#inputCidadeDestinatario");
    let inputUFDestinatario = $("#inputUFDestinatario");
    let inputContatoDestinatario = $("#inputContatoDestinatario");
    let switchDiferenteEnderecoEntrega = $("#switchDiferenteEnderecoEntrega");

    // VARIÁVEIS LOCAL DA ENTREGA
    let inputCepEntrega = $("#inputCepEntrega");
    let inputEnderecoEntrega = $("#inputEnderecoEntrega");
    let inputNumEnderecoEntrega = $("#inputNumEnderecoEntrega");
    let inputBairroEntrega = $("#inputBairroEntrega");
    let inputComplementoEntrega = $("#inputComplementoEntrega");
    let inputCidadeEntrega = $("#inputCidadeEntrega");
    let inputUFEntrega = $("#inputUFEntrega");
    let inputContatoEntrega = $("#inputContatoEntrega");
    let inputTelefoneEntrega = $("#inputTelefoneEntrega");
    let endEntrega = $(".endEntrega");

    // VARIÁVEIS TRANSPORTADORA
    let selectResponsavelTransporte = $("#selectResponsavelTransporte");
    let inputTransportadoraRemetente = $("#inputTransportadoraRemetente");
    let inputCNPJTransportadora = $("#inputCNPJTransportadora");
    let inputIETransportadora = $("#inputIETransportadora");
    let textareaObsTransportadora = $("#textareaObsTransportadora");
    let transportadora = $(".transportadora");

    // VARIÁVEIS ITENS
    const btnAdicionarItem = $("#btnAdicionarItem");
    let inputValorTotalSolicitacao = $("#inputValorTotalSolicitacao");

    // VARIÁVEIS FISCAL
    let switchAprovacaoFiscal = $("#switchAprovacaoFiscal");
    let textareaJustificativaFiscal = $("#textareaJustificativaFiscal");
    const btnAnexarNotaFiscal = $("#btnAnexarNotaFiscal");
    let inputNumeroNotaFiscal = $("#inputNumeroNotaFiscal");
    let inputNumeroMigo = $("#inputNumeroMigo");
    let inputNumeroMiro = $("#inputNumeroMiro");
    let inputNumeroNotaFiscalWriter = $("#inputNumeroNotaFiscalWriter");

    // VARIÁVEIS DESPACHAR MERCADORIA
    let inputDataSaidaMercadoria = $("#inputDataSaidaMercadoria");
    const btnAnexarDespacho = $("#btnAnexarDespacho");

    // VARIÁVEIS SOLICITAÇÃO
    const inputCodigoProcesso = $("#inputCodigoProcesso");
    const inputNumeroSolicitacao = $("#inputNumeroSolicitacao");
    const inputNumeroAtividade = $("#inputNumeroAtividade");
    const inputUsuarioSolicitante = $("#inputUsuarioSolicitante");
    const inputIDSolicitante = $("#inputIDSolicitante");
    const inputEmailSolicitante = $("#inputEmailSolicitante");
    const inputLoginSolicitante = $("#inputLoginSolicitante");
    
    // FUNÇÕES CABEÇALHO PRINCIPAL
    const empresa = () => {
        console.log('Empresas!');
        $.ajax({
            type: 'POST',
            //url: "https://fiori.gsinima.com.br/sap/bc/Z_FLUIG_REST/",
            url: "https://sap.gsinima.com.br/sap/bc/Z_FLUIG_REST/",
            datatype: 'json',
            crossDomain: true,
            data: 'C_PLANT',
            beforeSend: (xhr) => {
                xhr.setRequestHeader ("Authorization", "Basic Zmx1aWc6Rmx1aWdicmFzaWwyMDIxIQ==");
            },
            success: (data) => {
                console.log(data);
                if(data === "ER001"){
                    FLUIGC.toast({title: 'Erro: ',message: 'Erro ao buscar as empresas!',type: 'danger'});           
                }else{
                    const xmlDoc = $.parseXML(data);
                    const $xml = $(xmlDoc);
                    const $zfluig = $xml.find("TAB");
                    $zfluig.each(function(){
                        const xmlLength = $(this).find("ZMMS_RETORNO").length;
                        selectEmpresaRemetente.append('<option value=""></option>');
                        for(let i = 0; i < xmlLength; i++){
                            const codigo = $(this).find("ZMMS_RETORNO").eq(i).find('COD').text();
                            const descricao = $(this).find("ZMMS_RETORNO").eq(i).find('DES').text();
                            if(codigo !== 'BR01') selectEmpresaRemetente.append('<option value="'+codigo+'">'+codigo+' | '+descricao+'</option>');
                        }
                    });
                }
            },
            error: () => {
                FLUIGC.toast({title: 'Erro: ',message: 'Erro ao buscar dados no SAP!',type: 'danger'});
            }
        });
    }
    if(parseInt(inputNumeroAtividade.val()) === 0 || parseInt(inputNumeroAtividade.val()) === 4 || parseInt(inputNumeroAtividade.val()) === 11) empresa();
    FLUIGC.calendar(inputDataHoraRemessa, {pickDate: true, pickTime: true, sideBySide: true});
    const data = new Date();
    let dia  = data.getDate()+1;
    let mes  = data.getMonth()+1;
    const ano  = data.getFullYear();
    dia = (dia<=9 ? "0"+dia : dia);
    mes = (mes<=9 ? "0"+mes : mes);
    const dataAmanha = dia+"/"+mes+"/"+ano;
    if(parseInt(inputNumeroAtividade.val()) === 0 || parseInt(inputNumeroAtividade.val()) === 4) inputDataHoraRemessa.val(`${dataAmanha} 08:00`);

    // FUNÇÕES NOTA FISCAL ORIGEM
    FLUIGC.calendar(inputDataVencimentoBoleto);
    FLUIGC.switcher.init(switchPgtoJuntoFornecedor);
    if(parseInt(inputNumeroAtividade.val()) === 5 || parseInt(inputNumeroAtividade.val()) === 35 || parseInt(inputNumeroAtividade.val()) === 37 || parseInt(inputNumeroAtividade.val()) === 22 || parseInt(inputNumeroAtividade.val()) === 53 || parseInt(inputNumeroAtividade.val()) === 24) FLUIGC.switcher.isReadOnly(switchPgtoJuntoFornecedor, true);
    btnAnexarNFOrigem.on('click', () => {
        JSInterface.showCamera();
        $(window.top.document).find('#attachmentsStatusTab').trigger('click');
    });

    // FUNÇÕES DADOS DESTINATÁRIO
    const fornecedor = (fornecedor, empresa, tipo) => {
        if(fornecedor === "" || empresa === ""){
            FLUIGC.toast({title: 'Erro: ',message: 'É necessário informar empresa contratante ou fornecedor!',type: 'danger'});
        }else{
            FLUIGC.modal({
                title: 'Fornecedores',
                content: 
                        `<div class="table-responsive">
                            <table id="tableModalFornecedor" class="table table-datatable table-bordered table-hover scroll">
                                <thead>
                                    <tr>
                                        <th class="fs-txt-center fs-no-margin fs-no-padding">CENTRO LOGÍSTICO</th>
                                        <th class="fs-txt-center fs-no-margin fs-no-padding">CÓDIGO</th>
                                        <th class="fs-txt-center fs-no-margin fs-no-padding">NOME</th>
                                        <th class="fs-txt-center fs-no-margin fs-no-padding">CPF</th>
                                        <th class="fs-txt-center fs-no-margin fs-no-padding">CNPJ</th>
                                        <th class="fs-txt-center fs-no-margin fs-no-padding">IE</th>
                                        <th class="fs-txt-center fs-no-margin fs-no-padding">IM</th>
                                        <th class="fs-txt-center fs-no-margin fs-no-padding">END</th>
                                        <th class="fs-txt-center fs-no-margin fs-no-padding">NUM</th>
                                        <th class="fs-txt-center fs-no-margin fs-no-padding">COMPL</th>
                                        <th class="fs-txt-center fs-no-margin fs-no-padding">BAIRRO</th>
                                        <th class="fs-txt-center fs-no-margin fs-no-padding">CIDADE</th>
                                        <th class="fs-txt-center fs-no-margin fs-no-padding">CEP</th>
                                        <th class="fs-txt-center fs-no-margin fs-no-padding">UF</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>`,
                id: 'modalFornecedores',
                size: 'large'
            })
            let nomeRazaoSocial = '';
            let cpfCNPJ = '';
            let codigo = '';
            if(isNaN(fornecedor)){
                nomeRazaoSocial = fornecedor.toUpperCase()+'*';
            }else if(fornecedor.length === 14 || fornecedor.length === 11){
                cpfCNPJ = fornecedor;
            }else if(fornecedor.length === 6){
                codigo = fornecedor;
            }
            console.log(`Nome/Razão Social: ${nomeRazaoSocial}\nCPF/CNPJ: ${cpfCNPJ}\nCódigo: ${codigo}\nEmpresa: ${empresa}`);
            $.ajax({
                type: 'POST',
                //url: "https://fiori.gsinima.com.br/sap/bc/Z_FLUIG_REST/",
                url: "https://sap.gsinima.com.br/sap/bc/Z_FLUIG_REST/",
                datatype: 'json',
                crossDomain: true,
                data: 'C_FORNECEDOR={"BUKRS":"'+empresa+'","LIFNR":"'+codigo+'","NAME":"'+nomeRazaoSocial+'","CPFCNPJ":"'+cpfCNPJ+'"}',
                beforeSend: (xhr) => {
                    xhr.setRequestHeader ("Authorization", "Basic Zmx1aWc6Rmx1aWdicmFzaWwyMDIxIQ==");
                },
                success: (data) => {
                    console.log(data);
                    if(data == "ER001"){                
                        FLUIGC.toast({title: 'Erro: ',message: 'Fornecedor não encontrado!',type: 'danger'});    
                        $('#modalFornecedores').modal('toggle');           
                    }else{
                        const xmlDoc = $.parseXML(data);
                        const $xml = $(xmlDoc);
                        const $zfluig = $xml.find("TAB");
                        $zfluig.each(function(){
                            const xmlLength = $(this).find("ZFLUIGS03").length;
                            for(let i = 0; i < xmlLength; i++){
                                const centroLogistico = $(this).find('BUKRS').contents().eq(i).text();
                                const codigoFornecedor = $(this).find('LIFNR').contents().eq(i).text();
                                const descricaoFornecedor = $(this).find('NAME').contents().eq(i).text();
                                const cpfFornecedor = $(this).find('CPF').contents().eq(i).text();
                                const cnpjFornecedor = $(this).find('CNPJ').contents().eq(i).text();
                                const incricaoEstadualFornecedor = $(this).find('IE').contents().eq(i).text();
                                const incricaoMunicipalFornecedor = $(this).find('IM').contents().eq(i).text();
                                const logradouroFornecedor = $(this).find('STREET').contents().eq(i).text();
                                const numeroLogradouroFornecedor = $(this).find('HOUSE_NUM1').contents().eq(i).text();
                                const complementoLogradouroFornecedor = $(this).find('HOUSE_NUM2').contents().eq(i).text();
                                const bairroFornecedor = $(this).find('CITY2').contents().eq(i).text();
                                const cidadeFornecedor = $(this).find('CITY1').contents().eq(i).text();
                                const cepFornecedor = $(this).find('POST_CODE1').contents().eq(i).text();
                                const ufFornecedor = $(this).find('REGION').contents().eq(i).text();
                                $('#tableModalFornecedor').append(
                                    '<tr class="fs-txt-center">'+
                                        '<td class="fs-no-margin fs-no-padding">'+centroLogistico+'</td>'+
                                        '<td class="fs-no-margin fs-no-padding">'+codigoFornecedor+'</td>'+
                                        '<td class="fs-no-margin fs-no-padding">'+descricaoFornecedor+'</td>'+
                                        '<td class="fs-no-margin fs-no-padding">'+cpfFornecedor+'</td>'+
                                        '<td class="fs-no-margin fs-no-padding">'+cnpjFornecedor+'</td>'+
                                        '<td class="fs-no-margin fs-no-padding">'+incricaoEstadualFornecedor+'</td>'+
                                        '<td class="fs-no-margin fs-no-padding">'+incricaoMunicipalFornecedor+'</td>'+
                                        '<td class="fs-no-margin fs-no-padding">'+logradouroFornecedor+'</td>'+
                                        '<td class="fs-no-margin fs-no-padding">'+numeroLogradouroFornecedor+'</td>'+
                                        '<td class="fs-no-margin fs-no-padding">'+complementoLogradouroFornecedor+'</td>'+
                                        '<td class="fs-no-margin fs-no-padding">'+bairroFornecedor+'</td>'+
                                        '<td class="fs-no-margin fs-no-padding">'+cidadeFornecedor+'</td>'+
                                        '<td class="fs-no-margin fs-no-padding">'+cepFornecedor+'</td>'+
                                        '<td class="fs-no-margin fs-no-padding">'+ufFornecedor+'</td>'+
                                    '</tr>'
                                );
                            }
                        });
                    }
                },
                error: () => {
                    FLUIGC.toast({title: 'Erro: ',message: 'Erro ao buscar dados no SAP!',type: 'danger'});      
                }
            });
            $("#tableModalFornecedor").on('click', 'tr', function(){
                const tableData = $(this).children("td").map(function(){ return $(this).text()}).get(); // cria um array que mapeia os dados
                const codigoFornecedor = tableData[1];
                const nomeFornecedor = tableData[2];
                const cpfFornecdeor = tableData[3];
                const cnpjFornecedor = tableData[4];
                const incricaoEstadualFornecedor = tableData[5];
                const incricaoMunicipalFornecedor = tableData[6];
                const logradouroFornecedor = tableData[7];
                const numeroLogradouroFornecedor = tableData[8];
                const complementoLogradouroFornecedor = tableData[9];
                const bairroFornecedor = tableData[10];
                const cidadeFornecedor = tableData[11];
                const cepFornecedor = tableData[12];
                const UFFornecedor = tableData[13];
                if(codigoFornecedor !== undefined){
                    if(tipo === 'destinatario'){
                        inputFornecedorDestinatario.val(codigoFornecedor+ " | " +nomeFornecedor);
                        inputCNPJDestinatario.val(cnpjFornecedor);
                        inputIEDestinatario.val(incricaoEstadualFornecedor);
                        inputIMDestinatario.val(incricaoMunicipalFornecedor);
                        inputCepDestinatario.val(cepFornecedor);
                        inputEnderecoDestinatario.val(logradouroFornecedor);
                        inputNumEnderecoDestinatario.val(numeroLogradouroFornecedor);
                        inputComplementoDestinatario.val(complementoLogradouroFornecedor);
                        inputBairroDestinatario.val(bairroFornecedor);
                        inputCidadeDestinatario.val(cidadeFornecedor);
                        inputUFDestinatario.val(UFFornecedor);
                    }else if(tipo === 'transportadora'){
                        inputTransportadoraRemetente.val(codigoFornecedor+ " | " +nomeFornecedor);
                        inputCNPJTransportadora.val(cnpjFornecedor);
                        inputIETransportadora.val(incricaoEstadualFornecedor);
                    }
                    $('#modalFornecedores').modal('toggle');
                }
            });
        }
    }
    inputFornecedorDestinatario.on('keyup', (event) => {if(event.keyCode === 13) fornecedor(inputFornecedorDestinatario.val(), selectEmpresaRemetente.val(), 'destinatario')});
    FLUIGC.switcher.init(switchDiferenteEnderecoEntrega);
    if(parseInt(inputNumeroAtividade.val()) === 5 || parseInt(inputNumeroAtividade.val()) === 35 || parseInt(inputNumeroAtividade.val()) === 37 || parseInt(inputNumeroAtividade.val()) === 22 || parseInt(inputNumeroAtividade.val()) === 53 || parseInt(inputNumeroAtividade.val()) === 24) FLUIGC.switcher.isReadOnly(switchDiferenteEnderecoEntrega, true);
    FLUIGC.switcher.onChange(switchDiferenteEnderecoEntrega, function(event, state){ state == true ? endEntrega.prop("readonly", false) : endEntrega.prop("readonly", true).val("")});

    // FUNÇÕES LOCAL DA ENTREGA
    const getCep = (tipo, tmp) => {
        console.log(`CEP ${tmp} do ${tipo}`);
        const cep = tmp.replace(/\D/g,'');
        if(cep === ""){
            FLUIGC.toast({title: 'Erro: ',message: 'Não foi possível encontrar endereço do CEP!',type: 'danger'});
        }else{
            $.getJSON("https://viacep.com.br/ws/"+cep+"/json/?callback=?",function(dados){
                if(!("erro" in dados)){
                    const logradouro = dados['logradouro'];
                    const bairro = dados['bairro'];
                    const cidade = dados['localidade'];
                    const estado = dados['uf'];
                    if(tipo == "entrega"){
                        inputEnderecoEntrega.val(logradouro);
                        inputBairroEntrega.val(bairro);
                        inputCidadeEntrega.val(cidade);
                        inputUFEntrega.val(estado);
                    }
                }else{
                    console.log(dados);
                    FLUIGC.toast({title: 'Erro: ',message: 'Não foi possível encontrar endereço do CEP!',type: 'danger'});
                }
            });
        }
    }
    inputCepEntrega.on('change', () => getCep("entrega", inputCepEntrega.val()));

    // FUNÇÕES TRANSPORTADORA
    inputTransportadoraRemetente.on('keyup', (event) => {if(event.keyCode === 13) fornecedor(inputTransportadoraRemetente.val(), selectEmpresaRemetente.val(), 'transportadora')});

    // FUNÇÕES ITENS
    btnAdicionarItem.on('click', () => {
        let index = wdkAddChild("tableItens");
        MaskEvent.init();
        let tdItem = $("#tdItem___"+index);
        let tdCentroLogistico = $("#tdCentroLogistico___"+index);
        let tdMaterial = $("#tdMaterial___"+index);
        let tdUnidade = $("#tdUnidade___"+index);
        let tdQuantidade = $("#tdQuantidade___"+index);
        let tdValorUnitario = $("#tdValorUnitario___"+index);
        let tdValorTotal = $("#tdValorTotal___"+index);
        tdItem.val(index);
        centroLogistico(selectEmpresaRemetente.val(), tdCentroLogistico);
        const consultaMaterial = (centroLogistico, material) => {
            let textoMaterial = '';
            let numeroMaterial = '';
            if(isNaN(material)){
                textoMaterial = material;
            }else if(material.length === 7){
                numeroMaterial = material;
            }else{
                FLUIGC.toast({title: 'Erro: ',message: 'O código do material deve possuir 7 digitos!',type: 'danger'});
                return;
            }
            if(centroLogistico == ''){
                FLUIGC.toast({title: 'Erro: ',message: 'Favor informar centro logístico!',type: 'danger'});
                return;
            }
            $.ajax({
                type: 'POST',
                //url: 'https://fiori.gsinima.com.br/sap/bc/Z_FLUIG_REST/',
                url: "https://sap.gsinima.com.br/sap/bc/Z_FLUIG_REST/",
                datatype: 'json',
                crossDomain: true,
                data: 'C_MATERIAL={"WERKS":"'+centroLogistico+'","LGORT":"","MATNR":"'+numeroMaterial+'","TEXTO":"'+textoMaterial.toUpperCase()+'*"}',      
                beforeSend: (xhr) => {
                    xhr.setRequestHeader ("Authorization", "Basic Zmx1aWc6Rmx1aWdicmFzaWwyMDIxIQ==");
                },  
                success: (data) => {
                    console.log(data);
                    if (data == "ER001"){                
                        FLUIGC.toast({title: 'Erro: ',message: 'Material não encontrado!',type: 'danger'});
                        $('#modalConsultaMaterial').modal('toggle');             
                    }else{
                        const xmlDoc = $.parseXML(data);
                        const $xml = $(xmlDoc);
                        const $zfluig = $xml.find("TAB");
                        $zfluig.each(function(){
                            const xmlLength = $(this).find("ZMME_MATERIAIS_FLUIG").length;
                            for(let i = 0; i <= xmlLength; i++){
                                const codigoEmpresa = $(this).find("ZMME_MATERIAIS_FLUIG").eq(i).find('WERKS').text(); // Código empresa
                                const codigoDeposito = $(this).find("ZMME_MATERIAIS_FLUIG").eq(i).find('LGORT').text(); // Código depósito
                                const numeroMaterial = $(this).find("ZMME_MATERIAIS_FLUIG").eq(i).find('MATNR').text(); // Número material
                                const textoMaterial = $(this).find("ZMME_MATERIAIS_FLUIG").eq(i).find('MAKTX').text(); // Texto material
                                const tipoMedida = $(this).find("ZMME_MATERIAIS_FLUIG").eq(i).find('MEINS').text(); // Tipo de medida
                                const grupoMercadoria = $(this).find("ZMME_MATERIAIS_FLUIG").eq(i).find('MATKL').text(); // Tipo de medida
                                $("#tableModalConsultaMaterial").append( 
                                    '<tr class="fs-txt-center">' +
                                        '<td class="fs-no-margin fs-no-padding">' + codigoEmpresa + '</td>' +
                                        '<td class="fs-no-margin fs-no-padding">' + codigoDeposito + '</td>' +
                                        '<td class="fs-no-margin fs-no-padding">' + numeroMaterial.slice(11) + '</td>' +
                                        '<td class="fs-no-margin fs-no-padding">' + textoMaterial + '</td>' +
                                        '<td class="fs-no-margin fs-no-padding">' + tipoMedida + '</td>' +
                                        '<td class="fs-no-margin fs-no-padding">' + grupoMercadoria + '</td>' +
                                    '</tr>'
                                );
                            }                
                        });
                    }
                },
                error: () => {
                    FLUIGC.toast({title: 'Erro: ',message: 'Erro ao buscar os dados no SAP!',type: 'danger'});
                }
            });
            FLUIGC.modal({
                title: 'Material',
                content: 
                        `<table id="tableModalConsultaMaterial" class="table table-datatable table-bordered table-hover table-responsive scroll">
                            <thead>
                                <tr>
                                    <th class="fs-txt-center">Centro</th>
                                    <th class="fs-txt-center">Depósito</th>
                                    <th class="fs-txt-center">Código</th>
                                    <th class="fs-txt-center">Material</th>
                                    <th class="fs-txt-center">Medida</th>
                                    <th class="fs-txt-center">Grupo Mercadoria</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>`,
                id: 'modalConsultaMaterial',
                size: 'large'
            });
            $("#tableModalConsultaMaterial").on('click', 'tr', function(){
                const tableData = $(this).children("td").map(function(){ return $(this).text()}).get(); // cria um array que mapeia os dados
                const codigoEmpresa = tableData[0];
                const codigoDeposito = tableData[1];
                const numeroMaterial = tableData[2];
                const textoMaterial = tableData[3];
                const tipoMedida = tableData[4];
                const grupoMercadoria = tableData[5];
                if(numeroMaterial != undefined){
                    tdMaterial.val(`${numeroMaterial} | ${textoMaterial}`);
                    tdUnidade.val(tipoMedida);
                    $('#modalConsultaMaterial').modal('toggle');
                }
            });
        }
        tdMaterial.on('keyup', (event) => {
            if(event.keyCode === 13) {
                console.log(event.keyCode);
                consultaMaterial(tdCentroLogistico.val(), tdMaterial.val());
            };
        });
        const calcularValorTotalItem = () => {
            if(tdQuantidade.val() !== "" && tdValorUnitario.val() !== ""){
                let valorUnitario = tdValorUnitario.val().replace('.', '').replace(',', '.');    
                let tdQtd = tdQuantidade.val().replace('.', '').replace(',', '.')
                let valorTotalItem = parseFloat(tdQtd) * parseFloat(valorUnitario);
                tdValorTotal.val(valorTotalItem.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
                if(valores.find(item => item.id == index)){
                    valores.find(item => {
                        if(item.id == index) item.valor = valorTotalItem;
                    });
                }else{
                    valores.push({id: index,valor: valorTotalItem});
                }
                calcularValorTotalSolicitacao();
            }else{
                tdValorTotal.val('');
                valores = valores.filter((item) => item.id != index);
                calcularValorTotalSolicitacao();
            }
        }
        tdQuantidade.on('change', () => calcularValorTotalItem());
        tdValorUnitario.on('change', () => calcularValorTotalItem());
    });
    const centroLogistico = (empresa, element) => {
        console.log(`Centro Logístico\nEmpresa: ${empresa}`);
        $.ajax({
            type: 'POST',
            //url: "https://fiori.gsinima.com.br/sap/bc/Z_FLUIG_REST/",
            url: "https://sap.gsinima.com.br/sap/bc/Z_FLUIG_REST/",
            datatype: 'json',
            crossDomain: true,
            data: 'C_WERKS={"PLANT":"'+empresa+'","EKGRP":""}',
            beforeSend: (xhr) => {
                xhr.setRequestHeader ("Authorization", "Basic Zmx1aWc6Rmx1aWdicmFzaWwyMDIxIQ==");
            },
            success: (data) => {
                console.log(data);
                if(data == "ER001"){
                    FLUIGC.toast({title: 'Erro: ',message: 'Erro ao buscar os centros logístico!',type: 'danger'});
                }else{
                    const xmlDoc = $.parseXML(data);
                    const $xml = $(xmlDoc);
                    const $zfluig = $xml.find("TAB");
                    $zfluig.each(function(){
                        const xmlLength = $(this).find("ZMMS_RETORNO").length;
                        element.empty();
                        for(let i = 0; i < xmlLength; i++){
                            const codigo = $(this).find("ZMMS_RETORNO").eq(i).find('COD').text();
                            const descricao = $(this).find("ZMMS_RETORNO").eq(i).find('DES').text();
                            element.append('<option value="'+codigo+'">'+codigo+' | '+descricao+'</option>');
                        }
                    });
                }
            },
            error: () => {
                FLUIGC.toast({title: 'Erro: ',message: 'Erro ao buscar dados no SAP!',type: 'danger'});
            }
        });
    }
    const calcularValorTotalSolicitacao = () => {
        let valorTotalSolicitacao = null;
        if(valores.length >= 1){
            valores.forEach(({valor}) => {
                valorTotalSolicitacao += valor
            });
            inputValorTotalSolicitacao.val(valorTotalSolicitacao.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
        }else{
            inputValorTotalSolicitacao.val('');
        }
    };

    // FUNÇÕES FISCAL
    FLUIGC.switcher.init(switchAprovacaoFiscal);
    if( parseInt(inputNumeroAtividade.val()) === 0 || parseInt(inputNumeroAtividade.val()) === 4 || parseInt(inputNumeroAtividade.val()) === 11 || parseInt(inputNumeroAtividade.val()) === 35 || 
        parseInt(inputNumeroAtividade.val()) === 37 || parseInt(inputNumeroAtividade.val()) === 22 || parseInt(inputNumeroAtividade.val()) === 53 || parseInt(inputNumeroAtividade.val()) === 24){
            FLUIGC.switcher.isReadOnly("#switchAprovacaoFiscal", true);
        }
    btnAnexarNotaFiscal.on('click', () => {
        JSInterface.showCamera();
        $(window.top.document).find('#attachmentsStatusTab').trigger('click');
    });

    // FUNÇÕES DESPACHAR MERCADORIA
    FLUIGC.calendar(inputDataSaidaMercadoria, {pickDate: true, pickTime: false, sideBySide: true});
    btnAnexarDespacho.on('click', () => {
        JSInterface.showCamera();
        $(window.top.document).find('#attachmentsStatusTab').trigger('click');
    });

    // FUNÇÕES RENDERIZAÇÃO    
    if(parseInt(inputNumeroAtividade.val()) === 11){
        const dataRemessa = inputDataHoraRemessa.val().split(' ')[0];
        dataRemessa === inputDataSolicitacao.val() ? textareaJustificativaRemessa.prop('readonly', false) : textareaJustificativaRemessa.prop('readonly', true);

        if(switchDiferenteEnderecoEntrega.is(':checked')) endEntrega.prop("readonly", true);
        else endEntrega.prop("readonly", false);

        if(selectResponsavelTransporte.val() === "destinatario" || selectResponsavelTransporte.val() === "proprioRemetente") textareaObsTransportadora.prop('readonly', false);
        else textareaObsTransportadora.prop('readonly', true);
        if(selectResponsavelTransporte.val() === "remetente" || selectResponsavelTransporte.val() === "proprioRemetente") transportadora.prop('readonly', false);
        else transportadora.prop('readonly', true);

        // let valorTotalItem = $(".valorTotalItem");
        // let arrayTmp = [];
        // for(let i = 1; i < valorTotalItem.length; i++){
        //     let valorItem = valorTotalItem[i].defaultValue;
        //     console.log(valorItem);
        //     arrayTmp.push(valorItem);
        // }
        // console.log(arrayTmp);
        // for(let i = 0; i < arrayTmp.length; i++){
        //     let element = arrayTmp[i];
        //     console.log(element);
        //     console.log(typeof element);
        //     let valorItem = element.split(" ")[1];
        //     console.log(valorItem);
        //     let valorFormatado = valorItem.replace(".", "").replace(",", ".");
        //     console.log(valorFormatado);
        //     valores.push({id: i+1,valor: parseFloat(valorFormatado)});
        // }
        // console.log(valores);
    }
});