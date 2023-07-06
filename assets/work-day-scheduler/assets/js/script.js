//link the current day in with html class "currentDay"
var exactCurrentDateTime = moment().format('dddd, MMMM Do YYYY, hh:mm:ss a')
console.log("The exact current time is " + exactCurrentDateTime)
/*create a variable for the HTML element that will display the current Date and Time
    COULD WE CHANGE THE STYLING ON THIS TO GIVE MORE OF A SPACE BEFORE THE FOLLOWING CODE???

        WILL THE CALENDAR ALWAYS DISPLAY THE CORRECT TIME ZONE FOR THE USER???*/

var displayCurrentDateTime = $('#Today')
displayCurrentDateTime.text(exactCurrentDateTime);
//add the function from moment for current hour
var currentHour = moment().hour();
console.log("The current hour in military time is " + currentHour);
var currentTimeSlot = currentHour;
console.log("the current time slot is " + currentTimeSlot);
var minimumTime = 9
var maximumTime = 17
var timeArray = moment().toObject()
console.log(timeArray);
//time from 9am until NOW
var nineAM = moment([2022, 0, 8, 9, 0, 0]).from(moment())
console.log(nineAM);
var fivePM = moment([2022, 0, 8, 17, 0, 0]).from(moment())
console.log(fivePM);
//create a function that will save things to local storage when save button is clicked



//create a series of hourly time blocks from 9am to 5pm - 8 hours
function checkPresentTimeSlot () {
//jQuery version of a for loop for class "time-block"
    $(".time-block").each(function () {
/*must use parseInt to convert the string to number, to compare to current hour 
in if statement(i.e. 10am to just 10) */
        var timeBlockId = parseInt($(this).attr("id"))
        console.log("The time Block in loop is " + timeBlockId,"current hour is " + currentHour)

        //run if statements to compare id's to currentHour
        if (timeBlockId < currentHour) {
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');
        } else 
        if (timeBlockId === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
            $(this).removeClass('future');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }        
    })
}
checkPresentTimeSlot();
$('.saveBtn').on('click', function () {
    console.log(this);
    var inputText = $(this).siblings(".description").val();
    var inputTime = $(this).parent().attr('id');
    localStorage.setItem(inputTime, inputText);
})
$('#9am .description').val(localStorage.getItem("9am"));
$('#10am .description').val(localStorage.getItem("10am"));
$('#11am .description').val(localStorage.getItem("11am"));
$('#12pm .description').val(localStorage.getItem("12pm"));
$('#13pm .description').val(localStorage.getItem("13pm"));
$('#14pm .description').val(localStorage.getItem("14pm"));
$('#15pm .description').val(localStorage.getItem("15pm"));
$('#16pm .description').val(localStorage.getItem("16pm"));
$('#17pm .description').val(localStorage.getItem("17pm"));
//we may have to use 3 classes (.time-block, .row, and .hour) for each hour frm 9am to 5pm
    //we will need to add the 4th class (of either .past, .present, or .future) to these existing 3
// create a arguement within moment.js that calculates the present hour + or - the time of day between 9am and 5pm
// we will have to force it to only display these times

