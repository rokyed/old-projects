#pragma strict

var cameraMinY=10.0;//camera limits on the height
var cameraMaxY=30.0;//camera limits on the height
var cameraMinX=-100.0;//camera limits on x
var cameraMaxX=100.0;//camera limits on x
var cameraMinZ=-100.0;//camera limits on z
var cameraMaxZ=100.0;//camera limits on z

var cameraMinElevationAngle=30;// minimum elevation angle for the camera
var cameraMaxElevationAngle=80;// maximum elevation angle for the camera

var scrollSensivity=5.0;//this will make the camera scroll faster
var rotateSensivity=3.0;//this will make the camera scroll faster
var zoomSensivity=3.0;//this will make the camera scroll faster
var elevateSensivity=3.0;//this will make the camera scroll faster
var cameraYAngle:float = 45.0;
//here the modifiable variables during runtime


var cameraAngle=45.0;
var cameraY=15.0;

private var horizontalRotate=0.0;
private var elevationAngle=0.0;
private var zoom=0.0;

var mousePos:Vector3;


function Start () {


}

function FixedUpdate () {

//get inputs

mousePos=Input.mousePosition;
horizontalRotate=Input.GetAxis("Mouse X")*rotateSensivity;

zoom=-Input.GetAxis("Mouse ScrollWheel")*zoomSensivity;
elevationAngle=-Input.GetAxis("Mouse ScrollWheel")*elevateSensivity;

//recalculate position and angles

cameraAngle+=elevationAngle;
if(Input.GetMouseButton(2)){
cameraYAngle+=horizontalRotate;
}
cameraY+=zoom;
//move on mouse position
if(mousePos.x<5){
transform.Translate(-Vector3.right*Time.deltaTime*scrollSensivity*(cameraAngle/10));
}else if (mousePos.x> Screen.width-5){
transform.Translate(Vector3.right*Time.deltaTime*scrollSensivity*(cameraAngle/10));
}
if(mousePos.y<5){
transform.Translate(-Vector3.forward*Time.deltaTime*scrollSensivity*(cameraAngle/10));
}else if (mousePos.y> Screen.height-5){
transform.Translate(Vector3.forward*Time.deltaTime*scrollSensivity*(cameraAngle/10));
}
//limit positions and angles

//x
if(transform.position.x<cameraMinX){
transform.position.x=cameraMinX;
}else if(transform.position.x>cameraMaxX){
transform.position.x=cameraMaxX;
}
//y
if(cameraY<cameraMinY){
cameraY=cameraMinY;
}else if(cameraY>cameraMaxY){
cameraY=cameraMaxY;
}
//z
if(transform.position.z<cameraMinZ){
transform.position.z=cameraMinZ;
}else if(transform.position.z>cameraMaxZ){
transform.position.z=cameraMaxZ;
}
if(cameraAngle<cameraMinElevationAngle){
cameraAngle=cameraMinElevationAngle;
}else if(cameraAngle>cameraMaxElevationAngle){
cameraAngle=cameraMaxElevationAngle;
}

//reupdate the position variable 

//and transform
//transform.position=cameraPosition;
transform.eulerAngles=Vector3(cameraAngle,cameraYAngle,0.0);
transform.position.y=cameraY;


}