
//initialization of arrays storing all the workouts able to be used

var abWorkouts = [["Plank Hops", 1, true,null], ["Pushup Position Plank", 1, false,null], 
["Situps",2, true, null],["Lower Plank",2,false, "Partial Plank"],["Crunches",2,true, null],
["Mountain Climbers",3,false,null], ["V Ups",3,true,null],["Plank Raise Tap Crunch", 4, false, "Plank"], 
["Shoulder Tap Pushups",4,true, "Shoulder Tap Knee Pushups"],["Lateral Plank Walks",4,true, "Plank"], 
["Jackhammers",5,true, "Situp"]];

var upperChestWorkouts = [["Tension Pushup Hold",1,false, null],["Isometric Chest Push",1,true,null],["Pushups",3,true, "Knee Pushups"],
["Shoulder Tap Pushups",4,true, "Shoulder Tap Knee Pushups"],
["Burpees",4,true, "Burpees With Knee Pushups"],["Decline Pushups", 5, true, "Knee Decline Pushups"], 
["Clap Pushups",6,true, "Clap Knee Pushups"],
["Archer Pushups", 8, true, "Knee Archer Pushups"]];

var lowerChestWorkouts = [ ["Incline Tension Pushup Hold",1,false, null], ["Isometric Chest Push",1,true,null],
["Incline Pushup", 2, true, "Knee Incline Pushup"],
["Pseudo Pushups",5,true, "Knee Pseudo Pushups"], ["Incline Pushup Hold",2,false]];


var tricepWorkouts = [["Incline Tension Pushup Hold",1,false, null],["Incline Pushup", 1, true, "Knee Incline Pushup"],["Tricep Dips",3,false,null]
["Pushups",3,true, "Knee Pushups"],
["Shoulder Tap Pushups",4,true, "Shoulder Tap Knee Pushups"],["Burpees",4,true, "Burpees With Knee Pushups"],
["Lateral Plank Walks",4,true, "Plank"],["Clap Pushups",6,true, "Clap Knee Pushups"]];

var calveWorkouts = [["High Knees",1,true,null], ["Calf Raises",1,false,null], ["Jump Squats",3,true,null]];

var quadWorkouts = [["High Knees",1,true,null], ["Wall sit",1,false,null], ["Mountain Climbers",3,false,null],
["Burpees",4,true,"Burpee With Knee Pushup",null],["One Legged Squat",7,true,"Squat"], ["Pistol Squat",9,true,"Squat"]];

var hamWorkouts = [["Hip Bridges",1,false,null], ["Mountain Climbers",1,true,null], ["Jump Squats",3,true,null],
["One Legged Squat",7,true,"Squat"], ["Pistol Squat",9,true,"Squat"]];

var upperBackWorkouts = [["Lat Pulldown With Towel", 1, true, null],["Arm Swings", 1, false, null],["Diving Dolphin",3,false,null], ["Back Widows",7,true,"Reverse Snow Angels"]];

var lowerBackWorkouts = [["Hip Bridges",1,true,null], ["Goodmornings",1,false,null],["Reverse Snow Angels",2,true,null],["Reverse Superman",2,false,null], ["Superman",3,false,null]];

var shoulderWorkouts = [["Arm Lift",1,true,null],["Jumping Jacks",1,false,null],["Shoulder Press on Floor",2,true,null], ["Diving dolphin",3,false,null], ["Plank Raise Tap Crunch",4,false,"Plank"],
["Shoulder Tap Pushups",4,true,"Shoulder Tap Knee Pushups"], ["Lateral Plank Walks",4,true,"Plank"], ["Decline Pushup",5,true,"Knee Decline Pushup"],
["Archer Pushups",8,true,"Knee Archer Pushups"]];

var bicepWorkouts =[[]];


/*
    Function meant to find an exercise from a specific muscle group
    Input values must be (array,int,booolean)  -> (true-on)(false-off)
*/
function findExercises(muscleGroup,diff,on){ 

    var exercise = null; //storage of variable being returned

    var flag = false;
    do{
        exercise = muscleGroup[Math.floor(Math.random()*muscleGroup.length)]; //random workout 
        
        if((exercise[1] <= diff) && (exercise[2] == on )){ //limits higher than difficulty and on/off must match
            flag = true;
            
        }
        else
            flag = false;

    }while(flag == false)

    return exercise;  
};


function createWorkout(muscleGroups,diff,length){

    var totalArr = [];

    if(length >= muscleGroups.length){
        var counter = 0;
        var used = [];
        while(used.length != length){
            used.push(0);
        }
        while(counter != length){
            var i = Math.floor(Math.random()*muscleGroups.length);
            if(used[i] <= Math.ceil(Math.random()*(length/muscleGroups.length))){
                used[i]++;
                totalArr.push(findExercises(muscleGroups[i], diff, true));
                totalArr.push(findExercises(muscleGroups[i], diff, false));
                counter++;
            }
        }
    }
    return totalArr;
}

/*
    Function to do a countdown timer. (timeleft) must be an integer of 40||20 depending on, "on/off" exercise
*/
var downloadTimer = setInterval(function(timeleft){
    if(timeleft <= 0){
        clearInterval(downloadTimer); //stops ticking
        document.getElementById("countdown").innerHTML = "Finished"; //do something once countdown timer completed
        /*
            Add code here for end
        */
    } 
    else {
        document.getElementById("countdown").innerHTML = timeleft + " seconds"; //keeps ticking
                                                                                //Element by ID gets the id in html corresponding here
    }
    timeleft -= 1;
}, 1000);