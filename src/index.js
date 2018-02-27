module.exports = function longestConsecutiveLength(array) {

 array.sort(function(a, b){
		return a-b;
	});

		if (array.length==0) {
		return 0;
	}

	if (array.length==1) {
		return 1;
	}


var maxLenght=0;
var len=1;

for( var i=1; i<array.length; i++) {
	if(array[i]-1 == array[i-1]) {
		len++;
	}

else if (array[i] == array[i-1]) {
continue;
 }

	if(array[i]-1!=array[i-1]) {
		maxLenght=Math.max(maxLenght, len);
		len=1;
	}

}

return maxLenght;

}

