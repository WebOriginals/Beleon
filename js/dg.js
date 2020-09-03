$(document).ready(function () {
    // if (!Modernizr.cssvhunit) {
    //     console.log("not-supported css-vh");
    //     var homeScr = function (){
    //         var hWin = $(window).innerHeight();
    //         $(".eff").css('height',hWin);
    //         console.log("homeScr-выполнено");
    //     }
    //     if ($(".eff").length > 0) {
    //         homeScr();

    //         $(window).resize(function () {
    //             homeScr();
    //         });
    //     }
    // }


    
    
    if (!Modernizr.flexwrap) {
        if ($(".footer__end-col-1").length>0) {
            $(".footer__end-col-1").before("<div class=\"clearfix\"></div>");
        }
    }
    if (!Modernizr.svg) {
        $("img").each(function () {
            // console.log($(this).text());
            var srcText = $(this).attr("src");
            var LowSrcText = srcText.toLowerCase();
            var srcImgType = LowSrcText.slice(-3);
            if (srcImgType == "svg") {
                // var textSvg = "svg";
                // var textJpg = "jpg";
                var NewTypeName = "png";
                var lengthLink = LowSrcText.length;
                var lengthLinkMinus = lengthLink - 3;
                var linkHalf1 = LowSrcText.slice(0, lengthLinkMinus);
                var linkSum = linkHalf1 + NewTypeName;
                $(this).attr("src", linkSum);
            }
        });
    }
    
    if (!Modernizr.flexwrap && !Modernizr.flexbox && !Modernizr.flexboxlegacy) {
        if ($(".connection-tab__col-4").length>0){
            $(".connection-tab__col-4").after("<div class=\"clearfix\"></div>");
        }
        if ($(".footer__end-col-1").length > 0) {
            // if($(window).innerWidth()>)
            $(".footer__end-col-1").before("<div class=\"clearfix\"></div>");
        }
        if ($(".hot-contacts").length > 0) {
            if ($(window).innerWidth() < 991) {
                $($(".hot-contacts__item")[0]).closest(".col-12").after("<div class=\"clearfix\"></div>");
            }
            // var hotContClear = function(){
            //     if ($(window).innerWidth()<991){
            //         $($(".hot-contacts__item")[0]).after("<div class=\"clearfix\"></div>");
            //     } else {

            //     }
            // };
            // if ($(window).innerWidth() < 991) {}
            // $($(".hot-contacts__item")[0]).after("<div class=\"clearfix\"></div>");
            // $(".footer__end-col-1").before("<div class=\"clearfix\"></div>");
        }
        if ($(".footer__input-row").length > 0) {
            var footInpFunc = function () {
                $(".footer__input-wrap").removeAttr("style");
                var wFootRowSearch = $(".footer__input-row").innerWidth();
                var wFootBtnSearch = $(".footer__btn-wrap").innerWidth();
                var sumFootInput = wFootRowSearch - wFootBtnSearch - 1;
                $(".footer__input-wrap").css("width", sumFootInput + "px");
                $(".footer__input-wrap").css("max-width", sumFootInput + "px");
            };
            footInpFunc();
            $(window).resize(function(){
                footInpFunc();
            });
        }
    }
    if (!Modernizr.cssvhunit || !Modernizr.csscalc) {
        console.log("not-supported css-vh");
        var homeScrNoVh = function (elVh) {
                var hWin = $(window).innerHeight();
                $(elVh).css('height', hWin);
                console.log("homeScrNoVh-выполнено"); 
        };
        var homeScrNoCalc = function (elCalcItem, elCalcMinus) {
            var hWin = $(window).innerHeight();
            var heightElCalcMinus = $(elCalcMinus).innerHeight();
            var heightResult = hWin - heightElCalcMinus;
            $(elCalcItem).css('height', heightResult);
            console.log("homeScrNoCalc-выполнено");
        };
        // var homeScrEffVw = function () {
        //     var wWin = $(window).innerWidth();
        //     var w200vw = wWin * 2;
        //     var minus100vw = wWin*(-1);
        //     var minus50vw = (wWin/2)*(-1);
        //     var hWin = $(window).innerHeight();
        //     var hNav = $(".nav").innerHeight();
        //     var hCalcHeight = hWin - hNav;
        //     var marginTopCalc = hCalcHeight/(-2);
        //     $(".home-slider__item-round").css({
        //         "width": w200vw + "px",
        //         "height": w200vw + "px",
        //         "margin-left": minus100vw + "px",
        //         "margin-top": minus100vw + "px"
        //     });
        //     $(".home-slider__item-emulate").css({
        //         "width": wWin + "px",
        //         "height": hCalcHeight + "px",
        //         "margin-left": minus50vw + "px",
        //         "margin-top": marginTopCalc + "px",
        //     });
            

        // };
        // if ($(".home-slider__item").length>0){
        //     homeScrNoCalc(".home-slider__item", ".nav");
        //     // homeScrNoCalc(".home-slider__item-emulate", ".nav");
        //     homeScrEffVw();
        //     $(window).resize(function(){
        //         homeScrNoCalc(".home-slider__item", ".nav");
        //         // homeScrNoCalc(".home-slider__item-emulate", ".nav");
        //         homeScrEffVw();
        //     });
        // }
    }
    if (!Modernizr.csscalc) {
        console.log("not-supported css-calc");
        // var homeScr = function (){
        //     var hWin = $(window).innerHeight();
        //     $(".eff").css('height',hWin);
        //     console.log("homeScr-выполнено");
        // }
        var portItemScr = function () {
            if ($(window).innerWidth()>767){
                var hWinP = $(window).innerHeight();
                var hHead = $(".startheader").innerHeight();
                var hPortSum = hWinP - hHead;
                $(".pssb").css('height', hPortSum);
                console.log("portItemScr-выполнено");
            } else {
                // $(".pssb").css('height', hPortSum);
            }
        };    
        if ($(".eff").length>0) {
            // homeScr();
    
            // $(window).resize(function(){
            //     homeScr();
            // });
        }
        if ($(".pssb").length>0) {
            portItemScr();
    
            $(window).resize(function(){
                portItemScr();
            });
        }
    }
    if (!Modernizr.cssvhunit) {
        console.log("not-supported css-vh");
        // var homeScrNoVh = function (elVh) {
        //     var hWin = $(window).innerHeight();
        //     $(elVh).css('height', hWin);
        //     // $(".eff").css('height', hWin);
        //     console.log("homeScr-выполнено");
        // }

        // var homeScr = function (){
        //     var hWin = $(window).innerHeight();
        //     $(".eff").css('height',hWin);
        //     console.log("homeScr-выполнено");
        // }
        var portItemScr = function () {
            if ($(window).innerWidth()>767){
                var hWinP = $(window).innerHeight();
                var hHead = $(".startheader").innerHeight();
                var hPortSum = hWinP - hHead;
                $(".pssb").css('height', hPortSum);
                console.log("portItemScr-выполнено");
            } else {
                // $(".pssb").css('height', hPortSum);
            }
        }    
        if ($(".eff").length>0) {
            // homeScr();
    
            // $(window).resize(function(){
            //     homeScr();
            // });
        }
        if ($(".pssb").length>0) {
            portItemScr();
    
            $(window).resize(function(){
                portItemScr();
            });
        }
    }
    // 768
    if (!Modernizr.csspointerevents) {
        // not-supported
        console.log("not-supported pointerevents");
        $('body').removeClass("hover-init");
    } else {
        // supported
        console.log("supported pointerevents");
    }
    if (!Modernizr.flexboxlegacy) {
        // not-supported
        console.log("not-supported flexboxlegacy");
        $('.h-prt__item').after('<div class="clearfix"></div>');
        $('.startheader__box').after('<div class="clearfix"></div>');
    } else {
        // supported
        console.log("supported flexboxlegacy");
    }
    if (!Modernizr.csstransforms3d) {
        // not-supported
        console.log("not-supported csstransforms3d");
        var tr3d = function (el) {
            var tr3dWidth = $(el).innerWidth();
            var tr3dHeight = $(el).innerHeight();
            var sumWidth = (tr3dWidth/2)*(-1);
            var sumHeight = (tr3dHeight/2)*(-1);
            var cssValues = {
                "margin-left": sumWidth,
                "margin-top": sumHeight
            }
            $(el).css(cssValues);
        }
        tr3d(".screen-1__h");
    } else {
        // supported
        console.log("supported csstransforms3d");
    }

});