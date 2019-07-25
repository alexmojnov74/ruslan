$(document).ready(function(){

    $("#submitBtn").on("click", function (event) {
        event.preventDefault();
        
        var userID = $("#user").val().trim();
        var pswrd = $("#pswrd").val().trim();
        
        if( userID =='ruslan' || pswrd =='456987'){
        
        window.open('index.html');
        }
        else {
        $('#myModal').modal("show");
            }
         $("#user").val("");
         $("#pswrd").val("");      
    });


});
