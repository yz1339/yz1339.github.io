// window.onload = function() {
 
//     alert( "welcome" );
 
// };

$(document).ready(function() {
 
    $("button").click(function( event ) {
    	var div = $("div#button_clicked");
    	div.empty(); //To prevent endless appending after several clicks
    	$.ajax({
    		url: "https://api.github.com/users/yz1339",
    		type: "GET",
    		dataType: "json",
    	})
    	.done(function(json){
    		console.log(div);
    		$( "<p class=\"red\">" ).text("My github username is: " + json.login ).appendTo(div);
     		$( "<a>").attr("href", json.url).appendTo(div);
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