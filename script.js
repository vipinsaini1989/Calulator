
var key = document.querySelectorAll('button');
var myArr = [];
console.log (key);
var ans;
var textVal = document.getElementById('textbox');
var str1 = "";

var result = function(){
	str1 = myArr.join('');
	ans = eval(str1);
	ans = ans.toFixed(2);
	textVal.value = ans;

}

key.forEach(function(keyVal){
	keyVal.addEventListener ('click', function(){
			if (keyVal.value === 'AC'){
				myArr = [];
				textVal.value = null;

				console.log(myArr)
			}
			else if (keyVal.value === "CE"){
				myArr.pop();
				textVal.value = myArr.join('');
				// str1 = myArr.join('');
				console.log(myArr)
			}
			else if (keyVal.getAttribute('class') == "number"){
				myArr.push(keyVal.value);
				textVal.value += keyVal.value;
				console.log(myArr);
			}
			else if(keyVal.value === "equal"){
				result();
			}
	})
});

// after calculation, new no. press should be add to new screen.