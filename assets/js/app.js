// (function() {
//   'use strict';
//
//   setTimeout(function() {
//     document.querySelector('.greating_picture').classList.add('m--show');
//   }, 1000);
// })();

// $(document).ready(function(){
//     $('.materialboxed').materialbox();
// });
// $('.carousel.carousel-slider').carousel({fullWidth: true});
$(document).ready(function(){
    $('.parallax').parallax();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIChmdW5jdGlvbigpIHtcclxuLy8gICAndXNlIHN0cmljdCc7XHJcbi8vXHJcbi8vICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVhdGluZ19waWN0dXJlJykuY2xhc3NMaXN0LmFkZCgnbS0tc2hvdycpO1xyXG4vLyAgIH0sIDEwMDApO1xyXG4vLyB9KSgpO1xyXG5cclxuLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuLy8gICAgICQoJy5tYXRlcmlhbGJveGVkJykubWF0ZXJpYWxib3goKTtcclxuLy8gfSk7XHJcbi8vICQoJy5jYXJvdXNlbC5jYXJvdXNlbC1zbGlkZXInKS5jYXJvdXNlbCh7ZnVsbFdpZHRoOiB0cnVlfSk7XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcucGFyYWxsYXgnKS5wYXJhbGxheCgpO1xyXG59KTtcclxuLy8galF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuLy8gICAgIGpRdWVyeSgndWwuc2YtbWVudScpLnN1cGVyZmlzaCgpO1xyXG4vLyB9KTtcclxuLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuLy8gICAgICQoJy5jYXJvdXNlbC5jYXJvdXNlbC1zbGlkZXInKS5jYXJvdXNlbCh7ZnVsbFdpZHRoOiB0cnVlfSk7XHJcbi8vICAgICAkKFwiLmRyb3Bkb3duLWJ1dHRvblwiKS5kcm9wZG93bigpO1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgZnVuY3Rpb24gdGhlUm90YXRvcigpIHtcclxuLy8gICAgICAgICAgICAgLy8g0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0L/RgNC+0LfRgNCw0YfQvdC+0YHRgtGMINCy0YHQtdGFINC60LDRgNGC0LjQvdC+0Log0LIgMFxyXG4vLyAgICAgICAgICAgICAkKCdkaXYjcm90YXRvciB1bCBsaScpLmNzcyh7b3BhY2l0eTogMC4wfSk7XHJcbi8vXHJcbi8vICAgICAgICAgICAgIC8vINCR0LXRgNC10Lwg0L/QtdGA0LLRg9GOINC60LDRgNGC0LjQvdC60YMg0Lgg0L/QvtC60LDQt9GL0LLQsNC10Lwg0LXQtSAo0L/QviDQv9GD0YLQuCDQstC60LvRjtGH0LDQtdC8INC/0L7Qu9C90YPRjiDQstC40LTQuNC80L7RgdGC0YwpXHJcbi8vICAgICAgICAgICAgICQoJ2RpdiNyb3RhdG9yIHVsIGxpOmZpcnN0JykuY3NzKHtvcGFjaXR5OiAxLjB9KTtcclxuLy9cclxuLy8gICAgICAgICAgICAgLy8g0JLRi9C30YvQstCw0LXQvCDRhNGD0L3QutGG0LjRjiByb3RhdGUg0LTQu9GPINC30LDQv9GD0YHQutCwINGB0LvQsNC50LTRiNC+0YMsIDUwMDAgPSDRgdC80LXQvdCwINC60LDRgNGC0LjQvdC+0Log0L/RgNC+0LjRgdGF0L7QtNC40YIg0YDQsNC3INCyIDUg0YHQtdC60YPQvdC0XHJcbi8vICAgICAgICAgICAgIHNldEludGVydmFsKCdyb3RhdGUoKScsNTAwMCk7XHJcbi8vICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgZnVuY3Rpb24gcm90YXRlKCkge1xyXG4vLyAgICAgICAgIC8vINCR0LXRgNC10Lwg0L/QtdGA0LLRg9GOINC60LDRgNGC0LjQvdC60YNcclxuLy8gICAgICAgICB2YXIgY3VycmVudCA9ICgkKCdkaXYjcm90YXRvciB1bCBsaS5zaG93Jyk/ICQoJ2RpdiNyb3RhdG9yIHVsIGxpLnNob3cnKSA6ICQoJ2RpdiNyb3RhdG9yIHVsIGxpOmZpcnN0JykpO1xyXG4vL1xyXG4vLyAgICAgICAgIC8vINCR0LXRgNC10Lwg0YHQu9C10LTRg9GO0YnRg9GOINC60LDRgNGC0LjQvdC60YMsINC60L7Qs9C00LAg0LTQvtC50LTQtdC8INC00L4g0L/QvtGB0LvQtdC00L3QtdC5INC90LDRh9C40L3QsNC10Lwg0YEg0L3QsNGH0LDQu9CwXHJcbi8vICAgICAgICAgdmFyIG5leHQgPSAoKGN1cnJlbnQubmV4dCgpLmxlbmd0aCkgPyAoKGN1cnJlbnQubmV4dCgpLmhhc0NsYXNzKCdzaG93JykpID8gJCgnZGl2I3JvdGF0b3IgdWwgbGk6Zmlyc3QnKSA6Y3VycmVudC5uZXh0KCkpIDogJCgnZGl2I3JvdGF0b3IgdWwgbGk6Zmlyc3QnKSk7XHJcbi8vXHJcbi8vICAgICAgICAgLy8g0KDQsNGB0YHQutC+0LzQvNC10L3RgtC40YDRg9C50YLQtSwg0YfRgtC+0LHRiyDQv9C+0LrQsNC30LLQsNGC0Ywg0LrQsNGA0YLQuNC90LrQuCDQsiDRgdC70YPRh9Cw0LnQvdC+0Lwg0L/QvtGA0Y/QtNC60LVcclxuLy8gICAgICAgICAvLyB2YXIgc2licyA9IGN1cnJlbnQuc2libGluZ3MoKTtcclxuLy8gICAgICAgICAvLyB2YXIgcm5kTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2licy5sZW5ndGggKTtcclxuLy8gICAgICAgICAvLyB2YXIgbmV4dCA9ICQoIHNpYnNbIHJuZE51bSBdICk7XHJcbi8vXHJcbi8vICAgICAgICAgLy8g0J/QvtC00LrQu9GO0YfQsNC10Lwg0Y3RhNGE0LXQutGCINGA0LDRgdGC0LLQvtGA0LXQvdC40Y8v0LfQsNGC0YPRhdCw0L3QuNGPINC00LvRjyDQv9C+0LrQsNC30LAg0LrQsNGA0YLQuNC90L7QuiwgY3NzLdC60LvQsNGB0YEgc2hvdyDQuNC80LXQtdGCINCx0L7Qu9GM0YjQuNC5IHotaW5kZXhcclxuLy8gICAgICAgICBuZXh0LmNzcyh7b3BhY2l0eTogMC4wfSlcclxuLy8gICAgICAgICAgICAgLmFkZENsYXNzKCdzaG93JylcclxuLy8gICAgICAgICAgICAgLmFuaW1hdGUoe29wYWNpdHk6IDEuMH0sIDEwMDApO1xyXG4vL1xyXG4vLyAgICAgICAgIC8vINCf0YDRj9GH0LXQvCDRgtC10LrRg9GJ0YPRjiDQutCw0YDRgtC40L3QutGDXHJcbi8vICAgICAgICAgY3VycmVudC5hbmltYXRlKHtvcGFjaXR5OiAwLjB9LCAxMDAwKVxyXG4vLyAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuLy8gICAgIH07XHJcbi8vXHJcbi8vICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICAvLyDQl9Cw0L/Rg9GB0LrQsNC10Lwg0YHQu9Cw0LnQtNGI0L7Rg1xyXG4vLyAgICAgICAgIHRoZVJvdGF0b3IoKTtcclxuLy8gICAgIH0pO1xyXG4vL1xyXG4vL1xyXG4vLyB9KTtcclxuLy9cclxuLy9cclxuLy8gdmFyIGltZ19uZXh0ID0gMTtcclxuLy9cclxuLy8gZnVuY3Rpb24gY2hhbmdlU2xpZGUoc2xpZGVzKSB7XHJcbi8vICAgICAvLyDRgdC+0LfQtNCw0ZHQvCDQvNCw0YHRgdC40LIg0YEgNCDQuNC80LXQvdCw0LzQuCDQutCw0YDRgtC40L3QvtC6LlxyXG4vLyAgICAgdmFyIHNsaWRlcyA9IG5ldyBBcnJheSgxLCAyLCAzLCA0KTtcclxuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdG9yJykuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoL2ltYWdlcy8nK2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZV9jdXJyZW50JykudmFsdWUrJy5qcGcpIG5vLXJlcGVhdCc7XHJcbi8vXHJcbi8vICAgICAvLyDQv9GA0L7QstC10YDQutCwINC30L3QsNGH0LXQvdC40Y8g0YHRh9GR0YLRh9C40LrQsCwg0YfRgtC+0LHRiyDQvtC9INC90LUg0LLRi9GI0LXQuyDQt9CwINGA0LDQvNC60Lgg0LzQsNGB0YHQuNCy0LAuXHJcbi8vICAgICBpZiAoc2xpZGVzLmxlbmd0aCA9PSBpbWdfbmV4dCkge1xyXG4vLyAgICAgICAgIGltZ19uZXh0ID0gMTtcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgaW1nX25leHQrKztcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIC8vINGB0L7RhdGA0LDQvdGP0LXQvCDQt9C90LDRh9C10L3QuNC1INGB0YfRkdGC0YfQuNC60LAg0LIg0L/QtdGA0LXQvNC10L3QvdGD0Y4uXHJcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVfY3VycmVudCcpLnZhbHVlID0gaW1nX25leHQ7XHJcbi8vIH1cclxuLy9cclxuLy8gLy8g0YHQvNC10L3QsCDRgdC70LDQudC00LAg0LrQsNC20LTRi9C1IDUg0YHQtdC60YPQvdC0XHJcbi8vIHNldEludGVydmFsKGNoYW5nZVNsaWRlLCA1MDAwKTsiXX0=
