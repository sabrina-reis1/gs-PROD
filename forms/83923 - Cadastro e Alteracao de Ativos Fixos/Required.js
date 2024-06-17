function camposObrigatorios() {
     $(".required").each(function(index, value){
               if($(this).parent().find("label.control-label:first").hasClass("asterisk")){          
          }else{         
               $(this).parent().find("label.control-label:first").append('<span class="text-danger"> *</span>').addClass('asterisk');
               addErro($(this));
          }
     });
}
function addErro(campo) {
     campo.parent().removeClass('has-success').addClass('has-error');
}
function addSuccess(campo) {
     campo.parent().removeClass('has-error').addClass('has-success');
}
function CleanAll(){
     //Limpa Campos
     $("#selectAquisicaoTipo").val('');
     $("#selectBaixaTipo").val('');
     $("#inputDoacaoDescricaoAtivo").val('');
     $("#inputVendaDescricaoAtivo").val('');
     $("#inputTransfPatrimonio").val('');
     $("#inputTransfMotivoTransf").val('');
     $("#inputTransfDeCentroCusto").val('');
     $("#inputTransfParaCentroCusto").val('');
     $("#inputTransfDeCentroLucro").val('');
     $("#inputTransfParaCentroLucro").val('');
     $("#inputTransfDeClassesAtivos").val('');
     $("#inputTransfParaClassesAtivos").val('');
     $("#inputTransfDeEmpresa").val('');
     $("#inputTransfParaEmpresa").val('');
     $("#inputTransfDeLocalizacao").val('');
     $("#inputTransfParaLocalizacao").val('');
     $("#inputTransfDeUsuario").val('');
     $("#inputTransfParaUsuario").val('');
     $("#inputDoacaoDataAquisicao").val('');
     $("#inputDoacaoCPFCNPJ").val('');
     $("#inputVendaDataAquisicao").val('');
     $("#inputVendaValorVenda").val('');
     $("#inputVendaCPFCNPJ").val('');
     $("#inputBaixaDataAquisicao").val('');
     $("#inputBaixaFornecedor").val('');
     $("#inputBaixaDescricaoAtivo").val('');   
     $("#inputAquisicaoQtd").val('');
     $("#inputAquisicaoCodigoItem").val('');
     $("#inputAquisicaoLocalizacao").val('');
     $("#inputAquisicaoCentroLogistico").val('');
     $("#inputAquisicaoDescricaoAtivo").val('');
     $("#inputAquisicaoDescricaoAtivo").val('');    
     $("#inputAquisicaoUsuario").val('');
     $("#inputAquisicaoCentroLucro").val('');
}

