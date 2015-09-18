var estilo = document.body.style;
var tentativas = 1;

function chute(){
	return adivinha.value;
}

function escondido(){
	 return senha.value;
}

function mudaFundoParaVerde(){
	estilo.backgroundColor = "green";
}

function mudaFundoParaVermelho(){
	estilo.backgroundColor = "red";
}

function falaQueAcertou(){
	resultado.textContent = "Acertou :)";
}

function falaQueErrou(){
	resultado.textContent = "Errou :(";
}

function perdeuOJogo(){
	document.body.innerHTML = '<img src="careta.jpg">';
}

function ehMaior(){
	resultado.textContent = "É maior!";
}

function ehMenor(){
	resultado.textContent = "É menor!";	
}

function tentouMaisUmaVez(){
	tentativas = tentativas + 1;
}

function piscaTela(){
	document.body.classList.add("pisca");
	careta.classList.add("animate wobble")
}