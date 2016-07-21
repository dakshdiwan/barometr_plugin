function getText(){
    return document.body.innerText
}

$(document).ready(function(){

  console.log("Test content.js");

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "getText")
      var txt = getText()
      sendResponse({text: txt});
  });

});
