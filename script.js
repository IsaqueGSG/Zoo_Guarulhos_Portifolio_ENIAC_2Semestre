
function jogo () {
	
	var random	= Math.floor ( Math.random ()*10 ) ;
	var resp	= document.getElementById("resp") ;		
	
    resp.src = "imagens/animal"+random+".jpg";
    	
}


