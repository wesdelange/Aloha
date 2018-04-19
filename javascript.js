
$(function(){
    var i = 0;
    $('button') .on('click', function(event) {
        event.preventDefault();
        i++;
        $("#counter").empty();
        $("#counter").append(i);
    })
})