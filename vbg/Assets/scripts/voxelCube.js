#pragma strict
var mainCamera:GameObject;
function Start () {
mainCamera=GameObject.Find("Main Camera");

}

function FixedUpdate () {
transform.LookAt(mainCamera.transform);

}