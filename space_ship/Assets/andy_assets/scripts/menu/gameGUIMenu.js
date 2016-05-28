#pragma strict

static var menuState=0;//0 is menu ,1 is gameover menu
static var madeNewScore=0;
var guiPersonalSkin:GUISkin;


function Start () {

}

function Update () {

}
function OnGUI () {

GUI.skin = guiPersonalSkin;
if(menuState==0){
 	if (GUI.Button(Rect(10,10,100,40),"Start")){
 	menuState=2;
    Application.LoadLevel(1);
    }
   
    if (GUI.Button(Rect(10,60,100,40),"Erase score")){
    PlayerPrefs.DeleteAll();
    }
      if (GUI.Button(Rect(10,110,100,40),"Quit")){
    Application.Quit();
    }
 
   
}
if(menuState==1){
if (GUI.Button(Rect(10,10,100,40),"Back To Menu")){
    menuState=0;
    madeNewScore=0;
    }
    
GUI.Label (Rect (Screen.width/2-150,Screen.height/2-50, 300, 40),"GAME OVER");
if(madeNewScore==1){
GUI.Label (Rect (Screen.width/2-150,Screen.height/2-0, 300, 40),"CONGRATULATIONS");
GUI.Label (Rect (Screen.width/2-150,Screen.height/2+50, 300, 40),"NEW TOP SCORE");
}
}

if(menuState==2){
GUI.Label (Rect (Screen.width/2-150,Screen.height/2-50, 300, 40),"LOADING");
GUI.Label (Rect (Screen.width/2-150,Screen.height/2-0, 300, 40),"LOADING");
GUI.Label (Rect (Screen.width/2-150,Screen.height/2+50, 300, 40),"LOADING");
}
 GUI.Label (Rect (Screen.width-310,10, 300, 40),"TOP-SCORE:"+PlayerPrefs.GetInt("Player Score"));


}