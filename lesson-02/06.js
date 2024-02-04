let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "Bobryisk",
  },
};
let passport2 = structuredClone(passportWithAddress);

console.log(passportWithAddress);
console.log(passport2);
