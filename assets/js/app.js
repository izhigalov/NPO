// (function() {
//   'use strict';
//
//   setTimeout(function() {
//     document.querySelector('.greating_picture').classList.add('m--show');
//   }, 1000);
// })();


$(document).ready(function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $(".dropdown-button").dropdown();



    function theRotator() {
            // Устанавливаем прозрачность всех картинок в 0
            $('div#rotator ul li').css({opacity: 0.0});

            // Берем первую картинку и показываем ее (по пути включаем полную видимость)
            $('div#rotator ul li:first').css({opacity: 1.0});

            // Вызываем функцию rotate для запуска слайдшоу, 5000 = смена картинок происходит раз в 5 секунд
            setInterval('rotate()',5000);
        }

    function rotate() {
        // Берем первую картинку
        var current = ($('div#rotator ul li.show')? $('div#rotator ul li.show') : $('div#rotator ul li:first'));

        // Берем следующую картинку, когда дойдем до последней начинаем с начала
        var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('div#rotator ul li:first') :current.next()) : $('div#rotator ul li:first'));

        // Расскомментируйте, чтобы показвать картинки в случайном порядке
        // var sibs = current.siblings();
        // var rndNum = Math.floor(Math.random() * sibs.length );
        // var next = $( sibs[ rndNum ] );

        // Подключаем эффект растворения/затухания для показа картинок, css-класс show имеет больший z-index
        next.css({opacity: 0.0})
            .addClass('show')
            .animate({opacity: 1.0}, 1000);

        // Прячем текущую картинку
        current.animate({opacity: 0.0}, 1000)
            .removeClass('show');
    };

    $(document).ready(function() {
        // Запускаем слайдшоу
        theRotator();
    });


});


var img_next = 1;

function changeSlide(slides) {
    // создаём массив с 4 именами картинок.
    var slides = new Array(1, 2, 3, 4);
    document.getElementById('rotator').style.background = 'url(/images/'+document.getElementById('slide_current').value+'.jpg) no-repeat';

    // проверка значения счётчика, чтобы он не вышел за рамки массива.
    if (slides.length == img_next) {
        img_next = 1;
    } else {
        img_next++;
    }

    // сохраняем значение счётчика в переменную.
    document.getElementById('slide_current').value = img_next;
}

