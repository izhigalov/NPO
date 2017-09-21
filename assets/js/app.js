
$(document).ready(function(){
    $('.parallax').parallax();
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


new LookForward('.js-lookforward');


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcucGFyYWxsYXgnKS5wYXJhbGxheCgpO1xyXG4gICAgJCgnI25hdi1pY29uMScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxudmFyIGh1bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtaWNvbjEnKTtcclxudmFyIGFzaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FzaWRlJyk7XHJcbnZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbF9fd3JhcCcpO1xyXG52YXIgZmVlZGJhY2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlZGJhY2tCdG4nKTtcclxudmFyIGNsb3NlTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VNb2RhbCcpO1xyXG5odW0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGFzaWRlLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxufTtcclxuZmVlZGJhY2tCdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAoJ2Jsb2NrJylcclxufTtcclxuY2xvc2VNb2RhbC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICgnbm9uZScpXHJcbn07XHJcblxyXG5cclxubmV3IExvb2tGb3J3YXJkKCcuanMtbG9va2ZvcndhcmQnKTtcclxuXHJcbiJdfQ==
