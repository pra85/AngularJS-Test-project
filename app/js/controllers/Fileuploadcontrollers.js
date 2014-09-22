// Controller for File uploading form , dependencies on external library upload
mainmodule.controller('fileuploadcontrollers' , function($scope, $upload) {
  $scope.onFileSelect = function($files) {
    //$files: an array of files selected, each file has name, size, and type.
    for (var i = 0; i < $files.length; i++) {
      var file = $files[i];

      var fileReader = new FileReader();
      					fileReader.readAsDataURL(file);
				var loadFile = function(fileReader, index) {

					fileReader.onload = function(e) {
						$timeout(function() {
							console.log("asdasdasdasdsadas");
							$scope.dataUrls = e.target.result;
							console.log($scope.dataUrls);
						});

					}
            };

             if (file.type.match('image.*')) {
        

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(tfile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = '<img class="thumbz" src="' + e.target.result +
                            '" />';
          angular.element('.imginsert').prepend(span, null);
        };
      })(file);
 reader.readAsDataURL(file);
      }



    	 
      $scope.upload = $upload.upload({
        url: 'http://angular-file-upload-cors-srv.appspot.com/upload', //upload.php script, node.js route, or servlet url
        //method: 'POST' or 'PUT',
        //headers: {'header-key': 'header-value'},
        //withCredentials: true,
        data: {myObj: $scope.myModelObj},
        data1: {myObj: $scope.myModelObj1},
        data2: {myObj: $scope.myModelObj2},
        file: file, // or list of files ($files) for html5 only
        //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
        // customize file formData name ('Content-Disposition'), server side file variable name. 
        //fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file' 
        // customize how data is added to formData. See #40#issuecomment-28612000 for sample code
        //formDataAppender: function(formData, key, val){}

      }).progress(function(evt) {
        console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
      }).success(function(data, status, headers, config) {
        // file is uploaded successfully
        console.log(data);
      });
      
    }
     
  };
});