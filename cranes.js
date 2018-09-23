const input = document.getElementById('input');
const button = document.getElementById('button');
const port_a = document.getElementById('port-a');
const port_b = document.getElementById('port-b');
const port_c = document.getElementById('port-c');
const moveCranes = function(plate, slot_a, slot_b, slot_c) {
	setTimeout(function() {
	    if (plate > 0) {
	        moveCranes(plate - 1, slot_a, slot_c, slot_b);
	        port_a.innerHTML = "Moving plate " + plate + " from " + slot_a + " to " + slot_c + "..." + "</br>";
	        port_c.innerHTML = "Moving plate " + plate + " from " + slot_a + " to " + slot_c + "..." + "</br>";
	        moveCranes(plate - 1, slot_b, slot_a, slot_c);
	        port_b.innerHTML = "Moving plate " + plate + " from " + slot_a + " to " + slot_c + "..." + "</br>";
	    }
	}, 2000);
};

const checkIfInputIsValid = (inputValue) => {
	return inputValue === '' || inputValue === ' ';
};
button.addEventListener('click', function() {
	if (checkIfInputIsValid(input.value)) {
		alert('value is empty');
	} else {
		moveCranes(input.value,"slot_a","slot_b","slot_c");
	}
}, false);

input.addEventListener('keypress', function(event) {
  	if (event.which === 13) {
  		if (checkIfInputIsValid(input.value)) {
   			alert('value is empty');
 		} else {
    		moveCranes(input.value,"slot_a","slot_b","slot_c");
 		}
	}
}, false);