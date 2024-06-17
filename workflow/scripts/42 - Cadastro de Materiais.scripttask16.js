function scripttask16() {
	var field;
	var name;
	var index;
	
	var dataSolPai;
	var motivo;
	var solicitante;
	var numProcesso;
	
	
	var grupoMercadoria;
	var tipoMaterial;
	var textoBreve;
	var textoLongo;
	var ncm;
	var materialAntigo;
	var unidadeMedida;
	
	var mrp;
	var deposito;
	var estoquemin;
	var estoquemax;
	var prazo;
	
	var depositoestoque;
	var centrolucro;
	var numerodeposito;
	var tipodeposito;
	var posicao;
	
	var classeavaliacao;
	
	
	var process = getValue("WKNumProces"); 
	cardData = hAPI.getCardData(process); 
	var keys = cardData.keySet().toArray(); 
	
	
	
	log.info("----------- INICIO KEYS -----------");
	for (var key in keys) 
	{ 
		field = keys[key]; 
		
		if (field.toUpperCase().indexOf("DATA_SOL") > -1) 
		{ 
			name = cardData.get(field);  
			dataSolPai = name;			
		}
		
		if (field.toUpperCase().indexOf("DROP_MOTIVO") > -1) 
		{ 
			name = cardData.get(field);  
			motivo = name;			
		}
		
		if (field.toUpperCase().indexOf("NMSOLICITANTE") > -1) 
		{ 
			name = cardData.get(field);  
			solicitante = name;			
		}
		
		if (field.toUpperCase().indexOf("NUMPROCESSO") > -1) 
		{ 
			name = cardData.get(field);  
			numProcesso = name;			
		}
		
		
		if ((field.toUpperCase().indexOf("TABLEID___") > -1) )
		{
			index = field.replace("tableid___", "");
		}
				
		if (index > 0 )
		{
			if (field.toUpperCase().indexOf("GRUPOMERCADORIA_1") > -1) 
			{ 
				name = cardData.get(field);  
				grupoMercadoria = name;			
			}
						
			if (field.toUpperCase().indexOf("TIPOMATERIAL_1") > -1) 
			{ 
				name = cardData.get(field);  
				tipoMaterial = name;			
			}
							
			if (field.toUpperCase().indexOf("TEXTOBREVE_1") > -1) 
			{ 
				name = cardData.get(field);  
				textoBreve = name;			
			}
								
			if (field.toUpperCase().indexOf("TEXTOLONGO_1") > -1) 
			{ 
				name = cardData.get(field);  
				textoLongo = name;			
			}
									
			if (field.toUpperCase().indexOf("NCM_1") > -1) 
			{ 
				name = cardData.get(field);  
				ncm = name;			
			}
										
			if (field.toUpperCase().indexOf("MATERIALANTIGO_1") > -1) 
			{ 
				name = cardData.get(field);  
				materialAntigo = name;			
			}
											
			if (field.toUpperCase().indexOf("UNIDADEMEDIDA_1") > -1) 
			{ 
				name = cardData.get(field);  
				unidadeMedida = name;			
			}
												
			if (field.toUpperCase().indexOf("MRP_1") > -1) 
			{ 
				name = cardData.get(field);  
				mrp = name;			
			}
													
			if (field.toUpperCase().indexOf("DEPOSITO_1") > -1) 
			{ 
				name = cardData.get(field);  
				deposito = name;			
			}
														
			if (field.toUpperCase().indexOf("ESTOQUEMIN_1") > -1) 
			{ 
				name = cardData.get(field);  
				estoquemin = name;			
			}
															
			if (field.toUpperCase().indexOf("ESTOQUEMAX_1") > -1) 
			{ 
				name = cardData.get(field);  
				estoquemax = name;			
			}
																
			if (field.toUpperCase().indexOf("PRAZO_1") > -1) 
			{ 
				name = cardData.get(field);  
				prazo = name;			
			}
																	
			if (field.toUpperCase().indexOf("DEPOSITOESTOQUE_1") > -1) 
			{ 
				name = cardData.get(field);  
				depositoestoque = name;			
			}
																		
			if (field.toUpperCase().indexOf("CENTROLUCRO_1") > -1) 
			{ 
				name = cardData.get(field);  
				centrolucro = name;			
			}
																			
			if (field.toUpperCase().indexOf("NUMERODEPOSITO_1") > -1) 
			{ 
				name = cardData.get(field);  
				numerodeposito = name;			
			}
																				
			if (field.toUpperCase().indexOf("TIPODEPOSITO_1") > -1) 
			{ 
				name = cardData.get(field);  
				tipodeposito = name;			
			}
																					
			if (field.toUpperCase().indexOf("POSICAO_1") > -1) 
			{ 
				name = cardData.get(field);  
				posicao = name;			
			}
																						
			if (field.toUpperCase().indexOf("CLASSEAVALIACAO_1") > -1) 
			{ 
				name = cardData.get(field);  
				classeavaliacao = name;
				
				
				log.info(" ABRIR SUB-PROCESSOS PARA ITEM " + index);
				
				log.info(" grupoMercadoria: " + grupoMercadoria);
				log.info(" tipoMaterial: " + tipoMaterial);
				log.info(" textoBreve: " + textoBreve);
				log.info(" textoLongo: " + textoLongo);
				log.info(" ncm: " + ncm);
				log.info(" materialAntigo: " + materialAntigo);
				log.info(" unidadeMedida: " + unidadeMedida);
				
				log.info(" mrp: " + mrp);
				log.info(" deposito: " + deposito);
				log.info(" estoquemin: " + estoquemin);
				log.info(" estoquemax: " + estoquemax);
				log.info(" prazo: " + prazo);
				
				log.info(" depositoestoque: " + depositoestoque);
				log.info(" centrolucro: " + centrolucro);
				log.info(" numerodeposito: " + numerodeposito);
				log.info(" tipodeposito: " + tipodeposito);
				log.info(" posicao: " + posicao);
				
				log.info(" classeavaliacao: " + classeavaliacao);
				
				
				var users = new java.util.ArrayList();
		        users.add("Pool:Role:admin");
		         
		        var formData = new java.util.HashMap();
		  
		        formData.put("numProcessoPai", numProcesso);		        
		        formData.put("datasolPai", dataSolPai);
		        formData.put("drop_mot", motivo);
		        formData.put("solicitante", solicitante);
		        
		        
		        
		        formData.put("tipoMaterial", tipoMaterial);
		        formData.put("grupoMercadoria", grupoMercadoria);
		        formData.put("textoBreve", textoBreve);
		        formData.put("textoLongo", textoLongo);
		        formData.put("ncm", ncm);
		        formData.put("materialAntigo", materialAntigo);
		        formData.put("unidadeMedida", unidadeMedida);
		        formData.put("mrp", mrp);
		        formData.put("deposito", deposito);
		        formData.put("estoquemin", estoquemin);
		        formData.put("estoquemax", estoquemax);
		        formData.put("prazo", prazo);
		        formData.put("depositoestoque", depositoestoque);
		        formData.put("centrolucro", centrolucro);
		        formData.put("numerodeposito", numerodeposito);
		        formData.put("tipodeposito", tipodeposito);
		        formData.put("posicao", posicao);
		        formData.put("classeavaliacao", classeavaliacao);
			       
		        
			       
		        hAPI.startProcess("SubProcessoCadastrodeMateriais", 3, users, "Solicitação inicializada através do processo: " + process, false, formData, true);                
		       
				
				index = 0;
			}	
		}
		
		
	}
	
	
	log.info("----------- FIM KEYS -----------");
	
	
	/*
	throw "Tipo Material: " + tipoMaterial;
	
	var users = new java.util.ArrayList();
    users.add("Pool:Role:papelUser");
     
    var formData = new java.util.HashMap();

    formData.put("Nome_do_Campo1", "Valor do Campo 1");
    formData.put("Nome_do_Campo2", "Valor do Campo 2");
                     
    hAPI.startProcess("pool", 4, users, "Solicitação inicializada pela função hAPI", true, formData, false);

    
	*/
	
	
}