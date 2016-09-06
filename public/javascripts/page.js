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
    },
    {
        'id':'papers'
    }
];
$(document).ready(function() {
    $('#sponsor').hide();
    $('a').on('click', function () {
        var x=$(this).attr('id');

            if ('events' == x || 'events2' == x) {

                $('#home').hide();
                $('#events1').show();
            }
            else if('sponsors2'==x)
            {
                $('#home').hide();
                $('#sponsor').show();
            }
            else
            {
                $('#home').show();

                //$('body').css({'background-image' :'url('+'/images/'+arr[i].id+'back.jpg)','background-size':'cover'});
                $('#events1').hide();


            }

});


});
