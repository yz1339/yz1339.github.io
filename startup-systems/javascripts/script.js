// window.onload = function() {
 
//     alert( "welcome" );
 
// };

$(document).ready(function() {
 
    $("button").click(function( event ) {
    	$.ajax({
    		url: "https://api.github.com/users/yz1339",
    		type: "GET",
    		dataType: "json",
    	})
    	.done(function(json){
    		console.log(json);
    		$( "<p class=\"red\">" ).text("My github username is: " + json.login ).appendTo( "body" );
     		$( "<a>").attr("href", json.url).appendTo( "body" );
     		$("<p class=\"red\">").text('Details').appendTo("a")
    	})
    	.fail(function( xhr, status, errorThrown ) {
		    alert( "Sorry, there was a problem!" );
		    console.log( "Error: " + errorThrown );
		    console.log( "Status: " + status );
		    console.dir( xhr );
		})
 		.always(function( xhr, status ) {
    		alert( "The request is complete!" );
  		});
        
 
    });
 
});