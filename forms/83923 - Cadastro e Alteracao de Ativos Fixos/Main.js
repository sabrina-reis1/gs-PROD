//Script para anexar arquivo à solicitação

function anexarArquivo(){
  JSInterface.showCamera();
  $(window.top.document).find('#attachmentsStatusTab').trigger('click');
}

$(document).ready(function(){

  /***********Exibe Justificativa Painel Contabil*************/

  $("#divJustificativaanaliseContabil").css("display","none");
  $("#selectAnaliseContabil").on('change',function(){
    if($(this).val() == "cancelado"){
      $("#divJustificativaanaliseContabil").show();
    }else{
      $("#divJustificativaanaliseContabil").css("display","none");
    }
  });

  /***********************************************************/


  /************Count Lines campos de descrição****************/

    $("#inputAquisicaoDescricaoAtivo").keyup(function(){ //Count Aquisição   
      var count = $(this).val().length;
      $("#inputAqCountChar").val(count);
    });
    $("#inputBaixaDescricaoAtivo").keyup(function(){ //Count Baixa   
      var count = $(this).val().length;
      $("#inputbaixaCountChar").val(count);
    });
    $("#inputVendaDescricaoAtivo").keyup(function(){ //Count Venda   
      var count = $(this).val().length;
      $("#inputvendaCountChar").val(count);
    });
    $("#inputDoacaoDescricaoAtivo").keyup(function(){ //Count Venda   
      var count = $(this).val().length;
      $("#inputdoacaoCountChar").val(count);
    });
    $("#inputTransfDescAtivo").keyup(function(){ //Count Venda   
      var count = $(this).val().length;
      $("#inputtransfCountChar").val(count);
    });



  /***********************************************************/



  var countLinhas = $("#inputCountLines").val();
  if (countLinhas == ""){
    $("#inputCountLines").val("1");
  }
  
  //Aplica required para campos de SubItem
  $("input[value='Adicionar SubItem']").on('click', function(){
    var countLinhas = $("#inputCountLines").val(); 
    var Atividade = $("#inputHiddenAtividade").val();
    if(Atividade == "0" || Atividade == "4"){
      for (i = 0; i <= countLinhas; i++){          
        if (!$("#inputTableAquisicaoQtd___"+i).hasClass('clicked')){
          if ($("#inputTableAquisicaoQtd___"+i).val() == ""){
            $("#inputTableAquisicaoQtd___"+i).addClass('animation');
          }        
        }
        if (!$("#inputTableAquisicaoCodigoItem___"+i).hasClass('clicked')){
          if ($("#inputTableAquisicaoCodigoItem___"+i).val() == ""){
            $("#inputTableAquisicaoCodigoItem___"+i).addClass('animation');
          }        
        }
        if (!$("#inputTableAquisicaoDescAtivo___"+i).hasClass('clicked')){
          if ($("#inputTableAquisicaoDescAtivo___"+i).val() == ""){
            $("#inputTableAquisicaoDescAtivo___"+i).addClass('animation');
          }        
        }            
        $("#inputTableAquisicaoQtd___"+i).keyup(function(){//Ao clicar no campo ele remove a animação.
          $(this).removeClass("animation");
          $(this).addClass('clicked');  
        });
        $("#inputTableAquisicaoCodigoItem___"+i).keyup(function(){//Ao clicar no campo ele remove a animação.
          $(this).removeClass("animation");
          $(this).addClass('clicked'); 
        });        
        $("#inputTableAquisicaoDescAtivo___"+i).keyup(function(){ //Count Aquisição SubItem
          var id = $(this).attr("id");
          var lastChar = 0;
          if(countLinhas <=10){
            lastChar = id.substr(id.length -1);
          }else{
            lastChar = id.substr(id.length -2);
          }                                    
          var countSub = $(this).val().length;          
          $("#inputTableAquisicaoCountChar___"+lastChar).val(countSub);
          $(this).removeClass("animation");          
          $(this).addClass('clicked');          
        }); 

      }

    }else if(Atividade == "10"){
      for (i = 0; i <= countLinhas; i++){
        if (!$("#inputnrSubItem___"+i).hasClass('clicked')){
          if ($("#inputnrSubItem___"+i).val() == ""){
            $("#inputnrSubItem___"+i).attr("readonly", false);
            $("#inputnrSubItem___"+i).addClass('animation');
          }
        }        
        if (!$("#inputTableAquisicaoQtd___"+i).hasClass('clicked')){
          if ($("#inputTableAquisicaoQtd___"+i).val() == ""){
            $("#inputTableAquisicaoQtd___"+i).addClass('animation');            
          }        
        }
        if (!$("#inputTableAquisicaoCodigoItem___"+i).hasClass('clicked')){
          if ($("#inputTableAquisicaoCodigoItem___"+i).val() == ""){
            $("#inputTableAquisicaoCodigoItem___"+i).addClass('animation');            
          }        
        }
        if (!$("#inputTableAquisicaoDescAtivo___"+i).hasClass('clicked')){
          if ($("#inputTableAquisicaoDescAtivo___"+i).val() == ""){
            $("#inputTableAquisicaoDescAtivo___"+i).addClass('animation');
          }        
        }
        $("#inputnrSubItem___"+i).keyup(function(){//Ao clicar no campo ele remove a animação.
          $(this).removeClass("animation");
          $(this).addClass('clicked');  
        });
        $("#inputTableAquisicaoQtd___"+i).keyup(function(){//Ao clicar no campo ele remove a animação.
          $(this).removeClass("animation");
          $(this).addClass('clicked');  
        });
        $("#inputTableAquisicaoCodigoItem___"+i).keyup(function(){//Ao clicar no campo ele remove a animação.
          $(this).removeClass("animation");
          $(this).addClass('clicked'); 
        });
        $("#inputTableAquisicaoDescAtivo___"+i).keyup(function(){ //Count Aquisição SubItem                         
          var id = $(this).attr("id");
          var lastChar = 0;
          if(countLinhas <=10){
            lastChar = id.substr(id.length -1);
          }else{
            lastChar = id.substr(id.length -2);
          }                 
          var countSub = $(this).val().length;
          $("#inputTableAquisicaoCountChar___"+lastChar).val(countSub);
          $(this).removeClass("animation");  
          $(this).addClass('clicked');
        });   
      }
    }     
    
    var countLinhasSum = +$("#inputCountLines").val()+1;
    $("#inputCountLines").val(countLinhasSum);
  });

  //Esconde campo de Placa de Patrimonio (Baixa, Venda e Doação);
  //$("#divBaixaPlacaPatrimonio").css("display", "none");
  //$("#divVendaPlacaPatrimonio").css("display", "none");
  //$("#divAquisicaoCodItemPrinc").css("display", "none");

  FLUIGC.calendar('.data');
  


  $("#printBt").css('display', 'none');
  $("#printBtView").css('display', 'none');

  //Função open modal fornecedor
  $("#modalBtnFornec").on('click',function(){
    $(".table_custom").css('display', 'none');
    $('#modalFornec').show();
    $("#modalTableFornecedores").find("tr:gt(0)").remove();
  });
  //Função close modal fornecedor
  $('.modal_closeBtn').on('click',function(){
    $('.modal_custom').css('display','none');
  });
  //Função clique fora fornecedor
  $(window).on('click',function(e){
    var modal = $('#modalFornec');
    if(e.target == modal){
      $('.modal_custom').css('display','none');
    }
  });

  //Attach the plugin to the radio inputs.
  $("input:radio").radiocharm();

  //Função muda campo input conforme radio selecionado (Modal Fornecedor)
  $('#divModalSearch input[type=radio]').change(function(){
      if ($(this).val() == "CNPJ"){
        $('#modalInputCNPJCPF').show();
        $('#modalInputName').css("display","none");
        $('#modalInputNr').css("display","none");
      }
      if ($(this).val() == "Nome"){
        $('#modalInputCNPJCPF').css("display","none");
        $('#modalInputName').show();
        $('#modalInputNr').css("display","none");
      }
      if ($(this).val() == "Nr"){
        $('#modalInputCNPJCPF').css("display","none");
        $('#modalInputName').css("display","none");
        $('#modalInputNr').show();
      }
   })

  //Aciona busca de fornecedores pelo botão do modal
  $("#modal_BtnBuscaFornec").on('click', function(){
    $(".table_custom").show();
    IntegracaoSAPFornecedores2();
  })

  //Adiciona valor selecionado na tabela de fornecedores ao campo do formulário
  $("#modalTableFornecedores").on('click', 'tr', function(event){
    var tableData = $(this).children("td").map(function(){
      return $(this).text();
    }).get();
      var rsltNrFornec = tableData[0];
      var rsltDescFornec = tableData[1];
      $("#inputBaixaFornecedor").val(rsltNrFornec+"   "+rsltDescFornec);      
      $('#modalFornec').css("display","none");
      IntegracaoSAPFornecedores(rsltNrFornec);
  })

  var Atividade = $("#inputHiddenAtividade").val();
  if(Atividade == "11" || Atividade == "23" || Atividade == "5" ){
    $("input[value='Adicionar SubItem']").attr("id", "adicionaSubItem");
    $("#adicionaSubItem").attr("disabled", true);
  }
  

  ///***********************************************************************************************************************************///
  ///***********************************************************************************************************************************///
  ///***********************************************************************************************************************************///
  ///***********************************************************************************************************************************///
  ///***********************************************************************************************************************************/// 

  //Enable Fields
  var Atividade = $("#inputHiddenAtividade").val();
  if(Atividade == "5" || Atividade == "11"){
    //Bloqueio Campos Doação  
    $("#inputDoacaoDataAquisicao").attr('readonly', true);
    $("#inputDoacaoCPFCNPJ").attr('readonly', true);
    $("#inputDoacaoDescricaoAtivo").attr('readonly', true);
    $("#inputDoacaoNrAtivo").attr('readonly', true);

    //Bloqueio Campos Venda
    $("#inputVendaDataAquisicao").attr('readonly', true);
    $("#inputVendaValorVenda").attr('readonly', true);
    $("#inputVendaCPFCNPJ").attr('readonly', true);
    $("#inputVendaDescricaoAtivo").attr('readonly', true);
    $("#inputVendaNrAtivo").attr('readonly', true);
  }
  

  //Fim Enable Fields

  ///***********************************************************************************************************************************///
  ///***********************************************************************************************************************************///
  ///***********************************************************************************************************************************///
  ///***********************************************************************************************************************************///
  ///***********************************************************************************************************************************/// 

 

  $("#Aquisicao").on('click', function(){    
    $("#aAquisicao").removeClass("animation");
  });
  $("#Baixa").on('click', function(){    
    $("#aBaixa").removeClass("animation");
  });
  $("#Transferencia").on('click', function(){    
    $("#aTransferencia").removeClass("animation");
  });
  $("#Venda").on('click', function(){    
    $("#aVenda").removeClass("animation");
  });
  $("#Doacao").on('click', function(){    
    $("#aDoacao").removeClass("animation");
  });

  
  
  


  //Esconde Placa Patrimonio caso não seja empresa B009.
  $("#selectEmpresa").on('change', function(){    
    var selectEmpresa = $("#selectEmpresa").val();
    if(selectEmpresa != "B001" && selectEmpresa != "B009"){
      $("#trTransfCentroCusto").css("display", "none");
      console.log("Is Not B001 E B009");
      isNotB001andB009();        
    }else if(selectEmpresa == "B009" || selectEmpresa == "B014" || selectEmpresa == "B015" || selectEmpresa == "B016"){
      $("#trTransfCentroCusto").show();
      console.log("Is B009");
      isB009();      
    }else if(selectEmpresa == "B001"){
      $("#trTransfCentroCusto").show();
      console.log("Is B001");
      isB001();
    }
    if(selectEmpresa == ""){
      $("#selectOperacao").val("");
      $("#Baixa").css("display", "none");
      $("#Transferencia").css("display", "none");
      $("#Aquisicao").css("display", "none");
      $("#Doacao").css("display", "none");
      $("#Venda").css("display", "none");
    }
    $("#selectEmpresa").removeClass("animation");    
    if(selectEmpresa != "B009"){
      // Campos Transferência       
      $("#divtTransfPatrimonio").css("display", "none"); 
      //Campos Baixa;
      $("#divBaixaCodAtivo").show();
      $("#divBaixaFornecedor").show();
      $("#divBaixaLocalizacao").show();
      $("#divBaixaDataAquisicao").show();
      $("#divBaixaDescricaoAtivo").show();
      $("#divBaixaPlacaPatrimonio").css("display", "none");
      //Campos Venda;
      $("#divVendaNrAtivo").show();
      $("#divVendaDataAquisicao").show();
      $("#divVendaDescricaoAtivo").show();
      $("#divVendaPlacaPatrimonio").css("display", "none"); 
      //Campos Doação;
      $("#divDoacaoNrAtivo").show();
      $("#divDoacaoDataAquisicao").show();
      $("#divDoacaoDescricaoAtivo").show();
      $("#divDoacaoPlacaPatrimonio").css("display", "none");
    }else{
      // Campos Transferência       
      $("#divtTransfPatrimonio").show(); 
      //Campos Baixa;
      $("#divBaixaPlacaPatrimonio").show();
      $("#divBaixaCodAtivo").css("display", "none");
      $("#divBaixaLocalizacao").css("display", "none");
      $("#divBaixaDataAquisicao").css("display", "none");      
      $("#divBaixaFornecedor").css("display", "none");
      $("#divBaixaDescricaoAtivo").css("display", "none");
      //Campos Venda;
      $("#divVendaPlacaPatrimonio").show();
      $("#divVendaDataAquisicao").css("display", "none");
      $("#divVendaNrAtivo").css("display", "none");
      $("#divVendaDescricaoAtivo").css("display", "none");
      //Campos Doação;
      $("#divDoacaoPlacaPatrimonio").show();
      $("#divDoacaoDataAquisicao").css("display", "none");
      $("#divDoacaoNrAtivo").css("display", "none");
      $("#divDoacaoDescricaoAtivo").css("display", "none");
    }
  });

  //Script add classe .required para campos obrigatórios conforme seleção da operação
  $("#selectOperacao").on('change', function(){
    var operacao = $("#selectOperacao").val();
    var selectEmpresa = $("#selectEmpresa").val();
    if(selectEmpresa != "B001" && selectEmpresa != "B009"){
      isNotB001andB009();        
    }else if(selectEmpresa == "B009" || selectEmpresa == "B014" || selectEmpresa == "B015" || selectEmpresa == "B016"){
      isB009();      
    }else if(selectEmpresa == "B001"){
      isB001();
    }      
  });

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
  //Valida Campos Obrigatórios
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


  //Componente Popover Fluig;
  FLUIGC.popover('.bs-docs-popover-hover',{trigger: 'hover', placement: 'right'});
  
  //Esconde campo de Item Principal (Aquisição);
  $("#divAquisicaoItemPrincipal").css("display", "none");  

  /*
  //Esconde Abas de Solicitacoes ao carregar a página
  $("#Baixa").css("display", "none");
  $("#Transferencia").css("display", "none");
  $("#Aquisicao").css("display", "none");
  $("#Venda").css("display", "none");
  $("#Doacao").css("display", "none");
  */


  //Tratativa da Operação
  $("#selectOperacao").change(function(){
    console.log("Operação Trocada");
    var selectEmpresa = $("#selectEmpresa").val();
    if(selectEmpresa != ""){
      var operacao = $("#selectOperacao").val();
      if(operacao == "Novo Ativo"){
        console.log("Novo Ativo");
        $("#aAquisicao").addClass("animation");
        $("#Aquisicao").show();     
        $("#Baixa").css("display", "none");        
        $("#Transferencia").css("display", "none");       
        $("#Doacao").css("display", "none");        
        $("#Venda").css("display", "none");
      }else if(operacao == "Novo Ativo Baixa"){
        console.log("Novo Ativo Baixa");
        $("#aAquisicao").addClass("animation");
        $("#aBaixa").addClass("animation");
        $("#Baixa").show();
        $("#Aquisicao").show();
        $("#Transferencia").css("display", "none");
        $("#Doacao").css("display", "none");
        $("#Venda").css("display", "none");        
      }else if(operacao == "Baixa"){
        console.log("Baixa");
        $("#aBaixa").addClass("animation");
        $("#Baixa").show();
        $("#Transferencia").css("display", "none");
        $("#Doacao").css("display", "none");
        $("#Aquisicao").css("display", "none");
        $("#Venda").css("display", "none");
      }else if(operacao == "Transferencia"){
        console.log("Transferencia");
        $("#aTransferencia").addClass("animation");
        $("#Transferencia").show();
        $("#Baixa").css("display", "none");
        $("#Doacao").css("display", "none");
        $("#Aquisicao").css("display", "none");
        $("#Venda").css("display", "none");
      }else if(operacao == ""){
        console.log("Vazio");
        $("#Baixa").css("display", "none");
        $("#Transferencia").css("display", "none");
        $("#Aquisicao").css("display", "none");
        $("#Venda").css("display", "none");
        $("#Doacao").css("display", "none");
      }else if(operacao == "Venda"){
        console.log("Venda");
        $("#aVenda").addClass("animation");
        $("#Venda").show();
        $("#Baixa").css("display", "none");
        $("#Transferencia").css("display", "none");
        $("#Aquisicao").css("display", "none");
        $("#Doacao").css("display", "none");
      }else if(operacao == "Doacao"){
        console.log("Doacao");
        $("#aDoacao").addClass("animation");
        $("#Doacao").show();
        $("#Baixa").css("display", "none");
        $("#Transferencia").css("display", "none");
        $("#Aquisicao").css("display", "none");
        $("#Venda").css("display", "none");
      }
    }else{
      $("#selectEmpresa").addClass("animation");
      $("#selectOperacao").val("");
      FLUIGC.toast({
        title: 'Aviso: ',
        message: 'Favor selecionar uma empresa para cadastrar o ativo.',
        type: 'danger'
      });
    }
	});

  function CleanAll(){
    //Limpa Campos
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
  }


  //Atualiza Panel Head com Descrição do Ativo
  $("#inputAquisicaoDescricaoAtivo").change(function(){    
    var descricaoAtivo = $(this).val();
    $("#textHeader").text(" "+descricaoAtivo);
  });


  //Esconde ou Exibe os campos conforme o Tipo de Aquisição selecionado
  $("#selectAquisicaoTipo").on('change', function(){
    var tipoAquisicao = $("#selectAquisicaoTipo").val();

    if(tipoAquisicao == "Subitem"){
      $("#divAquisicaoCodigoAtivo").show();
      $("#divAquisicaoCentroLucro").css("display", "none");
      $("#divAquisicaoCodItemPrinc").css("display", "none");
      $("#divAquisicaoQtd").css("display", "none");
      $("#divAquisicaoCodigoItem").css("display", "none");
      $("#divAquisicaoLocalizacao").css("display", "none");
      $("#divAquisicaoUsuario").css("display", "none");
      $("#divAquisicaoCentroLogistico").css("display", "none");      
      $("#divAquisicaoCentroCusto").css("display", "none");
      $("#divAquisicaoDescricaoAtivo").css("display", "none");
    }else{
      $("#divAquisicaoCodigoAtivo").css("display", "none");
      $("#divAquisicaoCodItemPrinc").css("display", "none");
      $("#divAquisicaoQtd").show();
      $("#divAquisicaoCodigoItem").show();
      $("#divAquisicaoLocalizacao").show();
      $("#divAquisicaoUsuario").show();
      $("#divAquisicaoCentroLogistico").show();      
      $("#divAquisicaoCentroCusto").show();
      $("#divAquisicaoDescricaoAtivo").show();
    }
  }); 

});
