
// Question: What does this code do?
$("#submit").on("click", function(event) {
    event.preventDefault();
  
    var user = {
      name: $("#name").val().trim(),
      photo: $("#photo").val().trim()
    };
    
    var scores= [];
  
    $('.container select').each(function() {
      scores.push(Number($(this).val()));
    });
  
    user.scores = scores;
    
    $.post("/api/friends", user)
    .done(function(data) {
      console.log(data);
      // alert("");
    });
  });