// смена слайда каждые 5 секунд
setInterval(changeSlide, 5000);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIChmdW5jdGlvbigpIHtcclxuLy8gICAndXNlIHN0cmljdCc7XHJcbi8vXHJcbi8vICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVhdGluZ19waWN0dXJlJykuY2xhc3NMaXN0LmFkZCgnbS0tc2hvdycpO1xyXG4vLyAgIH0sIDEwMDApO1xyXG4vLyB9KSgpO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuY2Fyb3VzZWwuY2Fyb3VzZWwtc2xpZGVyJykuY2Fyb3VzZWwoe2Z1bGxXaWR0aDogdHJ1ZX0pO1xyXG4gICAgJChcIi5kcm9wZG93bi1idXR0b25cIikuZHJvcGRvd24oKTtcclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHRoZVJvdGF0b3IoKSB7XHJcbiAgICAgICAgICAgIC8vINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC/0YDQvtC30YDQsNGH0L3QvtGB0YLRjCDQstGB0LXRhSDQutCw0YDRgtC40L3QvtC6INCyIDBcclxuICAgICAgICAgICAgJCgnZGl2I3JvdGF0b3IgdWwgbGknKS5jc3Moe29wYWNpdHk6IDAuMH0pO1xyXG5cclxuICAgICAgICAgICAgLy8g0JHQtdGA0LXQvCDQv9C10YDQstGD0Y4g0LrQsNGA0YLQuNC90LrRgyDQuCDQv9C+0LrQsNC30YvQstCw0LXQvCDQtdC1ICjQv9C+INC/0YPRgtC4INCy0LrQu9GO0YfQsNC10Lwg0L/QvtC70L3Rg9GOINCy0LjQtNC40LzQvtGB0YLRjClcclxuICAgICAgICAgICAgJCgnZGl2I3JvdGF0b3IgdWwgbGk6Zmlyc3QnKS5jc3Moe29wYWNpdHk6IDEuMH0pO1xyXG5cclxuICAgICAgICAgICAgLy8g0JLRi9C30YvQstCw0LXQvCDRhNGD0L3QutGG0LjRjiByb3RhdGUg0LTQu9GPINC30LDQv9GD0YHQutCwINGB0LvQsNC50LTRiNC+0YMsIDUwMDAgPSDRgdC80LXQvdCwINC60LDRgNGC0LjQvdC+0Log0L/RgNC+0LjRgdGF0L7QtNC40YIg0YDQsNC3INCyIDUg0YHQtdC60YPQvdC0XHJcbiAgICAgICAgICAgIHNldEludGVydmFsKCdyb3RhdGUoKScsNTAwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJvdGF0ZSgpIHtcclxuICAgICAgICAvLyDQkdC10YDQtdC8INC/0LXRgNCy0YPRjiDQutCw0YDRgtC40L3QutGDXHJcbiAgICAgICAgdmFyIGN1cnJlbnQgPSAoJCgnZGl2I3JvdGF0b3IgdWwgbGkuc2hvdycpPyAkKCdkaXYjcm90YXRvciB1bCBsaS5zaG93JykgOiAkKCdkaXYjcm90YXRvciB1bCBsaTpmaXJzdCcpKTtcclxuXHJcbiAgICAgICAgLy8g0JHQtdGA0LXQvCDRgdC70LXQtNGD0Y7RidGD0Y4g0LrQsNGA0YLQuNC90LrRgywg0LrQvtCz0LTQsCDQtNC+0LnQtNC10Lwg0LTQviDQv9C+0YHQu9C10LTQvdC10Lkg0L3QsNGH0LjQvdCw0LXQvCDRgSDQvdCw0YfQsNC70LBcclxuICAgICAgICB2YXIgbmV4dCA9ICgoY3VycmVudC5uZXh0KCkubGVuZ3RoKSA/ICgoY3VycmVudC5uZXh0KCkuaGFzQ2xhc3MoJ3Nob3cnKSkgPyAkKCdkaXYjcm90YXRvciB1bCBsaTpmaXJzdCcpIDpjdXJyZW50Lm5leHQoKSkgOiAkKCdkaXYjcm90YXRvciB1bCBsaTpmaXJzdCcpKTtcclxuXHJcbiAgICAgICAgLy8g0KDQsNGB0YHQutC+0LzQvNC10L3RgtC40YDRg9C50YLQtSwg0YfRgtC+0LHRiyDQv9C+0LrQsNC30LLQsNGC0Ywg0LrQsNGA0YLQuNC90LrQuCDQsiDRgdC70YPRh9Cw0LnQvdC+0Lwg0L/QvtGA0Y/QtNC60LVcclxuICAgICAgICAvLyB2YXIgc2licyA9IGN1cnJlbnQuc2libGluZ3MoKTtcclxuICAgICAgICAvLyB2YXIgcm5kTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2licy5sZW5ndGggKTtcclxuICAgICAgICAvLyB2YXIgbmV4dCA9ICQoIHNpYnNbIHJuZE51bSBdICk7XHJcblxyXG4gICAgICAgIC8vINCf0L7QtNC60LvRjtGH0LDQtdC8INGN0YTRhNC10LrRgiDRgNCw0YHRgtCy0L7RgNC10L3QuNGPL9C30LDRgtGD0YXQsNC90LjRjyDQtNC70Y8g0L/QvtC60LDQt9CwINC60LDRgNGC0LjQvdC+0LosIGNzcy3QutC70LDRgdGBIHNob3cg0LjQvNC10LXRgiDQsdC+0LvRjNGI0LjQuSB6LWluZGV4XHJcbiAgICAgICAgbmV4dC5jc3Moe29wYWNpdHk6IDAuMH0pXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnc2hvdycpXHJcbiAgICAgICAgICAgIC5hbmltYXRlKHtvcGFjaXR5OiAxLjB9LCAxMDAwKTtcclxuXHJcbiAgICAgICAgLy8g0J/RgNGP0YfQtdC8INGC0LXQutGD0YnRg9GOINC60LDRgNGC0LjQvdC60YNcclxuICAgICAgICBjdXJyZW50LmFuaW1hdGUoe29wYWNpdHk6IDAuMH0sIDEwMDApXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyDQl9Cw0L/Rg9GB0LrQsNC10Lwg0YHQu9Cw0LnQtNGI0L7Rg1xyXG4gICAgICAgIHRoZVJvdGF0b3IoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcbnZhciBpbWdfbmV4dCA9IDE7XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VTbGlkZShzbGlkZXMpIHtcclxuICAgIC8vINGB0L7Qt9C00LDRkdC8INC80LDRgdGB0LjQsiDRgSA0INC40LzQtdC90LDQvNC4INC60LDRgNGC0LjQvdC+0LouXHJcbiAgICB2YXIgc2xpZGVzID0gbmV3IEFycmF5KDEsIDIsIDMsIDQpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0b3InKS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybCgvaW1hZ2VzLycrZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlX2N1cnJlbnQnKS52YWx1ZSsnLmpwZykgbm8tcmVwZWF0JztcclxuXHJcbiAgICAvLyDQv9GA0L7QstC10YDQutCwINC30L3QsNGH0LXQvdC40Y8g0YHRh9GR0YLRh9C40LrQsCwg0YfRgtC+0LHRiyDQvtC9INC90LUg0LLRi9GI0LXQuyDQt9CwINGA0LDQvNC60Lgg0LzQsNGB0YHQuNCy0LAuXHJcbiAgICBpZiAoc2xpZGVzLmxlbmd0aCA9PSBpbWdfbmV4dCkge1xyXG4gICAgICAgIGltZ19uZXh0ID0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW1nX25leHQrKztcclxuICAgIH1cclxuXHJcbiAgICAvLyDRgdC+0YXRgNCw0L3Rj9C10Lwg0LfQvdCw0YfQtdC90LjQtSDRgdGH0ZHRgtGH0LjQutCwINCyINC/0LXRgNC10LzQtdC90L3Rg9GOLlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlX2N1cnJlbnQnKS52YWx1ZSA9IGltZ19uZXh0O1xyXG59XHJcblxyXG4vLyDRgdC80LXQvdCwINGB0LvQsNC50LTQsCDQutCw0LbQtNGL0LUgNSDRgdC10LrRg9C90LRcclxuc2V0SW50ZXJ2YWwoY2hhbmdlU2xpZGUsIDUwMDApOyJdfQ==
