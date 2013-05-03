var a = 1;
var {b, c} = {b:'This Is B', c: 'This Is C'};

class Hello{

    constructor(greeting){
        this.greeting = greeting;
    }
};

var object = {   a,
    toString() { return b; }
};

function temp(a) {
    console.log(a);
}

temp.bind(null, "asd");

var d = [2, 3, 4];
var e = [1, ...d];
