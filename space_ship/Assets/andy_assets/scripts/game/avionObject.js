#pragma strict

var explosionObject :Transform;

function Start () {

}

function Update () {

transform.localRotation = Quaternion.Euler(0,60*(gameGUIControls.touchBarController*0.01),0);
gameGUIControls.score++;

if(AvionControl.avionIsDestroyed==true){
Instantiate (explosionObject,gameObject.transform.position,Random.rotation);
Destroy (gameObject);
}

}