var events=[
    {
        'name':"Workshops",
        'url': "https://res.cloudinary.com/events-gravitas/image/upload/v1444243710/prev/ios2.jpg",
        'color':'Red'
    },
    {
        'name':"Builtrix",
        'url':"https://res.cloudinary.com/events-gravitas/image/upload/v1444243708/prev/jenga.jpg",
        'color':'Blue-Grey'
    },
    {
        'name':'Applied Engineering',
        'url':'https://res.cloudinary.com/events-gravitas/image/upload/v1444243740/prev/robotix2.jpg',
        'color':'Pink'
    },
    {
        'name':'Bits and Bytes',
        'url':'https://res.cloudinary.com/events-gravitas/image/upload/v1444243709/prev/jumble.jpg',
        'color': 'Indigo'
    },
    {
        'name':'Circuit',
        'url':'https://res.cloudinary.com/events-gravitas/image/upload/v1444243738/prev/robotix1.jpg',
        'color':'Cyan'
    },
    {
        'name':'Quiz',
        'url':'https://res.cloudinary.com/events-gravitas/image/upload/v1444243725/prev/quiz1.jpg',
        'color': 'Teal'
    },
    {
        'name':'Robotics',
        'url':'https://res.cloudinary.com/events-gravitas/image/upload/v1444243740/prev/robotix2.jpg',
        'color':'Green'
    },
    {
        'name':'Management/ Debate/ Discussion',
        'url':'https://res.cloudinary.com/events-gravitas/image/upload/v1444243707/prev/ios3.jpg',
        'color':'Deep-Orange'
    },
    {
        'name':'Bio/Chemical',
        'url':'https://res.cloudinary.com/events-gravitas/image/upload/v1444243731/prev/random8.jpg',
        'color':'Light-Green'
    },
    {
        'name':'Science and Tech',
        'url':'https://res.cloudinary.com/events-gravitas/image/upload/v1444243714/prev/contraptions.jpg',
        'color':'Amber'
    },
    {
        'name':'Informals',
        'url':'https://res.cloudinary.com/events-gravitas/image/upload/v1444243677/prev/dynasty.jpg',
        'color':'Lime'
    },
    {
        'name':'Online',
        'url':'http://res.cloudinary.com/events-gravitas/image/upload/v1444243746/prev/young3.jpg',
        'color':'Orange'
    },
    {
        'name':'SSIC',
        'url':'http://res.cloudinary.com/events-gravitas/image/upload/v1444243745/prev/young2.jpg',
        'color':'Blue'
    }
];

