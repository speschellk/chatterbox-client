$(document).ready(function() {
  // Load initial messages
  app.init();

  // CLICK HANDLERS
  // Create message object upon click of submit button
  $('button').on('click', function() {
    app.handleSubmit();
  });

  // Adding Friends
  // When click username
  $('#chats').on('click', 'a', function(event) {
    event.preventDefault();

    // Add username to app.friends
    var username = this.getAttribute('data-username');

    if (!app.friends.includes(username)) {
      app.friends.push(username);
      // Update the css on the feed for an added friend
      $(`[data-username="${username}"]`).addClass('friended');
      console.log('added friend', username, app.friends);
    } else {
      var i = app.friends.indexOf(username);
      app.friends.splice(i, 1);
      // Update the css on the feed for a removed friend
      $(`[data-username="${username}"]`).removeClass('friended');
      console.log('removed friend', username, app.friends);
    }
  });

});