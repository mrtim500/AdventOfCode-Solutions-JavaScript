var fs = require('fs');

var map1 = [ 0, 0];
var map2 = [ 0, 0];
var housesVisited = [];
var count = 0;
var countFalse = 0;
var santa;

var addToMap = function(move, aMap){

        switch( move ) {
            case '<':
            	aMap[1] -= 1;
                break;
            case '>':
            	aMap[1] += 1;
                break;
            case '^':
            	aMap[0] += 1;
                break;
            case 'v':
            	aMap[0] -= 1;
                break;
                            };

                 
        if((housesVisited.indexOf(aMap.toString()) === -1 ) ){
            housesVisited.push(aMap.toString());
            count += 1;

        } else {
            countFalse += 1;
        };
      	 
};	



fs.readFile('DayThreeInput.txt', function( err, data) {
    if (err) throw err;

    housesVisited.push(map1.toString()); //startpunt
    count += 1;
    
    for( i = 0; i < data.length; i++ ){
        var currentMove = data.slice(i, i + 1).toString();
        
        if( santa == true ){
        	addToMap(currentMove, map1);
        	santa = false;
        } else {
        	addToMap(currentMove, map2);
        	santa = true;
        }
        
    };

    console.log(count);
    console.log(countFalse);    
});




