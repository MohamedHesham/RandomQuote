
function getQuote() {
  $.ajax({
    url: "https://api.forismatic.com/api/1.0/",
    type: 'POST',
    dataType: "jsonp",
    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    success: function( response ) {
      $("#quote").html("<h3><i class='fa fa-quote-left' aria-hidden='true'></i>" + " " + response.quoteText + "</h3>");
      $("#quoteTeller").html("- " + response.quoteAuthor);
}});
}

function changeColor() {
  var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
  var rnd = Math.floor(Math.random() * 12);
  $("body").css("background-color", colors[rnd]);
  $("a").css("background-color", colors[rnd]);
  $("button").css("background-color", colors[rnd]);
  $("#quote").css("color", colors[rnd]);
  $("#quote").animate({opacity: 0}, 100, function() {
    $(this).animate({opacity: 1}, 1000);
  });
  $("#quoteTeller").css("color", colors[rnd]);
}

$(document).ready(function() {
  getQuote();
  changeColor();





  $("#newQuote").click(function(e) {
    e.preventDefault();
    getQuote();
    changeColor();
    });

  $(".twitter-share-button").click(function(e) {
    var quote = $("#quote").text();
    var author = $("#quoteTeller").text();
    $(this).attr({
      href: "https://twitter.com/intent/tweet?text=" + quote + " " + author,
      target: "_blank"
    });

  });



});
