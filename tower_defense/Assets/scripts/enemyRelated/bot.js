#pragma strict
var targetPoint:GameObject;
var newTargetPoint:GameObject;
var minimalDistance=3.0;//to look for the next waypoint
var distance=0.0;

var life=100;
var speed=10.0;
var randX=0.0;
var randZ=0.0;
var canUpdateNow=true;

function Start () {
targetPoint=GameObject.Find("wp0");

UpdateNewTarget();
}

function Update () {
distance = Vector3.Distance(transform.position,targetPoint.transform.position);
if(targetPoint!=null){
if(canUpdateNow){
canUpdateNow=false;
UpdateNewTarget();
}
}
if(distance < minimalDistance){

 newTargetPoint=targetPoint.GetComponent(botWaypoint).nextWaypoint;
 
 if(targetPoint.GetComponent(botWaypoint).thisIsTheEnd==true){
Die();
 }else{
 
 targetPoint=newTargetPoint;
 UpdateNewTarget();

 }

}
 transform.Translate(Vector3.forward*Time.deltaTime*speed);

}

function UpdateNewTarget(){
randX=Random.Range(-3.0,3.0);
randZ=Random.Range(-3.0,3.0);
transform.LookAt(Vector3(targetPoint.transform.position.x+randX,targetPoint.transform.position.y,targetPoint.transform.position.z+randZ));
yield WaitForSeconds(2);
canUpdateNow=true;
}


function GetDamaged(damage:int){
if(life<4){
playerStats.money+=50;
Die();
}else{
playerStats.money+=Mathf.Floor(damage/2);
life-=damage;
}

}

function Die(){

 Destroy(gameObject);
}