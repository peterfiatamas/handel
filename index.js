$(document).ready(function () {
    $('#a').css('background', 'gold');
    $('#menu2').on('click', kibe);
});

function kibe()
{
    if ($('#gombtarolo').is(':hidden'))
    {
        $('#gombtarolo').slideDown();
        $('#menu2').html(' &laquo;<span>H&#228;ndel trió</span>');
    } else
    {
        $('#gombtarolo').slideUp();
        $('#menu2').html(' &raquo;<span>H&#228;ndel trió</span>');
    }
}
