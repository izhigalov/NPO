

$(document).ready(function() {
    $('.parallax').parallax();
    $('.slider').slider();
    $('.collapsible').collapsible();
    $('#nav-icon1').click(function () {
        $(this).toggleClass('open');
    });
});
    $('[type="button"]').click(function(){
        $.post(
            'assets/js/submit.php',
            {
                email: $('[name="email"]').val(),
                name: $('[name="name"]').val(),
                phone: $('[name="phone"]').val(),
                message: $('[name="message"]').val()
            },
            function(data){
                $('.result').html(data);
            }
        );
});

var hum = document.getElementById('nav-icon1');
var aside = document.getElementById('aside');
var modal = document.getElementById('modal__wrap');
var feedbackBtn = document.getElementById('feedbackBtn');
var closeModal = document.getElementById('closeModal');
hum.onclick = function () {
    aside.classList.toggle('open');
};
feedbackBtn.onclick = function () {
    modal.style.display = ('block')
};
closeModal.onclick = function () {
    modal.style.display = ('none')
};





jQuery(document).ready(function($){
    var mainHeader = $('.header'),
        secondaryNavigation = $('.cd-secondary-nav'),
        //this applies only if secondary nav is below intro section
        belowNavHeroContent = $('.sub-nav-hero'),
        headerHeight = mainHeader.height();

    //set scrolling variables
    var scrolling = false,
        previousTop = 0,
        currentTop = 0,
        scrollDelta = 10,
        scrollOffset = 150;

    mainHeader.on('click', '.nav-trigger', function(event){
        // open primary navigation on mobile
        event.preventDefault();
        mainHeader.toggleClass('nav-open');
    });

    $(window).on('scroll', function(){
        if( !scrolling ) {
            scrolling = true;
            (!window.requestAnimationFrame)
                ? setTimeout(autoHideHeader, 250)
                : requestAnimationFrame(autoHideHeader);
        }
    });

    $(window).on('resize', function(){
        headerHeight = mainHeader.height();
    });

    function autoHideHeader() {
        var currentTop = $(window).scrollTop();

        ( belowNavHeroContent.length > 0 )
            ? checkStickyNavigation(currentTop) // secondary navigation below intro
            : checkSimpleNavigation(currentTop);

        previousTop = currentTop;
        scrolling = false;
    }

    function checkSimpleNavigation(currentTop) {
        //there's no secondary nav or secondary nav is below primary nav
        if (previousTop - currentTop > scrollDelta) {
            //if scrolling up...
            mainHeader.removeClass('is-hidden');
        } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
            //if scrolling down...
            mainHeader.addClass('is-hidden');
        }
    }

    function checkStickyNavigation(currentTop) {
        //secondary nav below intro section - sticky secondary nav
        var secondaryNavOffsetTop = belowNavHeroContent.offset().top - secondaryNavigation.height() - mainHeader.height();

        if (previousTop >= currentTop ) {
            //if scrolling up...
            if( currentTop < secondaryNavOffsetTop ) {
                //secondary nav is not fixed
                mainHeader.removeClass('is-hidden');
                secondaryNavigation.removeClass('fixed slide-up');
                belowNavHeroContent.removeClass('secondary-nav-fixed');
            } else if( previousTop - currentTop > scrollDelta ) {
                //secondary nav is fixed
                mainHeader.removeClass('is-hidden');
                secondaryNavigation.removeClass('slide-up').addClass('fixed');
                belowNavHeroContent.addClass('secondary-nav-fixed');
            }

        } else {
            //if scrolling down...
            if( currentTop > secondaryNavOffsetTop + scrollOffset ) {
                //hide primary nav
                mainHeader.addClass('is-hidden');
                secondaryNavigation.addClass('fixed slide-up');
                belowNavHeroContent.addClass('secondary-nav-fixed');
            } else if( currentTop > secondaryNavOffsetTop ) {
                //once the secondary nav is fixed, do not hide primary nav if you haven't scrolled more than scrollOffset
                mainHeader.removeClass('is-hidden');
                secondaryNavigation.addClass('fixed').removeClass('slide-up');
                belowNavHeroContent.addClass('secondary-nav-fixed');
            }

        }
    }
});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLnBhcmFsbGF4JykucGFyYWxsYXgoKTtcclxuICAgICQoJy5zbGlkZXInKS5zbGlkZXIoKTtcclxuICAgICQoJy5jb2xsYXBzaWJsZScpLmNvbGxhcHNpYmxlKCk7XHJcbiAgICAkKCcjbmF2LWljb24xJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgIH0pO1xyXG59KTtcclxuICAgICQoJ1t0eXBlPVwiYnV0dG9uXCJdJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkLnBvc3QoXHJcbiAgICAgICAgICAgICdhc3NldHMvanMvc3VibWl0LnBocCcsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAkKCdbbmFtZT1cImVtYWlsXCJdJykudmFsKCksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAkKCdbbmFtZT1cIm5hbWVcIl0nKS52YWwoKSxcclxuICAgICAgICAgICAgICAgIHBob25lOiAkKCdbbmFtZT1cInBob25lXCJdJykudmFsKCksXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAkKCdbbmFtZT1cIm1lc3NhZ2VcIl0nKS52YWwoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgICAgICQoJy5yZXN1bHQnKS5odG1sKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxufSk7XHJcblxyXG52YXIgaHVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1pY29uMScpO1xyXG52YXIgYXNpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXNpZGUnKTtcclxudmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsX193cmFwJyk7XHJcbnZhciBmZWVkYmFja0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVkYmFja0J0bicpO1xyXG52YXIgY2xvc2VNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsJyk7XHJcbmh1bS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgYXNpZGUuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG59O1xyXG5mZWVkYmFja0J0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICgnYmxvY2snKVxyXG59O1xyXG5jbG9zZU1vZGFsLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gKCdub25lJylcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCQpe1xyXG4gICAgdmFyIG1haW5IZWFkZXIgPSAkKCcuaGVhZGVyJyksXHJcbiAgICAgICAgc2Vjb25kYXJ5TmF2aWdhdGlvbiA9ICQoJy5jZC1zZWNvbmRhcnktbmF2JyksXHJcbiAgICAgICAgLy90aGlzIGFwcGxpZXMgb25seSBpZiBzZWNvbmRhcnkgbmF2IGlzIGJlbG93IGludHJvIHNlY3Rpb25cclxuICAgICAgICBiZWxvd05hdkhlcm9Db250ZW50ID0gJCgnLnN1Yi1uYXYtaGVybycpLFxyXG4gICAgICAgIGhlYWRlckhlaWdodCA9IG1haW5IZWFkZXIuaGVpZ2h0KCk7XHJcblxyXG4gICAgLy9zZXQgc2Nyb2xsaW5nIHZhcmlhYmxlc1xyXG4gICAgdmFyIHNjcm9sbGluZyA9IGZhbHNlLFxyXG4gICAgICAgIHByZXZpb3VzVG9wID0gMCxcclxuICAgICAgICBjdXJyZW50VG9wID0gMCxcclxuICAgICAgICBzY3JvbGxEZWx0YSA9IDEwLFxyXG4gICAgICAgIHNjcm9sbE9mZnNldCA9IDE1MDtcclxuXHJcbiAgICBtYWluSGVhZGVyLm9uKCdjbGljaycsICcubmF2LXRyaWdnZXInLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgLy8gb3BlbiBwcmltYXJ5IG5hdmlnYXRpb24gb24gbW9iaWxlXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBtYWluSGVhZGVyLnRvZ2dsZUNsYXNzKCduYXYtb3BlbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKCAhc2Nyb2xsaW5nICkge1xyXG4gICAgICAgICAgICBzY3JvbGxpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXHJcbiAgICAgICAgICAgICAgICA/IHNldFRpbWVvdXQoYXV0b0hpZGVIZWFkZXIsIDI1MClcclxuICAgICAgICAgICAgICAgIDogcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGF1dG9IaWRlSGVhZGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaGVhZGVySGVpZ2h0ID0gbWFpbkhlYWRlci5oZWlnaHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGF1dG9IaWRlSGVhZGVyKCkge1xyXG4gICAgICAgIHZhciBjdXJyZW50VG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICAoIGJlbG93TmF2SGVyb0NvbnRlbnQubGVuZ3RoID4gMCApXHJcbiAgICAgICAgICAgID8gY2hlY2tTdGlja3lOYXZpZ2F0aW9uKGN1cnJlbnRUb3ApIC8vIHNlY29uZGFyeSBuYXZpZ2F0aW9uIGJlbG93IGludHJvXHJcbiAgICAgICAgICAgIDogY2hlY2tTaW1wbGVOYXZpZ2F0aW9uKGN1cnJlbnRUb3ApO1xyXG5cclxuICAgICAgICBwcmV2aW91c1RvcCA9IGN1cnJlbnRUb3A7XHJcbiAgICAgICAgc2Nyb2xsaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tTaW1wbGVOYXZpZ2F0aW9uKGN1cnJlbnRUb3ApIHtcclxuICAgICAgICAvL3RoZXJlJ3Mgbm8gc2Vjb25kYXJ5IG5hdiBvciBzZWNvbmRhcnkgbmF2IGlzIGJlbG93IHByaW1hcnkgbmF2XHJcbiAgICAgICAgaWYgKHByZXZpb3VzVG9wIC0gY3VycmVudFRvcCA+IHNjcm9sbERlbHRhKSB7XHJcbiAgICAgICAgICAgIC8vaWYgc2Nyb2xsaW5nIHVwLi4uXHJcbiAgICAgICAgICAgIG1haW5IZWFkZXIucmVtb3ZlQ2xhc3MoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiggY3VycmVudFRvcCAtIHByZXZpb3VzVG9wID4gc2Nyb2xsRGVsdGEgJiYgY3VycmVudFRvcCA+IHNjcm9sbE9mZnNldCkge1xyXG4gICAgICAgICAgICAvL2lmIHNjcm9sbGluZyBkb3duLi4uXHJcbiAgICAgICAgICAgIG1haW5IZWFkZXIuYWRkQ2xhc3MoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja1N0aWNreU5hdmlnYXRpb24oY3VycmVudFRvcCkge1xyXG4gICAgICAgIC8vc2Vjb25kYXJ5IG5hdiBiZWxvdyBpbnRybyBzZWN0aW9uIC0gc3RpY2t5IHNlY29uZGFyeSBuYXZcclxuICAgICAgICB2YXIgc2Vjb25kYXJ5TmF2T2Zmc2V0VG9wID0gYmVsb3dOYXZIZXJvQ29udGVudC5vZmZzZXQoKS50b3AgLSBzZWNvbmRhcnlOYXZpZ2F0aW9uLmhlaWdodCgpIC0gbWFpbkhlYWRlci5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgaWYgKHByZXZpb3VzVG9wID49IGN1cnJlbnRUb3AgKSB7XHJcbiAgICAgICAgICAgIC8vaWYgc2Nyb2xsaW5nIHVwLi4uXHJcbiAgICAgICAgICAgIGlmKCBjdXJyZW50VG9wIDwgc2Vjb25kYXJ5TmF2T2Zmc2V0VG9wICkge1xyXG4gICAgICAgICAgICAgICAgLy9zZWNvbmRhcnkgbmF2IGlzIG5vdCBmaXhlZFxyXG4gICAgICAgICAgICAgICAgbWFpbkhlYWRlci5yZW1vdmVDbGFzcygnaXMtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlOYXZpZ2F0aW9uLnJlbW92ZUNsYXNzKCdmaXhlZCBzbGlkZS11cCcpO1xyXG4gICAgICAgICAgICAgICAgYmVsb3dOYXZIZXJvQ29udGVudC5yZW1vdmVDbGFzcygnc2Vjb25kYXJ5LW5hdi1maXhlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoIHByZXZpb3VzVG9wIC0gY3VycmVudFRvcCA+IHNjcm9sbERlbHRhICkge1xyXG4gICAgICAgICAgICAgICAgLy9zZWNvbmRhcnkgbmF2IGlzIGZpeGVkXHJcbiAgICAgICAgICAgICAgICBtYWluSGVhZGVyLnJlbW92ZUNsYXNzKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgIHNlY29uZGFyeU5hdmlnYXRpb24ucmVtb3ZlQ2xhc3MoJ3NsaWRlLXVwJykuYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAgICAgICAgICAgICBiZWxvd05hdkhlcm9Db250ZW50LmFkZENsYXNzKCdzZWNvbmRhcnktbmF2LWZpeGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9pZiBzY3JvbGxpbmcgZG93bi4uLlxyXG4gICAgICAgICAgICBpZiggY3VycmVudFRvcCA+IHNlY29uZGFyeU5hdk9mZnNldFRvcCArIHNjcm9sbE9mZnNldCApIHtcclxuICAgICAgICAgICAgICAgIC8vaGlkZSBwcmltYXJ5IG5hdlxyXG4gICAgICAgICAgICAgICAgbWFpbkhlYWRlci5hZGRDbGFzcygnaXMtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlOYXZpZ2F0aW9uLmFkZENsYXNzKCdmaXhlZCBzbGlkZS11cCcpO1xyXG4gICAgICAgICAgICAgICAgYmVsb3dOYXZIZXJvQ29udGVudC5hZGRDbGFzcygnc2Vjb25kYXJ5LW5hdi1maXhlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoIGN1cnJlbnRUb3AgPiBzZWNvbmRhcnlOYXZPZmZzZXRUb3AgKSB7XHJcbiAgICAgICAgICAgICAgICAvL29uY2UgdGhlIHNlY29uZGFyeSBuYXYgaXMgZml4ZWQsIGRvIG5vdCBoaWRlIHByaW1hcnkgbmF2IGlmIHlvdSBoYXZlbid0IHNjcm9sbGVkIG1vcmUgdGhhbiBzY3JvbGxPZmZzZXRcclxuICAgICAgICAgICAgICAgIG1haW5IZWFkZXIucmVtb3ZlQ2xhc3MoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5TmF2aWdhdGlvbi5hZGRDbGFzcygnZml4ZWQnKS5yZW1vdmVDbGFzcygnc2xpZGUtdXAnKTtcclxuICAgICAgICAgICAgICAgIGJlbG93TmF2SGVyb0NvbnRlbnQuYWRkQ2xhc3MoJ3NlY29uZGFyeS1uYXYtZml4ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuIl19
