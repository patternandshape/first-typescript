class Greeter {
  constructor (public message: string) {}
  greet() {
    return "Hello, " + this.message;
  }
}

var greeters = [];
greeters.push(new Greeter("world"));
greeters.push(new Greeter("how are you?"));
greeters.push(new Greeter("my baby, hello my honey, hello my ragtime gal!"));
console.log(greeters);
for(var greeter of greeters){
  alert(greeter.greet());
}



//loop examples

// for(var thing of things) {
//   console.log(thing);
// };
//
// for(var thing in things) {
//   console.log(thing);
// };
