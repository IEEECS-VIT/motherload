var op=[
    {
        'name': 'Environment',
        'src': '/images/environment.png',
        'color': '#e57373'
    },
    {
        'name':"Energy",
        'src': '/images/energy.png',
        'color': '#5c6bc0'
    },
    {
        'name': "Manufacturing",
        'src': '/images/manufacturing.png',
        'color': '#4db6ac'
    },
    {
        'name': "Health",
        'src': '/images/health.png',
        'color': '#81c784'
    },
    {
        'name': 'Digital',
        'src': '/images/digital.png',
        'color': '#ffb74d'
    },
    {
        'name': 'Food',
        'src': '/images/food.png',
        'color': '#ff8a65'
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
    if(windowsize>992){
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
    $('body').css('background-color',op[0].color);
}
cardDisplay();
function cardDisplay(){
    $('li > a > i').on('click',function(){
        alert('clicked');
    })
}
$(document).ready(function(){
    $(window).resize(function(){
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
            a.style.backgroundColor= 'rgba(2, 3, 2, 0.1)';
        }
        y.style.borderLeft= '0 solid '+op[z].color;
        y.style.backgroundColor= op[z].color;
        $('body').css('background-color',op[z].color);
    });
    $('.button-collapse').sideNav();

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
            a.style.backgroundColor= 'rgba(2, 3, 2, 0.1)';
        }
        y.style.borderLeft= '0 solid '+op[z].color;
        y.style.backgroundColor= op[z].color;
        $('body').css('background-color',op[z].color);
    });

}


