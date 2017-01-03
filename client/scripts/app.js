var App = function() {
};

App.prototype.init = function() {

};

App.prototype.send = function(message) {
  $.ajax({
    url: 'https://api.parse.com/1/classes/messages',
    type: 'POST',
    data: message,
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function() {
      // append the message to the DOM   
    }
  });
};

App.prototype.fetch = function() {

};

App.prototype.clearMessages = function() {

};

App.prototype.renderMessage = function(message) {

};

App.prototype.renderRoom = function(room) {

};

var app = new App();