//This script is made completely by Andrei Bazavan
//The script my be used by someone else but with credits for the Author(s)
//The engine name is: Meligine or Melisa Engine

// cells are drawed row by row , with a fixed lenght
// a variable that defines where is allready with counting


//taches :
//hud
//npc

var secondMillisecondCheck=0;

var screenScene=0;// the screen
var wait_counter=0;
var wait=10;// in milliseconds
var debug=false;



var rightKey = false;
var leftKey = false;
var upKey = false;
var downKey = false;

var actualCell=0;
var actualX=0;
var actualY=0;


var cellsPerRow=64;
var rows=66;

var playerSpeed=0.1;
var playerX=4;
var playerY=1;

var targetPX=4;
var targetPY=1;

var playerScreenPadX=0;
var playerScreenPadY=0;

var cellReplaceX=0;
var cellReplaceY=0;
// the cell for the array
var collisionPlayerOnCell=0;
var collisionCellUp=0;
var collisionCellDown=0;
var collisionCellLeft=0;
var collisionCellRight=0;
// the switch that kills the availibility of walking
var canGoToUp=true;
var canGoToDown=true;
var canGoToLeft=true;
var canGoToRight=true;

//tileset variables here

var tilesetTileSize=32;
var tilesetTilesOnWidth=16;
var tilesetTileOnX=0;
var tilesetTileOnY=0;
var tilesetX=0;
var tilesetY=0;
var tilesetToUse=1;


var playerAnimationSpeed=0.1;
var playerAnimSpeedEq=0;
var playerTileset="ressource/tilesets/player.png";
var playerTileX=0;
var playerTileY=0;
var playerAnimationWidth=2;
var playerTileSize=32;
var playerTileFrameX=0;
var playerTileFrameY=0;
var tileset1="ressource/tilesets/dustvg.png";
var tileset2="";



var colCellUp=0;
var colCEllDown=0;
var colCellLeft=0;
var colCellRight=0;
var colCurrentRow=0;
var colPlayerX=0;
var colPlayerY=0;

//
//cell size (can be used for zooming)
var cellSizeZoom=50;
var collisionBuffer=5;
var colBufPercent=0.05;



var cellsToDrawAroundPlayer=9;

var screen_width = 800;
var screen_height =600;


var c=document.getElementById("myCanvas");
var ctx=null;

//INITIATION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function InitiateMeligineCore(){
	

	document.addEventListener('keydown', keyDown, false);
	document.addEventListener('keyup', keyUp, false);
	debug=true;//HERE DEBUG INITIATION  HERE DEBUG INITIATION  HERE DEBUG INITIATION  HERE DEBUG INITIATION  HERE DEBUG INITIATION  
	c=document.getElementById("myCanvas");
	ctx=c.getContext("2d");
	
	
	MeligineInitiateObjects();
	setInterval(function(){MeligineCore()},1);
}
//INITIATION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function MeligineInitiateObjects(){
//ctx.translate(screen_widht / 2, screen_height / 2);
//ctx.rotate(Math.PI / 4);
}





//key input here ----------------------------------------------------------------------------------------------
function keyDown(e) {
	if (e.keyCode == 39) rightKey = true;
	else if (e.keyCode == 37) leftKey = true;
	if (e.keyCode == 38) upKey = true;
	else if (e.keyCode == 40) downKey = true;
}

function keyUp(e) {
	if (e.keyCode == 39) rightKey = false;
	else if (e.keyCode == 37) leftKey = false;
	if (e.keyCode == 38) upKey = false;
	else if (e.keyCode == 40) downKey = false;
}
//key input here ----------------------------------------------------------------------------------------------


function mouseOverDebug(){
if(debug){
debug=false;
}else if(debug==false){
debug=true;
}
}

function moreCells(){
if(cellsToDrawAroundPlayer>20){
}else{
cellsToDrawAroundPlayer++;
}
}
function lessCells(){
if(cellsToDrawAroundPlayer<1){
}else{
cellsToDrawAroundPlayer--;
}
}
function zoomIn(){
if(cellSizeZoom>200){
}else{
cellSizeZoom+=5;
}
}
function zoomOut(){
if(cellSizeZoom<10){
}else{
cellSizeZoom-=5;
}
}




