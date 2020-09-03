$(document).ready(function(){ 
    if ($(".burger").length>0 ){
        $(".burger").click(function(){
            $(this).toggleClass("burger--open");
            $(".menu").toggleClass("menu--open");
            $(".body-sth").toggleClass("body-menu-open");
            $(".html-sth").toggleClass("html-menu-open");
        });
    }
    if ($(".js--clear-filter-menu").length > 0) {
        $(".js--clear-filter-menu").click(function () {
            $(this).closest(".filter-bl__form").find(".fti-checkbox__check-real").prop("checked", !1);
        });
    }
    if ($(".js--clear-mobile-filter").length > 0) {
        $(".js--clear-mobile-filter").click(function () {
            $(this).closest(".filter-mobile").find(".fti-checkbox__check-real").prop("checked", !1);
        });
    }
    if ($(".js--sort-open-btn").length > 0) {
        $(".js--sort-open-btn").click(function () {
            $(this).closest(".filter-bl__sort-block").toggleClass("filter-bl__sort-block--open");
            $(this).closest(".filter-bl__sort-block").find(".filter-bl__sort-bottom").slideToggle();
            // $(this).closest(".filter-bl__sort-block").find(".fti-checkbox__check-real").prop("checked", !1);
        });
    }
    if ($(".js--filter-mobile-open-btn").length>0 ){
        $(".js--filter-mobile-open-btn").click(function(){
            // $(this).toggleClass("burger--open");
            $(".filter-mobile").addClass("filter-mobile--open");
            $(".body-sth").addClass("body-menu-open");
            $(".html-sth").addClass("html-menu-open");
        });
    }
    if ($(".js--filter-mobile-close-btn").length>0 ){
        $(".js--filter-mobile-close-btn").click(function(){
            // $(this).toggleClass("burger--open");
            $(".filter-mobile").removeClass("filter-mobile--open");
            $(".body-sth").removeClass("body-menu-open");
            $(".html-sth").removeClass("html-menu-open");
        });
    }
    if($(".js--about-slider").length>0 ){
        var aboutSwiper = new Swiper('.js--about-slider', {
            speed: 400,
            spaceBetween: 0,
            navigation: {
                nextEl: '.js--about-btn-next',
                prevEl: '.js--about-btn-prev',
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
        $(window).on('resize', function () {
            aboutSwiper.update(true);
            console.log("aboutSwiper----update");
        });
    }
    if($(".js--about-slider-2").length>0 ){
        var aboutSwiper2 = new Swiper('.js--about-slider-2', {
            speed: 400,
            spaceBetween: 0,
            navigation: {
                nextEl: '.js--about-btn-next-2',
                prevEl: '.js--about-btn-prev-2',
            },
            pagination: {
                el: '.js--about-pagination-2',
            },
        });
        $(window).on('resize', function () {
            aboutSwiper2.update(true);
            console.log("aboutSwiper-2----update");
        });
    }
    if($(".js--about-slider-3").length>0 ){
        var aboutSwiper3 = new Swiper('.js--about-slider-3', {
            speed: 400,
            spaceBetween: 0,
            navigation: {
                nextEl: '.js--about-btn-next-3',
                prevEl: '.js--about-btn-prev-3',
            },
            pagination: {
                el: '.js--about-pagination-3',
            },
        });
        $(window).on('resize', function () {
            aboutSwiper3.update(true);
            console.log("aboutSwiper-3----update");
        });
    }

    if($(".js--insta-swiper").length>0 ){
        var instaSwiper = new Swiper('.js--insta-swiper', {
            speed: 700,
            spaceBetween: 0,
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            // navigation: {  
            //     nextEl: '.js--about-btn-next',
            //     prevEl: '.js--about-btn-prev',
            // },
            // pagination: {
            //     el: '.swiper-pagination',
            // },
        });
        $(window).on('resize', function () {
            instaSwiper.update(true);
            console.log("instaSwiper----update");
        });
    }

    if($(".js--simular-slider").length>0 ){
        var simularSwiper = new Swiper('.js--simular-slider', {
            speed: 400,
            spaceBetween: 0,
            slidesPerView: 4,
            freeMode: false,
            // centeredSlides: true,
            // loop: true,
            navigation: {  
                nextEl: '.js--simular-btn-next',
                prevEl: '.js--simular-btn-prev',
            },
            // pagination: {
            //     el: '.swiper-pagination',
            // },
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 320px
                // 320: {
                // slidesPerView: 1,
                // spaceBetween: 10
                // },
                // // when window width is <= 480px
                // 480: {
                // slidesPerView: 2,
                // spaceBetween: 20
                // },
                // // when window width is <= 640px
                575: {
                    slidesPerView: "auto",
                    freeMode: true,
                    spaceBetween: 0
                },
                991: {
                    slidesPerView: 2,
                    spaceBetween: 0
                },
                1199: {
                    slidesPerView: 3,
                    spaceBetween: 0
                }
            }
        });
        $(window).on('resize', function () {
            simularSwiper.update(true);
            console.log("simularSwiper----update");
        });
    }
    if ($(".js--filter-open-btn").length > 0) {
        $(".js--filter-open-btn").click(function(){
            $(this).closest(".filter-bl").toggleClass("filter-bl--open");
            $(this).closest(".filter-bl").find(".filter-bl__top").slideToggle();
        });
    }
    if ($(".select-lang__active").length > 0) {
        $(".select-lang__active").click(function(){
            $(this).closest(".select-lang").addClass("select-lang--open");
        });
    }
    if ($(".select-lang__select-link.active").length > 0) {
        $(".select-lang__select-link.active").click(function(event){
            event.preventDefault();
            $(this).closest(".select-lang").removeClass("select-lang--open");
        });
    }
    if ($(".back-top-btn").length > 0) {
        $(".back-top-btn").on("click", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор бока с атрибута href
            var id = $(this).attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({
                scrollTop: top
            }, 1500);
        });
    }
    if ($(".js--detail-info-show").length > 0) {
        $(".js--detail-info-show").click(function(){
            $(this).closest(".detail-info__item").toggleClass("detail-info__item--open");
            $(this).closest(".detail-info__item").find(".detail-info__bottom-item").slideToggle();
        });
    }
    if ($(".js-card-product-slider").length > 0) {
        var cardProductSwiper = new Swiper('.js-card-product-slider', {
            speed: 400,
            spaceBetween: 0,
            navigation: {
                nextEl: '.js--card-product-btn-next',
                prevEl: '.js--card-product-btn-prev',
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
        $(window).on('resize', function () {
            cardProductSwiper.update(true);
            console.log("cardProductSwiper----update");
        });
    }

    if ($(".js--guest-btn").length > 0) {
        $(".js--guest-btn").click(function () {
            $(this).closest(".guest-block").toggleClass("guest-block--open");
            // $(this).closest(".guest-block").find(".guest-block__select-block").slideToggle(400);
            // $(this).closest(".guest-block").find(".guest-block__select-block").slideToggle(400);
        });
    }
    if ($(".js--guest-parent-btn-plus").length > 0) {
        $(".js--guest-parent-btn-plus").on("click", function () {
            var realValParent = parseInt($(this).closest(".guest-block").find(".js--parent-input").val());
            realValParent = realValParent + 1;
            $(this).closest(".guest-block").find(".js--parent-input").val(realValParent);
            $(this).closest(".guest-block").find(".js--gs-top-parent-val").text(realValParent);
            $(this).closest(".guest-block").find(".js--gs-parent-val").text(realValParent);
            // $(this).closest(".bblock__line-num").find(".bblock__input-num").val();
        });
    }
    if ($(".js--guest-parent-btn-minus").length > 0) {
        $(".js--guest-parent-btn-minus").on("click", function () {
            var realValParent = parseInt($(this).closest(".guest-block").find(".js--parent-input").val());
            if (realValParent > 0) {
                realValParent = realValParent - 1;
                $(this).closest(".guest-block").find(".js--parent-input").val(realValParent);
                $(this).closest(".guest-block").find(".js--gs-top-parent-val").text(realValParent);
                $(this).closest(".guest-block").find(".js--gs-parent-val").text(realValParent);
                // $(this).closest(".bblock__line-num").find(".bblock__input-num").val();
            }
        });
    }

    if ($(".js--guest-children-btn-plus").length > 0) {
        $(".js--guest-children-btn-plus").on("click", function () {
            var realValChildren = parseInt($(this).closest(".guest-block").find(".js--children-input").val());
            // if (realValChildren > 1) {
                realValChildren = realValChildren + 1;
                $(this).closest(".guest-block").find(".js--children-input").val(realValChildren);
                $(this).closest(".guest-block").find(".js--gs-top-children-val").text(realValChildren);
                $(this).closest(".guest-block").find(".js--gs-children-val").text(realValChildren);
            // }
            // $(this).closest(".bblock__line-num").find(".bblock__input-num").val();
        });
    }
    if ($(".js--guest-children-btn-minus").length > 0) {
        $(".js--guest-children-btn-minus").on("click", function () {
            var realValChildren = parseInt($(this).closest(".guest-block").find(".js--children-input").val());
            if (realValChildren > 0) {
                realValChildren = realValChildren - 1;
                $(this).closest(".guest-block").find(".js--children-input").val(realValChildren);
                $(this).closest(".guest-block").find(".js--gs-top-children-val").text(realValChildren);
                $(this).closest(".guest-block").find(".js--gs-children-val").text(realValChildren);
            }
            // $(this).closest(".bblock__line-num").find(".bblock__input-num").val();
        }); 
    }

}); //close ready

