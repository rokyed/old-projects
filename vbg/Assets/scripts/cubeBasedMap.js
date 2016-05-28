#pragma strict
static var howManyCubes:int=0;
var mapHeight:int=10;
var mapWidth:int=200;
var mapLenght:int=200;
var tileX:float=0.0;
var tileY:float=0.0;
var tileZ:float=0.0;
var tileSize:float=1.0;
private var atX:int=1;
private var atY:int=1;
private var atZ:int=1;
var interpreter:int=10;
var tileValue:int=0;
var randomness:int=1;


var allTiles = new Array ();


var cubePref:Transform;

var cubePref2:Transform;

var cubePref3:Transform;

var isDrawingAllTiles=true;



function Update () {

if(isDrawingAllTiles){
	for(var i=0;i<interpreter;i++){
	
	if(atX>=mapWidth){
			if(atZ>=mapLenght){
				if(atY>=mapHeight){
				atY=0;
					isDrawingAllTiles=false;
				}
			atZ=0;
			atY++;
			}
		atX=0;
		atZ++;
	}
	

	
	atX++;
	if(randomness>1){
	tileValue=Mathf.Round(Random.value*randomness);
	}else if(randomness<=1){
	tileValue=1;
	}
	
	
		allTiles[atX*atY*atZ]=tileValue;
	
		tileX=atX*tileSize;
		tileY=atY*tileSize;
		tileZ=atZ*tileSize;
		
	if(allTiles[atX*atY*atZ]==1){
		
		if(cubePref!=null){
		Instantiate(cubePref,Vector3(tileX,tileY,tileZ),Quaternion.identity);
		}
	}
	if(allTiles[atX*atY*atZ]==2){
		
		if(cubePref2!=null){
		Instantiate(cubePref2,Vector3(tileX,tileY,tileZ),Quaternion.identity);
		}
	}
	if(allTiles[atX*atY*atZ]==3){
		
		if(cubePref3!=null){
		Instantiate(cubePref3,Vector3(tileX,tileY,tileZ),Quaternion.identity);
		}
	}
	howManyCubes++;
	
	
	

}
}
}

function ShootedAt(){
print("call works");
if(howManyCubes==0){
var isDrawingAllTiles=true;
}
}