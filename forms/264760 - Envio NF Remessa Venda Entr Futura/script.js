$(document).ready( () => {
    // VARIÁVEIS DADOS SOLICITAÇÃO
    let inputDataSolicitacao = $("#inputDataSolicitacao");
    let inputSolicitante = $("#inputSolicitante");
    let selectEmpresa = $("#selectEmpresa");
    let selectNaturezaOperacao = $("#selectNaturezaOperacao");
    let inputFornecedor = $("#inputFornecedor");
    let inputDataDocumento = $("#inputDataDocumento");
    let inputDataEntrada = $("#inputDataEntrada");
    let inputNumeroNotaFiscal = $("#inputNumeroNotaFiscal");
    let inputValorNotaFiscal = $("#inputValorNotaFiscal");
    let inputNumeroPedido = $("#inputNumeroPedido");
    let inputAnexarArquivo = $("#inputAnexarArquivo");

    // VARIÁVEIS FISCAL
    let switchAprovacaoFiscal = $("#switchAprovacaoFiscal");
    let textareaJustificativaFiscal = $("#textareaJustificativaFiscal");
    let inputDataVencimento = $("#inputDataVencimento");
    let inputNumeroMigo = $("#inputNumeroMigo");
    let inputNumeroMiro = $("#inputNumeroMiro");
    let inputNumeroNotaFiscalWriter = $("#inputNumeroNotaFiscalWriter");

    // VARIÁVEIS CONTÁBIL
    let inputNumeroDocumentoContabil = $("#inputNumeroDocumentoContabil");

    // VARIÁVEIS FORMULÁRIO
    const inputCodigoProcesso = $("#inputCodigoProcesso");
    const inputSolicitacao = $("#inputSolicitacao");
    const inputAtividade = $("#inputAtividade");
    const inputUsuario = $("#inputUsuario");
    const inputUsuarioId = $("#inputUsuarioId");
    const inputEmailUsuario = $("#inputEmailUsuario");
    const inputLoginUsuario = $("#inputLoginUsuario");
    
    // FUNÇÕES SOLICITANTE
    const empresa = () => {
        console.log('Empresas!');
        $.ajax({
            type: 'POST',
            url: "https://fiori.gsinima.com.br/sap/bc/Z_FLUIG_REST/",
            datatype: 'json',
            crossDomain: true,
            data: 'C_PLANT',
            beforeSend: (xhr) => {
                xhr.setRequestHeader ("Authorization", "Basic Zmx1aWc6Rmx1aWdicmFzaWwyMDIxIQ==");
            },
            success: (data) => {
                console.log(data);
                if(data == "ER001"){                
                    FLUIGC.toast({title: 'Erro: ',message: 'Erro ao buscar as empresas!',type: 'danger'});           
                }else{
                    const xmlDoc = $.parseXML(data);
                    const $xml = $(xmlDoc);
                    const $zfluig = $xml.find("TAB");
                    $zfluig.each(function(){
                        const xmlLength = $(this).find("ZMMS_RETORNO").length;
                        selectEmpresa.append('<option value=""></option>');
                        for(let i = 0; i < xmlLength; i++){
                            const codigo = $(this).find("ZMMS_RETORNO").eq(i).find('COD').text();
                            const descricao = $(this).find("ZMMS_RETORNO").eq(i).find('DES').text();
                            if(codigo != 'BR01') selectEmpresa.append('<option value="'+codigo+'">'+codigo+' | '+descricao+'</option>');
                        }
                    });
                }
            },
            error: () => {
                FLUIGC.toast({title: 'Erro: ',message: 'Erro ao buscar dados no SAP!',type: 'danger'});
            }
        });
    }
    if(parseInt(inputAtividade.val()) === 0 || parseInt(inputAtividade.val()) === 4 || parseInt(inputAtividade.val()) === 6) empresa();
    const fornecedor = (fornecedor, empresa) => {
        if(fornecedor == "" || empresa == ""){
            FLUIGC.toast({title: 'Erro: ',message: 'É necessário informar empresa contratante ou fornecedor!',type: 'danger'});
        }else{
            FLUIGC.modal({
                title: 'Fornecedores',
                content: 
                        `<table id="tableModalFornecedor" class="table table-datatable table-bordered table-hover table-responsive scroll">
                            <thead>
                                <tr>
                                    <th class="fs-txt-center fs-no-margin fs-no-padding">CENTRO LOGÍSTICO</th>
                                    <th class="fs-txt-center fs-no-margin fs-no-padding">CÓDIGO</th>
                                    <th class="fs-txt-center fs-no-margin fs-no-padding">NOME</th>
                                    <th class="fs-txt-center fs-no-margin fs-no-padding">CPF</th>
                                    <th class="fs-txt-center fs-no-margin fs-no-padding">CNPJ</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>`,
                id: 'modalFornecedores',
                size: 'large'
            })
            let nomeRazaoSocial = '';
            let cpfCNPJ = '';
            let codigo = '';
            if(isNaN(fornecedor)){
                nomeRazaoSocial = fornecedor.toUpperCase()+'*';
            }else if(fornecedor.length == 14 || fornecedor.length == 11){
                cpfCNPJ = fornecedor;
            }else if(fornecedor.length == 6){
                codigo = fornecedor;
            }
            console.log(`Nome/Razão Social: ${nomeRazaoSocial}\nCPF/CNPJ: ${cpfCNPJ}\nCódigo: ${codigo}\nEmpresa: ${empresa}`);
            $.ajax({
                type: 'POST',
                url: "https://fiori.gsinima.com.br/sap/bc/Z_FLUIG_REST/",
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
                                $('#tableModalFornecedor').append(
                                    '<tr class="fs-txt-center">'+
                                        '<td class="fs-no-margin fs-no-padding">'+centroLogistico+'</td>'+
                                        '<td class="fs-no-margin fs-no-padding">'+codigoFornecedor+'</td>'+
                                        '<td class="fs-no-margin fs-no-padding">'+descricaoFornecedor+'</td>'+
                                        '<td class="fs-no-margin fs-no-padding">'+cpfFornecedor+'</td>'+
                                        '<td class="fs-no-margin fs-no-padding">'+cnpjFornecedor+'</td>'+
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
                if(codigoFornecedor != undefined){
                    inputFornecedor.val(codigoFornecedor+ " | " +nomeFornecedor);
                    $('#modalFornecedores').modal('toggle');
                }
            });
        }
    }
    inputFornecedor.on('keyup', (event) => {if(event.keyCode === 13) fornecedor(inputFornecedor.val(), selectEmpresa.val())});
    FLUIGC.calendar('.dateFluig');
    inputAnexarArquivo.on('click',()=> {
        JSInterface.showCamera();
        $(window.top.document).find('#attachmentsStatusTab').trigger('click');
    });

    // FUNÇÕES FISCAL
    FLUIGC.switcher.init(switchAprovacaoFiscal);
    
    // FUNÇÕES RENDERIZAÇÃO
    if(parseInt(inputAtividade.val()) === 6 || parseInt(inputAtividade.val()) === 24 || parseInt(inputAtividade.val()) === 5 || parseInt(inputAtividade.val()) === 26) FLUIGC.switcher.isReadOnly(switchAprovacaoFiscal, true);
});