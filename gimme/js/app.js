//Created by Max Barassi

			var app = angular.module('app',['ngStorage','bsTable']);
			app.controller('giftController', function($scope,$localStorage) {

					// this CREATES a localstorage called "datasource".
					$scope.storage = $localStorage.$default({
    						datasource: [{

									giftname: "Shark",
									giftbuyer: "John",
									giftcost: "$1000",
									giftpriority: "!!",
									giftstore: "eBay",
									giftdate: "10/10/94",
									giftnotes: "I would like it, probs a great white please",

								}]
				});




				// Used in PAGE :  ADD
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

								$scope.giftname 	  	= 	"";
								$scope.giftbuyer 	  	= 	"";
								$scope.giftcost 	    =   "";
								$scope.giftpriority   =  	"";
								$scope.giftstore 	    =	  "";
								$scope.giftdate       =   "";
								$scope.giftnotes 		  = 	"";


					};
	});



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
