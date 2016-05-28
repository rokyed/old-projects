#pragma strict
var nextWaypoint:GameObject;
var thisIsTheEnd=false;

function Start () {

}

function Update () {

}


function OnDrawGizmos () {
    Gizmos.DrawIcon (transform.position, "Waypoint.png");
}