let day;
let dayNumber = process.argv[2]
if (dayNumber == 0) 
{
    day = "Sunday";
}
else if (dayNumber == 1) 
{
    day = "Monday";

}
else if (dayNumber == 2) 
{
    day = "Tuesday";

}
else if (dayNumber == 3) 
{
    day = "Wednesday";

}

else if (dayNumber == 4) 
{
    day = "Thursday";

}
else if (dayNumber == 5)
 {
    day = "Friday";

}
else if (dayNumber == 6) 
{
    day = "Saturday";

}
console.log(day)