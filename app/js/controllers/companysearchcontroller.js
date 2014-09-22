// Controller for company search page
 mainmodule.controller('companysearchcontroller', function($scope,$http) { 
      $scope.imageURLnew = [];
      $scope.imageurl = userz;
        $scope.profilePic = function(image){
           $scope.imageurl.image = image;
         };
      $scope.mains ={querys:""};
      $scope.forS = false;
      $scope.debounce = function() {
         
         var apiURL = 'http://www.json-generator.com/api/json/get/cjXJnSRydK?indent=2';
        
          $scope.forS = true;
         if($scope.imageURLnew.length === 0) 
         {
         $http.get(apiURL).success(function(data) {
      for(var j=0 ; j<data.response.docs.length;j++)
      {
          $scope.imageURLnew.push({images:data.response.docs[j].image_url});
        }
       
      });
      }
      if ($scope.mains.querys === "") {
        $scope.imageURLnew = [];
         $scope.forS = false;
      };
  };
  });