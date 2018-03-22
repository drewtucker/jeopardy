import { Player } from './player.js'
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {

  var answer = "";

  $("#nameEntry").submit(function(event) {
    event.preventDefault();

    let name1 = $("#player1name").val();
    let name2 = $("#player2name").val();
    $("#player1name").val("");
    $("#player2name").val("");
    let player1 = new Player(name1);
    let player2 = new Player(name2);
  });

  $("#randomQuestion").click(function() {

    $.get(`http://jservice.io//api/random`).then(function(response) {
      $("#randomClue").text(`Question: ${response[0].question}`);
      $("#randomCategory").text(`Category: ${response[0].category.title}`);
      console.log(`${response[0].answer}`);
      $("#randomValue").text(`Value: ${response[0].value}`);
      answer = `${response[0].answer}`.toLowerCase();
    }).fail(function(error) {
      $("#showError").text("There was an error!" `${error.responseText}`);
    });
  });

  $("#answerForm").submit(function(event) {
    event.preventDefault();

    let userAnswer = $("#userAnswer").val().toLowerCase();
    $("#userAnswer").val("");
    if(answer.includes(userAnswer))
    {
      alert("YOU GOT IT RIGHT BABY! Answer: " + answer);
    }
    else{
      alert("YOU GOT IT WROOOONG");
    }
  });


});
