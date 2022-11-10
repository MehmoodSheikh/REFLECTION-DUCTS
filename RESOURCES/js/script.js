$(document).ready(function() {

    /*for the sticky navigation*/

    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
        }, {
            offset:'60px;'
    });

    /*scroll on buttons*/

    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    /* Navigation scroll */
    
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target: $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /*Animation on scroll*/
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset:'50%'
    });

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset:'50%'
    });

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset:'50%'
    });

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset:'50%'
    });

    /*Mobile Nav*/

    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });


});

           
let customers = [];
        
    const addCustomer = (ev)=>{
        ev.preventDefault();  //to stop the form submitting
        let customer = {
            id: Date.now(),
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            Number: document.getElementById('PhoneNumber').value,
            state: document.getElementById('state').value,
            City: document.getElementById('city').value,
            message: document.getElementById('message').value,
        }
        customers.push(customer);
        document.forms[0].reset(); // to clear the form for the next entries
        //document.querySelector('form').reset();
 
        //for display purposes only
        console.warn('added' , {customers} );
        // let pre = document.querySelector('#msg pre');
        // pre.textContent = '\n' + JSON.stringify(customers, '\t', 2);0

        //saving to localStorage
        window.localStorage.setItem('MyCustomerList' , JSON.stringify(customers));
    } 

        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('ButtonSend').addEventListener('click', addCustomer);
        });   
