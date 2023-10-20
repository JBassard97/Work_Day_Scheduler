
$(document).ready(function () {
  for (let hour = 9; hour <= 17; hour++) {
    // grabbing each hourDiv by selecting id, and embedding raising index to complete the name
    const hourDiv = $(`#hour-${hour}`);
    // creating data attribute for each hourDiv
    hourDiv.attr("data", `${hour}`);
    // getting that data attribute, making it an integer to work with, and storing it in hourData
    hourData = parseInt(hourDiv.attr("data"));
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

    function colorizeHours() {
      const classesToRemove = "row time-block past present future";
      const pastClass = "past time-block row";
      const futureClass = "future time-block row";
      const presentClass = "present time-block row";

      const currentHour = dayjs().format("HH");
      
      // Uncomment and change value for testing changes
      // const currentHour = 15;

      if (currentHour > hourData) {
        hourDiv.removeClass(classesToRemove);
        hourDiv.attr("class", pastClass);
      }
      if (currentHour < hourData) {
        hourDiv.removeClass(classesToRemove);
        hourDiv.attr("class", futureClass);
      }

      if (hourData == currentHour) {
        hourDiv.removeClass(classesToRemove);
        hourDiv.attr("class", presentClass);
      }

      // TODO: Just for fun, changing the background for every third of the workday
      if (currentHour >= 9 && currentHour <= 11) {
        $("body").css("background-image", "url('./Assets/sunrise.jpg')");
        $("body").css("background-size", "cover");
        $("header").css("color", "#000000");

      }
       
      if (currentHour >= 12 && currentHour <= 14) {
        $("body").css("background-image", "url('./Assets/daytime.jpg')");
        $("body").css("background-size", "cover");
        $("header").css("color", "#FFFACD");

      }
       
      if (currentHour >= 15 && currentHour <= 17) {
        $("body").css("background-image", "url('./Assets/sunset.jpg')");
        $("body").css("background-size", "cover");
        $("header").css("color", "#4B0082");
      
      }

       if (currentHour >= 18 || currentHour <= 8) {
        $("body").css("background-image", "url('./Assets/night.jpg')");
        $("body").css("background-size", "cover");
        $("header").css("color", "white");
      }
    }

    // Calling function, and updating clock every second
    updateClock();
    setInterval(updateClock, 1000);
    
    // calling function that compares currentHour with hourData every second
    colorizeHours();
}
  }
);
