$(document).ready(function () {
    $("#klik").on('click', le);
});

function le()
{
    if($('#gord').is(':hidden'))
    {
         $('#gord').slideDown();
    }else
    {
        $('#gord').slideUp();
    }
}