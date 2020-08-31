(function () {
    'user strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.text = '';
        $scope.Message = '';
        $scope.styleMessage = '';
        $scope.styleTextBox = '';
        
        
        $scope.displayText = function () {
            var totalItems = calculateNumericForItems($scope.text);
            var arryMessagem = FinalMessage(totalItems);
            $scope.Message = arryMessagem[0]; //Strung Message
            $scope.styleMessage = arryMessagem[1]; //Message Style
            $scope.styleTextBox = arryMessagem[2]; // Text Box Style

          };
        
        
          function calculateNumericForItems(string) {
            var countItems = 0;
            var stringAux= string.split(',');//transform Array
            for (var i = 0; i < stringAux.length; i++) {
                var word = stringAux[i];
               for(var j =0; j < word.length; j++){
                    if(word[j] != ' '){//Characters different empty
                        countItems += 1;
                        j = stringAux[i].length;
                    }
                }
            }
            return countItems;
          }

          function FinalMessage(number) {
              var textFinal = '';
              var textFont = '';
              var textBoxBorder = '';

              if(number == 0){
                  textFinal = 'Please enter data first';
                  textFont = 'messageRed';
                  textBoxBorder = 'textboxRed';
                } else{
                        if(number > 0 && number <= 3){
                            textFinal = 'Enjoy!';
                         } else {
                                textFinal = 'Too much!';
                        }
                        textFont = 'messageGreen';
                        textBoxBorder = 'textboxGreen';
                    }

                      
              return [textFinal,textFont,textBoxBorder];

          }
          
        }; 


    
})();