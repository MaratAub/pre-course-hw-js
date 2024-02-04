let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA",
  },
};
let passport2 = structuredClone(passportWithAddress);
passport2.address.city = "Bobryisk";
console.log(passportWithAddress);
console.log(passport2);
