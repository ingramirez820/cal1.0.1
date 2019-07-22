var myApp = angular.module('calculadora',[]);

myApp.controller('Ctrl1', ['$scope', function($scope){

	$scope.output = "0";

	$scope.inOperation = false;

	$scope.num1 = 0;

	$scope.matrizBotones=['0','1','2','3','4','5','6','7','8','9'];

	$scope.updateOutput = function(btn) {
		if($scope.newNumber){
			$scope.output = 0;	
		}
		if($scope.output == "0" || $scope.newNumber) {
			$scope.output = btn;
			$scope.newNumber = false;
		} else {
			$scope.output += String(btn);
		}
	}

	$scope.operate = function(op) {
		if($scope.output && !$scope.inOperation){
			$scope.num1 = $scope.output;
			$scope.output += op;
			$scope.inOperation = true;
		}else if($scope.output.length > $scope.num1.length+1){
			$scope.output = eval($scope.output);
			$scope.output += op;
		} 
	}

	$scope.equal = function() {
		if($scope.output.length > $scope.num1.length+1){
			$scope.output = eval($scope.output);
      $scope.num1 = $scope.output;
		}else{
			$scope.output = $scope.num1;
		}
	}
	
}])
