{"changed":true,"filter":false,"title":"js.js","tooltip":"/js/js.js","value":"function TestCtrl($scope, $http) {     \n    var url = 'https://gdata.youtube.com/feeds/api/users/orbitalofficial/uploads?alt=json-in-script&callback=JSON_CALLBACK';\n    $http.jsonp(url).success(function(data) {\n        $scope.results = data.feed.entry;\n    });\n}","undoManager":{"mark":-1,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":5,"column":1},"action":"insert","lines":["function TestCtrl($scope, $http) {     ","    var url = 'https://gdata.youtube.com/feeds/api/users/orbitalofficial/uploads?alt=json-in-script&callback=JSON_CALLBACK';","    $http.jsonp(url).success(function(data) {","        $scope.results = data.feed.entry;","    });","}"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":5,"column":1},"end":{"row":5,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1421090085938}