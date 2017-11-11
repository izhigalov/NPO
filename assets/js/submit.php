<?php
if(!empty($_POST['name']) AND !empty($_POST['email']) AND !empty($_POST['message']) AND !empty($_POST['phone'])){

    $theme = 'Новое сообщение';

    $letter = 'Данные сообщения:\r\n';
    $letter .='Имя: '.$_POST['name'].'\r\n';
    $letter .='Email: '.$_POST['email'].'\r\n';
    $letter .='Телефон: '.$_POST['phone'].'\r\n';
    $letter .='Сообщение: '.$_POST['message'].'\r\n';

    if (mail('rim10@inbox.ru', $theme, $letter)){
    echo "Сообщение отправлено!";
    } else {
      echo "Ошибка при отправке!";
    }
} else {
  echo "Ошибка: Заполните все поля!"ж
}