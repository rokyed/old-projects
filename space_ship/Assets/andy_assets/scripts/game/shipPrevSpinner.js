#pragma strict

function Start () {

}

function Update () {
    transform.Rotate(Vector3.up*20 * Time.deltaTime);

}