#pragma strict
static var shakeCamNow=false;

var sensivity = 1.0;
var ricocheSensivity=0.1;
var maxRicocheElevation=10;
var ricocheVar=0.0;
var shake:Vector3;
var sx=0.0;
var sy=0.0;
var sz=0.0;



function Start () {
shake=Vector3.zero;

}

function FixedUpdate () {
if(shakeCamNow){

if(ricocheVar<maxRicocheElevation){
ricocheVar+=ricocheSensivity;
}
shake.x= Random.Range(-sensivity,sensivity)-ricocheVar;
shake.y= Random.Range(-sensivity,sensivity);
shake.z= Random.Range(-sensivity,sensivity);

}else{

if(ricocheVar>0){
shake.x= 0-ricocheVar;
shake.y= 0;
shake.z= 0;
ricocheVar-=ricocheSensivity*10;
}


}
transform.localRotation = Quaternion.Euler(shake);
}
