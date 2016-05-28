#pragma strict
static var mzlflsh=false;

function Start () {

}

function FixedUpdate () {

if(mzlflsh){
TurnOff();
}

}

function TurnOff(){
SUpdate();
yield WaitForSeconds(0.005);
mzlflsh=false;
SUpdate();

}
function SUpdate(){
light.enabled =mzlflsh;
renderer.enabled =mzlflsh;
}