/**
 * Created by pc on 05-04-2016.
 */
var myarr=
[
    {
        "id":'man1',
        "top": '92%',
        "left": '10%',
        "transform": 'rotate(90deg)'

    },
    {
        "id":'man2',
        "top": '85%',
        "left": '9.25%',
        "transform": 'rotate(80deg)'

    },
    {
        "id":'man3',
        "top": '78%',
        "left": '7.5%',
        "transform": 'rotate(60deg)'

    },
    {
        "id":'man4',
        "top": '74%',
        "left": '5.75%',
        "transform": 'rotate(45deg)'

    },
    {
        "id":'man5',
        "top": '69%',
        "left": '4%',
        "transform": 'rotate(35deg)'

    },
    {
        "id":'man6',
        "top": '66.5%',
        "left": '1.5%',
        "transform": 'rotate(25deg)'

    },
    {
        "id":'man7',
        "top": '69%',
        "left": '-1%',
        "transform": 'rotate(5deg)'

    }



];


$(document).ready(function(){
    var i;
    var x = document.getElementById('a');
    var out ="";
    for(i=0;i<7;i++)
    {
        //alert(myarr[i].id);
        //alert(myarr[i].top);
        out+='<img src="/images/man.svg" width="50" height="50" id="'+myarr[i].id+'">';
        $('#'+myarr[i].id).css({
            'position':'fixed',
            'top':myarr[i].top,
            'left':myarr[i].left,
            'transform':myarr[i].transform
        });
        x.innerHTML=out;
    }
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

