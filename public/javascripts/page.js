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

            if ('events' == x || 'events2' == x) {

                $('#home').hide();
                $('#events1').show();
            }
            else
            {
                $('#home').show();

                //$('body').css({'background-image' :'url('+'/images/'+arr[i].id+'back.jpg)','background-size':'cover'});
                $('#events1').hide();


            }

    });
    $('.material-card').materialCard({
            icon_close: 'fa-chevron-left',
    icon_open: 'fa-thumbs-o-up',
    icon_spin: 'fa-spin-fast',
    card_activator: 'click'
});


});
