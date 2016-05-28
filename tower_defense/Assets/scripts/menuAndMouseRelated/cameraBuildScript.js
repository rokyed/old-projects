#pragma strict
static var credits:int=200;
var groundLayer=8;
var building:Transform;


function Start () {

}

function Update () {
var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
var hit : RaycastHit;
	
	if(Input.GetAxis("Fire1")>0.1){
		if (Physics.Raycast (ray, hit, 100)) {
			if(hit.collider.gameObject.layer==groundLayer){
				if(guiBuildMenu.buildId==0){
				}else if(guiBuildMenu.buildId==1){
				if(playerStats.money>=300){				
				playerStats.money-=300;
				Instantiate(building,hit.point,Quaternion.Euler( 0 , Random.Range(0, 360) , 0));
				
				}
				
				}
			    
			}
		    
		}
	}
}