function isNotB001andB009(){
     var operacao = $("#selectOperacao").val();
     if(operacao == "Novo Ativo"){        
          CleanAll();        
          //Remove Required para Transferencia
          $("#inputTransfDeEmpresa").removeClass('required');
          $("#inputTransfParaEmpresa").removeClass('required');
          $("#inputTransfDeLocalizacao").removeClass('required');
          $("#inputTransfParaLocalizacao").removeClass('required');
          $("#inputTransfDeUsuario").removeClass('required');
          $("#inputTransfParaUsuario").removeClass('required');
          $("#inputTransfPatrimonio").removeClass('required');
          $("#inputTransfDeCentroCusto").removeClass('required');
          $("#inputTransfParaCentroCusto").removeClass('required');
          $("#inputTransfMotivoTransf").removeClass('required');
          $("#inputTransfDescAtivo").removeClass('required');
          //Remove Required para Doacao
          $("#inputDoacaoDataAquisicao").removeClass('required');
          $("#inputDoacaoCPFCNPJ").removeClass('required');
          $("#inputDoacaoPlacaPatrimonio").removeClass('required');
          //Remove Required para Venda
          $("#inputVendaDataAquisicao").removeClass('required');
          $("#inputVendaValorVenda").removeClass('required');
          $("#inputVendaCPFCNPJ").removeClass('required');
          $("#inputVendaDescricaoAtivo").removeClass('required');
          $("#inputVendaPlacaPatrimonio").removeClass('required');
          //Remove Required para Baixa
          $("#inputBaixaDataAquisicao").removeClass('required');
          $("#inputBaixaFornecedor").removeClass('required');
          $("#inputBaixaDescricaoAtivo").removeClass('required');
          $("#selectBaixaTipo").removeClass('required');
          $("#inputBaixaLocalizacao").removeClass('required');
          //Required para Nova Aquisicao      
          $("#inputAquisicaoQtd").addClass('required');
          $("#inputAquisicaoCodigoAtivo").addClass('required');
          $("#inputAquisicaoCodigoItem").addClass('required');
          $("#inputAquisicaoLocalizacao").addClass('required');
          $("#inputAquisicaoCentroLogistico").addClass('required');
          $("#inputAquisicaoUsuario").addClass('required');
          $("#inputAquisicaoDescricaoAtivo").addClass('required');          
          $("#inputAquisicaoCodItemPrinc").addClass('required');
          $("#selectAquisicaoTipo").addClass('required');
          $("#inputAquisicaoCentroLucro").addClass('required');
          $("#inputAquisicaoCentroCusto").removeClass('required');
          $("#inputAquisicaoCentroCusto").parent().find('span').remove();
          $("#inputAquisicaoCentroCusto").parent().removeClass('has-error');
          camposObrigatorios();
     }else if(operacao == "Novo Ativo Baixa"){      
          CleanAll();
          //Remove Required para Transferencia
          $("#inputTransfDeEmpresa").removeClass('required');
          $("#inputTransfParaEmpresa").removeClass('required');
          $("#inputTransfDeLocalizacao").removeClass('required');
          $("#inputTransfParaLocalizacao").removeClass('required');
          $("#inputTransfDeUsuario").removeClass('required');
          $("#inputTransfParaUsuario").removeClass('required');
          $("#inputTransfPatrimonio").removeClass('required');
          $("#inputTransfDeCentroCusto").removeClass('required');
          $("#inputTransfParaCentroCusto").removeClass('required');
          $("#inputTransfMotivoTransf").removeClass('required');
          $("#inputTransfDescAtivo").removeClass('required');
          //Remove Required para Doacao
          $("#inputDoacaoDataAquisicao").removeClass('required');
          $("#inputDoacaoCPFCNPJ").removeClass('required');
          $("#inputDoacaoPlacaPatrimonio").removeClass('required');
          //Remove Required para Venda
          $("#inputVendaDataAquisicao").removeClass('required');
          $("#inputVendaValorVenda").removeClass('required');
          $("#inputVendaCPFCNPJ").removeClass('required');
          $("#inputVendaDescricaoAtivo").removeClass('required');
          $("#inputVendaPlacaPatrimonio").removeClass('required');
          //Required para Nova Aquisicao
          $("#inputAquisicaoQtd").addClass('required');
          $("#inputAquisicaoCodigoAtivo").addClass('required');
          $("#inputAquisicaoCodigoItem").addClass('required');
          $("#inputAquisicaoLocalizacao").addClass('required');
          $("#inputAquisicaoCentroLogistico").addClass('required');
          $("#inputAquisicaoUsuario").addClass('required');
          $("#inputAquisicaoDescricaoAtivo").addClass('required');          
          $("#inputAquisicaoCodItemPrinc").addClass('required');
          $("#selectAquisicaoTipo").addClass('required');
          $("#inputAquisicaoCentroLucro").addClass('required');
          $("#inputAquisicaoCentroCusto").removeClass('required');
          $("#inputAquisicaoCentroCusto").parent().find('span').remove();
          $("#inputAquisicaoCentroCusto").parent().removeClass('has-error');          
          //Required para Baixa
          $("#inputBaixaDataAquisicao").removeClass('required');
          $("#inputBaixaFornecedor").removeClass('required');
          $("#inputBaixaDescricaoAtivo").addClass('required');
          $("#selectBaixaTipo").addClass('required');
          $("#inputBaixaLocalizacao").addClass('required');
          camposObrigatorios();
     }else if(operacao == "Baixa"){
          CleanAll();
          //Remove Required para Transferencia
          $("#inputTransfDeEmpresa").removeClass('required');
          $("#inputTransfParaEmpresa").removeClass('required');
          $("#inputTransfDeLocalizacao").removeClass('required');
          $("#inputTransfParaLocalizacao").removeClass('required');
          $("#inputTransfDeUsuario").removeClass('required');
          $("#inputTransfParaUsuario").removeClass('required');
          $("#inputTransfPatrimonio").removeClass('required');
          $("#inputTransfDeCentroCusto").removeClass('required');
          $("#inputTransfParaCentroCusto").removeClass('required');
          $("#inputTransfMotivoTransf").removeClass('required');
          $("#inputTransfDescAtivo").removeClass('required');
          //Remove Required para Doacao
          $("#inputDoacaoDataAquisicao").removeClass('required');
          $("#inputDoacaoCPFCNPJ").removeClass('required');
          $("#inputDoacaoPlacaPatrimonio").removeClass('required');
          //Remove Required para Venda
          $("#inputVendaDataAquisicao").removeClass('required');
          $("#inputVendaValorVenda").removeClass('required');
          $("#inputVendaCPFCNPJ").removeClass('required');
          $("#inputVendaDescricaoAtivo").removeClass('required');
          $("#inputVendaPlacaPatrimonio").removeClass('required');
          //Required para Baixa
          $("#inputBaixaDataAquisicao").removeClass('required');
          $("#inputBaixaFornecedor").removeClass('required');
          $("#inputBaixaDescricaoAtivo").addClass('required');
          $("#selectBaixaTipo").addClass('required');
          $("#inputBaixaLocalizacao").addClass('required');
          //Remove Required para Nova Aquisicao
          $("#inputAquisicaoQtd").removeClass('required');
          $("#inputAquisicaoCodigoItem").removeClass('required');
          $("#inputAquisicaoLocalizacao").removeClass('required');
          $("#inputAquisicaoCentroLogistico").removeClass('required');
          $("#inputAquisicaoUsuario").removeClass('required');
          $("#inputAquisicaoDescricaoAtivo").removeClass('required');          
          $("#inputAquisicaoCodItemPrinc").removeClass('required');
          $("#selectAquisicaoTipo").removeClass('required');
          camposObrigatorios();
     }else if(operacao == "Transferencia"){
          CleanAll();
          //Remove Required para Venda
          $("#inputVendaDataAquisicao").removeClass('required');
          $("#inputVendaValorVenda").removeClass('required');
          $("#inputVendaCPFCNPJ").removeClass('required');
          $("#inputVendaDescricaoAtivo").removeClass('required');
          $("#inputVendaPlacaPatrimonio").removeClass('required');
          //Remove Required para Doacao
          $("#inputDoacaoDataAquisicao").removeClass('required');
          $("#inputDoacaoCPFCNPJ").removeClass('required');
          $("#inputDoacaoPlacaPatrimonio").removeClass('required');
          //Remove Required para Nova Aquisicao
          $("#inputAquisicaoQtd").removeClass('required');
          $("#inputAquisicaoCodigoItem").removeClass('required');
          $("#inputAquisicaoLocalizacao").removeClass('required');
          $("#inputAquisicaoCentroLogistico").removeClass('required');
          $("#inputAquisicaoUsuario").removeClass('required');
          $("#inputAquisicaoDescricaoAtivo").removeClass('required');          
          $("#inputAquisicaoCodItemPrinc").removeClass('required');
          $("#selectAquisicaoTipo").removeClass('required');
          //Remove Required para Baixa
          $("#inputBaixaDataAquisicao").removeClass('required');
          $("#inputBaixaFornecedor").removeClass('required');
          $("#inputBaixaDescricaoAtivo").removeClass('required');
          $("#selectBaixaTipo").removeClass('required');
          $("#inputBaixaLocalizacao").removeClass('required');
          //Required para Transferencia
          $("#inputTransfDeEmpresa").addClass('required');
          $("#inputTransfParaEmpresa").addClass('required');
          $("#inputTransfDeLocalizacao").addClass('required');
          $("#inputTransfParaLocalizacao").addClass('required');
          $("#inputTransfDeUsuario").addClass('required');
          $("#inputTransfParaUsuario").addClass('required');
          $("#inputTransfPatrimonio").removeClass('required');
          $("#inputTransfDeCentroCusto").removeClass('required');
          $("#inputTransfParaCentroCusto").removeClass('required');
          $("#inputTransfMotivoTransf").addClass('required');
          $("#inputTransfDescAtivo").addClass('required');
          $("#inputDataTransferencia").addClass('required');
          camposObrigatorios();
     }else if(operacao == "Doacao"){
          CleanAll();
          //Remove Required para Nova Aquisicao
          $("#inputAquisicaoQtd").removeClass('required');
          $("#inputAquisicaoCodigoItem").removeClass('required');
          $("#inputAquisicaoLocalizacao").removeClass('required');
          $("#inputAquisicaoCentroLogistico").removeClass('required');
          $("#inputAquisicaoUsuario").removeClass('required');
          $("#inputAquisicaoDescricaoAtivo").removeClass('required');          
          $("#inputAquisicaoCodItemPrinc").removeClass('required');
          $("#selectAquisicaoTipo").removeClass('required');
          //Remove Required para Baixa
          $("#inputBaixaDataAquisicao").removeClass('required');
          $("#inputBaixaFornecedor").removeClass('required');
          $("#inputBaixaDescricaoAtivo").removeClass('required');
          $("#selectBaixaTipo").removeClass('required');
          $("#inputBaixaLocalizacao").removeClass('required');
          //Remove Required para Transferencia
          $("#inputTransfDeEmpresa").removeClass('required');
          $("#inputTransfParaEmpresa").removeClass('required');
          $("#inputTransfDeLocalizacao").removeClass('required');
          $("#inputTransfParaLocalizacao").removeClass('required');
          $("#inputTransfDeUsuario").removeClass('required');
          $("#inputTransfParaUsuario").removeClass('required');
          $("#inputTransfPatrimonio").removeClass('required');
          $("#inputTransfDeCentroCusto").removeClass('required');
          $("#inputTransfParaCentroCusto").removeClass('required');
          $("#inputTransfMotivoTransf").removeClass('required');
          $("#inputTransfDescAtivo").removeClass('required');

          //Remove Required para Venda
          $("#inputVendaDataAquisicao").removeClass('required');
          $("#inputVendaValorVenda").removeClass('required');
          $("#inputVendaCPFCNPJ").removeClass('required');
          $("#inputVendaDescricaoAtivo").removeClass('required');
          $("#inputVendaPlacaPatrimonio").removeClass('required');
          //Required para Doacao
          $("#inputDoacaoDataAquisicao").removeClass('required');
          $("#inputDoacaoCPFCNPJ").addClass('required');
          $("#inputDoacaoDescricaoAtivo").addClass('required');  
          $("#inputDoacaoPlacaPatrimonio").removeClass('required');
          $("#inputDoacaoDataDoacao").addClass('required');
          camposObrigatorios();
     }else if(operacao == "Venda"){
          CleanAll();
          //Remove Required para Nova Aquisicao
          $("#inputAquisicaoQtd").removeClass('required');
          $("#inputAquisicaoCodigoItem").removeClass('required');
          $("#inputAquisicaoLocalizacao").removeClass('required');
          $("#inputAquisicaoCentroLogistico").removeClass('required');
          $("#inputAquisicaoUsuario").removeClass('required');
          $("#inputAquisicaoDescricaoAtivo").removeClass('required');          
          $("#inputAquisicaoCodItemPrinc").removeClass('required');
          $("#selectAquisicaoTipo").removeClass('required');
          //Remove Required para Baixa
          $("#inputBaixaDataAquisicao").removeClass('required');
          $("#inputBaixaFornecedor").removeClass('required');
          $("#inputBaixaDescricaoAtivo").removeClass('required');
          $("#selectBaixaTipo").removeClass('required');
          $("#inputBaixaLocalizacao").removeClass('required');
          //Remove Required para Transferencia
          $("#inputTransfDeEmpresa").removeClass('required');
          $("#inputTransfParaEmpresa").removeClass('required');
          $("#inputTransfDeLocalizacao").removeClass('required');
          $("#inputTransfParaLocalizacao").removeClass('required');
          $("#inputTransfDeUsuario").removeClass('required');
          $("#inputTransfParaUsuario").removeClass('required');
          $("#inputTransfPatrimonio").removeClass('required');
          $("#inputTransfDeCentroCusto").removeClass('required');
          $("#inputTransfParaCentroCusto").removeClass('required');
          $("#inputTransfMotivoTransf").removeClass('required');
          $("#inputTransfDescAtivo").removeClass('required');
          //Remove Required para Doacao
          $("#inputDoacaoDataAquisicao").removeClass('required');
          $("#inputDoacaoCPFCNPJ").removeClass('required');
          $("#inputDoacaoPlacaPatrimonio").removeClass('required');
          //Required para Venda
          $("#inputVendaDataAquisicao").removeClass('required');
          $("#inputVendaValorVenda").addClass('required');
          $("#inputVendaCPFCNPJ").addClass('required');
          $("#inputVendaDescricaoAtivo").addClass('required');
          $("#inputVendaPlacaPatrimonio").removeClass('required');
          $("#inputVendaDataVenda").addClass('required');
          camposObrigatorios();
     }

     //Script para mostrar campos obrigatórios dinamicamente
     if ($(".required").val() == '') {
          addErro($(".required"));
     }else{
          addSuccess($(".required"));
     }
     $('.required').change(function(){
          $('.required').each(function(){
               var requiredValue = $(this).val();
               if (requiredValue == ''){        
                    addErro($(this));
               }else{
                    addSuccess($(this));        
               }
          });
     });
}

