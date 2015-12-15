var fs = require('fs');
var map = [];

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

var initTab = function(tab){
	for ( var i = 0; i < 1000; i++ ){
		for ( var j = 0; j < 1000; j++ ){
			tab.push([i], [j]);
		};
	};
};

var updTab = function(instr, numLeftFrom, numLeftTo, numRightFrom, numRightTo){
	
};

fs.readFile('DaySixInput.txt', function( err, data ){
	if (err) throw err;
	
	initTab( map );
		
	var array = data.toString().split(/\r?\n/); //bestandstring naar array

	   for(i = 0; i < array.length; i++ ){  //loop over array
		
		   var instr = getInstr(array[i]);
		   var fromTo  = array[i].match(/\d+,\d{1,3}/g);
		   
		   updTab(instr, fromTo[0], fromTo[1], fromTo[0], fromTo[1]);
		   
		   
   };
});


