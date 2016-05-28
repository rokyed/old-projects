#pragma strict
var theAvionObj :Transform;
var speedRotate=0;

function Start () {
theAvionObj =GameObject.Find("AvionControlPref").transform;
}

function Update () {


transform.rotation=Quaternion.Slerp (this.transform.rotation,theAvionObj.rotation, Time.deltaTime * speedRotate);


}