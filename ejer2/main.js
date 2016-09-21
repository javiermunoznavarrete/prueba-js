var foo = {
    "name" : "desafiolatam",
    "genre" : "Animation",
    "year" : "1996",
    "characters" : [ "javier", "jose", "javiera", "trini" ]
};
 
var bar = foo;
bar[ 'name' ] = "hola";
 
console.log( foo[ 'name' ] );
console.log( bar[ 'name' ] );