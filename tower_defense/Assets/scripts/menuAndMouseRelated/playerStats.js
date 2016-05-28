#pragma strict
var customSkin : GUISkin;
 var guiDepth : int = 1;
 
 var lifeIcn : Texture;
var powerIcn : Texture;
var moneyIcn : Texture;
static var life=30;
static var power=10;
static var money=3000;

function Start () {

}

function Update () {

}
function OnGUI(){
  GUI.depth = guiDepth;
GUI.skin=customSkin;
if (GUI.Button(Rect(Screen.width-400,0,100,25),GUIContent(life.ToString(),lifeIcn))){

  }
  if (GUI.Button(Rect(Screen.width-300,0,100,25),GUIContent(power.ToString(),powerIcn))){

  }
  if (GUI.Button(Rect(Screen.width-200,0,200,25),GUIContent(money.ToString(),moneyIcn))){

  }

}