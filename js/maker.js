function toggle_chest(source) {
    checkboxes = document.getElementsByName('Chest');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
} 

function toggle_arms(source) {
    checkboxes = document.getElementsByName('Arms');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
} 

function toggle_back(source) {
    checkboxes = document.getElementsByName('Back');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
} 

function toggle_legs(source) {
    checkboxes = document.getElementsByName('Legs');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
} 

function toggle_full(source) {
    checkboxes = document.getElementsByName("Chest");
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
    checkboxes = document.getElementsByName("Legs");
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
    checkboxes = document.getElementsByName("Arms");
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
    checkboxes = document.getElementsByName("Back");
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
} 
