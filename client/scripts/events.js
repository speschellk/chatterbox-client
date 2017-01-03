$(document).ready(function() {
  // CLICK HANDLERS
  // Create message object upon click of submit button
  $('button').on('click', function() {
    var message = {
      username: window.location.search.slice(10),
      text: $('.message-input input').val(),
      roomname: $('#roomSelect select option:selected').text()
    };

    // var message = {
    //   username: 'Mel Brooks',
    //   text: 'It\'s good to be the king',
    //   roomname: 'lobby'
    // };

    // Get the roomname from the select field
    // message.roomname = $('#roomSelect select option:selected').text();

    // // Get text from the input field
    // message.text = $('.message-input input').val();

    // // Get username from global object
    // message.username = window.location.search.slice(10);

    console.log(message);

    return message;
  });



});