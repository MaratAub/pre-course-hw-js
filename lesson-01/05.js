let rule =
  "Еще не родился тот человек, который, поставил бы цель, и не смог бы стать программистом.";
let ruleLength = rule.length;

switch (ruleLength) {
  case ruleLength > 25:
    console.log("У меня 100 пудов все получится");

  case ruleLength < 25:
    console.log("Все таки нет правил без исключения");
    break;
  default:
    console.log("50 на 50");
}
