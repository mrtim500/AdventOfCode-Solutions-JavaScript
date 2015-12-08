var fs = require('fs');
var total = 0;

fs.readFile('DayTwoInput.txt', function( err, data) {
    if (err) throw err;

    var array = data.toString().split(/\r?\n/);

    for(i = 0; i < array.length; i++ ){

        var dimensions = array[i].split("x");
        var l = dimensions[0]; //(L)ength
        var w = dimensions[1]; //(W)eigth
        var h = dimensions[2]; //(H)eight
        
        var surface = (2*l*w) + (2*w*h) + (2*h*l) + Math.min((l*w), (w*h), (h*l));
        
        total += surface;
    }
    console.log(total);
})

