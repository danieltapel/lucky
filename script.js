//get "lucky" in java(nese): "begja"
function makeid(length) { //i invented plagiarism
  var result = '';
  var characters = 'abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for (var i=0;i<length;i++) {
    result += characters.charAt(Math.floor(Math.random()* charactersLength));
  }
  return result; 
}

let luck = document.cookie.slice(-5);

if (luck == "lucky") {
  document.getElementById("possibleFlag").innerHTML = 'try using java<i class="hidethis">nese</i>';
  document.getElementById("tabText").innerHTML = "lucky?";
} else if (luck != "begja") {
    document.cookie = "lucky=" + makeid(5);
} else {
  document.getElementById("possibleFlag").innerHTML = "UDCTF{i_question_the_accuracy_of_google_translate}"; 
  document.getElementById("tabText").innerHTML = "lucky!";
}
