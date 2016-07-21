//Update the relevant fields with the data

function setLeftMeter(lvl){
  var left = new JustGage({
   id: "left",
   value: lvl*100,
   min: 0,
   max: 100,
   title: "Left Bias",
   label: "percent",
   levelColors: [
         "#7FD5F0", //Light blue
         "#4291EB", //Medium blue
         "#0066DB" //Dark blue
       ]
 });
}

function setRightMeter(lvl){
  var right = new JustGage({
   id: "right",
   value: lvl*100,
   min: 0,
   max: 100,
   title: "Right Bias",
   label: "percent",
   levelColors: [
         "#FA7373", //Light red
         "#F53B3B", //Medium red
         "#D10000" //Dark red
       ]
 });
}

function setPosMeter(lvl){
  var pos = new JustGage({
   id: "pos",
   value: lvl*100,
   min: 0,
   max: 100,
   title: "Positive Sentiment",
   label: "percent",
   levelColors: [
         "#71D979", //Light green
         "#49BA52", //Medium green
         "#00AB0E"  //Dark green
       ]
 });
}

function setNegMeter(lvl){
  var neg = new JustGage({
   id: "neg",
   value: lvl*100,
   min: 0,
   max: 100,
   title: "Negative Sentiment",
   label: "percent",
   levelColors: [
         "#FA7373", //Light red
         "#F53B3B", //Medium red
         "#D10000" //Dark red
       ]
 });
}


$(document).ready(function(){

console.log("Test popup.js");

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
 chrome.tabs.sendMessage(tabs[0].id, {greeting: "getText"}, function(response) {
   jQuery.ajax({
       type: "POST",
       url: "http://ec2-52-91-18-68.compute-1.amazonaws.com/test.py",
       data: {text: response.text},
       success: function(data) {
           console.log(data);

           var ridTags = data.split("<body>");
           var ridEndTag = ridTags[1].split("</body>");
           //setMeters(data);

           var nums = ridEndTag[0].split(";");

           console.log(nums);

           var left = nums[0];
           console.log(left);
           var right = nums[1];
           console.log(right);
           var pos = nums[2];
           console.log(pos);
           var neg = nums[3];
           console.log(neg);

           setLeftMeter(left);
           setRightMeter(right);
           setPosMeter(pos);
           setNegMeter(neg);

       }
     });
 });
});

});
