angular
.module('blog')
.controller('PostEditCrtl', 
[         '$scope', 'POST', '$state', 'imgur', '$state', '$document',
function( $scope,    POST,   $state,   imgur,   $state,   $document){
   $scope.post = POST;

    // $scope.editorOptions = {
    //     lineWrapping : true,
    //     lineNumbers: true,
    //     mode: 'markdown'
    // };

    $scope.preview = function(){
        $scope.post.$save().then(function(res){
            $state.go('^.preview');
        });
    }

    $scope.save = function () {
        $scope.post.$save();
    }

    $scope.show_on_front = function () {
        window.open('/p/' + POST.id);
    }   

    $('.published_at input').datetimepicker({
        defaultDate: $scope.post.published_at,
        format : 'YYYY-MM-DD',
        collapse: false
    }).on("dp.change", function (e) {
        var date = $(this).val();
        console.log(date);
        $scope.$apply(function(){
            $scope.post.published_at = date;
        });
    });

    // $scope.is_running_combo = false;

    $scope.is_cmd_press = false;   

    var binding_keys = [49,50,83];

    // var keys = [];

    $document.bind('keydown', function(e) {
        // keys.push(e.which);
        console.log('Got keydown:', e.which);
        if(e.which == 91 || e.which == 17){
            $scope.is_cmd_press = true;
        }

        console.log('is cmd pressing? ' + $scope.is_cmd_press);
        // console.log('is combo? ' +  $scope.is_running_combo);

        if($scope.is_cmd_press === true){            
            // var key_index = keys.indexOf(e.which);

            if(binding_keys.indexOf(e.which) == -1) return;
            e.preventDefault();
            switch(e.which){
                case 83: // s
                    $scope.save();
                    break;
                case 49: // e
                    $state.go('^.editor');
                    break;
                case 50: // d
                    $scope.preview();
                    break;
            }
        }

        // console.log('combo key is ' + $scope.key_combo);
    });

    $document.bind('keyup', function(e) {
      console.log('Got keyup: ', e.which);
      if(e.which == 91 || e.which == 17){
        $scope.is_cmd_press = false;
      }

    });

}])