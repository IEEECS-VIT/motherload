/**
 * Created by pc on 16-01-2016.
 */
var arr=[
    {
        'id' : 'home',
        'src' : 'home.png'
    },
    {
        'id' : 'about',
        'src' : 'about.png'
    },
    {
        'id' : 'guests',
        'src' : 'guests.png'
    },
    {
        'id' : 'events',
        'src' : 'events.png'
    },
    {
        'id' : 'schedule',
        'src' : 'schedule.png'
    },
    {
        'id' : 'register',
        'src' : 'register.png'
    },
    {
        'id': 'sponsors',
        'src':'sponsors.png'
    },
    {
        'id':'tg',
        src:'tg.png'
    },
    {
        'id':'cpg',
        src:'cpg.png'
    }
];
$(document).ready(function() {
    $('a').on('click', function () {
        var x=$(this).attr('id');
        for (var i = 0; i < arr.length; i++) {
            var y;
            y =arr[i].id;
            if (y != x) {


                 $('#'+y+' > img').attr('src','/images/'+arr[i].id+'.png');
                $('#' + y + '1').hide();
            }
            else
            {

                $('#'+x+' > img').attr('src','/images/'+arr[i].id+'open.png');
                $('body').css({'background-image' :'url('+'/images/'+arr[i].id+'back.jpg)','transition':'1s','left':'0','-webkit-animation': 'slide 0.5s forwards'
                    });
                $('#'+x+'1').show();

 {

            }
 {


        }
            }
        }
    });
});
