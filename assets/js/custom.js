/* Write here your custom javascript codes */

function getallProducts() {
	console.log("Home");

	$.ajax({
		url: 'https://fudhubapi.dynamicbra.in/api/product/getall', 
		// dataType: 'json',
		type: 'GET',
		headers: {
			'contentType': 'application/json',
	        'Accept': 'application/json'
	    },
		crossDomain : true,
		
		// accepts: 'application/json',

      success: function(data) {
        // alert("come");
         console.log(data);
      },
      error: function(data) {
      	// alert("failed");
        console.log("error");
      }
   });
}



function uploadfoodstuff() {
	
}