'use strict'
var total = 0;

document.getElementById('submitBtn').onclick=getResult;

$(document).ready(function() {
  $(".firstQ").on("click", function() {
    $(".numOne").addClass("hideQ");
    $(".numTwo").addClass("showQ");
  })
  $(".secQ").on("click", function() {
    $(".numTwo").removeClass("showQ");
    $(".numThree").addClass("showQ");
  })
  $(".thirdQ").on("click", function() {
    $(".numThree").removeClass("showQ");
    $("#submitBtn").removeClass("hideQ");
  })
  $(".straight").on("click", function() {
    total+=10
    console.log(total)
})
$(".wavy").on("click", function() {
  total+=100
  console.log(total)
})

$(".curly").on("click", function() {
  total+=1000
  console.log(total)
})

$(".coily").on("click", function() {
  total+=10000
  console.log(total)
})
})
//what I have to figure out now is how to make sure this can consider anyone who choose different things..
//you might choose one curly option and other straight options..how can I prepare this?
function getResult(){
  if(total >=10 && total < 30){
    console.log("You have straight hair")
  }else if(total >=100 && total < 500){
    console.log("Your hair is wavy")
  }
}
//if the user click buttons that indicate straight hair, then add ten to the total.
// if the answer is between 11 and 30, then the user has straight Hair -- 1 Type Hair
// straightHair.addEventListener('click', function() {
//   total +=10
//   console.log(total)
// })

// document.getElementById('straight1').onclick = function(){
//   total+=10
//   console.log(total)
// }
// getResults.addEventListener('click', function() {
// if(total > 11 || total <= 40){
//   console.log("straight")
// }
// })
//if the user clicks buttons that indicate wavy hair, then add 1 to the total.
//if the total is between 1 and 10, then the user has wavy hair--2 Type Hair

//if the users clicks buttons that indicate curly hair, then add
