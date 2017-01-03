$(document).ready(function() {
  // CLICK HANDLERS
  // Create message object upon click of submit button
  $('button').on('click', function() {
    var time = new Date();
    var message = {
      username: window.location.search.slice(10),
      text: $('.message-input input').val(),
      roomname: $('#roomSelect select option:selected').text()
    };
    app.send(message);
  });



});









// Object
  // createdAt
  // :
  // "2016-03-08T23:27:11.997Z"
  // objectId
  // :
  // "fJBmJRdrxw"
  // roomname
  // :
  // "lobby"
  // text
  // :
  // "first"
  // updatedAt
  // :
  // "2016-03-08T23:27:11.997Z"
  // username
  // :
  // "dan"