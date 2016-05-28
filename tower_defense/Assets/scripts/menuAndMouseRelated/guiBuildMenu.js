#pragma strict
var guiDepth : int = 1;
static var buildId:int=0;//0 does not builds , from 1 to infinite can build specific building if implemented
var customSkin : GUISkin;
var menuState:int=0;

// here are the textures
//the arrow
var arrow:Texture;
var research:Texture;
var build:Texture;
// ressource lab
var powerIcn:Texture;
var damageIncrease:Texture;

// build lab
var build1:Texture;
var build2:Texture;
var build3:Texture;
var build4:Texture;
var build5:Texture;

function Start () {

}

function Update () {

}
function OnGUI(){
 GUI.depth = guiDepth;
GUI.skin=customSkin;

if(menuState==0){

 GUI.Window (0, Rect(Screen.width-135,Screen.height-200,135,200), BuildWindow, "Build Menu");

}else{
	GUI.Window (1, Rect(Screen.width-135,Screen.height-200,135,200), Upgrades, "Research Center");
}
  
}
function BuildWindow(){
 
  if (GUI.Button(Rect(0,20,45,45),arrow)){
  buildId=0;
  }
   if (GUI.Button(Rect(45,20,45,45),build1)){
  buildId=1;
  }
   if (GUI.Button(Rect(90,20,45,45),build2)){
  buildId=1;
  }
   if (GUI.Button(Rect(0,65,45,45),build3)){
  buildId=1;
  }
    if (GUI.Button(Rect(45,65,45,45),build4)){
  buildId=1;
  }
    if (GUI.Button(Rect(90,65,45,45),build5)){
  buildId=1;
  }
   if (GUI.Button(Rect(0,155,135,45),research)){
 menuState=1;
  }

}
function Upgrades(){
if (GUI.Button(Rect(0,20,45,45),powerIcn)){
  if(playerStats.money>=300){
  playerStats.power+=10;
  playerStats.money-=300;
  }
  }
 if (GUI.Button(Rect(0,155,135,45),build)){
 menuState=0;
  }

}