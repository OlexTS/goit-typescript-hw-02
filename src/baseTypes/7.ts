/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay {
  sunday = "SUNDAY",
  monday = "MONDAY",
  tueday = "TUESDAY",
  wednesday = "WEDNESDAY",
  thursday = "THURSDAY",
  friday = "FRIDAY",
  saturday = "SATURDAY",
}

const isWeekend = (day: WeekDay): boolean => {
  if (day === "SATURDAY" || day === "SUNDAY") {
    return true;
  }
  return false;
};
