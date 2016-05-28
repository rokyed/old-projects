#pragma strict
var ricoche:Transform;
var blood:Transform;
var hit : RaycastHit;

var fireSpeed:float=0.1;
var canFireNow=true;
var hasBullets=true;
function Start () {

}

function FixedUpdate () {
	if(Input.GetAxis("Fire1")==1){
	if(hasBullets){
	CAM_SHAKE.shakeCamNow=true;
	if(canFireNow){
	canFireNow=false;
	fireNow();
	
	}
	}	
    }else{
    CAM_SHAKE.shakeCamNow=false;
    }
}

function fireNow(){
			GUN_MUZZLEFLASH.mzlflsh=true;
			
			var fwd = transform.TransformDirection (Vector3.forward);
 	 		if (Physics.Raycast (transform.position, fwd,hit, 100)) {
  		  		
   		 		
   		 		
   		 		print ("layer:  "+hit.collider.gameObject.layer);
   		 		
   		 		 if (hit.collider.gameObject.layer == 8) {
   		 		 
   		 		 var zombie_script: ZOMBIE_MOTOR = hit.collider.gameObject.GetComponent(ZOMBIE_MOTOR);
                	zombie_script.life--;
                	Instantiate (blood, hit.point,  Quaternion.LookRotation(hit.normal));
          		  }else{
          		  Instantiate (ricoche, hit.point,  Quaternion.LookRotation(hit.normal));
          		  }
   		 		
  	 		}
  	 		
  	 		yield WaitForSeconds(fireSpeed);
  	 	
  	 		canFireNow=true;
}