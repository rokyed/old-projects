 var guiDepth : int = 0;
static var showWindowsCurrsor=false;

var cursorImage : Texture;

function Start() {

}

function OnGUI() {
  GUI.depth = guiDepth;
if(showWindowsCurrsor){
Screen.showCursor = true;
}else{
 Screen.showCursor = false;
    var mousePos : Vector3 = Input.mousePosition;
    var pos : Rect = Rect(mousePos.x-cursorImage.width/2,Screen.height - mousePos.y-cursorImage.height/2,cursorImage.width,cursorImage.height);
    GUI.Label(pos,cursorImage);
}
}