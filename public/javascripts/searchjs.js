var op=[
    {
        'name': 'Environment',
        'src': '/images/environment.png',
        'image': 'url(/images/green.jpg)',
        'color': '#b7ee76'

    },
    {
        'name':"Energy",
        'src': '/images/energy.png',
        'color': '#ff9362',
        'image': 'url(/images/orange.jpg)'

    },
    {
        'name': "Manufacturing",
        'src': '/images/manufacturing.png',
        'color': '#767676',
        'image': 'url(/images/grey.jpg)'
    },
    {
        'name': "Health",
        'src': '/images/health.png',
        'color': '#fe9c9b',
        'image': 'url(/images/red.jpg)'

    },
    {
        'name': 'Digital',
        'src': '/images/digital.png',
        'color': '#8e9be1',
        'image': 'url(/images/blue.jpg)'

    },
    {
        'name': 'Food',
        'src': '/images/food.png',
        'color': '#d3b4a9',
        'image': 'url(/images/yellow.jpg)'

    }

];
side();
function side(){
    var x;
    var i='';
    for(x=0;x<op.length;x++) {
        i += '<li class="waves-effect waves-block waves-light hide-on-med-and down" ' +
        'ng-click="display('+x+')" id="' + op[x].name + '"><a href="#"><img src="' + op[x].src + '"' +
        ' alt="' + op[x].name + '" style="width: 50px; height: 50px"></a></li>';
    }
    var d=document.getElementById('side');
    d.innerHTML=i;
}
$(document).ready(function(){
    var l=op.length;
    for(var i=0;i<l;i++)
    {
        var a=document.getElementById(op[i].name);
        a.style.backgroundColor=op[i].color;
    }
    $('#'+op[0].name).css({
        background: 'white',
        zIndex: 20,
        boxShadow: '5px 5px 5px rgba(0,0,0,0.5)',
        left: '5px'
    });

});



