$().ready(function() {

  var users;
  var user;

  function list() {
    // get a list of all the users
    $.getJSON("http://localhost:5000/Users/List")
        .done(function(res) {
            users = res.data;
            RenderTable(users);
            console.log(res);
        })
        .fail(function(err) {
            console.error(err);
        });
    
  }

  function get(id) {
    // get a single user by id
    $.getJSON("http://localhost:5000/Users/Get/"+id)
        .done(function(res) {
            user = res.data;
            RenderDetailTable(user);
            console.log(res);
        })
        .fail(function(err) {
            console.error(err);
        });
    
  }

  //list();
  //get(3);

  function RenderTable(users) {
    var tbody = $("tbody")
    for(var user of users) {
      var tr = "<tr>";
      tr += "<td>" + user.FirstName + " " + user.LastName + "</td>";
      tr += "<td>" + user.UserName + "</td>";
      tr += "<td>" + user.Email + "</td>";
      tr += "<td>" + user.IsAdmin + "</td>";
      tr += "</tr>";
      tbody.append(tr);
    }
  }

  $("#getId").click(function() {
    var id = $("#theId").val();
    get(id);
  });

  function RenderDetailTable(user) {
    $("#name").text(user.FirstName + " " + user.LastName);
    $("#username").text(user.UserName);
    $("#email").text(user.Email);
    $("#admin").text(user.IsAdmin);
  }

});