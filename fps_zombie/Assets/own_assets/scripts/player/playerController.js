#pragma strict
//variables
static var mouseSensivity:float = 7.5;
var maxSpeed:float=5;
var force:float=5;
var horizontal :float;
var vertical:float;


function Start () {
//freezing rotations to not fall over
rigidbody.freezeRotation=true;

}

function FixedUpdate () {
		//player rotates here
		transform.Rotate(Vector3.up *mouseSensivity* Input.GetAxis("Mouse X"));
		//player walk inputs
		horizontal = Input.GetAxis("Horizontal"); 
		vertical = Input.GetAxis("Vertical");
		horizontal *= force;
		vertical *= force;
		//player applies force to rigidbody (walking)	
	 if(rigidbody.velocity.magnitude<maxSpeed){
		rigidbody.AddForce (transform.rotation * Vector3.forward * vertical+transform.rotation * Vector3.right * horizontal);
		//rigidbody.AddForce ();
		}

}