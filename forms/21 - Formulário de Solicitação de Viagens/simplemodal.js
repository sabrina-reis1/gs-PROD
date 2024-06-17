 function fnsimplemodal(){

            
        var html = '<div class="table-responsive"> '+
        '           <table class="table table-striped  table-bordered  table-hover table-condensed" width="10000" > '+
        '                   <thead>'+
        '                   <tr>'+
        '                       <th>#</th>'+
        '                       <th width="400" >Nome</th>'+
        '                       <th width="400" >Login</th>'+
        '                   </tr>'+
        '               </thead>'+
        '               <tbody>';
    
        var filter = new Object();
        //filter["colleaguePK.colleagueId"] = "admin";
        var colleagues = DatasetFactory.getDatasetValues("colleague");
        if(colleagues.length > 0){
            var pos = 0;
            while ( pos < colleagues.length ){ 
                html += '              <tr class="active">'+
                    '                       <td><input type="checkbox" value="" ></td>'+
                    '                       <td>'+ colleagues[pos].colleagueName + '</td>'+
                    '                       <td>'+ colleagues[pos].login + '</td>'+
                    '                   </tr>';
                pos = pos + 1;
            }
        }else{
            alert("Nenhum Usuário Encontrado");
        }
    
        html +='        </tbody>'+
        '           </table> '+
        '       </div> ';

        var myModal = FLUIGC.modal({
                title: 'Title',
                content: html,
                id: 'fluig-modal',
                size: 'full',
                actions: [{
                    'label': 'Selecionar',
                    'bind': 'data-open-modal',
                },{
                    'label': 'Fechar',
                    'autoClose': true
                }]
            }, function(err, data) {
                if(err) {
                    // do error handling
                } else {
                    // do something with data
                }
        });

    }