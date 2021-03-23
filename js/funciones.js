function validarFormVacio(formulario){
		datos=$('#' + formulario).serialize();
		d=datos.split('&');
		vacios=0;
		for(i=0;i< d.length;i++){
			controles=d[i].split("=");
			var val = controles[1].indexOf("%20");
			if(controles[1]=="A"||controles[1]==""||val!=-1){
				vacios++;
			}
		}
		return vacios;
	}	
