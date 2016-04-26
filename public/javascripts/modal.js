/**
 * Created by pc on 05-04-2016.
 */
var myarr=
[
    {
        "id":'man1',
        "top": '92%',
        "left": '12.5%',
        "transform": 'rotate(90deg)'

    },
    {
        "id":'man2',
        "top": '85%',
        "left": '11.5%',
        "transform": 'rotate(77deg)'

    },
    {
        "id":'man3',
        "top": '78.5%',
        "left": '9.5%',
        "transform": 'rotate(60deg)'

    },
    {
        "id":'man4',
        "top": '76%',
        "left": '8%',
        "transform": 'rotate(45deg)'

    },
    {
        "id":'man5',
        "top": '73%',
        "left": '5.5%',
        "transform": 'rotate(35deg)'

    },
    {
        "id":'man6',
        "top": '70%',
        "left": '1.5%',
        "transform": 'rotate(22deg)'

    },
    {
        "id":'man7',
        "top": '69%',
        "left": '-1%',
        "transform": 'rotate(5deg)'

    }



];
function man()
{
    var i;
    var x = document.getElementsByClassName('ab');
    var out ="";
    for(i=0;i<7;i++)
    {
        //alert(myarr[i].id);
        //alert(myarr[i].top);
        out+='<img src="/images/man.svg" width="50" height="50" id="'+myarr[i].id+'">';

        x[0].innerHTML=out;
    }
    for(i=0;i<7;i++)
    {
        $('#'+myarr[i].id).css({
            'position':'fixed',
            'top':myarr[i].top,
            'left':myarr[i].left,
            'transform':myarr[i].transform
        });
    }
}

$(document).ready(function(){

    var size = {width: $(window).width() , height: $(window).height() }

    /*CALCULATE SIZE*/
    var offset = 0;
    var offsetBody = 0;
    $('.modal1').css('height', size.height - offset );
    $('.modal-body').css('height', size.height - (offset + offsetBody));
    $('.modal1').css('top', 0);

    $(".fadeInAmate").fadeInAmate({
        initialDelay: 250,
        fadeInSpeed: 900,
        animationDelay: 300,

        // enable the slide down animation
        bounce: true
    });
    $('#text').textFx({
        type: 'rotate', // fadeIn, slideIn, rotate and scale
        iChar: 500, // the delay between each characters animation in ms
        iAnim: 500, // the time of the animation for each character in ms
        direction: 'top' // only applicable to slide, is the direction (top, left, down, right) the character slides from
    });

    man();
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal(
        {
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: .5, // Opacity of modal background
            in_duration: 300, // Transition in duration
            out_duration: 300 // Transition out duration
        }

    );
});

