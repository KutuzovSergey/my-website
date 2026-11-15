<?php

if(isset($_POST['submit'])){
$to = "pas.sergei2014@yandex.ru"; // Здесь нужно написать e-mail, куда будут приходить письма
$first_name = $_POST['first_name'];
$phone = $_POST['phone_number'];
$subject = "Форма отправки сообщений с сайта";
$subject2 = "Copy of your form submission";
$message = $first_name . " оставил заявку:" . "\n\n" . "Телефон: " . $phone;

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to,$subject,$message,$headers);

echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вами.";
echo "<br /><br /><a href='http://www.bredli.ru/myWork/drummers/index.php'>Вернуться на сайт.</a>";

}
else{
	$first_name = $_POST['first_name'];
	$phone = $_POST['phone_number'];
	echo "Имя" . $first_name;
	echo "Телефон - " . $phone;
}

?>

<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="http://www.bredli.ru/myWork/drummers/index.php");}
window.setTimeout("changeurl();",6000);
</script>