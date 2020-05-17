//initialization of arrays storing all the workouts able to be used

var images =["Archer Pushups.gif","Arm Lift.gif","Arm Rotations.gif","Back Widows.gif","Burpees With Knee Pushups.gif","Burpees.gif","Calf Raises.gif","Clap Knee Pushups.gif",
"Clap Pushups.gif","Crunches.gif","Decline Pushups.gif","Diving Dolphin.gif","Downward Dog Knee Pushups.gif","Downward Dog Pushups.gif",
"Goodmornings.gif","High Kness.gif","Hip Bridges.gif","Inchworm.gif","Incline Pushup Hold.gif","Incline Pushup.gif","Incline Tension Pushup Hold.gif","Isometric Chest Push.gif",
"Jackhammers.gif","Jump Squats.gif","Jumping Jacks.gif","Kickstand Deadlift.gif","Knee Archer Pushups.gif","Knee Decline Pushups.gif","Knee Incline Pushup.gif",
"Knee Plank to Knee Pushup.gif","Knee Pseudo Push.gif","Knee Pushups.gif","Lat Pulldown with Towel.gif","Lateral Plank Walks.gif","Mountain Climbers.gif","One Legged Squat.gif",
"Partial Plank.gif","Pistol Squat.gif","Plank Hops.gif","Plank Raise Tap Crunch.gif","Plank to Pushup.gif","Plank.gif","Pseudo Pushups.gif","Pushup Position Plank.gif","Pushups.gif",
"Reverse Knee Push Ups.gif","Reverse Push Ups.gif","Reverse Snow Angels.gif","Reverse Superman.gif","Shoulder Press on Floor.gif","Shoulder Tap Knee Pushups.gif","Shoulder Tap Pushups.gif",
"Side Lying Curl.gif","Situps.gif","Squat.gif","Standing Calf Raise on Elevated Surface.gif","Superman.gif","Tension Pushup Hold.gif","Tiptoe Walk.gif","Towel Curl.gif","Tricep Dips.gif",
"Tuck Jump.gif","V Ups.gif","Wall Sit.gif" ]


var abWorkouts = [["Plank Hops", 1, true,null], ["Pushup Position Plank", 1, false,null], ["Situps",2, true, null],
["Plank",2,false, "Partial Plank"],["Crunches",2,true, null],["Mountain Climbers",3,false,null], 
["V Ups",3,true,null],["Plank Raise Tap Crunch", 4, false, "Plank"], ["Shoulder Tap Pushups",4,true, "Shoulder Tap Knee Pushups"],
["Lateral Plank Walks",4,true, "Plank"], ["Jackhammers",5,true, "Situps"]];



var upperChestWorkouts = [["Tension Pushup Hold",1,false, null],["Isometric Chest Push",1,true,null],["Pushups",3,true, "Knee Pushups"],
["Shoulder Tap Pushups",4,true, "Shoulder Tap Knee Pushups"],["Burpees",4,true, "Burpees With Knee Pushups"],
["Decline Pushups", 5, true, "Knee Decline Pushups"], ["Clap Pushups",6,true, "Clap Knee Pushups"],["Archer Pushups", 8, true, "Knee Archer Pushups"]];



var lowerChestWorkouts = [ ["Incline Tension Pushup Hold",1,false, null], ["Isometric Chest Push",1,true,null],["Incline Pushup", 2, true, "Knee Incline Pushup"],
["Pseudo Pushups",5,true, "Knee Pseudo Pushups"], ["Incline Pushup Hold",2,false, null]];


var tricepWorkouts = [["Incline Tension Pushup Hold",1,false, null],["Incline Pushup", 1, true, "Knee Incline Pushup"],["Tricep Dips",3,false,null]
["Pushups",3,true, "Knee Pushups"],["Shoulder Tap Pushups",4,true, "Shoulder Tap Knee Pushups"],["Burpees",4,true, "Burpees With Knee Pushups"],
["Lateral Plank Walks",4,true, "Plank"],["Clap Pushups",6,true, "Clap Knee Pushups"]];


var calveWorkouts = [["High Knees",1,true,null], ["Calf Raises",1,false,null], ["Jump Squats",3,true,null],
["Standing Calf Raise on Elevated Surface", 2, true, "Calf Raise"], ["Jumping Jacks",1,false,null],["Tiptoe Walk",1,true,null]];


