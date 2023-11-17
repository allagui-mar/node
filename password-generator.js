
var generator= require('generate-password');
function generatePassword() {
  var myPassword = generator.generate({
    length: 10,
    numbers: true,
    uppercase: true,
    symbols: true,
    strict: true
  });
  console.log(myPassword);
}


generatePassword();