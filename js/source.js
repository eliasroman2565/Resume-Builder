function header(){
  var formattedName = prompt("What is your full name?");

  $("#name").html(formattedName);

  var email = prompt("What is the best email to contact you at?");

  $("#email").html(email);


  var phone = prompt("What is the best phone number to contact you at?");

  $("#phone-number").html(phone);

}
header();

function workexperience() {


  var workExperience1 = prompt("Where do you currently work?");

  var workExperience1Dates = prompt("How long did you work at that job for?");

  var workExperience1Info = prompt("What were some of your duties at that job?");

  var workExperience2 = prompt("Where did you work before that?");

  var workExperience2Dates = prompt("How long did you work at that job for?");

  var workExperience2Info = prompt("What were some of your duties for that job?");


}

//workexperience();
