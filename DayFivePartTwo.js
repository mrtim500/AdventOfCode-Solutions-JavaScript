var fs = require('fs');
var countok = 0;

var checkDub = function(word){
	for ( i = 0; i < word.length; i++ ){
		var pattern = word.slice(i,i+2);
		var rest    = word.slice(i+2,word.length);
		
		if ( pattern.length == 2){
			if ( rest.indexOf(pattern) !== -1 ){
				return true;
			}
		};
	}
};

var checkPattern = function(word){

	for ( var i = 0; i < word.length; i++ ){
		var letter  = word[i];
		var letter2 = word[i+2];

		if ( letter.length == 1 && letter2 != undefined ){
			if (letter2 == letter ){
				return true;
			}
		}
		
	};
};

fs.readFile('DayFiveInput.txt', function( err, data ) {
   if (err) throw err;

   var array = data.toString().split(/\r?\n/);

   for( var i = 0; i < array.length; i++ ){ 

        var val1 = false;    
        var val2 = false;       

       //validation 1
       val1 = checkDub(array[i]);      

       //validation 2
       val2 = checkPattern(array[i]);
       

       if ( val1 == true && val2 == true ){
           countok++;
       }
    
       
   };

    console.log(countok);
});