var e;
var eventname='';
var eventdescription='';
var clubname='';
$(document).ready(function(){


   // $(".button-collapse").sideNav();
    $('.button-collapse').sideNav({
        closeOnClick: true
    });
    $('.material-card').materialCard({
        icon_close: 'fa-chevron-left',
        icon_open: 'fa-thumbs-o-up',
        icon_spin: 'fa-spin-fast',
        card_activator: 'click' // or hover
    });
        //displaying the events
        displayevents();


   $('.modal-trigger').leanModal();

   $("li").on('click',function(){
        var x=document.getElementsByClassName("side-nav");
        $("#sidenav-overlay").remove();

    });
    change();
    //setting height of cards
    $(window).resize(change);




});
function change(){
    var h=$(window).height();
    var w=$(window).width();
    var cw=$(".cards").width();
    var tw=(w-cw-100)/2;

    if(w>=600&&w<=800)
        $(".cards").css("margin-right",(tw-80));
    else if(w<600)
        $(".cards").css('margin-right',0);
    else
        $(".cards").css("margin-right",(tw-120));
    var firsth=$("#first").height();
    if(w>=600)
    $(".card-gravitas").css("min-height",firsth);
    else
        $(".cards").css("min-height",firsth);
    $(".graphics").css("height",h/2);
    var gh=$(".gravitas").height();
    var fh=$(".page-footer").height();
    var nh=$(".nav-wrapper").height();
    if(w>=600)
    {
        var th=(h-gh-fh-nh)/2;
        $(".gravitas-section").css("margin-left",tw);
    }
    else
    {
        console.log(h/2);
        console.log(firsth);
        var th=(h-(gh+nh+fh))/2;
        $(".gravitas-section").css("margin-left",0);
    }
    console.log(th);
    $(".gravitas").css("margin-top",th);
    $(".gravitas").css("margin-bottom",th);
}
function displayevents(){
    var ev=document.getElementById('events1');
    var l=events.length;
    var a='<div id="events2"><div class="container"><div class="row"><div class="col s12 l12 m12 wow fadeInRight" data-wow-duration="2s" data-wow-delay="500ms"><h1><span style="color:white">Events</span></h1></div>';
    for(var i=0;i<l;i++)
    {
        a+='<div class="col s12 m4 l4 wow fadeInDown" data-wow-duration="2s" data-wow-delay="500ms" onclick="display(\''+events[i].name+'\')"><article class="material-card Indigo"><h2 class="z-depth-2"><span>'+events[i].name+'</span><strong><i class="fa fa-fw fa-star"></i>Know More...</strong></h2><div class="mc-content"><div class="img-container waves-effect waves-light z-depth-3">'+
        '<img src="'+events[i].url+'"></div></div><div class="mc-footer">'+
        '</div></article></div>'
    }
    a+='<div id="bottom_fade"></div>';
    a+='</div></div></div>';
    e=a;
    document.getElementById('events1').innerHTML=a;
}
function display(a)
{

    if(a=='Workshops')
    {

        var x='<div class="category"><div class="container"><div class="row"><div class="col s12 l12 m12"><a href="#" class="back left" onclick="displayevents()"><i class="fa fa-arrow-left" aria-hidden="true"></i></a><h1>Workshops</h1></div>';
        for(var i=0;i<workshop.length;i++)
        {
            x+='<div class="col s6 m6 l4 offset-s3 wow fadeInDown" data-wow-delay="300ms" data-wow-duration="1000ms">'+
        '<div class="card">'+
        '<div class="card-heading">'+
        '<h5>'+workshop[i].subcat+'<br><small>'+workshop[i].club+'</small></h5>'+
        '<a href="#eventsmodal" onclick="givename(\''+workshop[i].subcat+'\',\''+workshop[i].club+'\',\''+workshop[i].description+'\')" class="modal-trigger btn-floating btn-small waves-effect waves-light red right"><i class="material-icons">add</i></a>'+
        '</div>'+
        '</div>'+
        '</div>';
        }
        x+='</div></div></div>';
        document.getElementById('events1').innerHTML=x;

    }
    else if(a=='Builtrix')
    {
        var x='<div class="category"><div class="container"><div class="row"><div class="col s12 l12 m12"><a href="#" class="back left" onclick="displayevents()"><i class="fa fa-arrow-left" aria-hidden="true"></i></a><h1>Builtrix</h1></div>';
        for(var i=0;i<builtrix.length;i++)
        {
            x+='<div class="col s6 m6 l4 offset-s3 wow fadeInDown" data-wow-delay="300ms" data-wow-duration="1000ms">'+
            '<div class="card">'+
            '<div class="card-heading">'+
            '<h5>'+builtrix[i].subcat+'<br><small>'+builtrix[i].club+'</small></h5>'+
            '<a href="#eventsmodal" onclick="givename(\''+builtrix[i].subcat+'\',\''+builtrix[i].club+'\',\''+builtrix[i].description+'\')" class="modal-trigger btn-floating btn-small waves-effect waves-light red right"><i class="material-icons">add</i></a>'+
            '</div>'+
            '</div>'+
            '</div>';
        }
        x+='</div></div></div>';
        document.getElementById('events1').innerHTML=x;
    }
    else if(a=='Applied Engineering') {
        var x = '<div class="category"><div class="container"><div class="row"><div class="col s12 l12 m12"><a href="#" class="back left" onclick="displayevents()"><i class="fa fa-arrow-left" aria-hidden="true"></i></a><h1>Applied Engineering</h1></div>';
        for (var i = 0; i < appeng.length; i++) {
            x += '<div class="col s6 m6 l4 offset-s3 wow fadeInDown" data-wow-delay="300ms" data-wow-duration="1000ms">' +
            '<div class="card">' +
            '<div class="card-heading">' +
            '<h5>' + appeng[i].subcat + '<br><small>' + appeng[i].club + '</small></h5>' +
            '<a href="#eventsmodal" onclick="givename(\'' + appeng[i].subcat + '\',\'' + appeng[i].club + '\',\'' + appeng[i].description + '\')" class="modal-trigger btn-floating btn-small waves-effect waves-light red right"><i class="material-icons">add</i></a>' +
            '</div>' +
            '</div>' +
            '</div>';
        }
        x += '</div></div></div>';
        document.getElementById('events1').innerHTML = x;
    }
    else if(a=='Bits and Bytes')
    {
        var x='<div class="category"><div class="container"><div class="row"><div class="col s12 l12 m12"><a href="#" class="back left" onclick="displayevents()"><i class="fa fa-arrow-left" aria-hidden="true"></i></a><h1>Bits and Bytes</h1></div>';
        for(var i=0;i<bab.length;i++)
        {
            x+='<div class="col s6 m6 l4 offset-s3 wow fadeInDown" data-wow-delay="300ms" data-wow-duration="1000ms">'+
            '<div class="card">'+
            '<div class="card-heading">'+
            '<h5>'+bab[i].subcat+'<br><small>'+bab[i].club+'</small></h5>'+
            '<a href="#eventsmodal" onclick="givename(\''+bab[i].subcat+'\',\''+bab[i].club+'\',\''+bab[i].description+'\')" class="modal-trigger btn-floating btn-small waves-effect waves-light red right"><i class="material-icons">add</i></a>'+
            '</div>'+
            '</div>'+
            '</div>';
        }
        x+='</div></div></div>';
        document.getElementById('events1').innerHTML=x;
    }
    else if(a=='Circuit')
    {
        var x='<div class="category"><div class="container"><div class="row"><div class="col s12 l12 m12"><a href="#" class="back left" onclick="displayevents()"><i class="fa fa-arrow-left" aria-hidden="true"></i></a><h1>Circuit</h1></div>';
        for(var i=0;i<circuit.length;i++)
        {
            x+='<div class="col s6 m6 l4 offset-s3 wow fadeInDown" data-wow-delay="300ms" data-wow-duration="1000ms">'+
            '<div class="card">'+
            '<div class="card-heading">'+
            '<h5>'+circuit[i].subcat+'<br><small>'+circuit[i].club+'</small></h5>'+
            '<a href="#eventsmodal" onclick="givename(\''+circuit[i].subcat+'\',\''+circuit[i].club+'\',\''+circuit[i].description+'\')" class="modal-trigger btn-floating btn-small waves-effect waves-light red right"><i class="material-icons">add</i></a>'+
            '</div>'+
            '</div>'+
            '</div>';
        }
        x+='</div></div></div>';
        document.getElementById('events1').innerHTML=x;
    }
    else if(a=='Quiz')
    {
        var x='<div class="category"><div class="container"><div class="row"><div class="col s12 l12 m12"><a href="#" class="back left" onclick="displayevents()"><i class="fa fa-arrow-left" aria-hidden="true"></i></a><h1>quizs</h1></div>';
        for(var i=0;i<quiz.length;i++)
        {
            x+='<div class="col s6 m6 l4 offset-s3 wow fadeInDown" data-wow-delay="300ms" data-wow-duration="1000ms">'+
            '<div class="card">'+
            '<div class="card-heading">'+
            '<h5>'+quiz[i].subcat+'<br><small>'+quiz[i].club+'</small></h5>'+
            '<a href="#eventsmodal" onclick="givename(\''+quiz[i].subcat+'\',\''+quiz[i].club+'\',\''+quiz[i].description+'\')" class="modal-trigger btn-floating btn-small waves-effect waves-light red right"><i class="material-icons">add</i></a>'+
            '</div>'+
            '</div>'+
            '</div>';
        }
        x+='</div></div></div>';
        document.getElementById('events1').innerHTML=x;
    }
    else if(a=='Robotics')
    {
        var x='<div class="category"><div class="container"><div class="row"><div class="col s12 l12 m12"><a href="#" class="back left" onclick="displayevents()"><i class="fa fa-arrow-left" aria-hidden="true"></i></a><h1>Robotics</h1></div>';
        for(var i=0;i<robotics.length;i++)
        {
            x+='<div class="col s6 m6 l4 offset-s3 wow fadeInDown" data-wow-delay="300ms" data-wow-duration="1000ms">'+
            '<div class="card">'+
            '<div class="card-heading">'+
            '<h5>'+robotics[i].subcat+'<br><small>'+robotics[i].club+'</small></h5>'+
            '<a href="#eventsmodal" onclick="givename(\''+robotics[i].subcat+'\',\''+robotics[i].club+'\',\''+robotics[i].description+'\')" class="modal-trigger btn-floating btn-small waves-effect waves-light red right"><i class="material-icons">add</i></a>'+
            '</div>'+
            '</div>'+
            '</div>';
        }
        x+='</div></div></div>';
        document.getElementById('events1').innerHTML=x;
    }
    else if(a=="Management/ Debate/ Discussion")
    {
        var x='<div class="category"><div class="container"><div class="row"><div class="col s12 l12 m12"><a href="#" class="back left" onclick="displayevents()"><i class="fa fa-arrow-left" aria-hidden="true"></i></a><h1>Management/ Debate/ Discussion</h1></div>';
        for(var i=0;i<mdd.length;i++)
        {
            x+='<div class="col s6 m6 l4 offset-s3 wow fadeInDown" data-wow-delay="300ms" data-wow-duration="1000ms">'+
            '<div class="card">'+
            '<div class="card-heading">'+
            '<h5>'+mdd[i].subcat+'<br><small>'+mdd[i].club+'</small></h5>'+
            '<a href="#eventsmodal" onclick="givename(\''+mdd[i].subcat+'\',\''+mdd[i].club+'\',\''+mdd[i].description+'\')" class="modal-trigger btn-floating btn-small waves-effect waves-light red right"><i class="material-icons">add</i></a>'+
            '</div>'+
            '</div>'+
            '</div>';
        }
        x+='</div></div></div>';
        document.getElementById('events1').innerHTML=x;
    }
    else if(a=='Bio/Chemical')
    {
        var x='<div class="category"><div class="container"><div class="row"><div class="col s12 l12 m12"><a href="#" class="back left" onclick="displayevents()"><i class="fa fa-arrow-left" aria-hidden="true"></i></a><h1>Bio/ Chemical</h1></div>';
        for(var i=0;i<biochem.length;i++)
        {
            x+='<div class="col s6 m6 l4 offset-s3 wow fadeInDown" data-wow-delay="300ms" data-wow-duration="1000ms">'+
            '<div class="card">'+
            '<div class="card-heading">'+
            '<h5>'+biochem[i].subcat+'<br><small>'+biochem[i].club+'</small></h5>'+
            '<a href="#eventsmodal" onclick="givename(\''+biochem[i].subcat+'\',\''+biochem[i].club+'\',\''+biochem[i].description+'\')" class="modal-trigger btn-floating btn-small waves-effect waves-light red right"><i class="material-icons">add</i></a>'+
            '</div>'+
            '</div>'+
            '</div>';
        }
        x+='</div></div></div>';
        document.getElementById('events1').innerHTML=x;
    }
    else if(a=='Science and tech')
    {
        var x='<div class="category"><div class="container"><div class="row"><div class="col s12 l12 m12"><a href="#" class="back left" onclick="displayevents()"><i class="fa fa-arrow-left" aria-hidden="true"></i></a><h1>Science and Tech</h1></div>';
        for(var i=0;i<sctech.length;i++)
        {
            x+='<div class="col s6 m6 l4 offset-s3 wow fadeInDown" data-wow-delay="300ms" data-wow-duration="1000ms">'+
            '<div class="card">'+
            '<div class="card-heading">'+
            '<h5>'+sctech[i].subcat+'<br><small>'+sctech[i].club+'</small></h5>'+
            '<a href="#eventsmodal" onclick="givename(\''+sctech[i].subcat+'\',\''+sctech[i].club+'\',\''+sctech[i].description+'\')" class="modal-trigger btn-floating btn-small waves-effect waves-light red right"><i class="material-icons">add</i></a>'+
            '</div>'+
            '</div>'+
            '</div>';
        }
        x+='</div></div></div>';
        document.getElementById('events1').innerHTML=x;
    }
    else if(a=='Informals')
    {
        var x='<div class="category"><div class="container"><div class="row"><div class="col s12 l12 m12"><a href="#" class="back left" onclick="displayevents()"><i class="fa fa-arrow-left" aria-hidden="true"></i></a><h1>informalss</h1></div>';
        for(var i=0;i<informals.length;i++)
        {
            x+='<div class="col s6 m6 l4 offset-s3 wow fadeInDown" data-wow-delay="300ms" data-wow-duration="1000ms">'+
            '<div class="card">'+
            '<div class="card-heading">'+
            '<h5>'+informals[i].subcat+'<br><small>'+informals[i].club+'</small></h5>'+
            '<a href="#eventsmodal" onclick="givename(\''+informals[i].subcat+'\',\''+informals[i].club+'\',\''+informals[i].description+'\')" class="modal-trigger btn-floating btn-small waves-effect waves-light red right"><i class="material-icons">add</i></a>'+
            '</div>'+
            '</div>'+
            '</div>';
        }
        x+='</div></div></div>';
        document.getElementById('events1').innerHTML=x;
    }
    else if(a=='Online')
    {
        var x='<div class="category"><div class="container"><div class="row"><div class="col s12 l12 m12"><a href="#" class="back left" onclick="displayevents()"><i class="fa fa-arrow-left" aria-hidden="true"></i></a><h1>onlines</h1></div>';
        for(var i=0;i<online.length;i++)
        {
            x+='<div class="col s6 m6 l4 offset-s3 wow fadeInDown" data-wow-delay="300ms" data-wow-duration="1000ms">'+
            '<div class="card">'+
            '<div class="card-heading">'+
            '<h5>'+online[i].subcat+'<br><small>'+online[i].club+'</small></h5>'+
            '<a href="#eventsmodal" onclick="givename(\''+online[i].subcat+'\',\''+online[i].club+'\',\''+online[i].description+'\')" class="modal-trigger btn-floating btn-small waves-effect waves-light red right"><i class="material-icons">add</i></a>'+
            '</div>'+
            '</div>'+
            '</div>';
        }
        x+='</div></div></div>';
        document.getElementById('events1').innerHTML=x;
    }
    else if(a=='SSIC')
    {
        var x='<div class="category"><div class="container"><div class="row"><div class="col s12 l12 m12"><a href="#" class="back left" onclick="displayevents()"><i class="fa fa-arrow-left" aria-hidden="true"></i></a><h1>SSIC</h1></div>';
        for(var i=0;i<ssic.length;i++)
        {
            x+='<div class="col s6 m6 l4 offset-s3 wow fadeInDown" data-wow-delay="300ms" data-wow-duration="1000ms">'+
            '<div class="card">'+
            '<div class="card-heading">'+
            '<h5>'+ssic[i].subcat+'<br><small>'+ssic[i].club+'</small></h5>'+
            '<a href="#eventsmodal" onclick="givename(\''+ssic[i].subcat+'\',\''+ssic[i].club+'\',\''+ssic[i].description+'\')" class="modal-trigger btn-floating btn-small waves-effect waves-light red right"><i class="material-icons">add</i></a>'+
            '</div>'+
            '</div>'+
            '</div>';
        }
        x+='</div></div></div>';
        document.getElementById('events1').innerHTML=x;
    }
    else
    {

    }

}
function givename(a,b,c)
{

    eventname=a;
    clubname=b;
    eventdescription=c;
    var x='<div id="eventsmodal" class="modal">'+
    '<div class="modal-content">'+
    '<h4 align="center">'+eventname+'<br><small>'+clubname+'</small><a onclick="closem()"><i class="right material-icons" style="position: fixed; color: red; top:10px; right: 10px; cursor: pointer">close</i></a></h4> '+
    '<hr>'+
    '<p>'+eventdescription+'</p>'+
    '</div>'+
    '</div>';
    $('#events1').append(x);
    $('#eventsmodal').openModal();
}
function closem(){
    $('#eventsmodal').closeModal();
    $('#eventsmodal').remove();
}