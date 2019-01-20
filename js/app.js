$(document).ready(function(){
    
    $('body').scrollspy({ target: '#counter-result-controll', offset: 450 });
    
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
    
    $(window).on('activate.bs.scrollspy', function () {
        $.each(counters, function(index, value){
            value.start();
        });
    });
    
});
