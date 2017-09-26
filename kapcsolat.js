$(document).ready(function () {
    $('#c').css('background', 'gold');
    $('#menu2').on('click', kibe);
});


function kibe()
{
    if ($('#gombtarolo').is(':hidden'))
    {
        $('#gombtarolo').slideDown();
    } else
    {
        $('#gombtarolo').slideUp();
    }
}