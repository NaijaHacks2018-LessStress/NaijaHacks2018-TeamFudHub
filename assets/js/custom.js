/* Write here your custom javascript codes */

function getallProducts() {
	console.log("Home");

	// $.getJSON('https://fudhubapi.dynamicbra.in/api/product/getall',  function(data) {
 //        	console.log(data);
           
           
 //    });

	$.ajax({
		url: 'https://fudhubapi.dynamicbra.in/api/product/getall', 
		dataType: 'json',
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

        var content = $.parseJSON(data);
        if(content['ResponseCode'] == 1) {
        	var row = content['Data'];
        	var products = "";
        	$.each(row, function(index, element) {
			    alert(element.timeStamp); 
			    products = products + '<div class="col-md-4" data-product="' + element.ID + '"><div class="thumb-product">';
			    products = products + '<img class="thumb-product-img" src="assets/img/thumb/08.jpg" alt="">';
			    products = products + '<div class="thumb-product-in"><h4><a href="shop-ui-inner.html">'+ element.Title +'</a> –';
			    products = products + ' <a href="shop-ui-inner.html">'+ element.Location +'</a></h4>';
			    products = products + '<p class="text-sm text-info text-center">'+ element.Description + '</p>';
			    products = products + '<span class="thumb-product-type">'+ element.Category.Name +'</span></div>';
			    products = products + '<ul class="list-inline overflow-h">';
			    products = products + '<li class="thumb-product-price">NGN'+ element.Amount +'</li>';
			    products = products + '<li class="thumb-product-purchase"><a href="#"><i class="fa fa-shopping-cart"></i></a>';
			    products = products + ' | <a href="#"><i class="fa fa-heart"></i></a></li></ul></div></div>';
			});

        	$("#products-list").hide('fast');
			$("#product-list").html(products);
        	$("#products-list").show('slow');

        }

      },
      error: function(data) {
      	// alert("failed");
        console.log("error");
      }
   });
}



function uploadfoodstuff() {


}