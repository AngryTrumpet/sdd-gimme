//CRUD using AngularJS and ngStorage
//Created by Peter Cox
//11 April 2015
//Copyright  2014  PCSquared.com.au

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
									giftname:			$scope.giftname,
									giftbuyer: 			$scope.giftbuyer,
									giftcost: 	$scope.giftcost,
									giftpriority:			$scope.giftpriority,
									giftstore: 		$scope.giftstore,
									giftdate: 	$scope.giftdate,
									giftnotes: 			$scope.giftnotes,

								});

								// Clear form input fields after push captured data into localstorage
								$scope.giftname 		= 	"";
								$scope.giftbuyer 		= 	"";
								$scope.giftcost 	= 	"";
								$scope.giftpriority		=	"";
								$scope.giftstore 	= 	"";
								$scope.giftdate = 	"";
								$scope.giftnotes 		= 	"";


					}; //end addPerson



					// Used in PAGE :  Listview Edit & delete   AND  TableVie Edit & delete
					$scope.saveEdit = function (index) {
								$scope.storage.datasource[index].giftname 		= 		$scope.giftname;
								$scope.storage.datasource[index].giftbuyer 			=		$scope.giftbuyer;
								$scope.storage.datasource[index].giftcost 	=		$scope.giftcost;
								$scope.storage.datasource[index].giftpriority 			=		$scope.giftpriority;
								$scope.storage.datasource[index].giftstore 		=		$scope.giftstore ;
								$scope.storage.datasource[index].giftdate 	=		$scope.giftdate ;
								$scope.storage.datasource[index].giftnotes 			=		$scope.giftnotes ;

					 };// end saveEdit


					 // Used in PAGE :  Listview Edit & delete   AND  TableVie Edit & delete
					$scope.deleteGift = function (index) {
								$scope.index 		= 		index;
								$scope.giftname 		= 		$scope.storage.datasource[index].giftname ;
								$scope.giftbuyer 		= 		$scope.storage.datasource[index].giftbuyer ;
								$scope.giftcost 	= 		$scope.storage.datasource[index].giftcost ;
								$scope.giftpriority 		= 		$scope.storage.datasource[index].giftpriority ;
								$scope.giftstore 	= 		$scope.storage.datasource[index].giftstore
								$scope.giftdate = 		$scope.storage.datasource[index].giftdate ; ;
								$scope.giftnotes 		= 		$scope.storage.datasource[index].giftnotes ;

					};


					// Used in PAGE :  Listview Edit & delete   AND  TableVie Edit & delete
					$scope.deleteGiftYes = function (index) {
								$scope.storage.datasource.splice(index, 1);
					}; // end deleteGiftYes

					$scope.deleteGift_bstable = function (item) {
						// indexOf: this identifies the index of the object item that has been passed
						var index = $scope.storage.datasource.indexOf(item);
  						$scope.storage.datasource.splice(index, 1);
					}; // end deleteGiftYes



					// Used in PAGE :  Filter
					 $scope.editGift = function (index) {
								$scope.index 		= 		index;
								$scope.giftname 		= 		$scope.storage.datasource[index].giftname ;
								$scope.giftbuyer			= 		$scope.storage.datasource[index].giftbuyer ;
								$scope.giftcost 	= 		$scope.storage.datasource[index].giftcost ;
								$scope.giftpriority 		= 		$scope.storage.datasource[index].giftpriority ;
								$scope.giftstore 	= 		$scope.storage.datasource[index].giftstore ;
								$scope.giftdate = 		$scope.storage.datasource[index].giftdate ;
								$scope.giftnotes 		= 		$scope.storage.datasource[index].giftnotes ;

					 };	// end editGift

					// Used in PAGE :  Filter
					// In the html filter page the drop-down selection value is passed here as "selection"
					// The $scope.orderGifts is set depending on what you selected eg 'giftstore'
					// The $scope.orderGifts can now be access back in the html page to set the filter parameters
					// eg <tr ng-repeat="item in Storage = (storage.datasource | filter:searchQuery) | orderBy:orderGifts ">
					$scope.orderBy = function(selection) {
						if(selection == "giftbuyer"){
							$scope.orderGifts = "giftbuyer";
						}
						if(selection == "giftstore"){
							$scope.orderGifts = "giftstore";
						}
						if(selection == "giftdate"){
							$scope.orderGifts = "giftdate";
						}
						if(selection == "giftnotes"){
							$scope.orderGifts = "giftnotes";
						}

				  	};	// end orderBy



					// Used in PAGE :  Reports
					$scope.showTotalgiftnotes = function() {
								//assign datasourceto an temp array called data
								data = $scope.storage.datasource;
								//declare totalgiftnotes
								var totalgiftnotes = 0;
								// loop over temp array and add giftnotes for each item in array eg data[i].proce
								for(var i = 0; i < data.length; i++) {
									totalgiftnotes	+=  Number(data[i].giftnotes)
								}
								numberofitems = i;
								$scope.reportgiftnotes = "There were " + numberofitems + " Gifts.  The total giftnotes of all Gifts is: $" + totalgiftnotes ;
					}// end showTotalgiftnotes



					// This deletes or clears ALL records in your localstorage
					// Be careful when using this
					$scope.clearAll = function(){
							$localStorage.$reset();
					}	// end clearALL

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
