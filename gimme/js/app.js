//CRUD using AngularJS and ngStorage
//Created by Peter Cox
//11 April 2015
//Copyright  2014  PCSquared.com.au
			
			// creates the Angular modular "app"  
			// NOTE: we inject into this module the ngStorage object  AND bsTable object
			var app = angular.module('app',['ngStorage','bsTable']);


			//  This is the controller called "productController". 
			//  It has two parameters:  $scope and $localStorage
			app.controller('productController', function($scope,$localStorage) {
						
					// this CREATES a localstorage called "datasource".
					// this sets up default records
					// you can access this localstorage in your html page via the $scope eg $scope.storage.datasource  			
					$scope.storage = $localStorage.$default({
    						datasource: [{
									
											itemid: 0,
											name: "Kryptonite Bike Lock",
											description: "Stronghold Surface Ground Anchor",
											brand: "Kryptonite",
											category: "Locks",
											purchaseDate: "12/4/2015",
											price: 83,
											quantity: 5,
											rating: 4,
										},
										{
											itemid: 1,
											name: "Topeak  Pump ",
											description: "Pocket Rocket Master Blaster Pump",
											brand: "Topeak",
											category: "Pumps",
											purchaseDate: "12/4/2015",
											price: 97.99,
											quantity: 2,
											rating: 4,
										},
										{
											itemid: 2,
											name: "Helmet",
											description: "Pocket Rocket Master Blaster Pump",
											brand: "Topeak",
											category: "Helmets",
											purchaseDate: "12/4/2015",
											price: 97.99,
											quantity: 2,
											rating: 4,
										},
										{
											itemid: 3,
											name: "Time watch",
											description: "Pocket Rocket Master Blaster Pump",
											brand: "Topeak",
											category: "Watches",
											purchaseDate: "12/4/2015",
											price: 97.99,
											quantity: 2,
											rating: 4,
										},
										{
											itemid: 4,
											name: "Bell Hekmet",
											description: "Pocket Rocket Master Blaster Pump",
											brand: "Topeak",
											category: "Helmets",
											purchaseDate: "12/4/2015",
											price: 97.99,
											quantity: 2,
											rating: 4,
										},
										{
											itemid: 5,
											name: "Sunnies",
											description: "Pocket Rocket Master Blaster Pump",
											brand: "Topeak",
											category: "Glasses",
											purchaseDate: "12/4/2015",
											price: 97.99,
											quantity: 2,
											rating: 4,
										},
										{
											itemid: 6,
											name: "Topeak Light",
											description: "Pocket Rocket Master Blaster Pump",
											brand: "Topeak",
											category: "Lights",
											purchaseDate: "12/4/2015",
											price: 97.99,
											quantity: 2,
											rating: 4,
										}]
					});  // end of creating localStorage 'datasource'
  		
								

				
				// Used in PAGE :  ADD
				// 1. CAPTURING THE DATA
				// When you fill in the Product form text fileds in the ADD page and click the button "add" - <button ng-click="addProduct()" data-mini="true"  >Add </button>
				// When you click the 'add' button you activite its angular directive ng-click  which calls the addProduct() function - which is below
				// Each field you enter text into is captured by fields directive ng-model="" 
				// As an example look at when you enter the name, this fileds directive  ng-model="name" now binds the value to $scope
				// 2. PUTTING THE DATA INTO LOCALSTORAGE
				// We can access this below - see 'here'
				// We add to the localstorage via push  -> $scope.storage.datasource.push({   
					$scope.addProduct = function () {
							$scope.storage.datasource.push({
									itemid:			$scope.itemid,
									name: 			$scope.name,  // 'here'
									description: 	$scope.description,
									brand:			$scope.brand,
									category: 		$scope.category,
									purchaseDate: 	$scope.purchaseDate,
									price: 			$scope.price,
									quantity: 		$scope.quantity,
									rating: 		$scope.rating
								});

								// Clear form input fields after push captured data into localstorage
								$scope.itemid 		= 	"";
								$scope.name 		= 	"";
								$scope.description 	= 	"";
								$scope.brand		=	"";
								$scope.category 	= 	"";
								$scope.purchaseDate = 	"";
								$scope.price 		= 	"";
								$scope.quantity 	= 	"";
								$scope.rating 		= 	"";
				
					}; //end addPerson
					
					
		 	
					// Used in PAGE :  Listview Edit & delete   AND  TableVie Edit & delete 
					$scope.saveEdit = function (index) {
								$scope.storage.datasource[index].itemid 		= 		$scope.itemid;		
								$scope.storage.datasource[index].name 			=		$scope.name; 			
								$scope.storage.datasource[index].description 	=		$scope.description; 
								$scope.storage.datasource[index].brand 			=		$scope.brand; 	
								$scope.storage.datasource[index].category 		=		$scope.category ; 	
								$scope.storage.datasource[index].purchaseDate 	=		$scope.purchaseDate ; 	
								$scope.storage.datasource[index].price 			=		$scope.price ;			
								$scope.storage.datasource[index].quantity 		=		$scope.quantity ;
								$scope.storage.datasource[index].rating 		=		$scope.rating ;	
					 };// end saveEdit
					 
					 
					 // Used in PAGE :  Listview Edit & delete   AND  TableVie Edit & delete 
					$scope.deleteProduct = function (index) {
								$scope.index 		= 		index; 
								$scope.itemid 		= 		$scope.storage.datasource[index].itemid ;
								$scope.name 		= 		$scope.storage.datasource[index].name ;
								$scope.description 	= 		$scope.storage.datasource[index].description ;
								$scope.brand 		= 		$scope.storage.datasource[index].brand ;
								$scope.category 	= 		$scope.storage.datasource[index].category 
								$scope.purchaseDate = 		$scope.storage.datasource[index].purchaseDate ; ;
								$scope.price 		= 		$scope.storage.datasource[index].price ;
								$scope.quantity 	= 		$scope.storage.datasource[index].quantity ;
								$scope.rating 		= 		$scope.storage.datasource[index].rating ;
					};	
					
					
					// Used in PAGE :  Listview Edit & delete   AND  TableVie Edit & delete 
					$scope.deleteProductYes = function (index) {
								$scope.storage.datasource.splice(index, 1);
					}; // end deleteProductYes
					
					$scope.deleteProduct_bstable = function (item) {
						// indexOf: this identifies the index of the object item that has been passed
						var index = $scope.storage.datasource.indexOf(item);
  						$scope.storage.datasource.splice(index, 1);
					}; // end deleteProductYes					
				
					
					
					// Used in PAGE :  Filter 			 
					 $scope.editProduct = function (index) {
								$scope.index 		= 		index; 
								$scope.itemid 		= 		$scope.storage.datasource[index].itemid ;
								$scope.name			= 		$scope.storage.datasource[index].name ;
								$scope.description 	= 		$scope.storage.datasource[index].description ;
								$scope.brand 		= 		$scope.storage.datasource[index].brand ;
								$scope.category 	= 		$scope.storage.datasource[index].category ;  
								$scope.purchaseDate = 		$scope.storage.datasource[index].purchaseDate ; 
								$scope.price 		= 		$scope.storage.datasource[index].price ;
								$scope.quantity 	= 		$scope.storage.datasource[index].quantity ;
								$scope.rating 		= 		$scope.storage.datasource[index].rating ;
					 };	// end editProduct				
	
					// Used in PAGE :  Filter 
					// In the html filter page the drop-down selection value is passed here as "selection" 
					// The $scope.orderProducts is set depending on what you selected eg 'category' 
					// The $scope.orderProducts can now be access back in the html page to set the filter parameters
					// eg <tr ng-repeat="item in Storage = (storage.datasource | filter:searchQuery) | orderBy:orderProducts ">
					$scope.orderBy = function(selection) {
						if(selection == "name"){
							$scope.orderProducts = "name";
						}
						if(selection == "category"){
							$scope.orderProducts = "category";
						}
						if(selection == "purchaseDate"){
							$scope.orderProducts = "purchaseDate";
						}
						if(selection == "price"){
							$scope.orderProducts = "price";
						}
							
				  	};	// end orderBy
	
	
	
					// Used in PAGE :  Reports 
					$scope.showTotalPrice = function() {
								//assign datasourceto an temp array called data
								data = $scope.storage.datasource;
								//declare totalPrice
								var totalPrice = 0;
								// loop over temp array and add price for each item in array eg data[i].proce
								for(var i = 0; i < data.length; i++) {
									totalPrice	+=  Number(data[i].price)
								}	
								numberofitems = i;
								$scope.reportPrice = "There were " + numberofitems + " products.  The total price of all Products is: $" + totalPrice ;
					}// end showTotalPrice
				
				
					
					// This deletes or clears ALL records in your localstorage
					// Be careful when using this
					$scope.clearAll = function(){
							$localStorage.$reset();	
					}	// end clearALL				
						  
	});// end 'productController' controller
			
			
			
	//NOTE:  this directive fixes the clash between JQuery Mobile and  Angular when they both try to refreh an item you add to a listview
	app.directive('listView', function () {
					  var link=function(scope, element, attrs) {
						$(element).listview();
						scope.$watchCollection(attrs.watch, function() {
						  $(element).listview("refresh");
						});
					  };
					  return {
						restrict: 'EA',
						scope:false,
						link: link
					  };
	});	
					
			
			
	
	
			
			
			
			
			