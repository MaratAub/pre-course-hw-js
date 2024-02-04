let passport = {
  name: "Petr",
  surname: "Petrov",
};
let newPassport = Object.assign({}, passport);

// for (let key in passport) {
//   newPassport[key] = passport[key];
// }

newPassport.name = "Ivan";
console.log(passport.name);
console.log(newPassport.name);
