$(document).ready(function() {
  // Load initial messages
  app.init();

  // CLICK HANDLERS
  // Create message object upon click of submit button
  $('button').on('click', function() {
    app.handleSubmit();
  });



});