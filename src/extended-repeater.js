module.exports = function repeater(str, options) {
  let arr =[];
	let repeatTimes = options.repeatTimes;
  if (repeatTimes == undefined) repeatTimes = 1;
	if (str === null) str = "null";

	for (let i = 0; i < repeatTimes; i++) {
		arr.push(str)
	}

	const finishRepiter = (arr) => {
		let length = arr.length;
		let separator = options.separator;
		let addition = options.addition;

		if (addition === null) addition = "null";
		if (typeof addition == "boolean")	addition = addition.toString();

		for (let i = 0; i < length; i++) {
			if (addition && arr[i]) {
				arr[i] += additionRepeat(options);
			}		
			if (separator && arr[i+1]) {
				arr[i] += separator;
			} else if(arr[i+1]) {
				arr[i] += '+';
			} 
		}

		return arr.join('');
	}

	return finishRepiter(arr);
};

const additionRepeat = (options) => {
	let additionArr = [];

  if (options.addition === null) options.addition = "null";

	let addition = options.addition.toString();
	let additionRepeatTimes = options.additionRepeatTimes;
	let additionSeparator = options.additionSeparator;

	if (additionRepeatTimes == undefined) additionRepeatTimes = 1;

	for (let i = 0; i < additionRepeatTimes; i++) {
		additionArr.push(addition);	
	}

	for (let i = 0; i < additionRepeatTimes; i++) {
		if(additionArr[i+1]) {
			additionArr[i] += additionSeparator;
		}
	}
	return additionArr.join('');
}