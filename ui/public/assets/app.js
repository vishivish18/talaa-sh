angular.module("app",["ngRoute","ui.router"]),angular.module("app").controller("homeCtrl",["$scope","$http",function(o,t){o.setup=function(){},o.setup()}]),angular.module("app").controller("masterCtrl",["$scope","$rootScope",function(o,t){console.log("masterCtrl")}]),angular.module("app").controller("navCtrl",["$scope","$location",function(o,t){o.logout=function(){}}]),angular.module("app").config(["$stateProvider","$urlRouterProvider","$locationProvider",function(o,t,e){t.otherwise("/"),o.state("app",{url:"/",views:{header:{templateUrl:"/nav.html",controller:"navCtrl"},content:{templateUrl:"/home.html",controller:"homeCtrl"}}}).state("app.home",{url:"home",views:{"content@":{templateUrl:"users/home.html",controller:"homeCtrl"}}}),e.html5Mode(!0)}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImNvbnRyb2xsZXJzL2hvbWVDdHJsLmpzIiwiY29udHJvbGxlcnMvbWFzdGVyQ3RybC5qcyIsImNvbnRyb2xsZXJzL25hdkN0cmwuanMiLCJjb250cm9sbGVycy9yb3V0ZXMuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCIkaHR0cCIsInNldHVwIiwiJHJvb3RTY29wZSIsImNvbnNvbGUiLCJsb2ciLCIkbG9jYXRpb24iLCJsb2dvdXQiLCJjb25maWciLCIkc3RhdGVQcm92aWRlciIsIiR1cmxSb3V0ZXJQcm92aWRlciIsIiRsb2NhdGlvblByb3ZpZGVyIiwib3RoZXJ3aXNlIiwic3RhdGUiLCJ1cmwiLCJ2aWV3cyIsImhlYWRlciIsInRlbXBsYXRlVXJsIiwiY29udGVudCIsImNvbnRlbnRAIiwiaHRtbDVNb2RlIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBQUMsT0FBQSxPQUNBLFVBQUEsY0NEQUQsUUFBQUMsT0FBQSxPQUNBQyxXQUFBLFlBQUEsU0FBQSxRQUFBLFNBQUFDLEVBQUFDLEdBR0FELEVBQUFFLE1BQUEsYUFNQUYsRUFBQUUsV0NWQUwsUUFBQUMsT0FBQSxPQUNBQyxXQUFBLGNBQUEsU0FBQSxhQUFBLFNBQUFDLEVBQUFHLEdBQ0FDLFFBQUFDLElBQUEsaUJDRkFSLFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxXQUFBLFNBQUEsWUFBQSxTQUFBQyxFQUFBTSxHQUNBTixFQUFBTyxPQUFBLGdCQ0ZBVixRQUFBQyxPQUFBLE9BQ0FVLFFBQUEsaUJBQUEscUJBQUEsb0JBQUEsU0FBQUMsRUFBQUMsRUFBQUMsR0FFQUQsRUFBQUUsVUFBQSxLQUVBSCxFQUNBSSxNQUFBLE9BQ0FDLElBQUEsSUFDQUMsT0FDQUMsUUFDQUMsWUFBQSxZQUNBbEIsV0FBQSxXQUVBbUIsU0FDQUQsWUFBQSxhQUNBbEIsV0FBQSxlQU9BYyxNQUFBLFlBQ0FDLElBQUEsT0FDQUMsT0FDQUksWUFDQUYsWUFBQSxrQkFDQWxCLFdBQUEsZUFTQVksRUFBQVMsV0FBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwJyxbXG4nbmdSb3V0ZScsJ3VpLnJvdXRlcidcbl0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gICAgLmNvbnRyb2xsZXIoJ2hvbWVDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCkge1xuXG5cbiAgICAgICAgJHNjb3BlLnNldHVwID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgIH1cblxuICAgICAgICAkc2NvcGUuc2V0dXAoKTtcblxuXG5cbiAgICB9KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gICAgLmNvbnRyb2xsZXIoJ21hc3RlckN0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRyb290U2NvcGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJtYXN0ZXJDdHJsXCIpO1xuXG5cbiAgICB9KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gICAgLmNvbnRyb2xsZXIoJ25hdkN0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRsb2NhdGlvbikge1xuICAgICAgICAkc2NvcGUubG9nb3V0ID0gZnVuY3Rpb24oKSB7XG5cblxuICAgICAgICB9XG4gICAgfSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuICAgIC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcblxuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG5cbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnYXBwJywge1xuICAgICAgICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgICdoZWFkZXInOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9uYXYuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnbmF2Q3RybCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9ob21lLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2hvbWVDdHJsJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuXG5cbiAgICAgICAgLnN0YXRlKCdhcHAuaG9tZScsIHtcbiAgICAgICAgICAgIHVybDogJ2hvbWUnLFxuICAgICAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgICAgICAnY29udGVudEAnOiB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndXNlcnMvaG9tZS5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2hvbWVDdHJsJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG5cblxuXG4gICAgICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKVxuXG4gICAgfSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
