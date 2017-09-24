
$(document).ready(function(){
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
    });
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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcucGFyYWxsYXgnKS5wYXJhbGxheCgpO1xyXG4gICAgJCgnLmNvbGxhcHNpYmxlJykuY29sbGFwc2libGUoKTtcclxuICAgICQoJyNuYXYtaWNvbjEnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbnZhciBodW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWljb24xJyk7XHJcbnZhciBhc2lkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhc2lkZScpO1xyXG52YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxfX3dyYXAnKTtcclxudmFyIGZlZWRiYWNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWRiYWNrQnRuJyk7XHJcbnZhciBjbG9zZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlTW9kYWwnKTtcclxuaHVtLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBhc2lkZS5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbn07XHJcbmZlZWRiYWNrQnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gKCdibG9jaycpXHJcbn07XHJcbmNsb3NlTW9kYWwub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAoJ25vbmUnKVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCl7XHJcbiAgICB2YXIgbWFpbkhlYWRlciA9ICQoJy5oZWFkZXInKSxcclxuICAgICAgICBzZWNvbmRhcnlOYXZpZ2F0aW9uID0gJCgnLmNkLXNlY29uZGFyeS1uYXYnKSxcclxuICAgICAgICAvL3RoaXMgYXBwbGllcyBvbmx5IGlmIHNlY29uZGFyeSBuYXYgaXMgYmVsb3cgaW50cm8gc2VjdGlvblxyXG4gICAgICAgIGJlbG93TmF2SGVyb0NvbnRlbnQgPSAkKCcuc3ViLW5hdi1oZXJvJyksXHJcbiAgICAgICAgaGVhZGVySGVpZ2h0ID0gbWFpbkhlYWRlci5oZWlnaHQoKTtcclxuXHJcbiAgICAvL3NldCBzY3JvbGxpbmcgdmFyaWFibGVzXHJcbiAgICB2YXIgc2Nyb2xsaW5nID0gZmFsc2UsXHJcbiAgICAgICAgcHJldmlvdXNUb3AgPSAwLFxyXG4gICAgICAgIGN1cnJlbnRUb3AgPSAwLFxyXG4gICAgICAgIHNjcm9sbERlbHRhID0gMTAsXHJcbiAgICAgICAgc2Nyb2xsT2Zmc2V0ID0gMTUwO1xyXG5cclxuICAgIG1haW5IZWFkZXIub24oJ2NsaWNrJywgJy5uYXYtdHJpZ2dlcicsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAvLyBvcGVuIHByaW1hcnkgbmF2aWdhdGlvbiBvbiBtb2JpbGVcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG1haW5IZWFkZXIudG9nZ2xlQ2xhc3MoJ25hdi1vcGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoICFzY3JvbGxpbmcgKSB7XHJcbiAgICAgICAgICAgIHNjcm9sbGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSlcclxuICAgICAgICAgICAgICAgID8gc2V0VGltZW91dChhdXRvSGlkZUhlYWRlciwgMjUwKVxyXG4gICAgICAgICAgICAgICAgOiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXV0b0hpZGVIZWFkZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBoZWFkZXJIZWlnaHQgPSBtYWluSGVhZGVyLmhlaWdodCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gYXV0b0hpZGVIZWFkZXIoKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgICggYmVsb3dOYXZIZXJvQ29udGVudC5sZW5ndGggPiAwIClcclxuICAgICAgICAgICAgPyBjaGVja1N0aWNreU5hdmlnYXRpb24oY3VycmVudFRvcCkgLy8gc2Vjb25kYXJ5IG5hdmlnYXRpb24gYmVsb3cgaW50cm9cclxuICAgICAgICAgICAgOiBjaGVja1NpbXBsZU5hdmlnYXRpb24oY3VycmVudFRvcCk7XHJcblxyXG4gICAgICAgIHByZXZpb3VzVG9wID0gY3VycmVudFRvcDtcclxuICAgICAgICBzY3JvbGxpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja1NpbXBsZU5hdmlnYXRpb24oY3VycmVudFRvcCkge1xyXG4gICAgICAgIC8vdGhlcmUncyBubyBzZWNvbmRhcnkgbmF2IG9yIHNlY29uZGFyeSBuYXYgaXMgYmVsb3cgcHJpbWFyeSBuYXZcclxuICAgICAgICBpZiAocHJldmlvdXNUb3AgLSBjdXJyZW50VG9wID4gc2Nyb2xsRGVsdGEpIHtcclxuICAgICAgICAgICAgLy9pZiBzY3JvbGxpbmcgdXAuLi5cclxuICAgICAgICAgICAgbWFpbkhlYWRlci5yZW1vdmVDbGFzcygnaXMtaGlkZGVuJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKCBjdXJyZW50VG9wIC0gcHJldmlvdXNUb3AgPiBzY3JvbGxEZWx0YSAmJiBjdXJyZW50VG9wID4gc2Nyb2xsT2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIC8vaWYgc2Nyb2xsaW5nIGRvd24uLi5cclxuICAgICAgICAgICAgbWFpbkhlYWRlci5hZGRDbGFzcygnaXMtaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrU3RpY2t5TmF2aWdhdGlvbihjdXJyZW50VG9wKSB7XHJcbiAgICAgICAgLy9zZWNvbmRhcnkgbmF2IGJlbG93IGludHJvIHNlY3Rpb24gLSBzdGlja3kgc2Vjb25kYXJ5IG5hdlxyXG4gICAgICAgIHZhciBzZWNvbmRhcnlOYXZPZmZzZXRUb3AgPSBiZWxvd05hdkhlcm9Db250ZW50Lm9mZnNldCgpLnRvcCAtIHNlY29uZGFyeU5hdmlnYXRpb24uaGVpZ2h0KCkgLSBtYWluSGVhZGVyLmhlaWdodCgpO1xyXG5cclxuICAgICAgICBpZiAocHJldmlvdXNUb3AgPj0gY3VycmVudFRvcCApIHtcclxuICAgICAgICAgICAgLy9pZiBzY3JvbGxpbmcgdXAuLi5cclxuICAgICAgICAgICAgaWYoIGN1cnJlbnRUb3AgPCBzZWNvbmRhcnlOYXZPZmZzZXRUb3AgKSB7XHJcbiAgICAgICAgICAgICAgICAvL3NlY29uZGFyeSBuYXYgaXMgbm90IGZpeGVkXHJcbiAgICAgICAgICAgICAgICBtYWluSGVhZGVyLnJlbW92ZUNsYXNzKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgIHNlY29uZGFyeU5hdmlnYXRpb24ucmVtb3ZlQ2xhc3MoJ2ZpeGVkIHNsaWRlLXVwJyk7XHJcbiAgICAgICAgICAgICAgICBiZWxvd05hdkhlcm9Db250ZW50LnJlbW92ZUNsYXNzKCdzZWNvbmRhcnktbmF2LWZpeGVkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiggcHJldmlvdXNUb3AgLSBjdXJyZW50VG9wID4gc2Nyb2xsRGVsdGEgKSB7XHJcbiAgICAgICAgICAgICAgICAvL3NlY29uZGFyeSBuYXYgaXMgZml4ZWRcclxuICAgICAgICAgICAgICAgIG1haW5IZWFkZXIucmVtb3ZlQ2xhc3MoJ2lzLWhpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5TmF2aWdhdGlvbi5yZW1vdmVDbGFzcygnc2xpZGUtdXAnKS5hZGRDbGFzcygnZml4ZWQnKTtcclxuICAgICAgICAgICAgICAgIGJlbG93TmF2SGVyb0NvbnRlbnQuYWRkQ2xhc3MoJ3NlY29uZGFyeS1uYXYtZml4ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL2lmIHNjcm9sbGluZyBkb3duLi4uXHJcbiAgICAgICAgICAgIGlmKCBjdXJyZW50VG9wID4gc2Vjb25kYXJ5TmF2T2Zmc2V0VG9wICsgc2Nyb2xsT2Zmc2V0ICkge1xyXG4gICAgICAgICAgICAgICAgLy9oaWRlIHByaW1hcnkgbmF2XHJcbiAgICAgICAgICAgICAgICBtYWluSGVhZGVyLmFkZENsYXNzKCdpcy1oaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgIHNlY29uZGFyeU5hdmlnYXRpb24uYWRkQ2xhc3MoJ2ZpeGVkIHNsaWRlLXVwJyk7XHJcbiAgICAgICAgICAgICAgICBiZWxvd05hdkhlcm9Db250ZW50LmFkZENsYXNzKCdzZWNvbmRhcnktbmF2LWZpeGVkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiggY3VycmVudFRvcCA+IHNlY29uZGFyeU5hdk9mZnNldFRvcCApIHtcclxuICAgICAgICAgICAgICAgIC8vb25jZSB0aGUgc2Vjb25kYXJ5IG5hdiBpcyBmaXhlZCwgZG8gbm90IGhpZGUgcHJpbWFyeSBuYXYgaWYgeW91IGhhdmVuJ3Qgc2Nyb2xsZWQgbW9yZSB0aGFuIHNjcm9sbE9mZnNldFxyXG4gICAgICAgICAgICAgICAgbWFpbkhlYWRlci5yZW1vdmVDbGFzcygnaXMtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlOYXZpZ2F0aW9uLmFkZENsYXNzKCdmaXhlZCcpLnJlbW92ZUNsYXNzKCdzbGlkZS11cCcpO1xyXG4gICAgICAgICAgICAgICAgYmVsb3dOYXZIZXJvQ29udGVudC5hZGRDbGFzcygnc2Vjb25kYXJ5LW5hdi1maXhlZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4iXX0=
