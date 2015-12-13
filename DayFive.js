var fs = require('fs');
var countok = 0;

fs.readFile('DayFiveInput.txt', function( err, data ) {
   if (err) throw err;

   var array = data.toString().split(/\r?\n/);

   for(i = 0; i < array.length; i++ ){ 

        var val1 = false;    
        var val2 = false;
        var val3 = false;          

       //validation 1
       if ( array[i].match(/[aeiou]/gi) != null && array[i].match(/[aeiou]/gi).length >= 3 ){
           val1 = true;
       };       
       
       //validation 2
       var pat = /([a-z])\1/i;
       if (pat.test(array[i]) == true){
           val2 = true;
       }
       
       //validation 3
       if (array[i].match(/ab|cd|pq|xy/i) != null){
           val3 = true;
       }

       if ( val1 == true && val2 == true && val3 == false ){
           countok++;
       }
    
       
   };

    console.log(countok);
});
