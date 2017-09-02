// (function() {
//   'use strict';
//
//   setTimeout(function() {
//     document.querySelector('.greating_picture').classList.add('m--show');
//   }, 1000);
// })();

$(document).ready(function(){
    $('.materialboxed').materialbox();
});

// jQuery(document).ready(function() {
//     jQuery('ul.sf-menu').superfish();
// });
// $(document).ready(function(){
//     $('.carousel.carousel-slider').carousel({fullWidth: true});
//     $(".dropdown-button").dropdown();
//
//
//
//     function theRotator() {
//             // Устанавливаем прозрачность всех картинок в 0
//             $('div#rotator ul li').css({opacity: 0.0});
//
//             // Берем первую картинку и показываем ее (по пути включаем полную видимость)
//             $('div#rotator ul li:first').css({opacity: 1.0});
//
//             // Вызываем функцию rotate для запуска слайдшоу, 5000 = смена картинок происходит раз в 5 секунд
//             setInterval('rotate()',5000);
//         }
//
//     function rotate() {
//         // Берем первую картинку
//         var current = ($('div#rotator ul li.show')? $('div#rotator ul li.show') : $('div#rotator ul li:first'));
//
//         // Берем следующую картинку, когда дойдем до последней начинаем с начала
//         var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('div#rotator ul li:first') :current.next()) : $('div#rotator ul li:first'));
//
//         // Расскомментируйте, чтобы показвать картинки в случайном порядке
//         // var sibs = current.siblings();
//         // var rndNum = Math.floor(Math.random() * sibs.length );
//         // var next = $( sibs[ rndNum ] );
//
//         // Подключаем эффект растворения/затухания для показа картинок, css-класс show имеет больший z-index
//         next.css({opacity: 0.0})
//             .addClass('show')
//             .animate({opacity: 1.0}, 1000);
//
//         // Прячем текущую картинку
//         current.animate({opacity: 0.0}, 1000)
//             .removeClass('show');
//     };
//
//     $(document).ready(function() {
//         // Запускаем слайдшоу
//         theRotator();
//     });
//
//
// });
//
//
// var img_next = 1;
//
// function changeSlide(slides) {
//     // создаём массив с 4 именами картинок.
//     var slides = new Array(1, 2, 3, 4);
//     document.getElementById('rotator').style.background = 'url(/images/'+document.getElementById('slide_current').value+'.jpg) no-repeat';
//
//     // проверка значения счётчика, чтобы он не вышел за рамки массива.
//     if (slides.length == img_next) {
//         img_next = 1;
//     } else {
//         img_next++;
//     }
//
//     // сохраняем значение счётчика в переменную.
//     document.getElementById('slide_current').value = img_next;
// }
//
// // смена слайда каждые 5 секунд
// setInterval(changeSlide, 5000);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIChmdW5jdGlvbigpIHtcclxuLy8gICAndXNlIHN0cmljdCc7XHJcbi8vXHJcbi8vICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVhdGluZ19waWN0dXJlJykuY2xhc3NMaXN0LmFkZCgnbS0tc2hvdycpO1xyXG4vLyAgIH0sIDEwMDApO1xyXG4vLyB9KSgpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICQoJy5tYXRlcmlhbGJveGVkJykubWF0ZXJpYWxib3goKTtcclxufSk7XHJcblxyXG4vLyBqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgalF1ZXJ5KCd1bC5zZi1tZW51Jykuc3VwZXJmaXNoKCk7XHJcbi8vIH0pO1xyXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4vLyAgICAgJCgnLmNhcm91c2VsLmNhcm91c2VsLXNsaWRlcicpLmNhcm91c2VsKHtmdWxsV2lkdGg6IHRydWV9KTtcclxuLy8gICAgICQoXCIuZHJvcGRvd24tYnV0dG9uXCIpLmRyb3Bkb3duKCk7XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vICAgICBmdW5jdGlvbiB0aGVSb3RhdG9yKCkge1xyXG4vLyAgICAgICAgICAgICAvLyDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQv9GA0L7Qt9GA0LDRh9C90L7RgdGC0Ywg0LLRgdC10YUg0LrQsNGA0YLQuNC90L7QuiDQsiAwXHJcbi8vICAgICAgICAgICAgICQoJ2RpdiNyb3RhdG9yIHVsIGxpJykuY3NzKHtvcGFjaXR5OiAwLjB9KTtcclxuLy9cclxuLy8gICAgICAgICAgICAgLy8g0JHQtdGA0LXQvCDQv9C10YDQstGD0Y4g0LrQsNGA0YLQuNC90LrRgyDQuCDQv9C+0LrQsNC30YvQstCw0LXQvCDQtdC1ICjQv9C+INC/0YPRgtC4INCy0LrQu9GO0YfQsNC10Lwg0L/QvtC70L3Rg9GOINCy0LjQtNC40LzQvtGB0YLRjClcclxuLy8gICAgICAgICAgICAgJCgnZGl2I3JvdGF0b3IgdWwgbGk6Zmlyc3QnKS5jc3Moe29wYWNpdHk6IDEuMH0pO1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAvLyDQktGL0LfRi9Cy0LDQtdC8INGE0YPQvdC60YbQuNGOIHJvdGF0ZSDQtNC70Y8g0LfQsNC/0YPRgdC60LAg0YHQu9Cw0LnQtNGI0L7RgywgNTAwMCA9INGB0LzQtdC90LAg0LrQsNGA0YLQuNC90L7QuiDQv9GA0L7QuNGB0YXQvtC00LjRgiDRgNCw0Lcg0LIgNSDRgdC10LrRg9C90LRcclxuLy8gICAgICAgICAgICAgc2V0SW50ZXJ2YWwoJ3JvdGF0ZSgpJyw1MDAwKTtcclxuLy8gICAgICAgICB9XHJcbi8vXHJcbi8vICAgICBmdW5jdGlvbiByb3RhdGUoKSB7XHJcbi8vICAgICAgICAgLy8g0JHQtdGA0LXQvCDQv9C10YDQstGD0Y4g0LrQsNGA0YLQuNC90LrRg1xyXG4vLyAgICAgICAgIHZhciBjdXJyZW50ID0gKCQoJ2RpdiNyb3RhdG9yIHVsIGxpLnNob3cnKT8gJCgnZGl2I3JvdGF0b3IgdWwgbGkuc2hvdycpIDogJCgnZGl2I3JvdGF0b3IgdWwgbGk6Zmlyc3QnKSk7XHJcbi8vXHJcbi8vICAgICAgICAgLy8g0JHQtdGA0LXQvCDRgdC70LXQtNGD0Y7RidGD0Y4g0LrQsNGA0YLQuNC90LrRgywg0LrQvtCz0LTQsCDQtNC+0LnQtNC10Lwg0LTQviDQv9C+0YHQu9C10LTQvdC10Lkg0L3QsNGH0LjQvdCw0LXQvCDRgSDQvdCw0YfQsNC70LBcclxuLy8gICAgICAgICB2YXIgbmV4dCA9ICgoY3VycmVudC5uZXh0KCkubGVuZ3RoKSA/ICgoY3VycmVudC5uZXh0KCkuaGFzQ2xhc3MoJ3Nob3cnKSkgPyAkKCdkaXYjcm90YXRvciB1bCBsaTpmaXJzdCcpIDpjdXJyZW50Lm5leHQoKSkgOiAkKCdkaXYjcm90YXRvciB1bCBsaTpmaXJzdCcpKTtcclxuLy9cclxuLy8gICAgICAgICAvLyDQoNCw0YHRgdC60L7QvNC80LXQvdGC0LjRgNGD0LnRgtC1LCDRh9GC0L7QsdGLINC/0L7QutCw0LfQstCw0YLRjCDQutCw0YDRgtC40L3QutC4INCyINGB0LvRg9GH0LDQudC90L7QvCDQv9C+0YDRj9C00LrQtVxyXG4vLyAgICAgICAgIC8vIHZhciBzaWJzID0gY3VycmVudC5zaWJsaW5ncygpO1xyXG4vLyAgICAgICAgIC8vIHZhciBybmROdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaWJzLmxlbmd0aCApO1xyXG4vLyAgICAgICAgIC8vIHZhciBuZXh0ID0gJCggc2lic1sgcm5kTnVtIF0gKTtcclxuLy9cclxuLy8gICAgICAgICAvLyDQn9C+0LTQutC70Y7Rh9Cw0LXQvCDRjdGE0YTQtdC60YIg0YDQsNGB0YLQstC+0YDQtdC90LjRjy/Qt9Cw0YLRg9GF0LDQvdC40Y8g0LTQu9GPINC/0L7QutCw0LfQsCDQutCw0YDRgtC40L3QvtC6LCBjc3Mt0LrQu9Cw0YHRgSBzaG93INC40LzQtdC10YIg0LHQvtC70YzRiNC40Lkgei1pbmRleFxyXG4vLyAgICAgICAgIG5leHQuY3NzKHtvcGFjaXR5OiAwLjB9KVxyXG4vLyAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3Nob3cnKVxyXG4vLyAgICAgICAgICAgICAuYW5pbWF0ZSh7b3BhY2l0eTogMS4wfSwgMTAwMCk7XHJcbi8vXHJcbi8vICAgICAgICAgLy8g0J/RgNGP0YfQtdC8INGC0LXQutGD0YnRg9GOINC60LDRgNGC0LjQvdC60YNcclxuLy8gICAgICAgICBjdXJyZW50LmFuaW1hdGUoe29wYWNpdHk6IDAuMH0sIDEwMDApXHJcbi8vICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4vLyAgICAgfTtcclxuLy9cclxuLy8gICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgIC8vINCX0LDQv9GD0YHQutCw0LXQvCDRgdC70LDQudC00YjQvtGDXHJcbi8vICAgICAgICAgdGhlUm90YXRvcigpO1xyXG4vLyAgICAgfSk7XHJcbi8vXHJcbi8vXHJcbi8vIH0pO1xyXG4vL1xyXG4vL1xyXG4vLyB2YXIgaW1nX25leHQgPSAxO1xyXG4vL1xyXG4vLyBmdW5jdGlvbiBjaGFuZ2VTbGlkZShzbGlkZXMpIHtcclxuLy8gICAgIC8vINGB0L7Qt9C00LDRkdC8INC80LDRgdGB0LjQsiDRgSA0INC40LzQtdC90LDQvNC4INC60LDRgNGC0LjQvdC+0LouXHJcbi8vICAgICB2YXIgc2xpZGVzID0gbmV3IEFycmF5KDEsIDIsIDMsIDQpO1xyXG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0b3InKS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybCgvaW1hZ2VzLycrZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlX2N1cnJlbnQnKS52YWx1ZSsnLmpwZykgbm8tcmVwZWF0JztcclxuLy9cclxuLy8gICAgIC8vINC/0YDQvtCy0LXRgNC60LAg0LfQvdCw0YfQtdC90LjRjyDRgdGH0ZHRgtGH0LjQutCwLCDRh9GC0L7QsdGLINC+0L0g0L3QtSDQstGL0YjQtdC7INC30LAg0YDQsNC80LrQuCDQvNCw0YHRgdC40LLQsC5cclxuLy8gICAgIGlmIChzbGlkZXMubGVuZ3RoID09IGltZ19uZXh0KSB7XHJcbi8vICAgICAgICAgaW1nX25leHQgPSAxO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICBpbWdfbmV4dCsrO1xyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgLy8g0YHQvtGF0YDQsNC90Y/QtdC8INC30L3QsNGH0LXQvdC40LUg0YHRh9GR0YLRh9C40LrQsCDQsiDQv9C10YDQtdC80LXQvdC90YPRji5cclxuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZV9jdXJyZW50JykudmFsdWUgPSBpbWdfbmV4dDtcclxuLy8gfVxyXG4vL1xyXG4vLyAvLyDRgdC80LXQvdCwINGB0LvQsNC50LTQsCDQutCw0LbQtNGL0LUgNSDRgdC10LrRg9C90LRcclxuLy8gc2V0SW50ZXJ2YWwoY2hhbmdlU2xpZGUsIDUwMDApOyJdfQ==
