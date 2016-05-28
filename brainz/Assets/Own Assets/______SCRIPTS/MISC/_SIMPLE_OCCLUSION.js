#pragma strict
var player:GameObject;
var minimumDistanceToShow=100;
var distance=0.0;

function Start () {

}

function Update () {
if(player==null){
player=GameObject.Find("player");
}else{
distance = Vector3.Distance(player.transform.position,transform.position);
if(distance<minimumDistanceToShow){
    renderer.enabled = true;

}else{
    renderer.enabled = false;
}
}
}