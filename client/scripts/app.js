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
    success: function(data) {
      console.log('Returned data!', data);
    }
  });
};

App.prototype.clearMessages = function() {

};

App.prototype.renderMessage = function(message) {
// success: function() {
//       // append the message to the DOM
//         // grab the unordered list
//         // append a new li element with message
//       $('#chats').append(
//         `<li>
//           <h4>, ${message.username} ,:</h4>
//           <p>, ${message.text} ,</p>
//         </li>`
//       );  
//     }
};

App.prototype.renderRoom = function(room) {

};

var app = new App('https://api.parse.com/1/classes/messages');