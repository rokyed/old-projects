#pragma strict
var range:float=3.0;
var crosshairTexture : Texture2D;
var position : Rect;
var fireRate:float=0.3;
var fire=true;
var mainCubeLayer=10;
var cubeLayer=8;
var minimalDistance:float=1;
var distance:float=0;
var colliderTransform:Vector3;
var newCubePosition:Vector3;
var tooNearTargetBoxPref:Transform;
var targetBoxPref:Transform;
var cubePref:Transform;

var boxes:int = 10;

function Start () {
    position = Rect((Screen.width - crosshairTexture.width) / 2, (Screen.height -  crosshairTexture.height) /2, crosshairTexture.width, crosshairTexture.height);

}

function FixedUpdate () {

	var hit : RaycastHit;
	var fwd = transform.TransformDirection (Vector3.forward);
	
	
	
	if(fire){
			 
		if (Physics.Raycast (transform.position, fwd,hit, range)) {
			distance=Vector3.Distance(transform.position,hit.point);
			if(distance>=minimalDistance){
			  Instantiate(targetBoxPref,hit.point,Quaternion.identity);   
			    }else if(distance<minimalDistance){
			  Instantiate(tooNearTargetBoxPref,hit.point,Quaternion.identity);   
			  }
			   
			if(Input.GetAxis("Fire1")>0.1){
				if(boxes>0){
				 	
					if(distance>minimalDistance){
					
				     if(hit.collider.gameObject.layer==cubeLayer ||hit.collider.gameObject.layer==mainCubeLayer){
				     
						   		colliderTransform=hit.collider.transform.position;
						  
						   
							     if(hit.point.x>=colliderTransform.x+0.5){
							    newCubePosition.x=colliderTransform.x+1;
							    }else if(hit.point.x<=colliderTransform.x-0.5){
							    newCubePosition.x=colliderTransform.x-1;
							    }else if(hit.point.x>colliderTransform.x-0.5 && hit.point.x<colliderTransform.x+0.5){
							    newCubePosition.x=colliderTransform.x;
							    }
							    
							     if(hit.point.y>=colliderTransform.y+0.5){
							    newCubePosition.y=colliderTransform.y+1;
							    }else if(hit.point.y<=colliderTransform.y-0.5){
							    newCubePosition.y=colliderTransform.y-1;
							    }else if(hit.point.y>colliderTransform.y-0.5 && hit.point.y<colliderTransform.y+0.5){
							    newCubePosition.y=colliderTransform.y;
							    }
							     if(hit.point.z>=colliderTransform.z+0.5){
							    newCubePosition.z=colliderTransform.z+1;
							    }else if(hit.point.z<=colliderTransform.z-0.5){
							    newCubePosition.z=colliderTransform.z-1;
							    }else if(hit.point.z>colliderTransform.z-0.5 && hit.point.z<colliderTransform.z+0.5){
							    newCubePosition.z=colliderTransform.z;
							    }
							    fire=false;
						        fireRateUpdate();
							     Instantiate(cubePref,newCubePosition,Quaternion.identity); 
							     boxes--;
							     
						       }
				       }
				       
				    }
				   }  	
			  
			    if(Input.GetAxis("Fire2")>0.1){
			    
			    	 fire=false;
			        fireRateUpdate();
			        
			    if(hit.collider.gameObject.layer==cubeLayer){
			    	boxes++;
			        Destroy(hit.collider.gameObject);
			        }
			       
			    } 
			    
			    
		}
	}
}

function OnGUI(){
GUI.DrawTexture(position, crosshairTexture);
GUI.Label(Rect(10,10,200,30),"Boxes:"+boxes);
}

function fireRateUpdate(){
yield WaitForSeconds(fireRate);
fire=true;
}
