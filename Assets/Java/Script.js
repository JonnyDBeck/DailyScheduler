//Date Element
var dateEl = $('#currentDay');

//timeblock Element holder
var tbContainer = $('#tbContain');

createTimeblock(5, true);
getDate();

function getDate(){
    var currDate = moment().format("dddd, MMMM Do");
    console.log(currDate);
    dateEl.text(currDate);
}

function createTimeblock(hour, morning){
    //creating elements
    var timeblockEL = $('<section>');
    var hourEL = $('<h1>');
    var textEL = $('<input>');
    var btnEL = $('<button>');

    //appending elements to section
    var secElements = [hourEL, textEL, btnEL]
    timeblockEL.append(secElements);

    //hour element 'styling'
    if (morning){hourEL.text(hour + 'A.M.');}
    else{hourEL.text(hour + 'P.M.');}

    //text element 'styling'
    textEL.type = "text"; 

    //button element 'styling'
    btnEL.text("💾");

    //Putting it on page
    tbContainer.append(timeblockEL);
}