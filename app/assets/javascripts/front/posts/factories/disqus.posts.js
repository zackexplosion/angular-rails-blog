angular
.module('blog')
.factory('DisqusPosts', ['$http', function($http){
    // return $resource('/posts/:postId.json', {postId:'@id'});
    var url = 'https://disqus.com/api/3.0/forums/listThreads.json?api_key=YOjgTcTI7adf43VF1DQQtm2Tq8TvnffQvVJyTd8vDuclFfrAWbfCzxUgzI80HlS0&forum=zackexplosion';
    var promise = $http.get(url).then(function(res){
      var data = res.data;
      // debugger;
      var links = [];
      angular.forEach(data.response,function(v){
        var m = /zackexplosion.com\/p\/\d+/i.test(v.link);

        var a = v.link.match(/zackexplosion.com\/p\/\d+$/);        
        if (m === false) return;
        links.push(v.link);
      });

      return links;
      
    });

    // debugger;

    return promise;
    
}])

