"use strict";
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek["Lundi"] = "Lundi";
    DaysOfWeek["Mardi"] = "Mardi";
    DaysOfWeek["Mercredi"] = "Mercredi";
    DaysOfWeek["Jeudi"] = "Jeudi";
    DaysOfWeek["Vendredi"] = "Vendredi";
    DaysOfWeek["Samedi"] = "Samedi";
    DaysOfWeek["Dimanche"] = "Dimanche";
})(DaysOfWeek || (DaysOfWeek = {}));
let harry = {
    firstName: "Harry",
    lastName: "Potter",
    age: 42,
    dayOfBirth: DaysOfWeek.Lundi,
};
console.log(harry);
