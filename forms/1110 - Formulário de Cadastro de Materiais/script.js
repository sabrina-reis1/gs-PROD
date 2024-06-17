$(document).ready(function(){
   let centroLogistica = $("#centroLogistica");
   function carregarCantroLogistico(element){
      $.ajax({
         type: 'POST',
         url: "https://fiori.gsinima.com.br/sap/bc/Z_FLUIG_REST/",
         datatype: 'json',
         crossDomain: true,
         data: 'C_WERKS={"PLANT":"","EKGRP":""}',
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
   // carregarCantroLogistico(centroLogistica);
});