#pragma strict
var canBeCalled=true;
var updateFrequency=10;
var player:GameObject;
var gravity:float=5;
var speed : float = 6;
 var life=30;



//var 
private var moveDirection : Vector3 = Vector3.zero;

function Start () {

life=Random.Range(10, 20);

}



function FixedUpdate () {
if(player==null){
player=GameObject.Find("player");
}else{
if(canBeCalled){
canBeCalled=false;
CalledByUpdate();
}
}
}

function CalledByUpdate(){
if(life<=0){
ZOMBIE_SPAWN.zombies--;
Destroy(gameObject);
}
 var controller : CharacterController = GetComponent(CharacterController);
 if(controller.isGrounded){
//look at player
transform.LookAt(Vector3(player.transform.position.x,transform.position.y,player.transform.position.z));
//go towards player
moveDirection = transform.forward*speed;

}
//gravity
moveDirection.y -=gravity;



//move character
controller.Move((moveDirection) * Time.deltaTime);


//hold 
yield WaitForSeconds(updateFrequency/1000);
canBeCalled=true;
}