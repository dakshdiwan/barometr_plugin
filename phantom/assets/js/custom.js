function onHover(num)
{
$("#img"+num).attr('src', 'images/barometrscreenshot.png');
$("#imgtxt"+num).hide();
$("#imgtitle"+num).hide();
}

function offHover(num)
{
var picnum = num+1;
$("#img"+num).attr('src', 'images/pic0'+picnum+'.jpg');
$("#imgtxt"+num).show();
$("#imgtitle"+num).show();
}
