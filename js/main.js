$(window).load(function () {

    // preloader
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(550).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(550).css({
        'overflow': 'visible'
    });

    //typed.js
    $(".type").typed({
      strings: ["design. ^1000", "develop. ^1000", "create. ^1000", "build. ^1000"],
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 750,
      loop: true
    });

    //  isotope
    var $container = $('.portfolio_container');
    $container.isotope({
        filter: '*',
    });

    // active links
    $(function() {
      $('.side-nav-links li a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
    });

    $('.portfolio_filter a').click(function () {
        $('.portfolio_filter .active').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 500,
                animationEngine: "jquery"
            }
        });
        return false;
    });

    // back to top
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

    ( function ( $ ) {
        // Create a new instance of Slidebars
        var controller = new slidebars();

        // Events
        $( controller.events ).on( 'init', function () {
            console.log( 'Init event' );
        } );

        $( controller.events ).on( 'exit', function () {
            console.log( 'Exit event' );
        } );

        $( controller.events ).on( 'css', function () {
            console.log( 'CSS event' );
        } );

        $( controller.events ).on( 'opening', function ( event, id ) {
            console.log( 'Opening event of slidebar with id ' + id );
        } );

        $( controller.events ).on( 'opened', function ( event, id ) {
            console.log( 'Opened event of slidebar with id ' + id );
        } );

        $( controller.events ).on( 'closing', function ( event, id ) {
            console.log( 'Closing event of slidebar with id ' + id );
        } );

        $( controller.events ).on( 'closed', function ( event, id ) {
            console.log( 'Closed event of slidebar with id ' + id );
        } );

        // Initialize Slidebars
        controller.init();

        // Left Slidebar controls
        $( '.js-open-left-slidebar' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.open( 'slidebar-1' );
        } );

        $( '.js-close-left-slidebar' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.close( 'slidebar-1' );
        } );

        $( '.js-toggle-left-slidebar' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.toggle( 'slidebar-1' );
        } );

        // Right Slidebar controls
        $( '.js-open-right-slidebar' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.open( 'slidebar-2' );
        } );

        $( '.js-close-right-slidebar' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.close( 'slidebar-2' );
        } );

        $( '.js-toggle-right-slidebar' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.toggle( 'slidebar-2' );
        } );

        // Top Slidebar controls
        $( '.js-open-top-slidebar' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.open( 'slidebar-3' );
        } );

        $( '.js-close-top-slidebar' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.close( 'slidebar-3' );
        } );

        $( '.js-toggle-top-slidebar' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.toggle( 'slidebar-3' );
        } );

        // Bottom Slidebar controls
        $( '.js-open-bottom-slidebar' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.open( 'slidebar-4' );
        } );

        $( '.js-close-bottom-slidebar' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.close( 'slidebar-4' );
        } );

        $( '.js-toggle-bottom-slidebar' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.toggle( 'slidebar-4' );
        } );

        // Close any
        $( controller.events ).on( 'opened', function () {
            $( '[canvas="container"]' ).addClass( 'js-close-any-slidebar' );
        } );

        $( controller.events ).on( 'closed', function () {
            $( '[canvas="container"]' ).removeClass( 'js-close-any-slidebar' );
        } );

        $( 'body' ).on( 'click', '.js-close-any-slidebar', function ( event ) {
            event.stopPropagation();
            controller.close();
        } );

        // Initilize, exit and css reset
        $( '.js-initialize-slidebars' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.init();
        } );

        $( '.js-exit-slidebars' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.exit();
        } );

        $( '.js-reset-slidebars-css' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.css();
        } );

        // Is and get
        $( '.js-is-active' ).on( 'click', function ( event ) {
            event.stopPropagation();
            console.log( controller.isActive() );
        } );

        $( '.js-is-active-slidebar' ).on( 'click', function ( event ) {
            event.stopPropagation();
            var id = prompt( 'Enter a Slidebar id' );
            console.log( controller.isActiveSlidebar( id ) );
        } );

        $( '.js-get-active-slidebar' ).on( 'click', function ( event ) {
            event.stopPropagation();
            console.log( controller.getActiveSlidebar() );
        } );

        $( '.js-get-all-slidebars' ).on( 'click', function ( event ) {
            event.stopPropagation();
            console.log( controller.getSlidebars() );

        } );

        $( '.js-get-slidebar' ).on( 'click', function ( event ) {
            event.stopPropagation();
            var id = prompt( 'Enter a Slidebar id' );
            console.log( controller.getSlidebar( id ) );
        } );

        // Callbacks
        $( '.js-init-callback' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.init( function () {
                console.log( 'Init callback' );
            } );
        } );

        $( '.js-exit-callback' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.exit( function () {
                console.log( 'Exit callback' );
            } );
        } );

        $( '.js-css-callback' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.css( function () {
                console.log( 'CSS callback' );
            } );
        } );

        $( '.js-open-callback' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.open( 'slidebar-1', function () {
                console.log( 'Open callback' );
            } );
        } );

        $( '.js-close-callback' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.close( function () {
                console.log( 'Close callback' );
            } );
        } );

        $( '.js-toggle-callback' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.toggle( 'slidebar-1', function () {
                console.log( 'Toggle callback' );
            } );
        } );
    } );
});