function isB009(){
     var operacao = $("#selectOperacao").val();     
     if(operacao == "Novo Ativo"){
          CleanAll();
          //Remove Required para Transferencia
          $("#inputTransfDeEmpresa").removeClass('required');
          $("#inputTransfParaEmpresa").removeClass('required');
          $("#inputTransfDeLocalizacao").removeClass('required');
          $("#inputTransfParaLocalizacao").removeClass('required');
          $("#inputTransfDeUsuario").removeClass('required');
          $("#inputTransfParaUsuario").removeClass('required'); 
          $("#inputTransfPatrimonio").removeClass('required');
          $("#inputTransfDeCentroLucro").removeClass('required');
          $("#inputTransfParaCentroLucro").removeClass('required');
          $("#inputTransfDeCentroCusto").removeClass('required');
          $("#inputTransfParaCentroCusto").removeClass('required');
          $("#inputTransfMotivoTransf").removeClass('required');
          $("#inputTransfDescAtivo").removeClass('required');
          //Remove Required para Doacao
          $("#inputDoacaoDataAquisicao").removeClass('required');
          $("#inputDoacaoCPFCNPJ").removeClass('required');
          $("#inputDoacaoPlacaPatrimonio").removeClass('required');
          //Remove Required para Venda
          $("#inputVendaDataAquisicao").removeClass('required');
          $("#inputVendaValorVenda").removeClass('required');
          $("#inputVendaCPFCNPJ").removeClass('required');
          $("#inputVendaDescricaoAtivo").removeClass('required');
          $("#inputVendaPlacaPatrimonio").removeClass('required');
          //Remove Required para Baixa
          $("#inputBaixaDataAquisicao").removeClass('required');
          $("#inputBaixaFornecedor").removeClass('required');
          $("#inputBaixaDescricaoAtivo").removeClass('required');
          $("#inputBaixaPlacaPatrimonio").removeClass('required');
          $("#selectBaixaTipo").removeClass('required');
          $("#inputBaixaLocalizacao").removeClass('required');
          //Required para Nova Aquisicao      
          $("#inputAquisicaoQtd").addClass('required');
          $("#inputAquisicaoCentroCusto").addClass('required');
          $("#inputAquisicaoCodigoAtivo").addClass('required');
          $("#inputAquisicaoCodigoItem").addClass('required');
          $("#inputAquisicaoLocalizacao").addClass('required');
          $("#inputAquisicaoCentroLogistico").addClass('required');
          $("#inputAquisicaoUsuario").addClass('required');
          $("#inputAquisicaoDescricaoAtivo").addClass('required');          
          $("#inputAquisicaoCentroLucro").addClass('required');
          $("#inputAquisicaoCodItemPrinc").addClass('required');
          $("#selectAquisicaoTipo").addClass('required');
          camposObrigatorios();
     }else if(operacao == "Novo Ativo Baixa"){      
          CleanAll();
          //Remove Required para Transferencia
          $("#inputTransfDeEmpresa").removeClass('required');
          $("#inputTransfParaEmpresa").removeClass('required');
          $("#inputTransfDeLocalizacao").removeClass('required');
          $("#inputTransfParaLocalizacao").removeClass('required');
          $("#inputTransfDeUsuario").removeClass('required');
          $("#inputTransfParaUsuario").removeClass('required');
          $("#inputTransfPatrimonio").removeClass('required');
          $("#inputTransfDeCentroLucro").removeClass('required');
          $("#inputTransfParaCentroLucro").removeClass('required');
          $("#inputTransfDeCentroCusto").removeClass('required');
          $("#inputTransfParaCentroCusto").removeClass('required');
          $("#inputTransfMotivoTransf").removeClass('required');
          $("#inputTransfDescAtivo").removeClass('required');
          //Remove Required para Doacao
          $("#inputDoacaoDataAquisicao").removeClass('required');
          $("#inputDoacaoCPFCNPJ").removeClass('required');
          $("#inputDoacaoPlacaPatrimonio").removeClass('required');
          //Remove Required para Venda
          $("#inputVendaDataAquisicao").removeClass('required');
          $("#inputVendaValorVenda").removeClass('required');
          $("#inputVendaCPFCNPJ").removeClass('required');
          $("#inputVendaDescricaoAtivo").removeClass('required');
          $("#inputVendaPlacaPatrimonio").removeClass('required');
          //Required para Nova Aquisicao
          $("#inputAquisicaoQtd").addClass('required');
          $("#inputAquisicaoCentroCusto").addClass('required');
          $("#inputAquisicaoCodigoAtivo").addClass('required');
          $("#inputAquisicaoCodigoItem").addClass('required');
          $("#inputAquisicaoLocalizacao").addClass('required');
          $("#inputAquisicaoCentroLogistico").addClass('required');
          $("#inputAquisicaoUsuario").addClass('required');
          $("#inputAquisicaoDescricaoAtivo").addClass('required');          
          $("#inputAquisicaoCentroLucro").addClass('required');
          $("#inputAquisicaoCodItemPrinc").addClass('required');
          $("#selectAquisicaoTipo").addClass('required');       
          //Required para Baixa
          $("#inputBaixaDataAquisicao").removeClass('required');
          $("#inputBaixaFornecedor").removeClass('required');
          $("#inputBaixaDescricaoAtivo").addClass('required');
          $("#inputBaixaPlacaPatrimonio").addClass('required');
          $("#selectBaixaTipo").addClass('required');
          $("#inputBaixaLocalizacao").addClass('required');
          camposObrigatorios();
     }else if(operacao == "Baixa"){
          CleanAll();
          //Remove Required para Transferencia
          $("#inputTransfDeEmpresa").removeClass('required');
          $("#inputTransfParaEmpresa").removeClass('required');
          $("#inputTransfDeLocalizacao").removeClass('required');
          $("#inputTransfParaLocalizacao").removeClass('required');
          $("#inputTransfDeUsuario").removeClass('required');
          $("#inputTransfParaUsuario").removeClass('required');
          $("#inputTransfPatrimonio").removeClass('required');
          $("#inputTransfDeCentroLucro").removeClass('required');
          $("#inputTransfParaCentroLucro").removeClass('required');
          $("#inputTransfDeCentroCusto").removeClass('required');
          $("#inputTransfParaCentroCusto").removeClass('required');
          $("#inputTransfMotivoTransf").removeClass('required');
          $("#inputTransfDescAtivo").removeClass('required');
          //Remove Required para Doacao
          $("#inputDoacaoDataAquisicao").removeClass('required');
          $("#inputDoacaoCPFCNPJ").removeClass('required');
          $("#inputDoacaoPlacaPatrimonio").removeClass('required');
          //Remove Required para Venda
          $("#inputVendaDataAquisicao").removeClass('required');
          $("#inputVendaValorVenda").removeClass('required');
          $("#inputVendaCPFCNPJ").removeClass('required');
          $("#inputVendaDescricaoAtivo").removeClass('required');
          $("#inputVendaPlacaPatrimonio").removeClass('required');
          //Required para Baixa
          $("#inputBaixaDataAquisicao").removeClass('required');
          $("#inputBaixaFornecedor").removeClass('required');
          $("#inputBaixaDescricaoAtivo").addClass('required');
          $("#inputBaixaPlacaPatrimonio").addClass('required');
          $("#selectBaixaTipo").addClass('required');
          $("#inputBaixaLocalizacao").addClass('required');
          //Remove Required para Nova Aquisicao
          $("#inputAquisicaoQtd").removeClass('required');
          $("#inputAquisicaoCentroCusto").removeClass('required');
          $("#inputAquisicaoCodigoItem").removeClass('required');
          $("#inputAquisicaoLocalizacao").removeClass('required');
          $("#inputAquisicaoCentroLogistico").removeClass('required');
          $("#inputAquisicaoUsuario").removeClass('required');
          $("#inputAquisicaoDescricaoAtivo").removeClass('required');          
          $("#inputAquisicaoCentroLucro").removeClass('required');
          $("#inputAquisicaoCodItemPrinc").removeClass('required');
          $("#selectAquisicaoTipo").removeClass('required');
          camposObrigatorios();
     }else if(operacao == "Transferencia"){
          CleanAll();
          //Remove Required para Venda
          $("#inputVendaDataAquisicao").removeClass('required');
          $("#inputVendaValorVenda").removeClass('required');
          $("#inputVendaCPFCNPJ").removeClass('required');
          $("#inputVendaDescricaoAtivo").removeClass('required');
          $("#inputVendaPlacaPatrimonio").removeClass('required');
          //Remove Required para Doacao
          $("#inputDoacaoDataAquisicao").removeClass('required');
          $("#inputDoacaoCPFCNPJ").removeClass('required');
          $("#inputDoacaoPlacaPatrimonio").removeClass('required');
          //Remove Required para Nova Aquisicao
          $("#inputAquisicaoQtd").removeClass('required');
          $("#inputAquisicaoCentroCusto").removeClass('required');
          $("#inputAquisicaoCodigoItem").removeClass('required');
          $("#inputAquisicaoLocalizacao").removeClass('required');
          $("#inputAquisicaoCentroLogistico").removeClass('required');
          $("#inputAquisicaoUsuario").removeClass('required');
          $("#inputAquisicaoDescricaoAtivo").removeClass('required');          
          $("#inputAquisicaoCentroLucro").removeClass('required');
          $("#inputAquisicaoCodItemPrinc").removeClass('required');
          $("#selectAquisicaoTipo").removeClass('required');
          //Remove Required para Baixa
          $("#inputBaixaDataAquisicao").removeClass('required');
          $("#inputBaixaFornecedor").removeClass('required');
          $("#inputBaixaDescricaoAtivo").removeClass('required');
          $("#inputBaixaPlacaPatrimonio").removeClass('required');
          $("#selectBaixaTipo").removeClass('required');
          $("#inputBaixaLocalizacao").removeClass('required');
          //Required para Transferencia
          $("#inputTransfDeEmpresa").addClass('required');
          $("#inputTransfParaEmpresa").addClass('required');
          $("#inputTransfDeLocalizacao").addClass('required');
          $("#inputTransfParaLocalizacao").addClass('required');
          $("#inputTransfDeUsuario").addClass('required');
          $("#inputTransfParaUsuario").addClass('required');
          $("#inputTransfPatrimonio").addClass('required');
          $("#inputTransfDeCentroLucro").addClass('required');
          $("#inputTransfParaCentroLucro").addClass('required');
          $("#inputTransfDeCentroCusto").addClass('required');
          $("#inputTransfParaCentroCusto").addClass('required');
          $("#inputTransfMotivoTransf").addClass('required');
          $("#inputTransfDescAtivo").addClass('required');
          $("#inputDataTransferencia").addClass('required');
          camposObrigatorios();
     }else if(operacao == "Doacao"){
          CleanAll();
          //Remove Required para Nova Aquisicao
          $("#inputAquisicaoQtd").removeClass('required');
          $("#inputAquisicaoCentroCusto").removeClass('required');
          $("#inputAquisicaoCodigoItem").removeClass('required');
          $("#inputAquisicaoLocalizacao").removeClass('required');
          $("#inputAquisicaoCentroLogistico").removeClass('required');
          $("#inputAquisicaoUsuario").removeClass('required');
          $("#inputAquisicaoDescricaoAtivo").removeClass('required');          
          $("#inputAquisicaoCentroLucro").removeClass('required');
          $("#inputAquisicaoCodItemPrinc").removeClass('required');
          $("#selectAquisicaoTipo").removeClass('required');
          //Remove Required para Baixa
          $("#inputBaixaDataAquisicao").removeClass('required');
          $("#inputBaixaFornecedor").removeClass('required');
          $("#inputBaixaDescricaoAtivo").removeClass('required');
          $("#inputBaixaPlacaPatrimonio").removeClass('required');
          $("#selectBaixaTipo").removeClass('required');
          $("#inputBaixaLocalizacao").removeClass('required');
          //Remove Required para Transferencia
          $("#inputTransfDeEmpresa").removeClass('required');
          $("#inputTransfParaEmpresa").removeClass('required');
          $("#inputTransfDeLocalizacao").removeClass('required');
          $("#inputTransfParaLocalizacao").removeClass('required');
          $("#inputTransfDeUsuario").removeClass('required');
          $("#inputTransfParaUsuario").removeClass('required');
          $("#inputTransfPatrimonio").removeClass('required');
          $("#inputTransfDeCentroLucro").removeClass('required');
          $("#inputTransfParaCentroLucro").removeClass('required');
          $("#inputTransfDeCentroCusto").removeClass('required');
          $("#inputTransfParaCentroCusto").removeClass('required');
          $("#inputTransfMotivoTransf").removeClass('required');
          $("#inputTransfDescAtivo").removeClass('required');
          //Remove Required para Venda
          $("#inputVendaDataAquisicao").removeClass('required');
          $("#inputVendaValorVenda").removeClass('required');
          $("#inputVendaCPFCNPJ").removeClass('required');
          $("#inputVendaDescricaoAtivo").removeClass('required');
          $("#inputVendaPlacaPatrimonio").removeClass('required');
          //Required para Doacao
          $("#inputDoacaoDataAquisicao").removeClass('required');
          $("#inputDoacaoCPFCNPJ").addClass('required');
          $("#inputDoacaoDescricaoAtivo").addClass('required');
          $("#inputDoacaoPlacaPatrimonio").addClass('required');
          $("#inputDoacaoDataDoacao").addClass('required');
          camposObrigatorios();
     }else if(operacao == "Venda"){
          CleanAll();
          //Remove Required para Nova Aquisicao
          $("#inputAquisicaoQtd").removeClass('required');
          $("#inputAquisicaoCodigoItem").removeClass('required');
          $("#inputAquisicaoLocalizacao").removeClass('required');
          $("#inputAquisicaoCentroLogistico").removeClass('required');
          $("#inputAquisicaoUsuario").removeClass('required');
          $("#inputAquisicaoDescricaoAtivo").removeClass('required');          
          $("#inputAquisicaoCentroLucro").removeClass('required');
          $("#inputAquisicaoCodItemPrinc").removeClass('required');
          $("#selectAquisicaoTipo").removeClass('required');
          $("#inputAquisicaoCentroCusto").removeClass('required');
          //Remove Required para Baixa
          $("#inputBaixaDataAquisicao").removeClass('required');
          $("#inputBaixaFornecedor").removeClass('required');
          $("#inputBaixaDescricaoAtivo").removeClass('required');
          $("#inputBaixaPlacaPatrimonio").removeClass('required');
          $("#selectBaixaTipo").removeClass('required');
          $("#inputBaixaLocalizacao").removeClass('required');
          //Remove Required para Transferencia
          $("#inputTransfDeEmpresa").removeClass('required');
          $("#inputTransfParaEmpresa").removeClass('required');
          $("#inputTransfDeLocalizacao").removeClass('required');
          $("#inputTransfParaLocalizacao").removeClass('required');
          $("#inputTransfDeUsuario").removeClass('required');
          $("#inputTransfParaUsuario").removeClass('required');
          $("#inputTransfPatrimonio").removeClass('required');
          $("#inputTransfDeCentroLucro").removeClass('required');
          $("#inputTransfParaCentroLucro").removeClass('required');
          $("#inputTransfDeCentroCusto").removeClass('required');
          $("#inputTransfParaCentroCusto").removeClass('required');
          $("#inputTransfMotivoTransf").removeClass('required');
          $("#inputTransfDescAtivo").removeClass('required');
          //Remove Required para Doacao
          $("#inputDoacaoDataAquisicao").removeClass('required');
          $("#inputDoacaoCPFCNPJ").removeClass('required');
          $("#inputDoacaoPlacaPatrimonio").removeClass('required');
          //Required para Venda
          $("#inputVendaDataAquisicao").removeClass('required');
          $("#inputVendaValorVenda").addClass('required');
          $("#inputVendaCPFCNPJ").addClass('required');
          $("#inputVendaDescricaoAtivo").addClass('required');
          $("#inputVendaPlacaPatrimonio").addClass('required');
          $("#inputVendaDataVenda").addClass('required');
          camposObrigatorios();
     }

     //Script para mostrar campos obrigatórios dinamicamente
     if ($(".required").val() == '') {
          addErro($(".required"));
     }else{
          addSuccess($(".required"));
     }
     $('.required').change(function(){
          $('.required').each(function(){
               var requiredValue = $(this).val();
               if (requiredValue == ''){        
                    addErro($(this));
               }else{
                    addSuccess($(this));        
               }
          });
     });
}

