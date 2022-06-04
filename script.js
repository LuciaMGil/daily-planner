
// Create variable for the current time using moment.js
var today = moment();
var hours = [
    hourText = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"],
    hourNum = [9, 10, 11, 12, 13, 14, 15, 16, 17]
];
// Format and append current date to header
$("#currentDate").text(moment().format("dddd MMMM Do"));

// Display timeblocks 

function displayTimeblocks (text) {
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

        // Creates the second column where the text area will appear
        var textCol = $("<td class='description'>");

        // Creates the text area where they can input their tasks
        var textArea = $("<textarea class='textarea d-flex flex-column flex-grow-1' rows='3' cols='30'>");

        // Appends the text area to the text column
        textCol.append(textArea);
        // Create a column where the save button will be
        var saveBtn = $("<td class='saveBtn btn'>");

        // Appends floppy disk icon to the save button
        saveBtn.append($("<i class='fa-solid fa-floppy-disk'>"));

        // Appends the columns to the row
        row.append(timeCol,textCol,saveBtn);

        // Appends the rows to the table body
        main.append(row);       
    }
}

displayTimeblocks(hours[0]);