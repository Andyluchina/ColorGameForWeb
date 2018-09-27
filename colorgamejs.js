
var numSquares=6;
var colors=generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedcolor = pickColor();
var colordisplay = document.getElementById("colortitle");
var messageDisplay = document.querySelector("#message");
colordisplay.textContent= pickedcolor;
var h1= document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");


resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);

	pickedcolor = pickColor();

	colordisplay.textContent = pickedcolor;
	for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
    }
    messageDisplay.textContent="";
    h1.style.background = "steelblue";
    this.textContent="New Game";

})


for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedcolor = this.style.background;
		// alert(clickedcolor);
		// alert(pickedcolor);
		if(clickedcolor===pickedcolor){
			messageDisplay.textContent = "Correct!";
			changeColors(pickedcolor);
			h1.style.background=pickedcolor;
			resetButton.textContent="Play Again";
			//console.log("won clicked");
		}else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
	
}

function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
	  squares[i].style.background = color;
	}
}

function pickColor(){
	var ran = Math.floor(Math.random()*colors.length);
	return colors[ran];
}

function generateRandomColors(num){
	var arr=[];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb("+ r + ", " + g +", "+ b +")";
}


//easy and hard buttons

easyBtn.addEventListener("click", function(){
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors = generateRandomColors(numSquares);
	pickedcolor= pickColor();
	colordisplay.textContent = pickedcolor;
	h1.style.background = "steelblue";

	for(var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.background= colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors = generateRandomColors(numSquares);
	pickedcolor= pickColor();
	colordisplay.textContent = pickedcolor;
	h1.style.background = "steelblue";

	for(var i = 0; i<squares.length; i++){
			squares[i].style.background= colors[i];
			squares[i].style.display="block";
	}

})