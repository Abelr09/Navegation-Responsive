jQuery('document').ready(function($){

    var menuBtn = $('.view-menu'),
        menu = $('.navegation ul');

    menuBtn.click(function() {

        if( menu.hasClass('show') ) {

            menu.removeClass('show');

        } else {

            menu.addClass('show');
        }
    });
});