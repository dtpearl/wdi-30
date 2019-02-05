const fetchFact = function () {
  $.ajax('http://numbersapi.com/random/trivia?json').done(function (data) {
    $('body').append('<p>' + data.text + '</p>');
  });
};

$('#fetch').on('click', fetchFact);
fetchFact(); // Get a first fact immediately.
