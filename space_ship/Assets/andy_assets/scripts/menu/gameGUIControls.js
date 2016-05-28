#pragma strict
static var touchBarController : float;
static var debugIsOn=0;
static var score :int = 0;

var guiPersonalSkin:GUISkin;

function Start () {
touchBarController=0;
score=0;

}

function Update () {

if(score>PlayerPrefs.GetInt("Player Score")){
PlayerPrefs.SetInt("Player Score", score);
 gameGUIMenu.madeNewScore=1;
//print(PlayerPrefs.GetInt("Player Score"));
}


 
}



function OnGUI () {
	GUI.skin = guiPersonalSkin;
    GUI.Label (Rect (Screen.width-310,10, 300, 40),"SCORE:"+score);
    GUI.Label (Rect (Screen.width-310,60, 300, 40),"TOP-SCORE:"+PlayerPrefs.GetInt("Player Score"));

    touchBarController =  GUI.HorizontalSlider (Rect (0, Screen.height-100, Screen.width, 70), touchBarController,-100.0, 100.0);
    
    if (GUI.Button(Rect(10,10,100,40),"Back")){
    Application.LoadLevel(0);
    gameGUIMenu.menuState=1;
    }
    
}
function OnMouseUp () {
  
}