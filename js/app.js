$(document).ready(function(){
    
    //init counter
    var options = {
        useEasing: true, 
        useGrouping: true, 
        separator: '', 
        decimal: ''
      };

    var counters = [];
    $('.counter-result_num').each(function(){
        counters.push(new CountUp($(this).attr('id'), 0, $(this).attr('data-countEnd'), 0, 2.5, options));
    });
    
    $.each(counters, function(index, value){
        value.start(function(){
            console.log(1);
        });
    });

});
