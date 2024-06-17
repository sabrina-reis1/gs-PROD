function enableFields(form){ 
	
	var state = getValue("WKNumState");
 
		        form.setEnabled("data_sol",false);
		        form.setEnabled("nrSolicitacao",false);
		        form.setEnabled("nmSolicitante",false);
		        //form.setEnabled("nmSuperior",false);
		      //Bloqueia a DIV
		        form.setVisibleById("idempresa",false);
		        
		        if(state == 0){//etapa inicial
			        	form.setVisibleById("lblmarcamodelo",false);
				    	form.setVisibleById("nmveiculo",false);
				    	form.setVisibleById("lblplaca",false);
				    	form.setVisibleById("nmplaca",false);
				    	form.setVisibleById("lbldtEntrega",false);
				    	form.setVisibleById("dtent",false);
				    	form.setVisibleById("lbldtDevolucao",false);
				    	form.setVisibleById("dtdev",false);
				    	form.setVisibleById("lblnomemoto",false);
				    	form.setVisibleById("nmmotorista",false);
				    
		        }
		    
		      
		        
		        //ETAPA Viagens
		        if( state == 4 )
	        	{
		        	form.setVisibleById("ctr_log",false);
		        	form.setVisibleById("datafin",false);
		        	form.setEnabled("nmempresa",false);
		        	form.setEnabled("drop_filial",false);
		        	form.setEnabled("drop_empresa",false);
		        	form.setEnabled("nmSuperior",false);
		        	form.setEnabled("centroCusto", false);
		        	form.setEnabled("nmv",false);
		        	form.setEnabled("nmCidade1",false);
		        	form.setEnabled("nmcidadedest1",false);
		        	form.setEnabled("datasaida",false);
		        	form.setEnabled("horasaida", false);
		        	form.setEnabled("dataret",false);
		        	form.setEnabled("horaret", false);
		        	form.setEnabled("motivoViagem",false);
		        	form.setEnabled("drop_hotel",false);
		        	form.setEnabled("drop_passagem",false);
		        	form.setEnabled("drop_veic",false);
		        	form.setEnabled("tipomoeda", false);
		        	form.setEnabled("valoradiantamento",false);
		        	form.setEnabled("datarec",false);		        	
		        	form.setEnabled("dataprog",false);
		        	
		        } 
		        //ETAPA DO FINANCEIRO
		        if(state == 23) {
		        	form.setVisibleById("ctr_log",false);
		        	form.setVisibleById("datafin",true);
		        	form.setEnabled("nmempresa",false);
		        	form.setEnabled("drop_filial",false);
		        	form.setEnabled("drop_empresa",false);
		        	form.setEnabled("nmSuperior",false);
		        	form.setEnabled("centroCusto", false);
		        	form.setEnabled("nmv",false);
		        	form.setEnabled("nmCidade1",false);
		        	form.setEnabled("nmcidadedest1",false);
		        	form.setEnabled("datasaida",false);
		        	form.setEnabled("horasaida", false);
		        	form.setEnabled("dataret",false);
		        	form.setEnabled("horaret", false);
		        	form.setEnabled("motivoViagem",false);
		        	form.setEnabled("drop_hotel",false);
		        	form.setEnabled("drop_passagem",false);
		        	form.setEnabled("drop_veic",false);
		        	form.setEnabled("OBS",false);
		        	form.setEnabled("tipomoeda", false);
		        	form.setEnabled("valoradiantamento",false);
		        	form.setEnabled("datarec",false);
		        	
		        			        	
		        }
		        
		        //Etapa Logistica
		        if(state == 24){
		        		
		        		form.setVisibleById("datafin",false);
	        			form.setVisibleById("ctr_log",true);
		        		form.setEnabled("nmempresa",false);
		        		form.setEnabled("drop_filial",false);
			        	form.setEnabled("drop_empresa",false);
		        		form.setEnabled("nmSuperior",false);
		        		form.setEnabled("centroCusto", false);
		        		form.setEnabled("nmv", false);
		        		form.setEnabled("nmCidade1", false);
		        		form.setEnabled("nmcidadedest1", false);
		        		form.setEnabled("datasaida", false);
		        		form.setEnabled("horasaida", false);
		        		form.setEnabled("dataret", false);
		        		form.setEnabled("horaret", false);
		        		form.setEnabled("motivoViagem", false);
		        		form.setEnabled("drop_hotel", false);
		        		form.setEnabled("drop_passagem", false);
		        		form.setEnabled("drop_veic", false);
		        		form.setEnabled("tipomoeda", false);
		        		form.setEnabled("valoradiantamento", false);
		        		form.setEnabled("datarec", false);
		        		form.setEnabled("dataprog", false);
		        		form.setEnabled("veic_crtl", false);
		        		form.setEnabled("drop_mot", false);
		        		
		        		if(form.getValue("drop_mot") == 'SIM'){
		        			form.setVisibleById("lblnomemoto",true);
		        			form.setVisibleById("nmmotorista",true);
		        		}
		        		if(form.getValue("drop_mot") == 'NAO'){
		        			form.setVisibleById("lblnomemoto",false);
		        			form.setVisibleById("nmmotorista",false);
		        		}
		        		
		        }
		        if(state == 48){
		        	form.setVisibleById("ctr_log",true);
		        	form.setVisibleById("lblmarcamodelo",true);
			    	form.setVisibleById("nmveiculo",true);
			    	form.setVisibleById("lblplaca",true);
			    	form.setVisibleById("nmplaca",true);
			    	form.setVisibleById("lbldtEntrega",true);
			    	form.setVisibleById("dtent",true);
			    	form.setVisibleById("lbldtDevolucao",true);
			    	form.setVisibleById("dtdev",true);
			    	form.setVisibleById("lblnomemoto",true);
			    	form.setVisibleById("nmmotorista",true);
		        }
		
}