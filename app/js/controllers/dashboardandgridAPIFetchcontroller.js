// Controller for fetching and showing data from the API on the dashboard
mainmodule.controller('dashboardandgridAPIFetchCtrl' , function ($scope,apiFetching){ //dashboard grid
   $scope.editData =userz;

   $scope.imageURL = apiFetching.fetcher();
 
   $scope.profilePic = function(image){
 
   $scope.editData.image = image;
   };

         
});