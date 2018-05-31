// client-side js
// run by the browser each time your view template referencing it is loaded


function createUser(form){
  console.log("making user " + form.username.value);
  
  var list = document.getElementById("big");
  list.innerHTML += 
  '\
      <div class="user-content">\
        <img class="usericon" src="${form.imglink}" style="max-height:70px;" alt="person">\
        <h3 class="username-block">\
            ${form.username}\
        </h3>\
        <p class="useraddress-block" style="color:#718F86;">\
                        0xa634fB120D8e7B4c39919Ed75E65c1Af1678F588\
         </p>\
        <button class="tipbutton" onclick="createTipAction(`0xa634fB120D8e7B4c39919Ed75E65c1Af1678F588`)">\
              🎩 Tip this person.\
        </button>\
        </div> '
}

function createTipAction(address){
  console.log("address = " + address)
}

// Set the date we're counting down to
var countDownDate = new Date("Jun 3, 2018 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementsByClassName("days")[0].innerHTML = days + ' <span class="unit">DAYS</span>'
    document.getElementsByClassName("hours")[0].innerHTML = hours + ' <span class="unit">HOURS</span>'
    document.getElementsByClassName("minutes")[0].innerHTML = minutes + ' <span class="unit">MINUTES</span>'
    document.getElementsByClassName("seconds")[0].innerHTML = seconds + ' <span class="unit">SECONDS</span>'
  
  
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);