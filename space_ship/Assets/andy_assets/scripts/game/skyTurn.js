#pragma strict

function Start () {

}

function Update () {
   transform.Rotate(Vector3.up*0.2 * Time.deltaTime);

}