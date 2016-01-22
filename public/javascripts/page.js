/**
 * Created by pc on 16-01-2016.
 */
var arr=[
    {
        'id' : 'home'
    },
    {
        'id' : 'about'
    },
    {
        'id' : 'guests'
    },
    {
        'id' : 'events'
    },
    {
        'id' : 'schedule'
    },
    {
        'id' : 'register'
    },
    {
        'id': 'sponsors'
    },
    {
        'id':'tg'
    },
    {
        'id':'cpg'
    }
];
$(document).ready(function() {
    $('a').on('click', function () {
        var x=$(this).attr('id');
        for (var i = 0; i < arr.length; i++) {
            var y;
            y =arr[i].id;
            if (y != x) {
                $('#'+y+' > img').css({ '-webkit-filter': 'drop-shadow(0px 0px 0px )',
                    'filter': 'drop-shadow(0px 0px 0px )'});
                $('#' + y + '1').hide();
            }
            else
            {
                $('#'+x+' > img').css({ '-webkit-filter': 'drop-shadow(2px 2px 0 #FFEB3B)'});
                $('body').css({'background-image' :'url('+'/images/'+arr[i].id+'back.jpg)','background-size':'cover'});
                $('#'+x+'1').show();


            }
        }
    });
});
