function lights(){
    var a=Math.random();
    a=a*100;
    a=Math.round(a);
    a=a%22;
    for(i=1;i<=a;i++)
    {
        var i=Math.random();
        i=i*100;
        i=Math.round(i);
        i=i%22;

        $('#'+i).css("fill","#ffeb7c");
    }
}
function off(){
    for(i=1;i<=21;i++)
    {
        $('#'+i).css('fill','#c9c9c9');
    }

}
$(document).ready(function(){
   var d=new Date();
    //var h= d.getHours();
    var h=18;
    if((h>=19 && h<=23) ||(h>=0 && h<6))
    {
        var b=document.getElementsByTagName('body');
        console.log(b);
        b[0].style.backgroundColor="rgba(44, 62, 80, 1)";
    }
    else if(h>=6 && h<8)
    {
        var b=document.getElementsByTagName('body');
        console.log(b);
        b[0].style.backgroundColor="#e9cfec";
    }
    else if(h>=8 && h<11)
    {
        var b=document.getElementsByTagName('body');
        console.log(b);
        b[0].style.backgroundColor="#f9ecab";
    }
    else if(h>=11 && h<16)
    {
        var b=document.getElementsByTagName('body');
        console.log(b);
        b[0].style.backgroundColor="rgba(249, 222, 68, 0.87)";
    }
    else if(h>=16 && h<19){
        var b=document.getElementsByTagName('body');
        console.log(b);
        b[0].style.backgroundColor="#f1bb98";
    }
    setInterval(lights,3000);
    setInterval(off,60000);



});
