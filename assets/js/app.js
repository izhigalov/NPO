
$(document).ready(function() {
    $('.parallax').parallax();
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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICQoJy5wYXJhbGxheCcpLnBhcmFsbGF4KCk7XHJcbiAgICAkKCcuY29sbGFwc2libGUnKS5jb2xsYXBzaWJsZSgpO1xyXG4gICAgJCgnI25hdi1pY29uMScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICB9KTtcclxufSk7XHJcbiAgICAkKCdbdHlwZT1cImJ1dHRvblwiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJC5wb3N0KFxyXG4gICAgICAgICAgICAnYXNzZXRzL2pzL3N1Ym1pdC5waHAnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJCgnW25hbWU9XCJlbWFpbFwiXScpLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJCgnW25hbWU9XCJuYW1lXCJdJykudmFsKCksXHJcbiAgICAgICAgICAgICAgICBwaG9uZTogJCgnW25hbWU9XCJwaG9uZVwiXScpLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJCgnW25hbWU9XCJtZXNzYWdlXCJdJykudmFsKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAkKCcucmVzdWx0JykuaHRtbChkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbn0pO1xyXG5cclxudmFyIGh1bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtaWNvbjEnKTtcclxudmFyIGFzaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FzaWRlJyk7XHJcbnZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbF9fd3JhcCcpO1xyXG52YXIgZmVlZGJhY2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlZGJhY2tCdG4nKTtcclxudmFyIGNsb3NlTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VNb2RhbCcpO1xyXG5odW0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGFzaWRlLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxufTtcclxuZmVlZGJhY2tCdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAoJ2Jsb2NrJylcclxufTtcclxuY2xvc2VNb2RhbC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICgnbm9uZScpXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKXtcclxuICAgIHZhciBtYWluSGVhZGVyID0gJCgnLmhlYWRlcicpLFxyXG4gICAgICAgIHNlY29uZGFyeU5hdmlnYXRpb24gPSAkKCcuY2Qtc2Vjb25kYXJ5LW5hdicpLFxyXG4gICAgICAgIC8vdGhpcyBhcHBsaWVzIG9ubHkgaWYgc2Vjb25kYXJ5IG5hdiBpcyBiZWxvdyBpbnRybyBzZWN0aW9uXHJcbiAgICAgICAgYmVsb3dOYXZIZXJvQ29udGVudCA9ICQoJy5zdWItbmF2LWhlcm8nKSxcclxuICAgICAgICBoZWFkZXJIZWlnaHQgPSBtYWluSGVhZGVyLmhlaWdodCgpO1xyXG5cclxuICAgIC8vc2V0IHNjcm9sbGluZyB2YXJpYWJsZXNcclxuICAgIHZhciBzY3JvbGxpbmcgPSBmYWxzZSxcclxuICAgICAgICBwcmV2aW91c1RvcCA9IDAsXHJcbiAgICAgICAgY3VycmVudFRvcCA9IDAsXHJcbiAgICAgICAgc2Nyb2xsRGVsdGEgPSAxMCxcclxuICAgICAgICBzY3JvbGxPZmZzZXQgPSAxNTA7XHJcblxyXG4gICAgbWFpbkhlYWRlci5vbignY2xpY2snLCAnLm5hdi10cmlnZ2VyJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIC8vIG9wZW4gcHJpbWFyeSBuYXZpZ2F0aW9uIG9uIG1vYmlsZVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbWFpbkhlYWRlci50b2dnbGVDbGFzcygnbmF2LW9wZW4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiggIXNjcm9sbGluZyApIHtcclxuICAgICAgICAgICAgc2Nyb2xsaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxyXG4gICAgICAgICAgICAgICAgPyBzZXRUaW1lb3V0KGF1dG9IaWRlSGVhZGVyLCAyNTApXHJcbiAgICAgICAgICAgICAgICA6IHJlcXVlc3RBbmltYXRpb25GcmFtZShhdXRvSGlkZUhlYWRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGhlYWRlckhlaWdodCA9IG1haW5IZWFkZXIuaGVpZ2h0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBhdXRvSGlkZUhlYWRlcigpIHtcclxuICAgICAgICB2YXIgY3VycmVudFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgKCBiZWxvd05hdkhlcm9Db250ZW50Lmxlbmd0aCA+IDAgKVxyXG4gICAgICAgICAgICA/IGNoZWNrU3RpY2t5TmF2aWdhdGlvbihjdXJyZW50VG9wKSAvLyBzZWNvbmRhcnkgbmF2aWdhdGlvbiBiZWxvdyBpbnRyb1xyXG4gICAgICAgICAgICA6IGNoZWNrU2ltcGxlTmF2aWdhdGlvbihjdXJyZW50VG9wKTtcclxuXHJcbiAgICAgICAgcHJldmlvdXNUb3AgPSBjdXJyZW50VG9wO1xyXG4gICAgICAgIHNjcm9sbGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrU2ltcGxlTmF2aWdhdGlvbihjdXJyZW50VG9wKSB7XHJcbiAgICAgICAgLy90aGVyZSdzIG5vIHNlY29uZGFyeSBuYXYgb3Igc2Vjb25kYXJ5IG5hdiBpcyBiZWxvdyBwcmltYXJ5IG5hdlxyXG4gICAgICAgIGlmIChwcmV2aW91c1RvcCAtIGN1cnJlbnRUb3AgPiBzY3JvbGxEZWx0YSkge1xyXG4gICAgICAgICAgICAvL2lmIHNjcm9sbGluZyB1cC4uLlxyXG4gICAgICAgICAgICBtYWluSGVhZGVyLnJlbW92ZUNsYXNzKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICB9IGVsc2UgaWYoIGN1cnJlbnRUb3AgLSBwcmV2aW91c1RvcCA+IHNjcm9sbERlbHRhICYmIGN1cnJlbnRUb3AgPiBzY3JvbGxPZmZzZXQpIHtcclxuICAgICAgICAgICAgLy9pZiBzY3JvbGxpbmcgZG93bi4uLlxyXG4gICAgICAgICAgICBtYWluSGVhZGVyLmFkZENsYXNzKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tTdGlja3lOYXZpZ2F0aW9uKGN1cnJlbnRUb3ApIHtcclxuICAgICAgICAvL3NlY29uZGFyeSBuYXYgYmVsb3cgaW50cm8gc2VjdGlvbiAtIHN0aWNreSBzZWNvbmRhcnkgbmF2XHJcbiAgICAgICAgdmFyIHNlY29uZGFyeU5hdk9mZnNldFRvcCA9IGJlbG93TmF2SGVyb0NvbnRlbnQub2Zmc2V0KCkudG9wIC0gc2Vjb25kYXJ5TmF2aWdhdGlvbi5oZWlnaHQoKSAtIG1haW5IZWFkZXIuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgIGlmIChwcmV2aW91c1RvcCA+PSBjdXJyZW50VG9wICkge1xyXG4gICAgICAgICAgICAvL2lmIHNjcm9sbGluZyB1cC4uLlxyXG4gICAgICAgICAgICBpZiggY3VycmVudFRvcCA8IHNlY29uZGFyeU5hdk9mZnNldFRvcCApIHtcclxuICAgICAgICAgICAgICAgIC8vc2Vjb25kYXJ5IG5hdiBpcyBub3QgZml4ZWRcclxuICAgICAgICAgICAgICAgIG1haW5IZWFkZXIucmVtb3ZlQ2xhc3MoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5TmF2aWdhdGlvbi5yZW1vdmVDbGFzcygnZml4ZWQgc2xpZGUtdXAnKTtcclxuICAgICAgICAgICAgICAgIGJlbG93TmF2SGVyb0NvbnRlbnQucmVtb3ZlQ2xhc3MoJ3NlY29uZGFyeS1uYXYtZml4ZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKCBwcmV2aW91c1RvcCAtIGN1cnJlbnRUb3AgPiBzY3JvbGxEZWx0YSApIHtcclxuICAgICAgICAgICAgICAgIC8vc2Vjb25kYXJ5IG5hdiBpcyBmaXhlZFxyXG4gICAgICAgICAgICAgICAgbWFpbkhlYWRlci5yZW1vdmVDbGFzcygnaXMtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlOYXZpZ2F0aW9uLnJlbW92ZUNsYXNzKCdzbGlkZS11cCcpLmFkZENsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgICAgICAgICAgYmVsb3dOYXZIZXJvQ29udGVudC5hZGRDbGFzcygnc2Vjb25kYXJ5LW5hdi1maXhlZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vaWYgc2Nyb2xsaW5nIGRvd24uLi5cclxuICAgICAgICAgICAgaWYoIGN1cnJlbnRUb3AgPiBzZWNvbmRhcnlOYXZPZmZzZXRUb3AgKyBzY3JvbGxPZmZzZXQgKSB7XHJcbiAgICAgICAgICAgICAgICAvL2hpZGUgcHJpbWFyeSBuYXZcclxuICAgICAgICAgICAgICAgIG1haW5IZWFkZXIuYWRkQ2xhc3MoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5TmF2aWdhdGlvbi5hZGRDbGFzcygnZml4ZWQgc2xpZGUtdXAnKTtcclxuICAgICAgICAgICAgICAgIGJlbG93TmF2SGVyb0NvbnRlbnQuYWRkQ2xhc3MoJ3NlY29uZGFyeS1uYXYtZml4ZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKCBjdXJyZW50VG9wID4gc2Vjb25kYXJ5TmF2T2Zmc2V0VG9wICkge1xyXG4gICAgICAgICAgICAgICAgLy9vbmNlIHRoZSBzZWNvbmRhcnkgbmF2IGlzIGZpeGVkLCBkbyBub3QgaGlkZSBwcmltYXJ5IG5hdiBpZiB5b3UgaGF2ZW4ndCBzY3JvbGxlZCBtb3JlIHRoYW4gc2Nyb2xsT2Zmc2V0XHJcbiAgICAgICAgICAgICAgICBtYWluSGVhZGVyLnJlbW92ZUNsYXNzKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgIHNlY29uZGFyeU5hdmlnYXRpb24uYWRkQ2xhc3MoJ2ZpeGVkJykucmVtb3ZlQ2xhc3MoJ3NsaWRlLXVwJyk7XHJcbiAgICAgICAgICAgICAgICBiZWxvd05hdkhlcm9Db250ZW50LmFkZENsYXNzKCdzZWNvbmRhcnktbmF2LWZpeGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbiJdfQ==
