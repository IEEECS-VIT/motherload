$(document).ready(function() {
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 3000);
    if($(window).width()<599)
    {
        var
            imageWidth = 220;
    }
    else
    {
        var
            imageWidth = 700
    }
    var
        $gravitas = $(".gravitas"),
        $gravitasSection = $(".gravitas-section"),
        $cards = $(".cards"),
        lastPos = {x:0},
        galleryPos = {x:0},
        currentImage = -1,
        //imageWidth = 700,
        imageSpacing = 0,
        imageTotalWidth=imageWidth+imageSpacing,
        speedLog=[],
        speedLogLimit=5,
        minBlur=2,
        maxBlur=200,
        blurMultiplier=0.25,
        lastBlur=0,
        dragging=false,
        lastDragPos={x:0},
        dragPos={x:0},
        totalDist=10,
        distThreshold=10,
        distLog=[],
        distLogLimit=10,
        momentumTween=null
        ;

   function setBlur(v){
        if(v<minBlur) v=0;
        if(v>maxBlur) v=maxBlur;
        if(v!=lastBlur){
            $("#blur").get(0).firstElementChild.setAttribute("stdDeviation",v+",0");
        }
        lastBlur=v;
    }

    $gravitasSection.css({
        webkitFilter:"url('#blur')",
        filter:"url('#blur')"

    });
    $cards.each(function(i) {
        var cur = $(this);
        cur.click(function(){
            if(Math.abs(totalDist)<distThreshold)
                setGalleryPos(i);
        });
        $(".gallery-pagination-dot").eq(i).click(function(){
            setGalleryPos(i);
        })
    });

    function setGalleryPos(v,anim){
        if(typeof anim=="undefined") anim=true;
        stopMomentum();
        TweenMax.to(galleryPos,anim?0.8:0,{
            x:-v*imageTotalWidth,
            ease:Quint.easeOut,
            onUpdate:updateGalleryPos,
            onComplete:updateGalleryPos
        });
    }
if($(window).width()<599)
{
    function updateGalleryPos(){
        TweenMax.set($gravitasSection,{
            x:galleryPos.x+(($(window).width()-imageWidth)/2),
            // x:galleryPos.x+((imageWidth-$(window).width())/100),
            force3D:true,
            lazy:true
        });
        //var speed=lastPos.x-galleryPos.x;
        var speed = galleryPos.x-lastPos.x;
        var blur=Math.abs(Math.round(speed*blurMultiplier));
        setBlur(blur);
        lastPos.x=galleryPos.x;

        var _currentImage=Math.round(-galleryPos.x/imageTotalWidth);
        if(_currentImage!=currentImage){
            currentImage=_currentImage;
            $(".gallery-pagination-dot-selected").removeClass('gallery-pagination-dot-selected');
            $(".gallery-pagination-dot").eq(currentImage).addClass('gallery-pagination-dot-selected')
        }


    }

}
else
{
    function updateGalleryPos(){
        TweenMax.set($gravitasSection,{
            x:galleryPos.x+(($(window).width()-imageWidth)/2),
            force3D:true,
            lazy:true
        });
        var speed=lastPos.x-galleryPos.x;
        var blur=Math.abs(Math.round(speed*blurMultiplier));
        setBlur(blur);
        lastPos.x=galleryPos.x;

        var _currentImage=Math.round(-galleryPos.x/imageTotalWidth);
        if(_currentImage!=currentImage){
            currentImage=_currentImage;
            $(".gallery-pagination-dot-selected").removeClass('gallery-pagination-dot-selected');
            $(".gallery-pagination-dot").eq(currentImage).addClass('gallery-pagination-dot-selected')
        }


    }
}

    $gravitas.mousedown(function(event){
        event.preventDefault();
        dragging=true;
        dragPos.x=event.pageX;
        lastDragPos.x=dragPos.x;
        totalDist=0;
        distLog=[];

        stopMomentum();

        updateGalleryPosLoop();
    });
    $(document).mousemove(function(event){
        if(dragging){
            dragPos.x=event.pageX;
        }
    });
    function updateGalleryPosLoop(){
        if(dragging){
            updateGalleryPos();
            var dist=dragPos.x-lastDragPos.x;
            lastDragPos.x=dragPos.x;
            totalDist+=dist;
            distLog.push(dist);
            while(distLog.length>distLogLimit){
                distLog.splice(0,1);
            };
            galleryPos.x+=dist;
            requestAnimationFrame(updateGalleryPosLoop)
        }
    }
    $(document).mouseup(function(event){
        if(dragging){
            dragging=false;
            var releaseSpeed=0;
            for (var i = 0; i < distLog.length; i++) {
                releaseSpeed+=distLog[i];
            };
            releaseSpeed/=distLog.length;

            var targetX=galleryPos.x+(releaseSpeed*20);
            targetX=Math.round(targetX/imageTotalWidth)*imageTotalWidth;
            var targetImage=-targetX/imageTotalWidth;
            var excess=0;
            if(targetImage<0){
                excess=targetImage;
                targetImage=0;
            }else if(targetImage>=$cards.length){
                excess=targetImage-($cards.length-1);
                targetImage=$cards.length-1;
            }
            if(excess!=0){
                targetX=-targetImage*imageTotalWidth;
            }
            momentumTween=TweenMax.to(galleryPos,1-(Math.abs(excess)/20),{
                x:targetX,
                ease:Quint.easeOut,
                onUpdate:updateGalleryPos,
                onComplete:updateGalleryPos
            });

            if(Math.abs(totalDist)>=distThreshold){
                event.preventDefault();
                event.stopPropagation();
            }
        }
    });
    function stopMomentum(){
        if(momentumTween!=null){
            momentumTween.kill();
            momentumTween=null;
            updateGalleryPos();
        }
    }

   setGalleryPos(0,false);
    function start()
    {
    $('#b1').click();
    i=1;
        slider();
    function slider()
    {

        setInterval(function() {
            $("#b"+i).click();
            i++;
            if(i==6)
            {
                rotate();
            }
        }, 3000);


    }
    function rotate()
    {
j=0;
k=1;
        setGalleryPos(j,false);
       setInterval(function(){

           $("#b"+k).click();
           k++;
           if(k>=6)
           {
           setGalleryPos(j,false);
            k=1;
           }
       },4000)
    }
    }
setInterval(start(),3000);




})


