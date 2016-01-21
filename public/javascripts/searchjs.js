var op=[
    {
        'name': 'Environment',
        'src': '/images/environment.png',
        'image': 'url(/images/green.jpg)',
        'color': '#64ce69'

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
        'color': '#94a1e7',
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
        i += '<li class="waves-effect waves-block waves-light hide-on-med-and down" ng-click="display' + op[x].name + '()" id="' + op[x].name + '"><a href="#"><img src="' + op[x].src + '" alt="' + op[x].name + '" style="width: 50px; height: 50px"></a></li>';
    }
    var d=document.getElementsByClassName('side-nav');
    var $window=$(window);
    var windowsize=$window.width();
    if(windowsize>993){
        d[0].innerHTML=i;
        d[1].innerHTML="";
        sideClick();
    }
    else{
        d[1].innerHTML=i;
        d[0].innerHTML="";
        sideClick();
    }

}
active();
function active(){
    var y=document.getElementById('Environment');
    y.style.borderLeft= '0 solid '+op[0].color;
    y.style.backgroundColor= op[0].color;
    y.style.zIndex='20';
    y.style.boxShadow= '0 3px 5px rgba(0,0,0,0.2)';
    $('body').css('background-color',op[0].color);
    $('body').css('background-image',op[0].image);
    document.getElementById('heading').innerHTML=op[0].name;
}
updatepopup();

function updatepopup(){
    var popup=$("#popup-content");
    var top=($(window).height()-popup.outerHeight())/2;
    var left=($(window).width()-popup.outerWidth())/2;
    popup.css({
        'top': top,
        'left': left
    });
}
$(document).ready(function(){
    $(window).resize(function(){
        updatepopup();
        side();
    });

    $('li').on('mouseover',function(){
        var x=$(this).attr('id');
        var y=document.getElementById(x);
        var z;
        for(z=0;z<op.length;z++)
        {
            if(x==op[z].name)
            {
                break;
            }
        }
        var a=$(y).css('border-left-color');
        if(a== 'rgba(0, 0, 0, 0)') {
            y.style.borderLeft = '4px solid ' + op[z].color;
        }


    });
    $('li').on('mouseleave',function(){
       var x=$(this).attr('id');
        var y=document.getElementById(x);
        y.style.borderLeft= '0 solid rgba(0, 0, 0, 0)';
    });
    $('li').on('click',function(){
        var x=$(this).attr('id');
        var y=document.getElementById(x);
        var z;
        for(z=0;z<op.length;z++)
        {
            if(x==op[z].name)
            {
                break;
            }
        }
        var i;
        for(i=0;i<op.length;i++)
        {
            var a= document.getElementById(op[i].name);
            a.style.backgroundImage= 'url(nil)';
            a.style.backgroundColor= 'rgba(255, 255, 255, 1)';
            a.style.zIndex='0';
            a.style.boxShadow='0 0 0 rgba(0,0,0,0)';
        }
        y.style.borderLeft= '0 solid '+op[z].color;
        y.style.backgroundColor= op[z].color;
        y.style.zIndex='20';
        y.style.boxShadow= '0 5px 8px rgba(0,0,0,0.4)';
        $('body').css('background-color',op[z].color);
        $('body').css('background-image',op[z].image);
        document.getElementById('heading').innerHTML=op[z].name;
    });
    $('.button-collapse').sideNav();
    $('div.popup-open').click(function(){
        alert("button clicked");
    });

});

function sideClick(){
    $('li').on('mouseover',function(){
        var x=$(this).attr('id');
        var y=document.getElementById(x);
        var z;
        for(z=0;z<op.length;z++)
        {
            if(x==op[z].name)
            {
                break;
            }
        }
        var a=$(y).css('border-left-color');
        if(a== 'rgba(0, 0, 0, 0)') {
            y.style.borderLeft = '4px solid ' + op[z].color;
        }


    });
    $('li').on('mouseleave',function(){
        var x=$(this).attr('id');
        var y=document.getElementById(x);
        y.style.borderLeft= '0 solid rgba(0, 0, 0, 0)';
    });
    $('li').on('click',function(){
        var x=$(this).attr('id');
        var y=document.getElementById(x);
        var z;
        for(z=0;z<op.length;z++)
        {
            if(x==op[z].name)
            {
                break;
            }
        }
        var i;
        for(i=0;i<op.length;i++)
        {
            var a= document.getElementById(op[i].name);
            a.style.backgroundImage= 'url(nil)';
            a.style.backgroundColor= 'rgba(255, 255, 255, 1)';
            a.style.zIndex= '0';
            a.style.boxShadow='0 0 0 rgba(0,0 ,0 ,0)';
        }
        y.style.borderLeft= '0 solid '+op[z].color;
        y.style.backgroundColor= op[z].color;
        y.style.zIndex='20';
        y.style.boxShadow= '0 3px 5px rgba(0,0,0,0.2)';
        $('body').css('background-color',op[z].color);
        $('body').css('background-image',op[z].image);
        document.getElementById('heading').innerHTML=op[z].name;
    });

}


