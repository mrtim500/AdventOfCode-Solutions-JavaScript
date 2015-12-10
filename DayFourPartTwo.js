var crypto = require('crypto');

var input = 'yzbqklnj';
var count = 5711820;
var hash = '';
var inputStr = '';

while(hash.toString().slice(0, 6) !== '000000' ){
	
    hash = crypto.createHash('md5').update(inputStr).digest("hex");
	
	//console.log(hash);
	console.log(inputStr);

	inputStr = input + count;
	count++;
	
};

