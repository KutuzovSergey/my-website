<?php
// print_r($_POST);
$method = $_SERVER['REQUEST_METHOD'];
//Script Foreach
$c = true;
if ( $method === 'POST' ) {
   
   $name = trim($_POST["name"]);
   $email  = trim($_POST["email"]);
   $number = trim($_POST["number"]);
   $messages  = trim($_POST["messages"]);
   $service = $_POST["service"];
   $privacy = $_POST["privacy"];
   
   foreach ( $_POST as $key => $value ) {
      if ( $value != "" && $key != "name" && $key != "email" && $key != "number" && $key != "messages" && $key != "number") {
         $message .= "
         " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
            <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
            <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
         </tr>
         ";
      }
   }
} else if ( $method === 'GET' ) {
   $name = trim($_POST["name"]);
   $email  = trim($_POST["email"]);
   $number = trim($_POST["number"]);
   $messages  = trim($_POST["messages"]);
   $service = $_POST["service"];
   $privacy = $_POST["privacy"];

   foreach ( $_GET as $key => $value ) {
      if ( $value != "" && $key != "name" && $key != "email" && $key != "number" && $key != "messages" ) {
         $message .= "
         " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
            <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
            <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
         </tr>
         ";
      }
   }
}
$admin_email = "pas.sergei2014@yandex.ru";

$message = "<table style='width: 100%;'>$message</table>";
function adopt($text) {
   return '=?UTF-8?B?'.Base64_encode($text).'?=';
}
$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers );

      Сообщение: '.$message,"Content-type:text/html;charset=utf-8");
?>