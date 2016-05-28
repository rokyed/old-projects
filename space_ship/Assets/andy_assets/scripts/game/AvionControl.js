#pragma strict
var turnSpeed=0;
 var controllerRotation : float;
var turnControl=0;
static var avionIsDestroyed:boolean=false;
function Start () {
turnSpeed=360;
}

function Update () {

turnControl=gameGUIControls.touchBarController;
if(avionIsDestroyed==true){
youLost();
avionIsDestroyed=false;

}

turnSpeed=360*Mathf.Abs(turnControl*0.01);
controllerRotation = turnControl*0.01 * turnSpeed;
	controllerRotation *= Time.deltaTime;
    
 	 transform.Rotate (0, 0, controllerRotation);
}

function youLost(){
yield WaitForSeconds(3);
Application.LoadLevel(0);
gameGUIMenu.menuState=1;


}