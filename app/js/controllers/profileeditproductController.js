// Controller for Profile and Product detail pages
mainmodule.controller('profileeditproductCtrls' , function ($scope,$routeParams,apiFetching) {
	 
   $scope.editData = userz; 
   $scope.imageURLz = apiFetching.fetcher();
   
   
   if($routeParams.pID) {
  $scope.valuereal = $routeParams.pID;
  $scope.valuess = $routeParams.pID ;
   }
   $scope.profilePic = function(image){
	console.log(image);
		$scope.editData.image = image;

	
};


});