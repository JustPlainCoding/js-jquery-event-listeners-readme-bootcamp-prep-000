//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  })
}

function frameIt(){
  $('img').on('load', function() {
    $('img').addClass("tasty")
  })
}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    if(key.which === 'g') {
      alert('You pressed G!')
    }
  })
}

$(document).ready(function(){

});
