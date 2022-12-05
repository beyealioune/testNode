const userInfo = require("./information")

console.log(userInfo);

let  cowsay  =  require( "cowsay" ) ;

console.log (cowsay.say ( { 
    text : "je m'appel "+userInfo.Name+ " je suis à la "+userInfo.campus, 
    e : "oO" , 
    T : "U " 
} ) ) ;