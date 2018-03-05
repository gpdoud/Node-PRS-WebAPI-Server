$().ready(function() {

    function add(user) {

        $.post("http://localhost:5000/User/Create", user)
            .done(function(res) {
              console.log(res);
            })
            .fail(function(err) {
              console.error(err);
            });

    }

    $("#add").click(function() {

        var user = {
          Id: 0,
          FirstName: $("#firstname").val(),
          LastName: $("#lastname").val(),
          UserName: $("#username").val(),
          Password: $("#password").val(),
          Phone: $("#phone").val(),
          Email: $("#email").val(),
          IsReviewer: $("#reviewer").checked(),
          IsAdmin: $("#admin").checked()
        };
        add(user);

    });

});