var quadWorkouts = [["High Knees",1,true,null], ["Wall sit",1,false,null], ["Mountain Climbers",1,true,null],
["Burpees",4,true,"Burpee With Knee Pushup",null],["One Legged Squat",7,true,"Squat"], ["Pistol Squat",9,true,"Squat"]];


var gluteWorkouts = [["Wall sit",1,false,null], ["Mountain Climbers",1,true,null], ["Jump Squats",3,true,null],["One Legged Squat",7,true,"Squat"], ["Pistol Squat",9,true,"Squat"]];


var hamWorkouts = [["Hip Bridges",1,false,null], ["Mountain Climbers",1,true,null], ["Jump Squats",3,true,null],
["One Legged Squat",7,true,"Squat"], ["Pistol Squat",9,true,"Squat"],["Kickstand Deadlift", 2, false, null]];


var upperBackWorkouts = [["Lat Pulldown With Towel", 1, true, null],["Arm Swings", 1, false, null],["Diving Dolphin",3,false,null], 
["Back Widows",7,true,"Reverse Snow Angels"]];


var lowerBackWorkouts = [["Hip Bridges",1,true,null], ["Goodmornings",1,false,null],["Reverse Snow Angels",2,true,null],
["Reverse Superman",2,false,null], ["Superman",3,false,null]];


var shoulderWorkouts = [["Arm Lift",1,true,null],["Jumping Jacks",1,false,null],["Shoulder Press on Floor",2,true,null], 
["Diving dolphin",3,false,null], ["Plank Raise Tap Crunch",4,false,"Plank"], ["Shoulder Tap Pushups",4,true,"Shoulder Tap Knee Pushups"], 
["Lateral Plank Walks",4,true,"Plank"], ["Decline Pushup",5,true,"Knee Decline Pushup"],["Archer Pushups",8,true,"Knee Archer Pushups"]];


var fullBodyWorkouts = [["Mountain Climbers",1,true,null], ["Burpees",4,true, "Burpees With Knee Pushups"], 
["Inchworm", 1, false, null],["Tuck Jump", 3, true, null],["Jumping Jacks",1,false,null],["Plank to Pushup", 2, true, "Knee Plank to Knee Pushup"]];


var bicepWorkouts =[["Arm Rotations", 1, false, null], ["Lateral Plank Walks",4,true, "Plank"], ["Towel Curl",2,true, null],
["Downward Dog Pushups",3,true,"Downward Dog Knee Pushups"], ["Decline Pushup",5,true,"Knee Decline Pushup"],
["Side Lying Curl",2,true,null],["Reverse Push Ups",4,true,"Reverse Knee Push Ups"]];


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
    var counter = 0;

    if(length >= muscleGroups.length){
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
    }else{
        while(counter != length){
            var i = Math.floor(Math.random()*muscleGroups.length);
            totalArr.push(findExercises(fullBodyWorkouts, diff, true));
            totalArr.push(findExercises(fullBodyWorkouts, diff, false));
            counter++;
        }
    }
    return totalArr;
}


/*
    Creates workout array using set values and returns that whole array. 
*/
function makeWorkoutArray(){
    
    //array of all potential clicked exercises
    var potentials = ["upperChest","lowerChest","calves","quads","hamstrings","glutes","biceps","triceps","upperBack","lowerBack"];
    var muscles = [];

    //get array of muscles
    for(var i = 0; i < potentials.length; i++){
        var check =document.getElementById(potentials[i])
        if(check.checked){
            muscles.push(potentials[i]);
        }
    }

    //adds exercise variable arrays in orderd to call the makeWorkout
    var exerciseGroups = [];
    for(var j = 0; j < muscles.length; j++){

        switch(muscles[j]){
            case "upperChest":
                exerciseGroups.push(upperChestWorkouts);
                break;

            case "lowerChest":
                exerciseGroups.push(lowerChestWorkouts);
                break;

            case "calves":
                exerciseGroups.push(calveWorkouts);
                break;

            case "quads":
                exerciseGroups.push(quadWorkouts);
                break;

            case "hamstrings":
                exerciseGroups.push(hamWorkouts);
                break;

            case "glutes":
               exerciseGroups.push(gluteWorkouts);
                break;

            case "biceps":
                exerciseGroups.push(bicepWorkouts);
                break;

            case "triceps":
                exerciseGroups.push(tricepWorkouts);
                break;

            case "upperBack":
                exerciseGroups.push(upperBackWorkouts);
                break;

            case "lowerBack":
                exerciseGroups.push(lowerBackWorkouts);
                break;
        }
    }

    //get difficulty
    var slider = document.getElementById("myRange");
    var diff = slider.value;

    //get length
    var len = document.getElementById("fname");
    var length = parseInt(len.value);

    localStorage.setItem('myObject', JSON.stringify(createWorkout(exerciseGroups,diff,length)));  
};


