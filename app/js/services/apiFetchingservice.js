mainmodule.factory('apiFetching', function($http) {

var apiURLs = 'http://www.json-generator.com/api/json/get/cjXJnSRydK?indent=2';

    var imageURLzs = { URLz : [] };
  

  return {

  	fetcher:function()
   {
   $http.get(apiURLs).success(function(data) {
   for(var j=0 ; j<data.response.docs.length;j++)
   	{
      imageURLzs.URLz.push(data.response.docs[j].image_url);
    }
     });
   return imageURLzs;
    }
  }  
});