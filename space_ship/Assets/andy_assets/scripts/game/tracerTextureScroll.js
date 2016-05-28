#pragma strict
var scrollSpeed : float = 0.5;
var offset : float=0;
 
function Update () {
    offset= Time.time * scrollSpeed;
    renderer.material.SetTextureOffset ("_MainTex", Vector2(offset,0));
}