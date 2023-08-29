// Vamos criar um espaço onde poderemos desenhar coisas!
var canvas = new fabric.Canvas('myCanvas');

// Agora, vamos dizer onde o jogador começa no jogo.


// E vamos definir o tamanho dos blocos que o jogador usará.


// Aqui, estamos criando dois "objetos" que vão guardar a imagem do jogador e dos blocos.
var playerObject = "";
var blockImageObject = "";

function playerUpdate() // Essa função vai preparar o jogador e colocá-lo na tela.
{
	fabric.Image.fromURL("player.png", function (Img) { // Vamos pegar a imagem do jogador chamada "player.png".
		playerObject = Img;

		playerObject.scaleToWidth(150); // Vamos ajustar o tamanho do jogador.
		playerObject.scaleToHeight(140);
		playerObject.set({ // E agora vamos colocar o jogador na posição inicial.
			top: playerY,
			left: playerX
		});
		canvas.add(playerObject); // E finalmente, vamos adicionar o jogador à tela!

	});
}

function newImage(getImage) {
	fabric.Image.fromURL(getImage, function (Img) {
		blockImageObject = Img;

		blockImageObject.scaleToWidth(blockImageWidth);
		blockImageObject.scaleToHeight(blockImageHeight);
		blockImageObject.set({
			top: playerY,
			left: playerX
		});
		canvas.add(blockImageObject);

	});

}

window.addEventListener("", myKeyDown);//evento

function myKeyDown(e) {
	keyPressed = e.keyCode;
	if (e.shiftKey == true && keyPressed == '80') {
		blockImageWidth = blockImageWidth + 10;
		blockImageHeight = blockImageHeight + 10;
		document.getElementById("currentWidth").innerHTML = blockImageWidth;
		document.getElementById("currentHeight").innerHTML = blockImageHeight;
	}
	if (e.shiftKey && keyPressed == '77') {
		blockImageWidth = blockImageWidth - 10;
		blockImageHeight = blockImageHeight - 10;
		document.getElementById("currentWidth").innerHTML = blockImageWidth;
		document.getElementById("currentHeight").innerHTML = blockImageHeight;
	}

	if (keyPressed == '38') {
		up();
	}
	if (keyPressed == '40') {
		down();
	}
	if (keyPressed == '37') {
		left();
	}
	if (keyPressed == '39') {
		right();
	}
	if (keyPressed == '49') { //olhar a tabela ASCII
		newImage('wall.jpg');
	}
	if (keyPressed == '50') { //olhar a tabela ASCII
		newImage('ground.png');
	}
	if (keyPressed == '51') { //olhar a tabela ASCII
		newImage('light_green.png');
	}
	if (keyPressed == '52') { //olhar a tabela ASCII
		newImage('trunk.jpg');
	}
	if (keyPressed == '53') { //olhar a tabela ASCII
		newImage('roof.jpg');
	}
	if (keyPressed == '54') { //olhar a tabela ASCII
		newImage('yellow_wall.png');
	}
	if (keyPressed == '55') { //olhar a tabela ASCII
		newImage('dark_green.png');
	}
	if (keyPressed == '56') { //olhar a tabela ASCII
		newImage('unique.png');
	}
	if (keyPressed == '57') { //olhar a tabela ASCII
		newImage('cloud.jpg');
	}

}
function up() {
	if (playerY >= 0) { //
		playerY = playerY - blockImageHeight; //lembra do studio.code.org, onde a gente brincava com o sprite?  A altura da imagem tem que ser uma altura para que uma imagem não se sobreponha a outra.
		canvas.remove(playerObject);
		playerUpdate();
	}
}
//  
function down() {
	if (playerY <= 500) {
		
	}
}

function left() {
	if (playerX > 0) {
		
		
	}
}

function right() {
	if (playerX <= 850) {
		 
		
	}
}
