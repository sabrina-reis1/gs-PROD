function scripttask11() 
{
	var field;
	var name;
	var index;
	
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
		
		log.info("CAMPO: " + field);
		
		
		if (field.indexOf("grupoMercadoria_1") > -1) 
		{ 
			index = field.replace("grupoMercadoria_1", "");
			name = cardData.get(field);  
			grupoMercadoria = name;			
		}
		else
			if (field.indexOf("tipoMaterial_1") > -1) 
			{ 
				name = cardData.get(field);  
				tipoMaterial = name;			
			}
			else
				if (field.indexOf("textoBreve_1") > -1) 
				{ 
					name = cardData.get(field);  
					textoBreve = name;			
				}
				else
					if (field.indexOf("textoLongo_1") > -1) 
					{ 
						name = cardData.get(field);  
						textoLongo = name;			
					}
					else
						if (field.indexOf("ncm_1") > -1) 
						{ 
							name = cardData.get(field);  
							ncm = name;			
						}
						else
							if (field.indexOf("materialAntigo_1") > -1) 
							{ 
								name = cardData.get(field);  
								materialAntigo = name;			
							}
							else
								if (field.indexOf("unidadeMedida_1") > -1) 
								{ 
									name = cardData.get(field);  
									unidadeMedida = name;			
								}
								else
									if (field.indexOf("mrp_1") > -1) 
									{ 
										name = cardData.get(field);  
										unidadeMedida = name;			
									}
									else
										if (field.indexOf("deposito_1") > -1) 
										{ 
											name = cardData.get(field);  
											deposito = name;			
										}
										else
											if (field.indexOf("estoquemin_1") > -1) 
											{ 
												name = cardData.get(field);  
												estoquemin = name;			
											}
											else
												if (field.indexOf("estoquemax_1") > -1) 
												{ 
													name = cardData.get(field);  
													estoquemax = name;			
												}
												else
													if (field.indexOf("prazo_1") > -1) 
													{ 
														name = cardData.get(field);  
														prazo = name;			
													}
													else
														if (field.indexOf("depositoestoque_1") > -1) 
														{ 
															name = cardData.get(field);  
															depositoestoque = name;			
														}
														else
															if (field.indexOf("centrolucro_1") > -1) 
															{ 
																name = cardData.get(field);  
																centrolucro = name;			
															}
															else
																if (field.indexOf("numerodeposito_1") > -1) 
																{ 
																	name = cardData.get(field);  
																	numerodeposito = name;			
																}
																else
																	if (field.indexOf("tipodeposito_1") > -1) 
																	{ 
																		name = cardData.get(field);  
																		tipodeposito = name;			
																	}
																	else
																		if (field.indexOf("posicao_1") > -1) 
																		{ 
																			name = cardData.get(field);  
																			posicao = name;			
																		}
																		else
																			if (field.indexOf("classeavaliacao_1") > -1) 
																			{ 
																				name = cardData.get(field);  
																				classeavaliacao = name;			
																			}
	}
	
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
	
	throw "ERRO!!!!!";
}