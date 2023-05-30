// ==UserScript==
// @name         Call Auto Answer
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

  var observer = new MutationObserver(function (mutations) {
    // if the div exists in the DOM
    var div = document.querySelector(
      'div[ng-if="!ctrl.model.CallWorkflowService.PickCallState"]'
    ); // select the div by its ng-if attribute
    if (div) {
      // emulate a click on the div
      div.click();
      // disconnect the observer after clicking the div
      observer.disconnect();
    }
  });

  // start observing
  observer.observe(document, { childList: true, subtree: true });
})();
