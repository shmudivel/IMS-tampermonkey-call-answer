// ==UserScript==
// @name         Calendar Pick Today's Date
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://futuregroup.interpretmanager.com/app/interpreter/dashboard/log
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Function to click the date picker input
  function clickDatePickerInput() {
    var datePickerInput = document.getElementById("dateRangePicker");

    if (datePickerInput) {
      datePickerInput.click();
      setTimeout(clickTodaysDateFirstPart, 1000); // 1000 milliseconds = 1 second
    }
  }

  // Function to click the first part of today's date
  function clickTodaysDateFirstPart() {
    var todaysDateFirstPart = document.querySelector("td.active.end-date");

    if (todaysDateFirstPart) {
      todaysDateFirstPart.click();
      setTimeout(clickTodaysDateSecondPart, 1000); // 1000 milliseconds = 1 second
    }
  }

  // Function to click the second part of today's date
  function clickTodaysDateSecondPart() {
    var todaysDateSecondPart = document.querySelector("td.active.start-date");

    if (todaysDateSecondPart) {
      todaysDateSecondPart.click();
      setTimeout(attemptApplyButtonClick, 1000); // 1000 milliseconds = 1 second
    }
  }

  // Function to attempt to click the apply button
  function attemptApplyButtonClick() {
    var applyButton = document.querySelector(
      "button.applyBtn.btn.btn-sm.btn-success"
    );

    if (applyButton && !applyButton.disabled) {
      applyButton.click();
    } else {
      // If the apply button is disabled, wait for 1 second and then try clicking today's date first part again
      setTimeout(clickTodaysDateFirstPart, 1000); // 1000 milliseconds = 1 second
    }
  }

  // Wait for 10 seconds and then click the date picker input
  setTimeout(clickDatePickerInput, 3000); // 10000 milliseconds = 10 seconds
})();