//CALLER?????????????????????????????????????????????????????????????????????????????????????????
function MeligineCore(){
	UpdateValues();
	//ctx.rotate(0.1);
	//ctx.translate( 800,600 );
	CollisionCaculate();
	if(screenScene==0){
		//ctx.globalAlpha=1;
		MeligineSplashRender();
	}else if(screenScene ==2){
		//ctx.globalAlpha=0.2;
		MeligineGameScreenRender();
	}
	MeligineFPSCounter();
}
//CALLER?????????????????????????????????????????????????????????????????????????????????????????


function MeligineFPSCounter(){

var date = new Date();
var	firstMillisecondCheck=date.getMilliseconds();
var FPSCounter=Math.round(1000/(firstMillisecondCheck-secondMillisecondCheck));	
	secondMillisecondCheck=firstMillisecondCheck;
	ctx.fillStyle="rgb(0,255,0)";
	ctx.fillText("FPS : "+FPSCounter,700,16);
}




//UPDATER+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function UpdateValues(){

	if(leftKey){
		if(canGoToLeft){
			playerX-=playerSpeed;
			playerAnimSpeedEq+=playerAnimationSpeed;
			playerTileY=1;
			
		}
	}else if(rightKey){
		if(canGoToRight){
			playerX+=playerSpeed;
			playerAnimSpeedEq+=playerAnimationSpeed;
			playerTileY=2;
		}
	}
	if(upKey){
		if(canGoToUp){
			playerY-=playerSpeed;
			playerAnimSpeedEq+=playerAnimationSpeed;
			playerTileY=3;
		}
	}else if(downKey){
		if(canGoToDown){
			playerY+=playerSpeed;
			playerAnimSpeedEq+=playerAnimationSpeed;
			playerTileY=0;
		}
	}
	

	
	if(playerAnimSpeedEq>=playerAnimationWidth){
		playerAnimSpeedEq=0;
	}
	
	playerTileX=Math.round(playerAnimSpeedEq);
	playerTileFrameX=playerTileX*playerTileSize;
	playerTileFrameY=playerTileY*playerTileSize;

	playerScreenPadX=(screen_width-(screen_width/2))-playerX*cellSizeZoom;
	playerScreenPadY=(screen_height-(screen_height/2))-playerY*cellSizeZoom;

	collisionBuffer=colBufPercent*cellSizeZoom
}
//UPDATER+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++







//COLISIONNERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
function CollisionCaculate(){
	collisionPlayerOnCell=(Math.round(playerY)*cellsPerRow)+Math.round(playerX);
	collisionCellUp=collisionPlayerOnCell-cellsPerRow;
	collisionCellDown=collisionPlayerOnCell+cellsPerRow;
	collisionCellLeft=collisionPlayerOnCell-1;
	collisionCellRight=collisionPlayerOnCell+1;
	colCurrentRow=(Math.round(playerY)*cellsPerRow);
	//perpixel-cubecollision
	colCellUp=(1+Math.floor(collisionCellUp/cellsPerRow))*cellSizeZoom;
	colCellDown=(Math.floor(collisionCellDown/cellsPerRow)-1)*cellSizeZoom;
	colCellLeft=(1+Math.floor(collisionCellLeft-colCurrentRow))*cellSizeZoom;
	colCellRight=(Math.floor(collisionCellRight-colCurrentRow)-1)*cellSizeZoom;
	colPlayerX=playerX*cellSizeZoom;
	colPlayerY=playerY*cellSizeZoom;
	

	if(allCollisionCells[collisionCellUp]==1){
		if(colPlayerY-collisionBuffer<colCellUp+collisionBuffer){
		canGoToUp=false;
		}else{
		canGoToUp=true;
		}
	}else if(allCollisionCells[collisionCellUp]==0){
		canGoToUp=true;
	}
	
	if(allCollisionCells[collisionCellDown]==1){
		if(colPlayerY+collisionBuffer>colCellDown-collisionBuffer){
		canGoToDown=false;
		}else{
		canGoToDown=true;
		}
	}else if(allCollisionCells[collisionCellDown]==0){
		canGoToDown=true;
	}
	
	if(allCollisionCells[collisionCellLeft]==1){
		if(colPlayerX-collisionBuffer<colCellLeft+collisionBuffer){
		canGoToLeft=false;
		}else{
		canGoToLeft=true;
		}
	}else if(allCollisionCells[collisionCellLeft]==0){
		canGoToLeft=true;
	}
	
	if(allCollisionCells[collisionCellRight]==1){
		if(colPlayerX+collisionBuffer>colCellRight-collisionBuffer){
		canGoToRight=false;
		}else{
		canGoToRight=true;
		}
	}else if(allCollisionCells[collisionCellRight]==0){
		canGoToRight=true;
	}

}
//COLISIONNERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR


