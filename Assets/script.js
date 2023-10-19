
$(document).ready(function () {
  for (let hour = 9; hour <= 17; hour++) {
    // grabbing each hourDiv by selecting id, and embedding raising index to complete the name
    const hourDiv = $(`#hour-${hour}`);
    // grabbing each hourDiv's id
    const hourId = hourDiv.attr("id");
    // grabbing each textarea in each hourDiv
    const textareaElement = hourDiv.find("textarea");
    // giving the textareas an id that icrements
    textareaElement.attr("id", `${hour}`);
    // grabbing each hourDiv's saveBtn
    const saveButton = hourDiv.find("button");
    // giving buttons a id same as their divs
    saveButton.attr("id", `${hour}`);

    // Event Listener on each submit button
    saveButton.on("click", function () {
      // storing text in a variable
      const textToSave = textareaElement.val();
      // setting textToSave in local storage with key hourId
      localStorage.setItem(hourId, textToSave);
      // keeps text in the text area after submitting
      textareaElement.text(textToSave);
    });

    // Retrieving savedText with key that increments
    const savedText = localStorage.getItem(`hour-${hour}`);

    // If theres savedText in storage, set it in textareas
    if (savedText) {
      textareaElement.text(savedText);
    }

    // Function to get right now time, format it, and display it
    function updateClock() {
      var timeDisplay = $("#currentDay");
      var today = dayjs().format("dddd, MMMM D YYYY, h:mm:ss A");
      timeDisplay.text(today);
    }
    // Calling function, and updating every second
    updateClock();
    setInterval(updateClock, 1000);

    }
  }
);


// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

// TODO: ME HERE, ^^^ REFERING TO BOOTSTRAP CLASSES .PAST .PRESENT
