module.exports = function longestConsecutiveLength(array) {

	if (array.length < 2) {
		return array.length;
	}

	let maxLenght = 0;
	let currentLength = 1;

	array.sort(function(a, b){
		return a - b;
	});

	let newArr = array.filter(function(item, i, arr) {
		if(item !== arr[i+1]) {
			return item;
		}
	});

	newArr.forEach(function(item, i, arr) {
		if(arr[i+1]-1 === item) {
			currentLength++;
		}  
		
		if(arr[i+1]-1 !== item) {
			maxLenght = Math.max(maxLenght, currentLength);
			currentLength = 1;
		}
	});

	return maxLenght;
}
