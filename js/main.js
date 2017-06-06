
    // selectors
    var button = $('.btn')
        ;

    //refresh page when window is resized
    //window.onresize = function(){ location.reload(); };

    //Add class to body if not a touch device
    if (!('ontouchstart' in document.documentElement)
        && !navigator.MaxTouchPoints
        && !navigator.msMaxTouchPoints) {
        document.body.className += ' notouch';
    }

    // wait for the document ready
    $(document).ready(function() {

        // fixed nav-bar on scroll
        var nav = $(".navbar-fixed-top");
        $(window).scroll(function() {
            if (nav.offset().top > 100) {
                nav.addClass("top-nav-collapse");
            } else {
                nav.removeClass("top-nav-collapse");
            }
        });

        /**
         * This part causes smooth scrolling using scrollto.js
         * We target all a tags inside the nav, and apply the scrollto.js to it.
         */
        //=====================================================
        $("nav a, .scrl_to").click(function(evn){
            evn.preventDefault();
            $('html,body').scrollTo(this.hash, this.hash);
        });



        /**
         * This part handles the highlighting functionality.
         * We use the scroll functionality again, some array creation and
         * manipulation, class adding and class removing, and conditional testing
         */
            //=====================================================
        var aChildren = $("nav li").children(); // find the a children of the list items
        var aArray = []; // create the empty aArray
        for (var i=0; i < aChildren.length; i++) {
            var aChild = aChildren[i];
            var ahref = $(aChild).attr('href');
            aArray.push(ahref);
        } // this for loop fills the aArray with attribute href values

        $(window).scroll(function(){
            var windowPos = $(window).scrollTop()+2; // get the offset of the window from the top of page
            var windowHeight = $(window).height(); // get the height of the window
            var docHeight = $(document).height();

            for (var i=0; i < aArray.length; i++) {
                var theID = aArray[i];
                var divPos = $(theID).offset().top; // get the offset of the div from the top of page
                var divHeight = $(theID).height(); // get the height of the div in question
                if (windowPos >= divPos && windowPos <= (divPos + divHeight)) {
                    $("a[href='" + theID + "']").addClass("nav-active");
                } else {
                    $("a[href='" + theID + "']").removeClass("nav-active");
                }
            }

            if(windowPos + windowHeight == docHeight) {
                if (!$("nav li:last-child a").hasClass("nav-active")) {
                    var navActiveCurrent = $(".nav-active").attr("href");
                    $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
                    $("nav li:last-child a").addClass("nav-active");
                }
            }
        });




        //hamburger menu
        //=====================================================
        $(".hamburger").on('click',function(e){
            e.preventDefault();
            $(this).toggleClass('is-active');
        });
        $(".site-overlay, .pushy-link").on('click',function(e){
            e.preventDefault();
            $('.hamburger').removeClass('is-active');
        });




        //cards rotation animation
        //=====================================================

        function rotateCards(){
            var card1 = $('.card1'),
                card2 = $('.card2'),
                card3 = $('.card3'),
                card4 = $('.card4'),
                card5 = $('.card5'),
                card6 = $('.card6'),
                cards = $('.cards')
                ;
            var tl = new TimelineMax();
            tl
                .to(card1,2, {transformOrigin: "50% 100%", rotation:-20,top:-25,left:-15,ease: Elastic.easeOut.config(1, 0.5)},0)
                .to(card2,2, {transformOrigin: "50% 100%", rotation:-10,top:-12,ease: Elastic.easeOut.config(1, 0.5)},0)
                .to(card3,2, {transformOrigin: "50% 100%", rotation:0,top:-6,ease: Elastic.easeOut.config(1, 0.5)},0)
                .to(card4,2, {transformOrigin: "50% 100%", rotation:10,top:-3,ease: Elastic.easeOut.config(1, 0.5)},0)
                .to(card5,2, {transformOrigin: "50% 100%", rotation:20,ease: Elastic.easeOut.config(1, 0.5)},0)
                .to(card6,2, {transformOrigin: "50% 100%", rotation:30,ease: Elastic.easeOut.config(1, 0.5)},0)
                .to(cards,1, {transformOrigin: "50% 100%", rotation:-8,left:-15,ease: Power4.easeOut},0)
            ;
            return tl ;
        }
        setTimeout(function () {
            rotateCards();
        },1000);




        //button wiggle animation
        //=====================================================

        // click button to open its page
        button.on('click', function(e){
            e.preventDefault();
            var $this = $(this);
            // var url = $(this).attr('href');
            setTimeout(function () {
                // window.location.href=url;
                $this.parents('.flipper').addClass('hover');
            },250)
        });

        // button mouse Down elastic animation
        function ButtonDownAnimation(btnUp, btnDwn){
            var tl = new TimelineMax();
            tl.to(btnUp,.25, {morphSVG:btnDwn,ease: Circ.easeOut})
            ;
            return tl ;
        }

        // button mouse Up elastic animation
        function ButtonUpAnimation(btnUp, btnDwn){
            var tl = new TimelineMax();
            tl.to(btnUp,1, {morphSVG:btnUp,ease: Elastic.easeOut.config(1.5, 0.2)})
            ;
            return tl ;
        }

        // button click to wiggle
        button.mousedown(function(){
            var buttonUp = $(this).find('.btn1');
            var buttonDown = $(this).find('.btn2');
            ButtonDownAnimation(buttonUp,buttonDown);
        });
        button.mouseup(function(){
            var buttonUp = $(this).find('.btn1');
            var buttonDown = $(this).find('.btn2');
            ButtonUpAnimation(buttonUp,buttonDown);
        });


    });

