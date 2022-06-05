
// Create variable for the current time using moment.js
var today = moment();

// Stores the current time
var currentHour = moment().hour();
var hours = [
    hourText = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"],
    hourNum = [9, 10, 11, 12, 13, 14, 15, 16, 17]
];

// Empty array for storing text from textarea values
var savedText = ["", "", "", "", "", "", "", "", ""];

// Format and append current date to header
$("#currentDate").text(moment().format("dddd MMMM Do"));

// Display timeblocks 

displayTimeblocks = (text, data) => {
    // Access the table body
    var main = $("tbody");

    // Loops through the array of hourText
    for (i=0; i < text.length; i++) {
        // For each text that we loop through, create a row with a class of time-block
        var row = $("<tr class='time-block'>");
        
        // Creates the first column where time will be displayed
        var timeCol = $("<td class='time'>");

        // Loops through the array and adds text to each row of the first column. ex: 9AM
        timeCol.text(text[i]);

        // Loops through data and assigns the data type to each number
        row.attr("data-type", data[i]);
        var numData = parseInt(row.attr("data-type"));

        // Creates the second column where the text area will appear
        var textCol = $("<td class='description'>");

        // Creates the text area where they can input their tasks
        var textArea = $("<textarea class='textarea" + data[i] + "'d-flex flex-column flex-grow-1' rows='3' cols='30'>");

        // Appends the text area to the text column
        textCol.append(textArea);
        // Create a column where the save button will be
        var saveBtn = $("<td class='saveBtn' data-type=" + i +">");

        // Appends floppy disk icon to the save button
        saveBtn.append($("<i class='fa-solid fa-floppy-disk'>"));

        // Appends the columns to the row
        row.append(timeCol,textCol,saveBtn);

        // Appends the rows to the table body
        main.append(row);    
        checkTime(numData, textArea); 
        saveTasks();  
    }
}
// Saves input from text area to corresponding row and column
saveTextareaValue = () => { 

    $(".saveBtn").on("click", function () {
        // When the button is clicked, it will grab the time data from the selected text area and store it
        var currentTimeData = $(this).parent().attr("data-type");
        console.log(currentTimeData);
        // Indicates the text we selected by using the textarea class plus time data
        var clickedTextarea = $(".textarea" + currentTimeData);
        console.log(clickedTextarea);
        // Grabs the data type from the button we clicked that will equal to the index for our empty text array
        var arrayIndex = $(this).attr("data-type");
         
        //Saves the current textarea  value to the corresponding spot in the empty array
        savedText[arrayIndex] = clickedTextarea.val();

        //Stores text/tasks to local storage
        saveTasks();

})};
// Stores tasks in local storage
saveTasks = () => {
    localStorage.setItem("Tasks", JSON.stringify(savedText));
}



// Checks the time from moment.js and data, then changes class based on if it is past, present or future
checkTime = (numData, textArea) => {
    if (currentHour === numData ) {
        textArea.addClass("now");
    } else if (currentHour > numData) {
        textArea.addClass("past");        
    } else {
        textArea.addClass("future");
    }
}

displayTimeblocks(hours[0],hours[1]);
saveTextareaValue();

// $(".saveBtn").on("click", function () {
//     var whichBtn = $(this).parent().attr("data-type");
//     console.log("ive been clicked" + whichBtn);
// })
// // 