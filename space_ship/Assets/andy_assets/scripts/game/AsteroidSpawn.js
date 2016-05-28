#pragma strict

var spawnNow:float=0;
var asteroidSetSpeed:float=0;
var makeGameDifficult:float=0;
var canMakeGameDifficult:boolean = false;
var canSpawnNow=true;

var asteroidTypeNow=1;



var asteroidObject :Transform;
var asteroid2Object :Transform;
var asteroid3Object :Transform;
var asteroid4Object :Transform;
  var positionOfAsteroid: Vector3;

function Start () {
canSpawnNow=true;
spawnNow=1;
canMakeGameDifficult=true;
asteroidSetSpeed=80;
makeGameDifficult=5;
    
}

function Update () {
if(canSpawnNow==true){
canSpawnNow=false;
nowCanSpawn();

}


if(canMakeGameDifficult){
makeGameMoreDifficult();
canMakeGameDifficult=false;
}

}

function makeGameMoreDifficult(){

if(asteroidSetSpeed<180){
asteroidSetSpeed+=5;
}
if(spawnNow>0){
spawnNow-=0.01;
}
AsteroidEntity.asteroidSpeed=asteroidSetSpeed;
yield WaitForSeconds (makeGameDifficult);
canMakeGameDifficult=true;
}

function nowCanSpawn(){
asteroidTypeNow=Random.Range(1,10);


  positionOfAsteroid= Vector3(Random.Range(-15.0, 15.0),Random.Range(-15.0, 15.0),transform.position.z );
  if(asteroidTypeNow<=3){
  Instantiate (asteroidObject, positionOfAsteroid,  Random.rotation);

  }else if(asteroidTypeNow>3 && asteroidTypeNow<6){
  Instantiate (asteroid4Object, positionOfAsteroid,  Random.rotation);
  }else if(asteroidTypeNow>=6&& asteroidTypeNow<9){
  Instantiate (asteroid2Object, positionOfAsteroid,  Random.rotation);
  }else if(asteroidTypeNow>=9){
  Instantiate (asteroid3Object, positionOfAsteroid,  Random.rotation);
  }
  yield WaitForSeconds(spawnNow);
  canSpawnNow=true;

}

