// client-side js
// run by the browser each time your view template referencing it is loaded

const userform = document.forms[0];

 userform.onsubmit = function(event) {
    // stop our form submission from refreshing the page
    event.preventDefault();
   
   console.log("making user " + userform.elements['username']);
  // stop our form submission from refreshing the page
  event.preventDefault();
  var list = document.getElementById("big");
   console.log(userform.elements["imglink"]);
   console.log(userform.elements["username"]);
  list.innerHTML += 
  '\
      <div class="user-content">\
        <img class="usericon" src="' + userform.elements["imglink"].value + '" style="max-height:70px;" alt="Img header">\
        <h3 class="username-block">\
            '+ userform.elements["username"].value + '\
        </h3>\
        <p class="useraddress-block" style="color:#718F86;">\
                        0xF4EbAbA0445a21B35f9Bdd919DCC967a30BE83CB\
         </p>\
        <button class="tipbutton" onclick="createTipAction(`0xF4EbAbA0445a21B35f9Bdd919DCC967a30BE83CB`)">\
              🎩 Tip this person.\
        </button>\
        </div> '
   
     var xhr = new XMLHttpRequest();
    xhr.open('POST', "https://incent-event.glitch.me/newuser", true);
   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     
    var response = xhr.send(String({ name: userform.elements["username"].value}) );
    console.log(response);
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
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

/*var Web3 = require(web3)
var web3 = new Web3();
        if (typeof web3 !== 'undefined') {
          web3 = new Web3(web3.currentProvider);
        } else {
          // set the provider you want from Web3.providers
          web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }
        console.log(web3.eth.coinbase)*/




