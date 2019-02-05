$(document).ready(function () {
  setInterval(function () {
    // $.get('/brother').done(function (name) {
    //   $('#brother').text( name );
    // });

    // $('#brother').load('/brother');
    // $('#time').load('/time');
    // $('#uptime').load('/uptime');

    $.getJSON('/info').done(function (results) {
      $('#brother').text( results.brother );
      $('#time').text( results.time );
      $('#uptime').text( results.uptime );
      console.log( results.fortune );
    });
  }, 2000);
});
