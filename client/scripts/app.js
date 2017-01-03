var App = function(server) {
  this.server = server;
};

App.prototype.init = function() {

};

App.prototype.send = function(message) {
  $.ajax({
    url: this.server,
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function() {
      console.log('Great success!', message);  
    }
  });

};

App.prototype.fetch = function() {
  $.ajax({
    url: this.server,
    type: 'GET',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    data: {'order': '-createdAt'},
    success: function(data) {
      for (var i = 0; i < 10; i++) {
        var username = data.results[i].username;
        var text = data.results[i].text;
        // var createdAt = data.results[i].
        console.log('Returned text', data.results[i]);
        console.log('username', username);
        console.log('text', text);
        app.renderMessage(username, text);
      }
    }
  });
};

App.prototype.clearMessages = function() {

};

App.prototype.renderMessage = function(username, text) {
  console.log('called renderMessage');
    // append the message to the DOM
      // grab the unordered list
      // append a new li element with message
  $('#chats').prepend(
    `<li>
      <h4>${username}:</h4>
      <p>${text}</p>
    </li>`
  );
};

App.prototype.renderRoom = function(room) {

};

var app = new App('https://api.parse.com/1/classes/messages');