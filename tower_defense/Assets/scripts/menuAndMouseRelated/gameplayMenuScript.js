#pragma strict
var customSkin : GUISkin;
var menuState:int=0;
 var guiDepth : int = 1;
function Start () {

}

function Update () {

}
function OnGUI(){
  GUI.depth = guiDepth;
GUI.skin=customSkin;
if(menuState==0){
if (GUI.Button(Rect(0,0,100,25),"Pause Game")){
 menuState=1;
Time.timeScale=0.0;
  }
  if(botSpawnScript.gameStarted==false){
	  if (GUI.Button(Rect(0,35,100,25),"Start Wave")){
		
		botSpawnScript.gameStarted=true;
		}
  }

}else if(menuState==1){
GUI.Window (400053, Rect(Screen.width/2-150,Screen.height/2-250,300,500), PausedGame, "Game Paused");
}
}

function PausedGame(){
if (GUI.Button(Rect(50,50,200,50),"Resume Game")){
 menuState=0;
Time.timeScale=1.0;
  }
  if (GUI.Button(Rect(50,120,200,50),"Next Wave")){
 menuState=0;
botSpawnScript.newWaveStart=true;
Time.timeScale=1.0;
  }
  if (GUI.Button(Rect(50,325,200,50),"Quit To MainMenu")){
Time.timeScale=1.0;
Application.LoadLevel(0);
  }
  if (GUI.Button(Rect(50,400,200,50),"Quit Game")){
Application.Quit();
  }

}