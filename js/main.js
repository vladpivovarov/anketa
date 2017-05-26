$(document).ready(function() {
    
    var checkbox = $("input[type='checkbox']");
    var checkboxFire = $(".label");
    var jsArray = ["vanillajs","angular","jquery"];
    var deskItemSize = 180 / jsArray.length;
    var jsCheckedCount = 0;
    var $arrow = $(".meter-elem-arrow");
    
    
    function deckChange(jsCheckedCount){ 
        $arrow.css({
            'transform': 'rotate(' + (deskItemSize * jsCheckedCount) + 'deg)',
            'transform-origin': '55px 50%'       
        });
        
        $(".spincrement").spincrement({
            from: (1000 / jsArray.length * jsCheckedCount),
            to: (1000 / jsArray.length * jsCheckedCount)+0.0001,           
            decimalPlaces: 0,
            decimalPoint: ".",
            thousandSeparator: ",",
            duration: 500
        });
    }

    function checkedActiveSearch(){
        jsCheckedCount = 0;

        var activeCheckboxs = $("input[type='checkbox']:checked");
        for(var i=0; i<activeCheckboxs.length; i++){
            var checkboxName = $(activeCheckboxs[i]).attr("name");
            for(var j=0; j<jsArray.length; j++){
                var jsName = jsArray[j];
                if(checkboxName == jsName){
                    jsCheckedCount++;
                }
            }
        }
        
        deckChange(jsCheckedCount);
    }

    checkbox.on("click", function(){
        checkedActiveSearch();
    })
    $(".label-checkbox").on("click", function(){
        $(this).siblings(".label-check").toggleClass("label-check-active");
    })
    

});