function isB001(){
     var operacao = $("#selectOperacao").val();
     if(operacao == "Novo Ativo"){
          CleanAll();
          //Remove Required para Transferencia
          $("#inputTransfDeEmpresa").removeClass('required');
          $("#inputTransfParaEmpresa").removeClass('required');
          $("#inputTransfDeLocalizacao").removeClass('required');
          $("#inputTransfParaLocalizacao").removeClass('required');
          $("#inputTransfDeUsuario").removeClass('required');
          $("#inputTransfParaUsuario").removeClass('required');
          $("#inputTransfPatrimonio").removeClass('required');
          $("#inputTransfDeCentroLucro").removeClass('required');
          $("#inputTransfParaCentroLucro").removeClass('required');
          $("#inputTransfDeCentroCusto").removeClass('required');
          $("#inputTransfParaCentroCusto").removeClass('required');
          $("#inputTransfMotivoTransf").removeClass('required');
          $("#inputTransfDescAtivo").removeClass('required');
          //Remove Required para Doacao
          $("#inputDoacaoDataAquisicao").removeClass('required');
          $("#inputDoacaoCPFCNPJ").removeClass('required');
          $("#inputDoacaoPlacaPatrimonio").removeClass('required');
          //Remove Required para Venda
          $("#inputVendaDataAquisicao").removeClass('required');
          $("#inputVendaValorVenda").removeClass('required');
          $("#inputVendaCPFCNPJ").removeClass('required');
          $("#inputVendaDescricaoAtivo").removeClass('required');
          $("#inputVendaPlacaPatrimonio").removeClass('required');
          //Remove Required para Baixa
          $("#inputBaixaDataAquisicao").removeClass('required');
          $("#inputBaixaFornecedor").removeClass('required');
          $("#inputBaixaDescricaoAtivo").removeClass('required');
          $("#selectBaixaTipo").removeClass('required');
          $("#inputBaixaLocalizacao").removeClass('required');
          //Required para Nova Aquisicao      
          $("#inputAquisicaoQtd").addClass('required');
          $("#inputAquisicaoCentroCusto").addClass('required');
          $("#inputAquisicaoCodigoAtivo").addClass('required');
          $("#inputAquisicaoCodigoItem").addClass('required');
          $("#inputAquisicaoLocalizacao").addClass('required');
          $("#inputAquisicaoCentroLogistico").addClass('required');
          $("#inputAquisicaoUsuario").addClass('required');
          $("#inputAquisicaoDescricaoAtivo").addClass('required');          
          $("#inputAquisicaoCentroLucro").addClass('required');
          $("#inputAquisicaoCodItemPrinc").addClass('required');
          $("#selectAquisicaoTipo").addClass('required');

          camposObrigatorios();
     }else if(operacao == "Novo Ativo Baixa"){      
          CleanAll();
          //Remove Required para Transferencia
          $("#inputTransfDeEmpresa").removeClass('required');
          $("#inputTransfParaEmpresa").removeClass('required');
          $("#inputTransfDeLocalizacao").removeClass('required');
          $("#inputTransfParaLocalizacao").removeClass('required');
          $("#inputTransfDeUsuario").removeClass('required');
          $("#inputTransfParaUsuario").removeClass('required');
          $("#inputTransfPatrimonio").removeClass('required');
          $("#inputTransfDeCentroLucro").removeClass('required');
          $("#inputTransfParaCentroLucro").removeClass('required');
          $("#inputTransfDeCentroCusto").removeClass('required');
          $("#inputTransfParaCentroCusto").removeClass('required');
          $("#inputTransfMotivoTransf").removeClass('required');
          $("#inputTransfDescAtivo").removeClass('required');
          //Remove Required para Doacao
          $("#inputDoacaoDataAquisicao").removeClass('required');
          $("#inputDoacaoCPFCNPJ").removeClass('required');
          $("#inputDoacaoPlacaPatrimonio").removeClass('required');
          //Remove Required para Venda
          $("#inputVendaDataAquisicao").removeClass('required');
          $("#inputVendaValorVenda").removeClass('required');
          $("#inputVendaCPFCNPJ").removeClass('required');
          $("#inputVendaDescricaoAtivo").removeClass('required');
          $("#inputVendaPlacaPatrimonio").removeClass('required');
          //Required para Nova Aquisicao
          $("#inputAquisicaoQtd").addClass('required');
          $("#inputAquisicaoCentroCusto").addClass('required');
          $("#inputAquisicaoCodigoAtivo").addClass('required');
          $("#inputAquisicaoCodigoItem").addClass('required');
          $("#inputAquisicaoLocalizacao").addClass('required');
          $("#inputAquisicaoCentroLogistico").addClass('required');
          $("#inputAquisicaoUsuario").addClass('required');
          $("#inputAquisicaoDescricaoAtivo").addClass('required');          
          $("#inputAquisicaoCentroLucro").addClass('required');
          $("#selectAquisicaoTipo").addClass('required');
          //Required para Baixa
          $("#inputBaixaDataAquisicao").removeClass('required');
          $("#inputBaixaFornecedor").removeClass('required');
          $("#inputBaixaDescricaoAtivo").addClass('required');
          $("#selectBaixaTipo").addClass('required');
          $("#inputBaixaLocalizacao").addClass('required'); 

          camposObrigatorios();
     }else if(operacao == "Baixa"){
          CleanAll();
          //Remove Required para Transferencia
          $("#inputTransfDeEmpresa").removeClass('required');
          $("#inputTransfParaEmpresa").removeClass('required');
          $("#inputTransfDeLocalizacao").removeClass('required');
          $("#inputTransfParaLocalizacao").removeClass('required');
          $("#inputTransfDeUsuario").removeClass('required');
          $("#inputTransfParaUsuario").removeClass('required');
          $("#inputTransfPatrimonio").removeClass('required');
          $("#inputTransfDeCentroLucro").removeClass('required');
          $("#inputTransfParaCentroLucro").removeClass('required');
          $("#inputTransfDeCentroCusto").removeClass('required');
          $("#inputTransfParaCentroCusto").removeClass('required');
          $("#inputTransfMotivoTransf").removeClass('required');
          $("#inputTransfDescAtivo").removeClass('required');
          //Remove Required para Doacao
          $("#inputDoacaoDataAquisicao").removeClass('required');
          $("#inputDoacaoCPFCNPJ").removeClass('required');
          $("#inputDoacaoPlacaPatrimonio").removeClass('required');
          //Remove Required para Venda
          $("#inputVendaDataAquisicao").removeClass('required');
          $("#inputVendaValorVenda").removeClass('required');
          $("#inputVendaCPFCNPJ").removeClass('required');
          $("#inputVendaDescricaoAtivo").removeClass('required');
          $("#inputVendaPlacaPatrimonio").removeClass('required');
          //Required para Baixa
          $("#inputBaixaDataAquisicao").removeClass('required');
          $("#inputBaixaFornecedor").removeClass('required');
          $("#inputBaixaDescricaoAtivo").addClass('required');
          $("#selectBaixaTipo").addClass('required');
          $("#inputBaixaLocalizacao").addClass('required');
          //Remove Required para Nova Aquisicao
          $("#inputAquisicaoQtd").removeClass('required');
          $("#inputAquisicaoCentroCusto").removeClass('required');
          $("#inputAquisicaoCodigoItem").removeClass('required');
          $("#inputAquisicaoLocalizacao").removeClass('required');
          $("#inputAquisicaoCentroLogistico").removeClass('required');
          $("#inputAquisicaoUsuario").removeClass('required');
          $("#inputAquisicaoDescricaoAtivo").removeClass('required');          
          $("#inputAquisicaoCentroLucro").removeClass('required');
          $("#selectAquisicaoTipo").removeClass('required');
          camposObrigatorios();
     }else if(operacao == "Transferencia"){
          CleanAll();
          //Remove Required para Venda
          $("#inputVendaDataAquisicao").removeClass('required');
          $("#inputVendaValorVenda").removeClass('required');
          $("#inputVendaCPFCNPJ").removeClass('required');
          $("#inputVendaDescricaoAtivo").removeClass('required');
          $("#inputVendaPlacaPatrimonio").removeClass('required');
          //Remove Required para Doacao
          $("#inputDoacaoDataAquisicao").removeClass('required');
          $("#inputDoacaoCPFCNPJ").removeClass('required');
          $("#inputDoacaoPlacaPatrimonio").removeClass('required');
          //Remove Required para Nova Aquisicao
          $("#inputAquisicaoQtd").removeClass('required');
          $("#inputAquisicaoCentroCusto").removeClass('required');
          $("#inputAquisicaoCodigoItem").removeClass('required');
          $("#inputAquisicaoLocalizacao").removeClass('required');
          $("#inputAquisicaoCentroLogistico").removeClass('required');
          $("#inputAquisicaoUsuario").removeClass('required');
          $("#inputAquisicaoDescricaoAtivo").removeClass('required');          
          $("#inputAquisicaoCentroLucro").removeClass('required');
          $("#selectAquisicaoTipo").removeClass('required');
          //Remove Required para Baixa
          $("#inputBaixaDataAquisicao").removeClass('required');
          $("#inputBaixaFornecedor").removeClass('required');
          $("#inputBaixaDescricaoAtivo").removeClass('required');
          $("#selectBaixaTipo").removeClass('required');
          $("#inputBaixaLocalizacao").removeClass('required');
          //Required para Transferencia
          $("#inputTransfDeEmpresa").addClass('required');
          $("#inputTransfParaEmpresa").addClass('required');
          $("#inputTransfDeLocalizacao").addClass('required');
          $("#inputTransfParaLocalizacao").addClass('required');
          $("#inputTransfDeUsuario").addClass('required');
          $("#inputTransfParaUsuario").addClass('required');
          $("#inputTransfPatrimonio").removeClass('required');
          $("#inputTransfDeCentroLucro").addClass('required');
          $("#inputTransfParaCentroLucro").addClass('required');
          $("#inputTransfDeCentroCusto").addClass('required');
          $("#inputTransfParaCentroCusto").addClass('required');
          $("#inputTransfMotivoTransf").addClass('required');
          $("#inputTransfDescAtivo").addClass('required');
          $("#inputDataTransferencia").addClass('required');
          camposObrigatorios();
     }else if(operacao == "Doacao"){
          CleanAll();
          //Remove Required para Nova Aquisicao
          $("#inputAquisicaoQtd").removeClass('required');
          $("#inputAquisicaoCentroCusto").removeClass('required');
          $("#inputAquisicaoCodigoItem").removeClass('required');
          $("#inputAquisicaoLocalizacao").removeClass('required');
          $("#inputAquisicaoCentroLogistico").removeClass('required');
          $("#inputAquisicaoUsuario").removeClass('required');
          $("#inputAquisicaoDescricaoAtivo").removeClass('required');
          $("#inputAquisicaoCentroLucro").removeClass('required');
          $("#selectAquisicaoTipo").removeClass('required');
          //Remove Required para Baixa
          $("#inputBaixaDataAquisicao").removeClass('required');
          $("#inputBaixaFornecedor").removeClass('required');
          $("#inputBaixaDescricaoAtivo").removeClass('required');
          $("#selectBaixaTipo").removeClass('required');
          $("#inputBaixaLocalizacao").removeClass('required');
          //Remove Required para Transferencia
          $("#inputTransfDeEmpresa").removeClass('required');
          $("#inputTransfParaEmpresa").removeClass('required');
          $("#inputTransfDeLocalizacao").removeClass('required');
          $("#inputTransfParaLocalizacao").removeClass('required');
          $("#inputTransfDeUsuario").removeClass('required');
          $("#inputTransfParaUsuario").removeClass('required');
          $("#inputTransfPatrimonio").removeClass('required');
          $("#inputTransfDeCentroLucro").removeClass('required');
          $("#inputTransfParaCentroLucro").removeClass('required');
          $("#inputTransfDeCentroCusto").removeClass('required');
          $("#inputTransfParaCentroCusto").removeClass('required');
          $("#inputTransfMotivoTransf").removeClass('required');
          $("#inputTransfDescAtivo").removeClass('required');
          //Remove Required para Venda
          $("#inputVendaDataAquisicao").removeClass('required');
          $("#inputVendaValorVenda").removeClass('required');
          $("#inputVendaCPFCNPJ").removeClass('required');
          $("#inputVendaDescricaoAtivo").removeClass('required');
          $("#inputVendaPlacaPatrimonio").removeClass('required');
          //Required para Doacao
          $("#inputDoacaoDataAquisicao").removeClass('required');
          $("#inputDoacaoCPFCNPJ").addClass('required');
          $("#inputDoacaoDescricaoAtivo").addClass('required'); 
          $("#inputDoacaoPlacaPatrimonio").removeClass('required'); 
          $("#inputDoacaoDataDoacao").addClass('required');
          camposObrigatorios();
     }else if(operacao == "Venda"){
          CleanAll();
          //Remove Required para Nova Aquisicao
          $("#inputAquisicaoQtd").removeClass('required');
          $("#inputAquisicaoCentroCusto").removeClass('required');
          $("#inputAquisicaoCodigoItem").removeClass('required');
          $("#inputAquisicaoLocalizacao").removeClass('required');
          $("#inputAquisicaoCentroLogistico").removeClass('required');
          $("#inputAquisicaoUsuario").removeClass('required');
          $("#inputAquisicaoDescricaoAtivo").removeClass('required');
          $("#inputAquisicaoCentroLucro").removeClass('required');
          $("#selectAquisicaoTipo").removeClass('required');
          //Remove Required para Baixa
          $("#inputBaixaDataAquisicao").removeClass('required');
          $("#inputBaixaFornecedor").removeClass('required');
          $("#inputBaixaDescricaoAtivo").removeClass('required');
          $("#selectBaixaTipo").removeClass('required');
          $("#inputBaixaLocalizacao").removeClass('required');
          //Remove Required para Transferencia
          $("#inputTransfDeEmpresa").removeClass('required');
          $("#inputTransfParaEmpresa").removeClass('required');
          $("#inputTransfDeLocalizacao").removeClass('required');
          $("#inputTransfParaLocalizacao").removeClass('required');
          $("#inputTransfDeUsuario").removeClass('required');
          $("#inputTransfParaUsuario").removeClass('required');
          $("#inputTransfPatrimonio").removeClass('required');
          $("#inputTransfDeCentroLucro").removeClass('required');
          $("#inputTransfParaCentroLucro").removeClass('required');
          $("#inputTransfDeCentroCusto").removeClass('required');
          $("#inputTransfParaCentroCusto").removeClass('required');
          $("#inputTransfMotivoTransf").removeClass('required');
          $("#inputTransfDescAtivo").removeClass('required');
          //Remove Required para Doacao
          $("#inputDoacaoDataAquisicao").removeClass('required');
          $("#inputDoacaoCPFCNPJ").removeClass('required');
          $("#inputDoacaoPlacaPatrimonio").removeClass('required');
          //Required para Venda
          $("#inputVendaDataAquisicao").removeClass('required');
          $("#inputVendaValorVenda").addClass('required');
          $("#inputVendaCPFCNPJ").addClass('required');
          $("#inputVendaDescricaoAtivo").addClass('required');
          $("#inputVendaPlacaPatrimonio").removeClass('required');
          $("#inputVendaDataVenda").addClass('required');
          camposObrigatorios();
     }
     //Script para mostrar campos obrigatórios dinamicamente
     if ($(".required").val() == '') {
          addErro($(".required"));
     }else{
          addSuccess($(".required"));
     }
     $('.required').change(function(){
          $('.required').each(function(){
               var requiredValue = $(this).val();
               if (requiredValue == ''){        
                    addErro($(this));
               }else{
                    addSuccess($(this));        
               }
          });
     });
}

