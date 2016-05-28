#pragma strict
static var maxBotsPerWave=30;
static var currentBotCount=0;
static var gameStarted=false;

static var newWaveStart=true;
static var spawnSpeed=0.2;

static var wavesToGo=50;

var canSpawn=true;

var bot1:Transform;
var bot2:Transform;
var bot3:Transform;
var bot4:Transform;
var bot5:Transform;



function Start () {


}

function Update () {
	if(gameStarted){
		if(wavesToGo>0){
			if(newWaveStart){
				if(canSpawn){
					canSpawn=false;
					SpawnNow();
					
				}
			
		}
		}
	}
	if(wavesToGo==0){
	//the game gets finished with victory
	}
}

function HoldForWave(){
	yield WaitForSeconds(30);
	newWaveStart=true;

}

function SpawnNow(){
	if(currentBotCount<maxBotsPerWave){
		Instantiate(bot1,transform.position,Quaternion.identity);
	}else{
		wavesToGo--;
		newWaveStart=false;
		currentBotCount=0;
		HoldForWave();
	}

	currentBotCount++;
	yield WaitForSeconds(spawnSpeed);
	canSpawn=true;

}