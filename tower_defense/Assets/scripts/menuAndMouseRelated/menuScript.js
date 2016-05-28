#pragma strict
var customSkin : GUISkin;
var menuState:int=2;
 var guiDepth : int = 1;

function Start () {
//setting the resolution at the start of the game
if(PlayerPrefs.GetInt("res")==1){
Screen.SetResolution (1024, 768, true);
}else if(PlayerPrefs.GetInt("res")==2){
 Screen.SetResolution (1280,1024, true);
}else if(PlayerPrefs.GetInt("res")==3){
Screen.SetResolution (1024, 768, false);
}else if(PlayerPrefs.GetInt("res")==4){
 Screen.SetResolution (1280,1024, false);
}
QualitySettings.SetQualityLevel (PlayerPrefs.GetInt("quality"), true);
}

function Update () {

}

function OnGUI(){
  GUI.depth = guiDepth;
GUI.skin=customSkin;

if(menuState==0){

 GUI.Window (0, Rect(0,100,300,500), MainMenuFunc, "Main Menu");

}else if(menuState==1){
	GUI.Window (1, Rect(0,100,300,500),OptionsFunc, "Options");

}else if(menuState==2){
	GUI.Window (1, Rect(0,100,300,500),OptionsFunc, "Options");
	GUI.Window (2, Rect(320,100,600,500),VideoFunc, "Video");
	
}else if(menuState==3){
	GUI.Window (1, Rect(0,100,300,500),OptionsFunc, "Options");
	GUI.Window (3, Rect(320,100,600,500),SoundFunc, "Sound");	

}else if(menuState==10){
	GUI.Window (10, Rect(0,100,300,500),SGFunc, "Start New Game");
	GUI.Window (11, Rect(320,100,600,500),SGiFunc, "Settings");	
}
}

function MainMenuFunc(){

//main menu
if (GUI.Button(Rect(50,50,200,50),"Start New Game")){
 menuState=10;
  }
  if (GUI.Button(Rect(50,120,200,50),"Options")){
 menuState=1;
  }
 if (GUI.Button(Rect(50,400,200,50),"Exit")){
  Application.Quit();
  }

}
function OptionsFunc(){
//options menu
 if (GUI.Button(Rect(50,50,200,50),"Video")){
 menuState=2;
  }
   if (GUI.Button(Rect(50,120,200,50),"Sound")){
 menuState=3;
  }
   if (GUI.Button(Rect(50,190,200,50),"Show Windows Currsor")){
   if(mouseSkin.showWindowsCurrsor){
mouseSkin.showWindowsCurrsor=false;
}else{
mouseSkin.showWindowsCurrsor=true;
}

  }
if (GUI.Button(Rect(50,400,200,50),"Back")){
 menuState=0;
  }
}
function VideoFunc(){
//all about video settings
 if (GUI.Button(Rect(50,50,200,50),"1024x768 Fullscreen")){
Screen.SetResolution (1024, 768, true);
PlayerPrefs.SetInt("res", 1);
  }
   if (GUI.Button(Rect(50,120,200,50),"1280x1024 Fullscreen")){
 Screen.SetResolution (1280,1024, true);
 PlayerPrefs.SetInt("res", 2);
  }
   if (GUI.Button(Rect(50,190,200,50),"1024x768 Windowed")){
Screen.SetResolution (1024, 768, false);
PlayerPrefs.SetInt("res", 3);
  }
   if (GUI.Button(Rect(50,260,200,50),"1280x1024 Windowed")){
 Screen.SetResolution (1280,1024, false);
 PlayerPrefs.SetInt("res", 4);
  }
  var names = QualitySettings.names;
   GUILayout.BeginArea(Rect(300,50,200,450));
    GUILayout.BeginVertical ();
    for (var i = 0; i < names.Length; i++)
    {
        if (GUILayout.Button (names[i])){
            QualitySettings.SetQualityLevel (i, true);
            PlayerPrefs.SetInt("quality", i);
            }
    }
    GUILayout.EndVertical ();
   GUILayout.EndArea();

}
function SoundFunc(){
//all about sound settings
}
function SGFunc(){
// start game settings
if (GUI.Button(Rect(50,400,200,50),"Back")){
 menuState=0;
  }
}
function SGiFunc(){
if (GUI.Button(Rect(50,50,200,50),"Test Map")){
Application.LoadLevel(1);
  }
// start game settings

}
