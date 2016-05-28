#pragma strict

var minimalDistanceToTouch:float =1;

static var asteroidSpeed :float = 40;
var asteroidDirection : Vector3;
var theAvion : GameObject;



var distanceBetweenAsteroidAndAvion=0;

function Start () {
Destroy (gameObject, 5);
asteroidDirection = Vector3(0,0,-asteroidSpeed);
theAvion = GameObject.Find("Avion");

}

function Update () {



rigidbody.velocity=asteroidDirection;
}

function OnCollisionEnter(other:Collision){

if(other.gameObject.tag=="Player"){

AvionControl.avionIsDestroyed=true;
}

}
