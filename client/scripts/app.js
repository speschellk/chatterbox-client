var App = function(server) {
  this.server = server;
  this.friends = [];
};

App.prototype.init = function() {
  app.clearMessages();
  // Load page with latest 10 chatters
  var onLoadData = {'order': '-createdAt', 'limit': '10'};
  app.fetch(onLoadData);
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

App.prototype.fetch = function(filter) {
  $.ajax({
    url: this.server,
    type: 'GET',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    // come back and add limit
    data: filter,
    success: function(data) {
      for (var i = 0; i < data.results.length; i++) {
        var username = data.results[i].username;
        var text = data.results[i].text;

        // Encode username and text
        username = app.htmlEncode(username);
        text = app.htmlEncode(text);
        
        // Render message to the page
        app.renderMessage(username, text);
      }
      console.log('data', data);
    }
  });
};



App.prototype.htmlEncode = function(str) {
  var i = str.length;
  var aRet = [];

  while (i--) {
    var iC = str[i].charCodeAt();
    if (iC < 65 || iC > 127 || (iC > 90 && iC < 97)) {
      aRet[i] = '&#' + iC + ';';
    } else {
      aRet[i] = str[i];
    }
  }
  return aRet.join('');    
};

App.prototype.clearMessages = function() {
  $('#chats').empty();
};

App.prototype.renderMessage = function(username, text) {
  $('#chats').append(
    `<li>
      <a href="#" class="username" data-username="${username}">${username}:</a>
      <p class="chatter">${text}</p>
    </li>`
  );
};

App.prototype.renderRoom = function(room) {
  $('#roomSelect').append(
    `<option>${room}</option>`
  );
};

App.prototype.handleSubmit = function() {
  var message = {
    username: window.location.search.slice(10),
    text: $('.message-input input').val(),
    roomname: $('#roomSelect option:selected').text()
  };
  app.send(message);

  // Clear messages
  app.clearMessages();
  // Reload filtered messages
  app.fetch({'order': '-createdAt', 'limit': '10', 'where': '{"roomname": "' + message.roomname + '"}'});
};

App.prototype.handleUsernameClick = function() {
};

var app = new App('https://api.parse.com/1/classes/messages');










