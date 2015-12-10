var fs = require('fs');

var map = [ 0, 0];
var housesVisited = [];
var count = 1;

fs.readFile('DayThreeInput.txt', function( err, data) {
    if (err) throw err;

    housesVisited.push(map.toString());
    
    for( i = 0; i < data.length; i++ ){
        var currentMove = data.slice(i, i + 1).toString();

        switch( currentMove ) {
            case '<':
                map[1] -= 1;
                break;
            case '>':
                map[1] += 1;
                break;
            case '^':
                map[0] += 1;
                break;
            case 'v':
                map[0] -= 1;
                break;
                            };

        if(housesVisited.indexOf(map.toString()) === -1 ){
            housesVisited.push(map.toString());
            count += 1;
        };
    }

    console.log(count);
    
});



