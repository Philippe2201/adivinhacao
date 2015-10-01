var estilo = document.body.style;
var tentativas = 1;

function valorChute(){
	return chute.value;
}

function valorEscondido(){
	 return escondido.value;
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
}

function limpaTela(){
	document.body.innerHTML = "";
}

function falaGameOver(){
    document.body.innerHTML = "<img id='imagem' src='careta.jpg'><button id='botao' onclick='reiniciaJogo()'>REINICIAR</button><h1>GAME OVER</h1>";
}

function reiniciaJogo(){
    location.reload();
}

function estaVazio(element){
    if(element.value == "") return true;
    return false;
}

function gritar(){
    var audio = new Audio('grito.mp3');
    audio.play();
}