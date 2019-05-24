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
  $('input').on('keypress', function(e) {
    let key = e.key;
    if(key === 'g') {
      alert('You pressed G!')
    }
  })
}

$(document).ready(function(){

});
