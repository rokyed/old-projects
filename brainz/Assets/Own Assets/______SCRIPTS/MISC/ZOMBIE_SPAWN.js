#pragma strict
static var maxZombies =30;
static var zombies=0;
var timeInBetweenSpawn:float=0.8;
var theZombie:Transform;
var canspawn=true;
var minimumDistanceToInstantiate=30;
var distance=0.0;
var player:GameObject;

function Start () {


}

function Update () {
if(player==null){
player=GameObject.Find("player");
}else{
distance = Vector3.Distance(player.transform.position,transform.position);
if(zombies<=maxZombies){
if(distance<minimumDistanceToInstantiate){
if(canspawn){

Spawn();

}
}
}
}
}

function Spawn(){
zombies++;
print(zombies);
canspawn=false;
Instantiate (theZombie, transform.position, Quaternion.identity);
yield WaitForSeconds(timeInBetweenSpawn);
canspawn=true;

}