// the tag to search for (set this value in the inspector)
var searchTag = "Respawn";
var maxDamage=10.0;

var rangeToAttack=10.0;
var fireSpeed=0.3;
var canFireNow=true;
var distance=0.0;

// the frequency with which to re-scane for new nearest target in seconds 
// (set in inspector)
var scanFrequency = 0.1;
var dmg=0.0;

// the current target
private var target : Transform;


function Start() {
    // set up repeating scan for new targets:
    InvokeRepeating("ScanForTarget", 0, scanFrequency );
}

function Update() {

    // we attac the player (if there is one)
    if (target != null) {
    distance = Vector3.Distance(transform.position,target.position);
   
    
    if(canFireNow&& distance<rangeToAttack){
    canFireNow=false;
    FireNow();
        }
    }
}
function FireNow(){
dmg=Random.Range(0.0,maxDamage);
target.gameObject.SendMessage ("GetDamaged", dmg);
audio.Play();
yield WaitForSeconds(fireSpeed);
canFireNow=true;
}

function ScanForTarget() {
    // this should be called less often, because it could be an expensive
    // process if there are lots of objects to check against
    target = GetNearestTaggedObject();

}

function GetNearestTaggedObject() : Transform {
    // and finally the actual process for finding the nearest object:

    var nearestDistanceSqr = Mathf.Infinity;
    var taggedGameObjects = GameObject.FindGameObjectsWithTag(searchTag); 
    var nearestObj : Transform = null;

    // loop through each tagged object, remembering nearest one found
    for (var obj : GameObject in taggedGameObjects) {

        var objectPos = obj.transform.position;
        var distanceSqr = (objectPos - transform.position).sqrMagnitude;

        if (distanceSqr < nearestDistanceSqr) {
            nearestObj = obj.transform;
            nearestDistanceSqr = distanceSqr;
        }
    }

    return nearestObj;
}



@script RequireComponent(AudioSource)