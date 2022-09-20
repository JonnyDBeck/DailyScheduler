//Date Element
var dateEl = $('#currentDay');

//timeblock Element holder
var tbContainer = $('#tbContain');

var scheduelBlock = storageCheck();

getDate();
createTBList();

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
    textEL.val(scheduelBlock[toKeys(hour)]);

    //button element 'styling'
    btnEL.text("💾");
    btnEL.addClass('saveBtn');

    //Putting it on page
    tbContainer.append(timeblockEL);
}

function createTBList() {
    //creating lists
    for (var i = 9; i < 18; i++){
        if (i > 12){
            createTimeblock((i - 12), false);
        }else{
            createTimeblock(i, true);
        }
    }

    //adding listeners to all the buttons
    document.querySelectorAll('button').forEach(item => {
        item.addEventListener('click', clickevent => {

            //getting timeblock elements
            var hourOfTB = Number(item.previousSibling.previousSibling.textContent.slice(0, 2));
            var textOfTB = item.previousSibling.value;

            scheduelBlock[toKeys(hourOfTB)] = textOfTB;
            localStorage.setItem("scheduelBlock", JSON.stringify(scheduelBlock));
        })
    })
}

function storageCheck(){
    var saveableDate = moment().format("D M Y")

    if(localStorage.getItem("saveDate") != saveableDate){
        var emptyArray = ["","","","","","","",""]

        localStorage.setItem("saveDate", saveableDate);
        localStorage.setItem("scheduelBlock", JSON.stringify(emptyArray))
    }

    return JSON.parse(localStorage.getItem("scheduelBlock"));
}

function toKeys(hour){

    var outputKey = hour;

    if (outputKey < 9 ){
        outputKey += 12;
    }
    outputKey -= 9;

    return outputKey;
}