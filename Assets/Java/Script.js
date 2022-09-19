//Date Element
var dateEl = $('#currentDay');

//timeblock Element holder
var tbContainer = $('#tbContain');

createTimeblock(4, false);
getDate();

function getDate(){
    var currDate = moment().format("dddd, MMMM Do");
    dateEl.text(currDate);
}

function createTimeblock(hour, morning){
    //creating elements
    var timeblockEL = $('<section>');
    var hourEL = $('<h1>');
    var textEL = $('<input>');
    var btnEL = $('<button>');

    //getting military time for easier implementation
    var milHour;
    if(morning){milHour = hour;}
    else{milHour = hour + 12}

    //appending elements to section + styleing
    var secElements = [hourEL, textEL, btnEL]
    timeblockEL.append(secElements);
    timeblockEL.addClass('row');

    //hour element 'styling'
    if (morning){hourEL.text(hour + ' A.M.');}
    else{hourEL.text(hour + ' P.M.');}
    hourEL.addClass('hour');

    //text element 'styling'
    textEL.type = "text";
    textEL.addClass('textbox');
    if(milHour < moment().hour()){
        textEL.addClass('past');
    } else if (milHour > moment().hour()){
        textEL.addClass('future');
    } else{
        textEL.addClass('present');
    }

    //button element 'styling'
    btnEL.text("💾");
    btnEL.addClass('saveBtn');

    //Putting it on page
    tbContainer.append(timeblockEL);
}