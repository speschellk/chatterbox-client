var App = function(server) {
  this.server = server;
};

App.prototype.init = function() {
  app.fetch();
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
    // come back and add limit
    data: {'order': '-createdAt', 'limit': '10'},
    success: function(data) {
      for (var i = 0; i < data.results.length; i++) {
        var username = data.results[i].username;
        var text = data.results[i].text;
        app.renderMessage(username, text);
      }
      console.log('data', data);
    }
  });
};

App.prototype.clearMessages = function() {
  $('#chats').empty();
};

App.prototype.renderMessage = function(username, text) {
  $('#chats').prepend(
    `<li>
      <h4>${username}:</h4>
      <p>${text}</p>
    </li>`
  );
};

App.prototype.renderRoom = function(room) {
  $('#roomSelect').append(
    `<option>${room}</option>`
  );
};

App.prototype.handleSubmit = function() {
  var time = new Date();
  var message = {
    username: window.location.search.slice(10),
    text: $('.message-input input').val(),
    roomname: $('#roomSelect select option:selected').text()
  };
  app.send(message);
};

App.prototype.handleUsernameClick = function() {
};

var app = new App('https://api.parse.com/1/classes/messages');











