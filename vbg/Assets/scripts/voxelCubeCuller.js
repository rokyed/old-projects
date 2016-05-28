#pragma strict
var howManyLinesUnder:int=3;
var player:GameObject;

function Start () {
player=GameObject.Find("FPS");
}

function Update () {
if(player.transform.position.y>transform.position.y+howManyLinesUnder){
renderer.enabled=false;
}else{
renderer.enabled=true;
}

}