var fs = require('fs');

var getInstr = function(line){
	   //get instructions
	   if ( line.indexOf('toggle') !== -1 ){
		   return 1;
	   } 
	   if ( line.indexOf('turn off') !== -1 ){
		   return 2;
	   } 
	   if ( line.indexOf('turn on') !== -1 ){
		   return 3;
	   } 
};

fs.readFile('DaySixInput.txt', function( err, data ){
	if (err) throw err;
	
	var array = data.toString().split(/\r?\n/); //bestandstring naar array

	   for(i = 0; i < array.length; i++ ){  //loop over array
		
		   var instr = getInstr(array[i]);
		   var fromTo  = array[i].match(/\d+,\d{1,3}/g);
		   
		   
		   
   };
});


