function beforeTaskSave(colleagueId,nextSequenceId,userList){
	
	
	var anexo = hAPI.listAttachments();
    var state = getValue("WKNumState");
    var exception = hAPI.getCardValue("inputtipoFornecedor");
    var processId = getValue("WKNumProces");
    log.info("###ProccessID###: "+processId);
    var filtroFluxo = hAPI.getCardValue("inputFluxo");
    log.info("###Fluxo###: "+filtroFluxo);
    
    if(state == 4 && anexo.size() == 0) throw "<br>- <strong style='color:red;'>Favor Anexar Arquivo!!!</strong>";
    var empresa = hAPI.getCardValue("drop_emp");
    
    if (state == 51){
        var empresa = hAPI.getCardValue("drop_emp");
        //ShortName para Empresa (Approval)
        if(empresa == "B001") hAPI.setCardValue("inputcoligResum"," B001-GS INIMA BRASIL");
        if(empresa == "B002") hAPI.setCardValue("inputcoligResum"," B002-AMBIENT");
        if(empresa == "B003") hAPI.setCardValue("inputcoligResum"," B003-SESAMM");
        if(empresa == "B004") hAPI.setCardValue("inputcoligResum"," B004-ARAUCARIA");
        if(empresa == "B005") hAPI.setCardValue("inputcoligResum"," B005-SANEVAP");
        if(empresa == "B006") hAPI.setCardValue("inputcoligResum"," B006-SANAMA");
        if(empresa == "B007") hAPI.setCardValue("inputcoligResum"," B007-CAEPA");
        if(empresa == "B008") hAPI.setCardValue("inputcoligResum"," B008-COMASA");
        if(empresa == "B009") hAPI.setCardValue("inputcoligResum"," B009-SAMAR");
        if(empresa == "B010") hAPI.setCardValue("inputcoligResum"," B010-GS INDUSTRIAL");
        if(empresa == "B011") hAPI.setCardValue("inputcoligResum"," B011-GS SERVICO");
        if(empresa == "B012") hAPI.setCardValue("inputcoligResum"," B012-PALMEIRAS SANEAMENTO");
        if(empresa == "B013") hAPI.setCardValue("inputcoligResum"," B013-SANEOURO");
        if(empresa == "B014") hAPI.setCardValue("inputcoligResum"," B014-JECEABA");
        if(empresa == "B015") hAPI.setCardValue("inputcoligResum"," B015-AQUAPOLO");
        if(empresa == "B016") hAPI.setCardValue("inputcoligResum"," B016-TRIUNFO");
        if(empresa == "B017") hAPI.setCardValue("inputcoligResum"," B017-SANEL");
        if(empresa == "B701") hAPI.setCardValue("inputcoligResum"," B701-CC ALTA MACEIO");
        //if(empresa == "BJ02") hAPI.setCardValue("inputcoligResum"," BJ02-CC VALE DO PARAIBA");
    }
    if(state == 134 && exception == "0003"){
        log.info("######PUBLISH_WF_ATTACHMENT######");
        
        var calendar = java.util.Calendar.getInstance().getTime();
        
        var docs = hAPI.listAttachments();
        
        var identificadorAnexo = 0;
        
        for (var i = 0; i < docs.size(); i++) {
            var docDto = docs.get(i);
            
            //if (doc.getDocumentType() != "7") continue;
            
            
            //
            
            if (docDto.getDocumentType() == "7") {
            	
                var empresa = hAPI.getCardValue("drop_emp");
                var numFornecedor = hAPI.getCardValue("numfornecedor");
                var numNF = hAPI.getCardValue("numnf");
                
                var datalancFiltro = hAPI.getCardValue("datalancFiltro");
                datalancFiltro = datalancFiltro.replace("/","-");
                var dataFiltro = hAPI.getCardValue("dataFiltro");
                dataFiltro = dataFiltro.replace("/","-");
                
                if (empresa == "B001") var folderId = 8562;
                if (empresa == "B002") var folderId = 8466;
                if (empresa == "B003") var folderId = 8559;
                if (empresa == "B004") var folderId = 8547;
                if (empresa == "B005") var folderId = 8557;
                if (empresa == "B006") var folderId = 8555;
                if (empresa == "B007") var folderId = 8549;
                if (empresa == "B008") var folderId = 8551;
                if (empresa == "B009") var folderId = 8553;
                if (empresa == "B701") var folderId = 8569;
                //if (empresa == "BJ02") var folderId = 8596;
                if (empresa == "B010") var folderId = 125876;
                if (empresa == "B011") var folderId = 137857;
                if (empresa == "B012") var folderId = 690511;
                if (empresa == "B013") var folderId = 137860;
                if (empresa == "B014") var folderId = 159118;
                if (empresa == "B015") var folderId = 159116;
                if (empresa == "B016") var folderId = 159119;
                if (empresa == "B017") var folderId = 294752;
                
                
                log.info("###FOLDER_ID###:"+folderId);
                
                var date = new Date();
                var ano = date.getFullYear();

                docAPI.copyDocumentToUploadArea(docDto.getDocumentId(), 1000);
                docDto.setDocumentId(0);
                docDto.setParentDocumentId(folderId);
                docDto.setActiveVersion(true);
                
                //novo nome documento
                
/*                var lancFinanc = hAPI.getCardValue("inputLancFinanc"); 
                identificadorAnexo++;
                
                if(lancFinanc == "0"){
                    var nomeDoc = ano + "-" + datalancFiltro + "_" + numFornecedor + "_" + numNF + "_" + ano + "-" + dataFiltro + "_" + identificadorAnexo;
                }else{
                    var nomeDoc = "FI - " + ano + "-" + datalancFiltro + "_" + numFornecedor + "_" + numNF + "_" + ano + "-" + dataFiltro + "_" + identificadorAnexo;
                }*/
                //var nomeDoc = ano+"/"+datalancFiltro+"_"+numFornecedor+"_"+numNF+"_"+ano+"/"+dataFiltro;
                
                var nomeDoc = docDto.getPhisicalFile();
                //var nomeDoc =  docDto.getDocumentDescription();
                log.info("######NOME_ARQUIVO#######:"+nomeDoc);
                
                docDto.setDocumentDescription(eliminaExtensao(nomeDoc));
                docDto.setVersionDescription("Documento publicado através do processo: "+processId);
                docDto.setColleagueId("admings");
                docDto.setPublisherId("admings"); 
                docDto.setInheritSecurity(true);
                docDto.setInternalVisualizer(true);
                docDto.setDownloadEnabled(false);
                
                log.info("######LOG####### - 1");
                
                var attachArray = new java.util.ArrayList();
                var mainAttach = docAPI.newAttachment();
                mainAttach.setFileName(nomeDoc);
                mainAttach.setPrincipal(true);
                mainAttach.setAttach(false);
                attachArray.add(mainAttach);
                
                log.info("######LOG####### - 2");
                	                
                try {
                	  log.info("######LOG####### - 3");
                    var doc = docAPI.createDocument(docDto, attachArray, null, null, null);
                    log.info("DOCUMENTO CRIADO COM O ID: " + doc.getDocumentId());
                } catch (e) {
                    log.error("Problemas na criação do documento:\n" + e);
                }
            }
        }
		getAnexo();
    }
    if (state == 28 || state == 21) {
    	log.info("######PUBLISH_WF_ATTACHMENT######");
        var calendar = java.util.Calendar.getInstance().getTime();
        var docs = hAPI.listAttachments();
        
        var identificadorAnexo = 0;
        
        for (var i = 0; i < docs.size(); i++) {
            var docDto = docs.get(i);
            
            //if (doc.getDocumentType() != "7") continue;
            
            
            //
            
            if (docDto.getDocumentType() == "7") {
            	
                var empresa = hAPI.getCardValue("drop_emp");
                var numFornecedor = hAPI.getCardValue("numfornecedor");
                var numNF = hAPI.getCardValue("numnf");
                
                var datalancFiltro = hAPI.getCardValue("datalancFiltro");
                datalancFiltro = datalancFiltro.replace("/","-");
                var dataFiltro = hAPI.getCardValue("dataFiltro");
                dataFiltro = dataFiltro.replace("/","-");
                
                
                if (empresa == "B001") var folderId = 8562;
                if (empresa == "B002") var folderId = 8466;
                if (empresa == "B003") var folderId = 8559;
                if (empresa == "B004") var folderId = 8547;
                if (empresa == "B005") var folderId = 8557;
                if (empresa == "B006") var folderId = 8555;
                if (empresa == "B007") var folderId = 8549;
                if (empresa == "B008") var folderId = 8551;
                if (empresa == "B009") var folderId = 8553;
                if (empresa == "B701") var folderId = 8569;
                //if (empresa == "BJ02") var folderId = 8596;
                if (empresa == "B010") var folderId = 125876;
                if (empresa == "B011") var folderId = 137857;
                if (empresa == "B012") var folderId = 690511;
                if (empresa == "B013") var folderId = 137860;
                if (empresa == "B014") var folderId = 159118;
                if (empresa == "B015") var folderId = 159116;
                if (empresa == "B016") var folderId = 159119;
                if (empresa == "B017") var folderId = 294752;
                
                
                log.info("###FOLDER_ID###:"+folderId);
                
                var date = new Date();
                var ano = date.getFullYear();

                docAPI.copyDocumentToUploadArea(docDto.getDocumentId(), 1000);
                docDto.setDocumentId(0);
                docDto.setParentDocumentId(folderId);
                docDto.setActiveVersion(true);
                
                //novo nome documento
                
/*                var lancFinanc = hAPI.getCardValue("inputLancFinanc"); 
                identificadorAnexo++;
                
                if(lancFinanc == "0"){
                    var nomeDoc = ano + "-" + datalancFiltro + "_" + numFornecedor + "_" + numNF + "_" + ano + "-" + dataFiltro + "_" + identificadorAnexo;
                }else{
                    var nomeDoc = "FI - " + ano + "-" + datalancFiltro + "_" + numFornecedor + "_" + numNF + "_" + ano + "-" + dataFiltro + "_" + identificadorAnexo;
                }*/
                //var nomeDoc = ano+"/"+datalancFiltro+"_"+numFornecedor+"_"+numNF+"_"+ano+"/"+dataFiltro;
                
                var nomeDoc = docDto.getPhisicalFile();
                //var nomeDoc =  docDto.getDocumentDescription();
                log.info("######NOME_ARQUIVO#######:"+nomeDoc);
                
                docDto.setDocumentDescription(eliminaExtensao(nomeDoc));
                docDto.setVersionDescription("Documento publicado através do processo: "+processId);
                docDto.setColleagueId("admings");
                docDto.setPublisherId("admings"); 
                docDto.setInheritSecurity(true);
                docDto.setInternalVisualizer(true);
                docDto.setDownloadEnabled(false);
                
                log.info("######LOG####### - 11");
                
                var attachArray = new java.util.ArrayList();
                var mainAttach = docAPI.newAttachment();
                mainAttach.setFileName(nomeDoc);
                mainAttach.setPrincipal(true);
                mainAttach.setAttach(false);
                attachArray.add(mainAttach);
                
                log.info("######LOG####### - 22");
                
                	                
                try {
                	 log.info("######LOG####### - 33");
                    var doc = docAPI.createDocument(docDto, attachArray, null, null, null);
                    log.info("DOCUMENTO CRIADO COM O ID: " + doc.getDocumentId());
                } catch (e) {
                    log.error("Problemas na criação do documento:\n" + e);
                }
            }
        }
		getAnexo();
    }
	function getAnexo(){
		var process = getValue("WKNumProces");
        var constraintProcessAttachment = DatasetFactory.createConstraint('processAttachmentPK.processInstanceId', process, process, ConstraintType.MUST);
        var datasetProcessAttachment = DatasetFactory.getDataset('processAttachment', null, new Array(constraintProcessAttachment), null);
        for(var i = 1; i < datasetProcessAttachment.rowsCount; i++) {
            var docId = datasetProcessAttachment.getValue(i, "documentId");
			log.info("####BEFORE TASK SAVE####");
			log.info("####INDEX#### :"+i+"  ####DOC_ID####"+docId);
			hAPI.setCardValue("inputdocumentId"+i, docId);
        }
    }
	
	function eliminaExtensao(nome)
	{
		var descricao = nome;
		if (nome != "" && nome.lastIndexOf('.') != -1)
		{
			descricao = nome.substring(0,nome.lastIndexOf('.'));
		}
		return descricao;
	}
	
	
}
	
	
	/*var anexo = hAPI.listAttachments();
    var state = getValue("WKNumState");
    var exception = hAPI.getCardValue("inputtipoFornecedor");
    var processId = getValue("WKNumProces");
    log.info("###ProccessID###: "+processId);
    var filtroFluxo = hAPI.getCardValue("inputFluxo");
    log.info("###Fluxo###: "+filtroFluxo);
    if(state == 4 && anexo.size() == 0) throw "<br>- <strong style='color:red;'>Favor Anexar Arquivo!!!</strong>";
    var empresa = hAPI.getCardValue("drop_emp");
    if (state == 51){
        var empresa = hAPI.getCardValue("drop_emp");
        //ShortName para Empresa (Approval)
        if(empresa == "B001") hAPI.setCardValue("inputcoligResum"," B001-GS INIMA BRASIL");
        if(empresa == "B002") hAPI.setCardValue("inputcoligResum"," B002-AMBIENT");
        if(empresa == "B003") hAPI.setCardValue("inputcoligResum"," B003-SESAMM");
        if(empresa == "B004") hAPI.setCardValue("inputcoligResum"," B004-ARAUCARIA");
        if(empresa == "B005") hAPI.setCardValue("inputcoligResum"," B005-SANEVAP");
        if(empresa == "B006") hAPI.setCardValue("inputcoligResum"," B006-SANAMA");
        if(empresa == "B007") hAPI.setCardValue("inputcoligResum"," B007-CAEPA");
        if(empresa == "B008") hAPI.setCardValue("inputcoligResum"," B008-COMASA");
        if(empresa == "B009") hAPI.setCardValue("inputcoligResum"," B009-SAMAR");
        if(empresa == "B010") hAPI.setCardValue("inputcoligResum"," B010-GS INDUSTRIAL");
        if(empresa == "B011") hAPI.setCardValue("inputcoligResum"," B011-GS SERVICO");
        if(empresa == "B013") hAPI.setCardValue("inputcoligResum"," B013-SANEOURO");
        if(empresa == "B014") hAPI.setCardValue("inputcoligResum"," B014-JECEABA");
        if(empresa == "B015") hAPI.setCardValue("inputcoligResum"," B015-AQUAPOLO");
        if(empresa == "B016") hAPI.setCardValue("inputcoligResum"," B016-TRIUNFO");
        if(empresa == "BJ01") hAPI.setCardValue("inputcoligResum"," BJ01-CC ALTA MACEIO");
        if(empresa == "BJ02") hAPI.setCardValue("inputcoligResum"," BJ02-CC VALE DO PARAIBA");
    }
    if(state == 134 && exception == "BR03"){
        log.info("######PUBLISH_WF_ATTACHMENT######");
        var calendar = java.util.Calendar.getInstance().getTime();
        var docs = hAPI.listAttachments();
        for (var i = 0; i < docs.size(); i++) {
            var doc = docs.get(i);
            if (doc.getDocumentType() != "7") continue;
            var empresa = hAPI.getCardValue("drop_emp");
            var numFornecedor = hAPI.getCardValue("numfornecedor");
            var numNF = hAPI.getCardValue("numnf");
            var datalancFiltro = hAPI.getCardValue("datalancFiltro");
            var dataFiltro = hAPI.getCardValue("dataFiltro");
            if (empresa == "B001") var folderId = 8562;
            if (empresa == "B002") var folderId = 8466;
            if (empresa == "B003") var folderId = 8559;
            if (empresa == "B004") var folderId = 8547;
            if (empresa == "B005") var folderId = 8557;
            if (empresa == "B006") var folderId = 8555;
            if (empresa == "B007") var folderId = 8549;
            if (empresa == "B008") var folderId = 8551;
            if (empresa == "B009") var folderId = 8553;
            if (empresa == "BJ01") var folderId = 8569;
            if (empresa == "BJ02") var folderId = 8596;
            if (empresa == "B010") var folderId = 125876;
            if (empresa == "B011") var folderId = 137857;
            if (empresa == "B013") var folderId = 137860;
            if (empresa == "B014") var folderId = 159118;
            if (empresa == "B015") var folderId = 159116;
            if (empresa == "B016") var folderId = 159119;
            log.info("###FOLDER_ID###:"+folderId);
            doc.setParentDocumentId(folderId);
            doc.setVersionDescription("Processo: " + getValue("WKNumProces"));
            var date = new Date();
            var ano = date.getFullYear();
            var nmDoc = ano+"/"+datalancFiltro+"_"+numFornecedor+"_"+numNF+"_"+ano+"/"+dataFiltro;
            log.info("######NOME_ARQUIVO#######:"+nmDoc);
            //doc.setphisicalFile(nmDoc);
            doc.setExpires(false);
            doc.setCreateDate(calendar);
            doc.setInheritSecurity(true);
            doc.setTopicId(1);
            doc.setUserNotify(false);
            doc.setValidationStartDate(calendar);
            doc.setVersionOption("0");
            doc.setUpdateIsoProperties(true);
            hAPI.publishWorkflowAttachment(doc);
        }
		getAnexo();
    }
    if (state == 28 || state == 21) {
    	log.info("######PUBLISH_WF_ATTACHMENT######");
        var calendar = java.util.Calendar.getInstance().getTime();
        var docs = hAPI.listAttachments();
        for (var i = 0; i < docs.size(); i++) {
            var doc = docs.get(i);
            if (doc.getDocumentType() != "7") continue;
            var empresa = hAPI.getCardValue("drop_emp");
            var numFornecedor = hAPI.getCardValue("numfornecedor");
            var numNF = hAPI.getCardValue("numnf");
            var datalancFiltro = hAPI.getCardValue("datalancFiltro");
            var dataFiltro = hAPI.getCardValue("dataFiltro");
            if (empresa == "B001") var folderId = 8562;
            if (empresa == "B002") var folderId = 8466;
            if (empresa == "B003") var folderId = 8559;
            if (empresa == "B004") var folderId = 8547;
            if (empresa == "B005") var folderId = 8557;
            if (empresa == "B006") var folderId = 8555;
            if (empresa == "B007") var folderId = 8549;
            if (empresa == "B008") var folderId = 8551;
            if (empresa == "B009") var folderId = 8553;
            if (empresa == "BJ01") var folderId = 8569;
            if (empresa == "BJ02") var folderId = 8596;
            if (empresa == "B010") var folderId = 125876;
            if (empresa == "B011") var folderId = 137857;
            if (empresa == "B013") var folderId = 137860;
            if (empresa == "B014") var folderId = 159118;
            if (empresa == "B015") var folderId = 159116;
            if (empresa == "B016") var folderId = 159119;
            log.info("###FOLDER_ID###:"+folderId);
            doc.setParentDocumentId(folderId);
            doc.setVersionDescription("Processo: " + getValue("WKNumProces"));
            var date = new Date();
            var ano = date.getFullYear();
            var nmDoc = ano+"/"+datalancFiltro+"_"+numFornecedor+"_"+numNF+"_"+ano+"/"+dataFiltro;
            log.info("######NOME_ARQUIVO#######:"+nmDoc);
            //doc.setphisicalFile(nmDoc);
            doc.setExpires(false);
            doc.setCreateDate(calendar);
            doc.setInheritSecurity(true);
            doc.setTopicId(1);
            doc.setUserNotify(false);
            doc.setValidationStartDate(calendar);
            doc.setVersionOption("0");
            doc.setUpdateIsoProperties(true);
            hAPI.publishWorkflowAttachment(doc);
        }
		getAnexo();
    }
	function getAnexo(){
		var process = getValue("WKNumProces");
        var constraintProcessAttachment = DatasetFactory.createConstraint('processAttachmentPK.processInstanceId', process, process, ConstraintType.MUST);
        var datasetProcessAttachment = DatasetFactory.getDataset('processAttachment', null, new Array(constraintProcessAttachment), null);
        for(var i = 1; i < datasetProcessAttachment.rowsCount; i++) {
            var docId = datasetProcessAttachment.getValue(i, "documentId");
			log.info("####BEFORE TASK SAVE####");
			log.info("####INDEX#### :"+i+"  ####DOC_ID####"+docId);
			hAPI.setCardValue("inputdocumentId"+i, docId);
        }
    }*/
