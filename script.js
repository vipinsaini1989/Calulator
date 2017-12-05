// Collect all the button in an array
var key = document.querySelectorAll('button');
// div as the text box to display 
var textVal = document.getElementById('textbox');
// blank array for getting all the number and operators
var myArr = [];
// for answer to display
var ans;
// blank string to get the value of the array
var str1 = "";


// Function to display the result
var result = function(){
	str1 = myArr.join('');
	ans = eval(str1);
	ans = ans.toFixed(2);
	textVal.innerText = ans;
};

// Click event 
key.forEach(function(keyVal){
	keyVal.addEventListener ('click', function(){
		// switch ON the calculator and display "0"
			if (keyVal.value === 'AC'){
				myArr = [];
				if(textVal.innerText == ""){
					textVal.innerText = 0;
				}else{
					textVal.innerText = null;
				}
			}
		// Disable the keys if nothing is present on the display
			else if (textVal.innerText == ""){
				key.disabled = true;
			}
		// Dec the display number one by one on key press
			else if (keyVal.value === "CE"){
				myArr.pop();
				textVal.innerText = myArr.join('');
				console.log(myArr);
				if(textVal.innerText == ""){
					textVal.innerText = 0;
				}
			}
		// pushing all the value into an array including the operators
			else if (keyVal.getAttribute('class') === "number"){
				myArr.push(keyVal.value);
			// removing the "0" which is display on blank screen
				if(textVal.innerText == "0"){
					textVal.innerText = " ";
				}
				else if(textVal.innerText === "."){
					key[16].disabled = true;
				}
				textVal.innerText += keyVal.value;
			}
		// calling result function for result
			else if(keyVal.value === "equal"){
				result();
			}
		})
})