//Created by Max Barassi

			// creates the Angular modular "app"
			// NOTE: we inject into this module the ngStorage object  AND bsTable object
			var app = angular.module('app',['ngStorage','bsTable']);


			//  This is the controller called "giftController".
			//  It has two parameters:  $scope and $localStorage
			app.controller('giftController', function($scope,$localStorage) {

					// this CREATES a localstorage called "datasource".
					// this sets up default records
					// you can access this localstorage in your html page via the $scope eg $scope.storage.datasource
					$scope.storage = $localStorage.$default({
    						datasource: [{

								}]
				});  // end of creating localStorage 'datasource'




				// Used in PAGE :  ADD
				// 1. CAPTURING THE DATA
				// When you fill in the Gift form text fileds in the ADD page and click the button "add" - <button ng-click="addGift()" data-mini="true"  >Add </button>
				// When you click the 'add' button you activite its angular directive ng-click  which calls the addGift() function - which is below
				// Each field you enter text into is captured by fields directive ng-model=""
				// As an example look at when you enter the name, this fileds directive  ng-model="name" now binds the value to $scope
				// 2. PUTTING THE DATA INTO LOCALSTORAGE
				// We can access this below - see 'here'
				// We add to the localstorage via push  -> $scope.storage.datasource.push({
					$scope.addGift = function () {
							$scope.storage.datasource.push({
									giftname:			  $scope.giftname,
									giftbuyer: 			$scope.giftbuyer,
									giftcost: 	    $scope.giftcost,
									giftpriority:	 	$scope.giftpriority,
									giftstore: 		  $scope.giftstore,
									giftdate: 	    $scope.giftdate,
									giftnotes: 			$scope.giftnotes,

								});

								// Clear form input fields after push captured data into localstorage
								$scope.giftname 	  	= 	"";
								$scope.giftbuyer 	  	= 	"";
								$scope.giftcost 	    =   "";
								$scope.giftpriority   =  	"";
								$scope.giftstore 	    =	  "";
								$scope.giftdate       =   "";
								$scope.giftnotes 		  = 	"";


					}; //end addGift

	});// end 'giftController' controller



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