function makeList() {

    var myObject = JSON.parse(localStorage.getItem('myObject'));

    // Establish the array which acts as a data source for the list
    let listData = myObject,

    // Make a container element for the list
    listContainer = document.createElement('div'),

    // Make the list
    listElement = document.createElement('ol'),

    // Set up a loop that goes through the items in listItems one at a time
    numberOfListItems = listData.length,listItem,i;

    // Add it to the page
    document.getElementsByTagName('body')[0].appendChild(listContainer);
    listContainer.appendChild(listElement);
    

    for (i = 0; i < listData.length; ++i) {

        // create an item for each one
        listItem = document.createElement('li');

        // Add the item text
        if(i % 2 == 0){
            listItem.innerHTML = listData[i][0]+" -- 40s"; //[i][1] gets name
        }
        else{
            listItem.innerHTML = listData[i][0]+" -- 20s";
        }

        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }
}


function startTimer(duration, display) {

    var index = 0;
    var myObject = JSON.parse(localStorage.getItem('myObject'));
    var timer = duration[index], minutes, seconds;

    setInterval(function () {

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration[index];
        }
        if(timer == 0){
            index++;
            
            if(index < duration.length){
                document.getElementById("exerciseDisplay").src = "img/Exercises/"+myObject[index][0]+".gif";
                document.getElementById("exerciseName").innerHTML = myObject[index][0];
            
                if(myObject[index][3] != null){
                    document.getElementById("alternate").innerHTML = myObject[index][3];
                }else{
                    document.getElementById("alternate").innerHTML = "No Alternate";
                }
                
                if(index+1!=duration.length){
                    document.getElementById("exerciseUpcoming").innerHTML = myObject[index+1][0];
                }else{
                    document.getElementById("exerciseUpcoming").innerHTML = "End";
                }
            }
        }

        if(index >= duration.length){
            display.textContent = "0" + 0 + ":" + 0 + "0";
            clearInterval();
            return;
        }
    }, 1000);
}


function alternate(){
    if(document.getElementById("alternate").innerHTML !="No Alternate" ){
        var name=document.getElementById("exerciseName").innerHTML; 
        var alternate= document.getElementById("alternate").innerHTML;
        document.getElementById("exerciseName").innerHTML =alternate;
        document.getElementById("alternate").innerHTML=name;
        document.getElementById("exerciseDisplay").src = "img/Exercises/"+alternate+".gif";
    }
}


function check(){

    var potentials = ["upperChest","lowerChest","calves","quads","hamstrings","glutes","biceps","triceps","upperBack","lowerBack"];
    var j;

    try{
        var len = document.getElementById("fname");
        var length = parseInt(len.value);
    }catch(err){
        failure();
    }

    //get array of muscles
    for(var i = 0; i < potentials.length; i++){
        var check = document.getElementById(potentials[i])
        if(check.checked){
            j++;
        }
    }

    if(i == 0) {
        failure();
    }else{
        makeWorkoutArray();
        window.location.href = 'overview.html';
    }
}


function failure(){
    alert("Action Failed");

}


function timer() {
    var myObject = JSON.parse(localStorage.getItem('myObject'));
    var display = document.querySelector('#time');

    var duration = [];
    for(var i = 0; i< myObject.length;i++){
        if(myObject[i][2]){
            duration.push(40);
        }else{
            duration.push(20);
        }
    }
    
    document.getElementById("exerciseDisplay").src = "img/Exercises/"+myObject[0][0]+".gif";
    document.getElementById("exerciseName").innerHTML= myObject[0][0];
    document.getElementById("exerciseUpcoming").innerHTML = myObject[1][0];

    if(myObject[0][3] != null){
        document.getElementById("alternate").innerHTML = myObject[0][3];
    }else{
        document.getElementById("alternate").innerHTML = "No Alternate";
    }
    
    startTimer(duration, display);
};