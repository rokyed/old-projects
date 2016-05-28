#pragma strict
var thePlayer:GameObject;
function Start () {
thePlayer = GameObject.Find("player");

}

function FixedUpdate () {
transform.LookAt(thePlayer.transform);
  rigidbody.AddForce(10*Vector3.forward * Time.deltaTime);

}