//SPLASH RENDER SPLASH RENDER SPLASH RENDER SPLASH RENDER SPLASH RENDER SPLASH RENDER SPLASH RENDER 
function MeligineSplashRender(){
	if(wait_counter==wait){
		wait_counter=0;
		screenScene=2;
	}
	wait_counter++;
			MeligineCleanTheScreen();
			MeligineSplashScreen();
}

//SPLASH RENDER SPLASH RENDER SPLASH RENDER SPLASH RENDER SPLASH RENDER SPLASH RENDER SPLASH RENDER 

//GAME SCREEN RENDER GAME SCREEN RENDER GAME SCREEN RENDER GAME SCREEN RENDER GAME SCREEN RENDER
function MeligineGameScreenRender(){
	MeligineCleanTheScreen();
	actualCell=0;
	
	for(var i=0;i<rows;i++){
		//where is the acctual cell on y
		actualY=i;
		if(actualY>playerY-cellsToDrawAroundPlayer+2 && actualY<playerY+cellsToDrawAroundPlayer-2){
			for(var u=0;u<cellsPerRow;u++){
				actualX=u;
				if(actualX>playerX-cellsToDrawAroundPlayer && actualX<playerX+cellsToDrawAroundPlayer){
				//declare tile image
				
				var tilesetImage= new Image();
				if(tilesetToUse==1){
				tilesetImage.src=tileset1;
				}
				
				//where is the acctual cell on x
				
				//cell repositioning due to player moving
				cellReplaceX=(playerScreenPadX+actualX*cellSizeZoom)-cellSizeZoom/2;
				cellReplaceY=(playerScreenPadY+actualY*cellSizeZoom)-cellSizeZoom/2;
				
				//ctx.strokeStyle="rgb(100,100,100)";
				//ctx.strokeRect(cellReplaceX,cellReplaceY,cellSizeZoom,cellSizeZoom);
				
				tilesetTileOnY=Math.floor(allCells[actualCell]/tilesetTilesOnWidth);
			//	tilesetTileOnY=1;
				tilesetTileOnX=allCells[actualCell]-tilesetTileOnY*tilesetTilesOnWidth;
			//	tilesetTileOnX=9;
				//set the tilesets on x and y to know from where to pick
				tilesetX=tilesetTileOnX*tilesetTileSize;
				tilesetY=tilesetTileOnY*tilesetTileSize;
				
				ctx.drawImage(tilesetImage,tilesetX,tilesetY,tilesetTileSize,tilesetTileSize,cellReplaceX,cellReplaceY,cellSizeZoom,cellSizeZoom);
				ctx.fillStyle="rgb(255,0,255)";
				
						
				actualCell++;
				}else{
				actualCell++;
				}
			}
		}else{
		actualCell+=cellsPerRow;
		}
	}
	MeligineDrawThePlayer();
}
//GAME SCREEN RENDER GAME SCREEN RENDER GAME SCREEN RENDER GAME SCREEN RENDER GAME SCREEN RENDER
function MeligineSplashScreen(){
var splashScreen= new Image();
splashScreen.src="ressource/logos/splash.png"
ctx.drawImage(splashScreen,0,0);
}

function MeligineDrawThePlayer(){

var playerTilesetImage= new Image();
	playerTilesetImage.src=playerTileset;
	ctx.drawImage(playerTilesetImage,playerTileFrameX,playerTileFrameY,playerTileSize,playerTileSize,400-cellSizeZoom/2,300-cellSizeZoom/2,cellSizeZoom,cellSizeZoom);
	ctx.fillStyle="rgb(0,255,0)";
	  
	
}

function MeligineCleanTheScreen(){

	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillRect(0,0,screen_width,screen_height);
}