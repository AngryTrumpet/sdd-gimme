//Created by Max Barassi

			var app = angular.module('app',['ngStorage','bsTable']);
			app.controller('giftController', function($scope,$localStorage) {

					// this CREATES a localstorage called "datasource".
					$scope.storage = $localStorage.$default({
    						datasource: []
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
						}
					};

					$scope.displayeditGift = function (index) {
						$scope.index				= index;
						$scope.giftname 			= $scope.storage.datasource[index].giftname ;
						$scope.giftbuyer 			= $scope.storage.datasource[index].giftbuyer 	;
						$scope.giftcost 			= $scope.storage.datasource[index].giftcost 	    ;
						$scope.giftpriority 		= $scope.storage.datasource[index].giftpriority   ;
						$scope.giftstore  			= $scope.storage.datasource[index].giftstore 		  ;
						$scope.giftdate  			= $scope.storage.datasource[index].giftdate     	;
						$scope.giftnotes 			= $scope.storage.datasource[index].giftnotes 			;
					}; // end displayEditgift


					$scope.saveEdit = function (index) {
						$scope.storage.datasource[index].giftname 		  = 	$scope.giftname;
						$scope.storage.datasource[index].giftbuyer 			=		$scope.giftbuyer;
						$scope.storage.datasource[index].giftcost 	    =		$scope.giftcost;
						$scope.storage.datasource[index].giftpriority   =		$scope.giftpriority;
						$scope.storage.datasource[index].giftstore 		  =		$scope.giftstore ;
						$scope.storage.datasource[index].giftdate     	=	  $scope.giftdate ;
						$scope.storage.datasource[index].giftnotes 			=		$scope.giftnotes ;
			 };// end saveEdit

			 $scope.deletegiftXXX = function (index) {
					 $scope.index 	    	= 		index;
					 $scope.giftname 		  =   	$scope.storage.datasource[index].giftname ;
					 $scope.giftbuyer 	  = 		$scope.storage.datasource[index].giftbuyer ;
					 $scope.giftcost 	    = 		$scope.storage.datasource[index].giftcost ;
					 $scope.giftpriority  = 		$scope.storage.datasource[index].giftpriority ;
					 $scope.giftstore 	  = 		$scope.storage.datasource[index].giftstore ;
					 $scope.giftdate      = 		$scope.storage.datasource[index].giftdate ;
					 $scope.giftnotes 		= 		$scope.storage.datasource[index].giftnotes ;
		   };

		   $scope.deleteGiftYes = function (index) {
			   console.log("delete here " +index)
	  					 $scope.storage.datasource.splice(index, 1);
	   	 }; // end deleteProductYes

		 $scope.clearAll = function(){
							$localStorage.$reset();
					}	// end clearALL		s

	});




	//directive fixes the clash between Jquery Mobile and AngularJS when they try to refresh an item you add on the home page
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
